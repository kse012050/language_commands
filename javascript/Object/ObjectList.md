# Object(오브젝트)의 함수 간단 정리

## 속성
### constructor
Object를 생성하는 방법
~~~js
var o = {};
o.constructor === Object; // true

var o = new Object();
o.constructor === Object; // true
~~~


## 매서드

### Object.assign() <span style="font-size:14px">(assign 양수인)</span>
``source`` 를 복사해 ``target``에 붙여넣는다  
<span style="font-size:14px">단, 동일한 ``key`` 값이 있으면 ``value``를 덮어 씌운다</span>
~~~js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// 예상 출력: Object { a: 1, b: 4, c: 5 }
console.log(source);
// 예상 출력: Object { b: 4, c: 5 }
console.log(returnedTarget);
// 예상 출력: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target);
// 예상 출력: true
~~~