import { Shell } from "@/components/Shell";

export default function PrivacyPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-8 px-6 py-12 lg:px-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Privacy
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Privacy notice
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            This notice explains how Jaime Value Architecture handles
            information submitted through the website.
          </p>
        </header>

        <div className="space-y-8 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Information collected
            </h2>
            <p className="mt-2">
              Contact pathways may collect your name, work email, company,
              service interest, and message. Do not submit passwords, payment
              information, confidential records, or regulated personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              How information is used
            </h2>
            <p className="mt-2">
              Submitted information may be used to review and respond to
              professional inquiries, evaluate project fit, maintain security,
              and document communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Sharing and retention
            </h2>
            <p className="mt-2">
              Information is not sold. Authorized hosting, email, security, or
              workflow providers may process information only as necessary to
              operate the website and respond to inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Security and individual choices
            </h2>
            <p className="mt-2">
              Reasonable safeguards may be used, but no internet transmission
              can be guaranteed to be completely risk-free. Privacy requests
              may be submitted through the website's established Contact page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Policy updates
            </h2>
            <p className="mt-2">
              This notice may be updated when the website's services,
              technology, or information-handling practices change.
            </p>
          </section>

          <p className="border-t border-white/10 pt-6 text-sm text-slate-500">
            This operational privacy notice should receive
            jurisdiction-specific legal review before the platform processes
            regulated or high-risk information.
          </p>
        </div>
      </main>
    </Shell>
  );
}
