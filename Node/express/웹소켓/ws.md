# express-ws
``Express`` 애플리케이션용 ``WebSocket`` 엔드포인트. 다른 유형의 경로와 마찬가지로 WebSocket 엔드포인트를 정의하고 일반 Express 미들웨어를 적용합니다. WebSocket 지원은 ``ws`` 라이브러리의 도움으로 구현됩니다.

## Installation
> npm install --save express-ws

## Usage ( 용법 )
__전체 문서는 아래 API 섹션에서 찾을 수 있습니다. 이 섹션에서는 간단한 예만 보여줍니다.__  
  
Express 애플리케이션에 다음 줄을 추가합니다.
~~~js
var expressWs = require('express-ws')(app);
~~~
__중요: 라우터를 로드하거나 정의하기 전에 위와 같이 ``express-ws`` 모듈을 설정해야 합니다!__ 그렇지 않으면 ``express-ws``가 Express 라우터에 대한 지원을 설정할 기회를 얻지 못하고, ``router.ws는 함수가 아닙니다``라는 오류가 발생할 수 있습니다.  
  
``express-ws``를 설정한 후에는 다른 경로를 추가하는 것과 같은 방식으로 WebSocket 경로를 추가할 수 있습니다(거의). 다음 스니펫은 ``/echo``에 간단한 에코 서버를 설정합니다. ``ws`` 매개변수는 ``여기``에 설명된 WebSocket 클래스의 인스턴스입니다.
~~~js
app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send(msg);
    });
});
~~~
이번에는 ``/ws-stuff/echo``에서 라우터에도 작동합니다.
~~~js
var router = express.Router();

router.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

app.use("/ws-stuff", router);
~~~

## Full example
~~~js
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
});

app.listen(3000);
~~~

## API
### expressWs(app, server, options)
지정된 ``앱``에서 ``express-ws``를 설정합니다. 이렇게 하면 Express의 글로벌 Router 프로토타입도 수정됩니다. 이를 비활성화하는 방법에 대한 자세한 내용은 ``leaveRouterUntouched`` 옵션을 참조하세요.

- __app__: ``express-ws``를 설정할 Express 애플리케이션입니다.
- __server__: 선택 사항입니다. 사용자 지정 ``http.Server``를 사용하는 경우 여기에 전달해야 ``express-ws``가 이를 사용하여 WebSocket 업그레이드 핸들러를 설정할 수 있습니다. ``서버``를 지정하지 않으면 ``app.listen``을 호출할 때 자동으로 생성되는 서버에서만 사용할 수 있습니다.
- __options__: 선택 사항입니다. 추가 옵션이 포함된 객체입니다.
    - __leaveRouterUntouched__: 이를 ``true``로 설정하면`` express-ws``가 Router 프로토타입을 수정하지 않습니다. 이 기능이 활성화되면 ``.ws``를 사용 가능하게 하려는 모든 Router에 수동으로 applyTo를 실행해야 합니다.  
    - __wsOptions__: WebSocketServer 생성자에 전달되는 옵션 객체입니다. ws 관련 기능에 필요합니다.  
  
이 함수는 새로운 ``express-ws`` API 객체를 반환하며, 나머지 설명서에서는 이를 ``wsInstance``라고 합니다.

### wsInstance.app
이 속성에는 ``express-ws``가 설정된 앱이 들어 있습니다.

### wsInstance.getWss()
기본 WebSocket 서버/핸들러를 반환합니다.`` wsInstance.getWss().clients``를 사용하면 이 서버에 연결된 모든 WebSocket 클라이언트 목록을 얻을 수 있습니다.  
  
이 목록에는 특정 경로에 대한 클라이언트뿐만 아니라 모든 클라이언트가 포함됩니다. 즉, 예를 들어 브로드캐스트에 이 기능을 사용하는 것은 좋지 않습니다.

### wsInstance.applyTo(router)
지정된 ``라우터``(또는 다른 라우터 유사 객체)에 ``express-ws``를 설정합니다. 다음 두 가지 시나리오에서만 이 기능이 필요합니다.  
  
1. ``options.leaveRouterUntouched``를 활성화한 경우 또는
2. express.Router 프로토타입을 기반으로 하지 않는 사용자 지정 라우터를 사용하는 경우  
  
대부분의 경우, 이것은 전혀 필요하지 않습니다.

## Development
이 모듈은 ES6로 작성되었으며 ESM을 사용합니다.

[내용출처 git express-ws](https://github.com/HenningM/express-ws)  
  
[NPM express-ws](https://www.npmjs.com/package/express-ws)