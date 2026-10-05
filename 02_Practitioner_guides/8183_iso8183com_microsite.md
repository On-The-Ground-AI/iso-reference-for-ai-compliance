---
title: "ISO/IEC 8183 — AI Data Life Cycle Framework, Explained"
source_organization: "AI Caramba! Limited (iso8183.com)"
source_url: "https://iso8183.com/"
retrieved: 2026-10-05
last_reviewed: 2026-10-05
content_type: "microsite"
license_note: "Summary and analysis by On The Ground (OTG). Original article © AI Caramba! Limited. This is an original summary, not a reproduction of the source text — see source_url for the complete original."
---

# ISO/IEC 8183, as documented by iso8183.com

iso8183.com is a single-topic reference site dedicated to ISO/IEC 8183:2023 ("Information technology — Artificial intelligence — Data life cycle framework"). The site states it is maintained with the involvement of one of the standard's four drafting editors, which is worth bearing in mind when weighing its claims — it is well-informed but not an official ISO/IEC publication, and it is commercially affiliated with a consultancy (AI Caramba!) that advises on the standard.

## What the standard covers

Published 26 July 2023 by ISO/IEC JTC 1/SC 42 (the joint technical committee responsible for AI standardisation), the standard is a short, ten-page document. It maps the life of data inside an AI system onto ten stages and states what activity belongs in each — from originating the idea for a system through to retiring both the data and the system itself. The site emphasises that the standard is technology-neutral: it names no vendors or products and does not vary by company size or sector.

## The ten stages and the "data-processing boundary"

The site describes the same ten stages as the standard: idea conception, business requirements, data planning, data acquisition, data preparation, building a model, system deployment, system operation, data decommissioning, and system decommissioning. It adds a structural detail not always mentioned elsewhere: the standard treats stages 3 through 9 as sitting inside a "data-processing boundary," while stages 1, 2, and 10 (conception, requirements, and system decommissioning) sit outside it. The site also notes that data decommissioning and system decommissioning are kept as two separate stages deliberately, since retiring the data and retiring the system are different obligations with different compliance implications.

## Adoption history

The site lays out a documented adoption timeline:

- **26 July 2023** — published as a first-edition International Standard by ISO and IEC.
- **31 October 2023** — adopted in the UK by BSI as BS ISO/IEC 8183:2023.
- **10 June 2024** — taken over by CEN as EN ISO/IEC 8183:2024, under CEN-CENELEC/JTC 21 (the same committee drafting harmonised standards for the EU AI Act), reportedly without any change to the text.
- **By December 2024** — under CEN-CENELEC's internal rules, national standards bodies in 34 European countries were obliged to adopt it as a national standard and withdraw any conflicting national standard.
- **2024** — adopted in Canada as a National Standard through the CSA Group.

The site is careful to distinguish this adoption pattern from formal legal force: being taken up as a European Standard is not the same as being a "harmonised standard" cited in the EU's Official Journal, and only the latter confers a presumption of legal conformity under the AI Act. The site describes 8183's significance as architectural — it supplies the shared vocabulary and stage sequence that other, more directly enforceable standards build on — rather than being a compliance requirement in its own right.

## Relationship to other AI standards

According to the site, several other standards explicitly build on 8183's life-cycle model:

- **ISO/IEC 5259 (data quality for analytics and ML)** — a six-part series whose own data life-cycle model is described as derived from 8183.
- **ISO/IEC 42001 (AI management systems)** — the certifiable management-system standard; its data-related controls presuppose a life cycle with defined stages and owners, which is what 8183 provides.
- **ISO/IEC 23894 (AI risk management)** — attaches risk considerations (e.g., data quality, provenance, poisoning, drift) to specific points in the life cycle that 8183 defines.
- **ISO/IEC 42005 (AI system impact assessment)** — uses the life cycle to establish when in a system's life an impact assessment applies.

## Authorship

