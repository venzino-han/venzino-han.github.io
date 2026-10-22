---
layout: project
lang: ko
project_id: querec
back_section: publications
title: 'Rethinking LLM-Based Recommendations: A Personalized Query-Driven Parallel Integration'
venue: EMNLP 2025 Findings
authors:
- Donghee Han
- Hwanjun Song
- Mun Yong Yi
description: 개인화된 쿼리로 LLM을 추천 모델과 병렬 통합 — LLM 학습이나 별도 정렬 학습 없이.
permalink: /ko/publications/querec/
links:
  doi: 10.18653/v1/2025.findings-emnlp.446
---

#### 문제

기존 방식들은 LLM과 추천 모델을 단일 모델로 **직렬 통합**하려 했고, 이는 정보 병목과 인기도 편향으로 이어집니다.

<figure><img src="/assets/img/papers/querec-architecture.jpg" alt="직렬 vs. 병렬 아키텍처: 병렬 설계로 두 관점의 병목을 시너지로 전환"><figcaption>직렬 vs. 병렬 아키텍처: 병렬 설계로 두 관점의 병목을 시너지로 전환</figcaption></figure>

#### 접근

- LLM 자체의 **쿼리 생성 능력**을 활용해 사용자별 개인화 쿼리를 생성
- LLM을 추천 모델과 **병렬로 통합**
- **LLM 학습이나 별도 정렬 학습 단계 없이** 높은 성능을 달성하며, 새로운 LLM이나 Black-Box 모델도 쉽게 통합

<figure class="fig-half"><img src="/assets/img/papers/querec-queries.jpg" alt="QUERec이 생성한 개인화 사용자 쿼리 (추천 설명력 향상)"><figcaption>QUERec이 생성한 개인화 사용자 쿼리 (추천 설명력 향상)</figcaption></figure>

#### 결과

- 직렬 통합 방식 대비 정확도·개인화 동시 향상
- 추천 다양성 향상 및 인기도 편향 완화

<figure class="fig-half"><img src="/assets/img/papers/querec-diversity.jpg" alt="추천 아이템 인기도 분포: QUERec vs. DIF-SR"><figcaption>추천 아이템 인기도 분포: QUERec vs. DIF-SR</figcaption></figure>
