# Model Cards — an AI transparency documentation template

Last reviewed: 2026-10-05

This file is OTG's original research on "Model Cards," written after confirming via public
search that the concept traces to a real, citable academic paper and that genuinely free, public
templates implementing it still exist and are actively maintained. It is not a rewrite of any
one source; it draws on the sources listed at the end.

## Origin

Model Cards were introduced in the paper **"Model Cards for Model Reporting"** by Margaret
Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, Ben Hutchinson, Elena
Spitzer, Inioluwa Deborah Raji, and Timnit Gebru (Google), presented at FAT* '19 (the ACM
Conference on Fairness, Accountability, and Transparency) in January 2019. The paper is
freely available on arXiv (ID 1810.03993) and via Google Research's own publication page — it
is not paywalled.

The paper's proposal: a model card is a short document, shipped alongside a trained ML model,
that reports how the model performs across different conditions — including across
demographic, cultural, or phenotypic groups where relevant — rather than reporting only a single
headline accuracy figure. The original paper specifies nine sections: model details, intended
use, factors, metrics, evaluation data, training data, quantitative analyses, ethical
considerations, and caveats and recommendations. The stated goal was to make trained models more
transparent to the range of people who might build on, deploy, or be affected by them, as a step
toward more responsible and accountable machine learning practice.

## Current public status — genuinely free, actively maintained templates exist

Two lineages of freely usable Model Card templates could be confirmed via public search:

- **Google's own tooling.** Google released the open-source **Model Card Toolkit** (announced
  July 2020 on the Google AI / Research blog), which provides a JSON/proto schema for model
  card fields plus pre-built Jinja templates (HTML and Markdown) that can be freely used or
  modified. It's documented as part of TensorFlow's public "Responsible AI Toolkit"
  documentation site.
- **Hugging Face's model card format.** Hugging Face maintains a public model card template —
  a Markdown file with a YAML metadata header — used across the Hugging Face Hub for
  documenting published models. Hugging Face publishes an annotated version of the template
  explaining what to put in each section, a "Model Card Guidebook," and the raw template file
  itself in the open-source `huggingface_hub` library on GitHub. Any of these can be copied and
  reused without cost or license restriction beyond the library's own open-source license.

Both lineages descend from the same nine-section structure in the original Mitchell et al.
paper, adapted to their respective platforms' needs (Hugging Face's version is oriented around a
single published model page; Google's toolkit is oriented around a pipeline that generates the
card programmatically).

## Relationship to ISO/IEC standards — described generically, not overclaimed

Public search did not turn up a specific ISO/IEC standard that names "model cards" by that term
in its normative text. What could be verified:

- **ISO/IEC 12792:2025**, *Transparency taxonomy of AI systems*, specifies a taxonomy of
  information elements meant to help AI stakeholders identify and address AI transparency needs
  — including documenting an AI system's internal functioning and its datasets. This covers the
  same underlying documentation practice a model card implements (structured, standardized
  disclosure of what a model does, what data it was trained on, and its known limits), but it
  should be described as a related, generic transparency-documentation practice, not as a
  standard that specifically mandates the "model card" artifact by name.
- **ISO/IEC 42001** (AI management system) requires "documented information" under its Clause
  7.5 as part of running an AI management system. Several third-party ISO/IEC 42001
  implementation guides and auditor commentary (not the standard's own text, as far as could be
  verified) describe model cards as one practical way organizations satisfy that documented
  information requirement for a given AI system, and note that certification auditors commonly
  ask to see model cards or equivalent system documentation. This is a secondary,
  practitioner-community claim about how the standard is applied — not a verified requirement
  written into ISO/IEC 42001 itself — and is presented here with that caveat rather than as
  settled fact.

In short: model cards are a widely adopted, freely available AI documentation practice that maps
naturally onto the "system documentation" and "transparency" concerns that several AI governance
standards raise in more general terms — but readers should not assume any specific ISO/IEC
standard requires the exact Mitchell et al. template or uses the term "model card."

