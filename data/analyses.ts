import type { Analysis } from "@/lib/types";

export const analyses: Analysis[] = [
  {
    slug: "jaime-value-architecture",
    title: "Jaime Value Architecture",
    category: "Platform",
    status: "Published",
    summary: "Universal understanding platform and first proof module structure.",
    body: [
      "Jaime Value Architecture is the main public platform for organizing complex information into structured evidence, qualified analysis, clear explanations, and publishable understanding.",
      "The platform is designed to support multiple disciplines without forcing every topic into the same vocabulary. Each domain can have its own adapter while preserving a universal method: ingest, validate, qualify, analyze, explain, and publish.",
      "The finance module is the first proof module. It demonstrates how structured qualification, source integrity, and reviewable outputs can be implemented inside a specific domain."
    ]
  },
  {
    slug: "social-productivity-informational-system",
    title: "Social Productivity Informational System",
    category: "Social Productivity",
    status: "Published",
    summary: "Public-facing informational system for wasted human energy, accountability gaps, false power, and growth redirection.",
    body: [
      "This analysis is connected to the Social Productivity Informational System component so the full interactive public-facing format can be rendered through the Analysis Library while preserving the platform structure."
    ]
  }
];

export function getAnalysis(slug: string) {
  return analyses.find((analysis) => analysis.slug === slug);
}
