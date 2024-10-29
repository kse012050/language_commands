# body-parser
``post``, ``put`` 요청 시 데이터를 파싱해준다.  
> __데이터 파싱__: 비구조화된 데이터 소스에서 관련 정보를 추출하고 쉽게 분석할 수 있는 구조화된 형식으로 변환하는 과정  
  
## 사용법
### ``body-parser``을 사용했을 때
~~~js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
~~~

### ``body-parser``을 사용하지 않았을 때
~~~js
var body = '';
req.on('data', function(data){
    body = body + data;
});
~~~
> ``body-parser``를 ``require`` 한 상태에서 request.on을 하면 실행되지 (무한 루프) 않는다.

[좀 더 자세한 내용은 express 공식문서에서](https://expressjs.com/en/resources/middleware/body-parser.html)