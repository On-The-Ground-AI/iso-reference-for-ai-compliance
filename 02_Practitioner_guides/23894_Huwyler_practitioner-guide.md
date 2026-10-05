---
title: "How to Actually Use ISO/IEC 23894 for AI Risk Management"
source_organization: "Prof. Hernan Huwyler (AI Governance and Risk Management blog)"
source_url: "https://hernanhuwyler.wordpress.com/2026/03/28/how-to-actually-use-iso-iec-23894-for-ai-risk-management/"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
content_type: "blog post"
license_note: "Summary and analysis by On The Ground (OTG). Original article © source_organization. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

## Note on this rewrite

The original post mixes genuine explanation of ISO/IEC 23894's clause structure with a large number of unattributed "practical example" anecdotes (unnamed clients, invented figures such as specific weeks/months/percentages) and an "About the Author" section promoting the author's consulting, training, and social media presence. The anecdotes cannot be independently verified and read as illustrative filler rather than documented case studies, so they have been omitted below. What remains is the structural and factual description of the standard itself, which is consistent with the standard's known clause architecture (it mirrors ISO 31000) and with the other sources cross-referenced in this repository.

## Why the standard exists

Before ISO/IEC 23894:2023 existed, organizations managing AI risk generally cobbled together practices borrowed from information security and data governance frameworks, without a purpose-built methodology for AI. ISO/IEC 23894 was developed by ISO/IEC JTC 1/SC 42 to close that gap: it takes the already-established ISO 31000 risk management framework and shows where AI-specific risks require additional or different treatment. It is explicitly not a standalone document — it presupposes the reader already understands ISO 31000, and it functions as an AI-specific annotation layer on top of it. The standard's content is organized into three parts: principles, an organizational framework, and operational processes.

## Clause 4 — Principles

ISO 31000 defines eight risk management principles. ISO/IEC 23894 adds AI-specific interpretation to five of them:

- **Inclusive.** AI systems affect a broader range of stakeholders than typical software, so the standard calls for structured engagement with the people affected by a system's outputs — not just internal reviewers — to help surface data risks, fairness criteria, bias, and where human oversight is needed.
- **Dynamic.** Machine-learning-based AI systems can change behavior through continuous learning, and the regulatory and social context around AI shifts quickly. Risk management has to treat the system as a moving target rather than something assessed once.
- **Best available information.** Historical data on AI failures is comparatively limited because the technology is young, and usage patterns evolve fast — including limits on what an organization can observe about how its AI is used downstream, for contractual, IP, or market reasons.
- **Human and cultural factors.** Risk management should account for how AI interacts with existing social patterns affecting equity, privacy, expression, fairness, safety, security, employment, environment, and human rights.
- **Continual improvement.** Organizations should keep monitoring the wider AI ecosystem for new research, failure modes, and lessons learned, and feed previously unknown risks back into their process.

## Clause 5 — Framework

This clause covers how AI risk management gets embedded into an organization's structure: leadership commitment, integration with existing management systems, organizational design, resourcing, and communication.

Two points get specific AI-related emphasis:

- **Leadership and commitment.** Because trust and accountability carry particular weight for AI, the standard suggests top management consider making public commitments to responsible AI risk management — creating an external accountability anchor, not just an internal policy statement.
- **Assigning roles.** The standard calls for top management and oversight bodies to allocate resources and name specific individuals with the authority to address AI risks and the responsibility for monitoring AI risk processes — deliberately not leaving this to a committee or shared inbox.

The framework clause also asks organizations to map external context (AI-relevant legal requirements, ethical guidelines from regulators and industry bodies, sector-specific AI frameworks, technology trends, societal implications, and — where relevant — data rights and continuous-learning implications for contracts) and internal context (how AI changes organizational culture, the availability of in-house AI expertise, deskilling risk, IP implications, and additional data-quality constraints).

## Clause 6 — Process

This is the most detailed part of the standard, describing the operational sequence: define scope and context, assess risk (identify, analyze, evaluate), treat risk, then monitor and report.

### Scope, context, and criteria

Organizations are expected to build an inventory of where AI is developed or used across the organization — including AI embedded in SaaS tools, spreadsheet-based models, and systems inherited through acquisitions, which are easy to miss in a first pass. Defining risk criteria for AI means accounting for uncertainty across the whole system: the data, the software, the mathematical model, any physical components, and human-in-the-loop elements such as data labeling. The standard also flags that because AI is fast-moving, the metrics used to judge risk should be periodically re-evaluated for continued relevance rather than assumed to remain valid indefinitely.

