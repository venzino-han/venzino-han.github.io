---
layout: project
lang: ko
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
description: T5 인코더와 Mixture-of-Experts로 에세이의 여러 평가지표를 단일 모델에서 처리 — 경기도교육청 PoC 배포.
permalink: /ko/publications/essay/
links:
  doi: 10.1007/s10618-025-01126-2
---

#### 개요

Data Mining and Knowledge Discovery (ECML-PKDD 2025 Journal Track). KAIST-KT 공동연구 프로젝트(언어모델을 활용한 에세이 평가)를 통해 수행한 연구입니다.

**아키텍처:** T5 Encoder + Mixture-of-Experts (MoE)

#### 접근

- 내용·구조·표현 등 **다중 평가지표**를 단일 모델에서 동시에 처리
- **MoE 라우팅**으로 평가 차원별 전문 expert만 활성화 → 추론 비용 절감

#### 결과

- SOTA 대비 **정확도·메모리·추론속도** 모두 우위
- 새로운 제시문 에세이에도 평가 가능한 일반화 성능
- 경량화 모델을 **경기도교육청 PoC**로 배포
