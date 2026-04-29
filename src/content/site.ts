import type { LucideIcon } from "lucide-react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  FileDown,
  ArrowUpRight,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  gallery?: string[];
  links: { label: string; href: string; icon?: LucideIcon }[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
};

export const person = {
  name: "Kelvin Ofori",
  title: "Software Engineer",
  avatar: "/me.jpg",
  tagline:
    "Full-stack engineer specializing in .NET (C#) + React - building reliable APIs and product-grade web apps.",
  location: "Accra, Ghana",
  email: "kelvinofori@example.com",
  heroBullets: [
    "7+ years building across web + backend (freelance -> product teams).",
    "Hackathon winner mindset: fast MVPs with polished UX and real architecture.",
    "Strong in solution design, system analysis, and clean, maintainable code.",
  ],
  quickFacts: [
    { icon: MapPin, label: "Based in", value: "Accra, Ghana" },
    { icon: Mail, label: "Email", value: "kelvinofori@example.com" },
    { icon: FileDown, label: "Resume", value: "/resume/Kelvin_Ofori_org_Resume.docx" },
  ],
} as const;

export const nav = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "featured", label: "Featured" },
  { id: "contact", label: "Contact" },
] as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Kevin-sela", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/blacq_mamba", icon: Instagram },
];

export const projects: Project[] = [
  {
    name: "ERP System (Innorik)",
    description:
      "A full ERP suite with role-based access, reporting, and operational workflows - built end-to-end.",
    highlights: [
      "Secure auth: JWT + ASP.NET Identity with protected APIs",
      "Production-grade UI: React + TypeScript + Tailwind, optimized for workflows",
      "Quality mindset: unit testing and QA-led post-production verification",
    ],
    tech: ["C#", ".NET", "React", "TypeScript", "Tailwind", "JWT", "SQL"],
    image: "/projects/erp.svg",
    gallery: ["/projects/erp.svg"],
    links: [
      { label: "Case study", href: "#contact", icon: ArrowUpRight },
      { label: "Code (private)", href: "#", icon: Github },
    ],
  },
  {
    name: "Client websites (Freelance)",
    description:
      "Custom websites and web apps for startups and institutions - with fast iteration and on-time delivery.",
    highlights: [
      "Owned delivery: discovery -> design -> build -> deploy",
      "Performance-first responsive UI with SEO fundamentals",
      "Direct client collaboration: scope, feedback loops, and launch support",
    ],
    tech: ["React", "Node.js", "Firebase", "Vercel", "AWS", "Cloudflare"],
    image: "/projects/freelance.svg",
    gallery: ["/projects/freelance.svg"],
    links: [{ label: "Ask for links", href: "#contact", icon: ArrowUpRight }],
  },
  {
    name: "Hackathon prototypes",
    description:
      "Rapid prototypes that validate ideas quickly - with clean architecture even under time pressure.",
    highlights: [
      "Quickly scoped MVPs with polished UX",
      "APIs + frontend wired end-to-end",
      "Pitch-ready demos with reliable flows",
    ],
    tech: ["React", "GraphQL", "NestJS", "Azure", "Render"],
    image: "/projects/hackathon.svg",
    gallery: ["/projects/hackathon.svg"],
    links: [{ label: "Talk about it", href: "#contact", icon: ArrowUpRight }],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Backend Software Engineer",
    company: "Aptiveon Technologies (client: Relitix)",
    start: "2023",
    end: "Present",
    bullets: [
      "Architected and maintained scalable REST APIs and microservices for real-time systems.",
      "Deployed and managed services on AWS EC2, S3, and Lambda.",
      "Used Docker and Kubernetes for containerization and orchestration.",
      "Optimized performance using Cython.",
      "Integrated enterprise systems via secure APIs.",
    ],
    tech: ["Python", "AWS", "Docker", "Kubernetes", "Cython", "REST APIs"],
  },
  {
    role: "Software Developer",
    company: "INNORIK USA",
    start: "Aug 2022",
    end: "Jun 2023",
    bullets: [
      "Led unit and post-production testing in collaboration with QA.",
      "Shipped features and improvements on legacy systems.",
      "Built an ERP system using C#/.NET, React, TypeScript, and Tailwind CSS.",
      "Secured the app using JWT authentication and ASP.NET Identity.",
    ],
    tech: ["C#", ".NET", "React", "TypeScript", "Tailwind", "SQL", "JWT"],
  },
  {
    role: "Freelance Website Developer",
    company: "Self-Employed",
    start: "Jul 2016",
    end: "Jun 2022",
    bullets: [
      "Designed and delivered websites/web apps for startups and institutions.",
      "Worked directly with clients to define needs and ship on time and on spec.",
      "Owned deployments and maintenance for multiple small business sites.",
    ],
    tech: ["React", "Node.js", "Firebase", "AWS", "Vercel", "Cloudflare"],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "React Router",
      "React Hook Form",
      "Angular",
      "Vue",
    ],
  },
  {
    group: "Backend",
    items: ["C#", ".NET", "Node.js", "NestJS", "GraphQL", "TypeGraphQL", "Express"],
  },
  { group: "Data", items: ["SQL", "MongoDB", "MySQL", "DynamoDB", "Oracle", "Prisma"] },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Cloudflare",
      "Vercel",
      "Render",
      "Nginx",
      "Apache",
      "GitHub Actions",
      "GitLab CI",
    ],
  },
  { group: "Other", items: ["Rust", "Java", "Firebase", "OpenStack", "Expo", "Flutter"] },
] as const;

export const education = [
  { school: "Accra University of Technology", program: "BSc Information Technology (Ongoing)" },
] as const;
