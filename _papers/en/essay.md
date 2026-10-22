---
layout: project
lang: en
project_id: essay
back_section: publications
title: Fine-Grained Multi-Prompt Essay Scoring with Multi-Level Disentanglement
venue: DMKD 2025
authors:
- Donghee Han
- Daeyoung Roh
- Euihwan Han
- Hwanjun Song
- Mun Yong Yi
description: Scoring multiple traits of an essay in a single model with a T5 encoder and Mixture-of-Experts — deployed as a PoC with the Gyeonggi Provincial Office of Education.
permalink: /publications/essay/
links:
  doi: 10.1007/s10618-025-01126-2
---

#### Overview

Data Mining and Knowledge Discovery (ECML-PKDD 2025 Journal Track). Developed through the KAIST–KT joint research project on language-model-based essay scoring.

**Architecture:** T5 encoder + Mixture-of-Experts (MoE)

#### Approach

- Handle **multiple scoring traits** (content, structure, expression, …) in a single model.
- With **MoE routing**, only the experts specialized for each scoring dimension are activated → lower inference cost.

#### Results

- Ahead of the state of the art in **accuracy, memory, and inference speed**.
- Generalizes to essays written for previously unseen prompts.
- A lightweight version was deployed as a **PoC with the Gyeonggi Provincial Office of Education**.
