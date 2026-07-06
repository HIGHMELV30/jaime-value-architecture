"use client";

import { useMemo, useState } from "react";

type LayerColor = "cyan" | "violet" | "amber" | "rose" | "emerald" | "sky";

type SystemLayer = {
  id: string;
  title: string;
  short: string;
  icon: string;
  color: LayerColor;
  content: string;
  questions: string[];
};

type GlossaryItem = {
  term: string;
  definition: string;
};

type NoteProps = {
  title: string;
  text: string;
};

type InfoPanelProps = {
  icon: string;
  title: string;
  text: string;
};

const systemLayers: SystemLayer[] = [
  {
    id: "signal",
    title: "Observed Signal",
    short: "What is being noticed at the surface level.",
    icon: "S",
    color: "cyan",
    content:
      "The surface signal is repeated disruption, social noise, attention-seeking behavior, and low-value interference. The point is not to attack individuals. The point is to observe the pattern without letting the pattern control the observer.",
    questions: [
      "What behavior keeps repeating?",
      "What impact does it create?",
      "Is the behavior isolated or recurring?",
    ],
  },
  {
    id: "root",
    title: "Root-Cause Diagnosis",
    short: "The deeper source underneath the visible behavior.",
    icon: "R",
    color: "violet",
    content:
      "The root problem is not simple negativity. It is unused human energy mixed with pressure, weak direction, limited growth channels, and low accountability. When that pressure is not redirected into development, it can become friction.",
    questions: [
      "Where is the unused energy coming from?",
      "What growth path is missing?",
      "Who is avoiding responsibility?",
    ],
  },
  {
    id: "system",
    title: "System Failure Layer",
    short: "Where institutions, communities, and structures fail to redirect energy.",
    icon: "N",
    color: "amber",
    content:
      "The system fails when it allows available human energy to remain unmanaged. People still carry personal responsibility, but the wider structure also has a duty to create productive channels: work, training, discipline, accountability, and advancement.",
    questions: [
      "What structure should have redirected this?",
      "Where is accountability missing?",
      "Which channel should convert pressure into growth?",
    ],
  },
  {
    id: "misread",
    title: "False Power Interpretation",
    short: "Why disruption can be mistaken for influence.",
    icon: "P",
    color: "rose",
    content:
      "Mass disruption can look like power, but it is not necessarily power. It can be accumulated frustration being organized into temporary satisfaction. Real power builds, sustains, protects, and produces value. Misery only searches for an outlet.",
    questions: [
      "Is this building anything?",
      "Is this creating value?",
      "Is it discipline or temporary satisfaction?",
    ],
  },
  {
    id: "conversion",
    title: "Positive Conversion Strategy",
    short: "How to extract knowledge and impact from something negative.",
    icon: "C",
    color: "emerald",
    content:
      "The goal is to convert the negative pattern into knowledge, language, structure, and redirected productivity. That means transforming observation into a framework that helps explain social-productivity failure without feeding personal conflict.",
    questions: [
      "What knowledge can be extracted?",
      "What structure can be built?",
      "How can wasted energy become growth?",
    ],
  },
  {
    id: "standard",
    title: "Professional Response Standard",
    short: "How to respond without becoming part of the disorder.",
    icon: "Q",
    color: "sky",
    content:
      "The response must remain controlled, professional, documented, proportional, and focused on conduct rather than personal devaluation. The strongest position is to understand the disorder without letting it define the response.",
    questions: [
      "What needs to be documented?",
      "What should not receive energy?",
      "What response protects the standard?",
    ],
  },
];

const glossary: GlossaryItem[] = [
  {
    term: "Wasted Human Energy",
    definition:
      "Available time, pressure, attention, and effort that could be converted into growth, productivity, or discipline, but instead becomes friction or noise.",
  },
  {
    term: "Social-Productivity Failure",
    definition:
      "A condition where people are not properly redirected into productive pathways such as skills, work, accountability, training, or advancement.",
  },
  {
    term: "False Power",
    definition:
      "The appearance of influence created by volume, disruption, or attention, without real construction, responsibility, or value creation.",
  },
  {
    term: "Professional Distance",
    definition:
      "The discipline of observing and naming a pattern without lowering the response into personal attack or emotional overpayment.",
  },
];

function classNames(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(" ");
}

function colorClasses(color: LayerColor, selected = false) {
  const map: Record<LayerColor, string> = {
    cyan: selected
      ? "border-cyan-300 bg-cyan-400/15 text-cyan-100"
      : "border-slate-800 bg-slate-900/80 text-slate-100 hover:border-cyan-400/60",
    violet: selected
      ? "border-violet-300 bg-violet-400/15 text-violet-100"
      : "border-slate-800 bg-slate-900/80 text-slate-100 hover:border-violet-400/60",
    amber: selected
      ? "border-amber-300 bg-amber-400/15 text-amber-100"
      : "border-slate-800 bg-slate-900/80 text-slate-100 hover:border-amber-400/60",
    rose: selected
      ? "border-rose-300 bg-rose-400/15 text-rose-100"
      : "border-slate-800 bg-slate-900/80 text-slate-100 hover:border-rose-400/60",
    emerald: selected
      ? "border-emerald-300 bg-emerald-400/15 text-emerald-100"
      : "border-slate-800 bg-slate-900/80 text-slate-100 hover:border-emerald-400/60",
    sky: selected
      ? "border-sky-300 bg-sky-400/15 text-sky-100"
      : "border-slate-800 bg-slate-900/80 text-slate-100 hover:border-sky-400/60",
  };

  return map[color];
}