### Risk identification

The standard structures identification around five activities:

1. **Assets and their value**, considered at three levels — organizational (data, models, the AI system, reputation, trust), individual (personal data, privacy, health, safety), and societal (environment, socio-cultural values, educational equity). This three-level framing is one of the standard's more distinctive contributions: it pushes organizations past a purely organizational view of what's at stake.
2. **Risk sources**, for which Annex B supplies categories (see below).
3. **Potential events and outcomes**, identified through methods such as published standards and research, market data, incident reports on comparable systems, field trials, stakeholder reports, and expert interviews.
4. **Existing controls**, including an honest assessment of whether they actually work.
5. **Consequences**, with a specific instruction to identify where the group that benefits from an AI system differs from the group that bears its negative consequences — for example, a hiring tool that speeds up HR workflows while disadvantaging applicants from particular backgrounds.

### Risk analysis

Risk analysis is split into three separate impact assessments — business, individual, and societal — rather than a single blended score. The individual impact assessment considers factors such as the type of personal data involved, potential bias and fairness impact, effects on fundamental rights, safety, and the jurisdictional/cultural context of the individual (the same AI system can carry a different risk profile in a jurisdiction with strong data-protection law versus one without).

On likelihood, the standard cautions that estimating how likely an AI failure is can be technically, economically, and heuristically difficult — particularly where a reliable probability simply cannot be calculated. Where that is the case, the guidance is to focus on the severity of consequences and the organization's ability to detect and respond, rather than force an unreliable number.

### Risk evaluation

This step compares analyzed risks against the organization's criteria to decide which need treatment and in what priority order. Notably, the standard does not add AI-specific guidance here — it defers entirely to ISO 31000, which signals that evaluation is a matter of organizational judgment involving people who understand both the technology and the business, not a technical calculation.

### Risk treatment

The standard carries over ISO 31000's seven treatment options: avoid the risk, accept increased risk to pursue an opportunity, remove the risk source, change the likelihood, change the consequences, share the risk (e.g., via contract or insurance), or retain the risk through an informed decision.

The AI-specific addition is a requirement for a documented risk-benefit analysis wherever a residual risk cannot be reduced to an acceptable level through any available treatment. This matters for AI because some risks — the inherent opacity of a deep learning model, for instance — cannot be fully engineered away, so the organization has to consciously weigh benefit against residual risk and record that reasoning.

### Monitoring, recording, and reporting

Clause 6.7 requires an ongoing system for collecting and verifying information from both the implementation and post-implementation phases of an AI system, including publicly available information about comparable systems, and for reassessing whether previously unknown risks have emerged or previously accepted risks are no longer acceptable.

Risk management records are expected to capture: a description and identification of the system, the methodology used, the intended use, who performed the assessment, terms of reference and date, release status, and the degree to which objectives were met. The standard also asks for traceability of each identified risk through the full risk management process, which in practice means a persistent risk identifier carried through a versioned risk register rather than a fresh register for every assessment cycle.

## Annex A — AI-related objectives to protect

Annex A catalogs the things an AI risk program is ultimately trying to protect, each with AI-specific framing:

- **Accountability** — AI complicates who is responsible for a decision that was previously made by a person; the standard flags this as an area where the legal picture is still developing across jurisdictions.
- **AI expertise** — building AI requires interdisciplinary skills beyond software engineering, and end users also need enough understanding of a system to catch and override erroneous outputs.
- **Training and test data quality** — data must be validated for currency, relevance, diversity, and consistency, including data sourced externally, and training/test sets should be kept independent where applicable.
- **Environmental impact** — AI can help environmental outcomes (e.g., optimizing energy use) or harm them (compute-intensive training), and both sides need consideration.
- **Fairness** — unfair outcomes can originate from biased objective functions, imbalanced data, human bias embedded in labels, or decisions about where and how a system is deployed; the standard points to ISO/IEC TR 24027 for deeper treatment of bias.
- **Maintainability** — because ML systems are trained rather than programmed, fixing or updating them behaves differently from patching conventional software.
- **Privacy** — large-dataset AI systems create privacy risk not only through direct data collection but through inference of sensitive attributes and through model personalization; the standard recommends a data protection impact assessment aligned with ISO/IEC 29134, and flags that protecting a personalized model itself is a privacy control, not only a security one.
- **Robustness** — whether a system holds up under unexpected conditions; the standard notes that characterizing robustness in neural networks specifically remains an open technical problem.
- **Safety** — AI used in vehicles, robotics, manufacturing, and medical devices carries safety implications that need to be evaluated against the relevant domain-specific safety standards, which the AI standard supplements rather than replaces.
- **Security** — beyond conventional information security, AI introduces attack surfaces such as data poisoning, adversarial inputs, and model extraction/stealing; ISO/IEC 27005 covers general information security risk management, and the AI-specific threats need additional controls on top of it.
- **Transparency and explainability** — the standard distinguishes transparency (what an organization communicates about a system) from explainability (what the system itself can reveal about its own decision logic). Both matter but serve different audiences, and the standard notes that pushing transparency too far can itself create privacy, security, or IP risk — so the right level has to be judged per stakeholder group.

