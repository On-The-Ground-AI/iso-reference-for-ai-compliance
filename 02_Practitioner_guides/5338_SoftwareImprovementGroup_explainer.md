---
title: "ISO 5338 AI systems standard"
source_organization: "Software Improvement Group (SIG)"
source_url: "https://www.softwareimprovementgroup.com/blog/iso-5338-get-to-know-the-global-standard-on-ai-systems/"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
content_type: "blog post"
license_note: "Summary and analysis by On The Ground (OTG). Original article © Software Improvement Group. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

# ISO/IEC 5338 AI System Life Cycle Processes: A Practitioner Summary

Original article by Rob van der Veer of Software Improvement Group (SIG), a firm the article states has direct involvement with the ISO/IEC 5338 standard itself. Retrieved article carries no clear publish date in the scraped copy; a live fetch on 2026-10-05 showed the page dated 07.11.2024 (7 November 2024; day/month order as displayed, treat as unconfirmed).

## What the standard is

ISO/IEC 5338 is the international standard covering AI system life cycle processes. It gives organisations a shared process model for specifying, building, validating, deploying, monitoring, and maintaining AI systems, so that quality, risk, and governance responsibilities are addressed consistently across a life cycle that typically spans multiple teams — data science, engineering, architecture, security, risk, and the business.

The article positions the standard as addressing a common failure mode: without a shared process framework, accountability for an AI system's data, model, deployment decisions, and monitoring becomes fragmented across teams that each see only part of the system.

## What it covers across the life cycle

The article walks through life cycle activities the standard addresses, in original wording:
- defining requirements, scope, and acceptance criteria up front;
- assessing whether available data is fit for training, testing, and operating the system;
- designing and building the system, including model components and supporting controls;
- verifying and validating that the system meets both technical requirements and its intended use;
- deploying with appropriate controls, documentation, and accountability;
- monitoring production behaviour, including drift and performance degradation; and
- managing change and maintenance, including retraining where applicable.

The article also describes "AI particularities" — attention points the standard raises against each generic life cycle process to flag what is different about AI compared with conventional software: sensitive training data (versus anonymised test data in typical software testing), a wider range of risk topics such as transparency, unwanted bias, and purpose limitation, harder-to-predict timelines in experimental phases, different required skill sets, and the need for continuous production validation to detect model staleness.

## How it relates to other standards

The article distinguishes ISO/IEC 5338 (life cycle process) from three adjacent standards: ISO/IEC 42001 (the AI management system standard, providing the governance layer around AI activity), ISO/IEC 23894 (guidance on AI risk management, which the life cycle processes draw on), and ISO/IEC 22989 (AI concepts and terminology, providing shared vocabulary). Its framing: ISO/IEC 42001 is about governing AI as an organisation, while ISO/IEC 5338 is about how teams actually execute AI system life cycle work day to day.

## Why AI life cycles need more than standard software process discipline

The article argues traditional software life cycle standards remain necessary but insufficient for AI because: system behaviour depends heavily on training/test data quality and provenance, not just code; behaviour can drift after release as real-world data shifts; validation must assess robustness against intended purpose, not just functional correctness; AI projects introduce new roles (e.g., data scientists) that life cycle processes need to account for; and deployment/change decisions should be backed by traceable evidence.

## Applying it in practice

The article's suggested approach: map where AI is currently designed, trained, deployed, and monitored; assign clear ownership across requirements, data quality, validation, release, and monitoring; identify what documentation and evidence each life cycle stage needs; add checkpoints for data readiness, testing, and deployment approval; and connect this operational work to the organisation's broader governance and risk oversight. The article notes that most real-world implementation gaps come not from unawareness of AI risk but from a gap between stated policy and day-to-day delivery — unclear ownership, inconsistent validation, weak data-to-outcome traceability, and thin post-deployment monitoring.

## What this file removes

Removed: SIG's promotional description of its own consulting/coaching services and AI Readiness Guide, a webinar promotion, site navigation, partner/consultancy links, cookie policy and legal-page boilerplate, and web-form field content that had been captured incidentally during scraping. None of this relates to the substance of ISO/IEC 5338.

## Verification note

WebFetch of the live source URL succeeded and confirmed the article title and author name (Rob van der Veer) as shown in the scraped copy. The standard-to-standard comparisons (42001, 23894, 22989) match publicly known scope descriptions of those standards and were not separately re-verified against ISO's own catalogue text in this pass.

## Latest developments (as of 2026-10-05)

- Source page re-fetched 2026-10-05: same title and author, dated 07.11.2024 on the page; it does not mention any revision of ISO/IEC 5338, nor 12207 or 15288. Its three comparison standards (42001, 23894, 22989) are unchanged.
- No revision of ISO/IEC 5338 (Edition 1, December 2023) was found in searches on 2026-10-05; ISO's catalogue page (https://www.iso.org/standard/81118.html) returned HTTP 403, so status is not confirmed first-hand. Secondary listing: https://webstore.iec.ch/publication/90754
- ISO/IEC/IEEE 12207:2026 (Edition 2) is recorded as approved 29 April 2026 by a national standards-store listing: https://bsmd.moic.gov.bh/store/standards/iso:pub:std:IS:90219/ISO-IEC-IEEE%2012207:2026?lang=en . A 2026 edition of ISO/IEC/IEEE 15288 was not found (a 24748-2:2026 guidance document on applying 15288 was; https://www.gso.org.sa/store/standards/GSO:1064901/GSO%20ISO-IEC-IEEE%2024748-2:2026?lang=en). Any effect on 5338 is unverified.
- ISO/IEC 25704 (process assessment model for the life cycle processes in 5338) is a new project at early drafting, not published: https://www.iso.org/standard/91246.html
- Related published SC 42 documents: ISO/IEC 42005:2025 (AI system impact assessment) published 2025-05-27 (https://webstore.iec.ch/en/publication/107659 ; date per search listing). ISO/IEC 5259 parts 1-5 are listed as 2024 editions (https://store.sfs.fi/en/isoiec-5259-1-2024).
- EU AI Act timing: the Council's press release of 29 June 2026 states high-risk obligations, previously due 2 August 2026, now apply from 2 December 2027 (stand-alone high-risk systems) and 2 August 2028 (high-risk systems embedded in products), under the Digital Omnibus on AI. Source: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
- Harmonised standards: CEN-CENELEC announced EN 18286:2026 (AI quality management system for AI Act purposes, aimed at Article 17) as published on 31 July 2026. Source: https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/ . A third-party tracker (https://kla.digital/blog/jtc-21-standards-tracker, state as of June 2026) listed risk management, logging and cybersecurity drafts at enquiry stage and others still in drafting, with none yet cited in the Official Journal; OTG did not independently confirm the position as of October 2026. Citation in the Official Journal is what confers a presumption of conformity, so treat all ISO/IEC standards in this repository as voluntary good practice, not a conformity route, unless and until cited.
