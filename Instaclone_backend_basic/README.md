# Instaclone_backend
Instaclone Backend build with Prisma and GraphQL

### apollo-server
> https://github.com/apollographql/apollo-server <br>
> graphql 참고 : https://tech.kakao.com/2019/08/01/graphql-basic/
### babel
> https://babeljs.io/setup#installation
* 자바스크립트 컴파일러
> 인터프리터 언어에 왜 컴파일러가 필요한가? (사실 transpiler)
* 프론트엔드의 발전이 매우 빠르다. 최신 브라우저 조차 지원하지 못하는 문법과 여러 기술이 나타나고 있다
* 하위호환성 필요
* 문법을 변환해준다(최신의 js 코드를 이전단계의 js코드로 변환가능하게 해주는 개발도구)

### 코드
* String! 에서의 ! : non-nullable
* query: 보통 C, mutation : 보통 RUD
* resolver : 데이터를 가져오는 구체적인 과정 구현

### Prisma
> https://www.prisma.io/
> https://www.prisma.io/docs/getting-started/quickstart-typescript
* 우리의 db와 소통해준다
* ? : 필수요소가 아닌것
* schema.prisma에 model을 정의하고 prisma migrate를 해주면 db에 table생성됨

### 이외의 수업내용
https://ujin-dev.tistory.com/34
