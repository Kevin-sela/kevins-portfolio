export const projects = [
  {
    title: "Stark Architects Palette",
    badge: "Featured",
    description:
      "Production-grade design system tool with accessibility checks, real-time preview, and reusable architecture.",
    tech: ["React", "Node.js", "TypeScript", "SCSS"],
    imageClass: "project-stark",
    imageSrc: "/images/projects/stark.svg",
    href: "https://stark-architects-palette-62.vercel.app/"
  },
  {
    title: "Yanioba — Road Safety Platform",
    badge: "Featured",
    description:
      "Real-time road safety reporting system for Ghana, live alerts, and community-driven reporting.",
    tech: ["React Native", "Node.js", "Socket.io"],
    imageClass: "project-yanioba",
    imageSrc: "/WhatsApp%20Image%202026-06-29%20at%204.14.50%20PM%20(1).jpeg",
    href: "https://www.yanioba.com/"
  },
  {
    title: "Relitix Brokerage Performance Platform",
    badge: "Professional",
    description:
      "Real-time APIs and services supporting brokerage performance metrics, listing insights, and market intelligence.",
    tech: ["Python", "REST APIs", "AWS", "Docker"],
    imageClass: "project-relitix",
    imageSrc: "/assets/relitix-homepage.webp",
    href: "https://relitix.com/"
  },
  {
    title: "Asiewie Mobile App",
    badge: "Mobile",
    description:
      "A mobile platform for discovering funeral services and upcoming funerals, and sharing funeral or service announcements.",
    tech: ["Mobile App", "Community Platform"],
    imageClass: "project-asiewie",
    imageSrc: "/assets/asiewie-mobile.webp",
    href: "https://asiewie.com/"
  },
  {
    title: "NeiMart — E-commerce Platform",
    badge: "",
    description:
      "Marketplace with product listings, search, cart, checkout, and secure user flows.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    imageClass: "project-neimart",
    imageSrc: "/images/projects/neimart.svg",
    href: "https://github.com/Kevin-sela/NeiMart"
  },
  {
    title: "Cyber Threat Security Detector",
    badge: "",
    description:
      "AI-based anomaly detection system for threat monitoring, traffic analysis, and risk scoring.",
    tech: ["Python", "FastAPI", "TensorFlow"],
    imageClass: "project-cyber",
    imageSrc: "/images/projects/cyber.svg",
    href: "https://github.com/Kevin-sela/cyber-threat-security-detector"
  }
] as const;
