"use client";

import { useMemo, useRef, useState } from "react";

type ViewKey = "overview" | "evidence" | "entities" | "reviews" | "reports";
type SectorKey = "logistics" | "construction" | "vendors" | "procurement";
type LocalFile = { id: string; name: string; size: string; type: string; category: string };

type Sector = {
  name: string;
  short: string;
  prompt: string;
  entityLabel: string;
  evidenceTypes: string[];
  controls: string[];
};

const navigation: Array<{ id: ViewKey; step: string; label: string; description: string }> = [
  { id: "overview", step: "Start", label: "Overview", description: "Purpose, scope, and guided entry" },
  { id: "evidence", step: "01", label: "Evidence", description: "Organize locally selected records" },
  { id: "entities", step: "02", label: "Entities", description: "Define subjects and authority checks" },
  { id: "reviews", step: "03", label: "Review records", description: "Apply intended review controls" },
  { id: "reports", step: "04", label: "Decision record", description: "Prepare an accountable outcome" },
];

const sectors: Record<SectorKey, Sector> = {
  logistics: {
    name: "Logistics",
    short: "Movement and delivery controls",
    prompt: "Carrier, shipment, invoice, or delivery evidence",
    entityLabel: "Carriers and facilities",
    evidenceTypes: ["Carrier credentials", "Proof of delivery", "Gate records", "Freight invoices"],
    controls: ["Carrier identity", "Insurance alignment", "Delivery chronology", "Invoice-to-shipment match"],
  },
  construction: {
    name: "Construction",
    short: "Project and contractor controls",
    prompt: "Contractor, bid, insurance, permit, or change order",
    entityLabel: "Contractors and projects",
    evidenceTypes: ["Bids", "Permits", "Insurance certificates", "Change orders"],
    controls: ["Contractor authority", "Insurance scope", "Permit readiness", "Change-order traceability"],
  },
  vendors: {
    name: "Vendor Controls",
    short: "Supplier and payment controls",
    prompt: "Vendor profile, invoice, purchase order, or bank-change request",
    entityLabel: "Vendors and approvers",
    evidenceTypes: ["Vendor profiles", "Invoices", "Purchase orders", "Change requests"],
    controls: ["Vendor identity", "Purchase-order alignment", "Payment-destination control", "Approval authority"],
  },
  procurement: {
    name: "Procurement",
    short: "Sourcing and compliance controls",
    prompt: "Solicitation, quotation, certification, or compliance package",
    entityLabel: "Suppliers and solicitations",
    evidenceTypes: ["Solicitations", "Quotations", "Certifications", "Compliance packages"],
    controls: ["Solicitation integrity", "Quotation comparability", "Certification status", "Approval sequence"],
  },
};

const workflow: Array<{ marker: string; view: ViewKey; title: string; text: string }> = [
  { marker: "01", view: "evidence", title: "Organize evidence", text: "Group permitted records by purpose before review begins." },
  { marker: "02", view: "entities", title: "Define subjects", text: "Identify which organizations, people, credentials, or transactions require review." },
  { marker: "03", view: "reviews", title: "Apply controls", text: "Use documented rules and approved sources with human oversight." },
  { marker: "04", view: "reports", title: "Record decisions", text: "Document evidence references, ownership, status, and required action." },
];

function EmptyPanel({ title, text, action, onAction }: { title: string; text: string; action: string; onAction: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700">i</div>
      <h3 className="mt-4 font-semibold text-slate-950">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">{text}</p>
      <button type="button" onClick={onAction} className="mt-5 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">{action}</button>
    </div>
  );
}

