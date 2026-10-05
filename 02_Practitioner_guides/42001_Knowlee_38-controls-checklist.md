---
title: "ISO/IEC 42001 Checklist (2026): The 38-Control Reference for AI Management Systems"
source_organization: "Knowlee"
source_url: "https://www.knowlee.ai/blog/iso-42001-checklist-ai-management"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
content_type: "blog post / checklist"
license_note: "Summary and analysis by On The Ground (OTG). Original article © source_organization. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

## What this is

Knowlee (an AI orchestration vendor) published a long-form checklist walking through ISO/IEC 42001 requirements, grouped into practitioner-friendly themes rather than following the standard's clause order strictly. The original also contains a substantial amount of vendor self-promotion — sections describing how Knowlee's own platform implements specific controls (role enforcement via JWT claims, a cron scheduler that blocks jobs pending human approval, etc.) and calls-to-action for Knowlee's paid "AI Act Readiness Assessment." That vendor material has been removed here as out of scope for a neutral reference; what remains is the general checklist structure, rewritten in original wording and cross-checked against ISO/IEC 42001's actual clause and Annex A structure.

**Important caveat on numbering:** the source article's specific Annex A sub-clause numbers (e.g., "A.5.1/A.5.2/A.5.3" for impact assessment, "A.8" for human oversight) do not match the numbering used in ISO/IEC 42001:2023's published Annex A, as cross-checked against two independent sources (see the companion files `42001_Konfirmity_controls.md` and `42001_Mindsetcyber_Annex-A-controls-list.md` in this directory, both of which agree with each other and with publicly available summaries of the standard's table of contents). In the real standard, Annex A objective A.5 is "Assessing impacts of AI systems" and A.8 is "Information for interested parties" — human oversight is addressed within A.6 (system life cycle) and A.9 (use of AI systems), not as its own numbered objective. Because of this discrepancy, the control numbers below are given only where they align with clause numbers in the main body of the standard (Clauses 4–10, which follow ISO's common high-level structure and are independently verifiable); Annex A content is described by topic rather than by a specific sub-clause number, to avoid repeating numbering that does not appear to be accurate.

## The checklist, reorganized by theme

### Governance and documentation

- **Organizational context (Clause 4.1)** — document the internal and external issues relevant to the AI management system (AIMS): regulatory environment, competitive landscape, organizational structure.
- **AIMS scope (Clause 4.3)** — formally define which AI systems, processes, and business units are in scope, and record the rationale for anything excluded. A scope statement copied wholesale from an existing ISO 27001 scope, without AI-specific tailoring, is a common audit finding.
- **AI policy (Clause 5.2)** — top management establishes and communicates a written AI policy committing to responsible AI use, continual improvement of the AIMS, and alignment with applicable legal obligations.
- **AIMS objectives (Clause 6.2)** — set measurable governance objectives with named owners and a defined measurement method.
- **Roles and accountability** — assign named individuals to AI-related roles (system owner, AIMS coordinator, oversight/reviewer functions) with documented authority to act — not just a title. Clause 5.3 requires top management to ensure these roles are assigned and communicated.

Organizations that already operate a certified ISO 27001 information security management system can typically extend their existing context, scope, and document-control work rather than building a parallel AI-specific set from scratch — though a separate AIMS scope statement and AI policy are still expected.

### Data governance

Annex A's data-related controls generally ask for: a record of what data each AI system uses (source, format, categories, including whether personal or sensitive data is involved); documented data-quality criteria for training and operational data; access restrictions on training data, model weights, and inference infrastructure; provenance and licensing records for datasets, particularly third-party ones; and treatment of personal data used in AI systems under the same privacy obligations (e.g., GDPR) that apply elsewhere in the organization, with AI-specific considerations such as training-data retention and how data-subject rights requests are fulfilled against a trained model.

