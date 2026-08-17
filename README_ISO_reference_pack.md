# ISO Reference Pack for AI Compliance

A free-to-read reference pack on the ISO/IEC standards most relevant to building and governing
AI systems responsibly — AI risk management, AI management systems, AI system life cycle,
data life cycle, and related standards.

**Context and credit:** This pack was compiled to accompany *App Design in Legal*, an SMU
Academy course conducted by trainers from [Straits Interactive](https://www.straitsinteractive.com).
The course itself — its scope, structure, and choice of standards — originates from Straits
Interactive's trainers, not from On The Ground. What's in this repo is independently-compiled,
publicly-sourced reference material that supports that course; it is not the course material
itself, and no course content is reproduced here (see below).

---

## How this pack is sourced, and why it's written the way it is

Two rules shape every file in here:

1. **No third-party content is reproduced wholesale.** Every file in `02_Practitioner_guides/`
   is an **original summary written by On The Ground**, not a copy of the source article. Each
   carries a citation header (title, author/organization, source URL, retrieval date) and a
   `license_note` making clear the original article is © its author — go to `source_url` for
   their full text. Where a source article contained unverifiable claims, invented statistics,
   or (in one case) content that looked like AI-generated filler, that material was dropped
   rather than repeated — see the individual files for notes on what was excluded and why.
2. **The standards themselves are paywalled.** `01_ISO_sample_PDFs/` contains only the free
   preview PDFs ISO/IEC publish themselves (typically the table of contents, scope, and opening
   clauses). Nobody in this pack reproduces a full purchased standard.

This pack's coverage was cross-checked against a private training deck for that
[Straits Interactive](https://www.straitsinteractive.com)-led SMU Academy course on AI
application design, which is course material restricted to its participants and carries an
explicit no-reproduction notice. **No text, slide content, or images from that deck appear
anywhere in this repo.** The only thing derived from it is `03_SMU_Deck_ISO_Index.md`, a
factual index of *which* standard numbers and generic template types the deck references —
standard names aren't copyrightable expression, and no slide wording is quoted.

---

## What's in here

```
iso-reference-for-ai-compliance/
├── README_ISO_reference_pack.md          ← this file
├── 01_ISO_sample_PDFs/                   ← official ISO preview PDFs (6)
├── 02_Practitioner_guides/               ← original OTG summaries of free third-party explainers, plus OTG's own research (18)
└── 03_SMU_Deck_ISO_Index.md              ← factual cross-reference index (see note above)
```

### 01_ISO_sample_PDFs — the closest thing to the real text

These are the official preview/sample PDFs. Each contains the **full table of contents,
scope, normative references, terms & definitions, and the opening of the main clauses**
(typically the first 10–14 pages verbatim). This is where to look for actual clause structure.

| File | Standard | Pages | What it exposes |
|---|---|---|---|
| `ISO-IEC-5338-2023_preview.pdf` | ISO/IEC 5338:2023 — AI system life cycle processes | 12 | Full Clause 6 process list, 6.4.1 → 6.4.17 including Disposal |
| `ISO-IEC-FDIS-5338_draft.pdf` | ISO/IEC FDIS 5338 (near-final draft) | 13 | More clause text than the published preview — best single source on 5338 |
| `ISO-IEC-5339-2024_preview.pdf` | ISO/IEC 5339:2024 — Guidance for AI applications | 11 | Stakeholder model, application framework |
| `ISO-IEC-8183-2023_preview.pdf` | ISO/IEC 8183:2023 — Data life cycle framework | 10 | The 10 data life-cycle stages |
| `ISO-IEC-23894-2023_preview.pdf` | ISO/IEC 23894:2023 — AI risk management | 12 | Annex A / B / C structure |
| `ISO-IEC-TR-5469-2024_preview.pdf` | ISO/IEC TR 5469:2024 — Functional safety and AI | 14 | Full TOC including Clauses 6–11 |

### 02_Practitioner_guides — original OTG summaries of free third-party explainers

Each file opens with a structured citation header (title, source organization, source URL,
retrieval date, license note) followed by an original-wording summary — not a copy of the
source article. Files note where claims from the underlying source couldn't be verified.

**ISO/IEC 42001 (AI management system)** — richest free ecosystem, because it's certifiable.

| File | Why it's useful |
|---|---|
| `42001_Knowlee_38-controls-checklist.md` | Checklist reorganized by theme, cross-mapped to the EU AI Act; flags that the source's specific Annex A sub-clause numbering doesn't match the published standard |
| `42001_Mindsetcyber_Annex-A-controls-list.md` | All 38 Annex A controls across the nine objectives, cross-checked against the standard's actual structure |
| `42001_Orbit-Reconn_controls-guide.md` | Each control group with auditor expectations |
| `42001_Konfirmity_controls.md` | Same 38 controls, second interpretation — useful to triangulate |
| `42001_AIGL_implementation-guide.md` | Clause-by-clause implementation roadmap |

**ISO/IEC 23894 (AI risk management)**

| File | Why it's useful |
|---|---|
| `23894_Techne_reference.md` | Most thorough. Full Annex B risk-source taxonomy, how consequence/likelihood differ for AI, relationship to 42001 and NIST |
| `23894_Huwyler_practitioner-guide.md` | Longest piece here (~9,400 words). Names the Annex B categories: complexity of environment, lack of transparency and explainability, level of automation, ML-specific risks, hardware issues, system life-cycle issues, technology readiness |
| `23894_AIStandardsHub_annexC.md` | Annex C — functional mapping of risk management across the AI life cycle |

**ISO/IEC 5338 (AI system life cycle)**

| File | Why it's useful |
|---|---|
| `5338_SoftwareImprovementGroup_explainer.md` | Most substantive free explainer of the life-cycle processes (by Rob van der Veer, who worked on the standard) |
| `5338_PillarSecurity_security-angle.md` | Continuous validation and security angle |

**ISO/IEC 8183 (data life cycle)**

| File | Why it's useful |
|---|---|
| `8183_iso8183com_microsite.md` | Dedicated microsite. Ten data stages; seven inside the data-processing boundary, three outside |
| `8183_Nemko_10-stage-guide.md` | Stage-by-stage guide |

**ISO/IEC 5339 (guidance for AI applications)**

| File | Why it's useful |
|---|---|
| `5339_CMSLaw_legal-update.md` | The "make / use / impact" framework and stakeholder model, written for lawyers |

**ISO/IEC TR 24030 and TR 5469**

| File | Why it's useful |
|---|---|
| `24030_5469_SFI-NorwAI_regulatory-review.md` | Covers both, including the TR 5469 three-stage realization principle for AI in safety-related systems |

**Aggregators worth bookmarking**

| File | Why it's useful |
|---|---|
| `AGGREGATOR_AIStandardsHub.md` | Alan Turing Institute + BSI. Dedicated, regularly-updated page for nearly every standard here. Most authoritative free tracker |
| `AGGREGATOR_VerifyWise_governance-library.md` | Clean explainers with cross-standard mapping |

**Related standards and templates — OTG's supporting research**

Unlike the files above, these two aren't rewrites of a single third-party explainer — they're
OTG-authored brief profiles compiled from multiple public sources, added after cross-referencing
against the [Straits Interactive](https://www.straitsinteractive.com) SMU Academy course deck
(indexed in `03_SMU_Deck_ISO_Index.md`), which surfaced gaps in this pack's coverage.

| File | Why it's useful |
|---|---|
| `RELATED_STANDARDS_briefly.md` | Brief profiles of five standards the deck referenced that this pack didn't yet cover: ISO/IEC 38505-1/-2 (data governance accountability map), ISO 37301 (compliance management systems), ISO/IEC 27001 (information security), ISO/IEC 27701 (privacy information management), and ISO/IEC 29100 (privacy framework). Honest about which are AI-specific (none are) versus general standards AI governance programs commonly reuse. Also includes a separately-verified note on ISO/IEC TR 24030's use-case template (it follows the IEC 62559-2 methodology, itself paywalled — no freely public template beyond that could be confirmed) |
| `TEMPLATE_model-cards.md` | Traces the "Model Card" AI documentation concept to Mitchell et al.'s 2019 paper (Google, freely available on arXiv) and confirms two genuinely free, actively maintained templates implementing it (Google's Model Card Toolkit, Hugging Face's model card format). Notes which AI standards touch on the same documentation/transparency concern (ISO/IEC 12792, and third-party commentary on ISO/IEC 42001 Clause 7.5) without overclaiming that any standard mandates the specific "model card" artifact by name |

---

## Two links could not be archived

Both block automated retrieval. Open them in a browser:

- **IEC blog, "Essential guidance for AI data lifecycle management"** (ISO/IEC 8183) — https://www.iec.ch/blog/essential-guidance-ai-data-lifecycle-management *(blocks automated retrieval; note that `8183_Nemko_10-stage-guide.md` cited this same URL for a quote OTG could not verify as genuine — treat with caution if you do access it directly)*
- **Lexology, ISO/IEC 5339 overview** — https://www.lexology.com/library/detail.aspx?g=df187839-0df7-4e6b-8d05-f33fe81b61cd *(Lexology requires a free account)*

`5339_CMSLaw_legal-update.md` and `8183_Nemko_10-stage-guide.md` cover the same ground.

---

## Standards referenced in the Straits Interactive course deck

See `03_SMU_Deck_ISO_Index.md` for the full, properly-caveated factual index (standard numbers
and neutral topic labels only — no slide text reproduced). It originally flagged five standards
the deck referenced that this pack didn't yet cover in depth: ISO/IEC 38505-1/-2 (data
governance accountability), ISO 37301 (compliance management), ISO/IEC 27001 (information
security), ISO/IEC 27701 (privacy information management), and ISO/IEC 29100 (privacy
framework). Brief, OTG-authored profiles of all five — plus a follow-up check on the deck's
Model Card and ISO/IEC TR 24030 use-case-template mentions — now live in
`RELATED_STANDARDS_briefly.md` and `TEMPLATE_model-cards.md` (see above).

---

## Caveat before this goes near a client deliverable

The practitioner summaries — especially the ones based on certification-vendor blogs — are
**OTG's paraphrase of secondary interpretations, not the standard text**, and some underlying
source articles had unverifiable or inaccurate claims OTG excluded during rewriting (see each
file's citation header/notes). They're good for understanding structure and building a
framework. For anything going into a client contract or audit deliverable, verify wording
against a licensed copy of the actual standard.

For current pricing and purchase, check the standard's listing directly at
[iso.org](https://www.iso.org/standards.html) or your national standards body (e.g. Singapore
adopts several of these as free-to-view SS ISO/IEC standards, often cheaper than buying direct
from ISO).
