---
layout: project
lang: en
project_id: r2end
back_section: publications
title: 'Distilling LLM Reasoning into Dense Encoders: Bridging the Accuracy-Efficiency Gap in Recommendation'
venue: ACL 2026 Findings
authors:
- Donghee Han
- Daeyoung Roh
- A Young Kim
- Hwanjun Song
- Mun Yong Yi
description: Distilling LLM-generated reasoning into a retrieval encoder — keeping LLM-level accuracy and diversity at encoder-level latency.
permalink: /publications/r2end/
links:
  doi: 10.18653/v1/2026.findings-acl.1130
---

#### Problem

- Existing LLM-based distillation methods use a recommendation model or a small LM as the student.
- These approaches hit clear limits in **inference cost** or in how much **semantic information** they can use.

<figure class="fig-half"><img src="/assets/img/papers/r2end-tradeoff.jpg" alt="Accuracy vs. latency: LLM-to-SLM is accurate but slow and costly; LLM-to-CRM is fast but lacks reasoning; R2END is accurate and fast"><figcaption>Accuracy vs. latency: LLM-to-SLM is accurate but slow and costly; LLM-to-CRM is fast but lacks reasoning; R2END is accurate and fast</figcaption></figure>

#### Approach

Generate reasoning text with an LLM and **distill it into a retrieval encoder**: oracle-guided reasoning generation, reasoning distillation into the encoder, item representation construction, and projection-layer training. At inference, only the fine-tuned encoder is used for similarity-based recommendation.

<figure><img src="/assets/img/papers/r2end-framework.jpg" alt="Training and inference phases of the reasoning-distillation framework"><figcaption>Training and inference phases of the reasoning-distillation framework</figcaption></figure>

#### Results

High accuracy and diversity — the strengths of LLM-based recommendation — together with **fast inference** and lower latency.
