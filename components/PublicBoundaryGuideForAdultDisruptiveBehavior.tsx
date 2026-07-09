import React from "react";
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  Ear,
  EyeOff,
  FileText,
  Home,
  Info,
  Shield,
  UserX,
  Wind
} from "lucide-react";

/**
 * Public Boundary Guide For Adult Disruptive Behavior
 * Version: 1.2.0
 * Purpose:
 * Public-facing informational website module for people dealing with unrelated adults
 * who repeatedly create loud, unhygienic, degrading, or emotionally disruptive environments,
 * while refusing responsibility and attempting to pull others into the same pattern.
 *
 * Installation target:
 * - React / Next.js / Vite
 * - TailwindCSS recommended
 * - Public article / resource page / educational module
 * - No user upload required
 * - No personal data collection
 */

const pageContent = {
  publicTitle: "How to Stay Separate From Unrelated Adults Who Create Loud, Unhygienic, Degrading Environments",
  publicSubtitle:
    "A practical public guide for people dealing with unrelated adults who repeatedly scream, cry, create strong odor, avoid responsibility, and pressure others to tolerate or mirror the same disorder.",
  corePosition:
    "You are not responsible for unrelated adults who refuse to manage their own behavior, hygiene, volume, or emotional regulation. Your responsibility is to protect your peace, standards, environment, and mental space.",
  primaryDisclaimer:
    "This page is for general informational and boundary-setting purposes only. It does not diagnose any person, replace professional advice, determine legal responsibility, or make claims about any specific individual or group. If a situation involves immediate danger, abuse, harassment, medical risk, unsafe housing, workplace violations, or protected rights, seek the appropriate professional, workplace, housing, medical, legal, or emergency support based on the circumstances.",
  shortDisclaimer:
    "This guide is for general informational and boundary-setting purposes only. It is not medical, legal, psychological, workplace, or housing advice. It does not diagnose anyone or assign responsibility to any specific person or group. If a situation involves danger, abuse, harassment, health risks, unsafe living conditions, workplace violations, or legal concerns, seek appropriate professional support.",
  plainLanguageSummary:
    "Some people are forced to deal with grown adults who behave in highly disruptive, degrading, or unhygienic ways. The issue is not curiosity, gossip, or judgment. The issue is the impact: odor, noise, emotional pressure, loss of peace, and unwanted exposure. This guide gives people language and structure to remain separate without becoming cruel, obsessed, or responsible for the behavior.",
  anchor:
    "Observe the behavior. Do not absorb it. Do not participate. Protect your standards. Continue forward."
};

const issueSignals = [
  {
    icon: Wind,
    title: "Persistent Odor Exposure",
    text:
      "The environment repeatedly smells unpleasant or unhygienic, and the odor affects comfort, focus, rest, or normal functioning."
  },
  {
    icon: Ear,
    title: "Repeated Screaming or Crying",
    text:
      "The same adults repeatedly scream, cry, yell, or create emotionally uncontrolled noise that takes over the space."
  },
  {
    icon: UserX,
    title: "Responsibility Avoidance",
    text:
      "Nobody involved accepts responsibility for the conduct, cleanup, volume, odor, or emotional disruption."
  },
  {
    icon: Ban,
    title: "Pressure to Normalize It",
    text:
      "Others expect you to tolerate the situation, smell it, hear it, watch it, excuse it, or become part of the same pattern."
  }
];

const responseLayers = [
  {
    title: "Name the Impact, Not the Person",
    body:
      "Do not build your public position around insults. Build it around impact: odor, noise, interruption, discomfort, boundary pressure, and inability to function normally."
  },
  {
    title: "Refuse Participation",
    body:
      "You do not have to become the audience, cleaner, emotional container, witness, or mirror for unrelated adults who refuse self-management."
  },
  {
    title: "Use Short Boundary Language",
    body:
      "Long explanations can pull you deeper into the disorder. Use short, neutral statements that protect your space without feeding the performance."
  },
  {
    title: "Protect Mental Space",
    body:
      "The more outrageous the behavior feels, the easier it is for your mind to keep replaying it. The goal is not to study it all day. The goal is to separate from it."
  }
];

