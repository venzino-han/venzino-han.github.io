---
layout: project
lang: en
project_id: clinical-text2sql
back_section: publications
title: RAG-based Unanswerable Question Detection in Clinical Text-to-SQL
venue: CIKM 2025
authors:
- Donghee Han
- Seungjae Lim
- Mun Yong Yi
description: 'A safety layer that filters unanswerable questions before a clinical Text-to-SQL system generates hallucinated or wrong SQL. Related work: COLING 2025.'
permalink: /publications/clinical-text2sql/
links:
  doi: 10.1145/3746252.3760821
---

#### Overview

**Architecture:** LLM + RAG + probabilistic threshold

#### Approach

- A safety layer that filters out hallucinated or incorrect SQL **before** it is executed in clinical Text-to-SQL.
- Combine **LLM-generated schema descriptions** with RAG for domain adaptability.
- Ensure stability with **probabilistic-threshold post-processing** and no additional model — lowering operating cost.

#### Related publications

- *Leveraging LLM-Generated Schema Descriptions for Unanswerable Question Detection in Clinical Data* — COLING 2025 (co-first author)
- *ProbGate at EHRSQL 2024: Enhancing SQL Query Generation Accuracy through Probabilistic Threshold Filtering and Error Handling* — ClinicalNLP @ NAACL 2024
