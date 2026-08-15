import type { Metadata } from "next";
import { Archivo, Bodoni_Moda, IBM_Plex_Mono } from "next/font/google";

import { GrainOverlay } from "@/components/grain-overlay";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/content";

import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description: company.positioning,
  keywords: [
    "Caffeine Media",
    "Caffeine Films",
    "Caffeine Studios",
    "Caffeine Post",
    "independent film",
    "film distribution",
    "film production",
    "post-production",
  ],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.positioning,
    siteName: company.name,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.positioning,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${bodoni.variable} ${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-dvh antialiased">
        <a
          href="#main"
          className="slate sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-crema focus:px-4 focus:py-3 focus:text-roast-950"
        >
          Skip to content
        </a>
        <GrainOverlay />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
