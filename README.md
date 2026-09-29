# GLUCK Brand Resource Center

> **산업용 SLA 3D프린팅 기반 양산 제조 파트너 GLUCK의 공식 브랜드 리소스 센터.**
> 로고·컬러·타이포그래피·사용 가이드라인과 다운로드 가능한 브랜드 자산을 한곳에서 제공합니다.
>
> 기준: GLUCK Design System v1.1 (2026.07) · CI 가이드라인 보드 2종

## 주소 체계

| 구분 | 주소 | 설명 |
|---|---|---|
| **대외 공식** | `https://glucklab.com/brand/` | 홈페이지 도메인 연결 주소 (래퍼 → 최신본, `handoff/` 참조) |
| 최신본 (GitHub Pages) | https://gluck3dprinting.github.io/gluck-brand-resource-center/ | 항상 최신 — `main` push 시 1~2분 내 자동 반영 |
| 섹션 앵커 | `#identity` `#signature` `#symbol` `#round` `#color` `#typography` `#usage` `#clearspace` `#mediakit` `#downloads` | 두 주소 모두 동일하게 동작 |

`handoff/index.html`은 glucklab.com에 1회 업로드하는 래퍼(5KB), `handoff/DEVELOPER.md`는 내부 개발자 전달 문서입니다.

## 미리보기

```bash
python -m http.server 8734
```
→ `http://localhost:8734` 접속. (단일 HTML — 빌드 과정 없음)

## 주요 기능

- **좌측 사이드 내비게이션 (한글)** — 데스크톱 고정형, 스크롤 위치 자동 하이라이트 / 모바일·태블릿은 가로 스크롤 칩 내비
- **다크 모드 기본** — 다크가 기본 테마, 수동 토글로 라이트 전환 가능 (선택값 localStorage 저장)
- **상단 배너** — Main Blue 그라데이션 + 노이즈 텍스처, "Scalable Mass Production" + 회사 소개 CTA (glucklab.com)
- **컬러 클릭 복사 · 표준 소개문안 전문 복사**
- **다운로드 센터** — 모든 링크가 실제 파일로 연결 (SVG·PNG·ZIP) · 데이터 기준일 · 최근 등록(NEW) 표시
- **자산 등록 관리 (`admin.html`)** — 담당자용. 파일을 드롭해 등록하고 **GitHub에 발행** 한 번으로 공개 페이지에 반영

## 자산 등록 관리 (admin.html)

`admin.html`은 자산 데이터를 손코딩 없이 등록·수정·발행하는 담당자 화면입니다.
사내 공용 디자인 시스템 **gluck-ui**(gluck.css + gluck.js)로 구성했고, 소재(TDS)·조직도 시스템의 등록 UX
(좌측 그룹 목록 · 우측 스티키 라이브 미리보기 · 파일 드롭 자동 입력 · 더티 추적 · Ctrl+S · 토스트)를 그대로 따릅니다.

| 기능 | 내용 |
|---|---|
| 등록 | [자산 등록] 또는 그룹 위로 파일 드롭 → 이름·포맷·용량 자동 입력 → 검증(파일명 규칙·중복·필수값) → 목록 반영 |
| 미리보기 | 등록 폼 안과 우측 패널에 **공개 페이지(다크)와 동일한 모습**으로 실시간 렌더 |
| 정리 | 드래그로 순서 변경·그룹 이동, 복제, 그룹 추가/이름·폴더 수정, Key Facts 편집 |
| **발행 A (권장)** | 사이드바 **연결 설정**에 GitHub 토큰 1회 등록 → **GitHub에 발행** → 실물 파일 + `assets.js` + ZIP 패키지가 **한 커밋**으로 push → 1~2분 뒤 Pages 반영. 다른 사용자가 먼저 발행했으면 충돌 안내 |
| 발행 B (수동) | `assets.js`(+드롭한 파일) 다운로드 → 저장소에 복사 → git push |
| 안전장치 | 저장 전 초안 localStorage 보존·복원, 이탈 경고, 삭제 시 실물 파일은 저장소에 유지 |