export default function SocialProductivityInformationalSystem() {
  const [activeId, setActiveId] = useState("root");
  const [query, setQuery] = useState("");

  const activeLayer =
    systemLayers.find((layer) => layer.id === activeId) || systemLayers[0];

  const filteredGlossary = useMemo(() => {
    const clean = query.trim().toLowerCase();

    if (!clean) return glossary;

    return glossary.filter((item) =>
      `${item.term} ${item.definition}`.toLowerCase().includes(clean)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            <IconBadge value="JVA" />
            Informational System • Social Productivity
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-6xl">
                Wasted Human Energy → Growth Redirection
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                This system explains a social-productivity failure in professional
                language: when unused human energy, pressure, and weak direction
                are not redirected into growth, they can become friction,
                disruption, and false power.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="flex items-center gap-3 text-slate-200">
                <IconBadge value="T" />
                Core Thesis
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                The issue is not personal hatred. The issue is a system failing
                to convert available human energy into skills, work,
                responsibility, productivity, and measurable growth.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-6 grid gap-4 lg:grid-cols-2">
          <InterpretationNote
            title="Public Interpretation Note"
            text="This system analyzes behavior patterns and social-productivity failures. It is not intended to dehumanize individuals, target specific people, or assign blame without context. The focus is on redirecting wasted human energy into growth, responsibility, and productive structure."
          />
          <InterpretationNote
            title="Scope and Responsibility Note"
            text="This informational system is a social-productivity analysis. It does not classify individuals as inherently harmful, inferior, or responsible for broader systemic failure. The focus is on observable patterns, unused human energy, accountability gaps, and the failure to redirect pressure into growth, discipline, work, and productivity. Any examples should be interpreted as behavioral and structural observations, not personal accusations."
          />
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-3">
            {systemLayers.map((layer) => {
              const selected = activeId === layer.id;

              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveId(layer.id)}
                  className={classNames(
                    "group w-full rounded-3xl border p-4 text-left transition",
                    colorClasses(layer.color, selected)
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="mt-1 rounded-2xl bg-white/10 p-2">
                        <IconBadge value={layer.icon} />
                      </div>

                      <div>
                        <h2 className="font-semibold">{layer.title}</h2>
                        <p className="mt-1 text-sm leading-5 text-slate-400">
                          {layer.short}
                        </p>
                      </div>
                    </div>

                    <span
                      className={classNames(
                        "text-xl transition",
                        selected ? "rotate-90" : "group-hover:translate-x-1"
                      )}
                    >
                      ›
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <article className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <IconBadge value={activeLayer.icon} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Active Layer</p>
                <h2 className="text-2xl font-semibold">{activeLayer.title}</h2>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-300">
              {activeLayer.content}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="flex items-center gap-2 font-semibold">
                <IconBadge value="?" />
                Diagnostic Questions
              </h3>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {activeLayer.questions.map((question) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <InfoPanel
            icon="H"
            title="Human Layer"
            text="People remain responsible for their conduct, but the analysis stays focused on behavior, pressure, direction, and productivity—not dehumanizing language."
          />

          <InfoPanel
            icon="S"
            title="System Layer"
            text="The social failure appears when no institution, pathway, or structure converts available time and pressure into disciplined growth."
          />

          <InfoPanel
            icon="C"
            title="Conversion Layer"
            text="The positive impact comes from turning a negative pattern into vocabulary, structure, standards, and practical redirection."
          />
        </section>

        <section className="mt-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Professional Glossary</h2>
              <p className="mt-2 text-sm text-slate-400">
                Use consistent language so the system remains understandable,
                defensible, and public-facing.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <span className="pointer-events-none absolute left-3 top-2.5 text-sm text-slate-500">
                Search
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search concepts..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 py-2 pl-16 pr-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {filteredGlossary.map((item) => (
              <div
                key={item.term}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <h3 className="font-semibold text-cyan-100">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
          <div className="flex items-center gap-3">
            <IconBadge value="✓" />
            <h2 className="text-2xl font-semibold">
              Public Presentation Standard
            </h2>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            This public-facing system explains the social-productivity concept
            clearly while keeping private website structure, internal
            implementation details, and technical installation information
            outside the visible page.
          </p>
        </section>
      </section>
    </main>
  );
}

function InterpretationNote({ title, text }: NoteProps) {
  return (
    <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-5 shadow-xl">
      <div className="flex items-center gap-3">
        <IconBadge value="✓" />
        <h2 className="text-lg font-semibold text-cyan-100">{title}</h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function InfoPanel({ icon, title, text }: InfoPanelProps) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        <IconBadge value={icon} />
      </div>

      <h3 className="mt-4 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function IconBadge({ value }: { value: string }) {
  return (
    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-1 text-[10px] font-semibold text-cyan-200">
      {value}
    </span>
  );
}
