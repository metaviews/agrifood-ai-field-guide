---
id: osi-maffulli-binary-threshold-open-source-ai
type: verbatim-quote
speaker: Stefano Maffulli
speaker-role: Executive Director
organization: Open Source Initiative (OSI)
region: Global
date: 2025-09-10
source-url: 'https://opensource.org/blog/report-from-oss-eu-2025-and-ai_dev-whats-next-for-osaid'
source-publication: "OSI blog \"Report from OSS EU 2025 and AI_dev: What's next for OSAID\" (Sept 10, 2025)"
units-referenced-in: mozilla-state-of-open-source-ai-2026,open-source-in-agrifood-framework
tags: theme=policy-framework,region=Global,language=English,intended-use-in-talk=primary-quote
context-summary: 'OSI ED''s binary-threshold framing of open-source AI: weights+build-code+dataset-code+training-data-or-data-information. The definitional substrate for any talk about open-source AI vs open-weights AI in agrifood.'
freshness: current
---

## Quote / Position

> "While some people describe openness as a 'spectrum,' OSI sees Open Source as a binary gate threshold. Just as Linux and BSD represent different licensing models but both qualify as Open Source, AI must meet a minimum set of criteria to be considered genuinely Open Source. Many models claiming to be 'Open Source' actually impose usage limitations based on user numbers, commercial applications, or other criteria."

## Context

Maffulli's framing is the load-bearing definitional substrate for distinguishing open-weights from open-source AI. Three structurally important moves:

1. **Binary threshold vs spectrum.** OSI rejects the "more or less open" framing; open-source AI is either meets-OSAID or doesn't. Same binary-threshold logic the OSI applies to free software.
2. **The four-element test.** OSAID 1.0 requires: (i) model weights and parameters; (ii) code used to build and train the system; (iii) code for dataset creation; (iv) complete training data or detailed information enabling reproduction. By this test, Llama 3, Qwen, Mistral fine-tunes, and most "open" frontier models are **not** open-source — they are open-weights.
3. **The policy-definitional coupling.** OSAID's primary use case is policy: the EU AI Act's exemptions, India's national AI strategy, Canada's procurement language all hinge on which definition a jurisdiction recognises. Mozilla's "5 freedoms" framing builds on top of OSAID; OSAID's "4 freedoms + data information" framing builds on top of the four-freedoms tradition.

This entry is the OSI-side complement to Mozilla's Mozilla-krikorian-open-source-turning-point.md and the FAO-side fao-vincent-martin-open-source-innovation.md — together they triangulate the three institutional voices (Mozilla industry / OSI definitional / FAO multilateral) for any open-source AI in agrifood talk.

## Application to agrifood

The agrifood translation: most open-source agrifood AI projects (FarmVibes.AI, FarmOS, GAIA, AgML, CGIAR tools) release code; only a subset release model weights + build code + dataset code + data-or-data-information together. The four-element test is rarely published against any agrifood deployment. Gap G-357 in the substrate scan tracks this as an outstanding OSAID-conformance scoring pass.

## Source

Stefano Maffulli, Open Source Initiative Executive Director. *Report from OSS EU 2025 and AI_dev: What's next for OSAID*. September 10, 2025. https://opensource.org/blog/report-from-oss-eu-2025-and-ai_dev-whats-next-for-osaid
