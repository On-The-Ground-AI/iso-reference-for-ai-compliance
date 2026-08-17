> Source: https://www.softwareimprovementgroup.com/blog/iso-5338-get-to-know-the-global-standard-on-ai-systems/
> Archived: 2026-08-17

---

# ISO 5338 AI systems standard

Rob van der Veer

#### In this article​

ISO/IEC 5338 is the international standard for AI system lifecycle processes. It helps organizations structure how AI systems are specified, developed, validated, deployed, monitored, and maintained so that quality, risk, and governance are addressed throughout the lifecycle.

## Why ISO/IEC 5338 matters for AI systems

AI systems create risks and dependencies that often span multiple teams. Data scientists, software engineers, architects, security teams, risk owners, and business stakeholders may all influence outcomes, but without a common lifecycle model, accountability can become fragmented.

ISO/IEC 5338 helps address that fragmentation by giving organizations a shared process framework. This is useful when you need to:

- **Improve consistency** across AI projects and suppliers
- **Strengthen evidence** for governance, assurance, and audit activities
- **Reduce lifecycle blind spots** between experimentation and production operations
- **Clarify ownership** for data, models, deployment decisions, and monitoring
- **Support responsible scaling** of AI beyond isolated pilots

For enterprise environments, that process discipline is often the difference between an interesting model and an operationally reliable AI system.

## What is ISO/IEC 5338?

ISO/IEC 5338 defines lifecycle processes for AI systems. Its purpose is to bring structure and consistency to the way organizations engineer and manage AI-enabled systems from concept through maintenance and evolution.

Unlike broad AI governance guidance, ISO/IEC 5338 focuses on the operational lifecycle. It helps teams organize the work products, decision points, and responsibilities needed to build and manage AI systems in a controlled way.

This matters because AI systems introduce lifecycle concerns that are not fully covered by traditional software development alone, including training data readiness, model behavior in production, human roles and competencies, and ongoing monitoring for performance change over time.

## What the standard covers across the AI lifecycle

ISO/IEC 5338 is relevant across the full AI system lifecycle, not only during model development. In practice, that includes activities such as:

- **Requirements and scope definition** – clarifying intended purpose, constraints, stakeholders, and acceptance criteria
- **Data readiness** – assessing the suitability, provenance, and quality of data used to train, test, and operate the system
- **Design and development** – structuring the system, model components, interfaces, and supporting controls
- **Verification and validation** – testing whether the system meets technical requirements and intended use expectations
- **Deployment** – moving the system into operation with appropriate controls, documentation, and accountability
- **Operational monitoring** – tracking behavior in production, including model drift, performance degradation, and other changes that affect outcomes
- **Change and maintenance** – managing updates, improvement (including retraining where applicable), and ongoing operation

The standard helps organizations treat these steps as part of one managed lifecycle rather than isolated technical tasks.

My interpretation of Figure 3 *in 5338 with a selection of AI particularities in callouts*.

The AI activity of Model Engineering is not treated as a separate process because, from a lifecycle perspective, it perfectly fits into the existing Implementation process.

Next to these technical processes, there are also agreement processes, organization-enabling processes, and technical management processes, such as risk management and quality assurance.

ISO/IEC 5338 discussed so-called **AI particularities** with every lifecycle process: attention points specifically for AI. For example:

- The importance of protecting the sensitive training data that engineers work with to build a model, in contrast to regular software engineering where only anonymous test data is used;
- The range of new risk topics (e.g. transparency, unwanted bias, purpose-binding);
- Project managers will need to know how AI projects can be hard to predict in experimental stages;
- HR-wise it is important to know that you need different skill sets;
- When models run in production their performance can be continuously validated to detect issues and to see if the model is going ‘stale’.

## How ISO/IEC 5338 differs from broader AI governance standards

ISO/IEC 5338 is best understood as a lifecycle process standard. It does not replace broader governance or risk standards. Instead, it works alongside them.

| Standard      | Primary focus                 | How it relates to ISO/IEC 5338                                                              |
|---------------|-------------------------------|---------------------------------------------------------------------------------------------|
| ISO/IEC 5338  | AI system lifecycle processes | Defines how lifecycle activities are structured and managed                                 |
| ISO/IEC 42001 | AI management system          | Provides the governance and management system layer around AI activities                    |
| ISO/IEC 23894 | AI risk management            | Supports identification, assessment, and treatment of AI-related risks within the lifecycle |
| ISO/IEC 22989 | AI concepts and terminology   | Provides consistent definitions used across policies, controls, and project documentation   |

In simple terms, ISO/IEC 42001 helps an organization govern AI, while ISO/IEC 5338 helps teams execute AI system lifecycle processes in a structured way. That distinction is important for organizations that already have governance ambitions but need more operational control in engineering and delivery. Readers looking for the broader landscape can also explore ISO standards for AI.

## What makes AI lifecycle management different from traditional software lifecycle management

