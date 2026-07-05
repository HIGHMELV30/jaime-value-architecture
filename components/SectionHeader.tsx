export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{eyebrow}</p> : null}
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
      {children ? <div className="text-lg leading-8 text-slate-300">{children}</div> : null}
    </div>
  );
}
