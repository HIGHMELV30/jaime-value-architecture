import type { Analysis } from "@/lib/types";

export const analyses: Analysis[] = [
  {
    slug: "jaime-value-architecture",
    title: "Jaime Value Architecture",
    category: "Platform",
    status: "Published",
    summary:
      "Universal understanding platform and first proof module structure.",
    body: [
      "Jaime Value Architecture is the main public platform for organizing complex information into structured evidence, qualified analysis, clear explanations, and publishable understanding.",
      "The platform is designed to support multiple disciplines without forcing every topic into the same vocabulary. Each domain can have its own adapter while preserving a universal method: ingest, validate, qualify, analyze, explain, and publish.",
      "The finance module is the first proof module. It demonstrates how structured qualification, source integrity, and reviewable outputs can be implemented inside a specific domain.",
    ],
  },
  {
    slug: "social-productivity-informational-system",
    title: "Social Productivity Informational System",
    category: "Social Productivity",
    status: "Published",
    summary:
      "Public-facing informational system for wasted human energy, accountability gaps, false power, and growth redirection.",
    body: [
      "This analysis is connected to the Social Productivity Informational System component so the full interactive public-facing format can be rendered through the Analysis Library while preserving the platform structure.",
    ],
  },
  {
    slug: "black-ops-1-hardcore-ctf-professional-dashboard",
    title: "Black Ops 1 Hardcore CTF Professional Dashboard",
    category: "Gaming Strategy",
    status: "Published",
    summary:
      "A professional informational system for Hardcore CTF success, including complete loadouts, map-specific strategy, objective discipline, player improvement logic, and public-use disclaimers.",
    body: [
      "This analysis is connected to the Black Ops 1 Hardcore CTF Professional Dashboard component so the full interactive public-facing format can be rendered through the Analysis Library while preserving the platform structure.",
    ],
  },
  {
    slug: "adult-disruptive-behavior-boundary-guide",
    title: "Adult Disruptive Behavior Boundary Guide",
    category: "Boundary Protection",
    status: "Published",
    summary:
      "Public-facing informational system for maintaining distance, hygiene standards, mental-space protection, and practical boundaries around unrelated adults who create loud, unhygienic, or emotionally disruptive environments.",
    body: [
      "This analysis is connected to the Adult Disruptive Behavior Boundary Guide component so the full public-facing informational system can be rendered through the Analysis Library while preserving the platform structure.",
    ],
  },
  {
    slug: "verityos-decision-intelligence",
    title: "VerityOS Decision Intelligence",
    category: "Operational Analysis",
    status: "Published",
    summary:
      "Publication-safe informational system for organizing evidence, defining review controls, and documenting operational decisions.",
    body: [
      "This Analysis Library entry is connected to the dedicated VerityOS Analysis component so the complete informational system can be rendered through the Analysis Library.",
    ],
  },
  {
    slug: "business-systems-value-architecture",
    title: "Business Systems Value Architecture",
    category: "Business Systems",
    status: "Published",
    summary:
      "Interactive client-facing system showing how business intelligence, workflow automation, business applications, and applied AI create measurable operational value.",
    body: [
      "This Analysis Library entry is connected to the dedicated Business Systems Value Architecture component so the complete interactive system can be rendered through the Analysis Library.",
    ],
  },
  {
    slug: "operational-quality-intelligence-platform",
    title: "Universal Operational Quality Intelligence Platform",
    category: "Operational Intelligence",
    status: "Published",
    summary:
      "Interactive product system for governed operational performance, data trust, exception control, corrective action, and verified improvement.",
    body: [
      "This Analysis Library entry is connected to the dedicated OQIP component so the complete interactive operational quality intelligence system can be rendered through the Analysis Library.",
    ],
  },
  {
    slug: "allowanceos-ai",
    title: "AllowanceOS AI",
    category: "Operational Systems",
    status: "Published",
    summary:
      "Interactive operational-system demonstration for controlling supermarket supplier-funding recovery from agreement intake through verified accounting reconciliation.",
    body: [
      "This Analysis Library entry is connected to the dedicated AllowanceOS AI component so the complete interactive operational system can be rendered through the Analysis Library.",
    ],
  },
];

export function getAnalysis(slug: string) {
  return analyses.find((analysis) => analysis.slug === slug);
}
