> Source: https://mindsetcyber.com.au/iso-42001-controls-list/
> Archived: 2026-08-17

---

# ISO/IEC 42001 Annex A Controls List: All 38 Controls (A.2 to A.10)

ISO/IEC 42001:2023 Annex A contains 38 AI-specific controls organised into 9 control objectives (A.2 to A.10). This page lists every control, grouped by objective, with a one-line description, plus a short comparison to ISO 27001 Annex A and guidance on implementation priority.

Last updated: 7 July 2026

**ISO 42001 Lead Implementer: From A\$849 + GST** · exam voucher + 2 attempts included

Enrol Talk to us

**Free ISO 42001 SoA template (XLSX):** all 38 Annex A controls as a fillable Statement of Applicability, with Applicable, Justification, Implementation status and Owner columns.

Download the SoA template (XLSX)

## What Is ISO 42001 Annex A?

ISO/IEC 42001:2023 is the international standard for Artificial Intelligence Management Systems (AIMS). Like other ISO management system standards, it combines high-level requirements (clauses 4 through 10) with a reference set of controls in Annex A, and implementation guidance in Annex B.

Annex A contains 38 controls across 9 control objectives, each objective representing a domain of AI-specific risk: AI policy, internal organisation, resources, impact assessment, AI system life cycle, data, information for interested parties, responsible use, and third-party relationships. The controls are deliberately high-level and principle-based, not prescriptive technical requirements.

An organisation implementing ISO 42001 selects which Annex A controls apply, documents them in a Statement of Applicability (SoA), and implements them proportionate to the AI risks identified in the AI system impact assessment. Annex B gives implementation-level guidance for each control.

## ISO 42001 Annex A vs ISO 27001 Annex A

Both standards use an Annex A reference set of controls, but they address different risk domains and are structured differently.

| Aspect                 | ISO/IEC 27001 Annex A                                          | ISO/IEC 42001 Annex A                                                                 |
|------------------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Number of controls** | 93                                                             | 38                                                                                    |
| **Grouping**           | 4 themes (Organisational, People, Physical, Technological)     | 9 control objectives (A.2 through A.10)                                               |
| **Focus**              | Confidentiality, integrity, availability of information assets | AI-specific risks: bias, transparency, data quality, human oversight, societal impact |
| **Supporting annex**   | ISO/IEC 27002 (implementation guidance)                        | Annex B of ISO/IEC 42001 (implementation guidance)                                    |
| **Certifiable**        | Yes                                                            | Yes                                                                                   |
| **Relationship**       | Referenced by ISO 42001 for information security controls      | Extends ISO 27001 governance to AI-specific risk                                      |

Side-by-side comparison of ISO 27001 Annex A and ISO 42001 Annex A across six aspects: number of controls, grouping, focus, supporting annex, certifiability, and relationship.

In practice, organisations that already hold ISO 27001 certification find ISO 42001 easier to implement because the management-system clauses (context, leadership, planning, support, operation, evaluation, improvement) follow the same Harmonized Structure. The delta is the AI-specific Annex A, plus the AI system impact assessment process in Annex A.5.

From the Mindset team

### Sitting an ISO 27001 or 42001 exam?

Mindset Prep is our adaptive practice app. 1,000+ exam-style questions, clause-cited explanations, AI Coach grounded in the real ISO standards.

Try 3 days free → No card. Used by Mindset Cyber course candidates.

On this page

1.  A.2 Policies related to AI
2.  A.3 Internal organisation
3.  A.4 Resources for AI systems
4.  A.5 Assessing impacts of AI systems
5.  A.6 AI system life cycle
6.  A.7 Data for AI systems
7.  A.8 Information for interested parties
8.  A.9 Use of AI systems
9.  A.10 Third-party &amp; customer relationships

## Complete List of All 38 ISO 42001 Annex A Controls

Below is every ISO/IEC 42001:2023 Annex A control, grouped by its parent control objective, with a one-line summary of what the control requires. Use these as a reference when building your Statement of Applicability or preparing for a certification audit.

**Need the full detail?** Each control code below links to its in-depth guidance on ControlStack, our free AU compliance-control tool. Or look up any ISO 42001 control on ControlStack →

