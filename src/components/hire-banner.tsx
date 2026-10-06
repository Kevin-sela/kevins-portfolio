import { ArrowRight } from "lucide-react";

export function HireBanner() {
  return (
    <a href="#contact" className="hire-top-banner">
      <span className="hire-top-banner-dot" />
      <span>Available for Backend / Full-Stack Roles · Remote Friendly</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
