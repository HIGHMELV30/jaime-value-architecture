export type AnalysisStatus = "Published" | "Draft" | "Review";

export type Analysis = {
  slug: string;
  title: string;
  category: string;
  status: AnalysisStatus;
  summary: string;
  body: string[];
};

export type DomainAdapter = {
  domain: string;
  purpose: string;
  examples: string;
};

export type Disclosure = {
  title: string;
  body: string;
};

export type RouteItem = {
  label: string;
  href: string;
};