**On ISO 27001 overlap:** it's commonly claimed in vendor marketing that a fixed percentage of ISO/IEC 42001 controls map directly onto ISO 27001 controls (a figure of "40%" appears in some sources, including the original version of this article). OTG could not independently verify a specific percentage, and control-mapping estimates like this vary depending on how granularly controls are counted and how "direct equivalent" is defined. What can be said with more confidence, based on the structural comparison in the companion Konfirmity and Mindset Cyber files, is that organizations with a mature ISMS have a real head start on the process and documentation controls (access control, logging, supplier assessment, document control, internal audit, management review), while several ISO/IEC 42001 Annex A objectives — impact assessment, AI-specific data provenance and quality, and use-of-AI-system monitoring — have no direct ISO 27001 analog and require new work.

### Risk and impact assessment

Annex A's impact-assessment controls call for: an assessment of potential harm (physical, psychological, financial, discriminatory) for every AI system that affects people; proportionate controls, so that a low-impact system isn't held to the same evidentiary bar as one used in hiring or credit decisions; and defined triggers for re-assessment (new use case, new data source, retraining, a materially different user population).

Separately, Clause 6.1 requires a general risk assessment and treatment process covering AI-specific risks (model failure, discriminatory output, data poisoning, adversarial inputs, third-party model dependencies), recorded in a risk register with named owners and treatment plans.

ISO/IEC 42001 itself does not define risk tiers — it is framework-agnostic. Organizations operating under the EU AI Act commonly use the Act's own risk classification (prohibited, high-risk, GPAI with systemic risk, limited/transparency obligations, minimal risk) to decide how deeply to implement the AIMS controls, applying the fullest Annex A control set to high-risk systems and a lighter touch elsewhere. This is a common implementation practice rather than a requirement written into ISO/IEC 42001 itself.

Clause 9 (performance evaluation — monitoring, internal audit, management review) is frequently cited as overlapping substantially with the EU AI Act's post-market monitoring obligations for high-risk systems (Article 9(7)), meaning a single monitoring process can often serve both purposes. Readers relying on this for compliance purposes should check the current text of the Act rather than take the cross-reference as legal advice.

### Vendor and third-party due diligence

Before deploying a third-party AI system, Annex A calls for assessing whether the supplier has documented the system's intended purpose, performance, known limitations, and data governance practices; for contracts that require notification of significant changes, performance guarantees, incident reporting, and audit rights; and for ongoing (not just pre-procurement) monitoring of third-party AI systems, at a frequency proportionate to risk.

Where a supplier processes personal data, this due diligence typically runs alongside a GDPR Article 28 data processing agreement rather than as a separate workstream.

### Human oversight and AI literacy

Annex A calls for: competency requirements defined per AI-related role; training proportionate to each role's exposure to AI (strategic literacy for senior management, process-specific training for operators, deeper technical grounding for whoever maintains the AIMS); and general staff awareness of the AI policy, individual responsibilities, and how to report concerns.

On the design side, AI systems in scope should be designed or configured so a human can monitor, interpret, override, interrupt, and halt their outputs; named individuals should hold documented, tested authority to do so; and override/halt mechanisms should be tested, not just described on paper.

In practice, training records are often the hardest evidence to assemble for a first audit — not because the requirement is conceptually difficult, but because records tend to be scattered across HR systems, LMS platforms, and email threads, and need consolidating before an assessor asks for them.

### Operational lifecycle

For each AI system in scope, the operational controls generally expect: documentation of purpose, intended use, user population, performance metrics, known limitations, and data used; logging sufficient to support review and incident investigation, with logs that are immutable, timestamped, and retained for a defined period; a documented change-management process (covering model updates, new use cases, data source changes) that includes re-assessing impact; an incident-management procedure covering identification, recording, investigation, and response to unexpected AI behavior that causes harm or a near-miss; and a retirement/decommissioning process covering data deletion, access revocation, documentation archival, and stakeholder notice.

Clause 8.1 is the general operational-planning requirement underpinning all of this — that the organization plans, implements, and controls the processes needed to meet its AIMS commitments.

### Documentation and audit evidence

