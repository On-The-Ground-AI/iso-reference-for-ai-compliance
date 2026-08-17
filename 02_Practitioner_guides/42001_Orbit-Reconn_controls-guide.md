> Source: https://orbit.reconn.io/iso-42001-controls-guide/
> Archived: 2026-08-17

---

# ISO 42001 Controls: The Complete Annex A Implementation Guide

ISO/IEC 42001 contains 38 Annex A controls across nine groups. This guide covers every control with practical depth — what the standard requires, what auditors examine, and where most organizations fall short.


#### [Shenoy Sandeep](/author/shenoy/)

18 Apr 2026 — 18 min read

Share

ISO 42001's Annex A contains 38 controls across 9 groups. Not all are mandatory — your SoA determines which apply based on your risk assessment.

In This Guide

1.  What Annex A Controls Actually Are
2.  The Nine Control Groups: Full Breakdown
3.  The Statement of Applicability: How Controls Are Selected
4.  Implementation Sequence That Works
5.  The Most Common Control Gaps
6.  Frequently Asked Questions

ISO/IEC 42001 contains 38 Annex A controls, organised into nine groups. These controls are how an AI management system (AIMS) converts governance commitments into operational reality — they are the specific actions your organisation takes to manage AI risks and demonstrate responsible AI practices.

Having advised organisations through AIMS implementations, I've watched the same pattern repeat: leadership signs off on the standard, project teams build the documentation structure, and then the whole effort stalls when someone asks "what do we actually do?" The answer is in these 38 controls. Understanding what each control requires — and more importantly, why it exists — is the difference between a system that achieves certification and one that genuinely manages AI risk.

This guide covers every control group with practical depth: what the standard requires, what auditors examine, and where most organisations fall short. It draws directly from ISO/IEC 42001 clause requirements as documented in PECB's official training material, which is the most practically grounded source for implementation guidance available.

Key Takeaways

38 Controls, 9 Groups

Annex A organises all controls into nine thematic groups — not all 38 are mandatory for every organisation.

Risk-Based Selection

Controls are selected through risk treatment, not applied wholesale. The Statement of Applicability documents every inclusion and exclusion.

Annex B Is Guidance

Annex B provides implementation guidance for each Annex A control. It is informative, not normative — but auditors reference it.

Controls Can Be Extended

Organisations may add controls beyond Annex A if risk assessment identifies gaps. Additional controls must also appear in the SoA.

## What Annex A Controls Actually Are

Controls in ISO/IEC 42001 are specific measures — policies, procedures, technical mechanisms, or oversight structures — that modify risk. The 38 controls in Annex A are reference controls: they represent the set of controls that ISO/IEC JTC 1/SC 42 (the technical committee responsible for AI standards) identified as appropriate for responsible AI management across different organisational contexts.

The relationship between the main clauses (4–10) and Annex A is important to understand. Clauses 4–10 define what the management system must do — establish context, set policy, plan risk treatment, operate AI processes, evaluate performance, and improve. Annex A defines specific controls to implement within that system. Clause 6.1.3 (AI risk treatment) is where the two connect: the organisation selects controls from Annex A (or elsewhere) to address identified risks, then documents those selections in the Statement of Applicability.

Standard Reference

ISO/IEC 42001 Clause 6.1.3 is explicit: Annex A controls are reference controls, not an exhaustive list. Additional control objectives and controls may be needed. If different controls are necessary beyond those in Annex A, the organisation may design such controls or draw from other sources including ISO/IEC 27001, the NIST AI RMF, or sector-specific frameworks.

One distinction worth internalising: controls are not the same as documented information. A control might be a technical mechanism (logging AI system events), an organisational structure (a dedicated AI oversight function), a process (impact assessment before deployment), or a document (a disclosure statement). Many controls require documented evidence — the documentation exists to demonstrate the control is real, not to replace it.

Practitioner Note

I've seen organisations produce excellent documentation for every Annex A control but fail their audit because the documentation described controls that didn't exist in practice. Auditors will interview staff, request evidence, and check whether the system in the documents is the system that actually runs.

ISO/IEC 42001 Training — PECB Certified

Learn the Controls. Get Certified.

reconn delivers PECB-certified ISO/IEC 42001 Lead Implementer training globally. Courses available in English, Arabic, French, German, Spanish, and Portuguese. Delivered live online or in-house.

