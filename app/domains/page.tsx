import { Shell } from "@/components/Shell";
import { SectionHeader } from "@/components/SectionHeader";
import { domains } from "@/data/domains";

export default function DomainsPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Domains" title="Disciplines supported by the platform" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <article key={domain.domain} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <h2 className="text-2xl font-semibold text-white">{domain.domain}</h2>
              <p className="mt-3 leading-7 text-slate-300">{domain.purpose}</p>
              <p className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-6 text-slate-400">{domain.examples}</p>
            </article>
          ))}
        </div>
      </main>
    </Shell>
  );
}
