## Nota 과제 프로젝트

### 진행 기간

- 2024.12.13 ~ 2024.12.19

### 구현 기능

### 기술 선택 이유

- React : 제가 생각했을 때, Next의 장점은 라우팅, SEO, SSR 등이라고 생각하는데 이러한 기능을 사용하지 않고 React로도 개발할 수 있다고 생각해 React를 선택하였습니다.
- Zustand
- Tanstack Query
- Axios

### 폴더 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂chats
 ┃ ┣ 📂messages
 ┃ ┗ 📂pages
 ┣ 📂hooks
 ┃ ┣ 📂chats
 ┃ ┗ 📂messages
 ┣ 📂mock
 ┣ 📂shared
 ┃ ┣ 📂buttons
 ┃ ┣ 📂dropdown
 ┃ ┣ 📂inputs
 ┃ ┣ 📂loading
 ┃ ┗ 📂profile
 ┣ 📂stores
 ┃ ┣ 📂chat
 ┃ ┗ 📂query
 ┣ 📂utils
```

- assets : 프로젝트 이미지 등 소스 폴더
- components : 프로젝트 내 각 컴포넌트 폴더
- hooks : 프로젝트의 API 훅 폴더
- mock : msw 관련 폴더
- shared : 공통 UI 컴포넌트 폴더
- stores : 프로젝트 전역 상태 관리 폴더
