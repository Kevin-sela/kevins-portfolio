/**
 * Tiny generative lo-fi engine built on the Web Audio API.
 *
 * No audio files are downloaded: keys, bass, drums, melody and vinyl
 * crackle are synthesised on the fly with a look-ahead scheduler (the
 * standard "two clocks" pattern), which costs very little CPU. The context
 * is suspended whenever playback stops, so it is idle when paused.
 */

const BPM = 76;
const STEP = 60 / BPM / 4; // one 16th note, in seconds
const SWING = STEP * 0.22; // push off-beat 16ths late for a lazy feel
const LOOKAHEAD = 0.14; // seconds of audio scheduled ahead
const TICK_MS = 30;

// Fmaj9 → Em9 → Dm9 → Cmaj9 (descending, a classic lo-fi loop)
const CHORDS: { notes: number[]; bass: number }[] = [
  { notes: [53, 57, 60, 64, 67], bass: 41 },
  { notes: [52, 55, 59, 62, 66], bass: 40 },
  { notes: [50, 53, 57, 60, 64], bass: 38 },
  { notes: [48, 52, 55, 59, 62], bass: 36 }
];
const MELODY_SCALE = [72, 74, 76, 79, 81, 84]; // C major pentatonic, upper register

const KICK = new Set([0, 10]);
const GHOST_KICK = 7;
const SNARE = new Set([4, 12]);

const mtof = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

export class LofiEngine {
  private ctx: AudioContext;
  private master: GainNode;
  private music: GainNode;
  private drums: GainNode;
  private delayIn: GainNode;
  private wobble: GainNode;
  private noise: AudioBuffer;
  private crackleSrc: AudioBufferSourceNode | null = null;
  private timer: number | null = null;
  private nextTime = 0;
  private step = 0;
  private bar = 0;
  playing = false;

  constructor() {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new Ctx({ latencyHint: "playback" });
    const ctx = this.ctx;

    // master chain: warm low-pass → glue compressor → fade gain
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    comp.attack.value = 0.01;
    comp.release.value = 0.25;
    const tone = ctx.createBiquadFilter();
    tone.type = "lowpass";
    tone.frequency.value = 3600;
    tone.Q.value = 0.3;
    tone.connect(comp).connect(this.master).connect(ctx.destination);

    this.music = ctx.createGain();
    this.music.gain.value = 0.9;
    this.music.connect(tone);
    this.drums = ctx.createGain();
    this.drums.gain.value = 0.75;
    this.drums.connect(tone);

    // dotted-8th echo for the melody
    this.delayIn = ctx.createGain();
    const delay = ctx.createDelay(2);
    delay.delayTime.value = STEP * 6;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const delayTone = ctx.createBiquadFilter();
    delayTone.type = "lowpass";
    delayTone.frequency.value = 1800;
    this.delayIn.connect(delay);
    delay.connect(delayTone).connect(fb).connect(delay);
    delayTone.connect(this.music);

    // tape wow: one slow LFO feeding every oscillator's detune
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.45;
    this.wobble = ctx.createGain();
    this.wobble.gain.value = 7; // cents
    lfo.connect(this.wobble);
    lfo.start();

    // shared white-noise buffer (drums + crackle)
    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    this.startCrackle();
  }

  private startCrackle() {
    const ctx = this.ctx;
    const len = ctx.sampleRate * 3;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * 0.012; // soft hiss
      if (Math.random() < 0.00045) d[i] += (Math.random() * 2 - 1) * 0.6; // pops
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 900;
    const g = ctx.createGain();
    g.gain.value = 0.35;
    src.connect(hp).connect(g).connect(this.music);
    src.start();
    this.crackleSrc = src;
  }