View Training Options hello@reconn.io

## The Nine Control Groups: Full Breakdown

ISO/IEC 42001's 38 Annex A controls are organised across nine thematic groups. Each group addresses a distinct dimension of responsible AI management. Below is a practitioner-level walkthrough of every group — what it contains, what it actually requires, and where most organisations struggle.

A.2 — Policies for AI (3 Controls) +

### A.2.2 — AI Policy

The foundational governance document. Clause 5.2 already requires an AI policy; A.2.2 makes it an Annex A control with implementation guidance in Annex B. That guidance is specific: the policy must be informed by business strategy, organisational values, the level of risk posed by AI systems, legal requirements, and the risk environment. It must include principles guiding all AI-related activity and processes for handling policy exceptions.

The test auditors apply: does this policy actually guide how people make decisions about AI? A policy that describes intent without shaping behaviour fails this test.

### A.2.3 — Alignment with Other Organisational Policies

AI intersects with quality, information security, privacy, safety, and ethics. This control requires the organisation to analyse where existing policies intersect with AI activities and ensure consistency — either by updating those policies or incorporating AI-specific provisions into the AI policy itself. If an organisation has an ISO 27001 ISMS in place, the alignment work is manageable; starting from scratch is considerably more involved.

### A.2.4 — Review of the AI Policy

A named, management-approved role must own the AI policy's periodic review. Reviews must be triggered by material changes — in organisational environment, business strategy, legal conditions, or technology — not merely by a calendar date. The review cycle should be documented, and review outputs (including any resulting policy changes) retained as records.

A.3 — Internal Organisation (2 Controls) +

### A.3.2 — Roles and Responsibilities Related to AI

The organisation must define AI-specific roles and responsibilities and ensure they're communicated. This goes beyond listing job titles. It means being explicit about who is accountable for AI system risk, who reviews outputs, who escalates concerns, and who has authority to halt AI processes. The Annex B guidance emphasises that accountability structures must reflect the actual decision-making authority within the organisation — not the ideal structure on paper.

### A.3.3 — Reporting of Concerns Regarding AI Systems

A formal mechanism must exist for personnel to raise concerns about AI behaviour, outputs, or associated risks — without fear of retaliation. This is distinct from the general event logging controls. It's a cultural and structural requirement: the organisation must create conditions where people actually feel able to surface problems. Auditors may interview staff to assess whether the mechanism is known and trusted, not just documented.

A.4 — Resources for AI Systems (6 Controls) +

This group has the highest control count outside of the AI system life cycle group. It reflects the standard's recognition that AI system behaviour is inseparable from the resources used to build and run it.

### A.4.1 — AI System Inventory

A maintained inventory of AI systems within the AIMS scope. The inventory underpins nearly every other control — you cannot assess impact, manage life cycles, or control third-party AI use without knowing what systems exist. The inventory must be current, which means a process for keeping it updated as systems are deployed, modified, or decommissioned.

### A.4.2 — Resource Documentation

Documentation of the resources each AI system uses — components, data, tooling, computing infrastructure, and human expertise. The Annex B guidance notes that resource documentation supports impact assessment (you can't assess impact on a system you haven't described) and helps identify whether required resources are actually available.

### A.4.3 — Data Resources

Documentation specific to data: provenance, last-updated dates, categories (training, validation, test, production for ML), labelling processes, intended use, quality, retention policies, known bias issues, and preparation steps. This is one of the more demanding controls in practice — many organisations deploying AI have limited visibility into where their training data came from and whether it was appropriately representative.

### A.4.4 — Tooling Resources

Documentation of algorithmic types, ML models, data conditioning tools, evaluation methods, and development/deployment tooling. Relevant primarily to AI developers; organisations that purely use third-party AI systems will have a lighter documentation burden here, but still need to capture what tools are in use and whether they are appropriate for the intended application.

### A.4.5 — System and Computing Resources

Documentation of hardware, hosting environment (on-premises, cloud, edge), processing and storage resources, and environmental impact. The environmental impact dimension is increasingly relevant — AI workloads are energy-intensive, and some regulatory frameworks are beginning to require disclosure of computational costs.

### A.4.6 — Human Resources

The people dimension of resource management — ensuring that the expertise required to develop, deploy, and operate AI systems is available and documented. The Annex B guidance specifically notes the need for diverse expertise, including, where relevant, demographic representation in teams working with data sets that affect particular communities.

