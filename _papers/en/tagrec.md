---
layout: project
lang: en
project_id: tagrec
back_section: publications
title: 'TAG-Rec: Grounding LLM-based Recommendation via Trigger-Anchored GRPO'
venue: CIKM 2026
authors:
- Donghee Han
- Jiwon Jeong
- Hwanjun Song
- Mun Yong Yi
description: Solving reward sparsity in RL for LLM-based recommendation by anchoring generation and reward on trigger items.
permalink: /publications/tagrec/
---

#### Problem

- Existing RL-based methods use **only recommendation accuracy** as the reward.
- When retrieving from a huge item pool, the reward becomes **sparse**, and learning stalls.

<figure><img src="/assets/img/papers/tagrec-framework.jpg" alt="TAG-Rec: trigger-grounded data curation, trigger-first generation, trigger-aware reward, and projection-layer training"><figcaption>TAG-Rec: trigger-grounded data curation, trigger-first generation, trigger-aware reward, and projection-layer training</figcaption></figure>

#### Approach

- **Trigger-grounded data curation** — from the training data, identify the item in the user's history most related to the purchase (the trigger) and keep training samples whose trigger is reachable.
- **Trigger-aware reward** — give an **additional reward** when the generated output is grounded on the trigger item.
- **Trigger-first generation** — before generating the query, extract the related item from the user's history and describe its attributes first.

<figure class="fig-half"><img src="/assets/img/papers/tagrec-reward.jpg" alt="Reward during training: TAG-Rec vs. Rec-R1"><figcaption>Reward during training: TAG-Rec vs. Rec-R1</figcaption></figure>

#### Results

Resolves reward sparsity, improves recommendation performance, and **outperforms commercial LLMs**.
