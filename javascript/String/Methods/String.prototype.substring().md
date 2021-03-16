# String.prototype.substring()
``substring()``메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다. 

~~~js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
~~~

## 사용방법
~~~js
str.substring(indexStart[, indexEnd])
~~~

### 인자 값
#### indexStart
반환문자열의 시작 인덱스 

#### indexEnd
옵션.  반환문자열의 마지막 인덱스 (포함하지 않음.)

### 반환값
기존문자열의  부분 문자열을 반환합니다. 

## Description (기술)
``substring()`` 메서드는 ``indexStart`` 부터 문자를 추출하지만 ``indexEnd`` 가 포함되지 않아도 괜찮습니다. 특징은 아래와 같습니다.

- 만약 ``indexEnd`` 가 생략된 경우, ``substring()`` 문자열의 끝까지 모든 문자를 추출합니다.
- 만약 ``indexStart`` 가 ``indexEnd``와 같을 경우, ``substring()`` 빈 문자열을 반환합니다.
- 만약 ``indexStart`` 가 ``indexEnd``보다 큰 경우, ``substring()`` 메서드는 마치 두 개의 인자를 바꾼 듯 작동하게 됩니다. 아래 예제를 보세요.  

0보다 작은 인자 값을 가지는 경우에는 0으로, ``stringName.length`` 보다 큰 인자 값을 가지는 경우, ``stringName.length`` 로 처리됩니다. ``NaN`` 값은 0으로 처리됩니다.

## Examples

### Using substring() (substring () 사용)
다음 예제에서는 ``substring()``을 사용하여 문자열 ``'Mozilla'``의 문자를 표시합니다.

~~~js
var anyString = 'Mozilla';

// Displays 'M'
console.log(anyString.substring(0, 1));
console.log(anyString.substring(1, 0));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
~~~

> Examples(예제) 는 다 정리하지 않았다   
> 필요할 때, 따로 정리하겠다

[내용출처 MDN String.prototype.substring()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)