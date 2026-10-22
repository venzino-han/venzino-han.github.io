---
layout: project
lang: ko
project_id: medvqa
back_section: publications
title: Selective Answering for Medical VQA via Parallel Independent Claim Verification
venue: NeurIPS 2026
authors:
- Donghee Han
- Jiwon Jeong
- Mun Yong Yi
description: 이미지와 질문이 답을 뒷받침하지 않을 때 의료 VLM이 답변을 멈추도록 — 자동 생성 벤치마크와 Agentic 검증 워크플로우.
permalink: /ko/publications/medvqa/
---

#### 문제

최신 연구들은 VLM이 **정보가 불충분함에도 답변을 생성**함을 보여 줍니다. 의료 도메인에서는 특히 위험한 문제입니다.

#### 벤치마크

이미지 불일치, 선택지 제거, 유형 보존 질문 변형 등 결정적 변형으로 답변 불가능한 의료 VQA 입력을 **자동 생성**하는 벤치마크를 만들었습니다. 평가 결과 기존 방법과 모델들은 **매우 큰 취약점**을 보였습니다.

<figure><img src="/assets/img/papers/medvqa-benchmark.jpg" alt="결정적 변형으로 답변 불가능한 의료 VQA 입력 구성"><figcaption>결정적 변형으로 답변 불가능한 의료 VQA 입력 구성</figcaption></figure>

#### 접근: Agentic Workflow

- 이미지와 질문을 개별로 분석하고, 답변에 필요한 요소를 claim 단위로 **분해**해서 추론
- 각 claim을 **독립된 검증기로 병렬 검증** (개체·영역·선택지)
- 추론 결과를 **Python 기반 프로그램**으로 파싱한 뒤 결정적으로 통합 — 근거가 있을 때만 답하고 아니면 답변 보류

<figure><img src="/assets/img/papers/medvqa-framework.jpg" alt="분해 → 병렬 독립 claim 검증 → 결정적 통합 → 근거 기반 답변"><figcaption>분해 → 병렬 독립 claim 검증 → 결정적 통합 → 근거 기반 답변</figcaption></figure>

#### 결과

**GPT, MedGemma** 등 다양한 모델에서 Python 도구 활용을 통해 답변 안정성을 향상시켰습니다.
