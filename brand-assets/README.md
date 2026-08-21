# GLUCK Brand Resource Center — 자산 관리 문서

> 페이지: `../index.html`
> 기준: GLUCK Design System v1.1 (2026.07) · CI 가이드라인 보드 2종
> 최종 갱신: 2026.08

## 1. 디렉터리 구조

```
index.html                         ← Brand Resource Center 페이지 (단일 HTML)
brand-assets/
├── logo/                          ← 로고 자산 (CI 보드 원본 벡터에서 추출)
│   ├── GLUCK_Wordmark_{Black|White|Blue}.{svg|png}
│   ├── GLUCK_Wordmark_currentColor.svg     ← 웹 인라인용
│   ├── GLUCK_Symbol_{Black|White}.{svg|png}
│   ├── GLUCK_RoundLogo_{Black|White}.{svg|png}
│   ├── GLUCK_TabIcon_Black_1080.png        ← 보드 원본 래스터 (벡터 없음)
│   ├── GLUCK_Favicon.{png|ico}             ← 공식 파비콘 (다크 라운드 스퀘어 + 화이트 G, 사내 표준 원본)
│   └── GLUCK_Symbol_G_826x888.png          ← 보드 원본 래스터
├── guideline/                     ← CI 가이드라인 보드 원본 (1920×1080)
│   ├── GLUCK_CI_Guideline_Logo_Icon.svg
│   └── GLUCK_CI_Guideline_Logo_on_Background.svg
├── GLUCK_Brand_Assets.zip         ← 전체 패키지 (logo/ + guideline/)
└── README.md                      ← 이 문서
```

## 2. 파일명 규칙

`GLUCK_{자산}_{변형}.{포맷}` — 예: `GLUCK_Wordmark_Black.svg`

- 자산: `Wordmark`(시그니처) / `Symbol`(G) / `RoundLogo` / `TabIcon`
- 변형: `Black` / `White` / `Blue`(#0059FF) / `currentColor`
- PNG는 SVG의 충실 변환본 (Wordmark 1628px · Symbol 648px · RoundLogo 1208px)

## 3. 로고 체계 (확정 사실)

- 시그니처는 **워드마크 단독형** — 심볼+워드마크 결합형 시그니처는 존재하지 않음 (임의 생성 금지)
- **G 심볼** = 워드마크의 첫 글자. 아이콘 컨텍스트(파비콘·앱·소면적 마킹) 전용
- 공식 컬러웨이 4종: Black on Light / White on Dark / White on #0059FF / #0059FF on Light
- 아이콘 컨테이너 2종: 원형(워드마크 내장) · 라운드 스퀘어(G 단독)
- Tab Icon은 보드에 래스터로만 존재 → PNG 원본 유지 (임의 벡터화 금지)

## 4. 페이지 데이터 구조

다운로드 센터는 HTML 하단 `GLUCK_BRAND` JS 객체에서 렌더링됩니다.
**자산 추가·교체 시 절차:**

1. 파일을 `brand-assets/` 규칙에 맞게 저장
2. `GLUCK_BRAND.groups`에 항목 추가 (name / desc / formats[path, size])
3. ZIP 재생성 후 용량 갱신
4. 섹션 본문(로고 프리뷰 등)은 인라인 `<symbol id="lg-wordmark">` `<symbol id="lg-symbol">`을 참조 —
   로고 원본이 바뀌면 이 두 심볼의 패스만 교체하면 페이지 전체에 반영됨

## 5. 확정 항목 · 추가 예정 자산

**확정 (2026.08 브랜드 확정 완료):** Gray Scale 6단계 HEX · Clear Space 사방 1G · Pantone 별도 지정 없음

| 추가 예정 | 상태 |
|---|---|
| 실사 사진 라이브러리 | 자산 확보 후 다운로드 센터에 추가 |
| CI Guidelines PDF · 프레젠테이션 템플릿 | 준비되는 대로 추가 |
| 회사소개서 | https://glucklab.com/brochure/ (링크 연결됨) |

## 6. 수치·회사 정보 출처 (인용 전 확인)

- Key Facts (설립 2013 · SLA 50기 · 누적 1,000,000+ 파트 · 파주 팩토리 2곳): **GLUCK 표준 소개문안 (2026.08)** 기준 — 페이지에 출처 문구 표기됨. 최신 수치 확인 후 인용
- 푸터 회사 정보 (대표자·사업자번호·주소·연락처): Design System v1.1 표준 푸터 기준
- 채널: glucklab.com (홈페이지) · glucklab.com/company (회사 소개) · glucklab.com/brochure (회사소개서) · support@glucklab.com (문의) · @gluck_3dprinting · @sculpia_official
- 고객사명·NDA 사례는 노출 동의 확인 전 게시 금지 → 페이지에 미포함

## 7. 컬러·타이포 기준 (확정)

- Key Color: `#0059FF` Signature Main Blue (C86 M63 Y0 K0 / R0 G89 B255)
- 파생: `#337AFF`(hover·AA-Large 전용) `#1A6AFF` `#0047CC` `#D7E1F4`(배경 전용)
- 서체: SUIT 단일 패밀리 (400–800) — 라벨·수치 포함 전체 통일. CDN 로드, 사내망 차단 시 셀프호스팅 전환
- 사용 비율 60(배경)·30(그레이)·10(블루)

## 8. 로컬 미리보기

```bash
python -m http.server 8734
```
후 `http://localhost:8734` 접속.
(`file://`로 직접 열어도 동작하나, 다운로드·클립보드는 서버 환경 권장)
