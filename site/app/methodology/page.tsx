import { getReadmeHtml } from "@/lib/content";

export const metadata = { title: "Methodology — ISO Reference Pack" };

export default function MethodologyPage() {
  const html = getReadmeHtml();
  return (
    <article>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
