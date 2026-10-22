---
layout: project
lang: ko
project_id: prismic
back_section: publications
title: 'PRISMIC: Reconstructing User Preference via Intent Decomposition and Consolidation'
venue: NeurIPS 2026
authors:
- Donghee Han
- Jiwon Jeong
- Hwanjun Song
- Mun Yong Yi
description: 사용자의 복합적인 관심사를 아이템 단위 의도로 분해하고 다시 정밀한 선호 신호로 통합 — LLM은 학습에만 사용하고 추론은 LLM 없이.
permalink: /ko/publications/prismic/
---

#### 문제

- 사용자 이력에는 최근·장기·탐색적·오래된 신호 등 여러 관심사가 섞여 있습니다.
- LLM은 모든 정보를 활용하려는 경향이 있어 **과도하게 일반화된 쿼리**를 생성하고, 이는 검색 공간에서 실패로 이어집니다.
- 기존 방식은 LLM에 강화학습(RL)을 적용해 추천 태스크를 학습하지만, RL 학습은 안정성이 부족하고 추론 시 비용도 높습니다.

<figure><img src="/assets/img/papers/prismic-overview.jpg" alt="PRISMIC 프레임워크: 문제(위)와 분해 → RL 기반 통합 → 인코더 증류(아래)"><figcaption>PRISMIC 프레임워크: 문제(위)와 분해 → RL 기반 통합 → 인코더 증류(아래)</figcaption></figure>

#### 접근

1. **분해(Decomposition)** — 사용자의 관심사를 아이템 단위로 분해하고 관련 쿼리(의도 가설)를 생성
2. **통합(Integration)** — RL을 활용해 쿼리를 선별·통합한 사용자 선호도 데이터를 생성 (오프라인)
3. **인코더 학습** — 생성한 데이터를 목표로 효율적인 인코더 모델을 학습

LLM은 **학습에만** 사용하고 추론은 인코더로 수행해, 인코더 기반 추천의 효율성을 유지합니다.

#### 결과

- 기존 LLM baseline 대비 데이터셋별 **33~93% 성능 향상**
- 인코더 수준의 추론 효율을 유지하면서 **추천 다양성** 향상
