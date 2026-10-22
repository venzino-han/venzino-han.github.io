---
layout: project
lang: ko
project_id: clinical-text2sql
back_section: publications
title: RAG-based Unanswerable Question Detection in Clinical Text-to-SQL
venue: CIKM 2025
authors:
- Donghee Han
- Seungjae Lim
- Mun Yong Yi
description: 'Clinical Text-to-SQL에서 환각·잘못된 SQL이 생성되기 전에 답변 불가능한 질문을 거르는 안전장치. 관련 연구: COLING 2025.'
permalink: /ko/publications/clinical-text2sql/
links:
  doi: 10.1145/3746252.3760821
---

#### 개요

**아키텍처:** LLM + RAG + Probabilistic Threshold

#### 접근

- Clinical Text-to-SQL에서 환각·잘못된 SQL을 **사전에** 거르는 안전장치
- **LLM이 생성한 스키마 설명**을 RAG로 결합해 도메인 적응성 확보
- 추가 모델 없이 **확률 임계값 기반 후처리**로 안정성 확보 — 운영 비용 절감

#### 관련 논문

- *Leveraging LLM-Generated Schema Descriptions for Unanswerable Question Detection in Clinical Data* — COLING 2025 (공동 제1저자)
- *ProbGate at EHRSQL 2024: Enhancing SQL Query Generation Accuracy through Probabilistic Threshold Filtering and Error Handling* — ClinicalNLP @ NAACL 2024
