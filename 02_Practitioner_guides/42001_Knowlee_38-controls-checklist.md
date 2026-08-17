> Source: https://www.knowlee.ai/blog/iso-42001-checklist-ai-management
> Archived: 2026-08-17

---

# ISO/IEC 42001 Checklist (2026): The 38-Control Reference for AI Management Systems

A complete, ungated walkthrough of ISO 42001 controls, what they require, where they overlap with the [EU AI Act](/glossary/ai-act) and ISO 27001, and how to evidence each one for your first audit.

ISO/IEC 42001 is the first certifiable standard for AI Management Systems (AIMS). Published in late 2023, it is now appearing in EU public procurement tender requirements, and AIMS alignment is fast becoming a baseline expectation for enterprise AI vendors. Yet the SERP for "iso 42001 checklist" is dominated by gated consulting whitepapers that list section headings without the actual controls.

This article changes that. Below is the complete control-level checklist, 38 items drawn from the standard's core clauses and Annex A ([the canonical AIMS definition](/glossary/iso-42001)), with evidence guidance and cross-mappings to the EU AI Act and ISO 27001 so you can reuse existing compliance work rather than starting from zero. This is the control-by-control reference: work through it once you know you're pursuing certification. If you need the phased rollout first, scoping, documentation, training, audit, in what order and on what timeline, start with the [ISO 42001 Implementation Guide](/blog/iso-42001-implementation-guide) and come back here to check off controls as you go.

If you need the full multi-framework picture first, start with the [complete AI compliance checklist](/blog/ai-compliance-checklist-2026) and return here for the ISO 42001 deep dive.

------------------------------------------------------------------------

## Governance and Documentation {#governance-and-documentation}

### AI Policy, Scope, and AIMS Boundaries {#ai-policy-scope-aims}

Before a single control can be evidenced, the organization must draw a clear boundary around what the AIMS covers and publish a policy committing to [responsible AI](/glossary/responsible-ai).

**Controls in this section:**

1.  **\[Clause 4.1, Organizational context\]** Document internal and external issues that affect the AIMS (regulatory environment, competitive landscape, organizational structure). Evidence: a context register or equivalent section in your AIMS scope document.

2.  **\[Clause 4.3, AIMS scope\]** Define the scope formally: which AI systems, processes, and organizational units are in scope; what is explicitly excluded and why. Evidence: a signed scope statement. Auditors check that scope exclusions are justified, excluding a system that poses obvious risk triggers a finding.

3.  **\[Clause 5.2, [AI Policy](/glossary/ai-policy)\]** Top management must establish, communicate, and maintain a written AI Policy that commits to: responsible AI use, continual improvement of the AIMS, and alignment with applicable legal obligations. Evidence: a policy document with a revision history and distribution record.

4.  **\[Clause 6.2, AIMS objectives\]** Set measurable [AI governance](/glossary/ai-governance) objectives (e.g., "100% of AI systems with risk level = high reviewed before deployment"). Evidence: an objectives register with targets, responsible owners, and measurement methods.

**Auditor tip:** Clause 4-6 deficiencies are the most common first-audit findings for organizations with mature ISO 27001 programs. The gap is usually that the AIMS scope is written as a copy of the ISMS scope rather than an AI-specific document.

**EU AI Act overlap:** The AI Policy requirement mirrors Article 9 of the EU AI Act's risk management obligation for high-risk AI providers. A single policy document can address both if it is explicit about applicable AI Act obligations.

**ISO 27001 reuse:** ISO 27001 Clause 4.1 and 4.3 context-and-scope work is directly portable. Extend your existing ISMS context analysis to cover AI-specific issues rather than creating a separate document.

### Roles and Responsibilities (Annex A.3) {#roles-responsibilities-annex-a3}

5.  **\[Annex A.3.1, AI Roles\]** Assign named individuals to: AI system owner, AIMS coordinator (the person responsible for maintaining the AIMS), and AI reviewer (oversight of individual system decisions). Evidence: an assignment matrix or equivalent HR/governance record.

