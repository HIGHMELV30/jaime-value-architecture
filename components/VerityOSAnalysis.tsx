"use client";

import { useMemo, useRef, useState } from "react";

type SectorKey = "logistics" | "construction" | "vendors" | "procurement";
type ViewKey = "overview" | "reviews" | "entities" | "evidence" | "reports";
type LocalFile = { id: string; name: string; size: string; type: string };

const sectors: Record<SectorKey, { name: string; prompt: string }> = {
  logistics: { name: "Logistics", prompt: "Carrier, shipment, invoice, or delivery evidence" },
  construction: { name: "Construction", prompt: "Contractor, bid, insurance, permit, or change order" },
  vendors: { name: "Vendor Controls", prompt: "Vendor profile, invoice, purchase order, or bank-change request" },
  procurement: { name: "Procurement", prompt: "Solicitation, quotation, certification, or compliance package" },
};

const navigation: Array<{ id: ViewKey; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "reviews", label: "Review records" },
  { id: "entities", label: "Entities" },
  { id: "evidence", label: "Evidence" },
  { id: "reports", label: "Reports" },
];

const workflow = [
  { marker: "01", title: "Define identity checks", text: "Specify which entity, credential, authority, and destination fields require review." },
  { marker: "02", title: "Compare submitted records", text: "Connect approved data sources and implement documented comparison rules." },
  { marker: "03", title: "Record decisions", text: "Capture reviewer actions, evidence references, timestamps, and status changes." },
];

function Metric({ title, note }: { title: string; note: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-slate-950">—</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{note}</p>
    </article>
  );
}

export default function VerityOSAnalysis() {
  const [sector, setSector] = useState<SectorKey>("logistics");
  const [view, setView] = useState<ViewKey>("overview");
  const [query, setQuery] = useState("");
  const [showFiles, setShowFiles] = useState(false);
  const [files, setFiles] = useState<LocalFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const current = sectors[sector];

  const visibleFiles = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return normalized ? files.filter((file) => file.name.toLowerCase().includes(normalized)) : files;
  }, [files, query]);

  const addFiles = (list: FileList | null) => {
    const next = Array.from(list ?? []).map((file, index) => ({
      id: `${file.name}-${file.size}-${file.lastModified}-${index}`,
      name: file.name,
      size: `${Math.max(file.size / 1024, 1).toFixed(0)} KB`,
      type: file.name.split(".").pop()?.toUpperCase() || "FILE",
    }));
    setFiles((previous) => [...previous, ...next]);
  };

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 text-slate-900 shadow-sm">
      <div className="grid min-h-[760px] lg:grid-cols-[250px_1fr]">
        <aside className="bg-slate-950 p-5 text-white">
          <div className="border-b border-white/10 pb-5">
            <p className="text-xl font-semibold">VerityOS</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">Product prototype</p>
          </div>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Workspace</p>
          <nav className="mt-3 space-y-1" aria-label="VerityOS sections">
            {navigation.map((item) => (
              <button key={item.id} type="button" onClick={() => setView(item.id)} className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition ${view === item.id ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>
                {item.label}
              </button>
            ))}
          </nav>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Operating sector</p>
          <div className="mt-3 space-y-1">
            {(Object.entries(sectors) as Array<[SectorKey, (typeof sectors)[SectorKey]]>).map(([key, item]) => (
              <button key={key} type="button" onClick={() => setSector(key)} className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition ${sector === key ? "bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-400/30" : "text-slate-400 hover:bg-white/10"}`}>
                {item.name}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium">Prototype disclosure</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">Security, storage, access control, and automated analysis require production implementation and validation.</p>
          </div>
        </aside>

        <div>
          <header className="flex flex-col gap-4 border-b border-slate-200 bg-white/90 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">{navigation.find((item) => item.id === view)?.label}</h2>
              <p className="text-xs text-slate-500">Prototype workspace for {current.name.toLowerCase()} review</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search selected files" className="h-10 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-indigo-400" />
              <button type="button" onClick={() => setShowFiles(true)} className="h-10 rounded-xl bg-slate-950 px-4 text-sm font-medium text-white hover:bg-slate-800">Add files</button>
            </div>
          </header>

          <div className="p-4 sm:p-6">
            <div className="mb-5 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-900">Prototype—not a live verification service</p>
              <p className="mt-1 text-xs leading-5 text-blue-700">Displayed controls describe intended product capabilities. This version does not upload, retain, validate, encrypt, inspect, or independently analyze files.</p>
            </div>

            {view === "overview" ? (
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
                  <div className="relative max-w-3xl">
                    <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1 text-xs font-semibold text-indigo-200">Publication-safe prototype</span>
                    <h3 className="mt-5 text-3xl font-semibold leading-tight">Organize evidence before making an operational decision.</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">VerityOS is a product concept for collecting records, defining review controls, documenting findings, and maintaining decision history. Production capabilities must be implemented and validated before operational use.</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button type="button" onClick={() => setShowFiles(true)} className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950">Add local files</button>
                      <button type="button" onClick={() => setView("reviews")} className="rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium">Open review workspace</button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <Metric title="Open reviews" note="Connect a verified data source" />
                  <Metric title="Flagged findings" note="No analysis engine connected" />
                  <Metric title="Controls completed" note="No production records loaded" />
                  <Metric title="Decision time" note="No validated performance data" />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">How the intended workflow is structured</h3>
                  <p className="mt-1 text-sm text-slate-500">Capability descriptions only; no production service is represented.</p>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {workflow.map((item) => (
                      <article key={item.title} className="rounded-2xl border border-slate-200 p-5">
                        <span className="text-xs font-semibold text-indigo-700">{item.marker}</span>
                        <h4 className="mt-3 font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <h3 className="font-semibold">No verified records available</h3>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">Connect an authorized backend and approved data source before presenting records, findings, risk scores, or performance metrics.</p>
                <button type="button" onClick={() => setShowFiles(true)} className="mt-5 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white">Add local files</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showFiles && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/60 p-4" onClick={() => setShowFiles(false)}>
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between border-b border-slate-200 p-6">
              <div><h3 className="text-xl font-semibold">Add local {current.name} files</h3><p className="mt-1 text-sm text-slate-500">Select {current.prompt.toLowerCase()} for interface testing only.</p></div>
              <button type="button" onClick={() => setShowFiles(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100">Close</button>
            </div>
            <div className="space-y-4 p-6">
              <button type="button" onClick={() => inputRef.current?.click()} className="w-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center hover:border-indigo-400">
                <span className="font-semibold">Select files for local interface preview</span>
                <span className="mt-2 block text-sm text-slate-500">Only file names and sizes appear in browser memory. No upload occurs.</span>
              </button>
              <input ref={inputRef} type="file" multiple className="hidden" onChange={(event) => addFiles(event.target.files)} />
              {visibleFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <div><p className="text-sm font-medium">{file.name}</p><p className="text-xs text-slate-500">{file.type} · {file.size}</p></div>
                  <button type="button" onClick={() => setFiles((previous) => previous.filter((item) => item.id !== file.id))} className="rounded-lg px-3 py-2 text-xs hover:bg-slate-100">Remove</button>
                </div>
              ))}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">No automated findings generated</p>
                <p className="mt-1 text-xs leading-5 text-amber-700">This prototype does not inspect file contents or issue risk, compliance, fraud, identity, or payment conclusions.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
