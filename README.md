# 멋쟁이 사자처럼 FrontEnd BootCamp 15기 자바스크립트 프로그래밍 저장소 
- 예제 테스트(GitHub Page): <https://febc-15.github.io/js/workspace-ins>

## 단원
### [1. 자바스크립트 기초 문법](docs/01.js_basic.md)

# 개발 환경 구축
## 프로그램 설치
- 본인의 OS에 맞는 버전 다운로드 후 설치
  + Nodejs 설치 <https://nodejs.org/en/download/>
  + Visual Studio Code 설치 <https://code.visualstudio.com/download>
  + Git 설치 <https://git-scm.com/downloads>
  + API 클라이언트 설치
    * Postman <https://www.postman.com/downloads>
    * Bruno <https://www.usebruno.com/downloads>
    
## 실습 준비
### Github 저장소 복사
1. 자바스크립트 실습 Github 저장소
    - `https://github.com/FEBC-15/js.git`

2. 터미널 프로그램 실행 후 개발 수업에 사용할 폴더 생성 후 이동
    - 예시
    ```bash
    mkdir febc15
    cd febc15
    ```

3. 실습 저장소를 로컬에 clone
    ```bash
    git clone https://github.com/FEBC-15/js.git
    ```

4. js 폴더로 이동
    ```bash
    cd js
    ```

### 실습 저장소의 변경사항을 동기화하기
- github 저장소의 변경사항을 가져올 때
    ```bash
    git pull origin main
    ```
- 충돌 발생시 임시로 필요한 코드만 복사
    - 현재 폴더 하위에 sample/02 폴더만 복사하는 예시
    ```bash
    npx degit https://github.com/FEBC-15/js/sample/02 sample/02 
    ```

### Visual Studio Code 설정
1. VSCode 실행
2. 프로젝트 선택
    - File > Open Folder... > febc15/01_js/JS 선택
3. File > Preferences > Settings > User: 이곳에서 설정한 항목은 모든 프로젝트에 공통 적용
    - "Editor: Font Size": 각자 맞춰서 조절
    - "Files: Auto Save": onFocusChange
    - "Editor: Tab Size": 2
    - "Editor: Detect Indentation": 체크 해제
    - Search settings 에서 `default profile` 검색
      + Terminal > Intergrated > Default Profile: Windows(MAC 사용자는 Osx) 값을 `Git Bash`로 수정
      + Terminal 우측 상단의 휴지통 아이콘 눌러서 닫은 후 View > Terminal 선택해서 bash로 열리는지 확인

4. File > Preferences > Settings > Workspace: 이곳에서 설정한 항목은 현재 프로젝트에만 적용(User 설정을 덮어씌움)
    - Search settings 에서 `Files: Readonly Include` 검색
      + Add Pattern > `workspace-ins/**` 입력한 후 OK 선택
      + Add Pattern > `sample/**` 입력한 후 OK 선택

### sample 폴더 복사
- 작업 디렉토리 생성
  ```bash
  mkdir workspace
  ```

- sample/01/workspace 폴더 내용을 작업 디렉토리에 복사
  ```bash
  cp -r sample/01/workspace/* ./workspace/
  ```
  
- 완성된 강사의 코드는 [workspace-ins](<https://github.com/FEBC-15/js/tree/main/workspace-ins>) 폴더에서 확인

## 실습 테스트

### 터미널 테스트
- workspace/ch01/ex01-02.js 파일 작성
  ```js
  console.log('Hello 자바스크립트');
  ```

- 실행
  ```bash
  cd workspace/ch01
  node ex01-02.js
  ```

### 웹 브라우저 테스트
#### 웹 서버 구동
- VSCode의 터미널로 이동
  + VSCode 하단의 TERMINAL이 보이지 않으면 View > Terminal
- 프로젝트 루트에서 Live Server 구동
  ```bash
  npx live-server workspace
  ```
  + ```Need to install the following packages: live-server@x.x.x Ok to proceed? (y)``` 메세지가 나올 경우 엔터 눌러서 설치

#### 테스트
- 웹 브라우저로 접속
  + <http://127.0.0.1:8080> 또는 <http://localhost:8080>
- 각 예제 클릭해서 테스트
  + .js: Javascript 문법 관련 실습. 웹브라우저의 개발자 도구 > 콘솔 탭에서 출력 결과 확인
  + .html: DOM, Ajax 관련 실습. 웹브라우저에서 새로운 화면으로 이동 후 테스트

# 팁
- VSCode에서 소스코드 비교
  + 비교할 두개의 파일을 VSCode에서 오픈(예시, student.js, ins.js)
  + student.js 파일이 활성화 되어있는 상태에서
  + View > Command Palette (단축키 F1) > File: Compare Active File With... 선택
  + 비교할 대상 파일 선택(ins.js)
  + student.js <-> ins.js 파일의 차이점 쉽게 확인 가능

# 참고 사이트
## 자바스크립트 학습
- 모던 자바스크립트 튜토리얼: <https://ko.javascript.info>
- MDN 자바스크립트: <https://developer.mozilla.org/ko/docs/Web/JavaScript>
- 코딩 에브리바디 자바스크립트: <https://codingeverybody.kr/category/javascript>
- 웹 개발자 튜토리얼: <https://poiemaweb.com>

## 코딩 테스트
- 백준
  + https://www.acmicpc.net
  + 단계별로 풀어보기: https://www.acmicpc.net/step
- 프로그래머스 코딩 테스트
  + https://school.programmers.co.kr/learn/challenges
  + 기초 트레이닝: https://school.programmers.co.kr/learn/challenges/training?order=acceptance_desc&languages=javascript
  + 입문: https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
  + 레벨 1: https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&languages=javascript&page=1&levels=1

## 온라인 웹 개발 에디터(HTML, CSS, JS)
- CodePen: <https://codepen.io>
- Codesandbox: <https://codesandbox.io>
- Stackblitz: <https://stackblitz.com>

## 정규표현식 테스트
- <https://regexr.com>

## API Client
### Postman
- 홈페이지: <https://www.postman.com>
- 다운로드: <https://www.postman.com/downloads>
- 문서: <https://learning.postman.com/docs>

### Bruno
- 홈페이지: <https://www.usebruno.com>
- 다운로드: <https://www.usebruno.com/downloads>
- 문서: <https://docs.usebruno.com/introduction>