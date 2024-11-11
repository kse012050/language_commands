# cookie-parser
클라이언트가 보낸 HTTP 요청의 __쿠키를 분석(파싱)__ 하여 JavaScript 객체로 변환해주는 기능을 제공한다

## 설치방법
> npm install cookie-parser

## 사용방법
~~~js
const cookieParser = require('cookie-parser');

app.use(cookieParser(process.env.COOKIE_SECRET));
// cookieParser(secret, options)
~~~

## cookieParser(secret, options)
### cookieParser 
함수는 쿠키 데이터를 파싱하는 미들웨어를 생성합니다.

### secret
- 쿠키를 서명(Sign)하고 검증하는 데 사용
- 선택 사항이며, 제공되지 않으면 서명된 쿠키는 파싱되지 않음
- 문자열 또는 배열로 제공 가능
    - 문자열: 하나의 비밀키를 사용
    - 배열: 각 비밀키를 순서대로 시도해 서명 해제(unsign) 및 검증

### options

### decode

[내용출처 cookie-parser github](https://github.com/expressjs/cookie-parser)