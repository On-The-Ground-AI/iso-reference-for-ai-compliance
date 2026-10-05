# Related standards, briefly

Last reviewed: 2026-10-05

Unlike the other files in `02_Practitioner_guides/`, this file is not a rewrite of a single
third-party explainer. It is **OTG's own original research**, compiled by searching public
sources for each standard (ISO/IEC's own standard-listing pages, national standards bodies,
and, where useful, secondary write-ups) and then writing an independent summary — not quoting
or paraphrasing any one source at length. Per-standard source lists are given in each section.

**Why these are here:** they were identified as coverage gaps when cross-referencing this pack
against the [Straits Interactive](https://www.straitsinteractive.com)-led SMU Academy course
that it accompanies. None of them are AI-specific standards. They are general-purpose
governance, compliance, security, and privacy management standards that AI governance programs
commonly reuse or plug into, alongside the AI-specific ones (ISO/IEC 42001, 5338, 23894, etc.)
that get fuller treatment elsewhere in this repo. Where a standard is only tangentially related
to AI, that's said plainly below rather than stretched into an AI-standard framing it doesn't
deserve.

No claims below about page counts or clause-level detail are made unless they could be verified
via a public search result; where verification wasn't possible, that's noted rather than guessed.

---

## ISO/IEC 38505-1 — Governance of data, Part 1 (2017 edition superseded by 2026 second edition)

**Status update (2026-10-05):** a second edition, ISO/IEC 38505-1:2026, was published on 2026-08-20 and replaces the 2017 edition, which ISO lists as withdrawn (source: https://committee.iso.org/standard/87195.html). The scope text below describes the 2017 edition; the 2026 edition keeps the same stated purpose (applying ISO/IEC 38500 to data governance), but its changes in detail are not reviewed here.

**Title:** *Information technology — Governance of IT — Governance of data — Part 1:
Application of ISO/IEC 38500 to the governance of data*

**Scope:** This standard applies the governance principles and model of ISO/IEC 38500
(governance of IT generally) specifically to data. It's aimed at the members of an
organization's governing body — owners, directors, partners, executive managers — and gives
them guiding principles for directing and evaluating how data created, collected, stored, or
controlled by IT systems is used, so that data-related decisions get proper board-level
oversight rather than being left purely to IT or data teams. Central to the standard is the
"data accountability map," a model for laying out who is accountable for which data-related
decisions.

**Relevance to AI compliance:** Directly relevant. AI systems are trained and run on data, and
a governing body that has never had to formally direct or evaluate data governance will
struggle to do the same for AI governance. The standard's "data accountability map" concept is a natural companion to AI-specific
governance standards like ISO/IEC 42001.

**Official listing:** https://www.iso.org/standard/87195.html (2026 edition; the 2017 edition page is https://www.iso.org/standard/56639.html)

**Sources drawn on:** ISO's own standard page (iso.org/standard/56639.html); ANSI's standards
store listing; Nemko's public explainer of the 38505 family.

---

## ISO/IEC TR 38505-2:2018 — Governance of data, Part 2

**Title:** *Information technology — Governance of IT — Governance of data — Part 2:
Implications of ISO/IEC 38505-1 for data management*

**Scope:** A Technical Report (guidance, not a certifiable requirements standard) that builds on
Part 1's data accountability map. It's written to support the dialogue between a governing body
and its executive/senior management team, helping identify what information the governing body
needs to direct and evaluate data-driven strategy, and what measurement capabilities can be used
to monitor how well data and its uses are actually performing against that strategy. It assumes
the reader already understands ISO/IEC 38500's governance principles and the Part 1
accountability map.

**Relevance to AI compliance:** Same rationale as Part 1, one level more operational — this is
the piece that helps translate board-level data governance intent into something management can
actually measure and report back on, which matters once "data" in that accountability map
includes the training and inference data feeding AI systems.

**Status update (2026-10-05):** ISO lists this report as confirmed in 2023 (stage 90.93), still current, with no revision shown (https://committee.iso.org/standard/70911.html). Note it was written against Part 1:2017, so check alignment with the 2026 Part 1 edition before relying on it.

**Official listing:** https://www.iso.org/standard/70911.html

**Sources drawn on:** ISO's own standard page (iso.org/standard/70911.html); Pacific Cert's
public explainer of the 38505 family and the accountability-map concept.

---

## ISO 37301:2021 — Compliance management systems

**Title:** *Compliance management systems — Requirements with guidance for use*

**Scope:** Specifies requirements and gives guidance for establishing, developing,
implementing, evaluating, maintaining, and improving a compliance management system (CMS).
It's a certifiable management-system standard, applicable to any organization regardless of
type, size, or sector, and follows ISO's common high-level structure (the same skeleton used
by ISO 9001, ISO/IEC 27001, and ISO/IEC 42001, among others). It replaced the earlier
non-certifiable guidance document ISO 19600:2014. An amendment covering climate-action wording
(ISO 37301:2021/Amd 1:2024) was published in 2024. ISO lists the standard as confirmed on
2026-08-03 after systematic review, so the 2021 edition stays current (stage 90.93;
https://committee.iso.org/standard/75080.html).

**Relevance to AI compliance:** Tangential rather than AI-specific — this is a general-purpose
compliance management system standard, not an AI standard. Its relevance to AI governance work
is structural: organizations that already run a certified CMS under ISO 37301 have an existing
policy, risk-assessment, and monitoring structure they can extend to cover AI-specific legal and
regulatory obligations (e.g. under the EU AI Act or similar), rather than building an AI
compliance function from scratch. 

**Official listing:** https://www.iso.org/standard/75080.html

**Sources drawn on:** ISO's own standard page (iso.org/standard/75080.html); the ANSI Blog's
public explainer of ISO 37301:2021.

---

## ISO/IEC 27001:2022 — Information security management systems

**Title:** *Information security, cybersecurity and privacy protection — Information security
management systems — Requirements*

**Scope:** The best-known ISO information security standard. It specifies requirements for
establishing, implementing, maintaining, and continually improving an information security
management system (ISMS), including requirements for assessing and treating information
security risk. This is the third edition (2022), replacing the 2013 edition; Annex A lists 93
security controls grouped into four themes (organizational, people, physical, technological). An
amendment, ISO/IEC 27001:2022/Amd 1:2024 ("Climate action changes"), was published in 2024. ISO shows the
standard at systematic-review stage (90.20) as of 2026-10-05, with no new edition announced there
(https://committee.iso.org/standard/27001).

**Relevance to AI compliance:** Tangential — 27001 is a general information-security standard,
not an AI-specific one. But it's highly relevant in practice: AI systems are IT systems, and
most organizations building AI governance programs already have (or are pursuing) ISO/IEC
27001 certification, so AI-specific controls (model access control, training-data security,
protecting against model theft or data poisoning) usually get bolted onto an existing 27001 ISMS
rather than run as a separate system. Several AI-specific standards, including ISO/IEC 42001,
are designed to interoperate with 27001's management-system structure.

**Official listing:** https://www.iso.org/standard/27001

**Sources drawn on:** ISO's own standard page (iso.org/standard/27001, and the OBP entry at
iso.org/obp/ui/en/#!iso:std:82875:en); the ANSI Blog's public explainer of the 2022 edition.

---

## ISO/IEC 27701:2025 — Privacy information management systems (replaces the 2019 extension)

**Status update (2026-10-05):** a revised second edition, ISO/IEC 27701:2025, was published on 14 October 2025 and ISO lists the 2019 edition as withdrawn (https://committee.iso.org/standard/27701). It is now a **standalone** privacy information management system (PIMS) standard rather than an extension of ISO/IEC 27001 and 27002, with the new title *Information security, cybersecurity and privacy protection — Privacy information management systems — Requirements and guidance*. Secondary sources report a transition period for 2019-certified organisations ending 31 October 2028 (https://www.cottgroup.com/en/blog/kvkk-gdpr/item/transition-to-the-iso-iec-27701-2025-revision-deadline-and-key-changes); this was not confirmed from an accreditation-body document (the UKAS transition form could not be fetched), so check with your certification body.

**Scope:** It specifies requirements, with implementation guidance, for establishing, implementing, maintaining, and continually improving a PIMS. It is written for PII controllers and PII processors of any size or sector, and supports (without directly certifying) compliance with privacy law such as the GDPR. The 2019 edition, by contrast, was explicitly an add-on that required an existing ISO/IEC 27001 ISMS.

**Relevance to AI compliance:** Tangential rather than AI-specific. Most AI systems process personal data somewhere in training or inference, so a PIMS gives a structured way to manage AI-related privacy obligations (consent tracking, data subject rights, cross-border transfer controls) without a parallel privacy program. The standalone status means an organisation can now pursue it without holding 27001 first; whether a particular certification body still expects one is unverified.

**Official listing:** https://www.iso.org/standard/71670.html is the withdrawn 2019 edition; the 2025 edition is listed at https://committee.iso.org/standard/27701

**Sources drawn on:** ISO's committee page for the 2025 edition; Kiwa's public announcement (https://www.kiwa.com/en/nl/about-kiwa/news/isoiec-277012025-published-updated-privacy-standard-offers-organizations-more-guidance); Cott Group's transition explainer; AFNOR's catalogue listing (64 pages).

---

## ISO/IEC 29100 — Privacy framework

**Title:** *Information technology — Security techniques — Privacy framework* (first edition
2011, amended 2018; **a second edition, ISO/IEC 29100:2024, has since been published and
incorporates the 2018 amendment** — treat 2024 as the current edition; ISO lists the 2011 edition and 2018 amendment as withdrawn, with the 2024 edition published February 2024, 22 pages — https://committee.iso.org/standard/85938.html)

**Scope:** A foundational, terminology-and-principles-level standard rather than a
certifiable management-system standard. It establishes common privacy terminology, defines the
actors and their roles in processing personally identifiable information (PII), describes
privacy safeguarding considerations, and sets out eleven privacy principles (e.g. consent and
choice, purpose legitimacy and specification, collection limitation, data minimization,
accuracy and quality, openness and transparency, accountability, information security). It's
applicable to anyone involved in specifying, designing, developing, or operating IT systems or
services where privacy controls over PII are needed.

**Relevance to AI compliance:** Tangential — a general privacy-principles standard, not
AI-specific, and it predates the current wave of AI regulation by over a decade. Its relevance
is that it supplies the common privacy vocabulary and principle set that AI-specific privacy
discussions (training-data provenance, inference-time data minimization, purpose limitation for
model outputs) tend to borrow rather than reinvent — it's frequently cited as the reference
point when an AI standard or guide needs to say "privacy principles" without restating them.

**Official listing:** https://www.iso.org/obp/ui/#iso:std:iso-iec:29100:ed-2:v1:en

**Sources drawn on:** ISO's own Online Browsing Platform entry for the second edition; the
ISO standard page for the 2018 amendment (iso.org/standard/73722.html), which confirms the
amendment's content was folded into the 2024 second edition; the National Law Review's public
explainer of the framework's principles.

---

## ISO/IEC TR 24030 — a further public-source check on the use case template

`24030_5469_SFI-NorwAI_regulatory-review.md` in this same folder already covers ISO/IEC TR
24030's purpose (a curated collection of AI application use cases across domains, intended to
show where AI standardization work applies in practice and to surface new technical
requirements). This section adds one further, separately-verified fact found via public search,
and is explicit about what could **not** be verified.

**What's now confirmed, and citable:** ISO/IEC TR 24030 structures each submitted use case using
the **IEC 62559-2** "use case methodology" — a standard that defines a template for use cases,
plus companion template lists for actors and requirements, originally developed for smart-grid
work but written for general application across domains. TR 24030 was reissued as a second
edition in 2021 and a further edition in 2024 (a third edition is in development, see below), each edition adding more submitted use cases (132 in the edition examined via
public search results).

**What was checked and could not be verified as public:** IEC 62559-2 — the standard that
actually defines the use-case template's fields — is itself a paywalled IEC standard (see
webstore.iec.ch/publication/22349), not a freely downloadable public template. The AI use case
submissions themselves (the "electronic attachment" containing the individual use case write-ups)
are hosted on ISO's document portal at `standards.iso.org/iso-iec/tr/24030/ed-1/en/` behind the
standard ISO Customer Licence Agreement — this is a controlled distribution point for a purchased
standard's supplementary material, **not** an open public repository, despite living on an ISO
subdomain. No separate, freely public "AI Use Case Submission Template" document — with its own
field list, independent of IEC 62559-2 — could be located via public search. Readers should not
assume one exists beyond what a purchased copy of TR 24030 (and, to see the template fields
themselves, IEC 62559-2) would show.

**Sources drawn on:** ISO's own standard pages for the 2021 and 2024 editions
(iso.org/standard/77610.html, iso.org/standard/84144.html); the IEC's own listing for
IEC 62559-2 (webstore.iec.ch/publication/22349); ISO's document-attachment portal page for TR
24030 edition 1, fetched directly to confirm it is a licensed-download portal rather than an
open repository; JTC 1's own public SC 42 committee materials describing the use-case
collection process.

**Update (2026-10-05):** ISO now lists an Edition 3 as ISO/IEC CD TR 24030 (project approved 2025-04-15; committee-draft consultation registered 2026-07-30/31, stage 30.20), which will replace the 2024 edition once published. Earlier search snippets showing a 2026-01-31 target date are superseded; no publication date is confirmed. Source: https://committee.iso.org/standard/91832.html. The 2024 edition remains the current published one.

---

## Latest developments (as of 2026-10-05)

- **ISO/IEC 38505-1:2026** published 2026-08-20, replacing the 2017 edition (withdrawn); 20 pages. https://committee.iso.org/standard/87195.html
- **ISO/IEC TR 38505-2:2018** confirmed in 2023, still current, no revision shown. https://committee.iso.org/standard/70911.html
- **ISO 37301:2021** confirmed 2026-08-03 after systematic review; Amd 1:2024 (climate action) is its only amendment. https://committee.iso.org/standard/75080.html
- **ISO/IEC 27001:2022** current, with Amd 1:2024 (climate action); under systematic review (stage 90.20). https://committee.iso.org/standard/27001
- **ISO/IEC 27701:2025** published 2025-10-14, standalone, withdrawing the 2019 edition. https://committee.iso.org/standard/27701
- **ISO/IEC 29100:2024** is current (published Feb 2024); 2011 edition and 2018 amendment withdrawn. https://committee.iso.org/standard/85938.html
- **ISO/IEC TR 24030** Edition 3 at committee-draft stage since July 2026; 2024 edition still current. https://committee.iso.org/standard/91832.html

Unverified: clause-level differences between the 2017 and 2026 editions of 38505-1 and between the 2019 and 2025 editions of 27701 (standards are paywalled and were not read); accreditation-body transition rules for 27701.
