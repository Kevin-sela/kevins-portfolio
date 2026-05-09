"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Twitter, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { easeOutExpo } from "@/lib/motion";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Kevin-sela" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kelvin-ofori" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/kelvinofori_dev" },
    { icon: Zap, label: "Portfolio", href: "#home" },
  ];

  return (
    <motion.section
      id="contact"
      className="section"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.74, ease: easeOutExpo }}
    >
      <div className="container contact-grid">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, ease: easeOutExpo, delay: 0.04 }}
        >
          <SectionHeading eyebrow="Let's Connect" title="Let's Build Something Amazing Together" />
          <div className="mt-6 grid gap-4 text-sm text-slate-300">
            <a href="mailto:kofori787@gmail.com" className="flex items-center gap-3 transition hover:text-violet-300">
              <Mail className="h-5 w-5" /> kofori787@gmail.com
            </a>
            <a href="tel:+233000000000" className="flex items-center gap-3 transition hover:text-violet-300">
              <Phone className="h-5 w-5" /> +233 XXX XXX XXX
            </a>
            <span className="flex items-center gap-3">
              <MapPin className="h-5 w-5" /> Accra, Ghana
            </span>
            <a href="https://github.com/Kevin-sela" className="flex items-center gap-3 transition hover:text-violet-300">
              <Github className="h-5 w-5" /> github.com/Kevin-sela
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.66, ease: easeOutExpo, delay: 0.1 }}
        >
          <Card className="p-5">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div
          className="grid gap-6 lg:col-span-2"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.62, ease: easeOutExpo, delay: 0.16 }}
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400">Education</p>
            <Card className="mt-4 p-5">
              <div className="flex gap-4">
                <div className="rounded-full bg-violet-500/20 p-3 text-violet-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">BSc Information Technology</h3>
                  <p className="mt-1 text-sm text-slate-400">BSc in Information Technology</p>
                  <p className="mt-1 text-xs text-violet-300/80 font-semibold">Currently Enrolled</p>
                  <p className="mt-3 text-sm text-slate-300">Accra Institute of Technology</p>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400">Follow Me</p>
            <div className="mt-4 flex gap-3">
              {socials.map((socialItem, index) => (
                <motion.a
                  key={socialItem.label}
                  href={socialItem.href}
                  aria-label={socialItem.label}
                  className="rounded-lg border border-white/10 bg-slate-900/75 p-3 text-slate-300 transition hover:border-violet-400 hover:text-violet-300"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.2 + index * 0.04 }}
                >
                  <socialItem.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