**Work through these 38 controls in a spreadsheet:** download the free Statement of Applicability (SoA) template (XLSX) and mark each control Applicable, with justification, status and owner.

Download the SoA template (XLSX)

### A.2: Policies related to AI (3 controls)

| Control                                                                                                                                                                                                              | Title                                        | Requirement                                                                                                                                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.2.2**                                         | AI policy                                    | Maintain a written AI policy, approved at the appropriate management level, that sets out how the organisation develops and uses AI systems. The policy is the foundation every other control hangs off.                                                |
| **A.2.3**      | Alignment with other organisational policies | Identify which existing policies (security, privacy, risk, HR, procurement, ethics) intersect with your AI activities, and make sure the AI policy is consistent with them, updating the other policies where necessary rather than creating conflicts. |
| **A.2.4** | Review of the AI policy                      | Review the AI policy on a planned cycle, and whenever something material changes (new regulation, a new AI use case, lessons from an incident), to confirm it is still fit for purpose and supported by management.                                     |

ISO 42001 Annex A objective A.2: three controls covering the establishment, alignment, and review of an AI policy.

### A.3: Internal organisation (2 controls)

| Control                                                                                                                                                                                                              | Title                         | Requirement                                                                                                                                                                                                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.3.2** | AI roles and responsibilities | Define who is accountable and responsible for AI-related activities across the life cycle (risk management, impact assessment, development, oversight, data quality, security, supplier management) and assign those roles explicitly so nothing falls in a gap.               |
| **A.3.3**   | Reporting of concerns         | Provide a reporting channel (anonymous and confidential where appropriate, protected from reprisal) for staff, contractors, and external parties to raise concerns about how the organisation develops, provides, or uses AI, with defined investigation and escalation steps. |

ISO 42001 Annex A objective A.3: two controls covering AI roles and responsibilities and a concerns-reporting process.

### A.4: Resources for AI systems (5 controls)

| Control                                                                                                                                                                                                               | Title                          | Requirement                                                                                                                                                                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.4.2**                             | Resource documentation         | Build and maintain an inventory of the resources your AI systems rely on at each life cycle stage. Clear resource visibility is what makes risk assessment, impact assessment, and incident response possible.                                 |
| **A.4.3** | Data resources                 | Record details about every dataset used by the AI system: provenance, last-updated timestamps, categories (training / validation / test / production), labelling process, intended purpose, quality, retention, and any known bias issues.     |
| **A.4.4** | Tooling resources              | Record the algorithms, machine-learning models, frameworks, libraries, optimisation and evaluation methods, and provisioning tools the AI system depends on, so you can reproduce results and assess supply-chain risk.                        |
| **A.4.5** | System and computing resources | Record the compute, storage, network, and hosting environments (on-prem, cloud, or edge) the AI system runs on, including capacity constraints, network and storage dependencies, and environmental impact of the hardware.                    |
| **A.4.6** | Human resources                | Record the people and competencies involved across every phase of the AI system's life, not just developers, but also operators, domain experts, testers, oversight roles, and those handling change management, handover, or decommissioning. |

ISO 42001 Annex A objective A.4: five controls covering documentation of the data, tooling, system and computing, and human resources required across the AI system life cycle.

### A.5: Assessing impacts of AI systems (4 controls)

| Control                                                                                                                                                                                                               | Title                                                              | Requirement                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.5.2**                | AI system impact assessment process                                | Stand up a repeatable process for assessing how an AI system could affect people and wider society. Define what triggers an assessment (criticality, complexity, sensitivity), what the assessment covers, who performs it, and how the outputs feed into design, deployment, and review decisions.                          |
| **A.5.3**   | Documentation of AI system impact assessments                      | Keep written records of every impact assessment (intended use, foreseeable misuse, predictable failures and their mitigations, affected demographic groups, human oversight arrangements) and retain them for a defined period so they can be revisited during audit, incident review, or change.                            |
| **A.5.4**  | Assessing AI system impact on individuals or groups of individuals | Specifically consider how the AI system could affect individual people or groups of people (fairness, accountability, transparency, privacy, safety, health, accessibility, financial consequences, human rights), with particular attention to children, elderly, workers, and other groups with specific protection needs. |
| **A.5.5** | Assessing societal impacts of AI systems                           | Extend the assessment beyond direct users and subjects. Consider environmental footprint, economic impact, impact on democratic and government processes, public health and safety, cultural and ethical norms, and the potential for deliberate misuse or reinforcement of historical bias.                                 |

