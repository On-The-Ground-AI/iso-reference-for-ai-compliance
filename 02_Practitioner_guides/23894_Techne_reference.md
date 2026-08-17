> Source: https://techne.ai/insights/iso-iec-23894-reference/
> Archived: 2026-08-17

---

# ISO/IEC 23894 AI Risk Management Guidance: A Reference for Boards and Compliance Teams

How ISO/IEC 23894 provides AI-specific risk management methodology, how it relates to ISO 31000 and ISO/IEC 42001, and how compliance teams use it as the methodological substrate for AI risk assessments across regulatory regimes.

Updated: May 13, 2026 17 min read

Summary

ISO/IEC 23894:2023 — "Information technology — Artificial intelligence — Guidance on risk management" — is the international standard providing AI-specific risk management guidance. Published jointly by the International Organization for Standardization and the International Electrotechnical Commission in February 2023, it applies the general risk management methodology of ISO 31000:2018 to the AI-specific context: identifying AI risk sources, analyzing AI risk events and consequences, and selecting risk treatments appropriate to AI systems. ISO/IEC 23894 is a guidance document, not a certifiable management-systems standard like ISO/IEC 42001; the two are designed to operate together, with ISO/IEC 23894 providing the methodological substance for the risk-management processes that an ISO/IEC 42001-conformant AI management system implements. The standard's informative annexes catalog AI-related objectives, AI-specific risk sources across the lifecycle, and the integration of risk management into AI system development. Compliance teams building AI governance against the EU AI Act, the New York RAISE Act, or state regimes like Colorado's SB 26-189 use ISO/IEC 23894 as the methodological reference for risk identification, analysis, evaluation, and treatment, regardless of whether they are pursuing formal ISO certification.

Most asked

Is ISO/IEC 23894 a standard an organization can be certified against? ▾

No. ISO/IEC 23894:2023 is a guidance document, not a management-system standard. It contains no "shall" requirements and no clause structure designed for third-party audit. There is no certification pathway specific to ISO/IEC 23894. Organizations seeking a certifiable AI standard typically pursue ISO/IEC 42001 (the AI management-system standard), which is designed for certification and which imports ISO/IEC 23894 as the methodological reference for its risk-management clauses. The two standards are designed to be used together.

How is ISO/IEC 23894 different from ISO 31000? ▾

ISO 31000:2018 is the general international risk-management guidance standard. It defines the principles, framework, and process that apply to any kind of organizational risk. ISO/IEC 23894 is the AI-specific application of ISO 31000. It inherits ISO 31000's architecture unchanged and populates each stage of the process with AI-specific guidance — what risk sources are characteristic of AI systems, how consequence and likelihood behave for AI risks, what treatments are available, and how monitoring must adapt to the non-stationarity of AI systems. ISO/IEC 23894 cannot be implemented in isolation; it presupposes an underlying ISO 31000 (or ISO 31000-aligned) baseline.

Should our organization adopt ISO/IEC 23894, the NIST AI RMF, or both? ▾

For most organizations in 2026, both. ISO/IEC 23894 and NIST AI RMF cover overlapping methodological ground and are largely interchangeable as references for the underlying compliance work. ISO/IEC 23894 is preferred where the organization is already operating against ISO 31000, pursuing ISO/IEC 42001 certification, or operating in jurisdictions where ISO standards are expected (EU, EMEA generally). NIST AI RMF is preferred where the organization is in a US-only context, dealing with US federal procurement or sector regulators, or building documentation reviewed by US counterparties. Most US multinationals build a unified program that cites both, treating them as complementary rather than competing.

More questions ↓

## Overview

ISO/IEC 23894:2023 — formally titled "Information technology — Artificial intelligence — Guidance on risk management" — is the international standard providing AI-specific risk management guidance. It was published jointly by the International Organization for Standardization and the International Electrotechnical Commission in February 2023 as the first edition of the standard, prepared by Subcommittee SC 42 of Joint Technical Committee ISO/IEC JTC 1 (Information technology). The standard is methodological. It describes how to identify, analyze, evaluate, treat, monitor, and report on the risks that arise from developing, deploying, and operating artificial-intelligence systems.

ISO/IEC 23894 is a guidance document, not a certifiable management-system standard. It contains no requirements expressed in "shall" language and no clause structure designed for third-party audit. Organizations cannot be certified to ISO/IEC 23894. Instead, the standard is used as the methodological reference cited by a conformant AI management system — most directly ISO/IEC 42001 — and as the documented methodology that compliance teams cite when AI risk assessments are demanded by regulatory regimes that require a defensible methodology but do not prescribe one.

