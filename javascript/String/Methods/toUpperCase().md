# String.prototype.toUpperCase()

## 시도해보기
__``toUpperCase()``__ 메서드는 문자열을 대문자로 변환해 반환합니다.

~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
~~~

## 구문
str.toUpperCase()

### 반환 값
대문자로 변환한 새로운 문자열.

### 예외
#### TypeError
[Function.prototype.call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 등을 사용해 ``null``이나 ``undefined``에서 호출 시.

## 설명
``toUpperCase()`` 메서드는 문자열을 대문자로 변환한 값을 반환합니다. JavaScript의 문자열은 불변하므로 원본 문자열에는 영향을 주지 않습니다.

## 예제

### 기본 사용법
~~~js
console.log('alphabet'.toUpperCase()); // 'ALPHABET'
~~~

### 문자열이 아닌 this의 문자열 변환
``toUpperCase()``의 ``this``가 문자열이 아니고, ``undefined``와 ``null``도 아니면 자동으로 문자열로 변환합니다.

~~~js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
~~~

[내용출처 MDN 대문자로 변환한다](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)