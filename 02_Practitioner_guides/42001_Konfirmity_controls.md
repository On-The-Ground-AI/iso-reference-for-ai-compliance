---
title: "ISO 42001 Controls: The 38 Annex A Controls, Explained"
source_organization: "Konfirmity"
source_url: "https://www.konfirmity.com/blog/iso-42001-controls"
retrieved: 2026-08-17
content_type: "blog post"
license_note: "Summary and analysis by On The Ground (OTG). Original article © source_organization. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

## Overview

ISO/IEC 42001:2023 splits into two parts: Clauses 4 through 10, which set out the management-system requirements themselves (context, leadership, planning, support, operation, performance evaluation, improvement — following the same high-level structure shared across ISO management-system standards), and Annex A, which supplies a reference catalogue of 38 controls grouped under nine control objectives numbered A.2 through A.10. (There is no A.1 control group; A.1 is the annex's introductory clause.)

The central point this article makes, and one worth repeating, is that Annex A is not a checklist to implement top to bottom. It's a catalogue an organization draws from, and which controls get pulled in should be justified by that organization's own AI risk assessment and AI system impact assessment. That selection is recorded in a Statement of Applicability (SoA).

## The nine control objectives

| Objective | Title | What it covers |
|---|---|---|
| A.2 | Policies related to AI | The AI policy itself, its alignment with other organizational policies, and periodic review |
| A.3 | Internal organization | AI-related roles, responsibilities, and a channel for reporting concerns |
| A.4 | Resources for AI systems | The data, tooling, compute, and human competence an AI system depends on |
| A.5 | Assessing impacts of AI systems | The process for assessing effects on individuals, groups, and society |
| A.6 | AI system life cycle | Responsible design, development, verification, deployment, and operation |
| A.7 | Data for AI systems | Data governance, quality, provenance, and preparation |
| A.8 | Information for interested parties | Transparency and documentation for users and affected parties |
| A.9 | Use of AI systems | Responsible, intended use and ongoing monitoring in operation |
| A.10 | Third-party and customer relationships | How responsibility is allocated across the AI supply chain |

## What each objective asks for

**A.2 — Policies related to AI.** A documented AI policy, approved by leadership, stating the organization's intent for developing and using AI responsibly. The policy needs to be consistent with adjacent policies (security, privacy, etc.) and reviewed on a planned cycle. Typical evidence: the approved policy with revision history, a record of how it was checked against other policies, and dated review records.

**A.3 — Internal organization.** This is the accountability objective: defined AI roles and responsibilities, plus a way for people to raise concerns about an AI system without having to go through the team that owns it. Evidence typically includes a responsibility assignment, an organizational chart showing ownership, and a documented reporting path with at least one worked example.

**A.4 — Resources for AI systems.** An AI system depends on more than model weights — this objective asks for an inventory of the data, tooling/compute, and human competence each in-scope system relies on. Evidence: a resource inventory per system, training and competence records, and documentation of the compute/tooling environment.

**A.5 — Assessing impacts of AI systems.** Arguably the objective that most distinguishes ISO/IEC 42001 from a pure information-security standard: a process for assessing the potential consequences an AI system can have on individuals, groups, and society, run at defined trigger points (e.g., before deployment, after material change). Evidence: a documented impact-assessment procedure, completed assessments for real systems, and the criteria that decide when an assessment is triggered.

**A.6 — AI system life cycle.** Governs responsible engineering across the system's life: design and development objectives, verification and validation before go-live, and deployment, operation, and eventual decommissioning, each with its own documentation. Evidence: a life-cycle procedure, design records showing responsible-AI objectives were actually considered, test/validation results, and deployment approvals tied to those results.

**A.7 — Data for AI systems.** Where data quality and provenance get pinned down: quality expectations for training and operational data, records of where data came from, and documentation of how it was prepared before use. If an AI system produces biased or unreliable output, this is usually the objective an auditor traces the root cause back to. Evidence: a data governance definition specific to AI, provenance records, documented quality criteria, and preparation/labelling logs.

**A.8 — Information for interested parties.** The transparency objective: giving users and other affected parties what they need to understand and use a system appropriately — intended purpose, limitations, how to report a problem. Evidence: user-facing documentation, disclosures about purpose and limits, and a functioning issue-reporting channel.

**A.9 — Use of AI systems.** Where A.6 is about building systems responsibly, A.9 is about using them responsibly: staying within the system's intended purpose and defined boundaries, and monitoring behavior during operation. Evidence: an intended/acceptable-use definition per system, monitoring records, and a defined response path for when a system drifts outside intended use.

**A.10 — Third-party and customer relationships.** Few organizations build their entire AI stack in-house, so this objective addresses the supply chain: clearly allocating responsibility between the organization, its suppliers, and its customers so nothing falls through a gap. Evidence: a documented responsibility split, contractual clauses carrying AI obligations to suppliers, and assessments of the third-party models or data the organization depends on.

## The Statement of Applicability

The SoA is where the 38 reference controls become an organization's actual control set. The expected order of operations is: run the AI risk assessment and AI system impact assessment first, let those determine which controls are needed, and only then check the result against Annex A to confirm nothing relevant was missed. For each Annex A control, the SoA records whether it applies, the justification either way, and current implementation status. A control excluded with sound, traceable reasoning is legitimate; a control marked out of scope with no rationale, or marked applicable with nothing behind it, is the kind of gap an assessor is likely to flag. In practice, the SoA tends to be one of the first documents an assessor asks to see.

## Annex B, C, and D

Annex B is informative implementation guidance — it explains, for each Annex A control, what a reasonable implementation looks like. It is not itself something an organization is audited against, but it is a practical reference when deciding what evidence a given control actually needs. Annex C catalogues potential AI-related risk sources (bias, security, explainability, and similar) to help feed a risk assessment. Annex D addresses applying the AIMS across different sectors and alongside other management systems. Certification is against the Clauses and Annex A; Annexes B, C, and D exist to help get there.

## ISO/IEC 42001 vs. ISO/IEC 27001

Both standards use the same Annex A + Statement of Applicability mechanism, and both treat their Annex A as a reference set justified by risk assessment rather than a mandatory list — but they address different subjects. ISO/IEC 27001:2022 carries 93 Annex A controls across four themes (organizational, people, physical, technological), aimed at protecting the confidentiality, integrity, and availability of information. ISO/IEC 42001's 38 controls, across the nine objectives above, address whether an AI system is used responsibly, fairly, and as intended — territory an information-security control set doesn't cover. Objectives like impact assessment (A.5) and AI-specific data governance (A.7) have no real equivalent in ISO/IEC 27001's catalogue.

## Frequently asked questions

**How many controls are in ISO/IEC 42001?** 38, in Annex A, grouped under nine control objectives numbered A.2 through A.10.

**Are all 38 controls mandatory?** No — Annex A is a reference set. Applicable controls are selected through the Statement of Applicability, driven by the organization's AI risk and impact assessments, and any exclusion needs to be justified.

**What's the difference between Annex A and Annex B?** Annex A is the control set an organization is certified against. Annex B is informative guidance on how to implement each Annex A control — useful, but not itself a requirement.

**Which controls cover data governance?** Objective A.7, "Data for AI systems," covering data quality, provenance, and preparation across the AI life cycle.

**How does this compare to ISO/IEC 27001's controls?** 38 AI-specific controls in nine objectives, focused on responsible AI and its impact, versus 93 controls in four themes focused on information security. Both use a Statement of Applicability to select the applicable subset.