const professionalPhrases = [
  "The odor and noise are affecting my ability to function in this space.",
  "I am not participating in this behavior.",
  "I need distance from this environment.",
  "Please keep this away from my space.",
  "This is not mine to carry or absorb.",
  "I will continue when the environment is respectful and manageable.",
  "I am leaving this area to protect my focus and peace."
];

const doDont = {
  do: [
    "Stay factual about what affects you: odor, noise, pressure, interruption, and discomfort.",
    "Create physical distance when possible.",
    "Use neutral language in shared spaces or formal settings.",
    "Protect your standards without obsessing over their behavior.",
    "Keep your attention on your health, work, income, discipline, and future."
  ],
  dont: [
    "Do not diagnose them.",
    "Do not argue with a public meltdown.",
    "Do not mirror the behavior.",
    "Do not become the audience for degradation.",
    "Do not let disgust become an attachment that occupies your whole mind."
  ]
};

function classNames(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(" ");
}

function Shell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#f8fafc] text-slate-950">{children}</main>;
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={classNames("mx-auto w-full max-w-6xl px-4 md:px-8", className)}>{children}</div>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={classNames("rounded-3xl border border-slate-200 bg-white shadow-sm", className)}>{children}</section>;
}

function Badge({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "light" | "amber" | "red" | "emerald" }) {
  const tones = {
    slate: "border-slate-700/20 bg-slate-900 text-white",
    light: "border-slate-200 bg-white text-slate-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    red: "border-red-200 bg-red-50 text-red-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800"
  };

  return <span className={classNames("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", tones[tone])}>{children}</span>;
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{kicker}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{subtitle}</p>}
    </div>
  );
}

