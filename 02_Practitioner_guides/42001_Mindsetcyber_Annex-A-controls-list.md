---
title: "ISO/IEC 42001 Annex A Controls List: All 38 Controls (A.2 to A.10)"
source_organization: "Mindset Cyber"
source_url: "https://mindsetcyber.com.au/iso-42001-controls-list/"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
content_type: "checklist / practitioner guide"
license_note: "Summary and analysis by On The Ground (OTG). Original article © source_organization. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

## What Annex A is

ISO/IEC 42001:2023 is the certifiable international standard for Artificial Intelligence Management Systems (AIMS). Like other ISO management-system standards, it pairs high-level requirements (Clauses 4–10) with a reference control set in Annex A and non-mandatory implementation guidance in Annex B. Annex A holds 38 controls across nine control objectives, each objective corresponding to a domain of AI-specific risk: policy, internal organization, resources, impact assessment, system life cycle, data, transparency to interested parties, responsible use, and third-party relationships. The controls are written at a principle level rather than as prescriptive technical requirements — an organization decides which apply, records that decision (with justification) in a Statement of Applicability, and implements the selected controls proportionate to the risks identified in its AI system impact assessment.

## Annex A (ISO/IEC 42001) vs. Annex A (ISO/IEC 27001)

| Aspect | ISO/IEC 27001 Annex A | ISO/IEC 42001 Annex A |
|---|---|---|
| Number of controls | 93 | 38 |
| Grouping | 4 themes (Organisational, People, Physical, Technological) | 9 control objectives (A.2–A.10) |
| Focus | Confidentiality, integrity, availability of information assets | AI-specific risk: bias, transparency, data quality, human oversight, societal impact |
| Supporting guidance | ISO/IEC 27002 | Annex B of ISO/IEC 42001 |
| Certifiable | Yes | Yes |

Organizations that already hold ISO/IEC 27001 certification generally find ISO/IEC 42001 faster to implement, because the management-system clauses (context, leadership, planning, support, operation, evaluation, improvement) follow the same underlying structure. What's genuinely new is the AI-specific Annex A content and the AI system impact-assessment process introduced under A.5.

## The full list of 38 Annex A controls

The table below lists every control by code and title, with a short plain-language restatement of what each one is asking for. Wording below is an original paraphrase, not a quotation of any published standard text or of the source article.

### A.2 — Policies related to AI (3 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.2.2 | AI policy | A written, management-approved AI policy describing how the organization develops and uses AI systems — the foundation the other controls build on. |
| A.2.3 | Alignment with other organisational policies | Check the AI policy against existing security, privacy, risk, HR, procurement, and ethics policies, and reconcile any conflicts rather than letting the AI policy stand apart from them. |
| A.2.4 | Review of the AI policy | Review the policy on a planned cycle and after material triggers (new regulation, a new AI use case, lessons from an incident) to confirm it still reflects reality and still has management backing. |

### A.3 — Internal organisation (2 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.3.2 | AI roles and responsibilities | Explicitly assign who is accountable for each AI-related activity — risk management, impact assessment, development, oversight, data quality, security, supplier management — so nothing sits in a gap between roles. |
| A.3.3 | Reporting of concerns | Provide a way (confidential, and protected from retaliation where relevant) for staff, contractors, and outside parties to raise concerns about how AI is built or used, with a defined path for investigating and escalating what's reported. |

### A.4 — Resources for AI systems (5 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.4.2 | Resource documentation | Maintain an inventory of the resources each AI system depends on across its life cycle — the baseline visibility that makes risk and impact assessment and incident response actually possible. |
| A.4.3 | Data resources | Record the details of every dataset a system uses: provenance, last update, category (training/validation/test/production), how it was labelled, its intended purpose, quality, retention period, and any known bias issues. |
| A.4.4 | Tooling resources | Record the algorithms, models, frameworks, libraries, and evaluation/provisioning tools a system depends on, so results can be reproduced and supply-chain risk assessed. |
| A.4.5 | System and computing resources | Record the compute, storage, network, and hosting environment (on-prem, cloud, edge) a system runs on, including capacity limits and the hardware's environmental footprint. |
| A.4.6 | Human resources | Record the people and competencies involved across the system's life — not just developers, but operators, domain experts, testers, oversight roles, and whoever handles change management or decommissioning. |