6.  **\[Annex A.3.2, Role authorities\]** Each role must have documented authority to act, not just a title. The AI system owner must have the authority to halt a system. Evidence: documented role descriptions with authority levels. Verbal authority structures fail audits.

7.  **\[Clause 5.3, Accountability\]** Top management must ensure AIMS roles are assigned and communicated. Evidence: minutes of an executive decision, or a board resolution for organizations using AI in high-risk contexts.

**Knowlee implementation note:** Knowlee maintains a public technical compliance map showing how each ISO 42001 control maps to platform features. For §5.3, Knowlee implements role enforcement via JWT claims (`admin/analyst/viewer`) with session ownership tracking, so every AI action is traceable to an authenticated role.

------------------------------------------------------------------------

## Data Privacy and Security {#data-privacy-and-security}

### Data Lifecycle Controls (Annex A.7) {#data-lifecycle-controls}

8.  **\[Annex A.7.1, Data for AI systems\]** Document what data is used by each AI system: source, format, volume, data categories (personal/sensitive/non-personal). Evidence: a data register per AI system, linked to your AI system inventory.

9.  **\[Annex A.7.2, Data quality\]** Establish quality criteria for training and operational data. Undocumented quality standards are a gap, the auditor will ask how you know the model's training data was appropriate. Evidence: a data quality policy or per-system quality criteria in the system documentation.

10. **\[Annex A.7.3, Data access controls\]** Restrict access to AI training data, model weights, and inference infrastructure on a need-to-know basis. Evidence: access control lists, IAM policies, or equivalent records.

11. **\[Annex A.7.4, Data provenance\]** Record the provenance of datasets used in AI system development and operation. For third-party datasets, retain licensing and terms records. Evidence: dataset metadata records.

12. **\[Annex A.7.5, Data privacy in AI\]** Personal data used in AI systems must be subject to the same GDPR obligations as personal data elsewhere in the organization, with an AI-specific addendum covering retention of training data and subject rights fulfillment. Evidence: DPIA referencing the AI system, or an AI-specific section in an existing DPIA. See also [DPIA for AI systems](/blog/dpia-for-ai-systems-template).

### ISO 42001 ↔ ISO 27001 / GDPR Overlap Map {#iso-overlap-map}

This is the highest-leverage efficiency question for teams already operating an ISMS. The short answer: roughly 40% of Annex A ISO 42001 controls have direct ISO 27001 equivalents; the remainder are AI-specific with no ISMS analog.

| ISO 42001 Control Area                                           | ISO 27001 Equivalent          | GDPR Article                  | Reusable?                            |
|------------------------------------------------------------------|-------------------------------|-------------------------------|--------------------------------------|
| Data access controls (A.7.3)                                     | A.9 (Access Control)          | Art. 25 (Privacy by design)   | Yes, extend existing                 |
| Audit trail / logging (A.6.2)                                    | A.12.4 (Logging)              | Art. 5(2) (Accountability)    | Yes, extend existing                 |
| Third-party AI assessment (A.10)                                 | A.15 (Supplier relationships) | Art. 28 (DPA)                 | Yes, extend existing                 |
| AI system impact assessment (A.5)                                | No equivalent                 | Art. 35 (DPIA)                | Partial, new AIMS procedure required |
| AI roles and responsibilities (A.3)                              | A.6.1 (Security roles)        | ,                             | Partial, extend with AI authorities  |
| [AI literacy](/glossary/ai-literacy) training (A.4)              | A.7.2 (Awareness)             | ,                             | Partial, add AI-specific content     |
| [Human oversight](/glossary/human-oversight-ai) mechanisms (A.8) | No equivalent                 | Art. 22 (Automated decisions) | No, new requirement                  |
| AI lifecycle management (A.6)                                    | No equivalent                 | ,                             | No, new requirement                  |

