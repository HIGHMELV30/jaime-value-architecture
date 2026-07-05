import Link from "next/link";
import type { Analysis } from "@/lib/types";

export function AnalysisCard({ analysis }: { analysis: Analysis }) {
  return (
    <Link href={`/analysis/${analysis.slug}`} className="focus-ring block rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:bg-white/[0.09]">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200">{analysis.category}</span>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-200">{analysis.status}</span>
      </div>
      <h2 className="text-2xl font-semibold text-white">{analysis.title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{analysis.summary}</p>
    </Link>
  );
}
