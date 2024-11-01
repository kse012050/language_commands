# compression
테이터를 압축해서 보내준다  
데이터를 네트워크로 전송할 때 데이터를 압축해서 보내준다 ( 서버 -> 클라이언트 )  
네트워크 전송 속도를 높이고, 비용을 줄일 수 있다

## 사용법

### 설치방법
> $ npm install compression

### 사용법
~~~js
var compression = require('compression');

app.use(compression());
~~~

[좀 더 자세한 내용은 express 공식문서에서](https://expressjs.com/en/resources/middleware/compression.html)