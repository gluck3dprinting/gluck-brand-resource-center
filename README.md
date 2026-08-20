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
| — | Brand Identity | 워드마크 히어로 · Precision / Production / Scale |
| 01 | Logo | Signature 워드마크 · G 심볼 · Round/Tab Icon · Mono · 컬러웨이 4종 |
| 02 | Color | Signature Main Blue `#0059FF` · 파생 블루 · 그레이(Draft) · 클릭 복사 |
| 03 | Typography | SUIT 단일 패밀리 · Type Scale 실문장 스펙시멘 |
| 04 | Graphic Identity | 적층·격자·반복 모티프 (Draft) |
| 05 | Photography | 촬영 카테고리 5종 · 톤 기준 (실사 라이브러리 준비 중) |
| 06 | Brand in Manufacturing | 장비·패키징·각인 등 실물 적용 권장 기준 (Draft) |
| 07 | Usage Guidelines | DO 4종 / DON'T 9종 시각 예시 · Clear Space (Draft) |
| 08 | Media Kit | 소개 문안 · Key Facts · 채널 · 로고 팩 |
| 09 | Download Center | 전체 자산 다운로드 (데이터 분리 렌더) |

## 핵심 사실

- **시그니처 로고 = 워드마크 단독형** (비율 ~4.68:1). 심볼 결합형 시그니처는 존재하지 않음
- **G 심볼**은 파비콘·앱 아이콘 등 아이콘 컨텍스트 전용
- **키 컬러** `#0059FF` Signature Main Blue (C86 M63 Y0 K0 / R0 G89 B255)
- 컬러웨이 4종: Black on Light · White on Dark · White on Blue · Blue on Light
- **서체**: SUIT (400–800) 단일 패밀리 + JetBrains Mono (데이터 보조)

## 자산 관리

- 다운로드 센터는 `index.html` 하단의 **`GLUCK_BRAND` JS 객체**에서 렌더링 — 자산 추가·수치 변경 시 데이터만 수정
- 로고 원본 교체 시 인라인 `<symbol id="lg-wordmark">` / `<symbol id="lg-symbol">` 패스만 교체하면 페이지 전체 반영
- 파일명 규칙: `GLUCK_{자산}_{변형}.{포맷}`

## Draft / 확정 예정 (브랜드팀)

Gray Scale HEX(운영 추정값) · Clear Space(1G 초안) · 최소 사용 크기 · Graphic Identity 모티프 · 실사 라이브러리 · CI Guidelines PDF · Pantone 지정값

수치(설립 2013 · SLA 45기+ · 누적 1,000,000+ 파트 등)는 **영업 소개자료 2026 기준** — 인용 전 최신 수치 확인.

---

© 2026 GLUCK Inc. All rights reserved. — Industrial SLA Manufacturing Partner
