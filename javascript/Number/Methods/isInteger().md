# Number.isInteger()
``Number.isInteger()`` 메서드는 주어진 값이 정수인지 판별합니다.

## 예
~~~js
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
~~~

## 구문
~~~js
Number.isInteger(value)
~~~

### 매개변수

#### value
정수인지 확인하려는 값.

### 반환 값
주어진 값의 정수 여부를 나타내는 Boolean.

## 설명
매개변수의 값이 정수면 ``true``를, 아니면 ``false``를 반환합니다. 값이 NaN이거나 Infinity여도 false를 반환합니다.

## 예제
~~~js
    Number.isInteger(0);         // true
    Number.isInteger(1);         // true
    Number.isInteger(-100000);   // true
    Number.isInteger(99999999999999999999999); // true

    Number.isInteger(0.1);       // false
    Number.isInteger(Math.PI);   // false

    Number.isInteger(NaN);       // false
    Number.isInteger(Infinity);  // false
    Number.isInteger(-Infinity); // false
    Number.isInteger('10');      // false
    Number.isInteger(true);      // false
    Number.isInteger(false);     // false
    Number.isInteger([1]);       // false
~~~

[내용출처 MDN 정수 판별](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)