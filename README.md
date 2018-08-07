React Boilerplate
=================

## 필수 설치 ##
- Nodejs (https://nodejs.org/en/)

## 패키지 관리(선택사항) ##
- yarn (https://yarnpkg.com/en/docs/install#mac-stable)

## 사용법 ##
- 의존모듈 설치
```sh
yarn install
```
or
```sh
npm install
```
- 로컬 개발
```sh
yarn start
```
or
```sh
npm start
```
- 유닛 테스트
```sh
yarn test
```
or
```sh
npm run test
```
- 배포 빌드
```sh
yarn build
```
or
```sh
yarn run build
```

## 구조 ##
- https://docs.google.com/drawings/d/1GJzhFXl6rxH-B42WwMvMb2f74k7o2-gtKcIgYLr1usY/edit?usp=sharing
```
build/
    static/
        css
        js
    name1/
        index.html
    name2/
        index.html
    ...
    index.html

public/
    name1/
        index.html
    name2/
        index.html
    ...
    index.html

src/
    api [mock server 정보]
    client/ [client 최상위 component]
        name1/
            Root.js
        name2/
            Root.js
        ...
        index/
            Root.js
    components [presentational componets]
    containers [container components (store 연결)]
    pages [route componets]
    server/
        name1/
            export name1 ssr
        name2/
            export name2 ssr
        ...
        index/
            export index ssr
    shared/
        name1/
            app.js
        name2/
            app.js
        ...
        index/
            app.js
    store/
        name1/
            configureStore.js
            index.js
        name2/
            configureStore.js
            index.js
        ...
        index/
            configureStore.js
            index.js
    name1.js
    name2.js
    ...
    index.js
```
