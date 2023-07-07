# URL
URL 인터페이스는 URL을 분석, 생성, 정규화, 인코딩 할 때 사용하며, URL의 각 구성요소를 쉽게 읽고 쓸 수 있는 속성을 제공합니다. URL 객체 생성은 생성자에 전체 URL 문자열, 또는 상대 URL과 기준 URL을 생성자에 전달해 진행합니다. 이렇게 생성한 URL 객체를 사용해 URL을 쉽게 바꾸거나 읽을 수 있습니다.  
  
브라우저가 아직 URL() 생성자를 지원하지 않을 땐 Window 인터페이스의 Window.URL 속성으로 URL 객체에 접근할 수 있습니다. 개발에 사용하기 전, 프로젝트의 지원 대상 브라우저를 확인하고, 이런 절차를 추가해야 하는지 결정하세요.  
  
> __참고__: 이 기능은 [Web Worker](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다

## 생성자
### new URL()
주어진 절대 URL, 또는 상대 URL과 기준 URL 문자열을 사용해 생성한 URL 객체를 생성하고 반환합니다.

## 속성
### hash
'#'과 URL의 프래그먼트 식별자를 담은 USVString입니다.

### host
URL의 도메인(호스트 이름), ':', 포트를 담은 USVString입니다.

### hostname
URL의 도메인을 담은 USVString입니다.

### href
전체 URL을 반환하는 문자열화 속성입니다.

### origin ( 읽기 전용 )
URL의 출처, 즉 스킴, 도메인, 포트를 담은 USVString입니다.

### password
도메인 이름 이전에 지정된 비밀번호를 담은 USVString입니다.

### pathname
'/'와 URL의 경로를 담은 USVString입니다.

### port
URL의 포트 번호를 담은 USVString입니다.

### protocol
URL의 프로토콜 스킴을 담은 USVString입니다. 마지막 ':'을 포함합니다.

### search
URL의 매개변수 문자열을 나타내는 USVString입니다. 어떤 매개변수라도 존재하는 경우 '?' 문자로 시작해, 모든 매개변수를 포함합니다.

### searchParams ( 읽기 전용 )
search 속성의 매개변수 각각에 접근할 수 있는 URLSearchParams 객체입니다.

### username
도메인 이름 이전에 지정된 사용자 이름을 담은 USVString입니다.

## 메서드
### toString()
전체 URL을 담은 USVString을 반환합니다. URL.href와 동일하나, toString()으로는 URL을 편집할 수 없습니다.

### toJSON()
전체 URL을 담은 USVString을 반환합니다. URL.href와 동일한 문자열을 반환합니다.

## 정적 메서드
### createObjectURL()
고유한 블롭 URL, 즉 blob: 을 스킴으로 하고, 브라우저 내의 객체를 가리키는 고유한 불투명 문자열을 그 뒤에 붙인 DOMString을 반환합니다.

### revokeObjectURL()
이전에 URL.createObjectURL()로 생성한 객체 URL을 취소합니다.

## 예
생성자는 url 매개변수를 받으며, URL이 상대 URL인 경우 선택적으로 base 매개변수를 지정해 기준으로 사용할 수 있습니다.
~~~js
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
~~~

URL 속성을 사용해 URL을 만들 수 있습니다.
~~~js
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
~~~

URL은 RFC 3986의 규칙을 따라 인코딩 됩니다.
~~~js
url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
~~~

URLSearchParams 인터페이스를 사용해 URL 쿼리 문자열을 생성하거나 조작할 수 있습니다.
현재 URL의 검색 매개변수를 가져오려면 다음과 같은 코드를 사용하세요.
~~~js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
~~~

toString() 메서드는 단순히 href 속성의 값을 반환하는 것이므로, URL 정규화와 인코딩에 생성자를 직접 사용할 수 있습니다.
~~~js
const response = await fetch(new URL('http://www.example.com/démonstration.html'));
~~~

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/API/URL)