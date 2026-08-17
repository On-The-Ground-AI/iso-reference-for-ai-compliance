import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getGuideSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getGuide(slug);
    return { title: `${meta.title} — ISO Reference Pack` };
  } catch {
    return { title: "Guide not found" };
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let guide;
  try {
    guide = getGuide(slug);
  } catch {
    notFound();
  }
  const { meta, html } = guide!;

  return (
    <article>
      <Link href="/" className="back-link">
        ← All guides
      </Link>
      <span className="tag">{meta.group}</span>
      <h1>{meta.title}</h1>

      <div className="citation-box">
        <dl>
          <dt>Source</dt>
          <dd>{meta.source_organization || "—"}</dd>
          {meta.source_url && (
            <>
              <dt>URL</dt>
              <dd>
                <a href={meta.source_url} target="_blank" rel="noopener noreferrer">
                  {meta.source_url}
                </a>
              </dd>
            </>
          )}
          {meta.content_type && (
            <>
              <dt>Type</dt>
              <dd>{meta.content_type}</dd>
            </>
          )}
          {meta.retrieved && (
            <>
              <dt>Retrieved</dt>
              <dd>{meta.retrieved}</dd>
            </>
          )}
          {meta.license_note && (
            <>
              <dt>License note</dt>
              <dd>{meta.license_note}</dd>
            </>
          )}
        </dl>
      </div>

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
