# Nota 채팅 프로젝트

> React와 MSW를 사용한 채팅 서비스 구현
> <img width="1511" alt="image" src="https://github.com/user-attachments/assets/aadc73db-dfd2-4aa3-80d5-0574741e5ef5" />

<br/>

## 진행 기간

- 2024.12.13 ~ 2024.12.19

<br/>

## 배포 링크

- 🔗 [배포 사이트](https://wnwlals13.github.io/nota-mini-chat/)

<br/>

## 개발 시, 고려한 부분

- 채팅 목록, 현재 채팅 섹션을 Layout 컴포넌트로 분리하여 **코드 가독성**을 높였습니다.
- 공통 UI 컴포넌트는 모듈화하여 **코드의 재사용성**을 높이고자 했습니다.
- 리팩토링을 통해 코드를 개선하고, 주석을 작성하는 등 **개발 편의와 유지보수성**을 고려했습니다.
- 코드 컨벤션, 커밋 컨벤션을 지키며 작업했습니다.

<br/>

## 사용 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![React-Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React-Query&logoColor=white) ![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Tailwind-CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Github-Pages](https://img.shields.io/badge/githubpages-222222.svg?style=for-the-badge&logo=githubpages&logoColor=white) ![Github-Actions](https://img.shields.io/badge/githubactions-2088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white)

<br/>

## 구현 기능 및 흐름

- **채팅 목록 [필수⭐️]**

  - 진행했던 전체 채팅 목록 표시
  - 채팅 아이템 선택 시, 우측에 채팅 내역 표시
  - '+' 아이콘 버튼 선택 시, 우측에 채팅 내역 및 선택된 채팅 초기화

- **채팅 목록 [추가👍]**

  - 채팅 아이템 첫 질문은 최대 1줄까지만 노출, 길어질 경우 말줄임(...)처리
    - 이유 : ChatGPT를 사용했을 때, 질문의 길이가 길어도 질문할 수 있다는 점을 생각했을 때, 질문은 1줄 이상일 경우가 많을 것으로 추측했고 그에 맞게 처리했습니다.

- **현재 채팅 [필수⭐️]**

  - 새로운 채팅인 경우, 채팅 모델 Dropdown 첫번째 모델로 초기화
  - 새로운 채팅인 경우, 질문 입력란 초기화
  - 채팅 모델 Dropdown 변경 시, 채팅 내역, 현재 채팅 및 질문 입력란 초기화
  - 질문 제출 시, 질문 입력 필수
  - 질문 제출 후, 로딩 처리
  - 질문 입력란 내 3줄 이상 시 스크롤 가능
  - 채팅 내역이 화면보다 길어질 경우, 스크롤 가능, 이후 스크롤 상단 이동한 경우 화살표 버튼 노출, 화살표 버튼 클릭 시 채팅 내역 최하단으로 이동

- **현재 채팅 [추가👍]**

  - 선택된 채팅이 없고, 새로운 채팅도 추가하지 않은 경우에는 Dropdown, 입력란, 제출버튼 비활성화
    - 이유 : 채팅 모델 초기화 시점은, 새로운 채팅을 추가하거나 기존 채팅을 선택하는 시점이므로 이전에는 값이 비어있다고 판단했습니다. 이 때, placeholder 를 노출하여 선택되지 않았음을 표시하였습니다.

<br/>

## 기술 선정 이유

- Zustand

  - 보일러 플레이트 코드가 적고 복잡하지 않아 코드 가독성을 향상 가능

- Tanstack Query

  - 서버 상태와 클라이언트 상태를 분리하여 상태 관리 효율성 향상
  - 자동 캐싱 및 에러 핸들링 기능을 활용해 효율적인 코드 설계 가능

- Axios

  - JSON 변환으로 간결한 코드 사용 가능
  - 효율적인 HTTP 에러 핸들링 관리

- Tailwind CSS

  - 클래스명에 대한 시간을 줄여 빠른 개발 가능
  - 외부 라이브러리와 결합해 유연하고 직관적인 스타일링 가능

<br/>

## 성능 개선

- font display 'swap' 를 적용해 웹폰트 로드 전, 기본 텍스트로 표시하도록 하여 UX와 LCP 개선 (1.4초 -> 0.5초)
  <details>
    <summary>관련 이미지</summary>

  ![diff](https://github.com/user-attachments/assets/ba3be607-fcf1-4ede-9d02-27dbfb6dd35c)

  </details>

<br/>

## 폴더 구조

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
