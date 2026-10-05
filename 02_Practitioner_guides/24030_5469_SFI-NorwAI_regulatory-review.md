---
title: "ISO/IEC standardization of AI"
source_organization: "SFI NorwAI (Norwegian Centre for AI Innovation)"
source_url: "https://sfi-norwai.github.io/regreview/iso/"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
content_type: "microsite"
license_note: "Summary and analysis by On The Ground (OTG). Original article © source_organization. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

## Context

This page is one entry in a broader NorwAI regulatory-review microsite (copyright dated 2022) surveying standards work by ISO/IEC JTC 1/SC 42, the joint ISO/IEC committee responsible for AI standardization. At the time the page was written, SC 42 had 11 published standards and 37 more under development; some of the standards it lists (including ISO/IEC 23894 itself) were still in draft status (e.g., listed as a Committee Draft) at that point and have since been finalized — ISO/IEC 23894 was published in February 2023, for instance. Readers should treat draft/development statuses on this page as reflecting 2022 and check current status against the ISO/IEC JTC 1/SC 42 catalogue for anything time-sensitive. The page groups standards into five categories: foundational, trustworthiness, functional safety, governance implications, and other.

## Foundational standards

**ISO/IEC 22989 — AI Concepts and Terminology.** Establishes shared vocabulary and concepts for AI so the technology can be more consistently understood across a broad range of stakeholders, and so other standards (including 23894) have common terminology to build on.

**ISO/IEC 23053 — Framework for AI Systems Using Machine Learning.** Provides a common framework and terminology specifically for describing ML-based AI systems, covering ML systems, ML approaches, the ML pipeline, and the ML process, with an informative annex mapping its data types to the data categories in ISO/IEC 19944-1.

## Trustworthiness

**ISO/IEC TR 24368 — Overview of Ethical and Societal Concerns.** A high-level survey of ethical and societal issues in AI, from privacy and security to discriminatory outcomes and effects on human autonomy. It notes that the values built into an algorithm — and even the choice of what problems to apply AI to — can reflect developers' own worldviews and cognitive biases, whether intentionally or not, and that ethical concerns can arise even when a system is technically flawless. It surveys existing ethical frameworks and human-rights practices, with an informative annex summarizing ethical-AI principles from around the world and another elaborating on concerns in specific use cases.

**ISO/IEC 23894 — Risk Management.** AI can introduce risks that are new to an organization, can have positive or negative effects on existing objectives, or can shift the likelihood of risks the organization already had. The standard gives organizations that develop, produce, deploy, or use AI-based products, systems, and services guidance on managing risk specific to AI, and is designed to be used together with — and treats as a normative reference — ISO 31000:2018. It mirrors ISO 31000's clause structure, amending it with AI-specific sub-clauses where needed; its main content sits in the principles clause, the framework clause, and the processes clause, with Annex A and Annex B providing common AI-related objectives and risk sources, and Annex C giving an example mapping between the risk management process and an AI system life cycle. (See the companion files in this repository for more detailed treatment of 23894.)

**ISO/IEC TR 24027 — Bias in AI Systems and AI-Aided Decision Making.** Defines bias in an AI system as treating certain objects, people, or groups differently from others in tasks like perception, prediction, or decision-making. It distinguishes intended/desired bias from unintended/unwanted bias, and helps practitioners: understand where unwanted bias enters a system (human cognitive bias, data bias, and bias introduced through engineering choices); assess bias and fairness, including through fairness metrics applied to system outputs; and address bias-related risk across the full AI life cycle — data collection, training, continual learning, design, testing, evaluation, and use.

**ISO/IEC TR 24028 — Overview of Trustworthiness in AI.** Surveys approaches for establishing trust in AI systems, common engineering pitfalls and the threats/risks they create, mitigation techniques, and approaches for assessing and achieving availability, resilience, reliability, accuracy, safety, security, and privacy. It does not itself define or specify levels of trustworthiness.

