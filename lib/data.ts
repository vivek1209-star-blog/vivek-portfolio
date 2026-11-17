// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all portfolio content.
// Everything here comes from Vivek Mishra's real resume / Naukri
// profile (Nov 2026). Items marked [PLACEHOLDER] need real data.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Vivek Mishra",
  firstName: "Vivek",
  title: "Full Stack Developer (MERN)",
  tagline:
    "I build scalable fintech & SaaS products — payments, multi-tenant platforms, real-time dashboards and React Native apps.",
  location: "Mumbai, India",
  email: "vivekmishra1209@gmail.com",
  phone: "+91 9930728882",
  availability: "Open to Full-Stack roles · 1 month notice (negotiable)",
  url: "https://vivek-portfolio-six-nu.vercel.app/", // ← update to your actual Vercel URL after first deploy
  resumePath: "/resume.pdf",
  photo: "/profile.jpg",
  rotatingTitles: [
    "Full Stack Developer (MERN)",
    "Fintech & Payments Engineer",
    "React · Node.js · React Native",
    "Open-Source Author (npm)",
  ],
  // short proof-points shown under the hero tagline
  highlights: ["4.8 yrs experience", "3 live fintech & SaaS products", "npm library author", "React Native · Angular 17"],
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/vivek1209-star-blog", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vivek-mishra-19941b113", icon: "linkedin" },
  { label: "Medium", href: "https://medium.com/@mishra.vivek9612", icon: "medium" },
  { label: "npm", href: "https://www.npmjs.com/package/react-bulk-excel-import", icon: "npm" },
] as const;

export const ABOUT = {
  summary:
    "Full Stack Developer with 4.8 years of experience building scalable, secure web applications across fintech, payments, healthcare, and CRM domains. Strong expertise in React.js, Redux, Node.js, Express, MySQL, MongoDB, React Native and TypeScript — with hands-on payment gateway integrations (BillDesk, Razorpay), BBPS workflows, multi-role authentication, and real-time dashboards. Author of react-bulk-excel-import, an open-source npm library. Working knowledge of Angular (Angular 17 via personal projects). Notice period: 1 month (negotiable).",
  journey: [
    {
      year: "2021",
      title: "Started the journey",
      body: "Completed MCA and began as an intern at Patharitch, then joined Code B as a Software Engineer building React Native healthcare & survey apps.",
    },
    {
      year: "2022",
      title: "Senior Frontend Developer",
      body: "Joined Boldsoftmation LLP — built a multi-department CRM platform (leads, invoices, follow-ups, dispatch) with React, Material UI and Redux Thunk, plus a React Native Lead Management app for Android & iOS.",
    },
    {
      year: "2024",
      title: "Enterprise fintech UIs",
      body: "At Adecco, built high-performance UIs for the Mahindra Finance web application with React, Vite, Tailwind CSS, and Redux Saga.",
    },
    {
      year: "2025",
      title: "Full-stack ownership",
      body: "Joined Champion Software Technologies — building three production fintech & SaaS products end-to-end: a BBPS bill-payment platform, MasterPe merchant onboarding and 360Pass.",
    },
    {
      year: "2026",
      title: "Open source & beyond",
      body: "Published react-bulk-excel-import on npm, earned the Learning Docker certificate, built a MERN CI/CD pipeline on Kubernetes, and keep writing about React & Node.js on Medium and LinkedIn.",
    },
  ],
};