function SignalCard({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  return (
    <Card className="p-5">
      <div className="mb-4 inline-flex rounded-2xl bg-slate-950 p-3 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </Card>
  );
}

function ListBlock({ title, items, icon: Icon, tone }: { title: string; items: string[]; icon: React.ElementType; tone: "safe" | "danger" }) {
  const toneClass = tone === "safe" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700";

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className={classNames("rounded-2xl p-2", toneClass)}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function DisclaimerBlock({ title, text, compact = false }: { title: string; text: string; compact?: boolean }) {
  return (
    <div className={classNames("rounded-3xl border p-5", compact ? "border-slate-200 bg-white" : "border-amber-200 bg-amber-50")}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className={classNames("rounded-2xl p-3", compact ? "bg-slate-100 text-slate-700" : "bg-amber-100 text-amber-800")}>
          <AlertTriangle className="h-6 w-6" />
        </div>
        <div>
          <h2 className={classNames("text-lg font-bold tracking-tight", compact ? "text-slate-950" : "text-amber-950")}>{title}</h2>
          <p className={classNames("mt-2 text-sm leading-7", compact ? "text-slate-700" : "text-amber-900")}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function PublicBoundaryGuideForAdultDisruptiveBehavior() {
  return (
    <Shell>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top_left,#38bdf8,transparent_35%),radial-gradient(circle_at_bottom_right,#64748b,transparent_30%)]" />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge>Public Information System</Badge>
              <Badge>No Upload Required</Badge>
              <Badge>Boundary Protection Guide</Badge>
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">{pageContent.publicTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{pageContent.publicSubtitle}</p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Core Position</p>
              <p className="mt-2 text-base leading-7 text-white">{pageContent.corePosition}</p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pt-8 md:pt-10">
        <div className="space-y-4">
          <DisclaimerBlock title="Disclaimer" text={pageContent.primaryDisclaimer} />
          <DisclaimerBlock title="Short Disclaimer" text={pageContent.shortDisclaimer} compact />
        </div>
      </Container>

      <Container className="py-10 md:py-14">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="rounded-2xl bg-slate-950 p-3 text-white">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">What This Guide Is About</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">{pageContent.plainLanguageSummary}</p>
              <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-800">
                Anchor: {pageContent.anchor}
              </p>
            </div>
          </div>
        </Card>
      </Container>

      <Container className="pb-10 md:pb-14">
        <SectionHeader
          kicker="Pattern Recognition"
          title="The Main Signals"
          subtitle="This section uses public, practical language. The focus is not on attacking people. The focus is on identifying the environmental and behavioral pressure being placed on you."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {issueSignals.map((signal) => (
            <SignalCard key={signal.title} {...signal} />
          ))}
        </div>
      </Container>

      <section className="bg-white py-10 md:py-14">
        <Container>
          <SectionHeader
            kicker="Response System"
            title="How to Respond Without Becoming Part of It"
            subtitle="The strongest answer is not cruelty, obsession, or endless arguing. The strongest answer is clean separation, practical boundaries, and language that cannot be pulled into the disorder."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {responseLayers.map((layer) => (
              <Card key={layer.title} className="p-5">
                <h3 className="text-lg font-bold tracking-tight">{layer.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{layer.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-14">
        <SectionHeader
          kicker="Practical Language"
          title="Public-Safe Boundary Phrases"
          subtitle="Use language that names the impact and protects your space. These phrases are strong because they are factual, short, and not dependent on insulting anyone."
        />
        <Card className="p-5 md:p-6">
          <div className="grid gap-3 md:grid-cols-2">
            {professionalPhrases.map((phrase) => (
              <div key={phrase} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-800">
                “{phrase}”
              </div>
            ))}
          </div>
        </Card>
      </Container>

      <section className="bg-slate-950 py-10 text-white md:py-14">
        <Container>
          <SectionHeader
            kicker="Mental Space Protection"
            title="The Key Rule: Do Not Let Their Disorder Become Your Identity"
            subtitle="A disruptive environment can take over your attention. This guide exists to prevent that. You can recognize the pattern without carrying it, joining it, or becoming responsible for it."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <EyeOff className="mb-4 h-6 w-6" />
              <h3 className="font-bold">Do Not Absorb</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Their odor, noise, and emotional disorder are environmental inputs. They are not your identity.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <Shield className="mb-4 h-6 w-6" />
              <h3 className="font-bold">Protect the Standard</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">You can hold hygiene, quiet, dignity, and self-control as standards without explaining yourself all day.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <Home className="mb-4 h-6 w-6" />
              <h3 className="font-bold">Return to Your Life</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Your life, work, health, and future deserve more attention than unrelated adults who refuse responsibility.</p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-14">
        <SectionHeader
          kicker="Do / Do Not"
          title="Clear Operating Rules"
          subtitle="This keeps the guide public-ready, professional, and useful for others dealing with the same type of pressure."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <ListBlock title="Do" items={doDont.do} icon={CheckCircle2} tone="safe" />
          <ListBlock title="Do Not" items={doDont.dont} icon={AlertTriangle} tone="danger" />
        </div>
      </Container>

      <Container className="pb-16 md:pb-24">
        <Card className="overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-950 p-3 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Public Summary</h2>
                <p className="text-sm text-slate-500">Final language for public use.</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-lg leading-9 text-slate-800">
              If unrelated adults repeatedly create loud, unhygienic, emotionally disruptive, or degrading conditions, you do not have to become responsible for them, tolerate endless exposure, or let their behavior occupy your mind. Focus on impact, not insult. Name the odor, noise, pressure, and disruption clearly. Create distance when possible. Use short boundary language. Protect your peace, hygiene standards, attention, and identity. Their disorder stays with them. Your focus stays with you.
            </p>
            <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Final Anchor</p>
              <p className="mt-2 text-xl font-bold">Not mine. Not me. I stay separate and continue forward.</p>
            </div>
          </div>
        </Card>
      </Container>
    </Shell>
  );
}
