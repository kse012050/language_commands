# sanitize-html
데이터의 ``<>``가 있어도 태그로 인식하는 게 아니라 문자열 자체로 인식하게 만들어준다.

## 사용법
### 설치방법
> npm install sanitize-html

### 사용방법
~~~js
var sanitizeHtml = require('sanitize-html');

import sanitizeHtml from 'sanitize-html';

const html = "<strong>hello world</strong>";
console.log(sanitizeHtml(html));
console.log(sanitizeHtml("<img src=x onerror=alert('img') />"));
console.log(sanitizeHtml("console.log('hello world')"));
console.log(sanitizeHtml("<script>alert('hello world')</script>"));
~~~

[내용출처 git 공식](https://github.com/apostrophecms/sanitize-html#readme)