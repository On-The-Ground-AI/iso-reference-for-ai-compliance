---
title: "ISO 5338 AI systems standard"
source_organization: "Software Improvement Group (SIG)"
source_url: "https://www.softwareimprovementgroup.com/blog/iso-5338-get-to-know-the-global-standard-on-ai-systems/"
retrieved: 2026-08-17
content_type: "blog post"
license_note: "Summary and analysis by On The Ground (OTG). Original article © Software Improvement Group. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

# ISO/IEC 5338 AI System Life Cycle Processes: A Practitioner Summary

Original article by Rob van der Veer of Software Improvement Group (SIG), a firm the article states has direct involvement with the ISO/IEC 5338 standard itself. Retrieved article carries no clear publish date in the scraped copy; a live fetch of the source suggested a 2024 date, which readers should confirm against the live page rather than treat as certain here.

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
