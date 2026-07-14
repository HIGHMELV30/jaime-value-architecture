"use client";

import { useMemo, useState } from "react";

type ViewKey =
  | "overview"
  | "architecture"
  | "intelligence"
  | "lifecycle"
  | "experience"
  | "industries"
  | "deployment"
  | "release";

type IndustryKey =
  | "retail"
  | "construction"
  | "manufacturing"
  | "logistics"
  | "hospitality"
  | "services";

type IndustryModule = {
  name: string;
  description: string;
  measures: string[];
  controls: string[];
};

const navigation: Array<{
  id: ViewKey;
  step: string;
  label: string;
  description: string;
}> = [
  { id: "overview", step: "Start", label: "Overview", description: "Purpose, problem, and product direction" },
  { id: "architecture", step: "01", label: "Architecture", description: "Universal core and controlled specialization" },
  { id: "intelligence", step: "02", label: "Intelligence", description: "Operational Quality and Data Trust" },
  { id: "lifecycle", step: "03", label: "Closed loop", description: "Exception, action, and verification" },
  { id: "experience", step: "04", label: "Product surfaces", description: "Five governed decision interfaces" },
  { id: "industries", step: "05", label: "Industry modules", description: "Sector-specific extensions" },
  { id: "deployment", step: "06", label: "Client deployment", description: "Authorization through controlled release" },
  { id: "release", step: "07", label: "Release standard", description: "Evidence required for production" },
];

const industries: Record<IndustryKey, IndustryModule> = {
  retail: {
    name: "Retail and Multi-location",
    description: "Operational intelligence for distributed commercial locations.",
    measures: ["Sales quality", "Inventory accuracy", "Service time", "Return patterns"],
    controls: ["Location comparison", "Threshold governance", "Exception ownership", "Verified improvement"],
  },
  construction: {
    name: "Construction",
    description: "Project, contractor, cost, schedule, and compliance intelligence.",
    measures: ["Cost variance", "Schedule variance", "Contractor quality", "Compliance status"],
    controls: ["Approved baselines", "Change traceability", "Evidence ownership", "Corrective action"],
  },
  manufacturing: {
    name: "Manufacturing",
    description: "Production, quality, maintenance, and resource-use intelligence.",
    measures: ["Throughput", "Defect rate", "Downtime", "Resource utilization"],
    controls: ["Quality thresholds", "Process lineage", "Maintenance evidence", "Outcome verification"],
  },
  logistics: {
    name: "Logistics",
    description: "Service, capacity, route, and exception-resolution intelligence.",
    measures: ["Service level", "Route performance", "Capacity use", "Resolution time"],
    controls: ["Event chronology", "Location access", "Exception priority", "Recovery measurement"],
  },
  hospitality: {
    name: "Hospitality",
    description: "Service quality, capacity, customer experience, and labor intelligence.",
    measures: ["Service quality", "Capacity", "Complaint patterns", "Labor efficiency"],
    controls: ["Service definitions", "Data certification", "Action ownership", "Outcome review"],
  },
  services: {
    name: "Professional Services",
    description: "Delivery quality, utilization, margin, and client-outcome intelligence.",
    measures: ["Delivery quality", "Utilization", "Margin", "Client outcomes"],
    controls: ["Engagement scope", "Metric ownership", "Evidence lineage", "Improvement verification"],
  },
};

const operatingSequence = [
  ["01", "Connect", "Connect only authorized client-controlled sources."],
  ["02", "Validate", "Measure completeness, validity, uniqueness, timeliness, and reconciliation."],
  ["03", "Measure", "Calculate governed KPIs and transparent quality dimensions."],
  ["04", "Detect", "Identify material exceptions through approved rules and thresholds."],
  ["05", "Explain", "Present evidence and classify the strength of each finding."],
  ["06", "Prioritize", "Rank issues by approved operational and financial impact."],
  ["07", "Act", "Assign ownership, deadlines, evidence, and escalation."],
  ["08", "Verify", "Measure whether corrective action produced the required improvement."],
];

const productSurfaces = [
  ["Executive Pulse", "Certified performance, exposure, direction, and priority exceptions."],
  ["Operational Control", "Location, process, capacity, service, and financial analysis."],
  ["Diagnostic Analysis", "Evidence, contributing factors, confidence classification, and lineage."],
  ["Action Center", "Ownership, deadlines, evidence, escalation, and verified outcomes."],
  ["Data Trust Center", "Completeness, validity, uniqueness, timeliness, reconciliation, and certification."],
];