### A.5 — Assessing impacts of AI systems (4 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.5.2 | AI system impact assessment process | A repeatable process for assessing how a system could affect people and society, with defined triggers (criticality, complexity, sensitivity), defined scope, a named owner, and a route for findings to feed back into design and deployment decisions. |
| A.5.3 | Documentation of AI system impact assessments | Keep a written record of every assessment — intended use, foreseeable misuse, predictable failure modes and mitigations, affected groups, human-oversight arrangements — retained long enough to support audit, incident review, or a later change. |
| A.5.4 | Assessing AI system impact on individuals or groups of individuals | Specifically consider effects on people (fairness, accountability, transparency, privacy, safety, health, accessibility, financial impact, human rights), with particular attention to children, older people, workers, and other groups needing extra protection. |
| A.5.5 | Assessing societal impacts of AI systems | Extend the assessment past direct users: environmental footprint, economic effects, impact on democratic or government processes, public health and safety, cultural norms, and the potential for misuse or for reinforcing historical bias. |

### A.6 — AI system life cycle (9 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.6.1.2 | Objectives for responsible development of AI system | Set explicit responsible-development objectives (fairness, transparency, robustness, privacy, safety) as measurable design inputs, not aspirational language. |
| A.6.1.3 | Processes for responsible design and development of AI systems | Document the actual steps followed to design and build systems responsibly: life-cycle stages, testing requirements, human oversight, training-data rules, release criteria, approvals, change control, and engagement with interested parties. |
| A.6.2.2 | AI system requirements and specification | Capture functional and non-functional requirements — including risk and responsible-AI requirements — before building, document why the system exists, and keep requirements under change control as it evolves. |
| A.6.2.3 | Documentation of AI system design and development | Keep a traceable record of design decisions (ML approach, algorithms, data-quality assumptions, hardware/software components, security considerations, UI, human interaction, interoperability) tied back to the original requirements. |
| A.6.2.4 | AI system verification and validation | Define how the system will be verified (built correctly) and validated (built to solve the right problem): test methodology, test-data selection, release thresholds, and what an acceptable error rate means for this specific use case. |
| A.6.2.5 | AI system deployment | Maintain a written deployment plan with release criteria, sign-offs, and a rollback path, especially where the production environment differs from development. |
| A.6.2.6 | AI system operation and monitoring | Define day-to-day operation: performance monitoring (including drift, effects of continuous learning, and AI-specific threats like data poisoning), repair/update processes, and user support, each with a clear owner. |
| A.6.2.7 | AI system technical documentation | Work out what documentation each audience needs (users, partners, auditors, regulators) — intended purpose, usage instructions, runtime assumptions, limitations, monitoring — and deliver it in a form that audience can use. |
| A.6.2.8 | AI system recording of event logs | Decide what gets logged and at which life-cycle stages (at minimum during operation), so behavior can be evidenced, issues traced, audits and incidents supported, and drift outside intended operating conditions detected. |

### A.7 — Data for AI systems (5 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.7.2 | Data for development and enhancement of AI system | Operate data-management processes covering privacy, security, representativeness against the real operating domain, explainability/provenance, and the accuracy and integrity of the underlying data. |
| A.7.3 | Acquisition of data | Document where each dataset came from and how it was selected — internal, purchased, shared, open, or synthetic; static or streamed; known biases; data rights and prior uses; associated metadata. |
| A.7.4 | Quality of data for AI systems | Set explicit quality criteria (accuracy, completeness, currency, representativeness) and verify training and production data actually meet them, adjusting data or model where fairness or bias concerns arise. |
| A.7.5 | Data provenance | Track where each dataset came from and what has happened to it since — creation, updates, transformations, validation, transfers, sharing — across both the data's own life cycle and the AI system's, so lineage stays recoverable. |
| A.7.6 | Data preparation | Decide which preparation techniques (cleaning, labelling, augmentation, normalisation, encoding) are acceptable, document what was used per dataset, and record why, so the choices can be reviewed and repeated. |

### A.8 — Information for interested parties (4 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.8.2 | System documentation and information for users | Give users enough plain-language information to operate the system safely — capabilities, limits, expected inputs/outputs, known failure modes, human-oversight options — not just technical documentation aimed at engineers. |
| A.8.3 | External reporting | Provide a channel for anyone affected (customers, data subjects, the public) to report problems or unintended consequences, with a defined triage/investigation/resolution path. |
| A.8.4 | Communication of incidents | Plan in advance how affected parties will be told about an AI-related incident: what gets said, by whom, how fast, and through what channel — aligned with any applicable regulatory notification duties. |
| A.8.5 | Information for interested parties | Decide what other system information (beyond incidents) should be proactively shared with regulators, partners, customers, or the public, and document how and when. |

### A.9 — Use of AI systems (3 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.9.2 | Processes for responsible use of AI systems | Document how the system should actually be used responsibly: human-oversight expectations, acceptable-use rules, escalation paths, operator training, and conditions for pausing or stopping use. |
| A.9.3 | Objectives for responsible use of AI system | Define the responsible-use objectives (fairness thresholds, human-in-the-loop requirements, safety tolerances) the system is operated against, so day-to-day decisions have a fixed reference rather than relying on individual judgment. |
| A.9.4 | Intended use of the AI system | Guard against scope creep: keep the system operating within the purpose it was designed and assessed for, with controls that prevent repurposing or extension without re-assessment. |

