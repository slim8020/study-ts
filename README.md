# study typescript

## exAnonymous
1. 익명 인터페이스 사용

## exFirstclass
1. 일급함수(first-class function) callback 사용
2. Destructuring (비구조화 할당) 사용
3. rest operator (잔여연산자) / spread operator (전개연산자) 사용

## exModule
1. 모듈 import / export 하는 방법 연습
2. 각 variable type 이해
3. interface 사용

## hellots & makePerson
### 기본 개발 환경 연습
1. npm init -y
2. npm i -D typescript ts-node @types/node
   *  -D or --save-dev : devDependencies 
   *  -S or --save : dependencies
3. package.json 수정
   *  main 에 src/index.js 로 수정
   *  script 에 아래 내용 추가
      -  "dev": "ts-node src",
      -  "build": "tsc && node dist",
4. tsc --init 으로 tsconfig.json 생성
5. tsconfig.json 수정
   * outDir 을 주석 해제하고 dist 입력
   * sourceMap 주석 해제하고 true 값 입력 > 디버깅 용
6. mkdir -p src/utils
7. src 아래에 index.ts 생성
8. src/utils 아래에 원하는 모듈 생성
9. git add .
10. git commit -m "내용 입력"
11. git push origin master
12. 연습 시작


## Reference 
1. https://www.typescriptlang.org/docs/handbook/intro.html
2. Do it! 타입스크립트 프로그래밍

