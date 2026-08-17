> Source: https://sfi-norwai.github.io/regreview/iso/
> Archived: 2026-08-17

---

# ISO/IEC standardization of AI

The [ISO/IEC JTC 1/SC 42](https://www.iso.org/committee/6794475.html) comittee is responsible for standardization within the area of Artificial Intelligence. There are 11 standards published and 37 standards under development under the direct responsibility of this technical committee.

The major ISO/IEC standards related to AI are presented below.

## Foundational standards

### ISO/IEC 22989, Artificail Intelligence - Concepts and Terminology

This document provides standardized concepts and terminology to help artificial intelligence technology be better understood and adopted by a broad set of stakeholders. This document can be used in the development of other standards and in support of communications among diverse, interested parties/stakeholders.

### ISO/IEC 23053, Framework for Artificial Intelligence Systems Using Machine Learning

This document aims to provide a framework for the description of AI systems that use ML. By establishing a common terminology and a common set of concepts for such systems, this document provides a basis for clear explanation of the systems and various considerations that apply to their engineering and to their use. The document describes machine learning systems (chapter 6), machine learning approaches (chapter 7), The machine learning pipeline (chapter 8) and the machine learning process (chapter 9). Annex A maps ISO/IEC 23053 data types to ISO/IEC 19944-1 data categories.

## Trustworthyness

### ISO/IEC PRF TR 24368, Information technology — Artificial intelligence — Overview of ethical and societal concerns

This document provides a high-level overview of AI ethical and societal concerns. Examples of ethical and societal concerns in AI include privacy and security breaches to discriminatory outcomes and impact on human autonomy. The values embedded in algorithms, as well as the choice of problems AI systems and applications are used for to address, can be intentionally or inadvertently shaped by developers’ and stakeholders’ own worldviews and cognitive bias. Ethical and social concerns may arise even if an AI system performs flawlessly from a technical perspective.

The document describes ethical frameworks, human rights practices, and principles for responsible use of AI. Appendix A is informative and gives an overview and summary of principles for ethical AI from around the world. Appendix B is informative and elaborates on ethical and societal concerns in several use cases.

### ISO/IEC CD 23894 Information Technology – artificial Intelligence – risk management

AI systems can introduce new or emergent risks for an organization, with positive or negative consequences on objectives, or changes in the likelihood of existing risks. This document provides guidelines on how organizations that develop, produce, deploy or use products, systems and services that utilize AI can manage risk specifically related to AI. It uses ISO 31000:2018 as a normative reference and is intended to be used in connection with ISO 31000:2018.

The clause structure of ISO 31000:2018 is mirrored in this document and amended by sub-clauses if needed. The main parts in the document are Clause 5 (principles), clause 5 (framework) and clause 6 (processes). Common AI-related objectives and risk sources are provided in Annex A and Annex B. Annex C provides an example mapping between the risk management processes and an AI system life cycle.

### ISO/IEC TR 24027:2021, Information technology — Artificial intelligence (AI) — Bias in AI systems and AI aided decision making

Bias in an AI system can be described as performing some actions such as perception, observation, representation, prediction, or decision-making differently on certain objects, people, or groups compared to others.

Bias can be categorized as desired/intended bias and unintended/unwanted. The document **ISO/IEC TR 24027 helps you**,

1.  **understand from where the unintended bias is added to the AI systems:** potential sources of unwanted bias are human cognitive bias, data bias, and bias introduced by engineering decisions.

2.  **assessing bias and fairness:** AI systems are complex and can be difficult to understand, but still, there exist strategies for the identification of unwanted bias. One way to uncover evidence of unwanted bias is to assess the system’s outputs using one or more fairness metrics. The document presents several of such matricesmetrics.

3.  **treat bias-related vulnerabilities throughout the entire AI system lifecycle**, i.e., data collection, training, continual learning, design, testing, evaluation, and use.

### ISO/IEC TR 24028:2020, Information technology – Artificial intelligence – Overview of trustworthiness in artificial intelligence

ISO/IEC TR 24028 surveys topics related to trustworthiness in AI systems, including: \* Approaches to establish trust in AI systems. \* Engineering pitfalls and typical associated threats and risks to AI systems, along with possible mitigation techniques and methods. \* Approaches to assess and achieve availability, resiliency, reliability, accuracy, safety, security and privacy of AI systems. It does not specify levels of trustworthiness.

### ISO/IEC TR 24029-1:2021, Artificial Intelligence (AI) — Assessment of the robustness of neural networks

Neural Networks (NNs) are being widely used due to the promising results on various complex pattern learning tasks. Statistical analyses are used to measure the performance of NNs under varying conditions. Additionally, some form of formal analysis using formal methods and empirical analysis using empirical methods are also required to access the robustness of the NNs. In this regard, ISO/IEC TR 24029 is aimed at helping AI engineers and users to assess the robustness of NNs throughout their life cycle. More specifically, part 1 of the document helps understand the risks tied to the robustness of AI systems while part 2 focuses more on providing recommendations and requirements for the use of formal methods to assess the robustness.

Overall, there are six steps in the assessment process. As the first step, *robustness goals are stated*. Generally, the goals are not only for the statistical analysis but also for the formal and empirical analysis. Then in the second and third steps, *testing is planned and conducted*. Once completed, the *outcomes are analyzed* in the fourth step, and the *results are interpreted* in the fifth step. *  
Finally, in the last step,* the decision on the system robustness is formulated\* by comparing the interpreted results obtained in the fifth step and the robustness goals stated in the first step.

## Functional safety

### ISO/IEC AWI TR 5469, Artificial intelligence — Functional safety and AI systems

*(This technical report is under development)*

The purpose of ISO/IEC TR 5469 is to enable the developer of safety-related systems to appropriately apply AI technologies as part of safety functions by fostering awareness of the properties, safety risk (in the context of functional safety) factors, available methods and potential constraints of AI technologies. It does so by:

- Giving an overview of functional safety and its relevance for AI.
- Describing the use of AI technology in safety-related programmable systems.
- Providing a classification scheme for the applicability of AI in safety-related programmable systems.
- Explaining AI technology elements and the three-stage realization principle.
- Explaining properties of AI systems and how they relate to safety in the context of functional safety.
- Discussing verification and validation techniques.
- Describing control and mitigation measures.
- Showing how IEC 61508 3 can be interpreted for applying it to AI, and providing alternative ways for compliance when possible.
- Mapping AI life cycle models to IEC 61508-1.

## Governance implications

### ISO/IEC 38507:2022, Information technology — Governance of IT — Governance implications of the use of artificial intelligence by organizations

The objective of this document is to provide guidance for the governing body of an organization that is using, or is considering the use of, artificial intelligence (AI). “Use of AI” is defined in the broadest sense as developing or applying an AI system through any part of its life cycle to fulfil objectives and create value for the organization.

A governing body can consider deploying AI in order to pursue specific opportunities that the organization has identified. In such cases, the governing body needs to weigh those opportunities against risk and other implications of use. New implications that arise from the use of AI could include: \* increased reliance on technology \* transparency and explainability issues \* differences in assumptions made when delegating tasks to humans vs AI \* competitive pressure of an organization not using AI \* unawareness of potential bias, errors or harms of embedding AI into existing complex systems \* disparity in speed of change between automated learning systems human controls of compliance; \* the impact of AI on the workforce \* the impact of AI on commercial operations and to brand reputation.

The governing body should take responsibility for the use of AI, rather than attributing responsibility to the AI system itself. Members of the governing body are responsible for informing themselves about the possibilities and risks raised by using AI systems. Members of the governing body are accountable for the use of AI considered acceptable by the organization. The use of AI can result in new obligations for the organization. These can be legal requirements or as a consequence of the adoption of voluntary codes of practice, whether directly within an AI system’s automation of decision-making processes or indirectly through its use of data or other resources or processes.

In section 5.5, the document describes actions that the organization may take to constrain the use of AI: - Increase oversight of compliance. - Address the scope of use. - Assess and address the impact on stakeholders. - Determine legal requirements or obligations of using such technology. - Align the use of AI to the objectives of the organization. - Align the use of AI to the organization’s culture and values. - Ensure that problem solving takes due account of context. - Examine the additional risk that the use of AI can bring to the organization.

## Other

### ISO/IEC TR 24372:2021, Information technology — Artificial intelligence (AI) — Overview of computational approaches for AI systems

ISO/IEC TR 24372 describes the typical characteristics of AI systems (e.g. adaptable, explainable, discriminative) and their computational characteristics (e.g. data-based, knowledge-base, infrastructure-based). It describes two categories of computational approaches: knowledge-driven and data-driven.

It describes selected algorithms and approaches related to: knowledge engineering and representation, logic and reasoning, machine learning, and metaheuristics.

### ISO/IEC TR 24030:2021, Information technology — Artificial intelligence (AI) — Use cases

ISO/IEC TR 24030 provides a collection of use cases of artificial intelligence (AI) applications in a variety of domains, such as: agriculture, digital marketing, education, energy, financial markets, healthcare, robotics, ICT, legal, logistics, manufacturing, public sector, security, and transportation.

It aims to illustrate the applicability of the AI standardization work across a variety of application domains, and share the collected use cases in support of AI standardization work with external organizations and internal entities to foster collaboration.

It also intends to help identify new technical requirements that may accelerate the development of AI technology.

### ISO/IEC TR 29119-11:2020, Software and systems engineering — Software testing — Part 11: Guidelines on the testing of AI-based systems

The testing of traditional systems is well-understood, but AI-based systems, which are becoming more prevalent and critical to our daily lives, introduce new challenges. This document has been created to introduce AI-based systems and provide guidelines on how they might be tested. This document explains those characteristics which are specific to AI-based systems and explains the corresponding difficulties of specifying the acceptance criteria for such systems.

This document presents the challenges of testing AI-based systems, the main challenge being the test oracle problem, whereby testers find it difficult to determine expected results for testing and therefore whether tests have passed or failed. It covers testing of these systems across the life cycle and gives guidelines on how AI-based systems in general can be tested using black-box approaches and introduces white-box testing specifically for neural networks. It describes options for the test environments and test scenarios used for testing AI-based systems.


 Previous  New Zealand

 Next  IEEE


Copyright © NorwAI 2022
