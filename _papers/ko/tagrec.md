---
layout: project
lang: ko
project_id: tagrec
back_section: publications
title: 'TAG-Rec: Grounding LLM-based Recommendation via Trigger-Anchored GRPO'
venue: CIKM 2026
authors:
- Donghee Han
- Jiwon Jeong
- Hwanjun Song
- Mun Yong Yi
description: 트리거 아이템에 생성과 보상을 고정해 LLM 기반 추천 강화학습의 보상 희소 문제를 해결.
permalink: /ko/publications/tagrec/
---

#### 문제

- 기존 RL 기반 방식은 **추천 성능만을** 보상 함수로 활용합니다.
- 방대한 아이템 풀에서 검색할 때 보상이 **희소**해져 학습이 정체됩니다.

<figure><img src="/assets/img/papers/tagrec-framework.jpg" alt="TAG-Rec: 트리거 기반 데이터 큐레이션, 트리거 우선 생성, 트리거 인식 보상, 프로젝션 레이어 학습"><figcaption>TAG-Rec: 트리거 기반 데이터 큐레이션, 트리거 우선 생성, 트리거 인식 보상, 프로젝션 레이어 학습</figcaption></figure>

#### 접근

- **트리거 기반 데이터 큐레이션** — 학습 데이터에서 사용자의 구매와 가장 연관성이 높은 아이템(트리거)을 선정
- **트리거 인식 보상** — 이 아이템을 기반으로 **추가 리워드** 제공
- **트리거 우선 생성** — 쿼리 생성에 앞서 연관 아이템을 사용자 기록에서 추출하고, 아이템 특성을 먼저 언급하도록 지시

<figure class="fig-half"><img src="/assets/img/papers/tagrec-reward.jpg" alt="학습 중 보상 비교: TAG-Rec vs. Rec-R1"><figcaption>학습 중 보상 비교: TAG-Rec vs. Rec-R1</figcaption></figure>

#### 결과

리워드 희소 문제를 해결하고 추천 성능을 향상시켰으며, **상용 LLM을 능가**하는 성능을 보였습니다.
