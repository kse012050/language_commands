# String.prototype.startsWith()
``startsWith()`` 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 ``true`` 혹은 ``false``로 반환합니다.

## 구문
~~~js
str.startsWith(searchString[, position])
~~~

### 매개변수
#### searchString
문자열의 시작 지점에서 탐색할 문자열

#### position (Optional)
``searchString``을 탐색할 위치. 기본값 0

### 반환 값
문자열이 검색 문자열로 시작하면 ``true``, 아니면 ``false``.

## 설명
``startsWith`` 메소드로 어떤 문자열이 다른 문자열로 시작하는지 확인 할 수 있습니다. 대소문자를 구분합니다.

## 예시
### startsWith() 사용하기
~~~js
//startswith
var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true
~~~

[내용출처 MDN startsWith() 시작글자에 따라 불리언](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)