ISO 42001 Annex A objective A.5: four controls covering the AI system impact assessment process, documentation of results, and assessment of impacts on individuals, groups, and society.

### A.6: AI system life cycle (9 controls)

| Control                                                                                                                                                                                                                   | Title                                                          | Requirement                                                                                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.6.1.2** | Objectives for responsible development of AI system            | Set out clear responsible-development objectives (fairness, transparency, robustness, privacy, safety) and bake them into development practices, not as aspirations, but as design inputs with measurable outcomes that teams are accountable to.                                                                 |
| **A.6.1.3** | Processes for responsible design and development of AI systems | Write down the actual steps the organisation follows to design and build AI systems responsibly: life cycle stages, testing requirements, human oversight, training data rules, release criteria, approvals, change control, and interested-party engagement.                                                     |
| **A.6.2.2**           | AI system requirements and specification                       | Capture functional and non-functional requirements (including risk and responsible-AI requirements) before building, document the rationale for the system, and keep requirements under change control as the system evolves.                                                                                     |
| **A.6.2.3**  | Documentation of AI system design and development              | Maintain a traceable record of design decisions (ML approach, learning algorithms, data quality assumptions, hardware and software components, security threat considerations, user interface, human interaction, interoperability) tied back to requirements so you can explain why the system is the way it is. |
| **A.6.2.4**              | AI system verification and validation                          | Decide how you will verify (did we build it right?) and validate (did we build the right thing?) the AI system. Define testing methodologies, test data selection, release-criteria thresholds, and what "acceptable error rate" means for this use case.                                                         |
| **A.6.2.5**                               | AI system deployment                                           | Maintain a written deployment plan with release criteria, approvals, and rollback. Don't release until those are satisfied, especially when the deployment environment differs from the development environment (e.g. dev on-prem, production in cloud).                                                          |
| **A.6.2.6** | AI system operation and monitoring                             | Define how the AI system will run day-to-day. As a minimum: system and performance monitoring (including drift, continuous-learning changes, and AI-specific threats like data poisoning), repairs, updates, and user support, each with clear ownership.                                                         |
| **A.6.2.7** | AI system technical documentation                              | Decide what technical documentation each audience needs (users, partners, auditors, regulators) and deliver it in a format each audience can actually use. Include intended purpose, usage instructions, run-time assumptions, limitations, and monitoring functions.                                             |
| **A.6.2.8**                  | AI system recording of event logs                              | Decide what events get logged and at which life cycle stages (at minimum during operation) so you can evidence behaviour, trace issues, support audit and incident response, and detect performance drift outside intended operating conditions.                                                                  |

ISO 42001 Annex A objective A.6: nine controls covering responsible development objectives, design and development processes, requirements, verification and validation, deployment, operation and monitoring, technical documentation, and event logging.

### A.7: Data for AI systems (5 controls)

| Control                                                                                                                                                                                                              | Title                                             | Requirement                                                                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.7.2** | Data for development and enhancement of AI system | Define and operate data-management processes covering the data that feeds AI development, addressing privacy and security, representativeness against the operational domain, explainability and provenance, and accuracy and integrity of the underlying data.                        |
| **A.7.3**                               | Acquisition of data                               | Document where each dataset comes from and how it was chosen (internal, purchased, shared, open, or synthetic; static or streamed; known biases; data rights and prior uses; associated metadata) so downstream decisions (quality, fairness, compliance) are defensible.              |
| **A.7.4**                    | Quality of data for AI systems                    | Set explicit data-quality criteria (accuracy, completeness, currency, representativeness) and verify that both training and production data actually meet them. Consider fairness and bias impact, and adjust data or model as needed to keep performance acceptable for the use case. |
| **A.7.5**                                   | Data provenance                                   | Track where each dataset came from and what has happened to it (creation, updates, transformations, validation, transfers, sharing) across both the data's life cycle and the AI system's life cycle, so the lineage is always recoverable for audit or incident review.               |
| **A.7.6**                                  | Data preparation                                  | Decide which data-preparation techniques (cleaning, labelling, augmentation, normalisation, encoding) are acceptable and which are not, document the methods selected for each dataset, and record the rationale so the choices can be reviewed and repeated.                          |