**Bottom line:** if you have a certified ISO 27001 ISMS, you have the governance plumbing. You need AI-specific content, not a parallel system.

------------------------------------------------------------------------

## Risk and Ethics {#risk-and-ethics}

### AI System Impact Assessment (Annex A.5) {#ai-system-impact-assessment}

13. **\[Annex A.5.1, Impact assessment scope\]** Conduct an impact assessment for every AI system that affects people, employees, customers, third parties. The assessment must consider potential harms: physical, psychological, financial, discriminatory. Evidence: a completed impact assessment per system.

14. **\[Annex A.5.2, Proportionate controls\]** The controls implemented must be proportionate to the identified impacts. A system with low impact and no sensitive data does not require the same control intensity as a system affecting hiring or credit decisions. Evidence: documented control selection rationale.

15. **\[Annex A.5.3, Assessment update triggers\]** Define triggers that require reassessment: new use cases, new data sources, model retraining, changes to the user population. Evidence: a written update procedure referenced in the impact assessment template.

### AI Act Risk Classification Mapped to ISO 42001 Controls {#ai-act-risk-mapping}

ISO 42001 is framework-agnostic, it does not impose its own risk tiers. But for EU organizations, mapping EU AI Act risk classification to ISO 42001 control intensity produces a practical implementation path.

| EU AI Act Classification        | ISO 42001 Control Intensity  | Key Controls Required                                |
|---------------------------------|------------------------------|------------------------------------------------------|
| **Prohibited** (Art. 5)         | N/A, system must not exist   | Clause 4.3 scope exclusion + legal sign-off          |
| **High-risk** (Annex III)       | Full Annex A implementation  | A.3, A.4, A.5, A.6, A.7, A.8, A.9, A.10 all required |
| **GPAI with systemic risk**     | Full + adversarial testing   | A.6, A.7, A.9 with enhanced monitoring               |
| **Transparency-only** (Art. 50) | Lightweight, A.3, A.6.2, A.8 | Documentation + human oversight + logging            |
| **Minimal risk**                | Voluntary, A.5 recommended   | Impact assessment to confirm classification          |

16. **\[§6.1, Risk assessment process\]** Identify, assess, and treat AI-specific risks: model failure, discriminatory output, data poisoning, adversarial inputs, third-party model dependencies. Evidence: a risk register with treatments and residual risk acceptance. See also [NIST AI RMF implementation guide](/blog/nist-ai-rmf-implementation-guide) for a complementary risk methodology.

17. **\[§6.1, Risk treatment plan\]** Document selected risk treatments, responsible owners, and target completion dates. Evidence: a treatment plan linked to the risk register, reviewed at management review intervals.

18. **\[Clause 9, AI Act high-risk classification overlap\]** For [AI Act high-risk systems](/blog/ai-act-high-risk-systems), the Clause 9 monitoring obligation (performance measurement, internal audits, management review) directly satisfies EU AI Act Article 9(7) post-market monitoring requirements. One documented monitoring process covers both.

> **Score your AI Act + ISO 42001 readiness in 20 minutes.** The [AI Act Readiness Assessment](/tools/ai-act-readiness-assessment) maps your current controls to both frameworks and identifies the highest-priority gaps.

------------------------------------------------------------------------

## Vendor and Third-Party {#vendor-and-third-party}

### Supplier Due-Diligence Requirements {#supplier-due-diligence}

19. **\[Annex A.10.1, Third-party AI assessment\]** Before deploying an AI system procured from a third party, assess whether the supplier has documented: the system's intended purpose, performance metrics, known limitations, and [data governance](/glossary/data-governance) practices. Evidence: a completed supplier assessment record.

20. **\[Annex A.10.2, Contractual requirements\]** Contracts with AI suppliers must include: obligations to notify of significant changes, performance guarantees, incident reporting procedures, and provisions for you to conduct or commission audits. Evidence: contract review records showing these clauses are present.

