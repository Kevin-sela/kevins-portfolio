"use client";

import { ArrowUpRight, Check, Copy, FileDown, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { TimezoneStrip } from "@/components/timezone-strip";

const EMAIL = "kofori787@gmail.com";

const links = [
  { label: "LinkedIn", detail: "linkedin.com/in/kelvin-ofori-dev", href: "https://www.linkedin.com/in/kelvin-ofori-dev", icon: Linkedin },
  { label: "GitHub", detail: "github.com/Kevin-sela", href: "https://github.com/Kevin-sela", icon: Github },
  { label: "Résumé", detail: "Download .docx", href: "/resume/Kelvin_Ofori_org_Resume.docx", icon: FileDown, download: true },
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let's build something reliable" />
        <p className="section-lede">
          Open to backend, full-stack and cloud roles, remote or relocating. The fastest way to reach me is email.
        </p>

        <div className="email-card spot" data-reveal>
          <a href={`mailto:${EMAIL}`} className="email-address">
            {EMAIL}
          </a>
          <button type="button" className={`copy-btn${copied ? " is-done" : ""}`} onClick={copy} aria-live="polite">
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <ul className="contact-links">
          {links.map(({ label, detail, href, icon: Icon, ...rest }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                download={"download" in rest ? true : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="contact-link-label">{label}</span>
                <span className="contact-link-detail">{detail}</span>
                <ArrowUpRight className="contact-link-arrow h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <TimezoneStrip />

        <details className="contact-form-wrap">
          <summary>Prefer a form? Write a message here</summary>
          <div className="contact-form-body">
            <ContactForm />
          </div>
        </details>
      </div>
    </section>
  );
}