A.5 — Assessing Impacts of AI Systems (3 Controls) +

### A.5.2 — AI System Impact Assessment Process

The organisation must establish and maintain a process for assessing the potential impacts of AI systems — on individuals, groups, and society. This is a process control: it requires a defined methodology, not just a one-time exercise. The process must be repeatable, documented, and capable of being applied consistently across different AI systems with different risk profiles.

### A.5.3 — Internal Impact Assessment of AI Systems

The actual conduct of impact assessments using the process established under A.5.2. Each AI system within scope must be assessed. The assessment examines potential impacts — including discriminatory outcomes, privacy violations, safety risks, and broader societal effects — and feeds into deployment decisions. A system assessed as high-impact must have corresponding controls; deploying without adequate controls after the assessment is a clear nonconformity.

### A.5.4 — Functionality and Behaviour of the AI System

Controls to ensure AI systems function as intended and that deviations from expected behaviour are detected and addressed. This bridges impact assessment and the life cycle controls — you assess impact before deployment and then monitor actual behaviour against those assessments during operation.

A.6 — AI System Life Cycle (10 Controls) +

The largest control group by count. It covers the full development-to-retirement arc and is the group most directly relevant to organisations that build their own AI systems.

### A.6.1.1 — Design of the AI System

Requirements and design specifications documented before development begins. The design must reflect the intended use case, the identified risks, and the governance constraints established by the AI policy. Design documentation is the starting point auditors use to trace whether downstream controls are coherent with the system's original intent.

### A.6.1.2 — Data for Development and Enhancement

Governance of data used in AI system development — covering privacy and security implications, security and safety threats from data-dependent development, transparency and explainability aspects, representativeness of training data relative to the operational domain, and data accuracy and integrity.

### A.6.1.3 — AI System Development Documentation

Documentation maintained throughout the development process that captures design decisions, testing procedures, validation results, and changes. This creates the audit trail that demonstrates the system was built in accordance with its specifications and governance requirements.

### A.6.1.4 — Addressing Bias in Data

Explicit controls for identifying, assessing, and addressing bias in training and operational data. This is one of the controls most likely to be underimplemented — bias assessment requires expertise that many development teams don't have, and the consequences of bias can be legally and reputationally significant, particularly in high-stakes domains like hiring, credit, and healthcare.

### A.6.1.5 — Robustness of AI Systems

The system must maintain intended performance under adversarial conditions, edge cases, and unexpected inputs. Robustness testing is distinct from functional testing — it specifically examines whether the system can be made to behave incorrectly through deliberate or inadvertent input manipulation.

### A.6.2.1 — AI System Operational Concept

Documentation of how the AI system is intended to operate in its deployment environment — users, use cases, interfaces, and operational constraints. This is the bridge between development and deployment: it specifies what "correct operation" looks like so that operational monitoring has something to measure against.

### A.6.2.2 — AI System Testing

Structured testing before deployment to verify that the system performs as specified. Testing documentation should cover scope, methodology, test data, results, and sign-off. A common gap: testing conducted but not documented in a way that demonstrates the scope was adequate relative to the system's risk profile.

### A.6.2.3 — Human Oversight of AI Systems

One of the most substantive controls. The standard requires reviewers with genuine authority to override AI decisions, monitoring of AI output accuracy and consistency, mechanisms for personnel to report concerns about AI outputs, and assessment of whether automated decision-making is appropriate for the specific use case. Rubber-stamp oversight — where humans review outputs with no ability to challenge them — does not satisfy this control.

### A.6.2.4 — AI System Event Logs

Logging of AI system use — time, date, production data processed, and outputs that fall outside intended operational ranges. Logs must be retained for as long as required by the system's intended use and applicable legal requirements. Some jurisdictions have specific logging requirements for AI systems, particularly biometric systems.

### A.6.2.5 — AI System Deployment

A documented deployment plan and verification that all necessary requirements are met before the system goes live. This is a gate control — the organisation must formally confirm that design specifications, testing results, impact assessments, oversight mechanisms, and operational documentation are in place before deployment. Deploying without this verification is one of the audit findings most commonly observed in immature AIMS implementations.

A.7 — Data for AI Systems (4 Controls) +

Group A.7 focuses on operational data governance — data in use during AI system operation, distinct from development data (A.4.3 and A.6.1.2).

