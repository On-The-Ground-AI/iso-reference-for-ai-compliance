import { getPdfList } from "@/lib/content";

export const metadata = { title: "Standard Previews — ISO Reference Pack" };

export default function StandardsPage() {
  const pdfs = getPdfList();

  return (
    <>
      <h1>Official Standard Previews</h1>
      <p className="lede">
        These are the free preview/sample PDFs ISO/IEC publish themselves — typically the table
        of contents, scope, normative references, terms &amp; definitions, and the opening of the
        main clauses. Nothing here is a full purchased standard.
      </p>
      <ul className="pdf-list">
        {pdfs.map((p) => (
          <li key={p.file}>
            <a href={`/pdfs/${p.file}`} target="_blank" rel="noopener noreferrer">
              {p.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
