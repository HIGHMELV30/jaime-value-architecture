import type { Disclosure } from "@/lib/types";

export function DisclosureBlock({ disclosure }: { disclosure: Disclosure }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
      <h2 className="text-xl font-semibold text-white">{disclosure.title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{disclosure.body}</p>
    </article>
  );
}