### A.7.2 — Data for Development and Enhancement of AI System

Operational data management covering privacy and security in data use, security threats from data-dependent AI, transparency and explainability aspects, representativeness of training data vs. operational domain, and data accuracy and integrity. This control reinforces the data governance controls in A.4.3 and connects them to the operational environment.

### A.7.3 — Acquisition of Data

Governance of how data is sourced — covering categories required, quantities, data sources, source characteristics, data subject demographics, prior handling, data rights (PII, copyright), metadata about labelling, and provenance. A well-run data acquisition process is increasingly required not just by ISO 42001, but by AI regulations emerging across the EU, UK, and Gulf markets.

### A.7.4 — Quality of Data

Measures to verify and maintain data quality throughout the AI system life cycle. Quality criteria must be defined — accuracy, completeness, consistency, timeliness — and processes established to detect and remediate quality issues. Poor data quality is the single most common root cause of AI system failures, and auditors know this.

### A.7.5 — Processing of Personal Information

Controls for the appropriate handling of personal data within AI systems. This connects the AIMS to existing privacy frameworks — GDPR in Europe, PDPL in Saudi Arabia, PDPA in various Asian jurisdictions, ADGM data protection rules in the UAE. Where an organisation has existing privacy controls under another framework, A.7.5 compliance is primarily a matter of demonstrating integration.

ISO/IEC 42001 Implementation Support

Need Help Mapping Controls to Your Organisation?

reconn works with organisations across the Middle East and globally to implement ISO/IEC 42001. From gap assessment through Statement of Applicability to full certification readiness.

Implementation Services WhatsApp Us

A.8 — Information for Interested Parties (5 Controls) +

This group addresses transparency — what the organisation communicates about its AI systems to users, affected parties, and regulators. Often referred to as the "information disclosure" group.

### A.8.2 — Characteristics of AI Systems

The organisation must make information about the AI system's characteristics available to relevant interested parties — its intended use, capabilities, limitations, and the conditions under which it should not be used. This enables users to make informed decisions and supports regulatory accountability. It's not about publishing everything — it's about providing what affected parties need to understand the system's role in decisions that affect them.

### A.8.3 — AI System Disclosure

Appropriate disclosure when individuals are interacting with or subject to decisions from an AI system. The form of disclosure is context-dependent — some jurisdictions (notably the EU AI Act) mandate explicit disclosure requirements. The standard requires the organisation to have a disclosure approach, even where no legal mandate exists.

### A.8.4 — Communication of Limitations

Users and affected parties must be informed of the system's known limitations — including conditions under which accuracy degrades, edge cases where the system should not be relied upon, and known biases. This is not just an ethical requirement; it directly affects whether the human oversight controls (A.6.2.3) function as intended.

### A.8.5 — Communication of Intended Use

Clear communication of what the system was designed to do and what it was not designed to do. Scope creep — using an AI system outside its intended domain — is a significant risk. This control, combined with the human oversight control, creates an accountability structure for catching and preventing out-of-scope use.

### A.8.6 — Communication of Changes

Processes for communicating material changes to AI systems to affected parties. When a system is updated, retrained, or its intended use is modified, relevant parties need to know. This is particularly important where organisations deploy AI on behalf of clients or integrate AI from third-party providers.

A.9 — Responsible Use of AI Systems (3 Controls) +

### A.9.2 — Intended Use of AI Systems

Controls to ensure AI systems are used only for their intended purposes. This requires more than a policy statement — it means operational safeguards, user training, and monitoring mechanisms that can detect out-of-scope use. Where AI systems are accessible to end users who may attempt to use them in ways the organisation didn't intend, these controls become especially important.

### A.9.3 — Responsibilities and Obligations for Appropriate Use

Clear documentation of responsibilities — both within the organisation and, where applicable, with external users and clients — for ensuring appropriate use. This includes contractual terms for clients using AI-powered services, user agreements, and internal accountability structures.

### A.9.4 — Addressing Misuse of AI Systems

The organisation must have mechanisms to detect, respond to, and learn from instances of AI misuse — whether by internal actors, external users, or adversarial third parties. This control connects to the incident management requirements in Clause 10 and the event logging requirements in A.6.2.4.

A.10 — Third-Party and Customer Relationships (2 Controls) +

### A.10.2 — Suppliers and Third Parties

