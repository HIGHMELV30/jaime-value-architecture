import type { DomainAdapter } from "@/lib/types";

export const domains: DomainAdapter[] = [
  {
    domain: "Finance",
    purpose: "Evidence-backed analysis of options flow, trade logs, qualification layers, market notes, and reviewable records.",
    examples: "Options flow, trade logs, classification labels, premium/size/OI validation, entry/exit zones, market-risk disclaimers."
  },
  {
    domain: "Education",
    purpose: "Convert learning material into structured explanations, skill maps, comprehension layers, and student-ready references.",
    examples: "Lessons, reading notes, curriculum outlines, learning objectives, concept breakdowns, practice examples."
  },
  {
    domain: "Economic Development",
    purpose: "Organize civic, regional, infrastructure, and workforce information into public-value briefs and decision-support summaries.",
    examples: "Puerto Rico opportunity briefs, workforce documents, local-development notes, institutional proposals."
  },
  {
    domain: "Research",
    purpose: "Structure papers, claims, citations, evidence, limitations, and review status for smarter understanding and publication readiness.",
    examples: "Research papers, technical claims, source reviews, citation checks, literature maps, executive summaries."
  },
  {
    domain: "Operations",
    purpose: "Convert work processes, logs, service issues, and performance patterns into practical improvement intelligence.",
    examples: "Workflow logs, service quality, process failures, operational bottlenecks, improvement reports."
  },
  {
    domain: "Technical Documentation",
    purpose: "Turn API documents, software notes, schemas, and product requirements into engineering-ready implementation references.",
    examples: "API specs, validation schemas, endpoint maps, parser logic, deployment notes, product architecture."
  }
];
