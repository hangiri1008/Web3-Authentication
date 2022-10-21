# Next.js Boilerplate

이 문서는 IBCT 내 Next.js 보일러플레이트를 위한 문서입니다.

## About packages

---

이 보일러 플레이트는 2022년 8월 4일 기준으로 다음과 같은 패키지를 포함하고 있습니다.

```
프레임워크, 라이브러리 : `next@12.2.3`, `react@17.0.2`, `react-dom@17.0.2`

네트워크 : `axios@0.27.2`, `graphql@16.5.0`, `graphql-request: 4.3.0`, `@tanstack/react-query: 4.0.10`

상태 관리 : `recoil@0.7.4`

form : `react-hook-form@7.33.1`

스타일 : `@emotion/react@11.9.3`, `@emotion/styled@11.9.3`, `@mui/material@5.9.2`
```

이 보일러 플레이트는 VAC 패턴을 기반으로 사용하는 기술들에 대한 예시 코드로 작성이 되어 있습니다.

관련하여 코딩 규칙 및 프로젝트 폴더 구조 등 노션 페이지와 함께 보시면 더 좋습니다.

## 사용법

---

### 레포지토리 생성 시 `template repository` 사용

-   레포지토리 생성 시 최상단에서 사용할 template repository를 지정할 수 있습니다.

-   그 때, 이 보일러플레이트를 선택하시면 세팅이 된 신규 프로젝트 repository를 생성할 수 있습니다.

## 개선에 참여해주세요.

---

1. git 클론

```bash
git clone https://github.com/ibct-dev/boilerplate-nextjs/
cd boilerplate-nextjs
yarn install # 또는 yarn
```

2. 브랜치 생성

```bash
git chekcout -b BRANCH_NAME
```

3. 작업 진행

4. 이슈 번호와 함께 커밋

```bash
git add .
git commit -m "feat: #ISSUE_NUM
```

5. 브랜치 푸쉬

```bash
git push -u origin BRANCH_NAME
```

6. PR 요청
