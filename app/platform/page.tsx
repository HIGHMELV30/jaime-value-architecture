import { Shell } from "@/components/Shell";
import { SectionHeader } from "@/components/SectionHeader";
import { Database, FileText, Filter, Rocket, ShieldCheck, UploadCloud } from "lucide-react";

const stages = [
  ["Ingest", UploadCloud, "Accept files, APIs, documents, notes, reports, dashboards, and manual entries."],
  ["Validate", ShieldCheck, "Normalize fields, preserve missing values, and prevent silent alteration of source values."],
  ["Qualify", Filter, "Apply discipline-specific rules while maintaining repeatable review logic."],
  ["Evidence", Database, "Separate raw inputs, normalized records, review notes, and publishable summaries."],
  ["Explain", FileText, "Convert complex material into clear language for reviewers, learners, or public readers."],
  ["Publish", Rocket, "Generate public pages, briefs, reports, downloadable summaries, and review packets."]
] as const;

export default function PlatformPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Platform" title="Method for converting complexity into understanding">
          Jaime Value Architecture organizes analyzable topics through one shared platform pattern while allowing each domain to keep its own appropriate vocabulary and rules.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stages.map(([title, Icon, detail]) => (
            <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-5 w-fit rounded-2xl bg-emerald-500/15 p-3 text-emerald-200"><Icon className="h-6 w-6" /></div>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{detail}</p>
            </article>
          ))}
        </div>
      </main>
    </Shell>
  );
}
