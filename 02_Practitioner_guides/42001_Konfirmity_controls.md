> Source: https://www.konfirmity.com/blog/iso-42001-controls
> Archived: 2026-08-17

---

# ISO 42001 Controls: The 38 Annex A Controls, Explained

Samkit Jain

2026-07-11

#### Table of Contents

1How the ISO 42001 Controls Are Organized2The 38 AI Controls Mapped to Nine Control Objectives3What Each Control Objective Requires4A.2 Policies Related to AI5A.3 Internal Organization6A.4 Resources for AI Systems7A.5 Assessing Impacts of AI Systems8A.6 AI System Life Cycle9A.7 Data for AI Systems and Data Governance Controls10A.8 Information for Interested Parties11A.9 Use of AI Systems12A.10 Third-Party and Customer Relationships13The Statement of Applicability: Selecting Your Controls14Annex B Guidance and the Supporting Annexes15ISO 42001 Controls vs ISO 27001 Controls16Frequently Asked Questions17Conclusion

#### Request a Demo

See how Konfirmity turns real security into continuous compliance.

Book a Demo

The **ISO 42001 controls** are the 38 Annex A controls that ISO/IEC 42001:2023 provides as a reference set for an AI management system. They are organized under nine control objectives numbered A.2 through A.10, spanning AI policy, roles, impact assessment, the AI life cycle, data, and supplier relationships. You select the ones that apply through a Statement of Applicability.

That last point is the one teams miss. Annex A is not a checklist you implement top to bottom. It is a catalogue you draw from, and the drawing is justified by your AI risk and impact assessments. This guide walks all nine objective groups, explains what the controls in each ask for and the evidence that satisfies them, and shows where the Statement of Applicability and Annex B guidance fit. It is a companion to our broader ISO 42001 guide and assumes you already know what an AI management system is.

**TL;DR**

- ISO/IEC 42001:2023 lists 38 Annex A controls grouped under nine control objectives, numbered A.2 to A.10.
- The controls cover AI policy, internal organization, resources, impact assessment, the AI life cycle, data, transparency, use, and third-party relationships.
- Annex A is a reference set. You choose applicable controls through a Statement of Applicability driven by your risk and impact assessments, and you justify anything you leave out.
- Annex B is informative implementation guidance for each control; annexes C and D add risk-source ideas and cross-sector notes.
- Against ISO 27001, which carries 93 controls in four themes, ISO 42001 is a smaller, AI-specific set focused on governance and impact rather than information security alone.

## How the ISO 42001 Controls Are Organized

Clauses 4 to 10 of ISO 42001 define the management system itself: context, leadership, planning, support, operation, performance evaluation, and improvement. Annex A sits alongside them and supplies the control catalogue. It lists 38 controls grouped under nine control objectives, and the numbering runs from A.2 to A.10 rather than starting at A.1, because A.1 is the introductory clause of the annex rather than a control group.

Each objective states an outcome the organization is trying to achieve, and the controls beneath it are the specific measures that deliver that outcome. Some objectives hold a handful of controls, others hold more; the total across all nine is 38. Treat the objective as the intent and the individual control as the requirement you produce evidence against.

The important structural fact is that these are reference controls. ISO 42001 does not require you to implement all 38. Clause 6.1.3 requires you to determine the controls your risk treatment needs, then compare that set against Annex A to confirm you have not overlooked anything relevant. The result of that comparison is recorded in a Statement of Applicability, covered further down.

### The 38 AI Controls Mapped to Nine Control Objectives

Here is how the 38 AI controls distribute across the nine control objectives. The titles below match the objective headings in ISO/IEC 42001:2023 Annex A.

| Objective | Title                                  | What it governs                                                  |
|-----------|----------------------------------------|------------------------------------------------------------------|
| A.2       | Policies related to AI                 | The AI policy, its alignment with other policies, and its review |
| A.3       | Internal organization                  | Roles, responsibilities, and reporting of AI concerns            |
| A.4       | Resources for AI systems               | The data, tooling, compute, and human competence AI depends on   |
| A.5       | Assessing impacts of AI systems        | The process for assessing impact on people, groups, and society  |
| A.6       | AI system life cycle                   | Responsible design, development, verification, and deployment    |
| A.7       | Data for AI systems                    | Data governance, quality, provenance, and preparation            |
| A.8       | Information for interested parties     | Transparency and documentation for users and affected parties    |
| A.9       | Use of AI systems                      | Responsible, intended use and monitoring in operation            |
| A.10      | Third-party and customer relationships | Allocation of responsibility across the AI supply chain          |

You can read the objective titles for yourself in the ISO/IEC 42001:2023 standard on iso.org, which publishes a free preview of the scope and structure.

## What Each Control Objective Requires

The nine groups below are where the abstract idea of responsible AI turns into things an auditor can inspect. For each, the requirement is on the left and the evidence you would show is on the right.

