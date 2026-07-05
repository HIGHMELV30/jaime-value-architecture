import type { RouteItem } from "@/lib/types";

export const site = {
  name: "Jaime Value Architecture",
  subtitle: "Universal Understanding Platform",
  contactEmail: "jaimemaldonado@loadedstar.llc",
  version: "Professional Publication Prototype v2.0",
  thesis:
    "A professional, independent, educational, and analytical platform designed to convert complex information into structured evidence, qualified analysis, clear explanations, and publishable understanding across disciplines.",
  scope:
    "Built for analyzable topics at every level of difficulty: advanced technical subjects, high-stakes strategic problems, institutional workflows, research-heavy material, and foundational concepts that require clear explanation."
};

export const routes: RouteItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Methodology", href: "/methodology" },
  { label: "Domains", href: "/domains" },
  { label: "Analysis", href: "/analysis" },
  { label: "Finance Module", href: "/finance-module" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Donations", href: "/donations" },
  { label: "Contact", href: "/contact" }
];
