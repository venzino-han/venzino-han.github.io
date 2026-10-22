---
layout: project
lang: en
project_id: medvqa
back_section: publications
title: Selective Answering for Medical VQA via Parallel Independent Claim Verification
venue: NeurIPS 2026
authors:
- Donghee Han
- Jiwon Jeong
- Mun Yong Yi
description: Making medical VLMs abstain when the image and question do not support an answer — an automatically built benchmark and an agentic verification workflow.
permalink: /publications/medvqa/
---

#### Problem

Recent studies show that vision-language models (VLMs) **answer even when the information is insufficient** — a serious risk in the medical domain.

#### Benchmark

We **automatically generate** unanswerable medical-VQA inputs by deterministic corruption — image mismatch, choice removal, and type-preserving question corruption. On this benchmark, existing methods and models show **serious vulnerabilities**.

<figure><img src="/assets/img/papers/medvqa-benchmark.jpg" alt="Constructing unanswerable medical-VQA inputs by deterministic corruption"><figcaption>Constructing unanswerable medical-VQA inputs by deterministic corruption</figcaption></figure>

#### Approach: agentic workflow

- Analyze the image and the question separately and **decompose** what the answer requires into claims.
- Verify each claim with **independent verifiers in parallel** (entity, region, choice).
- Parse the verdicts into a **Python program** and aggregate them deterministically; answer only when grounded, otherwise abstain.

<figure><img src="/assets/img/papers/medvqa-framework.jpg" alt="Decomposition → independent claim verifiers (in parallel) → deterministic aggregator → grounded answer"><figcaption>Decomposition → independent claim verifiers (in parallel) → deterministic aggregator → grounded answer</figcaption></figure>

#### Results

Improved answer reliability across a range of models, including **GPT and MedGemma**, using Python tools in the workflow.
