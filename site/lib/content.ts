import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const REPO_ROOT = path.join(process.cwd(), "..");
const GUIDES_DIR = path.join(REPO_ROOT, "02_Practitioner_guides");
const PDFS_DIR = path.join(REPO_ROOT, "01_ISO_sample_PDFs");

export type GuideMeta = {
  slug: string;
  title: string;
  source_organization?: string;
  source_url?: string;
  retrieved?: string;
  content_type?: string;
  license_note?: string;
  group: string;
};

const GROUP_LABELS: Record<string, string> = {
  "42001": "ISO/IEC 42001 — AI Management System",
  "23894": "ISO/IEC 23894 — AI Risk Management",
  "5338": "ISO/IEC 5338 — AI System Life Cycle",
  "8183": "ISO/IEC 8183 — Data Life Cycle",
  "5339": "ISO/IEC 5339 — Guidance for AI Applications",
  "24030": "ISO/IEC TR 24030 & TR 5469 — Use Cases & Functional Safety",
  AGGREGATOR: "Aggregators & Trackers",
  RELATED_STANDARDS_briefly: "Related Standards (OTG supporting research)",
  TEMPLATE_model: "Templates & Documentation Practices",
};

function groupForSlug(slug: string): string {
  const prefix = slug.split("_")[0];
  if (GROUP_LABELS[prefix]) return GROUP_LABELS[prefix];
  if (slug.startsWith("RELATED_STANDARDS")) return GROUP_LABELS.RELATED_STANDARDS_briefly;
  if (slug.startsWith("TEMPLATE_")) return GROUP_LABELS.TEMPLATE_model;
  if (slug.startsWith("24030_5469")) return GROUP_LABELS["24030"];
  return "Other";
}

function fileSlugs(): string[] {
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllGuideMeta(): GuideMeta[] {
  return fileSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        source_organization: data.source_organization,
        source_url: data.source_url,
        retrieved: toDisplayString(data.retrieved),
        content_type: data.content_type,
        license_note: data.license_note,
        group: groupForSlug(slug),
      };
    })
    .sort((a, b) => a.group.localeCompare(b.group) || a.title.localeCompare(b.title));
}

export function getGuideSlugs(): string[] {
  return fileSlugs();
}

export function getGuide(slug: string): { meta: GuideMeta; html: string } {
  const raw = fs.readFileSync(path.join(GUIDES_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return {
    meta: {
      slug,
      title: data.title || slug,
      source_organization: data.source_organization,
      source_url: data.source_url,
      retrieved: toDisplayString(data.retrieved),
      content_type: data.content_type,
      license_note: data.license_note,
      group: groupForSlug(slug),
    },
    html,
  };
}

function toDisplayString(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

export function getMarkdownFile(absPath: string): string {
  const raw = fs.readFileSync(absPath, "utf8");
  return marked.parse(raw, { async: false }) as string;
}

export function getSmuIndexHtml(): string {
  return getMarkdownFile(path.join(REPO_ROOT, "03_SMU_Deck_ISO_Index.md"));
}

export function getReadmeHtml(): string {
  return getMarkdownFile(path.join(REPO_ROOT, "README_ISO_reference_pack.md"));
}

export type PdfMeta = { file: string; label: string };

export function getPdfList(): PdfMeta[] {
  if (!fs.existsSync(PDFS_DIR)) return [];
  return fs
    .readdirSync(PDFS_DIR)
    .filter((f) => f.endsWith(".pdf"))
    .sort()
    .map((f) => ({
      file: f,
      label: f.replace(/_/g, " ").replace(/\.pdf$/, ""),
    }));
}