export const EXPERIENCE = [
  {
    company: "Champion Software Technologies",
    role: "Full Stack Developer (MERN)",
    period: "Aug 2025 — Present",
    location: "Mumbai, India",
    logo: "/logos/champion.png",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MySQL", "Sequelize", "BillDesk", "Razorpay"],
    points: [
      "Building three production fintech & SaaS products end-to-end: a BBPS bill-payment platform, MasterPe (KYC-based merchant onboarding with Aadhaar/PAN upload and admin panel) and 360Pass, a multi-tenant society & gate-management system.",
      "Integrated BillDesk and Razorpay gateways with complete BBPS workflows — bill fetch, validation, payment, reconciliation — with idempotent webhook handling and fault-tolerant REST APIs.",
      "Built multi-role authentication & access control (Super Admin, Society Admin, Resident, Gatekeeper) with session-sync auto-logout on access revocation.",
      "Developed the 360Pass front-end with a scalable page → hook → store architecture, a reusable component library, and a real-time gate-presence dashboard with live visitor tracking.",
      "Designed a bulk Excel import system (residents, flats) with validation preview and batched ingestion — published as the open-source npm library react-bulk-excel-import.",
    ],
  },
  {
    company: "Adecco India",
    role: "Software Developer",
    period: "Jul 2024 — Mar 2025",
    location: "Mumbai, India",
    logo: "/logos/adecco.png",
    tech: ["React", "Vite", "Tailwind CSS", "Redux Saga", "REST APIs"],
    points: [
      "Built responsive, high-performance UIs for a financial web application (Mahindra Finance) using React, Vite, and Tailwind CSS.",
      "Managed complex application state with Redux and Redux Saga, improving state predictability and reducing UI bugs.",
      "Reduced initial load time through Vite-based code splitting, lazy loading, and bundle optimization.",
    ],
  },
  {
    company: "Boldsoftmation LLP",
    role: "Senior Frontend Developer",
    period: "Aug 2022 — May 2024",
    location: "Mumbai, India",
    logo: "/logos/boldsoftmation.png",
    tech: ["React", "Material UI", "Redux Thunk", "React Native", "REST APIs"],
    points: [
      "Designed and developed a multi-department CRM platform covering leads, invoices, follow-ups, and dispatch modules.",
      "Built responsive, reusable UI components and managed application state across modules with Redux Thunk.",
      "Built a Lead Management mobile app in React Native for Android & iOS — add, assign and track leads with follow-up reminders; handled navigation, login flow, API integration and release builds.",
    ],
  },
  {
    company: "Code B",
    role: "Software Engineer",
    period: "Sep 2021 — Jun 2022",
    location: "Mumbai, India",
    logo: "/logos/codeb.png",
    tech: ["React Native", "React", "Node.js", "Express", "MongoDB", "Angular"],
    points: [
      "Developed cross-platform React Native apps (Android focus) for healthcare and survey products — Mito Healthcare and Survey Magic.",
      "Built and enhanced React.js web features including UI development and REST API integration.",
      "Built APIs and fixed production issues with Node.js, Express, and MongoDB; delivered an Angular module for a client project.",
    ],
  },
  {
    company: "Patharitch Pvt Ltd",
    role: "Front End Developer Intern",
    period: "Jun 2021 — Sep 2021",
    location: "Mumbai, India",
    logo: "/logos/patharitch.png",
    tech: ["Angular", "TypeScript", "HTML5", "CSS3"],
    points: ["Built UI screens with Angular, TypeScript, HTML5 and CSS3; integrated REST APIs and resolved UI issues."],
  },
];

export type SkillGroup = { category: string; skills: { name: string; level: number }[] };

// levels are self-assessed proficiency (0–100) — tune as you like
export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES2024)", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 85 },
      { name: "Angular 17", level: 60 },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native (Android & iOS)", level: 80 },
      { name: "Navigation & Release Builds", level: 72 },
      { name: "Firebase Cloud Messaging", level: 75 },
    ],
  },
  {
    category: "State Management",
    skills: [
      { name: "Redux Toolkit", level: 90 },
      { name: "Redux Saga", level: 80 },
      { name: "Redux Thunk", level: 88 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST API Design", level: 88 },
      { name: "WebSockets", level: 72 },
    ],
  },
  {
    category: "Database & ORM",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "Sequelize ORM", level: 82 },
    ],
  },
  {
    category: "Payments & Fintech",
    skills: [
      { name: "BillDesk Integration", level: 85 },
      { name: "Razorpay", level: 85 },
      { name: "BBPS Workflows", level: 88 },
      { name: "Webhooks & Reconciliation", level: 85 },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git / GitHub / GitLab", level: 88 },
      { name: "CI/CD (GitHub Actions)", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Kubernetes (basics)", level: 50 },
      { name: "npm publishing", level: 85 },
    ],
  },
];

export const TECH_MARQUEE = [
  "React", "TypeScript", "Node.js", "Express", "MySQL", "MongoDB", "Redux",
  "Tailwind CSS", "Sequelize", "React Native", "BillDesk", "Razorpay",
  "Git", "Docker", "GitHub Actions", "Kubernetes", "Vite", "Material UI", "WebSockets", "REST APIs", "Angular", "Firebase",
];