This reference is for audit committee chairs, GCs, CCOs, and D&O underwriters. It covers the standard's structure, its relationship to ISO 31000 and ISO/IEC 42001, the AI-specific content it adds at each stage of the risk management process, the taxonomies of risk sources and risk treatments contained in its informative annexes, how the standard is used to support compliance with the EU AI Act, the New York RAISE Act, Colorado's SB 26-189, and other regimes, and the limitations of the standard for an organization building a durable AI governance program in 2026.

## Relationship to ISO 31000

ISO/IEC 23894 is structured as an AI-specific extension of ISO 31000:2018 ("Risk management — Guidelines"). The principles, the framework, and the process from ISO 31000 are inherited unchanged. ISO/IEC 23894 populates them with AI-specific content.

ISO 31000 organizes risk management around three layers. The **principles** (eight in the 2018 edition: integrated, structured and comprehensive, customized, inclusive, dynamic, best-available information, human and cultural factors, and continual improvement) describe the characteristics of effective risk management. The **framework** describes the organizational arrangements — leadership commitment, integration, design, implementation, evaluation, and improvement — that embed risk management into governance and operations. The **process** describes the operational sequence by which specific risks are actually managed: communication and consultation, scope and context and criteria, risk assessment (identification, analysis, evaluation), risk treatment, monitoring and review, and recording and reporting.

ISO/IEC 23894 keeps this architecture and adds AI-specific guidance at each layer. The principles are recapitulated and interpreted for AI contexts. The framework discussion addresses how AI risk management is integrated into the organization's governance, AI policy, leadership commitment, role assignments, and resource allocation. The process discussion adds AI-specific guidance to every stage: how to scope an AI system for risk assessment, what risk sources are characteristic of AI, how consequence and likelihood behave differently for AI systems than for the conventional technologies risk managers have historically addressed, and what treatments are available.

The practical implication for an audit committee is that ISO/IEC 23894 is not a free-standing methodology. An organization that has no enterprise risk management methodology cannot adopt ISO/IEC 23894 in isolation; it must adopt or implement ISO 31000's underlying framework first, then layer the AI-specific content on top. An organization that already uses ISO 31000 (or a derivative such as COSO ERM aligned to ISO 31000) can extend that methodology to AI systems with ISO/IEC 23894 as the bridge.

## The risk management process for AI

ISO/IEC 23894 organizes its operational content around the ISO 31000 risk management process. Each stage receives AI-specific guidance.

### Communication and consultation

Risk management is conducted with, not around, the stakeholders who bear or influence the relevant risks. For AI systems the stakeholder set is broader than for most enterprise risks. It includes the affected individuals and groups whose interests are at stake (job applicants screened by a hiring model, patients triaged by a diagnostic model, residents whose neighborhoods are policed using predictive analytics), the operators and human reviewers in the loop, the developers and data scientists who shape the model, the procurement and vendor-management functions for purchased AI, and the executives and directors responsible for governance. ISO/IEC 23894 treats stakeholder communication as continuous across the AI lifecycle, not as a one-time consultation before deployment.

### Scope, context, and criteria

Establishing the scope of an AI risk assessment is more involved than for conventional systems because an AI system is itself a composite. ISO/IEC 23894 directs assessors to define the AI system by reference to its training data, the model architecture and parameters, the deployment environment, the human-oversight arrangements, the integration with other systems, and the operational context (geography, user population, regulatory regime). The external context includes the legal, regulatory, market, and societal environment in which the AI system operates. The internal context includes the organization's policies, risk appetite, culture, and governance posture. The criteria are the standards against which evaluated risks will be judged — what consequences are tolerable, what likelihoods are acceptable, what risk levels will trigger treatment.

### Risk assessment

Risk assessment under ISO/IEC 23894 follows the ISO 31000 decomposition: identification, analysis, evaluation.

**Risk identification** for AI uses two registers. The first is risk sources — the characteristics of the AI system, its data, its operating context, or its development process that have the potential to produce harm. The second is risk events — the specific failure modes through which those risk sources materialize: incorrect or biased outputs, adversarial-input vulnerabilities, drift from training distribution, automation bias in human reviewers, cascade effects across coupled AI systems, loss of human oversight, privacy or intellectual-property leakage from training data, and so on. ISO/IEC 23894's informative Annex A and Annex B catalogue AI-related objectives and AI risk sources at the level of detail an assessor needs to be systematic rather than improvisational.

