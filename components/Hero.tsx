import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.30),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.32),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.78),rgba(2,6,23,1))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
        <div className="space-y-7">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm text-emerald-200">Independent Analysis Platform</span>
            <span className="rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-200">Donation-Compatible</span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">Independent Platform</span>
          </div>
          <div className="space-y-5">
            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">Jaime Value Architecture</h1>
            <p className="text-2xl font-medium text-emerald-200 md:text-3xl">Universal Understanding Platform</p>
            <p className="max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
              A professional, independent, educational, and analytical platform designed to convert complex information into structured evidence, qualified analysis, clear explanations, and publishable understanding across disciplines.
            </p>
          </div>
          <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-500/10 p-5 leading-8 text-emerald-100">
            Built for analyzable topics at every level of difficulty: advanced technical subjects, high-stakes strategic problems, institutional workflows, research-heavy material, and foundational concepts that require clear explanation.
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/analysis" className="focus-ring inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-emerald-400">
              Explore Analysis Library <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/disclosures" className="focus-ring inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-white transition hover:bg-white/10">
              Review Disclosures <Download className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-200"><Sparkles className="h-6 w-6" /></div>
            <div>
              <p className="text-sm text-slate-400">Launch Position</p>
              <h2 className="text-xl font-semibold text-white">Free, Independent, Educational, Analytical</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Platform Type", "Independent", "Educational and analytical; not advisory by default."],
              ["First Proof Module", "Finance", "Options-flow qualification engine from Q2 workbook intake."],
              ["Normalized Records", "3,891", "Processed from uploaded A-10 and Space Station workbooks."],
              ["Commercial Status", "Free", "No subscriptions or paid access at launch; donations optional."]
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-3xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