Clause 7.5 requires documented information to be controlled — approved, versioned, distributed, retained, and disposed of according to a defined procedure. Auditors tend to check version history and approval records more closely than document wording itself; a well-written policy with no approval trail is more likely to draw a finding than a shorter policy with a clear sign-off history.

ISO/IEC 42001 specifies mandatory documented information at several points, including: the AIMS scope (4.3), the AI policy (5.2), risk assessment results (6.1), objectives (6.2), competency evidence (7.2), internal audit results (9.2), and management review outputs (9.3). Clause 9.2 requires planned internal audits against the standard; Clause 9.3 requires periodic management review covering audit results, objective performance, risk status, and improvement opportunities; and Clause 10 requires nonconformities to be documented, root-caused, corrected, and tracked to prevent recurrence.

## On timelines and cost

The original source article quoted specific implementation timelines (roughly 4–8 months for organizations with an existing ISO 27001 ISMS, 9–15 months without one) and specific EUR certification-audit fee ranges. OTG has not independently verified these figures — actual timelines and certification body pricing vary considerably by organization size, scope, geography, and the certification body chosen, and figures published in a single vendor blog post should not be relied on as market benchmarks. Readers evaluating a real implementation timeline or budget should get current quotes from accredited certification bodies directly.

## ISO/IEC 42001 vs. the EU AI Act, in short

The two are legally independent: ISO/IEC 42001 is a voluntary, certifiable management-system standard; the EU AI Act is a mandatory regulation enforced by national market-surveillance authorities. ISO/IEC 42001 certification is not, by itself, an EU AI Act conformity assessment, and passing one does not automatically satisfy the other. That said, the two overlap substantially in substance (system inventories, risk assessment, logging, human oversight), so work done to satisfy ISO/IEC 42001 generally reduces — without eliminating — the effort needed for AI Act compliance.

## Latest developments (as of 2026-10-05)

Dated facts below were gathered by OTG on 2026-10-05 from the cited URLs; where a primary page could not be opened, that is stated and the claim is marked as secondary or unverified.

### Source check (re-fetched 2026-10-05)
- The page shows no publication date. It is still organised into themed control groups, repeats the timeline and fee ranges already flagged above as unverified, and does not mention ISO/IEC 42006, any amendment or the Digital Omnibus. Its statement that ISO/IEC 42001 is not an EU AI Act conformity route remains consistent with the facts below.

### Standard and companion standards
- **Edition status.** ISO/IEC 42001:2023 remained the only published edition as of early October 2026, with no amendment or corrigendum found in OTG's searches. OTG could not open the iso.org catalogue page directly (access blocked), so this rests on search-result summaries and should be re-checked at https://www.iso.org/standard/42001 before being relied on.
- **ISO/IEC 42006:2025** (requirements for bodies that audit and certify AI management systems) was published on 7 July 2025 per the ISO catalogue listing: https://www.iso.org/standard/42006 (listing not directly retrievable by OTG; date taken from search results). It builds on ISO/IEC 17021-1 and adds AI-specific competence and audit-effort expectations for certification bodies.
- **ISO/IEC 42005:2025** (guidance on AI system impact assessment) was published on 27 May 2025: https://www.iso.org/standard/42005 (date from search results; page not directly retrievable). It is guidance, not a certifiable requirement, and is the natural companion to the impact-assessment controls (A.5) in Annex A.
- **ISO/IEC 27001 interplay.** ISO/IEC 27001:2022 plus its 2024 amendment on climate-related context remains the current information-security edition; no new edition was found in October 2026 searches. Amendment listing: https://committee.iso.org/es/sites/isoorg/contents/data/standard/08/84/88435.html. Both management-system standards share the ISO harmonised structure, so an existing ISMS is a practical base for an AIMS. OTG did not verify any ISO/IEC 27002 changes.

