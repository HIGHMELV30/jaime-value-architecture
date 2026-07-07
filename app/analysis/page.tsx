import { Shell } from "@/components/Shell";
import { AnalysisCard } from "@/components/AnalysisCard";
import { SectionHeader } from "@/components/SectionHeader";
import { analyses } from "@/data/analyses";

export default function AnalysisIndexPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Analysis Library" title="All analyses from one main platform">
          A public library of structured analyses developed through the Jaime Value Architecture platform. Each entry opens into its own dedicated analysis view.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2">
          {analyses.map((analysis) => <AnalysisCard key={analysis.slug} analysis={analysis} />)}
        </div>
      </main>
    </Shell>
  );
}