### A.2 Policies Related to AI

The controls here require a documented AI policy, approved by leadership, that sets the organization's intent for developing and using AI responsibly. That policy has to align with your other policies rather than contradict them, and it has to be reviewed at planned intervals. Evidence is the approved policy document, a record showing how it aligns with adjacent policies such as security and privacy, and dated review records with named approvers.

### A.3 Internal Organization

This objective covers accountability. The controls ask you to define AI roles and responsibilities, and to establish a way for people to report concerns about an AI system without going through the channel that owns it. Evidence is a responsibility assignment for AI decisions, an org structure that shows who owns what, and a documented reporting path with at least one worked example of a concern being raised and handled.

### A.4 Resources for AI Systems

An AI system depends on more than model weights. The controls under A.4 require you to identify and document the resources each system relies on: the data it uses, the tooling and computing resources it runs on, and the human competence needed to build and operate it. Evidence is a resource inventory per in-scope system, competence and training records for the people involved, and documentation of the compute and tooling environment.

### A.5 Assessing Impacts of AI Systems

This is the objective that makes ISO 42001 different from an information-security standard. The controls require a process to assess the potential consequences an AI system can have on individuals, on groups of individuals, and on society, and to do so at defined points such as before deployment and after material change. Evidence is a documented impact-assessment procedure, completed assessments for real systems, and the criteria that decide when a new or changed system triggers one.

### A.6 AI System Life Cycle

A.6 governs the responsible engineering of AI across its life. The controls set objectives for design and development, require verification and validation before a system goes live, and cover deployment, operation, and eventual decommissioning, with documentation at each stage. Evidence is a life-cycle procedure, design and development records that show responsible-AI objectives were considered, testing and validation results, and deployment approvals tied to those results.

### A.7 Data for AI Systems and Data Governance Controls

The data governance controls in A.7 are where quality and provenance get pinned down. The controls require governance over the data used across the AI life cycle: defining data quality expectations, recording where training and operational data came from, and documenting how data is prepared before use. Evidence is a data governance definition for AI, provenance records for datasets, documented data-quality criteria, and preparation and labelling logs. If your AI produces biased or unreliable output, this is usually the objective an auditor traces it back to.

### A.8 Information for Interested Parties

A.8 covers transparency. The controls require you to provide the information that users and other affected parties need to understand and use an AI system appropriately, including its intended purpose, its limitations, and how to report problems. Evidence is user-facing documentation, disclosures about the system's purpose and limits, and a functioning channel through which an affected party can raise an issue.

### A.9 Use of AI Systems

Where A.6 is about building systems responsibly, A.9 is about using them responsibly. The controls require that AI is used for its intended purpose and within defined boundaries, and that its behavior is monitored while it operates. Evidence is an intended-use or acceptable-use definition per system, records of operational monitoring, and a response path for when a system drifts outside its intended use.

### A.10 Third-Party and Customer Relationships

Few organizations own their entire AI stack, so A.10 addresses the supply chain. The controls require you to allocate responsibilities clearly between your organization, your suppliers, and your customers, so that no governance obligation falls through a gap between parties. Evidence is a documented split of responsibilities, contractual clauses that carry AI obligations to suppliers, and assessments of the third parties whose models or data you depend on.

### Mapping your AI systems to all 38 Annex A controls is the part teams underestimate.

Drop your work email and we will map your systems to the ISO 42001 controls and build the Statement of Applicability with you.

## The Statement of Applicability: Selecting Your Controls

The Statement of Applicability, or SoA, is the document that turns the 38 reference controls into your control set. ISO 42001 does not ask you to implement Annex A wholesale. It asks you to run your AI risk assessment and your AI system impact assessment first, decide which controls those assessments require, and then check that decision against Annex A so nothing relevant is missed. The SoA records the result.

For each Annex A control the SoA states whether it applies, the justification for including or excluding it, and whether it is already implemented. An exclusion is legitimate as long as the reasoning is sound and traceable to your risk and impact assessments. What an auditor will not accept is a control marked out of scope with no rationale, or a control marked applicable with no implementation behind it. The SoA is the bridge between your assessments and your evidence, and it is the first document most assessors open.

If you are assembling that mapping from scratch, our ISO 42001 implementation checklist lays out the order to build the assessments and the SoA so the selection is defensible rather than arbitrary.

## Annex B Guidance and the Supporting Annexes

Annex A tells you what each control is. Annex B tells you how to implement it. Annex B is informative implementation guidance that walks through each control in Annex A with practical detail on what a reasonable implementation looks like. It is guidance, not a requirement, so you are not audited against Annex B directly, but it is the most useful reference in the standard when you are deciding what evidence a given control actually needs.

Two further informative annexes support the work. Annex C is a catalogue of potential AI-related organizational objectives and risk sources, such as bias, security, and explainability, meant to feed your risk assessment rather than to be implemented. Annex D covers using the AI management system across different domains and sectors and alongside other management systems. You are certified against the clauses and Annex A; annexes B, C, and D exist to help you get there.