export default function VerityOSAnalysis() {
  const [view, setView] = useState<ViewKey>("overview");
  const [sector, setSector] = useState<SectorKey>("logistics");
  const [files, setFiles] = useState<LocalFile[]>([]);
  const [query, setQuery] = useState("");
  const [showFiles, setShowFiles] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const current = sectors[sector];
  const activeIndex = navigation.findIndex((item) => item.id === view);
  const activeNav = navigation[activeIndex];

  const visibleFiles = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return normalized ? files.filter((file) => file.name.toLowerCase().includes(normalized)) : files;
  }, [files, query]);

  const navigate = (next: ViewKey) => {
    setView(next);
    setShowMobileNav(false);
  };

  const addFiles = (list: FileList | null) => {
    const next = Array.from(list ?? []).map((file, index) => ({
      id: `${file.name}-${file.size}-${file.lastModified}-${index}`,
      name: file.name,
      size: `${Math.max(file.size / 1024, 1).toFixed(0)} KB`,
      type: file.name.split(".").pop()?.toUpperCase() || "FILE",
      category: current.evidenceTypes[index % current.evidenceTypes.length],
    }));
    setFiles((previous) => [...previous, ...next]);
  };

  const renderContent = () => {
    if (view === "overview") {
      return (
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            <span className="rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200">Publication-safe prototype</span>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight">Organize evidence before making an operational decision.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">VerityOS demonstrates a guided path from evidence organization to an accountable decision record. It does not represent a connected production service.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => navigate("evidence")} className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950">Begin guided workflow</button>
              <button type="button" onClick={() => setShowFiles(true)} className="rounded-xl border border-white/20 px-4 py-2.5 text-sm">Preview local files</button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <button key={item.view} type="button" onClick={() => navigate(item.view)} className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300">
                <span className="text-xs font-semibold text-indigo-700">{item.marker}</span>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                <span className="mt-4 block text-xs font-semibold">Open stage →</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (view === "evidence") {
      return (
        <div className="space-y-5">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Evidence workspace</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Organize locally selected file names for interface review. File contents remain unprocessed.</p>
              <div className="mt-5 flex flex-wrap gap-2">{current.evidenceTypes.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{item}</span>)}</div>
            </div>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-700">Stage objective</p>
              <p className="mt-3 text-sm leading-6 text-indigo-950">Confirm that each record is authorized, relevant, and grouped by purpose before defining entities.</p>
            </div>
          </div>
          {files.length ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between"><h3 className="font-semibold">Local preview ({visibleFiles.length})</h3><button type="button" onClick={() => setShowFiles(true)} className="text-xs font-semibold text-indigo-700">Manage files</button></div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">{visibleFiles.map((file) => <article key={file.id} className="rounded-xl border border-slate-200 p-4"><p className="truncate text-sm font-medium">{file.name}</p><p className="mt-1 text-xs text-slate-500">{file.type} · {file.size}</p><p className="mt-3 text-xs font-medium text-indigo-700">{file.category}</p></article>)}</div>
            </div>
          ) : <EmptyPanel title="No evidence selected" text="Add permitted files for local interface preview. Their contents will not be uploaded, stored, or analyzed." action="Add local files" onAction={() => setShowFiles(true)} />}
        </div>
      );
    }

    if (view === "entities") {
      return (
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-700">{current.entityLabel}</p>
            <h2 className="mt-2 text-xl font-semibold">Entity scope and authority</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Define what would need identification, who may act, and which approved source would establish authority. No entity is represented as verified.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{["Identity fields", "Authority evidence", "Approved source", "Review owner"].map((item, index) => <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><span className="text-xs font-semibold text-slate-400">0{index + 1}</span><p className="mt-2 text-sm font-medium">{item}</p><p className="mt-1 text-xs text-slate-500">Not connected</p></div>)}</div>
          </div>
          <EmptyPanel title="No production entities connected" text="A production version requires an authorized source, identity rules, access controls, and human review." action="Continue to controls" onAction={() => navigate("reviews")} />
        </div>
      );
    }

    if (view === "reviews") {
      return (
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-widest text-indigo-700">{current.name}</p><h2 className="mt-2 text-xl font-semibold">Intended review controls</h2></div><span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs text-amber-700">Design framework only</span></div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">{current.controls.map((item, index) => <article key={item} className="rounded-2xl border border-slate-200 p-5"><div className="flex gap-3"><span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-indigo-50 text-xs font-semibold text-indigo-700">{index + 1}</span><div><h3 className="font-semibold">{item}</h3><p className="mt-1 text-sm leading-6 text-slate-500">Requires approved criteria, source validation, exception handling, and accountable human approval.</p></div></div></article>)}</div>
          </div>
          <EmptyPanel title="No live review queue" text="Selected files are not inspected. A verified backend and approved rules are required before findings can be presented." action="Open decision record" onAction={() => navigate("reports")} />
        </div>
      );
    }

    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-widest text-indigo-700">Final stage</p><h2 className="mt-2 text-xl font-semibold">Decision-record framework</h2></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">No outcome generated</span></div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{["Decision status", "Evidence references", "Responsible owner", "Required action"].map((item) => <div key={item} className="rounded-xl border border-slate-200 p-4"><p className="text-sm font-medium">{item}</p><p className="mt-2 text-xs leading-5 text-slate-500">Unavailable until a validated workflow is connected.</p></div>)}</div>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><p className="text-sm font-semibold text-emerald-900">Publication boundary preserved</p><p className="mt-1 text-xs leading-5 text-emerald-700">The interface separates intended capabilities from implemented functions and displays no fabricated outcomes.</p></div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 text-slate-900 shadow-sm">
      <div className="grid min-h-[820px] lg:grid-cols-[275px_1fr]">
        <aside className={`${showMobileNav ? "block" : "hidden"} bg-slate-950 p-5 text-white lg:block`}>
          <div className="flex justify-between border-b border-white/10 pb-5"><div><p className="text-xl font-semibold">VerityOS</p><p className="mt-1 text-[11px] uppercase tracking-[.2em] text-slate-400">Product prototype</p></div><button type="button" onClick={() => setShowMobileNav(false)} className="text-xs text-slate-400 lg:hidden">Close</button></div>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.2em] text-slate-500">Guided workflow</p>
          <nav className="mt-3 space-y-1" aria-label="VerityOS sections">{navigation.map((item) => <button key={item.id} type="button" onClick={() => navigate(item.id)} className={`w-full rounded-xl px-3 py-2.5 text-left ${view === item.id ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10"}`}><span className="flex justify-between text-sm"><span>{item.label}</span><span className="text-[10px] font-semibold text-indigo-500">{item.step}</span></span><span className="mt-1 block text-[11px] text-slate-500">{item.description}</span></button>)}</nav>
          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.2em] text-slate-500">Operating sector</p>
          <div className="mt-3 space-y-1">{(Object.entries(sectors) as Array<[SectorKey, Sector]>).map(([key, item]) => <button key={key} type="button" onClick={() => setSector(key)} className={`w-full rounded-xl px-3 py-2.5 text-left text-sm ${sector === key ? "bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-400/30" : "text-slate-400 hover:bg-white/10"}`}>{item.name}<span className="mt-1 block text-[10px] opacity-70">{item.short}</span></button>)}</div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-sm font-medium">Prototype disclosure</p><p className="mt-2 text-xs leading-5 text-slate-400">Production security, storage, access control, and automated analysis are not represented.</p></div>
        </aside>

        <div className={showMobileNav ? "hidden lg:block" : "block"}>
          <header className="border-b border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3"><button type="button" onClick={() => setShowMobileNav(true)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold lg:hidden">Menu</button><div><div className="flex flex-wrap gap-2 text-xs text-slate-400"><button type="button" onClick={() => navigate("overview")} className="hover:text-indigo-700">VerityOS</button><span>/</span><span>{current.name}</span><span>/</span><span>{activeNav.label}</span></div><h1 className="mt-1 text-lg font-semibold">{activeNav.label}</h1><p className="text-xs text-slate-500">{activeNav.description}</p></div></div>
              <div className="flex gap-2"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search local files" className="h-10 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none" /><button type="button" onClick={() => setShowFiles(true)} className="h-10 whitespace-nowrap rounded-xl bg-slate-950 px-4 text-sm font-medium text-white">Add files</button></div>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto lg:hidden">{navigation.map((item) => <button key={item.id} type="button" onClick={() => navigate(item.id)} className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs ${view === item.id ? "bg-slate-950 text-white" : "bg-slate-100"}`}>{item.step} {item.label}</button>)}</div>
          </header>

          <div className="p-4 sm:p-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4"><p className="text-sm font-semibold text-blue-900">Prototype—not a live verification service</p><p className="mt-1 text-xs leading-5 text-blue-700">This interface does not upload, retain, validate, encrypt, inspect, or independently analyze files.</p></div>
            <div className="mt-5">{renderContent()}</div>
            <footer className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5"><button type="button" disabled={activeIndex === 0} onClick={() => navigate(navigation[Math.max(0, activeIndex - 1)].id)} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm disabled:opacity-40">← Previous</button><span className="text-xs text-slate-500">Stage {activeIndex + 1} of {navigation.length}</span><button type="button" disabled={activeIndex === navigation.length - 1} onClick={() => navigate(navigation[Math.min(navigation.length - 1, activeIndex + 1)].id)} className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm text-white disabled:opacity-40">Next →</button></footer>
          </div>
        </div>
      </div>

      {showFiles && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/60 p-4" onClick={() => setShowFiles(false)}>
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex justify-between border-b border-slate-200 p-6"><div><h2 className="text-xl font-semibold">Local file preview</h2><p className="mt-1 text-sm text-slate-500">Select {current.prompt.toLowerCase()} for interface testing only.</p></div><button type="button" onClick={() => setShowFiles(false)}>Close</button></div>
            <div className="space-y-3 p-6"><button type="button" onClick={() => inputRef.current?.click()} className="w-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center"><span className="font-semibold">Select files</span><span className="mt-2 block text-sm text-slate-500">Only names and sizes appear locally.</span></button><input ref={inputRef} type="file" multiple className="hidden" onChange={(event) => addFiles(event.target.files)} />{visibleFiles.map((file) => <div key={file.id} className="flex justify-between rounded-xl border border-slate-200 p-3"><div><p className="text-sm font-medium">{file.name}</p><p className="text-xs text-slate-500">{file.type} · {file.size} · {file.category}</p></div><button type="button" onClick={() => setFiles((previous) => previous.filter((item) => item.id !== file.id))} className="text-xs">Remove</button></div>)}<div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><p className="text-sm font-semibold text-amber-900">No automated findings generated</p><p className="mt-1 text-xs leading-5 text-amber-700">File contents are not inspected and no risk, compliance, identity, or payment conclusions are generated.</p></div></div>
          </div>
        </div>
      )}
    </section>
  );
}