Governance of AI-related third-party relationships — covering due diligence, contractual requirements, and ongoing oversight of AI components, models, or services sourced externally. For organisations using foundation models or third-party AI platforms, this control is among the most practically demanding. The organisation remains responsible for the impact of AI systems even where core functionality is provided by a supplier.

### A.10.3 — Responsibilities Along the AI Life Cycle

Where multiple organisations share responsibility for an AI system across its life cycle, responsibilities must be clearly allocated. This is the control that governs complex supply chain scenarios — where one organisation develops, another deploys, and a third operates an AI system. Responsibility gaps at transition points are a common audit finding in multi-party AI deployments.

## The Statement of Applicability: How Controls Are Selected

The Statement of Applicability (SoA) is the document that connects risk treatment to controls. It lists every Annex A control (and any additional controls), states whether each is applicable to the organisation, and provides justification for both inclusions and exclusions. The SoA is formally defined in Clause 3.26 of the standard.

The SoA is not a checklist. For each control, the PECB training material specifies six elements that should be documented: the control reference, applicability (applicable or not applicable), a brief description of how the control is or will be implemented, justification for the selection or exclusion, relevant documented information, and the individual or role responsible for the control.

Auditor Lens

The SoA is one of the first documents an auditor requests. They will examine exclusions particularly carefully — any control excluded without a well-documented justification becomes a finding. The justification must explain why the risk addressed by that control is not relevant to this organisation, or why an alternative control adequately addresses it.

Controls are typically selected as applicable where: their implementation will help treat identified risks, they are required by law or contract, or they represent good practice relative to the organisation's risk appetite. Exclusions are appropriate where a control addresses a risk scenario that genuinely doesn't apply — for example, an organisation that uses only third-party AI services (and does not develop its own) may have legitimate grounds to exclude certain A.6.1 development controls.

Critical Gap

ISO/IEC 42001 Clause 6.1.3 Note 3 is explicit: the organisation can provide documented justifications for excluding any control objectives, whether those listed in Annex A or established by the organisation itself. The risk of assuming controls are inapplicable without documented justification is a major nonconformity. Every exclusion needs a reason on paper.

## Implementation Sequence That Works

After working through multiple AIMS implementations, the order in which control groups are tackled makes a substantial difference to momentum and quality. A few patterns that consistently work well:

**Start with A.2 and A.3** — Policy and governance structure. These enable everything else. Without a clear AI policy and defined accountability roles, every subsequent implementation decision becomes a negotiation. Get these documented and formally approved before touching technical controls.

**Build A.4 in parallel with your risk assessment** — Resource documentation (the AI system inventory, data documentation, tooling) feeds directly into risk identification. If you're running your risk assessment without having completed the inventory, you're guessing at the scope.

**Let A.5 drive A.6** — Your impact assessment findings should determine which A.6 life cycle controls are most critical for each system. A low-risk internal analytics tool and a high-risk customer-facing decision system need very different control depths.

**Don't leave A.8 and A.10 until the end** — Transparency and third-party controls are often treated as post-implementation additions. In practice, they need design consideration from the start — retrofitting transparency mechanisms into an existing AI system is considerably harder than building them in.

**Draft the SoA early, update it continuously** — A premature SoA that gets updated as implementation progresses is more useful than a perfect SoA written at the end. It creates a living governance document that the implementation team can use to track progress and identify gaps.

## The Most Common Control Gaps

Across AIMS implementations, certain controls are consistently underimplemented. These aren't the most complex controls — they're the ones that require organisational commitment, not just documentation.

| Control | Common Gap                  | What Auditors Find                                                        |
|---------|-----------------------------|---------------------------------------------------------------------------|
| A.3.3   | Concern reporting mechanism | Mechanism exists in policy but staff are unaware of it or don't trust it  |
| A.4.3   | Data resource documentation | Training data provenance undocumented; bias assessment absent             |
| A.5.3   | Internal impact assessment  | Process documented but no evidence assessments were actually conducted    |
| A.6.1.4 | Addressing bias in data     | No bias assessment methodology defined; general awareness not a control   |
| A.6.2.3 | Human oversight             | Reviewers have no authority to override; oversight is nominal             |
| A.6.2.5 | Deployment verification     | Systems deployed without completing impact assessment or testing sign-off |
| A.10.2  | Third-party AI governance   | Suppliers used without due diligence; no contractual AI requirements      |

