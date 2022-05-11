# String.prototype.toLowerCase()

## 시도해보기
__``toLowerCase()``__ 메서드는 문자열을 소문자로 변환해 반환합니다

~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."
~~~

## 구문
~~~js
str.toLowerCase()
~~~

### 반환 값
호출 문자열을 소문자로 변환한 새로운 문자열

## 설명
``toLowerCase()`` 메서드는 호출 문자열을 소문자로 변환해 반환합니다.  ``toLowerCase()`` 는 원래의 str에 영향을 주지 않습니다.

## 예제
### toLowerCase()
~~~js
console.log('ALPHABET'.toLowerCase()); // 'alphabet'
~~~

[내용출처 MDN 소문자로 변환한다](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)