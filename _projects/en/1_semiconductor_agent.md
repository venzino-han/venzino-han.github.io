---
layout: project
lang: en
project_id: 1_semiconductor_agent
title: Reliable On-Device AI Agents for Semiconductor Inspection Equipment
description: Joint R&D with DeepSeers · project lead · tool-calling reliability of on-device small language models
importance: 1
permalink: /projects/1_semiconductor_agent/
---

**Role:** Project lead — from problem definition and research direction to the Mock-API sandbox, benchmark and data-generation pipeline, harness development, rollout experiments, and failure analysis.

#### Challenge

Real inspection equipment cannot rely on network access or large external models: the agent has to run **on-device** with limited compute.
Rather than switching to a bigger model, the key question was how to compensate for the limits of a **small language model (SLM)** so that it calls the equipment's tools reliably.

#### Approach

- Built a **Mock-API sandbox** that mimics the real equipment interfaces, enabling large-scale tool-calling experiments and failure analysis without repeatedly using the real equipment.
- Created a **benchmark** by expanding human-defined core task scenarios (seeds) into diverse situations with an LLM.
- Training on more LLM-generated data alone did not improve performance enough. **Failure analysis** showed that the bottleneck was **planning** — deciding which tools to combine and in what order — rather than the individual tasks.
- Designed a **harness that separates planning from execution**: the planning stage retrieves the tools and equipment information it needs, and the execution stage focuses on carrying out the planned steps.
- Added **execution verification** and **multiple independent rollouts** of the same task, selecting the most reliable result based on the **consistency** of the outcomes.
- In parallel: equipment-knowledge RAG with verification for reliable agent answers, and zero-shot defect-type classification using pretrained vision models (VLMs, SAM3).

#### Outcome

Substantially improved the tool-calling performance and stability of the on-device small model — **without depending on larger models**.
The project built up a way of working that I keep using: structure the domain data, and design the sandbox and the evaluation system together to make AI reliable in real environments.