The pattern across these gaps is consistent: the documentation exists but the operational reality doesn't match it. The controls that organisations most frequently underimplement are the ones that require behaviour change, not just document creation. An auditor's job is to find the gap between the two.

ISO/IEC 42001 Implementation Services

Ready to Implement ISO/IEC 42001?

reconn supports organisations from initial gap assessment through Statement of Applicability development, control implementation, and certification audit preparation. We work across the Middle East, Africa, Europe, and globally. Speak with a certified ISO 42001 practitioner about your specific context.

Talk to Us About Implementation View Training Options

## Frequently Asked Questions

How many controls does ISO/IEC 42001 Annex A contain?+

Annex A of ISO/IEC 42001 contains 38 controls organised into nine groups. The groups cover: policies for AI, internal organisation, resources for AI systems, assessing impacts of AI systems, AI system life cycle, data for AI systems, information for interested parties, responsible use of AI systems, and third-party and customer relationships. Not all 38 controls are mandatory for every organisation — selection is risk-based and documented in the Statement of Applicability.

Are all 38 Annex A controls mandatory for ISO 42001 certification?+

No. The controls are reference controls, not mandatory requirements. ISO/IEC 42001 Clause 6.1.3 is explicit that Annex A controls are not exhaustive, and organisations may exclude controls with documented justification. However, all exclusions must be justified in the Statement of Applicability. Auditors examine exclusions carefully — an exclusion without sound justification becomes a nonconformity.

What is the Statement of Applicability in ISO 42001?+

The Statement of Applicability (SoA), defined in Clause 3.26 of ISO/IEC 42001, is the document that records all controls selected during risk treatment, whether each is applicable, the justification for inclusion or exclusion, a brief implementation description, the relevant documented information, and the responsible party. It is both a governance document and an audit artefact — typically one of the first documents an auditor requests.

Can an organisation add controls beyond Annex A?+

Yes. If the risk assessment identifies risks that Annex A controls don't adequately address, the organisation can design additional controls or draw from other frameworks such as ISO/IEC 27001 Annex A, the NIST AI RMF, or sector-specific standards. Any additional controls must also be documented in the Statement of Applicability alongside the Annex A controls.

What does meaningful human oversight under A.6.2.3 require?+

ISO/IEC 42001 requires that human oversight involves reviewers with genuine authority to override AI decisions, monitoring of AI output accuracy and consistency, functioning mechanisms for personnel to report concerns about AI outputs, and an assessment of whether automated decision-making is appropriate for each specific use case. Oversight structures where humans review outputs but cannot challenge or override them do not satisfy this control.

How does ISO 42001 handle organisations that only use third-party AI rather than building their own?+

Organisations that use third-party AI systems rather than developing their own can legitimately exclude some A.6.1 development controls — but they must document the justification. Critically, they cannot exclude controls related to impact assessment (A.5), human oversight (A.6.2.3), information disclosure (A.8), or third-party governance (A.10.2). The organisation remains accountable for the impact of AI systems it deploys, regardless of whether it built them.

Related Reading

- The Complete ISO/IEC 42001 Guide — Full standard overview
- ISO 42001 Mandatory Documents — Every document the standard requires
- ISO 42001 vs NIST AI RMF — Framework comparison

About the Author

Shenoy Sandeep

Shenoy Sandeep is the Founder of **reconn**, an AI-first cybersecurity firm based in Dubai, UAE — assisting startups and enterprises scale across the Middle East and African region. With 20+ years across offensive security, threat intelligence, and enterprise risk, and over 10 years in Enterprise AI, AI governance, and Business Continuity, he brings a practical, execution-driven approach to AI governance and information security.

He is a PECB-certified trainer and one of the world's early PECB-certified AI professionals, specialising in ISO/IEC 27001, ISO/IEC 42001, ISO 22301, and ISO 9001.

✉ hello@reconn.io 📱 +971-585-726-270

20+

Years cybersecurity

10+

Years Enterprise AI

PECB

Certified Trainer

## Read more

### Generative AI Governance Policy Template for Enterprises

A working generative AI governance policy template for enterprises — 13 clauses, mapped to ISO 42001, NIST AI 600-1, and the EU AI Act. Written for the CISO, CAIO, DPO, or governance lead actually drafting the document.

12 Aug 2026

### From IT Governance to AI Governance: The Practitioner's Transition Guide

