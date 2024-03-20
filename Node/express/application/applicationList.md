# Application
## Properties

## Events

## Methods

### app.all()

### app.delete()

### app.disable()

### app.disabled()

### app.enable()

### app.enabled()

### app.engine()

### app.get()
지정된 콜백 함수를 사용하여 HTTP GET 요청을 지정된 경로로 라우팅합니다.
~~~js
app.get(path, callback [, callback ...])
~~~

### app.listen()
지정된 호스트 및 포트에서 연결을 바인딩하고 수신합니다.
~~~js
app.listen([port[, host[, backlog]]][, callback])

var express = require('express')
var app = express()
app.listen(3000)
~~~

### app.METHOD()

### app.param()

### app.path()

### app.post()

### app.put()

### app.render()

### app.route()

### app.set()
변수처럼 생성 저장 후 ``get()`` 으로 사용
~~~js
app.set('title', 'My Site')
app.get('title') // "My Site"
~~~

### app.use()
지정된 경로에 지정된 미들웨어 기능을 마운트합니다. 요청된 경로의 기본이 path와 일치할 때 미들웨어 기능이 실행됩니다.
~~~js
app.use([path,] callback [, callback...])
~~~
path 생략 가능
