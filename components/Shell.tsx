import Link from "next/link";
import { routes, site } from "@/data/site";
import { footerDisclosure } from "@/data/disclosures";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10" aria-label="Main navigation">
          <Link href="/" className="focus-ring rounded-xl text-sm font-semibold tracking-wide text-white">
            {site.name}
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} className="focus-ring rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                {route.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {children}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-3 text-sm leading-6 text-slate-400">
          <p>{footerDisclosure}</p>
          <p>Contact: <a className="text-emerald-200 underline underline-offset-4" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
        </div>
      </footer>
    </div>
  );
}
