# String.prototype.padStart()
__padStart()__ 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 ``문자열의 시작(좌측)``부터 적용됩니다.

## 시도해보기
~~~js
const str1 = '5';

console.log(str1.padStart(2, '0'));
// 예상 출력 : "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// 예상 출력 : "************5581"
~~~

## 구문
~~~js
str.padStart(targetLength [, padString])
~~~

### 매개변수
- targetLength  
목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

- padString (``Optional``)  
현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 기본값은 " ". (U+0020)

### 반환값
시작점부터 주어진 문자열로 채워 목표 길이를 만족하는 ``String.``

## 예시
~~~js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
~~~