토큰: GitHub → Settings → Developer settings → **Fine-grained tokens** → Repository access: 이 저장소만 → Permissions: **Contents: Read and write**.
토큰은 브라우저(localStorage)에만 저장되며 GitHub API 호출 외에는 전송되지 않습니다.

## 구조

```
index.html                  ← Brand Resource Center 페이지 (공개 · 단일 HTML)
admin.html                  ← 자산 등록 관리 (담당자 · gluck-ui 기반 · GitHub 발행)
brand-assets/
├── assets.js               ← ★ 자산 데이터 단일 소스 (두 페이지 공용)
├── logo/                   ← 로고 자산 — CI 보드 원본 벡터에서 추출
│   ├── GLUCK_Wordmark_{Black|White|Blue}.{svg|png}
│   ├── GLUCK_Wordmark_currentColor.svg      (웹 인라인용)
│   ├── GLUCK_Symbol_{Black|White}.{svg|png} (G 심볼)
│   ├── GLUCK_RoundLogo_{Black|White}.{svg|png}
│   └── GLUCK_TabIcon_Black_1080.png         (보드 원본 래스터)
├── guideline/              ← CI 가이드라인 보드 원본 SVG (1920×1080)
├── GLUCK_Brand_Assets.zip  ← 전체 패키지
└── README.md               ← 자산 관리 상세 문서
```

## 페이지 구성

| # | 섹션 | 내용 |
|---|---|---|
| — | 브랜드 소개 | 워드마크 히어로 · Precision / Production / Scale |
| 01 | 로고 | 시그니처 워드마크 · 컬러웨이 4종 · G 심볼 · 라운드/탭 아이콘 |
| 02 | 브랜드 컬러 | Signature Main Blue `#0059FF` · 파생 블루 · 그레이 스케일 · 클릭 복사 |
| 03 | 타이포그래피 | SUIT 단일 패밀리 · Type Scale 실문장 스펙시멘 |
| 04 | 로고 사용 규정 | DO 4종 / DON'T 9종 시각 예시 · 클리어 스페이스(1G) |
| 05 | 미디어 키트 | GLUCK 표준 소개문안 · Key Facts · 채널 · 로고 팩 |
| 06 | 다운로드 센터 | 전체 자산 다운로드 (데이터 분리 렌더) |

## 핵심 사실

- **시그니처 로고 = 워드마크 단독형** (비율 ~4.68:1). 심볼 결합형 시그니처는 존재하지 않음
- **G 심볼**은 파비콘·앱 아이콘 등 아이콘 컨텍스트 전용
- **키 컬러** `#0059FF` Signature Main Blue (C86 M63 Y0 K0 / R0 G89 B255)
- 컬러웨이 4종: Black on Light · White on Dark · White on Blue · Blue on Light
- **서체**: SUIT (400–800) 단일 패밀리 — 라벨·수치 포함 전체 통일 (숫자는 tnum 정렬)
- **클리어 스페이스**: 사방 1G(워드마크 캡 하이트) 이상 · **그레이 스케일**: 확정값

## 자산 관리

- 다운로드 센터·Key Facts·사이드바 집계는 **`brand-assets/assets.js`**(`GLUCK_BRAND`)에서 렌더링 — `admin.html`에서 편집·발행 (직접 편집도 가능)
- 로고 원본 교체 시 인라인 `<symbol id="lg-wordmark">` / `<symbol id="lg-symbol">` 패스만 교체하면 페이지 전체 반영
- 파일명 규칙: `GLUCK_{자산}_{변형}.{포맷}`
- 회사 수치 (2026.08 기준 공식 수치): 설립 2013 · SLA 45기 · 누적 1,000,000+ 파트 · 파주 제1·제2팩토리

## 추가 예정 자산

실사 사진 라이브러리 · CI Guidelines PDF · 프레젠테이션 템플릿 (준비되는 대로 다운로드 센터에 추가)
회사소개서: https://glucklab.com/brochure/ · 문의: support@glucklab.com

---

© 2026 GLUCK Inc. All rights reserved. — Industrial SLA Manufacturing Partner
