# dotenv
node.js 애플리케이션에서 __환경변수__ 를 쉽게 관리할 수 있도록 도와주는 모듈이다

## 설치방법
> npm install dotenv

## 사용방법
~~~js
const dotenv = require('dotenv');

dotenv.config()

process.env.이름
~~~

~~~env
이름=내용
~~~

[내용출처 dotenv github](https://github.com/motdotla/dotenv)