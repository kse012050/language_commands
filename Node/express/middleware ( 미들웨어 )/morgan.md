# morgan
node.js를 위한 HTTP 요청 로거 미들웨어  
HTTP 요청을 로딩할 수 있도록 도와주는 __미들웨어__ 이다.  

## 사용법
### 설치방법
> npm install morgan

### 사용방법
~~~js
var morgan = require('morgan')


app.use(morgan('dev'));
// morgan(형식, 옵션)
~~~

#### 형식
- Combined: 상세한 로그(클라이언트 IP, 사용자 에이전트 등 포함)
- Common: 간단한 로그 형식(IP, HTTP 메서드, 경로 등)
- Short: 간략한 로그
- Tiny: 최소한의 로그
- dev: 간단한 개발용 로그

#### 옵션
더 자세한 내용은 github에서..  

[내용출처 morgan](https://github.com/expressjs/morgan)