export const PROJECTS = [
  {
    title: "react-bulk-excel-import",
    subtitle: "Open-source npm library",
    role: "Author & Maintainer",
    period: "2026 — Present",
    image: "/projects/react-bulk-excel-import.png",
    tech: ["TypeScript", "React", "SheetJS", "ESM + CJS", "npm"],
    description:
      "A TypeScript React library for one-line bulk Excel/CSV import: drag-and-drop modal, smart header matching, 3-layer validation with error preview, template download, and batched API ingestion with progress — plus a headless hook.",
    features: [
      "Drag-and-drop import modal with smart header matching",
      "3-layer validation with row-level error preview",
      "Template download & batched API ingestion with progress",
      "Headless hook for full UI control · ESM + CJS with full types",
    ],
    challenges:
      "Designing a validation pipeline that stays fast on large sheets while giving row-level, human-readable errors.",
    solutions:
      "Layered validation (schema → row → async server checks) with chunked, batched ingestion and progress callbacks.",
    links: {
      github: "https://github.com/vivek1209-star-blog/react-bulk-excel-import",
      live: "https://www.npmjs.com/package/react-bulk-excel-import",
      caseStudy: null,
    },
  },
  {
    title: "360Pass",
    subtitle: "Society & Gate-Management SaaS",
    role: "Full-Stack Developer (end-to-end)",
    period: "Jan 2026 — Present",
    image: "/projects/360Pass.png",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MySQL", "Sequelize", "FCM"],
    description:
      "Multi-tenant SaaS for residential societies covering visitor and gate management — real-time gate-presence dashboard, multi-role access control, complaints, notices, amenities, vehicles, and bulk resident onboarding.",
    features: [
      "Real-time gate-presence dashboard with live visitor tracking",
      "Multi-role auth: Super Admin, Society Admin, Resident, Gatekeeper",
      "Bulk Excel onboarding for residents & flats with validation preview",
      "Scalable page → hook → store architecture with a reusable component library",
    ],
    challenges:
      "Keeping a multi-tenant data model consistent (society-scoped access) while shipping fast across many modules.",
    solutions:
      "Standardized societyId resolution, soft-delete (paranoid) flows, and a strict layered frontend architecture enforced across every feature.",
    links: { github: null, live: null, caseStudy: null }, // proprietary — demo on request
  },
  {
    title: "BBPS Bill Payment Platform",
    subtitle: "Fintech / Payments",
    role: "Full-Stack Developer",
    period: "Aug 2025 — Present",
    image: "/projects/bbps.png", // [PLACEHOLDER]
    tech: ["Node.js", "Express", "MySQL", "BillDesk", "Razorpay", "Webhooks"],
    description:
      "Bill-payment platform integrating BillDesk and Razorpay gateways with complete BBPS workflows — bill fetch, validation, payment, and reconciliation — built on secure, fault-tolerant APIs.",
    features: [
      "End-to-end BBPS workflows: fetch → validate → pay → reconcile",
      "Idempotent webhook handling for payment events",
      "Fault-tolerant APIs with retry logic and structured error handling",
    ],
    challenges:
      "Guaranteeing payment consistency when gateways retry webhooks or deliver events out of order.",
    solutions:
      "Idempotency keys, state-machine driven transaction status, and reconciliation jobs against gateway reports.",
    links: { github: null, live: null, caseStudy: null }, // proprietary
  },
  {
    title: "MasterPe",
    subtitle: "Merchant Onboarding · Fintech",
    role: "Full-Stack Developer",
    period: "Sep 2026 — Present",
    image: "/projects/masterpe.png", // [PLACEHOLDER] gradient fallback until a screenshot is added
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "RBAC"],
    description:
      "Merchant onboarding platform with KYC verification — Aadhaar and PAN document upload, onboarding status tracking and an admin panel to review and approve merchants.",
    features: [
      "KYC flow with Aadhaar & PAN document upload",
      "Onboarding status tracking for every merchant",
      "Admin panel to review and approve merchants with role-based access",
    ],
    challenges: "Keeping sensitive KYC documents and approval steps secure while the flow stays simple for merchants.",
    solutions: "Role-based REST APIs in Node.js/Express with JWT auth, validated uploads and a clear status pipeline surfaced in the admin panel.",
    links: { github: null, live: null, caseStudy: null }, // proprietary
  },
  {
    title: "Mahindra Finance Web App",
    subtitle: "Enterprise fintech UI",
    role: "Frontend Developer (Adecco)",
    period: "2024 — 2025",
    image: "/projects/Mahindra_Finance_Web_App.png",
    tech: ["React", "Vite", "Tailwind CSS", "Redux Saga"],
    description:
      "A real-time solution for loan, payment, and financial service management — responsive, high-performance UI with optimized loading.",
    features: [
      "Complex state orchestration with Redux Saga",
      "Vite code splitting, lazy loading & bundle optimization",
    ],
    challenges: "Large state surface with heavy async flows across financial modules.",
    solutions: "Saga-based side-effect isolation and route-level code splitting.",
    links: { github: null, live: null, caseStudy: null },
  },
  {
    title: "Multi-Department CRM Platform",
    subtitle: "B2B CRM",
    role: "Senior Frontend Developer (Boldsoftmation)",
    period: "2022 — 2024",
    image: "/projects/Multi-Department_CRM_Platform.png",
    tech: ["React", "Material UI", "Redux Thunk", "React Native"],
    description:
      "Manages leads, customer data, invoicing, follow-ups, and dispatch operations in a unified platform used across departments — with a companion React Native Lead Management app for Android & iOS.",
    features: [
      "React Native mobile app: add, assign and track leads with follow-up reminders",
      "Reusable UI component system across web and mobile",
      "Shared flows for repetitive CRM operations",
    ],
    challenges: "Divergent workflows per department in a single product.",
    solutions: "Composable module patterns with shared state and UI primitives.",
    links: { github: null, live: null, caseStudy: null },
  },
  {
    title: "Survey Magic & Banana Bucks",
    subtitle: "Mobile & rewards products",
    role: "Software Engineer (Code B)",
    period: "2021 — 2022",
    image: "/projects/Survey_Magic.png",
    tech: ["React Native", "React", "Node.js", "MongoDB"],
    description:
      "Survey Magic simplifies survey creation, response collection, and feedback analysis. Banana Bucks is a digital rewards platform enabling businesses to offer cashback and loyalty incentives.",
    features: [
      "Cross-platform React Native apps (Android focus)",
      "REST API integration and full-stack contributions",
    ],
    challenges: "Shipping consistent UX across mobile and web with a small team.",
    solutions: "Shared design patterns and API contracts between platforms.",
    links: { github: null, live: "https://www.bananabucks.co/", caseStudy: null },
  },
  {
    title: "MERN CI/CD Pipeline",
    subtitle: "DevOps · Personal project",
    role: "Author",
    period: "Aug 2026 — Oct 2026",
    image: "/projects/mern-cicd.png", // [PLACEHOLDER] gradient fallback until a screenshot is added
    tech: ["Docker", "GitHub Actions", "Docker Hub", "Kubernetes", "MERN"],
    description:
      "Containerized a MERN app with multi-stage Dockerfiles, automated builds to Docker Hub using GitHub Actions and deployed it on a local Kubernetes cluster.",
    features: [
      "Multi-stage Dockerfiles for small production images",
      "GitHub Actions workflow: build → push to Docker Hub",
      "Deployment on a local Kubernetes cluster",
    ],
    challenges: "Getting a repeatable build-and-deploy path instead of manual steps.",
    solutions: "One pipeline that builds, tags and pushes images on every push, with Kubernetes manifests for deployment.",
    links: { github: "https://github.com/vivek1209-star-blog/mern-cicd-demo", live: null, caseStudy: null },
  },
];