const releaseGates = [
  "Critical governed metrics reconcile 100%.",
  "No unresolved critical defects remain.",
  "No unauthorized-access findings remain.",
  "Refresh, failure, and recovery tests pass.",
  "Performance and accessibility requirements are accepted.",
  "Representative users complete acceptance testing.",
  "An independent reviewer awards at least 95 out of 100.",
];

function StatusPill({ children, tone = "teal" }: { children: React.ReactNode; tone?: "teal" | "navy" | "amber" }) {
  const palette =
    tone === "navy"
      ? "bg-slate-900 text-white"
      : tone === "amber"
        ? "bg-amber-100 text-amber-800"
        : "bg-cyan-50 text-cyan-800";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${palette}`}>{children}</span>;
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function OQIPOperationalQualityIntelligence() {
  const [view, setView] = useState<ViewKey>("overview");
  const [industry, setIndustry] = useState<IndustryKey>("retail");
  const [showMobileNav, setShowMobileNav] = useState(false);

  const activeIndex = navigation.findIndex((item) => item.id === view);
  const activeNav = navigation[activeIndex];
  const selectedIndustry = industries[industry];

  const progress = useMemo(
    () => Math.round(((activeIndex + 1) / navigation.length) * 100),
    [activeIndex],
  );

  const navigate = (next: ViewKey) => {
    setView(next);
    setShowMobileNav(false);
  };

  const renderContent = () => {
    if (view === "overview") {
      return (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white md:p-9">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap gap-2">
                <StatusPill tone="amber">Product development system</StatusPill>
                <StatusPill>Publication-safe architecture</StatusPill>
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Universal Operational Quality Intelligence Platform
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                Convert authorized operational data into verified improvement.
              </h2>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
                OQIP is a governed product architecture for validating information, measuring performance,
                detecting material exceptions, assigning corrective action, and verifying whether the
                organization improved.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={() => navigate("architecture")} className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-slate-100">
                  Explore the architecture
                </button>
                <button type="button" onClick={() => navigate("intelligence")} className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-medium hover:bg-white/10">
                  Review scoring intelligence
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Fragmented information", "Operational records remain divided across systems, files, teams, and definitions."],
              ["Unverified reporting", "Totals may appear without visible freshness, completeness, or reconciliation status."],
              ["Delayed intervention", "Important exceptions can remain buried inside historical reporting."],
              ["No closed-loop proof", "An action may be completed without proving that performance improved."],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold text-cyan-700">0{index + 1}</span>
                <h3 className="mt-3 font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-cyan-950">
            <p className="font-semibold">Product opportunity</p>
            <p className="mt-1 text-sm leading-6">
              Create one governed layer that connects trusted measurement to documented operational action.
            </p>
          </div>
        </div>
      );
    }

    if (view === "architecture") {
      const layers = [
        ["Universal Core", "Permanent product", "Semantic model, trust controls, scoring, exceptions, actions, security, testing, and release controls."],
        ["Industry Module", "Interchangeable package", "Approved sector terminology, process definitions, KPI extensions, validation rules, and thresholds."],
        ["Client Configuration", "Authorized deployment", "Connections, hierarchy, targets, permissions, branding, and approved business rules."],
      ];

      return (
        <div className="space-y-6">
          <SectionHeader eyebrow="Hybrid product architecture" title="One product with controlled specialization" text="The universal core remains stable while industry modules and client configurations extend the product without weakening its governance." />
          <div className="grid gap-4 lg:grid-cols-3">
            {layers.map(([name, type, description], index) => (
              <article key={name} className={`rounded-3xl p-6 text-white shadow-sm ${index === 0 ? "bg-slate-950" : index === 1 ? "bg-blue-700" : "bg-cyan-700"}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{type}</p>
                <h3 className="mt-5 text-2xl font-semibold">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">{description}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-950">Control rule</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A client-specific requirement may configure the product, but it may not overwrite security,
              data certification, metric governance, auditability, or client-isolation controls.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.35fr_1fr]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Dimensions</p>
              {["Date", "Organization", "Location", "Process"].map((item) => <div key={item} className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm font-semibold text-blue-950">Dim{item}</div>)}
            </div>
            <div className="rounded-2xl border-2 border-cyan-500 bg-cyan-50 p-5">
              <p className="font-semibold text-cyan-950">Governed semantic layer</p>
              <div className="mt-4 space-y-2">
                {["FactOperations", "FactQualityEvents", "FactCorrectiveActions"].map((item) => <div key={item} className="rounded-xl bg-white p-3 text-sm font-semibold text-slate-900 shadow-sm">{item}</div>)}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Governance</p>
              {["KPI Catalog", "Configuration", "Source Mapping", "Access Mapping", "Quality Rules"].map((item) => <div key={item} className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-sm font-semibold text-violet-950">{item}</div>)}
            </div>
          </div>
        </div>
      );
    }

    if (view === "intelligence") {
      return (
        <div className="space-y-6">
          <SectionHeader eyebrow="Governed intelligence" title="Two scores answer two different questions" text="Operational performance and data reliability remain separate, visible, and explainable." />
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Performance</p>
              <h3 className="mt-4 text-2xl font-semibold">Operational Quality Score</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">How well is the operation performing?</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {["Financial performance", "Operational efficiency", "Service quality", "Accuracy and compliance", "Resource utilization", "Improvement effectiveness"].map((item) => <div key={item} className="rounded-xl bg-white/10 p-3 text-sm">{item}</div>)}
              </div>
            </article>
            <article className="rounded-3xl bg-cyan-700 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-100">Reliability</p>
              <h3 className="mt-4 text-2xl font-semibold">Data Trust Score</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-50">Can the current result be relied upon?</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {["Completeness", "Validity", "Uniqueness", "Timeliness", "Reconciliation"].map((item) => <div key={item} className="rounded-xl bg-white/15 p-3 text-sm">{item}</div>)}
              </div>
            </article>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <p className="font-semibold">Certification rule</p>
            <p className="mt-1 text-sm leading-6">Strong operational results do not override weak data trust. Uncertified information must remain visibly flagged.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Operating sequence</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {operatingSequence.map(([step, name, text]) => <article key={name} className="rounded-2xl border border-slate-200 bg-white p-4"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-cyan-700">{step}</span><span className="h-2 w-2 rounded-full bg-cyan-500" /></div><h3 className="mt-4 font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></article>)}
            </div>
          </div>
        </div>
      );
    }

    if (view === "lifecycle") {
      const stages = [
        ["Exception detected", "A threshold, rule, or approved analytical method identifies material variance."],
        ["Evidence classified", "The finding is labeled confirmed, associated, possible, or insufficient."],
        ["Action assigned", "Owner, due date, expected result, priority, and evidence are recorded."],
        ["Outcome verified", "Before-and-after measurement confirms improvement or triggers escalation."],
      ];

      return (
        <div className="space-y-6">
          <SectionHeader eyebrow="Closed-loop governance" title="Every material exception enters a controlled lifecycle" text="Detection is only the beginning. OQIP preserves evidence, ownership, deadlines, escalation, and measured outcomes." />
          <div className="grid gap-4 lg:grid-cols-4">
            {stages.map(([name, text], index) => <article key={name} className="rounded-2xl border border-slate-200 bg-white p-5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-50 text-xs font-bold text-cyan-800">{index + 1}</span><h3 className="mt-5 font-semibold text-slate-950">{name}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></article>)}
          </div>
          <div className="rounded-3xl bg-slate-950 p-6 text-white">
            <div className="grid gap-3 md:grid-cols-5">
              {["Issue", "Evidence", "Owner", "Action", "Verified result"].map((item, index) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-cyan-300">0{index + 1}</p><p className="mt-2 text-sm font-semibold">{item}</p></div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
            <p className="font-semibold">Evidence boundary</p>
            <p className="mt-1 text-sm leading-6">OQIP must distinguish confirmed causes, strong associations, possible contributing factors, and insufficient evidence.</p>
          </div>
        </div>
      );
    }

    if (view === "experience") {
      return (
        <div className="space-y-6">
          <SectionHeader eyebrow="Product experience" title="Five governed decision surfaces" text="Each surface supports a distinct management decision while preserving shared metrics, permissions, and evidence lineage." />
          <div className="grid gap-4 md:grid-cols-2">
            {productSurfaces.map(([name, description], index) => <article key={name} className={`rounded-2xl border border-slate-200 bg-white p-5 ${index === 4 ? "md:col-span-2" : ""}`}><div className="flex items-start gap-4"><span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-slate-950 text-xs font-semibold text-white">0{index + 1}</span><div><h3 className="font-semibold text-slate-950">{name}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><div className="mt-4 h-2 max-w-md rounded-full bg-slate-100"><div className="h-2 rounded-full bg-cyan-600" style={{ width: `${72 + index * 5}%` }} /></div></div></div></article>)}
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
            <p className="font-semibold">Implementation status</p>
            <p className="mt-1 text-sm leading-6">These surfaces define the product experience. Production data connection and release evidence must be completed inside each authorized client deployment.</p>
          </div>
        </div>
      );
    }

    if (view === "industries") {
      return (
        <div className="space-y-6">
          <SectionHeader eyebrow="Industry modules" title="Universal core with sector-specific intelligence" text="Modules extend terminology, measures, controls, and processes without modifying the governed foundation." />
          <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
            <div className="space-y-2">
              {(Object.entries(industries) as Array<[IndustryKey, IndustryModule]>).map(([key, item]) => <button key={key} type="button" onClick={() => setIndustry(key)} className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${industry === key ? "border-cyan-600 bg-cyan-50 text-cyan-950" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"}`}><span className="font-semibold">{item.name}</span><span className="mt-1 block text-xs opacity-70">{item.description}</span></button>)}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <StatusPill>{selectedIndustry.name}</StatusPill>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">{selectedIndustry.description}</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Example measures</p><div className="mt-3 space-y-2">{selectedIndustry.measures.map((item) => <div key={item} className="rounded-xl bg-slate-50 p-3 text-sm font-medium">{item}</div>)}</div></div>
                <div><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Governed controls</p><div className="mt-3 space-y-2">{selectedIndustry.controls.map((item) => <div key={item} className="rounded-xl bg-cyan-50 p-3 text-sm font-medium text-cyan-950">{item}</div>)}</div></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500">These are module definitions, not client claims or embedded operational records.</p>
        </div>
      );
    }

    if (view === "deployment") {
      const steps = [
        "Execute commercial, confidentiality, privacy, and data-processing terms.",
        "Complete operational discovery and decision inventory.",
        "Approve source-to-target mapping and KPI definitions.",
        "Configure client-controlled data connections.",
        "Implement the semantic model, measures, and product surfaces.",
        "Apply least-privilege access and row-level security.",
        "Reconcile critical metrics to approved systems of record.",
        "Complete functional, security, performance, recovery, and accessibility testing.",
        "Obtain user acceptance and independent release approval.",
      ];

      return (
        <div className="space-y-6">
          <SectionHeader eyebrow="Client deployment" title="Controlled path from authorization to release" text="Client data enters only during an authorized deployment and remains separate from the public product and every other client environment." />
          <div className="space-y-3">
            {steps.map((step, index) => <article key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4"><span className={`grid h-9 w-9 flex-none place-items-center rounded-xl text-xs font-semibold text-white ${index < 3 ? "bg-cyan-700" : "bg-slate-950"}`}>{index + 1}</span><p className="pt-1.5 text-sm font-medium text-slate-700">{step}</p></article>)}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white"><p className="font-semibold">Published product</p><p className="mt-2 text-sm leading-6 text-slate-300">Architecture, definitions, configuration controls, templates, and documentation.</p></div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-cyan-950"><p className="font-semibold">Client environment</p><p className="mt-2 text-sm leading-6">Authorized data, connections, users, hierarchy, targets, and approved rules.</p></div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <SectionHeader eyebrow="Professional release standard" title="A+ requires evidence, not appearance" text="A numerical score is insufficient unless every mandatory release gate also passes." />
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Release threshold</p>
            <p className="mt-4 text-7xl font-semibold">95<span className="text-2xl text-slate-400">/100</span></p>
            <div className="mt-6 h-3 rounded-full bg-white/15"><div className="h-3 w-[95%] rounded-full bg-cyan-400" /></div>
            <p className="mt-4 text-sm leading-6 text-slate-300">Threshold only. Every mandatory gate remains required.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {releaseGates.map((gate) => <article key={gate} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"><span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-800">✓</span><p className="text-sm font-medium leading-6 text-slate-700">{gate}</p></article>)}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Current product position</p>
          <div className="mt-5 space-y-4">
            {[
              ["Product foundation", 100, "Architecture, governed schema, KPI catalog, testing structure, and release controls."],
              ["Native analytics implementation", 20, "Semantic model, measures, and five production decision surfaces."],
              ["Enterprise validation", 5, "Security, performance, accessibility, monitoring, and recovery evidence."],
              ["Authorized client deployment", 0, "Client-controlled connection, acceptance testing, and measured outcomes."],
            ].map(([name, amount, text]) => <div key={String(name)}><div className="flex items-center justify-between gap-3"><p className="text-sm font-semibold text-slate-800">{name}</p><span className="text-xs font-semibold text-slate-500">{amount}%</span></div><p className="mt-1 text-xs leading-5 text-slate-500">{text}</p><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-cyan-600" style={{ width: `${amount}%` }} /></div></div>)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 text-slate-900 shadow-sm">
      <div className="grid min-h-[900px] lg:grid-cols-[285px_1fr]">
        <aside className={`${showMobileNav ? "block" : "hidden"} bg-slate-950 p-5 text-white lg:block`}>
          <div className="flex items-start justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-2xl font-semibold">OQIP</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">Operational quality intelligence</p>
            </div>
            <button type="button" onClick={() => setShowMobileNav(false)} className="text-xs text-slate-400 lg:hidden">Close</button>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-4">
            <p className="text-xs font-semibold text-cyan-200">Product status</p>
            <p className="mt-2 text-xs leading-5 text-slate-300">Development system with publication boundaries and no embedded client records.</p>
          </div>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Analysis sections</p>
          <nav className="mt-3 space-y-1" aria-label="OQIP sections">
            {navigation.map((item) => (
              <button key={item.id} type="button" onClick={() => navigate(item.id)} className={`w-full rounded-xl px-3 py-2.5 text-left transition ${view === item.id ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>
                <span className="flex items-center justify-between text-sm"><span>{item.label}</span><span className={`text-[10px] font-semibold ${view === item.id ? "text-cyan-700" : "text-cyan-400"}`}>{item.step}</span></span>
                <span className="mt-1 block text-[11px] leading-4 text-slate-500">{item.description}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium">Data boundary</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">The public component describes the product. It does not connect to, retain, or display operational client data.</p>
          </div>
        </aside>

        <div className={showMobileNav ? "hidden lg:block" : "block"}>
          <header className="border-b border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <button type="button" onClick={() => setShowMobileNav(true)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold lg:hidden">Menu</button>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400"><button type="button" onClick={() => navigate("overview")} className="hover:text-cyan-700">OQIP</button><span>/</span><span>{activeNav.label}</span></div>
                  <h1 className="mt-1 text-lg font-semibold text-slate-950">{activeNav.label}</h1>
                  <p className="text-xs text-slate-500">{activeNav.description}</p>
                </div>
              </div>
              <div className="min-w-[180px]"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-slate-400"><span>Analysis progress</span><span>{progress}%</span></div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-cyan-600 transition-all" style={{ width: `${progress}%` }} /></div></div>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto lg:hidden">{navigation.map((item) => <button key={item.id} type="button" onClick={() => navigate(item.id)} className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs ${view === item.id ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600"}`}>{item.step} {item.label}</button>)}</div>
          </header>

          <div className="p-4 sm:p-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-950">
              <p className="text-sm font-semibold">Development system—not a connected client environment</p>
              <p className="mt-1 text-xs leading-5 text-blue-700">Capabilities, controls, and interfaces are presented without fabricated records, unsupported outcomes, or unauthorized operational information.</p>
            </div>
            <div className="mt-5">{renderContent()}</div>
            <footer className="mt-7 flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
              <button type="button" disabled={activeIndex === 0} onClick={() => navigate(navigation[Math.max(0, activeIndex - 1)].id)} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm disabled:opacity-40">← Previous</button>
              <span className="text-xs text-slate-500">Section {activeIndex + 1} of {navigation.length}</span>
              <button type="button" disabled={activeIndex === navigation.length - 1} onClick={() => navigate(navigation[Math.min(navigation.length - 1, activeIndex + 1)].id)} className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm text-white disabled:opacity-40">Next →</button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
