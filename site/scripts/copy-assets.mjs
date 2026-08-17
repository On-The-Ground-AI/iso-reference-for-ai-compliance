import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(__dirname, "..");
const repoRoot = join(siteRoot, "..");

const srcPdfDir = join(repoRoot, "01_ISO_sample_PDFs");
const destPdfDir = join(siteRoot, "public", "pdfs");

mkdirSync(destPdfDir, { recursive: true });

if (existsSync(srcPdfDir)) {
  for (const file of readdirSync(srcPdfDir)) {
    if (file.endsWith(".pdf")) {
      copyFileSync(join(srcPdfDir, file), join(destPdfDir, file));
    }
  }
  console.log(`Copied PDF previews into public/pdfs/`);
} else {
  console.warn(`No ${srcPdfDir} found - skipping PDF copy.`);
}