**ISO/IEC TR 24029-1 — Assessment of the Robustness of Neural Networks.** Aimed at helping engineers and users assess how robust a neural network is across its life cycle, combining statistical analysis with formal and empirical methods. The assessment process runs in six broad steps: state the robustness goals, plan testing, conduct testing, analyze the outcomes, interpret the results, and finally decide on the system's robustness by comparing the interpreted results against the original goals. Part 1 focuses on understanding robustness-related risk; a further part addresses recommendations and requirements for using formal methods in the assessment.

## Functional safety

**ISO/IEC TR 5469 — Functional Safety and AI Systems.** (Listed as under development on the source page; subsequently published as Edition 1 in January 2024 — see the latest-developments section below.) This technical report is aimed at developers of safety-related systems who want to apply AI technology within safety functions responsibly. It works by: explaining functional safety and its relevance to AI; describing how AI technology is used in safety-related programmable systems; providing a classification scheme for where AI is applicable in such systems; explaining AI technology elements and a three-stage realization principle; explaining how AI system properties relate to functional safety; discussing verification and validation techniques; describing control and mitigation measures; showing how IEC 61508-3 can be interpreted for AI (with alternative compliance routes where a direct interpretation isn't practical); and mapping AI life-cycle models onto IEC 61508-1. In short, this is a functional-safety document (i.e., about safely applying AI within safety-critical systems), not a general AI quality or transparency standard — that latter ground is covered separately by standards such as ISO/IEC 25059 (AI quality model) and ISO/IEC 12792 (transparency taxonomy).

## Governance implications

**ISO/IEC 38507 — Governance Implications of the Use of AI by Organizations.** Guidance for an organization's governing body on the implications of using, or considering using, AI — defined broadly as developing or applying an AI system at any life-cycle stage to meet objectives and create value. A governing body weighing AI adoption needs to balance the opportunities against new risks and considerations that AI introduces, such as: greater reliance on technology; transparency and explainability gaps; differences between what's assumed when a task is delegated to a human versus to AI; competitive pressure from not adopting AI; the risk of embedding bias, errors, or harm into existing systems without realizing it; a mismatch in the pace of change between self-updating AI systems and human compliance oversight; workforce impact; and impact on commercial operations and brand reputation.

The standard is clear that the governing body itself remains responsible for AI use — responsibility isn't something that can be attributed to the AI system. Members of the governing body need to inform themselves about AI's possibilities and risks and remain accountable for what level of AI use the organization considers acceptable, since AI use can create new obligations, whether from law or from voluntary codes of practice the organization has adopted. It also outlines actions a governing body can take to constrain AI use where needed: tightening compliance oversight, narrowing the scope of use, assessing impact on stakeholders, clarifying legal obligations, aligning AI use with organizational objectives and culture, ensuring context is properly accounted for in problem-solving, and explicitly examining the additional risk AI introduces.

## Other standards on the page

**ISO/IEC TR 24372 — Overview of Computational Approaches for AI Systems.** Describes typical characteristics of AI systems (e.g., adaptability, explainability, discriminative capability) and their computational characteristics (data-based, knowledge-based, infrastructure-based), covering two broad categories of approach — knowledge-driven and data-driven — and surveying algorithms and approaches spanning knowledge engineering and representation, logic and reasoning, machine learning, and metaheuristics.

**ISO/IEC TR 24030 — Use Cases.** (A second edition has since been published, in April 2024; see below.) A collection of AI application use cases spanning domains such as agriculture, digital marketing, education, energy, financial markets, healthcare, robotics, ICT, legal, logistics, manufacturing, the public sector, security, and transportation. Its purpose is to illustrate where AI standardization work actually applies in practice, share collected use cases to support collaboration between standardization bodies and other organizations, and help surface new technical requirements that could accelerate AI technology development.

**ISO/IEC TR 29119-11 — Guidelines on the Testing of AI-Based Systems.** (Still the 2020 edition as far as could be found; see below.) While testing conventional software is well understood, AI-based systems introduce new testing challenges that this document addresses directly, explaining what makes AI systems different to test and the resulting difficulty in specifying acceptance criteria. Its central concern is the "test oracle problem" — the difficulty of determining the expected/correct result for a given test case, and therefore whether a test has actually passed or failed. It covers testing across the AI system life cycle, offers guidance on black-box testing approaches generally, introduces white-box testing specifically for neural networks, and describes options for test environments and test scenarios.

## Latest developments (as of 2026-10-05)

Source re-check: the NorwAI page still states 11 published and 37 in-development SC 42 standards and carries a 2022 copyright notice, so it has not been updated. Its counts and statuses are out of date; use the ISO committee catalogue (https://www.iso.org/committee/6794475.html, not fetchable today) for current numbers. https://sfi-norwai.github.io/regreview/iso/

Documents covered by this file
- ISO/IEC TR 5469: published January 2024 as Edition 1, 73 pages; scope covers AI inside safety functions, non-AI safety functions guarding AI-controlled equipment, and AI used to develop safety functions. No revision or new edition found (unverified absence). https://committee.iso.org/standard/81283.html
- ISO/IEC TR 24030: Edition 2 published April 2024, 169 pages; the ISO page notes it as scheduled for revision, with no third edition found yet. https://committee.iso.org/standard/84144.html
- ISO/IEC TR 29119-11: first edition published 27 November 2020; catalogue data shows a review-close date of 5 March 2026 but no new edition found. https://iss.rs/en/project/show/iso:proj:79016 . A newer testing document, ISO/IEC TS 42119-2:2025 (overview of testing AI systems, applying the 29119 series), is listed as published in 2025 by catalogue sites (ISO page not fetchable). https://www.iso.org/standard/84127.html
- ISO/IEC 23894: Edition 1, 6 February 2023, no amendment found; CEN adopted it as EN ISO/IEC 23894:2024 (secondary). https://committee.iso.org/standard/77304.html and https://www.din.de/en/getting-involved/standards-committees/nia/wdc-beuth:din21:377530454

Newer SC 42 publications and projects (named in this file's text)
- ISO/IEC 42005:2025 (impact assessment), May 2025: https://committee.iso.org/standard/42005
- ISO/IEC 42006:2025 (certification bodies for AI management systems), 7 July 2025: https://committee.iso.org/standard/42006?browse=ics
- ISO/IEC 12792:2025 (transparency taxonomy), Edition 1, November 2025: https://committee.iso.org/standard/84111.html
- ISO/IEC 25059:2023 (quality model), published 28 June 2023; second edition at DIS stage (enquiry 26 December 2025 to 22 February 2026), final publication not found. https://committee.iso.org/standard/80655.html and https://projektai.lsd.lt/en/drafts/software-engineering-systems-and-software-quality-requirements-and-evaluation-square-quality-models-for-ai-systems-iso-iec-dis-25059-2025

EU and NIST context
- EU Digital Omnibus provisional agreement of 7 May 2026 sets 2 December 2027 and 2 August 2028 for high-risk obligations. https://digital-strategy.ec.europa.eu/en/news/eu-agrees-simplify-ai-rules-boost-innovation-and-ban-nudification-apps-protect-citizens
- Harmonised standards: prEN 18228 (risk management) was in enquiry to end of July 2026 per CEN-CENELEC (https://www.cencenelec.eu/news-events/news/2026/newsletter/ots-73-etuc/); later status is reported inconsistently across secondary sources (unverified). Whether any ISO/IEC TR 5469 or 24030 content is referenced in EU harmonised standards is unverified.
- NIST AI RMF 1.0 is under revision per the AI Action Plan; Generative AI Profile NIST AI 600-1 (26 July 2024); critical-infrastructure profile concept note 7 April 2026. https://www.nist.gov/itl/ai-risk-management-framework
