import { Shell } from "@/components/Shell";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { disclosures } from "@/data/disclosures";

export default function DisclosuresPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Disclosures" title="Publication boundaries and disclaimers" />
        <div className="grid gap-5 md:grid-cols-2">
          {disclosures.map((disclosure) => <DisclosureBlock key={disclosure.title} disclosure={disclosure} />)}
        </div>
      </main>
    </Shell>
  );
}
