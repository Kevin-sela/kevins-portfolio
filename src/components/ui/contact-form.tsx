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
      <div className="grid gap-3 sm:grid-cols-2">
        <Input name="name" required placeholder="Your Name" className="input" />
        <Input name="email" type="email" required placeholder="Your Email" className="input" />
      </div>
      <Textarea name="message" required rows={6} placeholder="Your Message" className="textarea" />
      <Button type="submit" className="w-full">
        Send Message <Send className="h-4 w-4 transition group-hover:translate-x-1" />
      </Button>
    </form>
  );
}
