# Jaime Value Architecture

Professional public website package for **Jaime Value Architecture**, a universal understanding platform designed to convert complex information into structured evidence, qualified analysis, clear explanations, and publishable understanding across disciplines.

## Launch Position

- Independent
- Educational
- Analytical
- Free at launch
- Donation-compatible
- Not financial advice
- Finance module separated from the universal platform
- Aircraft-inspired labels limited to historical finance-module analogies only

## Local Installation

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build Check

```bash
npm run typecheck
npm run build
```

## GitHub + Vercel Deployment

1. Create a GitHub repository named `jaime-value-architecture`.
2. Upload all files from this folder.
3. Commit to the `main` branch.
4. In Vercel, create a new project from the GitHub repository.
5. Framework preset: Next.js.
6. Build command: `npm run build`.
7. Output directory: Next.js default.
8. Deploy.

## Adding Future Analyses

Add each future analysis to:

```text
data/analyses.ts
```

Each analysis automatically becomes available through:

```text
/analysis/[slug]
```

Example:

```ts
{
  slug: "second-analysis",
  title: "Second Analysis",
  category: "Research",
  status: "Draft",
  summary: "Second major analysis connected to the main platform.",
  body: ["Section text here."]
}
```

## Professional Boundary

The finance module references historical aircraft-inspired labels only as private professional analogies used to prioritize precision in a trade-log qualification project. They are not sold, licensed, installed across unrelated topics, or presented as official aircraft branding.

## Contact

jaimemaldonado@loadedstar.llc