ISO 42001 Annex A objective A.7: five controls covering data management, acquisition and selection, data quality, provenance, and data preparation for AI systems.

### A.8: Information for interested parties of AI systems (4 controls)

| Control                                                                                                                                                                                                               | Title                                          | Requirement                                                                                                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.8.2** | System documentation and information for users | Give users enough information to operate the AI system safely and responsibly (capabilities, limits, expected inputs and outputs, known failure modes, human-oversight options) in plain language, not just technical documentation.       |
| **A.8.3**                                 | External reporting                             | Provide a way for anyone affected by the AI system (customers, data subjects, members of the public) to report problems, complaints, or unintended consequences, and define how those reports will be triaged, investigated, and resolved. |
| **A.8.4**  | Communication of incidents                     | Plan in advance how you will inform users and other affected parties when an AI-related incident occurs: what to say, who says it, how fast, and through what channel. Align with regulatory notification obligations where applicable.    |
| **A.8.5** | Information for interested parties             | Decide what other AI-system information (beyond incidents) needs to be proactively shared (with regulators, partners, customers, the public) and document how, when, and in what form you will share it.                                   |

ISO 42001 Annex A objective A.8: four controls covering user documentation, external reporting, communication of incidents, and information for relevant interested parties.

PECB-accredited training

Need to implement or audit these controls?

This list is the reference. If you need to build or audit an ISO 42001 AI management system against these controls, our PECB-accredited courses walk through each one in practice.

ISO 42001 Lead Implementer course For the people building the AIMS ISO 42001 Lead Auditor course For the people auditing it

### A.9: Use of AI systems (3 controls)

| Control                                                                                                                                                                                                              | Title                                       | Requirement                                                                                                                                                                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.9.2** | Processes for responsible use of AI systems | Write down how the AI system is meant to be used responsibly in practice: human oversight expectations, acceptable-use rules, escalation paths, training requirements for operators, and the conditions under which use should be paused or stopped.     |
| **A.9.3**       | Objectives for responsible use of AI system | Define the responsible-use objectives the AI system is operated against (fairness thresholds, human-in-the-loop requirements, safety tolerances) so day-to-day operational decisions have a clear reference rather than relying on individual judgement. |
| **A.9.4**                     | Intended use of the AI system               | Prevent scope creep: ensure the AI system is deployed and operated for the purpose it was designed for, with controls that stop it being repurposed, extended, or used in unintended contexts without re-assessment.                                     |

ISO 42001 Annex A objective A.9: three controls covering responsible use processes, objectives for responsible use, and adherence to the AI system's intended use.

### A.10: Third-party and customer relationships (3 controls)

| Control                                                                                                                                                                                                                 | Title                          | Requirement                                                                                                                                                                                                                                            |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.10.2**                        | Allocation of responsibilities | Make it explicit who is responsible for what across your AI supply chain (the organisation, its suppliers, partners, customers, and third parties) so there are no accountability gaps when something goes wrong across the life cycle.                |
| **A.10.3**     | Suppliers                      | Vet and manage suppliers of AI services, data, models, and tooling against your own responsible-AI expectations (through due diligence, contracts, assessments, and ongoing oversight) so external dependencies do not undermine internal commitments. |
| **A.10.4** | Customers                      | Factor customer obligations (contracts, regulatory promises, duty of care, trust commitments) into the responsible-AI approach, so customer-facing consequences are considered before decisions about development, provision, or use are finalised.    |

ISO 42001 Annex A objective A.10: three controls covering responsibility allocation across the AI supply chain, supplier management, and customer obligations.

PECB-accredited training

Need to implement or audit these controls?

This list is the reference. If you need to build or audit an ISO 42001 AI management system against these controls, our PECB-accredited courses walk through each one in practice.

ISO 42001 Lead Implementer course For the people building the AIMS ISO 42001 Lead Auditor course For the people auditing it

## Implementation Priority

Not every control requires the same urgency in a first ISO 42001 implementation. A practical sequencing that maps to the typical maturity journey:

