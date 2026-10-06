"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      className="grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const message = String(formData.get("message") ?? "");
        window.location.href = `mailto:kofori787@gmail.com?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
      }}
    >
      <p className="text-sm leading-relaxed text-slate-400">
        Submitting opens your email app with your message ready to send. If it doesn’t open, email{" "}
        <a className="text-sky-300 underline underline-offset-4" href="mailto:kofori787@gmail.com">kofori787@gmail.com</a> directly.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300" htmlFor="contact-name">
          Name
          <Input id="contact-name" name="name" autoComplete="name" required placeholder="Your name" className="input" />
        </label>
        <label className="grid gap-2 text-sm text-slate-300" htmlFor="contact-email">
          Email
          <Input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="input" />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-300" htmlFor="contact-message">
        Message
        <Textarea id="contact-message" name="message" required rows={6} placeholder="How can I help?" className="textarea" />
      </label>
      <Button type="submit" className="w-full">
        Open Email App <Send className="h-4 w-4 transition group-hover:translate-x-1" />
      </Button>
    </form>
  );
}
