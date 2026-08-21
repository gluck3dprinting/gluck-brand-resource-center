# GLUCK Brand Resource Center

> **산업용 SLA 3D프린팅 기반 양산 제조 파트너 GLUCK의 공식 브랜드 리소스 센터.**
> 로고·컬러·타이포그래피·사용 가이드라인과 다운로드 가능한 브랜드 자산을 한곳에서 제공합니다.
>
> 기준: GLUCK Design System v1.1 (2026.07) · CI 가이드라인 보드 2종

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
- **다운로드 센터** — 모든 링크가 실제 파일로 연결 (SVG·PNG·ZIP)

## 구조

```
index.html                  ← Brand Resource Center 페이지 (단일 HTML, 의존성 없음)
brand-assets/
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

- 다운로드 센터·Key Facts는 `index.html` 하단의 **`GLUCK_BRAND` JS 객체**에서 렌더링 — 자산 추가·수치 변경 시 데이터만 수정
- 로고 원본 교체 시 인라인 `<symbol id="lg-wordmark">` / `<symbol id="lg-symbol">` 패스만 교체하면 페이지 전체 반영
- 파일명 규칙: `GLUCK_{자산}_{변형}.{포맷}`
- 회사 수치 출처: **GLUCK 표준 소개문안 (2026.08)** — 설립 2013 · SLA 50기 · 누적 1,000,000+ 파트 · 파주 제1·제2팩토리

## 추가 예정 자산

실사 사진 라이브러리 · CI Guidelines PDF · 프레젠테이션 템플릿 (준비되는 대로 다운로드 센터에 추가)
회사소개서: https://glucklab.com/brochure/ · 문의: support@glucklab.com

---

© 2026 GLUCK Inc. All rights reserved. — Industrial SLA Manufacturing Partner
