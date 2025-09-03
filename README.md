## 🧭 tlqkf.kr — League of Legends 전적 검색 (React + Node)

**React(SPA) + Node(Express)**로 만든 LoL 전적 검색 서비스입니다.  
프론트는 `client/`에서 UI·라우팅을 담당하고, 백엔드는 `server/`에서 Riot Games API를 프록시/가공하여 제공합니다.



---

### ✨ 주요 기능
- 소환사명 검색 → **프로필/티어/최근 매치 목록** 조회
- 매치 상세(챔피언, KDA, 딜량 등) 요약
- 서버 프록시를 통한 **API 키 보호** 및 **CORS 처리**

---

### 🛠 기술 스택
**Frontend (`client/`):**
- React, (예: React Router)
- 데이터 요청: fetch/axios
- 스타일: CSS/모듈/유틸(프로젝트 스타일 구조에 맞춤)

**Backend (`server/`):**
- Node.js + Express
- Riot Games API (Summoner-V4, League-V4, Match-V5 등) 프록시