Traditional software lifecycle standards remain relevant, but AI systems add characteristics that require extra attention. ISO/IEC 5338 is valuable because it reflects those AI-specific realities.

- **Data is central to system behavior** – system quality depends not only on code, but also on the quality, origin, and appropriateness of training and test data
- **Behavior can change after release** – models may drift or degrade in production as data and context evolve
- **Validation is more complex** – teams must assess not only functional correctness, but also robustness against the intended purpose and operating conditions
- **Human roles and competencies matter** – AI projects can involve additional roles and skills (for example, data scientists) that need to be accounted for in lifecycle processes
- **Operational evidence matters** – decisions about deployment, change, and continued use should be supported by traceable evidence

This is why many organizations need more than general software development discipline when introducing AI into business-critical systems.

## How to apply ISO/IEC 5338 in practice

Applying the ISO 5338 AI systems standard usually starts with understanding where your current AI practices are informal, inconsistent, or weakly evidenced. The standard becomes most useful when it is used to improve control across real delivery workflows rather than treated as a theoretical checklist.

A practical approach often includes:

1.  **Map current AI use cases and lifecycle stages** – identify where AI systems are being designed, trained, deployed, and monitored
2.  **Define lifecycle responsibilities** – assign ownership for requirements, data quality, validation, release, and operational monitoring
3.  **Identify required work products and evidence** – determine what documentation, decisions, and records are needed at each stage
4.  **Introduce checkpoints** – establish review moments for data readiness, testing, deployment approval, and production performance
5.  **Connect lifecycle work to governance** – align lifecycle execution with broader AI management and risk oversight

For larger organizations, this often means integrating AI lifecycle controls into existing software governance, architecture oversight, security processes, and compliance activities, especially when preparing for evolving regulatory expectations. For actionable guidance to implement governance across the AI lifecycle, watch Enterprise AI governance that works (webinar replay).

## Where organizations often struggle

Most implementation challenges are not caused by lack of awareness of AI risk. They are caused by gaps between policy and day-to-day delivery. Common issues include unclear ownership, inconsistent validation practices, weak traceability between data and outcomes, and limited production monitoring after deployment.

Another recurring challenge is treating models as isolated assets instead of viewing the full AI system as a managed combination of data, code, infrastructure, decision logic, and operational controls. ISO/IEC 5338 helps shift the focus from isolated model development to end-to-end lifecycle control.

## How SIG supports organizations on ISO/IEC 5338

SIG has direct involvement with the standard itself and applies ISO/IEC 5338 in assessments and coaching. This is relevant for organizations that want not only an explanation of the standard, but also a practical view of how lifecycle processes can be evaluated and improved in real software environments.

SIG also provides an AI Readiness Guide and maturity guidance connected to ISO/IEC 5338, helping organizations understand how prepared they are to adopt structured AI lifecycle practices.

## FAQ

### Is ISO/IEC 5338 a certification standard?

ISO/IEC 5338 is a lifecycle process standard for AI systems. It is primarily used to structure and improve how AI systems are engineered and managed across their lifecycle, rather than as a standalone certification framework.

### Who should use the ISO 5338 AI systems standard?

It is most relevant for organizations that design, build, acquire, integrate, or operate AI systems and need stronger control over lifecycle activities. This commonly includes enterprise IT leaders, architects, engineering teams, governance functions, and risk owners.

### Does ISO/IEC 5338 only apply to machine learning models?

No. The standard addresses AI systems from a lifecycle perspective, which means it applies to the broader system context around AI components, including data, software, deployment, monitoring, and operational management. Governance practices such as AI code governance can also support these broader controls.










### For You

### By USE CASE







### RESOURCES






### LOGIN



### Our Solutions

### Platform







### [Consultancy](https://www.softwareimprovementgroup.com/consulting/)



### Partners




### Certifications

### Legal Pages





Hey AI, learn about us

### Social Media

## Developed by

### Legal Pages

#### [PRIVACY POLICY](#)

#### [Security and Compliance Reports](#)

#### [Cookie Policy](#)

#### [SigridSphere](#)


URL

This field is for validation purposes and should be left unchanged.

Name\*

 First   Last 

Job Title\*

Business email\*

Phone

Privacy\*

By submitting this form, you consent to being contacted in accordance with our privacy policy. You can opt out at any time.

Send request

Phone

This field is for validation purposes and should be left unchanged.

Name\*

 First   Last 

Business email\*

Company\*

Job Title\*

What type of partnership are you interested in?\*

Consulting

Delivery

Technology

Resale

Reason for the request – additional details\*

Privacy\*

By submitting this form, you consent to being contacted in accordance with our privacy policy. You can opt out at any time.

Send request

## Register for access to Summer Sessions

Name

This field is for validation purposes and should be left unchanged.

Name\*

 First   Last 

Company\*

Business email\*

Job Title\*

Privacy\*

By submitting this form, you consent to being contacted in accordance with our privacy policy. You can opt out at any time.

SUBMIT