21. **\[Annex A.10.3, Ongoing monitoring\]** Third-party AI systems must be monitored after deployment, not just assessed at procurement. Define review frequency based on risk level. Evidence: a monitoring schedule with records of completed reviews.

**ISO 27001 reuse:** Annex A.15 supplier relationship controls are directly portable. Extend your existing supplier assessment template with AI-specific questions (intended purpose, training data provenance, model update frequency) rather than creating a separate AI procurement process.

**GDPR link:** Where the AI supplier processes personal data on your behalf, Article 28 GDPR requires a [Data Processing Agreement](/glossary/data-processing-agreement). Combine the ISO 42001 supplier assessment with your DPA review into a single supplier onboarding workflow.

------------------------------------------------------------------------

## Human Oversight and Training {#human-oversight-and-training}

### AI Literacy Program (Annex A.4) {#ai-literacy-program}

22. **\[Annex A.4.1, Competency requirements\]** Define the competency levels required for each AI-related role: system operators, reviewers, AIMS coordinator, senior management. Evidence: a competency matrix per role.

23. **\[Annex A.4.2, Training provision\]** Provide training proportionate to each role's exposure to AI systems. Senior management needs strategic literacy; operators need process-specific training; the AIMS coordinator needs deep technical understanding. Evidence: training records with completion dates and content descriptions.

24. **\[Annex A.4.3, Awareness\]** All staff who use, operate, or oversee AI systems must be aware of: the AI Policy, their responsibilities, and how to report concerns or incidents. Evidence: awareness records (e-learning completions, briefing attendance).

**Practical note:** ISO 42001 Annex A.4 is frequently the most time-consuming control to evidence in an initial audit, not because it is technically complex, but because training records are often scattered across HR systems, LMS platforms, and informal email trails. Consolidate records before the audit.

### Human-in-the-Loop Control Implementation {#human-in-the-loop}

25. **\[Annex A.8.1, Human oversight design\]** AI systems must be designed, or configured, so that humans can monitor, interpret, override, interrupt, and halt AI outputs. Evidence: design documentation showing how oversight capabilities work, tested with scenarios.

26. **\[Annex A.8.2, Oversight assignment\]** Named individuals must be assigned oversight responsibility for each AI system. Their authority to halt or override the system must be documented and tested. Evidence: oversight assignment records with documented authority.

27. **\[Annex A.8.3, Override mechanisms\]** Override and halt capabilities must be technically tested, not just documented. Evidence: test records showing that override actions function as intended. See also [human-in-the-loop AI policy template](/blog/human-in-the-loop-ai-policy-template).

**Knowlee implementation note:** Knowlee's technical compliance map documents blocking approval gates for jobs requiring human oversight: the cron scheduler skips execution of any job with "human-oversight required" set to true unless approver and approval timestamp are populated. Every approval is appended to the approvals log for audit purposes, satisfying both Annex A.8 and EU AI Act Article 14.

------------------------------------------------------------------------

## Operational Lifecycle Controls {#operational-lifecycle-controls}

### Development, Deployment, Monitoring (Annex A.6) {#development-deployment-monitoring}

28. **\[Annex A.6.1, AI system documentation\]** Maintain documentation for every AI system in scope: purpose, intended use, user population, performance metrics, known limitations, data used. Evidence: a documentation record per system, version-controlled.

29. **\[Annex A.6.2, Logging and traceability\]** AI systems must log operational events at a level of detail sufficient to support review and incident investigation. Logs must be immutable, timestamped, and retained for a defined period. Evidence: logging configuration records and a sample log extract.

30. **\[Annex A.6.3, Change management\]** Changes to AI systems, model updates, new use cases, data source changes, must go through a documented change process that includes impact reassessment. Evidence: change records with impact assessment references.

31. **\[Annex A.6.4, Incident management\]** Establish a procedure for identifying, recording, investigating, and responding to AI incidents. An incident is any unexpected AI behavior that results in harm or near-miss. Evidence: an incident procedure document and, ideally, records of incidents handled through it.