### A.10 — Third-party and customer relationships (3 controls)

| Control | Title | What it asks for |
|---|---|---|
| A.10.2 | Allocation of responsibilities | Make explicit who is responsible for what across the AI supply chain — the organization, its suppliers, partners, and customers — so accountability gaps don't appear when something goes wrong. |
| A.10.3 | Suppliers | Vet and manage suppliers of AI services, data, models, and tooling against the organization's own responsible-AI expectations, through due diligence, contract terms, assessments, and ongoing oversight. |
| A.10.4 | Customers | Factor customer-facing obligations (contracts, regulatory commitments, duty of care) into decisions about developing, providing, or using AI, before those decisions are finalized. |

## A practical implementation order

Not every control carries equal urgency in a first implementation. A common sequencing, drawn from how organizations typically approach this in practice:

1. **A.2 and A.3 first.** Nothing else is coherent without an AI policy, alignment with existing policies, defined roles, and a concerns-reporting channel.
2. **Then A.5 — impact assessment.** ISO/IEC 42001 is fundamentally risk-based; without an impact-assessment process, there's no basis for deciding how deeply other controls need to apply.
3. **Then A.4 — resource documentation.** Knowing what data, tooling, compute, and people each system depends on feeds directly into the life-cycle and data controls that follow.
4. **Then A.7 and A.6 — data and life cycle.** These tend to be where most of the implementation effort actually lands.
5. **Then A.8 and A.10 — interested parties and suppliers.** External communication, user documentation, and supplier/customer due diligence generally depend on the inventories built earlier.
6. **A.9 — use of AI systems — last.** Responsible-use processes largely formalize behaviors that the earlier controls have already made possible.

## Frequently asked questions

**How many controls are in ISO/IEC 42001 Annex A?** 38, across nine control objectives (A.2–A.10).

**Are the Annex A controls mandatory?** No. They're informative — a reference set. The standard expects a risk-based approach: applicable controls are selected and justified in a Statement of Applicability, based on the organization's AI risk assessment, and exclusions must be justified too.

**How does Annex A compare to ISO/IEC 27001's Annex A?** ISO/IEC 27001 has 93 controls across four themes focused on protecting information's confidentiality, integrity, and availability. ISO/IEC 42001 has 38 controls across nine objectives focused on AI-specific concerns — bias, transparency, data quality, human oversight, societal impact, and the AI supply chain. An existing ISO/IEC 27001 ISMS gives a real head start rather than requiring governance to be rebuilt from zero.

**What is Annex B for?** Informative implementation guidance — practical detail on what a reasonable implementation of each Annex A control looks like. It supports implementation without adding new mandatory requirements; an organization isn't audited against Annex B directly.

**Do all 38 controls have to be implemented?** No — a risk assessment against the AI systems in scope determines which controls apply, and the result (including justified exclusions) goes into the Statement of Applicability, mirroring how ISO/IEC 27001 handles its own Annex A. In practice, because ISO/IEC 42001's controls are broad and principle-level rather than narrowly prescriptive, most organizations end up implementing the large majority of them.

**How does certification work?** An accredited certification body audits the AI management system against ISO/IEC 42001 in a two-stage audit, typically after a gap analysis, implementation of Clauses 4–10 and the relevant Annex A controls, an internal audit, and a management review.

**Where can the full standard text be read?** ISO/IEC 42001:2023 is a paid publication, available from iso.org or an authorized national standards body reseller (e.g., Standards Australia, as AS ISO/IEC 42001:2023).

## A note on the source

The original Mindset Cyber page this summary is drawn from is a marketing page for the company's PECB-accredited ISO/IEC 42001 training courses and a companion compliance-tracking tool, and included course pricing, enrollment calls-to-action, downloadable templates gated behind lead capture, and standard site furniture (cookie banner, navigation, customer reviews). None of that commercial material is reproduced here — this file retains only the factual control list and general implementation guidance, restated in original wording.

## Latest developments (as of 2026-10-05)

Dated facts below were gathered by OTG on 2026-10-05 from the cited URLs; where a primary page could not be opened, that is stated and the claim is marked as secondary or unverified.

### Source check (re-fetched 2026-10-05)
- No publication date shown; the page still refers to ISO/IEC 42001:2023 and the same implementation sequence. No mention of ISO/IEC 42006, amendments or the EU AI Act.
- Caution: this source and the Orbit/reconn summary in this folder split the 38 controls differently within groups (for example A.4, A.5, A.6, A.7, A.8 and A.10 counts differ) while both total 38. Neither could be checked against the paid ISO text, so confirm control numbering there before citing sub-clause numbers.

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