  private keys(midi: number, t: number, dur: number, vel: number) {
    const ctx = this.ctx;
    const f = mtof(midi);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, t);
    env.gain.exponentialRampToValueAtTime(0.055 * vel, t + 0.012);
    env.gain.exponentialRampToValueAtTime(0.018 * vel, t + 0.9);
    env.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.5);
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(2400, t);
    lp.frequency.exponentialRampToValueAtTime(900, t + 1.2);
    env.connect(lp).connect(this.music);

    const body = ctx.createOscillator();
    body.type = "sine";
    body.frequency.value = f;
    body.detune.value = (Math.random() - 0.5) * 8;
    this.wobble.connect(body.detune);
    body.connect(env);

    const bell = ctx.createOscillator();
    bell.type = "triangle";
    bell.frequency.value = f * 2;
    const bellGain = ctx.createGain();
    bellGain.gain.setValueAtTime(0.18, t);
    bellGain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
    this.wobble.connect(bell.detune);
    bell.connect(bellGain).connect(env);

    const end = t + dur + 0.6;
    body.start(t);
    bell.start(t);
    body.stop(end);
    bell.stop(end);
    body.onended = () => {
      this.wobble.disconnect(body.detune);
      this.wobble.disconnect(bell.detune);
    };
  }

  private bass(midi: number, t: number, dur: number) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.value = mtof(midi);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.32, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.music);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  private kick(t: number, vel = 1) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(115, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.9 * vel, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
    o.connect(g).connect(this.drums);
    o.start(t);
    o.stop(t + 0.4);
  }

  private noiseHit(t: number, type: BiquadFilterType, freq: number, gain: number, decay: number) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
    src.connect(f).connect(g).connect(this.drums);
    src.start(t, Math.random() * 1.5);
    src.stop(t + decay + 0.02);
  }

  private melodyNote(t: number) {
    const ctx = this.ctx;
    const midi = MELODY_SCALE[Math.floor(Math.random() * MELODY_SCALE.length)];
    const o = ctx.createOscillator();
    o.type = "triangle";
    o.frequency.value = mtof(midi);
    this.wobble.connect(o.detune);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.03, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    o.connect(g);
    g.connect(this.music);
    g.connect(this.delayIn);
    o.start(t);
    o.stop(t + 0.75);
    o.onended = () => this.wobble.disconnect(o.detune);
  }

  private scheduleStep(step: number, t: number) {
    const chord = CHORDS[this.bar % CHORDS.length];
    const swungT = step % 2 === 1 ? t + SWING : t;
    const barDur = STEP * 16;

    if (step === 0) {
      chord.notes.forEach((n, i) => this.keys(n, t + i * 0.018, barDur * 0.55, 1));
      this.bass(chord.bass, t, STEP * 7);
    }
    if (step === 10) {
      // soft re-voice on "3-and", top notes only
      chord.notes.slice(2).forEach((n, i) => this.keys(n, swungT + i * 0.014, barDur * 0.3, 0.55));
      this.bass(chord.bass + (Math.random() < 0.4 ? 7 : 0), t, STEP * 5);
    }

    if (KICK.has(step)) this.kick(t);
    if (step === GHOST_KICK && Math.random() < 0.5) this.kick(swungT, 0.45);
    if (SNARE.has(step)) {
      this.noiseHit(t, "bandpass", 1700, 0.32, 0.2);
      this.noiseHit(t, "lowpass", 400, 0.12, 0.08);
    }
    if (step % 2 === 0 || Math.random() < 0.2) {
      const accent = step % 4 === 0 ? 0.06 : 0.035;
      this.noiseHit(swungT, "highpass", 7500, accent, step === 14 && Math.random() < 0.3 ? 0.22 : 0.045);
    }
    // sparse melody on the 2nd half of the loop
    if (this.bar % 4 >= 2 && step % 2 === 0 && Math.random() < 0.2) this.melodyNote(swungT);
  }

  private tick = () => {
    const horizon = this.ctx.currentTime + LOOKAHEAD;
    while (this.nextTime < horizon) {
      this.scheduleStep(this.step, this.nextTime);
      this.nextTime += STEP;
      this.step = (this.step + 1) % 16;
      if (this.step === 0) this.bar++;
    }
  };

  async play() {
    if (this.playing) return;
    this.playing = true;
    await this.ctx.resume();
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0.8, now + 1.6);
    this.nextTime = now + 0.06;
    this.step = 0;
    this.tick();
    this.timer = window.setInterval(this.tick, TICK_MS);
  }

  async pause() {
    if (!this.playing) return;
    this.playing = false;
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0, now + 0.5);
    await new Promise((r) => window.setTimeout(r, 560));
    if (!this.playing) await this.ctx.suspend();
  }

  dispose() {
    if (this.timer !== null) window.clearInterval(this.timer);
    this.crackleSrc?.stop();
    void this.ctx.close();
  }
}