1.  **Start with A.2 and A.3.** You cannot implement anything coherent without an AI policy (A.2.2), alignment with existing organisational policies (A.2.3), defined AI roles (A.3.2), and a concerns-reporting process (A.3.3). These five controls establish the governance baseline.
2.  **Then A.5: impact assessment process.** ISO 42001 is a risk-based standard. Without an impact assessment process (A.5.2-A.5.5), you cannot decide which other controls apply at what depth. Do this second.
3.  **Then A.4: resource documentation.** A.4.2-A.4.6 describes what data, tooling, compute, and human resources your AI systems use. This inventory feeds directly into the life cycle and data controls.
4.  **Then A.7 and A.6: data and life cycle.** These are the operational heavy lifting. Data controls (A.7.2-A.7.6) and life cycle controls (A.6.1.2-A.6.2.8) are where most implementation effort lands.
5.  **Then A.8 and A.10: interested parties and suppliers.** External communication, user-facing documentation, supplier due diligence, and customer obligations. These depend on earlier inventories being in place.
6.  **Finally A.9: use of AI systems.** Responsible use processes typically come last because they formalise behaviours that earlier controls make possible.

For a structured implementation path covering every Annex A control, the PECB ISO 42001 Lead Implementer course walks through each in sequence with templates and worked examples.

## Resources

- ISO 42001 Certification Guide: Full walkthrough of what ISO 42001 is, why it matters, and the Australian adoption context.
- PECB ISO 42001 Foundation Course: Self-paced introduction to AIMS concepts, \$399 AUD.
- PECB ISO 42001 Lead Implementer Course: Full implementation methodology with Annex A walkthroughs, \$849 AUD.
- PECB ISO 42001 Lead Auditor Course: Audit ISO 42001 against Annex A controls, \$849 AUD.
- PECB training courses: Browse all PECB-accredited ISO 27001, ISO 42001, and ISO 31000 courses.
- ISO 42001 practice questions: Free exam-style questions to test your knowledge of the Annex A controls.
- ISO 27001 Annex A Controls: All 93 controls listed and explained, useful for mapping to ISO 42001.
- ISO 27001 vs NIST CSF Comparison: If you are also considering the NIST CSF path.

## ISO 42001 Implementation Checklist

Use this ISO 42001 checklist to work through all 38 Annex A controls across the nine objectives (A.2 to A.10). It condenses the control tables above into a scannable ISO 42001 requirements checklist you can track as you build your AI management system. Tick items off below (your progress is saved in this browser), or download the printable version.

**Download all 38 controls:** the printable Implementation Checklist (PDF), or the fillable Statement of Applicability template (XLSX) with Applicable, Justification, status and owner columns.

Download Checklist (PDF) Download SoA template (XLSX)

#### A.2: Policies related to AI

- **A.2.2** AI policy
- **A.2.3** Alignment with other organisational policies
- **A.2.4** Review of the AI policy

#### A.3: Internal organisation

- **A.3.2** AI roles and responsibilities
- **A.3.3** Reporting of concerns

#### A.4: Resources for AI systems

- **A.4.2** Resource documentation
- **A.4.3** Data resources
- **A.4.4** Tooling resources
- **A.4.5** System and computing resources
- **A.4.6** Human resources

#### A.5: Assessing impacts of AI systems

- **A.5.2** AI system impact assessment process
- **A.5.3** Documentation of AI system impact assessments
- **A.5.4** Assessing AI system impact on individuals or groups of individuals
- **A.5.5** Assessing societal impacts of AI systems

#### A.6: AI system life cycle

- **A.6.1.2** Objectives for responsible development of AI system
- **A.6.1.3** Processes for responsible design and development of AI systems
- **A.6.2.2** AI system requirements and specification
- **A.6.2.3** Documentation of AI system design and development
- **A.6.2.4** AI system verification and validation
- **A.6.2.5** AI system deployment
- **A.6.2.6** AI system operation and monitoring
- **A.6.2.7** AI system technical documentation
- **A.6.2.8** AI system recording of event logs

#### A.7: Data for AI systems

- **A.7.2** Data for development and enhancement of AI system
- **A.7.3** Acquisition of data
- **A.7.4** Quality of data for AI systems
- **A.7.5** Data provenance
- **A.7.6** Data preparation

