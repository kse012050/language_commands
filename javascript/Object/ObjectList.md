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

### Object.assign() (assign 양수인)
``source`` 를 복사해 ``target``에 붙여넣는다  
단, 동일한 ``key`` 값이 있으면 ``value``를 덮어 씌운다
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

### Object.entries() (entries 항목)
``Object.entries()`` 메서드는 ``for...in``와 같은 순서로 주어진 객체 자체의 enumerable 속성 ``[key, value]`` 쌍의 배열을 반환합니다. 
~~~js

const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

Object.entries(object1).map(([key, value])=>{
    console.log(`${key}: ${value}`);

})
// 예상 출력:
// "a: somestring"
// "b: 42"
~~~

### Object.keys()
``Object.keys()`` 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
~~~js
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.keys(object1));
// 예상 출력: Array ["a", "b", "c"]
Object.keys(object1).map((key)=>{
    console.log(key);
})
// 예상 출력:
// a
// b
// c
~~~

### Object.values()
~~~js
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.values(object1));
// 예상 출력: Array ["somestring", 42, false]
Object.values(object1).map((value)=>{
    console.log(value);
})
// 예상 출력:
// 'somestring'
// 42
// false
~~~

### Object.fromEntries
``Object.fromEntries`` 메서드는 키값 쌍의 목록을 객체로 바꿉니다
~~~js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// 예상 출력: Object { foo: "bar", baz: 42 }
~~~