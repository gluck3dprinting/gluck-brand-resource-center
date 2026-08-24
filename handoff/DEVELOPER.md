# [개발자 전달] GLUCK Brand Resource Center — glucklab.com 연결 요청

> 요청: `glucklab.com` 아래에 브랜드 리소스 센터 페이지 연결
> 작업량: **파일 1개 업로드, 1회로 끝** (이후 재업로드 불필요)
> 브로슈어(`glucklab.com/brochure/`)와 동일한 래퍼 방식입니다.

---

## 전체 그림 — 3개 층

```
① 사내 (기획팀)              ② GitHub (창고)                      ③ glucklab.com (간판)
   브랜드 페이지 수정    →     gluck-brand-resource-center     →     /brand/ 래퍼가 그걸 불러다 보여줌
   git push                    GitHub Pages 자동 게시 (1~2분)         (파일 1장, 안 바뀜)
```

## 개발자가 할 일 (이것만)

1. 웹서버에 `/brand/` 디렉터리를 만들고, 동봉한 **`index.html` 1개**를 업로드
   → 최종 경로: `https://glucklab.com/brand/index.html`
2. `https://glucklab.com/brand/` 접속해서 페이지가 뜨는지 확인

끝입니다. **내용이 아무리 바뀌어도 이 파일은 다시 올릴 필요가 없습니다.**

## 이 5KB 파일이 하는 일은 세 가지뿐

```
var BASE = "https://gluck3dprinting.github.io/gluck-brand-resource-center/";

① HEAD 요청으로 Last-Modified(갱신 시각)를 먼저 조회
② 주소 뒤에 ?v=갱신시각 을 붙여 iframe에 로드   ← 캐시 문제 원천 차단
③ 페이지 내부 스크롤 위치를 주소창 해시로 동기화  ← glucklab.com/brand/#color 형태 유지
```

## 주소 체계

| 구분 | 주소 |
|---|---|
| **대외 공식** | `https://glucklab.com/brand/` |
| 섹션 앵커 | `/brand/#identity` `#signature` `#symbol` `#round` `#color` `#typography` `#usage` `#clearspace` `#mediakit` `#downloads` |
| 원본 (GitHub Pages) | https://gluck3dprinting.github.io/gluck-brand-resource-center/ |
| 저장소 | https://github.com/gluck3dprinting/gluck-brand-resource-center |

홈페이지 메뉴/푸터에 "Brand" 항목을 추가할 경우 `https://glucklab.com/brand/`로 링크하면 됩니다.

## 업로드 후 확인 체크리스트

- [ ] `https://glucklab.com/brand/` 접속 → 다크 배경의 브랜드 페이지 로드 (1~2초 내)
- [ ] 좌측 메뉴 클릭 시 해당 섹션으로 이동하고, 주소창 해시가 함께 바뀜
- [ ] 우상단 해/달 버튼으로 라이트·다크 전환
- [ ] "브랜드 컬러" 섹션에서 HEX 값 Copy 버튼 동작 (iframe `allow="clipboard-write"` 속성 필요 — 동봉 파일에 포함됨)
- [ ] "다운로드 센터"에서 SVG/PNG/ZIP 다운로드 동작
- [ ] 모바일(390px)에서 상단 칩 내비 표시

## 기술 참고

- **iframe 차단 없음**: GitHub Pages는 `X-Frame-Options`를 보내지 않으므로 임베드 가능. HEAD 요청도 CORS 허용(`Access-Control-Allow-Origin: *`)됨.
- **서버 요구사항 없음**: 정적 파일 1장. 서버 설정·빌드·백엔드 불필요.
- glucklab.com 쪽에 **CSP(Content-Security-Policy) 헤더**를 쓰고 있다면 `frame-src https://gluck3dprinting.github.io` 허용 필요 (없으면 신경 안 써도 됨).
- **대안 (참고)**: 서브도메인 `brand.glucklab.com`을 원하면 래퍼 대신 DNS CNAME → `gluck3dprinting.github.io` + 저장소 custom domain 설정 방식도 가능. 다만 DNS 권한이 필요하고, 현재 브로슈어와의 일관성을 위해 `/brand/` 래퍼 방식을 권장.

## 문의

기획팀 (이 페이지의 소스 수정·배포는 기획팀이 GitHub에서 직접 합니다.
개발팀에는 이 1회 업로드 외에 별도 요청이 없습니다.)