## Annex B — AI-related risk sources

Annex B is a checklist of where AI risk tends to originate:

- **Complexity of environment** — the more complex and open-ended the operating environment, the harder it is to guarantee training data covers every situation the system will encounter (autonomous driving versus a narrow-domain chatbot are opposite ends of this spectrum).
- **Lack of transparency and explainability** — if a decision can't be explained, it can't be fully validated, which has knock-on effects for trust, accountability, safety, security, fairness, and robustness.
- **Level of automation** — more automation means less human oversight, which raises both the efficiency upside and the risk exposure; where a human is expected to intervene, the handover moment itself (response time, attention, situational awareness) is a risk source.
- **Machine-learning-specific risks** — data quality issues are described as especially hard to diagnose; data can become unrepresentative over time, data sourcing carries its own legal/ethical risk, and continuous learning can shift a system's behavior in production in ways not anticipated at launch.
- **System hardware issues** — hardware faults, radiation-induced soft errors, constraints in porting models across hardware, and network dependency for systems needing remote processing.
- **System life-cycle issues** — risk shows up at every stage: design (failing to anticipate deployment context), verification and validation (inadequate testing), deployment (misconfiguration), maintenance (unsupported systems still running), reuse (deploying a system outside the context it was validated for — the standard's own example is a face-detection system built for one purpose being repurposed for criminal suspect identification, a materially more demanding use case), and decommissioning (losing the decision expertise embedded in a retired system).
- **Technology readiness** — immature technology carries unknown risk; overly mature technology can breed complacency and technical debt. Both extremes warrant attention.

## Annex C — Risk management across the AI system life cycle

Annex C maps risk management activities onto the AI system life-cycle stages defined in ISO/IEC 22989:2022: inception, design and development, verification and validation, deployment, operation and monitoring, continuous validation, re-evaluation, and retirement or replacement. At the organizational level, a governing body sets overall risk appetite and maintains reusable catalogs of risk criteria, sources, mitigations, monitoring approaches, and reporting formats. At the project level, each individual AI system runs its own risk cycle through every one of those life-cycle stages. The core point of the annex is that risk management is not a front-loaded, one-time activity — the standard explicitly carries risk assessment, treatment, monitoring, and recording through to retirement, including the risk of losing institutional knowledge when a system is decommissioned or replaced.

## Related standards

ISO/IEC 23894 sits within a wider ecosystem of standards it references or connects to:

- **ISO 31000:2018** — Risk management, Guidelines (the foundational standard 23894 is built on).
- **ISO/IEC 22989:2022** — AI concepts and terminology, including the system life-cycle model.
- **ISO Guide 73:2009** — Risk management vocabulary.
- **ISO/IEC 38507:2022** — Governance implications of AI use by organizations.
- **ISO/IEC TR 24028:2020** — Overview of trustworthiness in AI.
- **ISO/IEC TR 24027:2021** — Bias in AI systems and AI-aided decision making.
- **ISO/IEC 29134:2017** — Guidelines for privacy impact assessment.
- **ISO/IEC 27005:2022** — Guidance on managing information security risks.
- **NIST AI Risk Management Framework (AI RMF 1.0)** — not referenced by the ISO standard itself, but broadly comparable in scope and increasingly expected alongside it by US regulators and enterprise customers.
- **EU AI Act (Regulation 2024/1689)** — makes AI risk management a legal obligation for high-risk systems; ISO/IEC 23894 offers a structured methodology that can support meeting many of its requirements.

Other AI-related ISO/IEC standards worth knowing by topic: management and governance (ISO/IEC 42001 – AI management systems; ISO/IEC 38507; ISO/IEC 42005 – AI system impact assessment; ISO/IEC 42006 – requirements for AIMS certification bodies); foundational frameworks (ISO/IEC 22989; ISO/IEC 23053 – ML systems framework; ISO/IEC 5338 – AI system life-cycle processes; ISO/IEC 5339 – guidance for AI applications); trustworthiness, ethics, and quality (ISO/IEC TR 24028; ISO/IEC TR 24368 – ethical and societal concerns; ISO/IEC 25059 – AI quality model; ISO/IEC 12791 – treatment of unwanted bias in ML; ISO/IEC 12792 – transparency taxonomy; ISO/IEC 42119-2 – AI testing, test data and results; ISO/IEC 4213 – assessment of ML classification performance); and data quality (ISO/IEC 24668 – big data analytics process management; ISO/IEC 5259 series – data quality for analytics and ML).

## Latest developments (as of 2026-10-05)

Source re-check: the Huwyler post (dated 28 March 2026 in its URL) re-fetched on 2026-10-05 with no sign of revision, and with no mention of any amendment to ISO/IEC 23894. It still treats the 2023 edition as current. The summary above stands. https://hernanhuwyler.wordpress.com/2026/03/28/how-to-actually-use-iso-iec-23894-for-ai-risk-management/

Edition status
- ISO/IEC 23894:2023 remains Edition 1 (6 February 2023, published). No revision project or second edition was found in public sources (unverified absence). https://committee.iso.org/standard/77304.html
- EN ISO/IEC 23894:2024 was approved by CEN on 12 February 2024 (secondary source). https://www.din.de/en/getting-involved/standards-committees/nia/wdc-beuth:din21:377530454

Updates to the "other standards" list above
- ISO/IEC 42005:2025 published May 2025: https://committee.iso.org/standard/42005 ; ISO/IEC 42006:2025 published 7 July 2025: https://committee.iso.org/standard/42006?browse=ics
- ISO/IEC 12792:2025 (transparency taxonomy) is Edition 1, published November 2025, 45 pages: https://committee.iso.org/standard/84111.html
- ISO/IEC 25059:2023 was published 28 June 2023 and is under revision; the ISO page shows it flagged for revision, and public listings show a second-edition DIS with an enquiry from 26 December 2025 to 22 February 2026. Final publication of edition 2 was not found. https://committee.iso.org/standard/80655.html and https://projektai.lsd.lt/en/drafts/software-engineering-systems-and-software-quality-requirements-and-evaluation-square-quality-models-for-ai-systems-iso-iec-dis-25059-2025
- ISO/IEC TS 42119-2:2025 (overview of testing AI systems) is listed as published in 2025 by catalogue sites; the ISO page was not fetchable. https://www.iso.org/standard/84127.html
- ISO/IEC TR 29119-11 is still the 2020 first edition (published 27 November 2020); no newer edition found. https://www.iso.org/standard/79016.html (catalogue details via https://iss.rs/en/project/show/iso:proj:79016)

EU AI Act and harmonised standards
- Digital Omnibus provisional agreement of 7 May 2026: high-risk obligations move to 2 December 2027 (stand-alone) and 2 August 2028 (embedded in products). https://digital-strategy.ec.europa.eu/en/news/eu-agrees-simplify-ai-rules-boost-innovation-and-ban-nudification-apps-protect-citizens
- Reported as Regulation (EU) 2026/1744, OJ 24 July 2026, in force 27 July 2026 (secondary; not confirmed on EUR-Lex). https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force
- prEN 18228 (AI risk management, supporting Article 9) was in public enquiry to end of July 2026 per CEN-CENELEC: https://www.cencenelec.eu/news-events/news/2026/newsletter/ots-73-etuc/ . Secondary reporting says it was rejected at enquiry and goes to comment resolution in November 2026 (https://krogrules.com/news); a DIN listing shows a 2026-10 edition with an enquiry to 11 November 2026 (https://www.din.de/en/wdc-beuth:din21:405977950). Status after these is unverified.
- As of an April 2026 analysis, no JTC 21 harmonised standard had been cited in the Official Journal, with citation judged realistic no earlier than Q1 2027 (secondary). https://consulting.tuv.com/aktuelles/ki-im-fokus/harmonisierte-normen-ai-act

NIST
- AI RMF 1.0 (26 January 2023) is under revision following the White House AI Action Plan; the Generative AI Profile (NIST AI 600-1) dates from 26 July 2024; a concept note for a critical-infrastructure profile was released 7 April 2026. https://www.nist.gov/itl/ai-risk-management-framework
