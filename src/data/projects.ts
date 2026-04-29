export const projects = [
  {
    title: "Stark Architects Palette",
    badge: "Featured",
    description:
      "Production-grade design system tool with accessibility checks, real-time preview, and reusable architecture.",
    tech: ["React", "Node.js", "TypeScript", "SCSS"],
    imageClass: "project-stark",
    href: "https://stark-architects-palette-62.vercel.app/"
  },
  {
    title: "Yanioba — Road Safety Platform",
    badge: "Featured",
    description:
      "Real-time road safety reporting system for Ghana, live alerts, and community-driven reporting.",
    tech: ["React Native", "Node.js", "Socket.io"],
    imageClass: "project-yanioba",
    previewSrc: "/assets/yanioba-screens.html",
    href: "https://www.yanioba.com/"
  },
  {
    title: "NeiMart — E-commerce Platform",
    badge: "",
    description:
      "Marketplace with product listings, search, cart, checkout, and secure user flows.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    imageClass: "project-neimart",
    href: "https://github.com/Kevin-sela/NeiMart"
  },
  {
    title: "Cyber Threat Security Detector",
    badge: "",
    description:
      "AI-based anomaly detection system for threat monitoring, traffic analysis, and risk scoring.",
    tech: ["Python", "FastAPI", "TensorFlow"],
    imageClass: "project-cyber",
    href: "https://github.com/Kevin-sela/cyber-threat-security-detector"
  }
] as const;
