# Donghee Han — Academic Homepage

[al-folio](https://github.com/alshedivat/al-folio) 기반 학술 홈페이지입니다.
영문/한국어 두 언어를 지원하는 포크 [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio)(jekyll-polyglot)를 사용합니다.

- 영문: https://venzino-han.github.io/
- 한국어: https://venzino-han.github.io/ko/

상단 메뉴: about · publications · projects · cv, 검색(ctrl+k), 언어 전환(English/한국어), 다크 모드

## 내용 수정 위치

| 내용 | 파일 |
|------|------|
| 소개(바이오), 오른쪽 소속 정보, 프로필 사진 | `_pages/en-us/about.md`, `_pages/ko/about.md` |
| 논문 목록 (두 언어 공용) | `_bibliography/papers.bib` |
| CV (경력·학력·수상·기술) | `_data/en-us/cv.yml`, `_data/ko/cv.yml` |
| 프로젝트 카드 | `_projects/en-us/*.md`, `_projects/ko/*.md` |
| 이메일·Scholar·GitHub·LinkedIn 아이콘 | `_data/socials.yml` |
| 메뉴·버튼 등 화면 문구 | `_data/en-us/strings.yml`, `_data/ko/strings.yml` |
| 사이트 설정 (이름, URL, 언어, 논문 저자 하이라이트) | `_config.yml` |

### 논문 추가 (`_bibliography/papers.bib`)

파일에 적힌 순서대로 연도별로 표시되므로, 새 논문은 해당 연도의 맨 위에 추가합니다.

```bibtex
@inproceedings{han2027example,
  title     = {Paper Title},
  author    = {Han, Donghee and Coauthor, A and Yi, Mun Yong},
  booktitle = {Proceedings of ... (NeurIPS 2027)},
  year      = {2027},
  abbr      = {NeurIPS},          % 왼쪽 배지
  selected  = {true},             % 소개 페이지 "selected publications"에 표시
  note      = {First author},     % 부가 정보 (저자 역할, SCIE 등)
  award     = {Selected for oral presentation.},
  award_name = {Oral},            % 배지 이름
  doi       = {10.xxxx/xxxxx},
  arxiv     = {2701.00000},
  html      = {https://...},      % 논문 페이지 링크
  code      = {https://github.com/...},
  bibtex_show = {true}            % BIB 버튼
}
```

- 본인 이름(`Han, Donghee`)은 `_config.yml` 의 `scholar.first_name`/`last_name` 설정으로 자동 강조됩니다.
- 공동 제1저자 표시(\*)가 필요하면 저자 이름 뒤에 `*` 를 붙이면 됩니다 (예: `Han*, Donghee`).
- 2026년 채택 논문 7편의 저자 목록은 연구실 논문 목록([KIRC](https://kirc.kaist.ac.kr/publication_all.html))을 기준으로 작성했습니다.

### 소개 페이지 상단 배너 (자동 슬라이드)

- 슬라이드 내용: `_data/en-us/banner.yml`, `_data/ko/banner.yml` (순서대로 표시, 새 소식은 맨 위에 추가)
  ```yaml
  - image: neurips.svg            # assets/img/banner/ 의 이미지 (jpg/png/svg)
    kicker: News · NeurIPS 2026   # 작은 라벨
    title: 슬라이드 제목
    text: 설명 문장
    link: /publications/          # 선택. 내부 경로는 한국어 페이지에서 /ko/… 로 자동 연결
    link_text: See publications
  ```
- 이미지: `assets/img/banner/` 의 SVG 일러스트는 사이트용으로 새로 그린 것입니다. 사진(가로 1200×450 권장, 왼쪽이 어두운 이미지)으로 바꿔도 됩니다.
- 넘김 간격: `_config.yml` 의 `banner_interval` (ms). 배너를 끄려면 `about.md` 의 `banner: false`.

### 자주 하는 작업

- **프로필 사진**: 사진을 `assets/img/prof_pic.jpg` 로 넣고 `_pages/*/about.md` 의 `profile.image` 에 `prof_pic.jpg` 를 적습니다.
- **CV PDF 버튼**: PDF 를 `assets/pdf/en-us/cv.pdf`, `assets/pdf/ko/cv.pdf` 로 넣고 `_pages/*/cv.md` 의 `cv_pdf: cv.pdf` 주석을 해제합니다.
- **소식(news)**: `_news/en-us/`, `_news/ko/` 에 `2026-10-01-accepted.md` 형태로 글을 추가하고 `about.md` 의 `announcements.enabled` 를 `true` 로 바꿉니다.

## 로컬 미리보기

al-folio 기본 방식 (Docker 이미지 사용):

```bash
docker compose pull
docker compose up        # http://localhost:8080
```

또는 Ruby 공식 이미지로 한 번 빌드:

```bash
docker run --rm -v "$PWD":/srv/jekyll -w /srv/jekyll -e BUNDLE_PATH=vendor/bundle ruby:3.3 \
  sh -c "apt-get update -qq && apt-get install -y -qq imagemagick nodejs && bundle install && bundle exec jekyll build"
```

## 배포

`master` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 빌드(ImageMagick, PurgeCSS 포함) 후 GitHub Pages 에 배포합니다.
저장소 Settings → Pages → Source 는 **GitHub Actions** 로 설정되어 있어야 합니다.

## License

al-folio / multi-language-al-folio 템플릿은 [MIT License](LICENSE) 를 따릅니다.