32. **\[Annex A.6.5, Retirement/deprecation\]** Define a process for retiring AI systems: data deletion, access revocation, documentation archival, and stakeholder notification. Evidence: a retirement procedure referenced in the AI system inventory.

33. **\[Clause 8.1, Operational planning and control\]** The organization must plan, implement, control, and maintain the processes needed to meet AIMS requirements. This is the catch-all operational clause. Evidence: operational procedures for each significant AIMS process.

------------------------------------------------------------------------

## Documentation Evidence, What an Auditor Actually Looks at {#documentation-evidence}

Clause 7.5 requires documented information to be controlled, created, updated, distributed, retained, and disposed of according to defined procedures. This is less about having perfect documents and more about demonstrating discipline.

**The auditor's document request list for a first-stage audit (Stage 1) typically includes:**

34. **\[Clause 7.5, Document control procedure\]** How documents are approved, versioned, and distributed. Evidence: a document control procedure (this can be your existing ISMS document control procedure extended to cover AIMS documents).

35. **\[Clause 7.5, Mandatory documented information\]** ISO 42001 specifies required documented information across clauses: AIMS scope (4.3), AI Policy (5.2), risk assessment results (6.1), objectives (6.2), competency evidence (7.2), audit results (9.2), management review outputs (9.3). Evidence: each of these documents, current and version-controlled.

36. **\[Clause 9.2, Internal audit program\]** The AIMS must be subject to planned internal audits against the standard's requirements. Evidence: an audit program, audit plans for each completed cycle, and audit reports with findings.

37. **\[Clause 9.3, Management review\]** Top management must review the AIMS at planned intervals. The review agenda must include: audit results, objective performance, risk status, and opportunities for improvement. Evidence: management review minutes with required agenda items documented.

38. **\[Clause 10, Nonconformity and corrective action\]** Any nonconformity must be documented, cause-analyzed, corrected, and prevented from recurring. Evidence: a corrective action log (can be your existing ISMS CAR system) with AI incident examples.

**Document control tip:** Auditors check version history and approval records more than document content. A well-written policy with no approval record will generate a finding. A concise policy with a clear version history and sign-off will pass.

------------------------------------------------------------------------

## ISO 42001 vs. EU AI Act, What Each Gets You {#iso-42001-vs-eu-ai-act}

These two frameworks serve different masters and should not be conflated.

| Dimension               | ISO/IEC 42001                                           | EU AI Act                                                    |
|-------------------------|---------------------------------------------------------|--------------------------------------------------------------|
| **Nature**              | Voluntary standard (certifiable)                        | Mandatory regulation (enforceable)                           |
| **Scope**               | Any organization using or providing AI                  | Organizations placing AI on the EU market                    |
| **Core mechanism**      | Management system (plan-do-check-act)                   | Risk classification + mandatory requirements per tier        |
| **Enforcement**         | Certification body audit                                | National market surveillance authorities                     |
| **Certification value** | Trust signal for procurement, tenders, enterprise sales | Not a concept, compliance is a legal obligation              |
| **Key output**          | AIMS certificate                                        | Conformity declaration (high-risk), registration (Annex III) |

**Does ISO 42001 certification automatically satisfy EU AI Act obligations?** No. The two frameworks overlap significantly in substance but are legally independent. ISO 42001 certification demonstrates that your AI governance processes meet the standard's requirements; it does not constitute a conformity assessment under the EU AI Act.

That said, an ISO 42001-aligned organization building an AI Act compliance program has a substantial head start: the AIMS scope maps to the AI Act's system inventory; the risk assessment process maps to Article 9; the logging requirements map to Article 12; the human oversight controls map to Article 14. Work done for the standard directly reduces the effort required for the regulation.

See the [complete AI compliance overview](/blog/ai-compliance-checklist-2026) for the full cross-framework mapping across EU AI Act, GDPR, ISO 42001, and NIST AI RMF.