### EU AI Act timeline
- **Digital Omnibus on AI adopted.** The Council gave final approval on 29 June 2026: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/ (page not directly retrievable; confirmed via search listing). The act is Regulation (EU) 2026/1744 of 8 July 2026, which amends Regulation (EU) 2024/1689; it was listed as published in the Official Journal on 24 July 2026 (https://www.eur-lex.europa.eu/eli/reg/2024/1689 consolidated-act listing; direct EUR-Lex fetch failed). Entry into force on 27 July 2026 is reported by secondary sources only: https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act (unverified against the Official Journal text).
- **Deferred high-risk dates.** Standalone (Annex III) high-risk obligations moved from 2 August 2026 to 2 December 2027; product-embedded (Annex I) high-risk obligations moved to 2 August 2028. Source: https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ and https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/eu-ai-act-unpacked-34-the-final-digital-omnibus-on-ai-key-amendments-to-the-a-102nber (law-firm analyses of the political deal and final text).
- **Other reported changes.** Article 50 transparency duties stay at 2 August 2026, with a grace period to 2 December 2026 for content-marking by systems already on the market; a new prohibition covers AI generation of non-consensual intimate imagery and child sexual abuse material; national sandbox deadline moved to 2 August 2027 (same Gibson Dunn and Freshfields pages). Treat these as secondary-source summaries and check the Official Journal text before acting.
- **Harmonised standards.** EN 18286:2026 (quality management system for AI Act purposes, tied to Article 17) was published as the first AI Act standard from CEN-CENELEC JTC 21: https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/ . Intertek reported on 29 September 2026 that it was not yet cited in the Official Journal (so no presumption of conformity yet), that its introduction encourages extending existing systems such as ISO/IEC 42001 rather than building a parallel one, and that other JTC 21 standards were expected from December 2026 to early 2027: https://www.intertek.com/blog/2026/10-01-en-18286-first-eu-ai-act-standards-puzzle-piece-is-on-the-table/ . ISO/IEC 42001 itself is not a harmonised standard, so certification still gives no legal presumption of conformity.

### Accreditation and certification market
- **Singapore accreditation.** The Singapore Accreditation Council programme for ISO/IEC 42001 took effect on 17 February 2025, assessing certification bodies against ISO/IEC 17021-1 and (then in final-draft form) ISO/IEC 42006, with the criteria to be updated after publication: https://www.sac-accreditation.gov.sg/media/launch-of-iso-iec-42001-artificial-intelligence-management-systems-accreditation-programme/ . A TUV SUD Singapore press release dated November 2025 reports its SAC accreditation for ISO/IEC 42001 (headline only checked): https://www.tuvsud.com/en-sg/newsroom/press-releases/2025/november/tuv-sud-singapore-accredited-by-sac-for-iso-iec-42001-2023 .
- **Other accreditations.** BSI announced on 10 March 2026 that it gained ANAB accreditation for ISO/IEC 42001, describing itself as the first body with ANAB, UKAS and RvA accreditation: https://www.bsigroup.com/en-US/insights-and-media/media-center/press-releases/2026/march/bsi-secures-anab-accreditation-to-certify-isoiec-42001/ . The release does not mention ISO/IEC 42006. Prefer an accredited body, and ask which version of the accreditation criteria it was assessed against.

### Singapore context
- **National standard.** Search results describe SS ISO/IEC 42001:2024 as an identical adoption of the international edition with a national annex pointing to AI Verify as a voluntary testing tool; OTG did not retrieve the Singapore Standards catalogue entry, so treat this as unverified.
- **Funding.** Enterprise Singapore's grant page lists support for first-year certification and professional-service costs: up to 50% for SMEs, 30% for others, capped at S$100,000 a year, excluding surveillance and renewal costs: https://www.enterprisesg.gov.sg/financial-support/edge-grant/standards/digitalisation/artificial-intelligence-management-system .
- **Standards leadership.** Singapore proposed a new international standard for testing generative AI (reported as ISO/IEC 42119-8) at the ISO/IEC JTC 1/SC 42 plenary it co-hosted in April 2026: https://www.techgoondu.com/2026/04/22/singapore-proposes-global-standard-to-test-generative-ai-systems-to-build-trust/ (secondary report).
