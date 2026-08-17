---
title: "Embracing Security in AI: Unpacking the New ISO/IEC 5338 Standard"
source_organization: "Pillar Security"
source_url: "https://www.pillar.security/blog/embracing-security-in-ai-unpacking-the-new-iso-iec-5338-standard"
retrieved: 2026-08-17
content_type: "blog post"
license_note: "Summary and analysis by On The Ground (OTG). Original article © Pillar Security. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

# ISO/IEC 5338 Through a Security Lens: A Practitioner Summary

Original article by Dor Sarig, published by Pillar Security on 10 January 2024, shortly after ISO/IEC 5338 was released. This summary rewords the article's content and flags where its framing goes beyond what the standard itself claims.

## A framing note before the substance

ISO/IEC 5338, "Information technology — Artificial intelligence — AI system life cycle processes," is a general-purpose life cycle standard: it extends the software/systems life cycle standards ISO/IEC/IEEE 12207 and 15288 to address AI-specific concerns across the full life cycle (requirements, design, data, verification, deployment, operation, retirement). It is not primarily a security standard. The source article frames ISO/IEC 5338 as a "security-first" standard, which is an editorial angle the article takes rather than the stated purpose of the standard itself. Security and risk are among the topics ISO/IEC 5338 touches on, but they sit alongside quality, data governance, and organisational process concerns rather than being the standard's central subject. This summary preserves the article's general points but avoids restating "security-first" as if it were an established fact about the standard.

## Points the article makes

With that caveat, the source article's substantive points — reworded — are:

- **Security/risk consideration from early stages.** The article argues AI system design should account for AI-specific vulnerabilities from the outset rather than retrofitting protections later. This is a reasonable general principle consistent with "secure by design" thinking, though it is presented as the article's interpretation rather than a direct quotation from the standard.
- **Risk as an ongoing activity.** Because AI system behaviour can change after deployment (e.g., through retraining or drift), the article argues risk identification and mitigation needs to be continuous rather than a one-time gate — consistent with how life cycle standards generally treat risk management as a thread running through every stage rather than a single milestone.
- **Data governance.** The article highlights documentation of data quality, lineage, and provenance as central to trustworthy AI systems, tying this to both security and privacy-compliance goals.
- **Ongoing validation in production.** The article describes testing an AI system against updated data over time to catch performance degradation, data drift, or concept drift — a legitimate and widely-discussed AI operations concern, though the specific phrase "continuous validation" used in the article is the author's terminology rather than a term this summary can confirm is defined identically in the standard's text.
- **Human oversight.** The article argues AI decisions with security implications should remain reviewable by humans rather than being fully autonomous, framing this as a transparency and accountability matter.

## What this file removes

The original article's calls to contact Pillar Security's team, its newsletter subscription prompt, "related articles" teasers, and full site navigation/footer content have been removed as they are promotional material unrelated to the standard. No statistics or named case studies appeared in the source that required fact-checking beyond the framing issue noted above.

## Verification note

WebFetch of the live source URL succeeded and confirmed the article's title, author (Dor Sarig), and publish date (10 January 2024) as shown in the scraped copy. The characterization of ISO/IEC 5338 as a security standard could not be verified against the ISO standard's own front matter (paywalled) and is treated here as the source's interpretive framing, not a verified fact.