The site names the standard's editor and three sub-editors: Colin Crone (editor and project leader, described as a cyber-security specialist), Julian Padget (a Reader in Artificial Intelligence at the University of Bath), Jeremy Swinfen-Green (specialising in the business impact of digital technology), and Matthew Blakemore (covering AI and business strategy, and separately identified as the site's affiliated consultant). Standards experts of this kind are typically nominated by their national standards bodies and participate in a personal, expert capacity rather than as representatives of their employers.

## Notable FAQ points

The site's FAQ section makes several points worth preserving:

- ISO/IEC 8183 is **not certifiable** — it is a descriptive framework with no auditable requirements or conformity-assessment scheme, unlike ISO/IEC 42001. Any offer to "certify" an organization against 8183 specifically should be treated with suspicion.
- Adoption of the standard is **voluntary for companies**; the obligation described above (34 countries adopting it nationally by December 2024) falls on national standards bodies, not on individual organizations.
- The standard's relationship to the EU AI Act is **indirect and architectural**: 8183 is not itself a harmonised standard cited in the Official Journal, so adopting it does not by itself confer presumption of conformity with the Act.
- The standard can be purchased from ISO, IEC, or national standards bodies (e.g., BSI in the UK); the site does not reproduce its normative text, consistent with ISO/IEC copyright.

## What was left out of this summary

This summary omits the site's promotional material: biographical marketing for its affiliated consultancy (AI Caramba!) and its named consultant, a plug for a forthcoming book, and calls to action to purchase advisory services. Those are commercial offers unrelated to the factual content of the standard itself.

## Latest developments (as of 2026-10-05)

- Source site re-fetched 2026-10-05: it now states "last reviewed July 2026". The adoption timeline is unchanged (published 26 July 2023; BS ISO/IEC 8183:2023 on 31 October 2023; EN ISO/IEC 8183:2024 approved by CEN 10 June 2024, with 34 countries obliged to adopt by December 2024; CSA ISO/IEC 8183:2024 in Canada by December 2024; all without modification). It reports no revision of the standard, only a corrigendum dated 30 June 2024 that triggered a renumbering. These are the site's own claims; OTG did not confirm them against BSI, CEN or CSA catalogues, and the ISO page for 8183 returned HTTP 403. The site is affiliated with a consultancy, so treat as secondary.
- Relationships, status of siblings: ISO/IEC 5259 parts 1-5 are listed as 2024 editions (https://store.sfs.fi/en/isoiec-5259-1-2024); ISO/IEC 42005:2025 was published 2025-05-27 (https://webstore.iec.ch/en/publication/107659); ISO/IEC 5338 life cycle processes remains Edition 1 (December 2023) as far as OTG could find (https://webstore.iec.ch/publication/90754); ISO/IEC/IEEE 12207:2026 is recorded as approved 29 April 2026 (https://bsmd.moic.gov.bh/store/standards/iso:pub:std:IS:90219/ISO-IEC-IEEE%2012207:2026?lang=en).
- Not verified: any other national adoptions beyond those listed.
- EU AI Act timing: the Council's press release of 29 June 2026 states high-risk obligations, previously due 2 August 2026, now apply from 2 December 2027 (stand-alone high-risk systems) and 2 August 2028 (high-risk systems embedded in products), under the Digital Omnibus on AI. Source: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
- Harmonised standards: CEN-CENELEC announced EN 18286:2026 (AI quality management system for AI Act purposes, aimed at Article 17) as published on 31 July 2026. Source: https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/ . A third-party tracker (https://kla.digital/blog/jtc-21-standards-tracker, state as of June 2026) listed risk management, logging and cybersecurity drafts at enquiry stage and others still in drafting, with none yet cited in the Official Journal; OTG did not independently confirm the position as of October 2026. Citation in the Official Journal is what confers a presumption of conformity, so treat all ISO/IEC standards in this repository as voluntary good practice, not a conformity route, unless and until cited.
- Consistent with the site's FAQ: EN ISO/IEC 8183 appears in no tracker list of harmonised standards cited in the Official Journal, so adopting it gives no presumption of conformity.
