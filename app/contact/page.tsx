import { Shell } from "@/components/Shell";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Contact" title="Professional contact path">
          For review, collaboration, institutional routing, publication discussion, donations, or technical evaluation, contact:
        </SectionHeader>
        <a href={`mailto:${site.contactEmail}`} className="block rounded-[2rem] border border-emerald-400/20 bg-emerald-500/10 p-7 text-2xl font-semibold text-white underline decoration-emerald-300/70 underline-offset-4">
          {site.contactEmail}
        </a>
      </main>
    </Shell>
  );
}
