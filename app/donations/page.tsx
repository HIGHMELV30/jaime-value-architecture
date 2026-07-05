import { Shell } from "@/components/Shell";
import { SectionHeader } from "@/components/SectionHeader";

const donationRules = [
  "Donations are optional and voluntary.",
  "Donations do not purchase investment advice, trade signals, private recommendations, or guaranteed access.",
  "Donations do not create a client, adviser, fiduciary, consulting, or professional relationship.",
  "Donation language supports research, documentation, education, and platform development only.",
  "No promised outcome, return, result, or special financial guidance is attached to donations."
];

export default function DonationsPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-12 lg:px-10">
        <SectionHeader eyebrow="Donations" title="Voluntary support boundary">
          Donations support independent research, documentation, education, and platform development. They do not purchase financial advice, trade recommendations, guarantees, subscription access, or professional services.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2">
          {donationRules.map((rule) => (
            <article key={rule} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 leading-7 text-slate-300">{rule}</article>
          ))}
        </div>
      </main>
    </Shell>
  );
}