// Achievements shown in the bento grid. Every item is a real, verifiable fact.
export const ACHIEVEMENTS = [
  {
    icon: "package",
    metric: "npm",
    title: "Open-source library author",
    body: "Built and published react-bulk-excel-import — a React + TypeScript library (MIT) for bulk Excel import, used in production.",
    href: "https://www.npmjs.com/package/react-bulk-excel-import",
    cta: "View on npm",
    wide: true,
  },
  {
    icon: "rocket",
    metric: "3",
    title: "Live fintech & SaaS products",
    body: "BBPS bill payments, MasterPe merchant onboarding and 360Pass — shipped end to end.",
    href: null,
    cta: null,
    wide: false,
  },
  {
    icon: "credit-card",
    metric: "2",
    title: "Payment gateways integrated",
    body: "BillDesk & Razorpay across the full BBPS flow — fetch, validate, pay, reconcile.",
    href: null,
    cta: null,
    wide: false,
  },
  {
    icon: "smartphone",
    metric: "3",
    title: "React Native apps",
    body: "Lead Management, Mito Healthcare and Survey Magic — for Android & iOS.",
    href: null,
    cta: null,
    wide: false,
  },
  {
    icon: "pen",
    metric: "Medium",
    title: "Technical writing",
    body: "Articles on JWT authentication in the MERN stack and on turning a thrice-built Excel import feature into a library.",
    href: "https://medium.com/@mishra.vivek9612",
    cta: "Read on Medium",
    wide: false,
  },
  {
    icon: "users",
    metric: "1,200+",
    title: "LinkedIn followers",
    body: "Sharing React, Node.js and JavaScript deep dives — hooks, JWT auth and SaaS architecture.",
    href: "https://www.linkedin.com/in/vivek-mishra-19941b113",
    cta: "Follow on LinkedIn",
    wide: false,
  },
  {
    icon: "container",
    metric: "CI/CD",
    title: "Docker & Kubernetes",
    body: "Learning Docker certificate (2026) plus a hands-on MERN pipeline: Docker Hub → Kubernetes.",
    href: "https://github.com/vivek1209-star-blog/mern-cicd-demo",
    cta: "View on GitHub",
    wide: false,
  },
] as const;

