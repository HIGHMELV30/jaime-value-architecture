import { Shell } from "@/components/Shell";
import { SectionHeader } from "@/components/SectionHeader";

const boundaries = [
  "The finance module is the first installed proof module and demonstrates structured qualification, source integrity, and reviewable output generation.",
  "Aircraft-inspired labels referenced in this module are historical private analogies from a trade-log qualification project.",
  "Those labels are not sold, licensed, installed across unrelated topics, or presented as official aircraft branding.",
  "Finance content is analytical and educational only; it is not financial advice or a recommendation to trade."
];

export default function FinanceModulePage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Finance Module" title="First proof module, clearly separated" />
        <div className="grid gap-5 md:grid-cols-2">
          {boundaries.map((item) => (
            <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 leading-7 text-slate-300">{item}</article>
          ))}
        </div>
      </main>
    </Shell>
  );
}