#### A.8: Information for interested parties of AI systems

- **A.8.2** System documentation and information for users
- **A.8.3** External reporting
- **A.8.4** Communication of incidents
- **A.8.5** Information for interested parties

#### A.9: Use of AI systems

- **A.9.2** Processes for responsible use of AI systems
- **A.9.3** Objectives for responsible use of AI system
- **A.9.4** Intended use of the AI system

#### A.10: Third-party and customer relationships

- **A.10.2** Allocation of responsibilities
- **A.10.3** Suppliers
- **A.10.4** Customers

## Frequently Asked Questions

Common questions about ISO 42001 Annex A controls and implementation.

How many controls are in ISO 42001 Annex A?

ISO/IEC 42001:2023 Annex A contains **38 controls** organised into **9 control objectives** (A.2 through A.10). The objectives cover AI policy, internal organisation, resources, impact assessment, system life cycle, data, information for interested parties, use of AI systems, and third-party relationships.

Are ISO 42001 Annex A controls mandatory?

No. They are informative. ISO/IEC 42001 requires organisations to take a risk-based approach: you document which controls apply in a Statement of Applicability (SoA), justifying inclusions and exclusions against your AI risk assessment. Unlike some standards, Annex A in ISO 42001 is not a prescriptive checklist; it is a reference set of controls you select from.

How does ISO 42001 Annex A compare to ISO 27001 Annex A?

Both standards use Annex A to house a reference set of controls, but they target different risks. [ISO 27001](/iso-27001/) Annex A has 93 controls across four themes (organisational, people, physical, technological) and focuses on the confidentiality, integrity, and availability of information assets. ISO 42001 Annex A has 38 controls across nine objectives and focuses on AI-specific concerns: bias, transparency, data quality, human oversight, societal impact, and AI supply chain. Organisations that already run an ISO 27001 ISMS can extend it to ISO 42001 without rebuilding governance.

Where does Annex B fit in?

Annex B is an implementation guidance annex: it provides practical guidance for each Annex A control, helping organisations translate the control requirement into operational practice. Annex B is informative (not normative), meaning it supports implementation without adding mandatory requirements.

Do I need to implement every Annex A control?

No. You run a risk assessment against the AI systems in your scope, then document in the Statement of Applicability which Annex A controls you have included, excluded, or modified, with justification. This is the same approach ISO 27001 uses. In practice, most organisations implementing an AIMS implement the majority of Annex A controls because AI-specific risks are broad and the controls are high-level rather than deeply prescriptive.

How do I get certified against ISO 42001?

Certification requires an accredited certification body to audit your AI Management System (AIMS) against ISO/IEC 42001 requirements in a two-stage audit. Before engaging an auditor, most organisations run a gap analysis, implement clauses 4 to 10 and the relevant Annex A controls, run an internal audit, and hold a management review. The [PECB ISO 42001 Lead Implementer course](/professional-development/pecb-iso-42001-lead-implementer/) covers the full implementation pathway.

Where can I see the full ISO 42001 standard?

ISO/IEC 42001:2023 is a licensed publication. You can purchase the standard from iso.org or from an authorised reseller such as Standards Australia (as AS ISO/IEC 42001:2023). It is not included in training courses. The exam only covers material delivered in the course, but having a copy is recommended as a professional reference.

Is there an ISO 42001 checklist?

Yes, a practical ISO 42001 implementation checklist works through all 38 Annex A controls across the nine objectives (A.2 to A.10), from AI policy and roles through to data management, transparency, and ongoing monitoring.

## Ready to implement ISO 42001?

The PECB ISO 42001 Lead Implementer course covers every Annex A control with implementation templates, worked examples, and certification exam preparation, self-paced eLearning with exam voucher included.

Lead Implementer Course: A$849 + GST Foundation Course: A$399 + GST

×

Authorised PECB Training Partner

While you're here

## Want to get certified?

Turn your free resources into a recognised professional credential. PECB courses go from Foundation all the way through to Lead Implementer and Lead Auditor: starting at \$399 AUD.

See all courses →

No thanks, just download

We use cookies for analytics and to measure ad performance. You can accept these, or decline and we'll only keep what's needed to run the site. Privacy policy.

Decline

Accept

  Mindset Cyber 

