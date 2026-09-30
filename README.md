# Donghee Han — Personal Site

연구 경력, 논문 실적, 실무 경력을 소개하는 GitHub Pages 사이트입니다.
Jekyll 기반이며 모든 내용은 YAML 로 관리하고, 영문/한국어 두 가지 버전을 제공합니다.

- 영문: https://venzino-han.github.io/
- 한국어: https://venzino-han.github.io/ko/

한 페이지 구성이며, 상단 헤더 메뉴로 각 섹션(About · Research · Publications · Experience · Education · Awards)으로 이동합니다.
About 상단에는 자동으로 넘어가는 배너가 있고, 헤더에서 언어 전환(EN/KO), 다크 모드, 인쇄(PDF 저장)를 할 수 있습니다.
Experience 의 프로젝트 카드에서 "Details" 를 누르면 프로젝트 상세 페이지(`/projects/...`)가 열립니다.

## 데이터 파일

| 파일 | 내용 |
|------|------|
| `_data/en.yml` | 영문 페이지 문구 (소개, 연구 분야, 경력, 학력, 수상, 버튼 라벨) |
| `_data/ko.yml` | 한국어 페이지 문구 (`en.yml` 과 키 구조 동일) |
| `_data/publications.yml` | 논문 목록 — **두 언어 공용** |
| `_data/common.yml` | 이메일, GitHub/Scholar/LinkedIn ID, 프로필 사진, 피인용 수 등 공용 정보 |
| `_projects/en/*.md`, `_projects/ko/*.md` | 프로젝트 상세 페이지 (역할·문제·접근·결과) |

### 논문 추가

`_data/publications.yml` 맨 위(최신순)에 항목을 추가하면 연도별 그룹, 통계(논문 수·제1저자 수·저널 수), 필터가 자동으로 갱신됩니다.

```yaml
- title: "Paper Title"
  authors: [Donghee Han, Coauthor A, Mun Yong Yi]   # 선택. 본인 이름은 자동으로 굵게
  venue_short: NeurIPS                               # 왼쪽 배지
  venue: The 40th Annual Conference on Neural Information Processing Systems (NeurIPS 2026)
  year: 2026
  type: conference        # conference | journal
  role: first             # first | co-first | second | co-author
  note: Oral              # 선택. 언어별로 다르게: {en: Oral presentation, ko: 구두 발표}
  links:                  # 선택. 필요한 것만
    doi: 10.xxxx/xxxxx
    arxiv: "2601.00000"
    url: https://...
    pdf: /assets/files/paper.pdf
    code: https://github.com/...
```

### 배너 · 일하는 방식 · 로고

- **배너**: `_data/en.yml`, `_data/ko.yml` 의 `banner` 목록 (순서 = 슬라이드 순서). 이미지는 `assets/img/banner/`, 넘김 간격은 `_config.yml` 의 `banner_interval`.
  `link` 에는 `#publications` 같은 섹션 앵커나 외부 URL 을 넣습니다.
- **일하는 방식**: `profile.how` (아이콘은 Font Awesome 이름).
- **로고**: `assets/img/logos/` 에 넣고 `experience.items[].logo`, `education.items[].logo` 에 파일명을 적습니다.
- **프로젝트 상세 링크**: `experience` 의 프로젝트 항목에 `detail: <파일명>` (예: `1_semiconductor_agent`), 프로젝트 리드 표시는 `lead: true`.

### 자주 바꾸는 항목

- **프로필 사진**: 정사각형 이미지를 `assets/images/` 에 넣고 `_data/common.yml` 의 `avatar` 에 파일명을 적습니다. 비워두면 이니셜(DH)이 표시됩니다.
- **CV PDF 다운로드 버튼**: PDF 를 `assets/files/` 에 넣고 `common.yml` 의 `cv_pdf.en` / `cv_pdf.ko` 에 경로를 적습니다.
- **피인용 수**: 자동 갱신되지 않으므로 `common.yml` 의 `citations` 를 가끔 직접 수정합니다.
- **섹션 순서·메뉴**: `_config.yml` 의 `sections` 목록 순서가 헤더 메뉴와 본문 순서가 됩니다.

## 로컬 미리보기

```bash
docker compose up        # http://localhost:4000 , http://localhost:4000/ko/
```

Ruby 개발 환경이 있다면 `bundle install && bundle exec jekyll serve` 로도 실행할 수 있습니다.

## 배포

`master` 브랜치에 push 하면 GitHub Actions(`.github/workflows/pages.yml`)가 빌드 후 GitHub Pages 에 배포합니다.

## 인쇄 / PDF

브라우저 인쇄(Ctrl/Cmd + P) 또는 헤더의 인쇄 버튼으로 A4 CV 형태의 PDF 를 저장할 수 있습니다.
인쇄 시에는 메뉴·필터가 숨겨지고, 논문은 필터와 관계없이 전부 출력됩니다.

## 구조

```
_config.yml            사이트 설정 (URL, 언어, 섹션 순서)
_data/                 콘텐츠 (YAML)
_layouts/default.html  페이지 골격
_includes/             헤더, 푸터, 섹션 템플릿 (sections/*.html)
assets/css/main.css    스타일 (라이트/다크, 반응형, 인쇄)
assets/js/main.js      다크 모드, 모바일 메뉴, 섹션 하이라이트, 논문 필터
index.html, ko/        언어별 페이지 (내용 없이 언어만 지정)
```