export const SERVICES = [
  {
    title: "Full-Stack Product Development",
    body: "End-to-end web apps with React, Node.js, Express, MySQL/MongoDB — from schema design to polished UI.",
    icon: "layers",
  },
  {
    title: "Payment Gateway Integration",
    body: "BillDesk, Razorpay, and BBPS workflows — bill fetch, validation, payment, webhooks, and reconciliation done right.",
    icon: "credit-card",
  },
  {
    title: "SaaS & Multi-Tenant Architecture",
    body: "Role-based access control, tenant-scoped data models, soft deletes, and session-sync auth for B2B SaaS.",
    icon: "building",
  },
  {
    title: "Frontend Architecture & Design Systems",
    body: "Scalable page → hook → store patterns, reusable component libraries, and Redux state design that stays maintainable.",
    icon: "component",
  },
  {
    title: "Performance Optimization",
    body: "Code splitting, lazy loading, bundle analysis, and render optimization for fast, responsive UIs.",
    icon: "zap",
  },
  {
    title: "Open-Source & Tooling",
    body: "npm library authoring (ESM + CJS, full TypeScript types), internal tooling, and bulk data import systems.",
    icon: "package",
  },
];

export const CERTIFICATIONS = [
  { title: "JavaScript (Intermediate)", issuer: "HackerRank", year: "—" },
  { title: "JavaScript (Basic)", issuer: "HackerRank", year: "—" },
  { title: "Dive in and Learn React.js from Scratch", issuer: "Udemy", year: "—" },
  { title: "Learning Docker", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Node.js (Basic)", issuer: "HackerRank", year: "2025" },
];

export const EDUCATION = [
  {
    degree: "MCA — Master of Computer Applications",
    school: "Thakur Institute of Management Studies, Career Development & Research",
    period: "2018 — 2021",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "K.P.B. Hinduja College of Commerce — YCMOU",
    period: "2015 — 2018",
  },
];

// [PLACEHOLDER] Replace with real testimonials (manager / teammates / clients).
export const TESTIMONIALS = [
  {
    quote:
      "[PLACEHOLDER — Ask your reporting manager at Champion Software Technologies for a short quote about your BBPS / 360Pass work.]",
    name: "Reporting Manager",
    role: "Champion Software Technologies",
  },
  {
    quote:
      "[PLACEHOLDER — A teammate or lead from Adecco / Mahindra Finance project can vouch for your frontend performance work.]",
    name: "Team Lead",
    role: "Adecco India",
  },
  {
    quote:
      "[PLACEHOLDER — LinkedIn recommendation works great here. Copy one from linkedin.com/in/vivek-mishra-19941b113/details/recommendations]",
    name: "Colleague",
    role: "Boldsoftmation LLP",
  },
];

export const STATS = [
  { label: "Years of Experience", value: 4.8, suffix: "" },
  { label: "Production Projects", value: 8, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Companies Served", value: 5, suffix: "" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
