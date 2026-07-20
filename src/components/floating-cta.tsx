import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <a href="#contact" className="floating-cta" aria-label="Let's talk">
      <MessageCircle className="h-5 w-5" />
      <span>Let&rsquo;s Talk</span>
    </a>
  );
}
