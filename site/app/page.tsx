import Link from "next/link";
import { getAllGuideMeta } from "@/lib/content";

export default function HomePage() {
  const guides = getAllGuideMeta();
  const groups = Array.from(new Set(guides.map((g) => g.group)));

  return (
    <>
      <h1>ISO Reference Pack for AI Compliance</h1>
      <p className="lede">
        A free-to-read reference pack on the ISO/IEC standards most relevant to building and
        governing AI systems responsibly. Every guide below is an original summary written by
        On The Ground, with a citation back to its source — not a copy of the source text.
      </p>
      <div className="notice">
        Compiled to accompany <em>App Design in Legal</em>, an SMU Academy course conducted by
        trainers from{" "}
        <a href="https://www.straitsinteractive.com" target="_blank" rel="noopener noreferrer">
          Straits Interactive
        </a>
        . The course — its scope and choice of standards — originates from Straits Interactive&apos;s
        trainers (Harish Pillay, Mario Novello, and Cyndi Chua), not from On The Ground. This
        pack is independently-compiled reference material supporting that course, not the course
        material itself. Practitioner summaries below are
        OTG&apos;s paraphrase of secondary interpretations, not the ISO/IEC standard text, which
        is paywalled. See <Link href="/methodology">Methodology</Link> for sourcing rules and
        what was excluded from each source during rewriting.
      </div>

      {groups.map((group) => (
        <section className="guide-group" key={group}>
          <h2>{group}</h2>
          <ul className="guide-list">
            {guides
              .filter((g) => g.group === group)
              .map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="guide-card">
                    <span className="title">{g.title}</span>
                    <span className="meta">
                      {g.source_organization ? `${g.source_organization} · ` : ""}
                      {g.content_type || "reference"}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </>
  );
}
