---
title: "Embracing Security in AI: Unpacking the New ISO/IEC 5338 Standard"
source_organization: "Pillar Security"
source_url: "https://www.pillar.security/blog/embracing-security-in-ai-unpacking-the-new-iso-iec-5338-standard"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
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

## Latest developments (as of 2026-10-05)

- Source page re-fetched 2026-10-05: title, author (Dor Sarig) and publish date (10 January 2024) unchanged; no revision note seen. The article remains a 2024 piece about the standard as first published.
- ISO/IEC 5338 itself: it is described as Edition 1 (December 2023), built on ISO/IEC/IEEE 15288 and 12207. No revision of 5338 was found in searches on 2026-10-05; the ISO catalogue page (https://www.iso.org/standard/81118.html) returned HTTP 403 to OTG's fetch tool, so current status was not confirmed first-hand. Secondary listing: https://webstore.iec.ch/publication/90754
- Software life cycle base standard updated: a national standards-store listing records ISO/IEC/IEEE 12207:2026 (Edition 2) as approved 29 April 2026. Source: https://bsmd.moic.gov.bh/store/standards/iso:pub:std:IS:90219/ISO-IEC-IEEE%2012207:2026?lang=en . Whether and when 5338 will be realigned to it was not found (unverified).
- Process assessment: ISO/IEC 25704 (process assessment model for AI life cycle processes defined in 5338) is listed as a new project at early drafting stage, not published. Source: https://www.iso.org/standard/91246.html (as shown in search results; page not directly fetchable).
- EU AI Act timing: the Council's press release of 29 June 2026 states high-risk obligations, previously due 2 August 2026, now apply from 2 December 2027 (stand-alone high-risk systems) and 2 August 2028 (high-risk systems embedded in products), under the Digital Omnibus on AI. Source: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
- Harmonised standards: CEN-CENELEC announced EN 18286:2026 (AI quality management system for AI Act purposes, aimed at Article 17) as published on 31 July 2026. Source: https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/ . A third-party tracker (https://kla.digital/blog/jtc-21-standards-tracker, state as of June 2026) listed risk management, logging and cybersecurity drafts at enquiry stage and others still in drafting, with none yet cited in the Official Journal; OTG did not independently confirm the position as of October 2026. Citation in the Official Journal is what confers a presumption of conformity, so treat all ISO/IEC standards in this repository as voluntary good practice, not a conformity route, unless and until cited.
- Security-specific EU work sits in the separate draft cybersecurity standard prEN 18282 (enquiry stage per the June 2026 tracker above), not in ISO/IEC 5338.
