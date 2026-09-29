/* ============================================================
   GLUCK Brand Asset Data — 단일 소스 (Single Source of Truth)
   ------------------------------------------------------------
   index.html(공개 리소스 센터)과 admin.html(자산 등록 관리)이 함께 읽습니다.
   자산 등록·수정은 admin.html에서 하고 [GitHub에 발행]하면 이 파일과
   실물 파일이 함께 커밋되어 1~2분 내 공개 페이지에 반영됩니다.
   (직접 편집도 가능 — 구조는 brand-assets/README.md 참조)
   ============================================================ */
const GLUCK_BRAND = {
  "version": "1.2",
  "updated": "2026-09-29",
  "basedOn": "GLUCK Design System v1.1 (2026.07) · CI 가이드라인 보드",
  "assetDir": "brand-assets/",
  "package": { "path": "GLUCK_Brand_Assets.zip", "size": "510KB", "desc": "로고 전체(SVG·PNG) + 파비콘 + CI 가이드라인 보드 원본" },
  "keyFacts": [
    { "k": "설립", "v": "2013" },
    { "k": "산업용 SLA 3D프린터", "v": "45기" },
    { "k": "누적 생산 파트", "v": "1,000,000", "plus": true },
    { "k": "팩토리", "v": "파주 제1·제2팩토리" }
  ],
  "groups": [
    {
      "title": "Logo — Signature Wordmark",
      "note": "기본 로고 · viewBox 407 × 87",
      "dir": "logo/",
      "items": [
        { "name": "GLUCK_Wordmark_Black", "desc": "블랙 — 라이트 배경용", "prev": "wm", "prevBg": "light", "prevColor": "#000",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_Wordmark_Black.svg", "size": "2KB" }, { "ext": "PNG", "path": "logo/GLUCK_Wordmark_Black.png", "size": "27KB" } ] },
        { "name": "GLUCK_Wordmark_White", "desc": "화이트 — 다크·블루 배경용", "prev": "wm", "prevBg": "dark", "prevColor": "#fff",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_Wordmark_White.svg", "size": "2KB" }, { "ext": "PNG", "path": "logo/GLUCK_Wordmark_White.png", "size": "34KB" } ] },
        { "name": "GLUCK_Wordmark_Blue", "desc": "Signature Main Blue #0059FF — 라이트 배경용", "prev": "wm", "prevBg": "light", "prevColor": "#0059FF",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_Wordmark_Blue.svg", "size": "2KB" }, { "ext": "PNG", "path": "logo/GLUCK_Wordmark_Blue.png", "size": "27KB" } ] },
        { "name": "GLUCK_Wordmark_currentColor", "desc": "웹 인라인용 — fill: currentColor", "prev": "wm", "prevBg": "light", "prevColor": "#B3B8C2",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_Wordmark_currentColor.svg", "size": "2KB" } ] }
      ]
    },
    {
      "title": "Logo — Symbol (G)",
      "note": "아이콘 컨텍스트 전용 · viewBox 81 × 87",
      "dir": "logo/",
      "items": [
        { "name": "GLUCK_Symbol_Black", "desc": "블랙 — 라이트 배경용", "prev": "sym", "prevBg": "light", "prevColor": "#000",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_Symbol_Black.svg", "size": "1KB" }, { "ext": "PNG", "path": "logo/GLUCK_Symbol_Black.png", "size": "13KB" } ] },
        { "name": "GLUCK_Symbol_White", "desc": "화이트 — 다크 배경용", "prev": "sym", "prevBg": "dark", "prevColor": "#fff",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_Symbol_White.svg", "size": "1KB" }, { "ext": "PNG", "path": "logo/GLUCK_Symbol_White.png", "size": "15KB" } ] }
      ]
    },
    {
      "title": "Logo — Round · Tab Icon",
      "note": "지정 아이콘 컨테이너",
      "dir": "logo/",
      "items": [
        { "name": "GLUCK_RoundLogo_Black", "desc": "블랙 서클 + 화이트 워드마크", "prev": "img", "src": "logo/GLUCK_RoundLogo_Black.png", "prevBg": "light",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_RoundLogo_Black.svg", "size": "2KB" }, { "ext": "PNG", "path": "logo/GLUCK_RoundLogo_Black.png", "size": "58KB" } ] },
        { "name": "GLUCK_RoundLogo_White", "desc": "화이트 서클 + 블랙 워드마크", "prev": "img", "src": "logo/GLUCK_RoundLogo_White.png", "prevBg": "light",
          "formats": [ { "ext": "SVG", "path": "logo/GLUCK_RoundLogo_White.svg", "size": "2KB" }, { "ext": "PNG", "path": "logo/GLUCK_RoundLogo_White.png", "size": "58KB" } ] },
        { "name": "GLUCK_TabIcon_Black", "desc": "앱·탭 아이콘 — 1080 × 1080", "prev": "img", "src": "logo/GLUCK_TabIcon_Black_1080.png", "prevBg": "light",
          "formats": [ { "ext": "PNG", "path": "logo/GLUCK_TabIcon_Black_1080.png", "size": "22KB" } ] },
        { "name": "GLUCK_Favicon", "desc": "공식 파비콘 — 다크 라운드 스퀘어 + 화이트 G (PNG 1024 · ICO 16~256px 7단계)", "prev": "img", "src": "logo/GLUCK_Favicon.png", "prevBg": "light",
          "formats": [ { "ext": "PNG", "path": "logo/GLUCK_Favicon.png", "size": "163KB" }, { "ext": "ICO", "path": "logo/GLUCK_Favicon.ico", "size": "52KB" } ] },
        { "name": "GLUCK_Symbol_G_826x888", "desc": "G 심볼 래스터 원본 — 826 × 888", "prev": "img", "src": "logo/GLUCK_Symbol_G_826x888.png", "prevBg": "light",
          "formats": [ { "ext": "PNG", "path": "logo/GLUCK_Symbol_G_826x888.png", "size": "17KB" } ] }
      ]
    },
    {
      "title": "Brand Guide — CI 가이드라인 보드",
      "note": "원본 보드 (1920 × 1080)",
      "dir": "guideline/",
      "items": [
        { "name": "GLUCK_CI_Guideline_Logo_Icon", "desc": "Round Logo · Tab Icon 규정 보드", "prev": "sym", "prevBg": "light", "prevColor": "#000",
          "formats": [ { "ext": "SVG", "path": "guideline/GLUCK_CI_Guideline_Logo_Icon.svg", "size": "69KB" } ] },
        { "name": "GLUCK_CI_Guideline_Logo_on_Background", "desc": "배경별 컬러웨이 규정 보드", "prev": "wm", "prevBg": "blue", "prevColor": "#fff",
          "formats": [ { "ext": "SVG", "path": "guideline/GLUCK_CI_Guideline_Logo_on_Background.svg", "size": "80KB" } ] }
      ]
    }
  ]
};
