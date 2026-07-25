import type { ReactNode } from "react";
import Link from "next/link";
import { routes, site } from "@/data/site";
import { footerDisclosure } from "@/data/disclosures";

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10"
          aria-label="Main navigation"
        >
          /
            {site.name}
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {routes.map((route) => (
              {route.href}
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

          <p>
            Contact:{" "}
            {`mailto:${site.contactEmail}`}
              {site.contactEmail}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