Mindset Cyber helps modern organisations build trust through PECB ISO 27001 & ISO 42001 training, self-paced certifications, and free resources.

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGRhdGEtYXN0cm8tY2lkLW9maXRiYjM2PSJ0cnVlIiBkYXRhLWljb249Im1kaTplbWFpbCI+ICAgPHN5bWJvbCBpZD0iYWk6bWRpOmVtYWlsIiB2aWV3Ym94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTIwIDhsLTggNWwtOC01VjZsOCA1bDgtNW0wLTJINGMtMS4xMSAwLTIgLjg5LTIgMnYxMmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0yIj48L3BhdGg+PC9zeW1ib2w+PHVzZSBocmVmPSIjYWk6bWRpOmVtYWlsIj48L3VzZT4gIDwvc3ZnPg==) info@mindsetcyber.com.au

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGRhdGEtYXN0cm8tY2lkLW9maXRiYjM2PSJ0cnVlIiBkYXRhLWljb249Im1kaTpwaG9uZSI+ICAgPHN5bWJvbCBpZD0iYWk6bWRpOnBob25lIiB2aWV3Ym94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuNjIgMTAuNzljMS40NCAyLjgzIDMuNzYgNS4xNSA2LjU5IDYuNTlsMi4yLTIuMmMuMjgtLjI4LjY3LS4zNiAxLjAyLS4yNWMxLjEyLjM3IDIuMzIuNTcgMy41Ny41N2ExIDEgMCAwIDEgMSAxVjIwYTEgMSAwIDAgMS0xIDFBMTcgMTcgMCAwIDEgMyA0YTEgMSAwIDAgMSAxLTFoMy41YTEgMSAwIDAgMSAxIDFjMCAxLjI1LjIgMi40NS41NyAzLjU3Yy4xMS4zNS4wMy43NC0uMjUgMS4wMnoiPjwvcGF0aD48L3N5bWJvbD48dXNlIGhyZWY9IiNhaTptZGk6cGhvbmUiPjwvdXNlPiAgPC9zdmc+) +61 3 7034 4455

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGRhdGEtYXN0cm8tY2lkLW9maXRiYjM2PSJ0cnVlIiBkYXRhLWljb249Im1kaTptYXAtbWFya2VyIj4gICA8c3ltYm9sIGlkPSJhaTptZGk6bWFwLW1hcmtlciIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMS41QTIuNSAyLjUgMCAwIDEgOS41IDlBMi41IDIuNSAwIDAgMSAxMiA2LjVBMi41IDIuNSAwIDAgMSAxNC41IDlhMi41IDIuNSAwIDAgMS0yLjUgMi41TTEyIDJhNyA3IDAgMCAwLTcgN2MwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYTcgNyAwIDAgMC03LTciPjwvcGF0aD48L3N5bWJvbD48dXNlIGhyZWY9IiNhaTptZGk6bWFwLW1hcmtlciI+PC91c2U+ICA8L3N2Zz4=) Australia

- 
- 
- 

4.4 / 5

★★★★★

Based on **13** reviews


PECB Courses

- ISO 27001 Foundation
- ISO 27001 Lead Implementer
- ISO 27001 Lead Auditor
- ISO 42001 Foundation
- ISO 42001 Lead Implementer
- ISO 42001 Lead Auditor
- Lead AI Risk Manager
- Certified AI Manager (CAIM)
- Certified AI Professional (CAIP)
- ISO 31000 Risk Manager
- NIST Cybersecurity Lead Implementer

Learning Hub

- All Courses
- Live Online Training
- CompTIA
- Free Resources
- YouTube

Preparing for your exam?

Adaptive practice for PECB candidates. 1,000+ clause-cited questions on Mindset Prep.

- ISO 27001 Lead Auditor practice
- ISO 27001 Lead Implementer practice
- ISO 42001 Lead Auditor practice
- ISO 42001 Lead Implementer practice
- Free 3-day trial →

Mindset Cyber group

- Mindset Prep, ISO exam prep app
- ControlStack, compliance framework library

Company

- About
- Contact Us
- Terms of Use
- Returns &amp; Refunds

Copyright © 2026 Mindset Cyber · ABN 55 668 364 261 · Privacy Policy
