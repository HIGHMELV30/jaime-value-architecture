import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { analyses, getAnalysis } from "@/data/analyses";

export function generateStaticParams() {
  return analyses.map((analysis) => ({ slug: analysis.slug }));
}

export default function AnalysisDetailPage({ params }: { params: { slug: string } }) {
  const analysis = getAnalysis(params.slug);
  if (!analysis) notFound();

  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-8 px-6 py-12 lg:px-10">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200">{analysis.category}</span>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-200">{analysis.status}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{analysis.title}</h1>
          <p className="text-xl leading-8 text-slate-300">{analysis.summary}</p>
        </div>
        <div className="space-y-5">
          {analysis.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-300">{paragraph}</p>
          ))}
        </div>
      </main>
    </Shell>
  );
}
