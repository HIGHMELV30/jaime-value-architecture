import { Shell } from "@/components/Shell";
import { site } from "@/data/site";

export default function PrivacyPage() {
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-8 px-6 py-12 lg:px-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">
            Privacy
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Privacy notice
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            This notice explains how information submitted through {site.name} is
            handled.
          </p>
        </div>

        <div className="space-y-7 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Information collected
            </h2>

            <p>
              Contact forms may collect your name, work email, company, service
              interest, and message. Do not submit passwords, payment
              information, confidential records, or regulated personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Purpose
            </h2>

            <p>
              Submitted information is used to review and respond to
              professional inquiries, evaluate project fit, maintain security,
              and document communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Sharing and retention
            </h2>

            <p>
              Information is not sold. It may be processed by authorized
              hosting, email, security, or workflow providers solely to operate
              the service. Records should be retained only as long as reasonably
              necessary for communication, security, and legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Security and choices
            </h2>

            <p>
              Reasonable safeguards are used, but no internet transmission is
              guaranteed to be risk-free. To request access, correction, or
              deletion, contact{" "}
              <a
                href="mailto:jaimemaldonado@loadedstar.llc"
                className="text-emerald-200 underline underline-offset-4"
              >
                jaimemaldonado@loadedstar.llc
              </a>
              .
            </p>
          </section>

          <p className="text-sm text-slate-500">
            Publication notice: This operational policy should receive
            jurisdiction-specific legal review before use in regulated or
            high-risk contexts.
          </p>
        </div>
      </main>
    </Shell>
  );
}
