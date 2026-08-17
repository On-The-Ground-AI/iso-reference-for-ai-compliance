# ISO Reference Pack — App Design in Legal (SMU, Aug 2026)

Everything freely available on the ISO standards cited in the Module 4 deck
*"Generative AI Applications Design and Prompt Engineering in Compliance and Legal"*.

Downloaded 17 Aug 2026. 22 files, ~55,000 words of archived text plus 6 official ISO preview PDFs.

---

## What's in here

```
Learning/
├── README_ISO_reference_pack.md          ← this file
├── 01_ISO_sample_PDFs/                   ← official ISO preview PDFs (6)
└── 02_Practitioner_guides/               ← archived explainers, markdown (16)
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

### 02_Practitioner_guides — detailed free breakdowns

Archived as markdown with the source URL at the top of each file.

**ISO/IEC 42001 (AI management system)** — richest free ecosystem, because it's certifiable.

| File | Why it's useful |
|---|---|
| `42001_Knowlee_38-controls-checklist.md` | All 38 AIMS controls, cross-mapped to the EU AI Act and ISO 27001, with the audit evidence each one needs |
| `42001_Mindsetcyber_Annex-A-controls-list.md` | All 38 Annex A controls across the nine objectives; free checklist + Statement of Applicability template |
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

---

## Two links could not be archived

Both block automated retrieval. Open them in a browser:

- **IEC blog, "Essential guidance for AI data lifecycle management"** (ISO/IEC 8183) — https://www.iec.ch/blog/essential-guidance-ai-data-lifecycle-management
- **Lexology, ISO/IEC 5339 overview** — https://www.lexology.com/library/detail.aspx?g=df187839-0df7-4e6b-8d05-f33fe81b61cd *(Lexology requires a free account)*

`5339_CMSLaw_legal-update.md` and `8183_Nemko_10-stage-guide.md` cover the same ground.

---

## Where each standard shows up in the SMU deck

| Standard | Deck slides | Role in the module |
|---|---|---|
| ISO/IEC 5338 | 12–20, 30–31, 44, 54, 99–100, 177–185, 192–210 | The spine of the whole module. All four sections map to its 8 life-cycle stages |
| ISO/IEC 5339 | 11, 20, 37–38, 56, 147–150 | Stakeholder roles (AI Producer, Developer, Customer, User…) and the App Development Checklist |
| ISO/IEC 8183 | 14, 20, 79, 193, 211 | Data life cycle — the 5-stage LLM build mapped onto 10 data stages |
| ISO/IEC 23894 | 43, 144–146, 181 | Risk sources table used in the Section 2 learning outcomes |
| ISO/IEC TR 24030 | 43, 56–61 | The AI Use Case Submission Template (the assessment deliverable) |
| ISO/IEC TR 5469 | 102, 108–110, 114 | Functional safety, three-stage realization, acceptance checks |
| ISO/IEC 42001 | 19, 61, 78, 90, 181, 204, 213 | AI governance / management system wrapper |
| ISO/IEC 38505-1 & -2 | 92, 212–213 | Governance of data — the accountability map on slide 92 |
| ISO 27001 / 27701 / 37301 / 29100 | 61, 79, 100, 115, 179–180 | Referenced in passing for security, privacy and compliance management |

---

## Caveat before this goes near a client deliverable

The practitioner blogs — especially the certification-vendor ones — are **interpretations,
not the standard text**. They're good for understanding structure and building a framework.
For anything going into a client contract or audit deliverable, verify wording against a
licensed copy.

Prices as listed in the deck's glossary (slides 212–213):

| Standard | Published | Price |
|---|---|---|
| ISO/IEC 5338 | 2023 | CHF 177 |
| ISO/IEC 5339 | 2024 | CHF 155 |
| ISO/IEC TR 24030 | 2024 | CHF 221 |
| ISO/IEC 38505-1 | 2017 | CHF 132 |
| ISO/IEC 38505-2 | 2018 | CHF 132 |
| SS ISO/IEC 42001 | 2024 | SGD 63.40 (Singapore adoption — cheapest route to 42001) |

The four worth buying for a repeatable offering: **5338, 8183, 23894, 42001**.
Note the Singapore national adoption of 42001 at SGD 63.40 is far cheaper than the ISO original.
