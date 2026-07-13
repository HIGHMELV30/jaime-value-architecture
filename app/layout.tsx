import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jaime-value-architecture.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jaime Value Architecture",
    template: "%s | Jaime Value Architecture",
  },
  description:
    "Universal understanding platform for structured evidence, qualified analysis, clear explanations, and publishable understanding.",
  applicationName: "Jaime Value Architecture",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jaime Value Architecture",
    title: "Jaime Value Architecture",
    description:
      "Universal understanding platform for structured evidence, qualified analysis, and publishable understanding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Value Architecture",
    description:
      "Universal understanding platform for structured evidence, qualified analysis, and publishable understanding.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
