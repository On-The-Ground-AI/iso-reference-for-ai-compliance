import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISO Reference Pack for AI Compliance",
  description:
    "A free, original-summary reference pack on the ISO/IEC standards most relevant to building and governing AI systems responsibly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">
              ISO Reference Pack <span>for AI Compliance</span>
            </Link>
            <nav>
              <Link href="/">Guides</Link>
              <Link href="/standards">Standard Previews</Link>
              <Link href="/deck-index">Deck Cross-Reference</Link>
              <Link href="/methodology">Methodology</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              Compiled by On The Ground. Every summary is original wording with a source
              citation — see the <Link href="/methodology">methodology</Link> page for how
              this pack is sourced and why.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
