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
    slug: "second-analysis",
    title: "Second Analysis",
    category: "Research",
    status: "Draft",
    summary: "Placeholder for the second major analysis connected to the main platform.",
    body: [
      "This page is prepared for the second analysis. Replace this text when the second analysis is ready to publish.",
      "The main website will link to this analysis through the Analysis Library, allowing future work to grow from one organized platform instead of disconnected websites."
    ]
  }
];

export function getAnalysis(slug: string) {
  return analyses.find((analysis) => analysis.slug === slug);
}
