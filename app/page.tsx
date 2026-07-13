import { Hero } from "@/components/Hero";
import { Shell } from "@/components/Shell";
import { AnalysisCard } from "@/components/AnalysisCard";
import { SectionHeader } from "@/components/SectionHeader";
import { analyses } from "@/data/analyses";

export default function HomePage() {
  return (
    <Shell>
      <Hero />

      <main className="mx-auto max-w-7xl space-y-12 px-6 py-12 lg:px-10">
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Analysis Library"
            title="Clickable work from one main platform"
          >
            Future analyses are added as cards here and opened through dynamic
            pages. This keeps the platform organized while allowing the second,
            third, fourth, and future analyses to grow from one public home.
          </SectionHeader>

          <div className="grid gap-5 md:grid-cols-2">
            {analyses.map((analysis) => (
              <AnalysisCard key={analysis.slug} analysis={analysis} />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
