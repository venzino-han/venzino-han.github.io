# Venzino Han — CV / Portfolio

연구 경력, 논문 실적, 실무 경력을 소개하는 GitHub Pages 사이트입니다.
[online-cv](https://github.com/sharu725/online-cv) (Orbit 디자인, Xiaoying Riley) 템플릿을 기반으로
**YAML 데이터 관리**와 **한국어/영문 이중 언어**를 지원하도록 확장했습니다.

| 언어 | URL | 데이터 파일 |
|------|-----|-------------|
| English (기본) | `/` | `_data/en.yml` |
| 한국어 | `/ko/` | `_data/ko.yml` |

각 언어에는 인쇄용 페이지(`/print/`, `/ko/print/`)가 있고, 우측 상단 버튼으로 언어 전환·인쇄·PDF 저장을 할 수 있습니다.

## 내용 수정

모든 내용은 `_data/en.yml`, `_data/ko.yml` 두 파일에서 관리합니다. 두 파일의 키 구조는 동일하게 유지하세요.

| 섹션 키 | 내용 | 주요 필드 |
|---------|------|-----------|
| `sidebar` | 이름, 연락처, 링크, 언어, 관심사 | `email`, `github`, `scholar`, `orcid`, `linkedin`, `avatar` … |
| `profile` | 자기소개, 연구 분야 태그 | `summary`, `interests` |
| `education` | 학력 | `degree`, `university`, `time`, `details` |
| `research` | 연구 경력 | `role`, `organization`, `link`, `location`, `time`, `details`, `tags` |
| `experiences` | 실무 경력 | `research` 와 동일 |
| `publications` | 논문 (그룹별) | `groups[].papers[]`: `title`, `authors`, `venue`, `year`, `note`, `link`, `links` |
| `projects` | 프로젝트 | `title`, `link`, `time`, `tagline`, `details`, `tags` |
| `awards` | 수상 / 장학 | `title`, `organization`, `time`, `details` |
| `skills` | 기술 스택 | `groups[]` (태그형) 또는 `toolset[]` (`name`, `level: 90%` 막대형) |
| `certifications`, `oss`, `recommendations` | 자격증, 오픈소스 기여, 추천사 | 원본 템플릿 형식 그대로 |
| `ui` | 버튼 등 화면 문구 번역 | |

- `details`, `summary`, `authors`, `venue` 에는 Markdown 사용 가능 (예: 저자 목록에서 본인 이름을 `**굵게**`).
- 블록을 삭제하면 해당 섹션이 사라집니다.
- 프로필 사진은 `assets/images/` 에 넣고 `sidebar.avatar` 에 파일명을 적습니다.

## 사이트 설정 (`_config.yml`)

- `sections`: 본문에 표시할 섹션과 순서
- `sidebar_position`, `sidebar_education`: 사이드바 위치, 학력 표시 위치
- `theme_skin`: 색상 (blue, turquoise, green, berry, orange, ceramic, teal, oceanstale)
- `languages`, `default_lang`: 언어 목록과 기본 언어. 언어를 추가하려면 `_data/<code>.yml`, `<code>/index.html`, `<code>/print.html` 을 만들고 `languages` 에 등록합니다.
- `url`, `baseurl`, `analytics`

## 로컬 미리보기

Docker 사용 (권장):

```bash
docker compose up        # http://localhost:4000 , http://localhost:4000/ko/
```

Ruby 개발 환경이 있다면:

```bash
bundle install
bundle exec jekyll serve
```

## 배포

1. 저장소 이름을 `<GitHub 사용자명>.github.io` (예: `venzino-han.github.io`) 로 하면 `https://venzino-han.github.io/` 에 게시됩니다.
   다른 이름이면 `https://venzino-han.github.io/<저장소명>/` 에 게시되며, baseurl 은 워크플로가 자동으로 설정합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 선택합니다.
3. `main` 또는 `master` 브랜치에 push 하면 `.github/workflows/pages.yml` 이 빌드 후 배포합니다.

## License

템플릿은 [MIT License](LICENSE.md)를 따르며, Orbit 디자인은 CC BY 3.0 으로 배포되므로 푸터의 저작자 표시 링크를 유지해 주세요.
