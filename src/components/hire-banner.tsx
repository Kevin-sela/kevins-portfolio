import { ArrowRight, Briefcase } from "lucide-react";

export function HireBanner() {
  return (
    <a href="#contact" className="hire-top-banner">
      <span className="hire-top-banner-dot" />
      <Briefcase className="h-4 w-4" />
      <span>Available for Backend / Full-Stack Roles &mdash; Remote Friendly</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