## ISO 42001 Controls vs ISO 27001 Controls

Teams that already hold ISO 27001 tend to reach for the comparison, and it is a useful one because the two standards share a structure but not a subject.

ISO 27001:2022 carries 93 Annex A controls grouped into four themes: organizational, people, physical, and technological. ISO 42001 carries 38 controls under nine objectives numbered A.2 to A.10. Both use the same mechanism to select controls, the Statement of Applicability, and both treat Annex A as a reference set justified by a risk assessment rather than a mandatory list.

The subject is where they part. ISO 27001 governs an information security management system, so its controls protect the confidentiality, integrity, and availability of information. The ISO 27001 control set says nothing about whether an AI model is fair, explainable, or used as intended. ISO 42001 fills exactly that gap, with objectives such as impact assessment (A.5) and data governance (A.7) that have no equivalent in an information-security catalogue. If you want the full breakdown of the security side, our ISO 27001 controls list covers all 93, and the Annex A logic maps cleanly onto how ISO 42001 works.

## Frequently Asked Questions

**How many controls are in ISO 42001?** There are 38 controls in Annex A of ISO/IEC 42001:2023, grouped under nine control objectives numbered A.2 through A.10.

**Are all 38 ISO 42001 controls mandatory?** No. Annex A is a reference set, not a mandatory checklist. You select applicable controls through the Statement of Applicability based on your AI risk and impact assessments, and you justify any control you exclude.

**What is the difference between Annex A and Annex B?** Annex A is the control set you are certified against. Annex B is informative implementation guidance that explains how to put each Annex A control into practice; it is a reference, not a requirement.

**Which ISO 42001 controls cover data governance?** Objective A.7, Data for AI systems, holds the data governance controls, covering data quality, provenance, and preparation across the AI life cycle.

**How do ISO 42001 controls differ from ISO 27001 controls?** ISO 42001 has 38 AI-specific controls in nine objectives focused on responsible AI and its impact; ISO 27001 has 93 controls in four themes focused on information security. Both are selected via a Statement of Applicability.

## Conclusion

The ISO 42001 controls are best read as a reference set you tailor, not a list you tick. Understand the nine objectives, run the risk and impact assessments that drive selection, record your choices in the Statement of Applicability, and lean on Annex B when you need to know what good implementation looks like. Do that and the 38 controls stop being a wall of requirements and become a structured account of how you govern AI.

Once the control set is settled, the next question is how it gets audited. Our ISO 42001 certification guide covers the Stage 1 and Stage 2 audits and what an assessor expects to see, so your Annex A evidence holds up on the day.

### More from Security Controls & Practices

## Related Articles

Security Controls & Practices

satyam-bajpai

2026-07-16

#### HIPAA Physical Security Controls: Key Requirements & Templates (2026)

A practical guide to HIPAA physical security controls: the four core requirements, a step-by-step rollout, plus audit-ready templates and checklists.

Security Controls & Practices

niranjan-rajendran

2026-06-18

#### The Threat Modelling Process: A Practical Guide for 2026

A practical guide to the threat modelling process: the four stages, eight methodologies compared, and how to use it for SOC 2 and ISO 27001 compliance.

Security Controls & Practices

amit-gupta

2026-02-28

#### ISO 27001 API Security: Key Requirements, Steps, and Templates (2026)

This article explains ISO 27001 API Security For ISO 27001 in plain language. You’ll learn what it means, why it matters, the exact steps to do it, and get checklists, examples, and templates to move.

## How Real Security Becomes Compliance

Built by the CTO who scaled NIUM to \$2 billion. 10 years building security and compliance for regulated fintechs. 4.5 years running Konfirmity profitably.

Book a call

Security-driven compliance platform built by operators with deep experience scaling regulated fintech infrastructure. Founded by the CTO who built NIUM.

PLATFORM

How It WorksCASCADES ModelFeatures OverviewVendor ManagementPeople ManagementVulnerability ManagementRisk AssessmentsFramework ImplementationIntegrationsOn-Demand DemoSecurity Coverage FrameworkManaged SOC DeskPricing

FRAMEWORKS

SOC 2 Type IIISO 27001HIPAAGDPRPCI DSSMAS TRMCompare FrameworksAll Framework Guides

INDUSTRIES

Fintech &amp; PaymentsHealthcare &amp; HealthtechEnterprise SaaSFinancial ServicesTechnology Startups

COMPANY

About UsCustomersContactBlogGlossarySitemap

RESOURCES

BlogGlossaryFramework GuidesCompare FrameworksROI CalculatorSOC 2 Cost CalculatorAsset Inventory GuideSecurity Questionnaire GuideAccess Review Playbook

LEGAL

Privacy PolicyTerms of Service