**Risk analysis** characterizes the consequences and likelihoods of identified risk events. For AI systems both dimensions are harder to quantify than for conventional risks. Consequence severity depends on the deployment context (the same model failure produces different harm in a marketing recommender than in a clinical triage system). Likelihood depends on factors — data distribution shift, adversarial probing, prompt patterns — that are often not directly observable. ISO/IEC 23894 acknowledges this directly and counsels the use of qualitative methods, scenario analysis, and red-teaming where empirical risk quantification is incomplete.

**Risk evaluation** compares the analyzed risks against the criteria established at the scoping stage and decides which risks require treatment, which can be accepted, and which require escalation. For AI the evaluation step is where the organization's risk appetite is operationalized — and where boards should expect to be consulted, because the appetite for harms produced by AI is itself a governance decision, not a technical one.

### Risk treatment

Risk treatment selects and implements the mitigation strategies appropriate to the evaluated risks. ISO/IEC 23894 catalogs the categories of treatment available across the AI lifecycle (discussed in the risk-treatments section below). Treatment is iterative: the organization implements treatments, reassesses residual risk, and decides whether residual risk is acceptable or whether further treatment is required.

### Monitoring and review

Monitoring and review is the stage at which AI risk management diverges most sharply from conventional enterprise risk management. AI systems are non-stationary. Their inputs drift, their operating environments change, their performance degrades, and new failure modes emerge as users discover capabilities the developers did not anticipate. ISO/IEC 23894 treats continuous monitoring as a first-order obligation, not an after-the-fact check. The standard addresses the AI-specific monitoring questions: how to detect distributional drift, how to identify emergent behavior in post-deployment use, how to track the calibration of human-oversight mechanisms over time, and how to surface evidence of automation bias in human reviewers who have come to rely on the system.

### Recording and reporting

Recording and reporting close the loop. The risk assessment, the treatment decisions, the residual-risk acceptance, the monitoring outputs, and the lessons learned from incidents are documented and reported through the organization's governance channels. For an AI system subject to regulatory obligations — EU AI Act technical documentation, NY RAISE Act safety and security protocol, a California CCPA risk assessment — the recording outputs of the ISO/IEC 23894 process become the substrate of the regulatory filing.

## AI-specific risk sources

Annex B of ISO/IEC 23894 sets out a structured taxonomy of AI risk sources. The taxonomy is not exhaustive — risk sources are organization-specific — but it provides the categorical structure an assessor needs to be systematic. The categories below are consolidated from the standard's informative content and from the way the standard is being applied in practice in 2026.

### Data quality and bias

Training, validation, and operational data carry risks distinct from those of the model itself: representativeness gaps, historical bias encoded in labels, sampling bias, measurement error, label noise, data poisoning, and provenance defects. Data-quality risks propagate downstream into every model that is trained, fine-tuned, or evaluated on the affected data. The standard treats data governance as the upstream control regime for an entire class of AI risks.

### Training and tuning

The training process itself introduces risks: choice of objective function, choice of optimization regime, hyperparameter selection, reward specification for reinforcement-learning systems, and the fine-tuning processes that adapt foundation models to specific contexts. Imperfect specification of an objective produces a model optimized for the wrong target — a risk that is hard to detect through ordinary validation because the validation metric typically reflects the same imperfect specification.

### Algorithmic transparency and explainability

Models whose internal logic cannot be inspected or explained are harder to audit, harder to debug, and harder to defend in regulatory proceedings. ISO/IEC 23894 treats transparency and explainability not as binary properties but as continua, with the appropriate level determined by the use case, the affected stakeholders, and the applicable regulatory regime.

### Model robustness and reliability

Model performance varies across input distributions, environmental conditions, and adversarial pressure. Risks include brittleness on out-of-distribution inputs, sensitivity to small perturbations, failure under distribution shift, and degradation as the deployment environment evolves. Robustness is evaluated through testing on perturbed, adversarial, and out-of-distribution inputs as well as on the nominal validation set.

### Adversarial-input and security vulnerability

AI systems are subject to a category of attack distinct from conventional cybersecurity: adversarial examples, prompt injection, model extraction, training-data extraction, model inversion, and data poisoning. These are AI-specific risk sources that the standard addresses alongside conventional information-security risks. They demand a security regime that integrates the organization's information-security function with its AI engineering function.

