---
layout: project
lang: ko
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
description: LLM이 생성한 추론을 검색용 인코더로 증류 — LLM 수준의 정확도·다양성을 인코더 수준의 지연시간으로.
permalink: /ko/publications/r2end/
links:
  doi: 10.18653/v1/2026.findings-acl.1130
---

#### 문제

- 기존의 LLM 기반 증류 방식들은 추천 모델이나 SLM을 학생 모델로 사용합니다.
- 이러한 방식들은 **추론 비용**이나 **의미론적 정보 활용**에서 한계가 분명했습니다.

<figure class="fig-half"><img src="/assets/img/papers/r2end-tradeoff.jpg" alt="정확도-지연시간: LLM-to-SLM은 정확하지만 느리고 비싸며, LLM-to-CRM은 빠르지만 추론력이 부족 — R2END는 정확하고 빠름"><figcaption>정확도-지연시간: LLM-to-SLM은 정확하지만 느리고 비싸며, LLM-to-CRM은 빠르지만 추론력이 부족 — R2END는 정확하고 빠름</figcaption></figure>

#### 접근

LLM으로부터 생성한 추론 텍스트를 **검색용 인코더 모델에 증류 학습**합니다. Oracle 기반 추론 생성 → 추론 증류 → 아이템 표현 구성 → 프로젝션 레이어 학습 순서로 학습하고, 추론 시에는 파인튜닝된 인코더만으로 유사도 기반 추천을 수행합니다.

<figure><img src="/assets/img/papers/r2end-framework.jpg" alt="추론 증류 프레임워크의 학습·추론 단계"><figcaption>추론 증류 프레임워크의 학습·추론 단계</figcaption></figure>

#### 결과

LLM 기반 추천의 장점인 다양성과 높은 성능을 유지하면서 **빠른 추론 속도**를 달성했습니다.
