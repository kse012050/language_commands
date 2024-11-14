# path
파일 및 디렉토리 경로를 다룰 때 유용한 다양한 기능을 제공한다  
플랫폼 별로 다른 경로 구분자를 자동으로 처리 (Windows: \, POSIX: /)

## 사용방법
~~~js
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// __dirname express 최상위 폴더 경로
~~~

[내용출처 nodejs](https://nodejs.org/api/path.html)