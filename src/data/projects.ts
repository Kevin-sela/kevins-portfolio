export type Project = {
  title: string;
  badge?: string;
  description: string;
  tech: readonly string[];
  imageClass: string;
  imageSrc: string;
  /** Optional phone screenshot shown as an overlapping device mockup */
  mobileSrc?: string;
  href: string;
  /** Short label for the browser-frame address bar */
  domain?: string;
  /** Promote to the wide, full-row layout */
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "Asiewie — Funeral Services Marketplace",
    badge: "Live · Web + Android",
    description:
      "A web and Android platform that helps Ghanaian families find trusted funeral providers (funeral homes, caterers, hearses, venues, photographers) by region, publish funeral arrangements, and message providers directly.",
    tech: ["Next.js", "Android", "Messaging", "Search & Filters"],
    imageClass: "project-asiewie",
    imageSrc: "/images/projects/asiewie/asiewie-desktop.webp",
    mobileSrc: "/images/projects/asiewie/asiewie-mobile.webp",
    href: "https://asiewie.com/",
    domain: "asiewie.com",
    featured: true
  },
  {
    title: "CyberSmart Workplace - Cybersecurity E-learning",
    badge: "Featured",
    description:
      "A practical cybersecurity awareness platform with interactive lessons, knowledge checks, and learner progress tracking for working professionals.",
    tech: ["Next.js", "React", "TypeScript", "FastAPI"],
    imageClass: "project-cybersmart",
    imageSrc: "/images/projects/cybersmart/cybersmart-desktop.webp",
    href: "https://cybersmart-workplace.vercel.app/",
    domain: "cybersmart-workplace.vercel.app"
  },
  {
    title: "Yanioba — Road Safety Platform",
    badge: "Featured",
    description:
      "Real-time road safety reporting system for Ghana, live alerts, and community-driven reporting.",
    tech: ["React Native", "Node.js", "Socket.io"],
    imageClass: "project-yanioba",
    imageSrc: "/images/projects/yanioba/yanioba-desktop.webp",
    mobileSrc: "/WhatsApp%20Image%202026-06-29%20at%204.14.50%20PM%20(1).jpeg",
    href: "https://www.yanioba.com/",
    domain: "yanioba.com"
  },
  {
    title: "Relitix Brokerage Performance Platform",
    badge: "Professional",
    description:
      "Real-time APIs and services supporting brokerage performance metrics, listing insights, and market intelligence.",
    tech: ["Python", "REST APIs", "AWS", "Docker"],
    imageClass: "project-relitix",
    imageSrc: "/images/projects/relitix/relitix-desktop.webp",
    href: "https://relitix.com/",
    domain: "relitix.com"
  },
  {
    title: "AI-BizGRA — Business & Tax Management",
    badge: "Prototype",
    description:
      "A bookkeeping concept for Ghanaian small businesses, bringing sales, inventory, payments, payroll, and GRA tax preparation into one workflow. The supplied project is a scaffold with desktop and mobile screen designs.",
    tech: ["Next.js", "Flutter", "FastAPI", "PostgreSQL"],
    imageClass: "project-ai-bizgra",
    imageSrc: "/images/projects/ai-bizgra/reference-screenshot.png",
    href: "/images/projects/ai-bizgra/reference-screenshot.png"
  },
  {
    title: "Hospital Management System",
    badge: "Healthcare",
    description:
      "A hospital operations system concept with patient registration and records, staff workflows, doctor consultations, and administrative reporting.",
    tech: ["Patient Records", "Staff Management", "Clinical Workflows", "Reporting"],
    imageClass: "project-hospital-management",
    imageSrc: "/images/projects/hospital-management/hospital-screen-1.png",
    href: "/images/projects/hospital-management/hospital-screen-1.png"
  }
];