## Sources

- Mitchell, M. et al., "Model Cards for Model Reporting," arXiv:1810.03993 (also FAT* '19) —
  https://arxiv.org/abs/1810.03993
- Google Research publication page for the same paper —
  https://research.google/pubs/model-cards-for-model-reporting/
- Google AI Blog, "Introducing the Model Card Toolkit for Easier Model Transparency Reporting"
  (July 2020) — https://ai.googleblog.com/2020/07/introducing-model-card-toolkit-for.html
- TensorFlow Responsible AI Toolkit, Model Card Toolkit guide and templates —
  https://www.tensorflow.org/responsible_ai/model_card_toolkit/guide and
  https://www.tensorflow.org/responsible_ai/model_card_toolkit/guide/templates
- Hugging Face Hub documentation, "Model Cards" and "Model Card Guidebook" —
  https://huggingface.co/docs/hub/model-cards and
  https://huggingface.co/docs/hub/model-card-guidebook
- Hugging Face `huggingface_hub` GitHub repository, model card template file —
  https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md
- ISO's own standard page for ISO/IEC 12792:2025 — https://www.iso.org/standard/84111.html
- AI Standards Hub's public explainer of ISO/IEC 12792 — https://aistandardshub.org/transparency-taxonomy-standard

## Latest developments (as of 2026-10-05)

Template and tooling status
- Hugging Face Hub's Model Cards documentation is live and now includes a simpler, newer metadata format for evaluation results (alongside the older model-index format), a `buckets` metadata field linking storage buckets, and a note that models created after August 2024 must set `library_name` explicitly rather than rely on auto-detection. The page still points to Mitchell et al. for the contents a card should describe and to the annotated template. https://huggingface.co/docs/hub/model-cards
- The Hugging Face Model Card Guidebook (2022, Ozoani, Gerchick, Mitchell) remains available and still links the template in `huggingface_hub`, an annotated template, and a card-creator tool. https://huggingface.co/docs/hub/model-card-guidebook
- Google's Model Card Toolkit: the TensorFlow guide is still online with no deprecation notice, but it shows a last-updated stamp of 3 October 2023 and no newer toolkit release or announcement was found (unverified whether it is actively developed). https://www.tensorflow.org/responsible_ai/model_card_toolkit/guide

Standards and regulation touching AI documentation
- ISO/IEC 12792:2025 (transparency taxonomy of AI systems) is Edition 1, published November 2025, 45 pages, so the "2025" reference above is confirmed. https://committee.iso.org/standard/84111.html
- ISO/IEC 42005:2025 (AI system impact assessment, May 2025) includes guidance on documenting impact assessments, a neighbouring practice to model cards. https://committee.iso.org/standard/42005
- ISO/IEC 42006:2025 (7 July 2025) sets requirements for bodies auditing and certifying ISO/IEC 42001 management systems; it does not by itself make model cards mandatory (not stated in the page summary checked). https://committee.iso.org/standard/42006?browse=ics
- EU AI Act: the Commission's GPAI Code of Practice, published 10 July 2025, includes a Transparency chapter with a Model Documentation Form (a DOCX) that providers can use to record information for the Act's transparency requirements. It is a regulatory documentation form, not a model card, though the content overlaps. https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- The Digital Omnibus provisional agreement of 7 May 2026 sets 2 December 2026 for a shortened grace period on marking AI-generated content and 2 December 2027 / 2 August 2028 for high-risk obligations (as reported by the Council in a search summary; the Commission page confirms the 2027 and 2028 dates). https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/ and https://digital-strategy.ec.europa.eu/en/news/eu-agrees-simplify-ai-rules-boost-innovation-and-ban-nudification-apps-protect-citizens
- No ISO/IEC or CEN-CENELEC standard that names "model cards" in its text was found this review (unverified absence).
- Also noted: the AI Standards Hub explainer for ISO/IEC 12792 listed under Sources was not re-fetched in this review.
