---
title: "ISO 42001 Controls: The Complete Annex A Implementation Guide"
source_organization: "reconn (Orbit by reconn)"
source_url: "https://orbit.reconn.io/iso-42001-controls-guide/"
retrieved: 2026-08-17
content_type: "practitioner guide"
license_note: "Summary and analysis by On The Ground (OTG). Original article © reconn. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

# ISO/IEC 42001 Annex A Controls: A Practitioner Summary

Original article by Shenoy Sandeep, founder of reconn, an AI-focused cybersecurity and PECB-certified training firm based in Dubai. Published 18 April 2026. This summary condenses the source article's walkthrough of ISO/IEC 42001's Annex A controls into original wording; specific numeric clause citations below are as stated in the source article and have not been independently verified against the paid ISO/IEC 42001 text.

## What Annex A controls are

ISO/IEC 42001 (published December 2023) is the AI management system (AIMS) standard. Its main clauses (4–10) define what the management system must do — establish context, set policy, plan risk treatment, run AI-related processes, evaluate performance, and improve. Annex A supplies a reference list of 38 controls, grouped into nine thematic areas, that an organisation can draw on when treating the risks it identifies. Annex B (informative, not mandatory) gives implementation guidance for each control.

Per the source article, Clause 6.1.3 (AI risk treatment) is where risk assessment and Annex A meet: organisations select applicable controls — from Annex A or elsewhere (ISO/IEC 27001, the NIST AI RMF, sector frameworks) — to address identified risks, and record the selection and justification in a Statement of Applicability (SoA). Controls are not simply documents; they can be technical mechanisms, organisational structures, processes, or records, and the source article stresses that auditors probe whether a documented control actually operates in practice, not just on paper.

## The nine control groups (38 controls total)

The article's structure works out to 3 + 2 + 6 + 3 + 10 + 4 + 5 + 3 + 2 = 38 controls, matching the standard's total. A condensed summary of each group's scope, in original wording:

- **A.2 — Policies for AI (3 controls).** Requires a documented AI policy shaped by business strategy, risk appetite, and legal context (A.2.2); alignment between the AI policy and other organisational policies such as information security and privacy (A.2.3); and a named owner responsible for periodically reviewing and updating the AI policy when circumstances change (A.2.4).
- **A.3 — Internal Organisation (2 controls).** Calls for clearly defined and communicated AI-related roles and accountabilities, going beyond job titles to specify who can halt an AI process (A.3.2), and a trusted, non-retaliatory channel for staff to raise concerns about AI system behaviour (A.3.3).
- **A.4 — Resources for AI Systems (6 controls).** The largest group after the life cycle group. Requires a maintained inventory of in-scope AI systems (A.4.1); documentation of the resources each system depends on (A.4.2); data-specific documentation covering provenance, categories, labelling, and known bias (A.4.3); documentation of algorithms, models, and tooling (A.4.4); documentation of computing/hosting infrastructure and its environmental footprint (A.4.5); and documentation confirming the human expertise needed to build and run the systems is available (A.4.6).
- **A.5 — Assessing Impacts of AI Systems (3 controls).** A defined, repeatable methodology for assessing AI system impacts on individuals, groups, and society (A.5.2); the actual execution of that assessment for each in-scope system, feeding into deployment decisions (A.5.3); and ongoing monitoring to confirm the system behaves as the assessment assumed (A.5.4).
- **A.6 — AI System Life Cycle (10 controls).** The largest group, spanning design through deployment: documented design requirements (A.6.1.1); governance of development data covering privacy, representativeness, and accuracy (A.6.1.2); development documentation capturing decisions and test results (A.6.1.3); explicit bias-identification controls (A.6.1.4); robustness testing under adversarial and edge-case conditions (A.6.1.5); an operational concept describing intended use in production (A.6.2.1); structured pre-deployment testing (A.6.2.2); human oversight with genuine authority to override AI outputs (A.6.2.3); event logging of system use and out-of-range outputs (A.6.2.4); and a formal deployment gate confirming testing, impact assessment, and oversight mechanisms are in place before go-live (A.6.2.5).
- **A.7 — Data for AI Systems (4 controls).** Operational-stage counterparts to A.4.3/A.6.1.2, covering data governance during live use (A.7.2), data acquisition and sourcing including data-rights considerations (A.7.3), ongoing data-quality controls (A.7.4), and handling of personal information in line with applicable privacy law (A.7.5).
- **A.8 — Information for Interested Parties (5 controls).** Transparency obligations: making AI system characteristics, capabilities, and limitations available to affected parties (A.8.2); disclosing when someone is interacting with or subject to an AI system (A.8.3); communicating known limitations (A.8.4); communicating intended use to prevent scope creep (A.8.5); and communicating material changes such as retraining (A.8.6).
- **A.9 — Responsible Use of AI Systems (3 controls).** Operational safeguards to keep AI systems within their intended use (A.9.2); documented responsibilities for appropriate use, including contractual terms with clients (A.9.3); and mechanisms to detect and respond to misuse (A.9.4).
- **A.10 — Third-Party and Customer Relationships (2 controls).** Due diligence and contractual oversight of externally sourced AI components or services, with the organisation remaining accountable for their impact (A.10.2); and clear allocation of responsibility across the life cycle when multiple organisations share development, deployment, and operation of a system (A.10.3).

## The Statement of Applicability

The SoA records, for every Annex A control (and any additional controls an organisation defines), whether it applies, why, how it is implemented, supporting documentation, and who owns it. The source article states this is defined at Clause 3.26 of the standard — a specific clause citation that could not be independently verified here since the full standard text is paywalled. According to the article, auditors scrutinise excluded controls closely: an exclusion without documented justification is treated as a nonconformity, and per Clause 6.1.3 Note 3 (also as cited in the source), organisations must document justification for any excluded control objective.

## Common implementation gaps

The source article, drawing on the author's consulting experience, identifies control areas that are frequently documented but not operationally real — for example, concern-reporting channels staff don't trust (A.3.3), undocumented training-data provenance (A.4.3), impact assessments described in policy but not evidenced in practice (A.5.3), missing bias-assessment methodology (A.6.1.4), human oversight without real override authority (A.6.2.3), deployment without completed sign-off (A.6.2.5), and third-party AI use without due diligence (A.10.2). These are the author's field observations rather than figures from a published survey, and should be read as anecdotal practitioner insight rather than verified statistics.

## Note on scope of this summary

This file omits the original's training-course promotion, contact details, author biography claims, and "related articles" links, none of which relate to the substance of ISO/IEC 42001. Readers seeking the complete control-by-control language, the FAQ section, and Annex B cross-references should consult the source article directly.
