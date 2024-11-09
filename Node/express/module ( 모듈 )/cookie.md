# cookie
HTTP 서버를 위한 기본 HTTP 쿠키 파서 및 직렬화기입니다.

## 사용법
### 설치방법
> $ npm install cookie

### 사용방법
~~~js
const cookie = require("cookie");
~~~

#### cookie.parse(str, options)
HTTP 쿠키 헤더 문자열을 구문 분석하고 모든 쿠키 이름-값 쌍의 객체를 반환합니다. str 인수는 쿠키 헤더 값을 나타내는 문자열이고 options는 추가 구문 분석 옵션을 포함하는 선택적 객체입니다.
~~~js
const cookies = cookie.parse("foo=bar; equation=E%3Dmc%5E2");
// { foo: 'bar', equation: 'E=mc^2' }
~~~

~~~js
var http = require('http');
const cookie = require("cookie");
http.createServer(function(req, res){
    // console.log(req.headers.cookie);
    const cookies = {};
    // req.headers.cookie 여기에 쿠키 값이 string 형태로 들어 있다
    if(req.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    res.writeHead(200, {
        'Set-Cookie': ['yummy_cookie=choco', 'testy_cookie=strawberry']
    })
    res.end('Cookie!!')
}).listen(3000)
~~~

## Options
[npm module cookie](https://www.npmjs.com/package/cookie)