If you run COBIT assessments, hold CISA, CRISC, or ISO 27001, or sit inside an IT governance function, you already own roughly 70% of what AI governance requires. This guide maps the 30% gap and lays out a 90-day plan built around ISO 42001.

10 Aug 2026

### How to Become a Chief AI Officer (CAIO) in 2027: The Complete Roadmap

Becoming a CAIO in 2027 requires 10 to 15 years of technology leadership, credible AI experience, and formal governance credentials boards recognise. This guide covers the realistic competency framework, career paths, a certification roadmap, a 6-month execution plan for experienced leaders.

08 Aug 2026

### How Cybersecurity Professionals Can Transition into AI Governance in 2026

Cybersecurity professionals are the strongest candidates for AI governance in 2026, the risk, controls, audit, and evidence disciplines transfer almost 1:1. This guide is the step-by-step transition plan: what AI governance actually covers, the career sequence, and the certification pathway.

07 Aug 2026

## Join the Orbit by reconn Newsletter

Level Up Your AI & Cybersecurity Knowledge

Subscribe ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjU2IDI1NiI+PHBhdGggZD0iTTIyNC40OSwxMzYuNDlsLTcyLDcyYTEyLDEyLDAsMCwxLTE3LTE3TDE4NywxNDBINDBhMTIsMTIsMCwwLDEsMC0yNEgxODdMMTM1LjUxLDY0LjQ4YTEyLDEyLDAsMCwxLDE3LTE3bDcyLDcyQTEyLDEyLDAsMCwxLDIyNC40OSwxMzYuNDlaIj48L3BhdGg+PC9zdmc+) ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgdmlld2JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Im5jLWljb24td3JhcHBlciI+CiAgICAgICAgPGcgY2xhc3M9Im5jLWxvb3AtZG90cy00LTI0LWljb24tbyI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjQiIGN5PSIxMiIgcj0iMyI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjEyIiByPSIzIj48L2NpcmNsZT4KICAgICAgICA8L2c+CiAgICAgICAgPHN0eWxlIGRhdGEtY2FwPSJidXR0Ij4KICAgICAgICAgICAgLm5jLWxvb3AtZG90cy00LTI0LWljb24tb3stLWFuaW1hdGlvbi1kdXJhdGlvbjowLjhzfQogICAgICAgICAgICAubmMtbG9vcC1kb3RzLTQtMjQtaWNvbi1vICp7b3BhY2l0eTouNDt0cmFuc2Zvcm06c2NhbGUoLjc1KTthbmltYXRpb246bmMtbG9vcC1kb3RzLTQtYW5pbSB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIGluZmluaXRlfQogICAgICAgICAgICAubmMtbG9vcC1kb3RzLTQtMjQtaWNvbi1vIDpudGgtY2hpbGQoMSl7dHJhbnNmb3JtLW9yaWdpbjo0cHggMTJweDthbmltYXRpb24tZGVsYXk6LS4zczthbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pLy0yLjY2Nil9CiAgICAgICAgICAgIC5uYy1sb29wLWRvdHMtNC0yNC1pY29uLW8gOm50aC1jaGlsZCgyKXt0cmFuc2Zvcm0tb3JpZ2luOjEycHggMTJweDthbmltYXRpb24tZGVsYXk6LS4xNXM7YW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKS8tNS4zMzMpfQogICAgICAgICAgICAubmMtbG9vcC1kb3RzLTQtMjQtaWNvbi1vIDpudGgtY2hpbGQoMyl7dHJhbnNmb3JtLW9yaWdpbjoyMHB4IDEycHh9CiAgICAgICAgICAgIEBrZXlmcmFtZXMgbmMtbG9vcC1kb3RzLTQtYW5pbXswJSwxMDAle29wYWNpdHk6LjQ7dHJhbnNmb3JtOnNjYWxlKC43NSl9NTAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUoMSl9fQogICAgICAgIDwvc3R5bGU+CiAgICA8L2c+Cjwvc3ZnPg==) Email sent


- [ISO 42001 Certification](https://reconn.io/collections/iso-42001)
- [ISO 27001 Certification](https://reconn.io/collections/iso-27001)
- [Certified Data Protection Officer](https://reconn.io/products/certified-data-protection-officer-cdpo-gdpr-online-certification)
- [Certified AI Professional](https://reconn.io/products/pecb-certified-artificial-intelligence-professional)

Powered by Ghost