### Deployment-context risks

A model that performs acceptably in one deployment context can produce unacceptable harm in another. Deployment-context risks include scope creep (the system is used for purposes outside its validated scope), population shift (the system is used on a user population materially different from the validation population), and integration risks (the system's outputs are consumed by downstream automation that amplifies errors).

### Human oversight and automation bias

Human-in-the-loop and human-on-the-loop controls are themselves risk sources, not just risk treatments. Reviewers exposed to a high-accuracy model over time tend to defer to the model's outputs — automation bias — and the oversight function degrades silently. ISO/IEC 23894 directs assessors to evaluate the calibration of human oversight as an ongoing property of the system, not as a fixed control.

### Societal and environmental impact

AI systems produce externalities. Effects on labor markets, on affected communities, on access to services, on the information environment, and on the natural environment (the energy and water footprint of large-scale training and inference) are risk sources the standard explicitly addresses. For high-impact deployments the societal-impact dimension is often what determines whether the system can be deployed at all.

### Lifecycle risks

AI risk is non-stationary across the lifecycle. Risks at design and data-acquisition time differ from risks at training time, which differ from risks at deployment, which differ from risks at monitoring and maintenance, which differ from risks at decommissioning. Annex C of ISO/IEC 23894 maps the risk management process across the AI system lifecycle and illustrates which process activities apply at which lifecycle stage. Decommissioning risks in particular — orderly retirement of the system, data retention and deletion, dependency on legacy systems by downstream consumers — are under-addressed in most enterprise risk methodologies and explicitly covered in ISO/IEC 23894.

## AI-specific risk treatments

The treatments catalogued by ISO/IEC 23894 are organized by lifecycle stage and by the risk source they address. The categories below summarize the treatments most commonly drawn from the standard in practical compliance work.

### Data curation and governance

Data curation treatments address data-quality and bias risk sources at their root. They include data provenance documentation, representativeness analysis, bias auditing of training and validation sets, treatment of historical bias in labels, data augmentation, synthetic-data generation to address representation gaps, and the lifecycle data governance that maintains these controls over time.

### Model design choices

Design-stage treatments embed risk controls in the architecture of the model itself: choice of model class (interpretable models where explainability is paramount), choice of objective function, constraints embedded in training, fairness-aware training methods, and the deliberate trade-offs between performance and other properties (robustness, interpretability, privacy preservation) that are inherent to model selection.

### Validation and testing

Validation and testing treatments verify that the trained system meets its risk-relevant specifications before deployment. These include evaluation on representative test sets, evaluation on out-of-distribution and adversarial inputs, fairness testing across demographic subgroups, robustness and stress testing, red-teaming for emergent and adversarial behavior, and the documentation of validation evidence that supports the residual-risk-acceptance decision.

### Output filtering and validation

Runtime treatments filter, validate, or constrain the outputs of the system before they affect downstream decisions. These include output validation against business rules, content filtering for generative systems, confidence-threshold gating, and the use of guardrail systems that catch high-risk outputs before they reach end users.

### Human-in-the-loop controls

Human oversight treatments insert a human decision-maker into the loop at the point where AI outputs would otherwise have consequence. Variants include human-in-the-loop (every output is reviewed), human-on-the-loop (a sample of outputs is reviewed), and exceptions-based oversight (outputs flagged by automated guardrails are escalated to a human). The standard explicitly treats human oversight as itself a control regime requiring calibration, training, and monitoring — not as a default that absolves the organization of further treatment.

### Monitoring and observability

Post-deployment monitoring treatments detect changes in system performance, distributional drift, emergent behavior, and adverse outcomes in the field. They include logging of inputs and outputs, ongoing measurement against validation metrics, drift detection, fairness monitoring, incident reporting channels, and the governance arrangements that ensure monitoring outputs reach decision-makers with authority to intervene.

### Decommissioning processes

Decommissioning treatments address the end of the AI system's lifecycle. They include orderly retirement procedures, transition plans for downstream consumers, retention and deletion of training data and model artifacts, archival of documentation, and the governance review that confirms the system's withdrawal does not itself produce new risk.

## ISO/IEC 23894 with ISO/IEC 42001 and the NIST AI RMF

ISO/IEC 23894 is one of three documents that, together, define the international AI governance methodology stack as it stood in 2026. Understanding how the three relate is essential to using any of them effectively.

**ISO/IEC 42001:2023** is the AI management-system standard. It is structured as a management-system standard in the same family as ISO/IEC 27001 (information security) and ISO 9001 (quality), with requirements expressed in "shall" language and a clause structure designed for third-party certification audit. ISO 42001 specifies what an AI management system must contain: policy, leadership commitment, role assignments, risk management processes, operational controls, audit cadence, management review, and continual improvement. ISO 42001 tells the organization what to build and what to demonstrate to an auditor. It does not, however, tell the organization how to do the substantive risk-management work itself.

**ISO/IEC 23894:2023** supplies that substance. The risk-management clauses of ISO 42001 are operationalized by importing the methodology of ISO/IEC 23894. In practice, an ISO 42001 implementation cites ISO/IEC 23894 as the methodological reference for how risk identification, analysis, evaluation, and treatment are conducted within the AIMS. The two standards are designed to be used together.

**The NIST AI Risk Management Framework** (NIST AI 100-1, with the 2024 Generative AI Profile) is the US voluntary framework covering similar methodological ground from a North American practitioner perspective. NIST AI RMF organizes its guidance around four functions — Govern, Map, Measure, Manage — rather than around the ISO 31000 process stages. The substantive content overlaps substantially with ISO/IEC 23894, and the two are largely interchangeable as methodological references for the same underlying compliance work. Where ISO/IEC 23894 is preferred is where the organization is already operating against ISO 31000 or pursuing ISO 42001 certification; where the NIST AI RMF is preferred is where the organization is operating in a US-only context, dealing with US federal procurement or sector regulators, or building documentation expected to be reviewed by US practitioners and counterparties.

Most US multinationals in 2026 build a unified AI governance program that draws on all three. ISO 42001 supplies the management-system architecture and the certification pathway. ISO 23894 supplies the AI-specific risk methodology that populates the risk-management clauses of the AIMS. NIST AI RMF supplies the vocabulary and structure most familiar to US regulators and procurement counterparties. The three are complementary, not substitutes.

## Regulatory mapping

ISO/IEC 23894 is not itself a regulation. It is, however, the documented methodology most frequently cited in compliance with regulatory regimes that require AI risk assessment but do not prescribe a methodology of their own.

### EU AI Act

Article 9 of the EU AI Act requires providers of high-risk AI systems to establish, implement, document, and maintain a risk management system throughout the lifecycle of the system. Article 9 prescribes the components of the system — risk identification, estimation and evaluation, evaluation of post-market monitoring data, and adoption of appropriate risk-management measures — but does not prescribe a methodology by which these components are executed. ISO/IEC 23894 supplies that methodology. Providers building Article 9 risk-management systems typically cite ISO/IEC 23894 (and, in many cases, the harmonized standards under development for the Act that will incorporate or reference ISO 23894) as the methodological reference. See the EU AI Act reference for detail on Article 9 and the Digital Omnibus deferral of high-risk obligations to December 2, 2027.

### New York RAISE Act

The NY RAISE Act requires large frontier developers to publish a safety and security protocol covering the assessment of critical harm arising from frontier models. The Act prescribes what the protocol must address but not the methodology by which the underlying risk assessment is conducted. ISO/IEC 23894, used in conjunction with ISO/IEC 42001 and the NIST AI RMF, provides the methodological substrate from which RAISE Act safety frameworks are typically built. See the RAISE Act reference for detail on the framework requirements and the January 1, 2027 effective date.

### State impact-assessment regimes (a moving target)

The flagship state obligation here — the 2024 Colorado AI Act's algorithmic impact assessment — was repealed in May 2026 before it ever applied; Colorado's replacement, SB 26-189, requires disclosures rather than assessments. The methodological point survives the churn: where an assessment obligation does apply — California's CCPA risk assessments for automated decision-making, the EU AI Act's risk management documentation, or an internal standard — the rule typically prescribes the assessment's contents but not its method, and ISO/IEC 23894 provides a defensible methodological basis. Assessments built on the standard also outlive any single statute, which Colorado's reversal demonstrates concretely.

### NYC Local Law 144

NYC Local Law 144 requires bias audits of automated employment decision tools. The methodology of the bias audit is specified partially in the rules of the Department of Consumer and Worker Protection, but the broader risk-management process surrounding the audited tool is left to the deployer. ISO/IEC 23894's data-quality, bias, and monitoring methodology supplies the surrounding framework.

### Sectoral guidance and procurement

Sector regulators (FDA, CFPB, EEOC, HHS Office for Civil Rights) and federal procurement guidance increasingly cite NIST AI RMF alongside ISO/IEC 23894 and ISO/IEC 42001 as the recognized methodologies for documenting AI risk. Vendor due-diligence questionnaires from large enterprise procurement functions now routinely ask whether vendors operate against ISO/IEC 23894, ISO 42001, or NIST AI RMF.

## Limitations

ISO/IEC 23894 has three limitations that board members and compliance leaders should understand before treating it as the centerpiece of an AI governance program.

**It is guidance, not requirement.** The standard contains no "shall" provisions and no clause structure for audit. Organizations cannot be certified to ISO/IEC 23894. The standard cannot stand alone as a compliance artifact; it must be embedded in a management system (ISO/IEC 42001 or equivalent) or in a regulatory filing (EU AI Act Article 9 documentation, RAISE Act safety framework, a California CCPA risk assessment) to have legal or audit weight.

**It is methodology, not control specification.** The standard tells the organization how to identify, evaluate, and treat AI risks. It does not tell the organization which specific controls to implement for which specific risks. Two organizations applying ISO/IEC 23894 to the same AI system can legitimately arrive at different treatment decisions, because the standard does not prescribe controls. This is by design — the standard is intended to be sector-neutral and technology-neutral — but it means the standard does not absolve the organization of the substantive control-selection work.

**It is not a substitute for legal analysis.** ISO/IEC 23894 addresses risk methodologically. It does not interpret regulatory requirements, identify which obligations apply to a given AI system, or specify what documentation a regulator will expect. Organizations operating in multiple jurisdictions must conduct that legal analysis separately and use ISO/IEC 23894 as the methodology by which their compliance with the legally identified obligations is operationalized.

## Practical implementation steps for 2026

An audit committee chair should expect ISO/IEC 23894 to appear in the organization's AI governance program in the following form. It is not a deliverable in its own right; it is the documented methodological reference cited in the AI governance artifacts the committee receives.

### Step 1 — Confirm the underlying ISO 31000 (or equivalent) baseline

Before ISO/IEC 23894 can be implemented, the organization must have an enterprise risk management methodology onto which the AI-specific guidance can be grafted. For most large organizations this is ISO 31000, COSO ERM, or a derivative aligned to one of them. The audit committee should confirm with management which enterprise methodology is in use and that it has been kept current.

### Step 2 — Designate the AI risk management owner

AI risk management requires an accountable owner. In most organizations this is the chief risk officer or the chief compliance officer, with the chief technology officer or chief information security officer as the technical lead. The audit committee should confirm the accountability assignment in writing and reflect it in the committee charter.

### Step 3 — Inventory in-scope AI systems

The methodology cannot be applied to a system the organization has not enumerated. Build and maintain an inventory of AI systems — developed, deployed, procured, and embedded in third-party tools — with the risk-relevant attributes: function, data inputs, decision impact, regulatory regime, lifecycle stage. The inventory is the substrate of every subsequent risk assessment.

### Step 4 — Apply the process to each in-scope system

For each in-scope AI system, work the risk management process: establish scope, context, and criteria; identify risk sources and events; analyze consequences and likelihoods; evaluate against criteria; select treatments; document and report. The depth of the process scales to the risk level of the system — minimal-risk systems receive a documented but lightweight assessment; high-impact systems receive a full assessment with stakeholder consultation, red-teaming, and external review.

### Step 5 — Cite ISO/IEC 23894 in the artifacts

The deliverable of the process is the documentation. Risk assessments, treatment decisions, residual-risk acceptance, monitoring outputs, and regulatory filings all cite ISO/IEC 23894 as the methodological reference. The citation is not decorative; it is what allows auditors, regulators, and counterparties to evaluate whether the underlying work was done against a recognized standard or improvised.

### Step 6 — Integrate with the management system and the regulatory artifacts

The outputs of the ISO/IEC 23894 process feed three downstream consumers: the ISO/IEC 42001 AI management system (if the organization is pursuing certification or has built its AIMS against ISO 42001), the regulatory filings (EU AI Act Article 9 documentation, RAISE Act safety framework, a California CCPA risk assessment, sector-specific filings), and the board reporting cadence (audit or risk committee, quarterly or as material developments warrant). The same methodological work should not be redone for each consumer; it should be done once and surfaced into each.

### Step 7 — Refresh on a defined cadence

AI risk is non-stationary. Risk assessments are refreshed at least annually, on material change to the AI system, on material change to the operating context, and on the occurrence of an incident. The refresh cadence is itself a governance decision the audit committee should ratify.

## How to cite this article

Techné AI, *ISO/IEC 23894 AI Risk Management Guidance: A Reference for Boards and Compliance Teams* (May 13, 2026), https://techne.ai/insights/iso-iec-23894-reference.

## Related references

- ISO/IEC 42001 AI Management Systems Reference — the management-systems standard that ISO/IEC 23894's methodology populates.
- The NIST AI Risk Management Framework Reference — the US voluntary framework that addresses similar methodological ground from a North American practitioner perspective.
- The New York RAISE Act Reference — the US state law whose risk-assessment obligations ISO/IEC 23894 substantially supports.
- The EU AI Act for US Boards — the regulatory regime that most directly requires AI risk-management infrastructure of the kind ISO/IEC 23894 describes.
- Multi-Jurisdictional AI Compliance: Building a Unified Framework — the unified-program approach in which ISO/IEC 23894 supplies the methodological substrate.

## Frequently asked questions

Is ISO/IEC 23894 a standard an organization can be certified against?  
No. ISO/IEC 23894:2023 is a guidance document, not a management-system standard. It contains no "shall" requirements and no clause structure designed for third-party audit. There is no certification pathway specific to ISO/IEC 23894. Organizations seeking a certifiable AI standard typically pursue ISO/IEC 42001 (the AI management-system standard), which is designed for certification and which imports ISO/IEC 23894 as the methodological reference for its risk-management clauses. The two standards are designed to be used together.

How is ISO/IEC 23894 different from ISO 31000?  
ISO 31000:2018 is the general international risk-management guidance standard. It defines the principles, framework, and process that apply to any kind of organizational risk. ISO/IEC 23894 is the AI-specific application of ISO 31000. It inherits ISO 31000's architecture unchanged and populates each stage of the process with AI-specific guidance — what risk sources are characteristic of AI systems, how consequence and likelihood behave for AI risks, what treatments are available, and how monitoring must adapt to the non-stationarity of AI systems. ISO/IEC 23894 cannot be implemented in isolation; it presupposes an underlying ISO 31000 (or ISO 31000-aligned) baseline.

Should our organization adopt ISO/IEC 23894, the NIST AI RMF, or both?  
For most organizations in 2026, both. ISO/IEC 23894 and NIST AI RMF cover overlapping methodological ground and are largely interchangeable as references for the underlying compliance work. ISO/IEC 23894 is preferred where the organization is already operating against ISO 31000, pursuing ISO/IEC 42001 certification, or operating in jurisdictions where ISO standards are expected (EU, EMEA generally). NIST AI RMF is preferred where the organization is in a US-only context, dealing with US federal procurement or sector regulators, or building documentation reviewed by US counterparties. Most US multinationals build a unified program that cites both, treating them as complementary rather than competing.

Does using ISO/IEC 23894 satisfy EU AI Act Article 9?  
Not by itself. Article 9 of the EU AI Act imposes a legal obligation on providers of high-risk AI systems to establish, implement, document, and maintain a risk-management system throughout the lifecycle of the system. The obligation is to do the substantive risk management; ISO/IEC 23894 is the methodology by which the work is done. Citing ISO/IEC 23894 in the Article 9 documentation supports the defensibility of the methodology, but the substantive risk management still has to be performed and documented. Once the harmonized standards under the EU AI Act are formally adopted — many of which are expected to incorporate or reference ISO/IEC 23894 — conformity with the harmonized standard will produce a presumption of conformity with the underlying Article 9 obligation. Until then, ISO/IEC 23894 is a defensible reference but not a safe harbor.

How do ISO/IEC 23894 and ISO/IEC 42001 fit together in practice?  
ISO/IEC 42001 specifies the structure of an AI management system — policy, leadership commitment, role assignments, risk-management processes, operational controls, audit cadence, management review. ISO/IEC 23894 specifies how the substantive risk-management work inside that structure is actually done. In a typical implementation the AIMS documentation cites ISO/IEC 23894 as the methodological reference for the risk-management clauses, and the outputs of the ISO/IEC 23894 process (risk registers, treatment plans, monitoring outputs) populate the corresponding AIMS records. An AIMS without an underlying risk methodology is incomplete; ISO/IEC 23894 is the most direct way to supply that methodology.

Does ISO/IEC 23894 address generative AI and foundation models specifically?  
The standard was finalized in February 2023, shortly after the public release of ChatGPT, and is written at a level of generality that applies across AI system types — including foundation models, generative systems, and agentic systems — without being specific to any of them. The risk sources and treatments catalogued in the annexes apply to generative and foundation models, although the practitioner literature applying ISO/IEC 23894 to those systems has matured rapidly since publication. Organizations applying the standard to frontier or generative systems typically supplement it with framework-specific resources — the NIST Generative AI Profile (NIST AI 600-1), red-teaming guidance, and the model-evaluation literature — within the ISO/IEC 23894 process structure.

Is ISO/IEC 23894 a substitute for legal compliance analysis?  
No. ISO/IEC 23894 is a risk methodology. It does not interpret regulatory requirements, identify which obligations apply to a given AI system, or specify what documentation a particular regulator expects. The legal analysis — which jurisdictions, which statutes, which articles, which obligations — must be done separately. ISO/IEC 23894 is then the methodology by which the organization's compliance with the legally identified obligations is operationalized and documented. For multi-jurisdictional programs this typically means combining a jurisdictional matrix (EU AI Act, NY RAISE Act, Colorado SB 26-189, NYC LL 144, sector regulators) with an ISO/IEC 23894-based methodology layer that produces the substantive risk-management work each regime expects.

How often should an ISO/IEC 23894 risk assessment be refreshed?  
At least annually, and additionally on material change to the AI system, on material change to the operating context (regulatory, market, technical), and on the occurrence of an incident affecting the system. AI risk is non-stationary — training-distribution drift, emergent post-deployment behavior, and changes in the regulatory environment all alter the risk posture between scheduled assessments. ISO/IEC 23894 treats continuous monitoring and review as a first-order obligation, not as a periodic check, and the refresh cadence should reflect that.

## How to cite this article

APA

Abdullahi, K. M. (2026, May 12). ISO/IEC 23894 AI Risk Management Guidance: A Reference for Boards and Compliance Teams. Techné AI. https://techne.ai/insights/iso-iec-23894-reference

MLA

Abdullahi, Khullani M. "ISO/IEC 23894 AI Risk Management Guidance: A Reference for Boards and Compliance Teams." *Techné AI*, May 12, 2026, https://techne.ai/insights/iso-iec-23894-reference.

Plain text

Abdullahi, Khullani M. "ISO/IEC 23894 AI Risk Management Guidance: A Reference for Boards and Compliance Teams." Techné AI, May 12, 2026. Available at: https://techne.ai/insights/iso-iec-23894-reference

Get the next piece

*The Techné Institute* is the firm’s periodical on AI, work, and the law — *Adverse Impact* weekly and *Duty of Care* monthly, written for boards, GCs, and the advisors who serve them.

Subscribe on Substack 

About the author

**Khullani M. Abdullahi, JD,** is an AI governance and compliance consultant and the founder of Techné AI, an independent advisory firm based in Chicago. She submitted written testimony to the Illinois Senate Executive Subcommittee on AI and Social Media; the substance of one of her recommendations was incorporated into an AI-risk impact study bill. She authored the AI Governance & D&O Liability briefing now in active circulation among practitioners and underwriters, maintains the Illinois AI Legislative Ecosystem tracker, and hosts the *AI in Chicago* podcast. Techné AI is an advisory firm, not a law firm.

Schedule a conversation More briefings

## Footer

Independent AI compliance advisory for US organizations — employment AI, board oversight, and multi-jurisdictional compliance posture.

Chicago, Illinois  
[email protected]

 

### The Libraries

- TalentSight
- TalentSight Intelligence
- BoardSight Intelligence
- The Bench
- Members

### Tools & Intelligence

- AI Hiring Exposure Snapshot
- The Techné Institute ↗
- Illinois AI Tracker ↗
- AI Governance Handbook ↗
- D&amp;O Liability Briefing

### Firm

- About
- Briefings
- How Techné AI works
- Corrections Log
- Independence &amp; Disclosures
- Contact
- Privacy Policy
- Terms

### Disclosure

Khullani M. Abdullahi holds a Juris Doctor and is the founder of Techné AI. Techné AI provides advisory services and does not provide legal advice or assurance services within the meaning of the AICPA Statements on Standards for Attestation Engagements.

Read full disclosures →

