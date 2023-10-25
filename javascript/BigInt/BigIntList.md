# BigInt 리스트 정리

## BigInt() 생성자
``BigInt()`` 생성자는 ``BigInt``객체를 생성합니다.
~~~js
BigInt(value);
~~~

## BigInt.asIntN()  (as Int N => Int N으로)
``BigInt.asIntN()`` 정적 메서드는 ``BigInt`` 값을 지정된 최하위 비트 수로 자르고 해당 값을 부호 있는 정수로 반환합니다.
~~~js
const max = 2n ** (64n - 1n) - 1n;

function check64bit(number) {
  number > max ? console.log("숫자가 부호 있는 64비트 정수에 맞지 않습니다!") : console.log(BigInt.asIntN(64, number));
}

check64bit(2n ** 64n);
// 예상 출력: "숫자가 부호 있는 64비트 정수에 맞지 않습니다!"

check64bit(2n ** 32n);
// 예상 출력: 4294967296n
~~~

## BigInt.asUintN() (as Uint N => 단위 N으로)
``BigInt.asUintN()`` 정적 메서드는 ``BigInt`` 값을 지정된 최하위 비트 수로 자르고 해당 값을 부호 없는 정수로 반환합니다.
~~~js
const max = 2n ** 64n - 1n;

function check64bit(number) {
  number > max
    ? console.log("숫자가 부호 없는 64비트 정수에 맞지 않습니다!")
    : console.log(BigInt.asUintN(64, number));
}

check64bit(2n ** 64n);
// 예상 출력: "숫자가 부호 없는 64비트 정수에 맞지 않습니다!"

check64bit(2n ** 32n);
// 예상 출력: 4294967296n
~~~

## BigInt.prototype.toLocaleString()
``BigInt`` 값의 ``toLocaleString()`` 메소드는 이 BigInt를 언어별로 표현한 문자열을 반환합니다. ``Intl.NumberFormat API`` 지원 구현에서 이 메서드는 단순히 ``Intl.NumberFormat``을 호출합니다.  
  
많은 숫자의 형식을 지정하는 경우 ``Intl.NumberFormat`` 객체를 만들고 해당 ``format()`` 메서드에서 제공하는 기능을 사용하는 것이 좋습니다.
~~~js
const bigint = 123456789123456789n;

// 수천년 동안 독일어 사용 기간
console.log(bigint.toLocaleString('de-DE'));
// 예상 출력: "123.456.789.123.456.789"

// 통화 형식 요청
console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// 예상 출력: "123.456.789.123.456.789,00 €"
~~~

## BigInt.prototype.toString()
``BigInt`` 값의 ``toString()`` 메서드는 지정된 ``BigInt`` 값을 나타내는 문자열을 반환합니다. 후행 "n"은 문자열의 일부가 아닙니다.
~~~js
console.log(1024n.toString());
// 예상 출력: "1024"

console.log(1024n.toString(2));
// 예상 출력: "10000000000"

console.log(1024n.toString(16));
// 예상 출력: "400"
~~~

## BigInt.prototype.valueOf()
``BigInt`` 값의 ``valueOf()`` 메소드는 ``BigInt`` 객체의 래핑된 기본 값을 반환합니다.
~~~js
console.log(typeof Object(1n));
// 예상 출력: "object"

console.log(typeof Object(1n).valueOf());
// 예상 출력: "bigint"
~~~