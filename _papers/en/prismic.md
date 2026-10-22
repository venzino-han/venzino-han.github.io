---
layout: project
lang: en
project_id: prismic
back_section: publications
title: 'PRISMIC: Reconstructing User Preference via Intent Decomposition and Consolidation'
venue: NeurIPS 2026
authors:
- Donghee Han
- Jiwon Jeong
- Hwanjun Song
- Mun Yong Yi
description: Decompose a user's mixed interests into item-level intents and consolidate them into a precise preference signal — LLM in training only, LLM-free inference.
permalink: /publications/prismic/
---

#### Problem

- A user's history mixes several intents — recent, long-term, exploratory, and stale signals.
- Asked to summarize it, an LLM tends to use *all* of the information and produces an **over-generalized query**, which fails in the retrieval space.
- Prior work applies reinforcement learning (RL) directly to the LLM for the recommendation task, but RL training is unstable and the LLM makes inference expensive.

<figure><img src="/assets/img/papers/prismic-overview.jpg" alt="PRISMIC framework: problem (top) and decomposition → RL-based consolidation → encoder distillation (bottom)"><figcaption>PRISMIC framework: problem (top) and decomposition → RL-based consolidation → encoder distillation (bottom)</figcaption></figure>

#### Approach

1. **Decomposition** — break the user's interests down to the item level and generate multiple candidate queries (intent hypotheses).
2. **Integration** — use RL to select and consolidate the top queries into user-preference data (offline).
3. **Encoder distillation** — train an efficient encoder on the consolidated queries as semantic targets.

The LLM is used **only for training**; inference runs on the encoder, so the efficiency of an encoder-based recommender is preserved.

#### Results

- **33–93% improvement** over existing LLM baselines, depending on the dataset.
- Better recommendation **diversity** while keeping encoder-level inference efficiency.
