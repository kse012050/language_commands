# String.prototype.includes()
``includes()`` 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.

## 시도해보기
~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
// 예상 결과: true
~~~

## 구문
~~~js
includes(searchString)
includes(searchString, position)
~~~

### 매개변수
#### searchString
이 문자열에서 찾을 다른 문자열. 정규표현식이 올 수 없습니다.

#### position ( Optional )
searchString을 찾기 시작할 위치. (기본값 0).

### 반환값
문자열을 찾아내면 ``true``. 실패하면 ``false``.

### 예외
#### TypeError
searchString이 정규식일 경우.

## 이 메서드를 사용해 문자열 내에 찾고자 하는 다른 문자열이 있는지 확인할 수 있습니다.

### 대소문자 구분
``includes()`` 메서드는 ``대소문자``를 ``구별``합니다. 예를 들어 아래 코드는 false를 반환합니다.

~~~js
'Blue Whale'.includes('blue'); // returns false
~~~
아래와 같이 원본 문자열과 검색 문자열을 모두 소문자로 변환하여 이 제약 조건을 해결할 수 있습니다.

~~~js
"Blue Whale".toLowerCase().includes("blue"); // returns true
~~~

## 예제
### includes() 사용하기
~~~js
const str = 'To be, or not to be, that is the question.';

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
~~~

[내용출처 MDN 문자열 내 찾고자 하는 다른 문자열 판별](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)