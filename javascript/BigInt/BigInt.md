# BigInt
``BigInt`` 는 ``Number`` 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.

## 설명
``BigInt``는 정수 리터럴의 뒤에 ``n``을 붙이거나(``10n``) 함수 ``BigInt()``를 호출해 생성할 수 있습니다.
~~~js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n
~~~
``BigInt``와 ``Number``는 어떤 면에서 비슷하지만 중요한 차이점이 있습니다. 예컨대 ``BigInt``는 내장 ``Math`` 객체의 메서드와 함께 사용할 수 없고, 연산에서 ``Number``와 혼합해 사용할 수 없습니다. 따라서 먼저 같은 자료형으로 변환해야 합니다. 그러나, ``BigInt``가 ``Number``로 바뀌면 정확성을 잃을 수 있으니 주의해야 합니다.

### 자료형 정보
``BigInt``의 ``typeof`` 판별 결과는 ``"bigint"``입니다.
~~~js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
~~~
``Object``로 감싼 ``BigInt``는 일반적인 ``object`` 자료형으로 취급합니다.

~~~js
typeof Object(1n) === "object"; // true
~~~

### 연산자
``+``, ``*``, ``-``, ``**``,`` %`` 연산자를 ``BigInt``나 객체로 감싼 ``BigInt``에서 사용할 수 있습니다. ``비트 연산자`` 도 사용할 수 있으나, 모든 ``BigInt``는 부호를 가져야 하므로 ``>>>`` (부호 버림 오른쪽 시프트)는 사용할 수 없습니다. asm.js에서 문제를 일으키지 않도록, 단항 ``+`` 연산자도 지원하지 않습니다.

~~~js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
~~~
``/`` 연산자도 정수 연산에서 예상할 수 있는 결과를 동일하게 도출합니다. 그러나 ``BigInt``는 ``BigDecimal``이 아니므로, 연산의 결과는 언제나 소수점 이하를 버립니다. 즉, 정수가 아닌 결과는 나오지 않습니다.

[내용출처 mdn 문자를 숫자로 바꾸지만 숫자랑은 다른 타입유형](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt)