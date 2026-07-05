import { Shell } from "@/components/Shell";
import { SectionHeader } from "@/components/SectionHeader";

const methodology = [
  "The platform uses neutral universal layers for non-finance topics: Source Layer, Evidence Layer, Qualification Layer, Analysis Layer, Explanation Layer, and Publication Layer.",
  "The finance module is the first proof module and does not define how unrelated disciplines are labeled.",
  "Aircraft-inspired labels are historical private analogies from the finance/trade-log qualification project only.",
  "Outputs should remain reviewable, source-aware, and clear about limitations."
];

export default function MethodologyPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Methodology" title="Universal structure, domain-specific rules" />
        <div className="grid gap-5 md:grid-cols-2">
          {methodology.map((item) => (
            <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 leading-7 text-slate-300">{item}</article>
          ))}
        </div>
      </main>
    </Shell>
  );
}