For organizations specifically operating in fintech or financial services, [AI compliance automation in fintech](/blog/ai-compliance-automation-fintech) covers sector-specific requirements that layer on top of ISO 42001.

------------------------------------------------------------------------

## Frequently Asked Questions {#faq}

### Is ISO 42001 mandatory for organizations using AI in the EU? {#faq-mandatory}

No. ISO/IEC 42001 is a voluntary standard, it is not legally required by any current EU regulation. However, it is increasingly referenced in EU public procurement criteria and in enterprise vendor qualification requirements, making it a de facto requirement for organizations selling AI capabilities to public sector buyers or large enterprises. The EU AI Act imposes its own mandatory requirements, which are separate from ISO 42001.

### How long does ISO 42001 implementation take for a mid-market organization? {#faq-implementation-time}

For an organization with an existing ISO 27001 ISMS, the realistic timeline is four to eight months from gap assessment to Stage 2 audit: one to two months for gap analysis and remediation planning, two to four months for implementing missing controls and building documentation, and one month for Stage 1 audit followed by Stage 2 audit scheduling. Organizations without existing management system infrastructure should plan for nine to fifteen months.

### Can ISO 27001 controls be reused to cover ISO 42001 requirements? {#faq-iso27001-reuse}

Substantially yes, for the process and documentation infrastructure (document control, internal audit, management review, supplier management, access control, incident management). These represent roughly 40% of the overall compliance effort. The remaining 60% is AI-specific: impact assessments, AI system documentation, human oversight mechanisms, AI literacy training, and AI lifecycle management. You cannot simply extend an ISMS certificate to cover AIMS requirements, a separate ISO 42001 audit is required.

### Does ISO 42001 certification automatically make us EU AI Act compliant? {#faq-ai-act-compliance}

No. ISO 42001 certification demonstrates that your AI management system meets the standard's process requirements. EU AI Act compliance is a separate legal obligation that depends on your specific AI systems, their risk classification, and your role in the AI value chain (provider or deployer). The two frameworks overlap substantially in substance, ISO 42001 implementation reduces EU AI Act compliance effort, but they are legally independent instruments. An ISO 42001 certification is not an EU AI Act conformity assessment.

### What is the typical cost range for ISO 42001 audit and certification? {#faq-cost}

Certification body fees vary by organization size, scope, and geography, but market rates in 2026 for a mid-market organization are approximately EUR 8,000-18,000 for the combined Stage 1 and Stage 2 initial certification audit, plus annual surveillance audit fees of EUR 4,000-9,000. These are audit fees only, they exclude internal implementation effort, consultant costs if used, and any remediation work required to close gaps identified in Stage 1. Organizations with an existing ISO 27001 certificate with the same certification body may be able to negotiate a combined audit discount.

### This is the control checklist, where's the step-by-step rollout plan? {#faq-implementation-guide}

Here it's the reference, all 38 controls in one place so you can check status against each one. For the phase-by-phase rollout, from initial scoping through the certification audit, with timelines and cost estimates per phase, see the [ISO 42001 Implementation Guide](/blog/iso-42001-implementation-guide).

------------------------------------------------------------------------

## How Knowlee Supports ISO 42001 Implementation

ISO 42001 requires technical evidence, not just policy documents. Many of the 38 controls above demand verifiable platform capabilities: immutable audit logs, role-based access with documented authority, blocking approval gates for human oversight, and a system registry with risk metadata.

Knowlee maintains a technical compliance map showing how platform features directly address §5.3 (roles and session ownership), §6.1 (risk level and data categories on every job and workspace), §7.5 (JSONL audit trail with per-session cost and token breakdown), and §8.4 (lifecycle registry with execution tracking). The controls are implemented at the platform layer, not in a separate compliance module bolted on afterward.

Get the free [AI Act Readiness Assessment](/tools/ai-act-readiness-assessment) to map your current controls against both ISO 42001 and the EU AI Act and identify the highest-priority gaps before your first audit.
