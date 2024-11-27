# passport
Node.js용 인증 미들웨어이다  

## 설치방법
> npm i passport passport-local passport-kakao  
  
기본적인 DB로 회원가입, 로그인 일 때 local로 진행  
SNS로 로그인 만들 때는 해당 모듈를 추가 설치해야한다  
- kakao
- facebook
- google  
- ...

## 사용방법
~~~js
const passport = require('passport');

const passportConfig = require('./passport')
passportConfig() // passport 설정 초기화?

app.use(passport.initialize());
app.use(passport.session());
~~~

### passport.initialize()
섹션과 관계없이 각 요청마다 Passport가 인증 전략을 실행할 수 있도록 설정한다

- Passport를 Express 애플리케이션에 연결하는 미들웨어이다  
- 요청 객체 (req)에 Passport 관련 메서드 (req.login(), req.logout(), req.isAuthenticated() 등)이 추가 된다

### passport.session()
인증된 사용자의 세션을 유지하고 관리하기 위한 미들웨어

[공식사이트](https://www.passportjs.org/)