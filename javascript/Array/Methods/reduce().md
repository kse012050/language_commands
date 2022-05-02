# Array.prototype.reduce()
## Try it
__``reduce()``__ 메서드는 배열의 각 요소에 대해 주어진 __리듀서__ (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

~~~js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
~~~
__리듀서__ 함수는 네 개의 인자를 가집니다.
1. 누적값
2. 현재값
3. 인덱스
4. 요소

리듀서 함수의 반환 값은 누적값에 할당되고, 누적값는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

## 구문
~~~js
arr.reduce(callback[, initialValue])

arr.reduce(function(누적값, 현재값, 인덱스, 요소) , 초기값)
~~~

### 매개변수
#### callback
배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.

##### accumulator
누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 ``initialValue``를 제공한 경우에는 ``initialValue``의 값입니다.

##### currentValue
처리할 현재 요소.

##### currentIndex (Optional)
처리할 현재 요소의 인덱스. ``initialValue``를 제공한 경우 0, 아니면 1부터 시작합니다.

##### array (Optional)
reduce()를 호출한 배열.

#### initialValue (Optional)
``callback``의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 ``reduce()``를 호출하면 오류가 발생합니다.

### 반환 값
누적 계산의 결과 값

## 설명
``reduce()``는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행하는데, 콜백 함수는 다음의 네 인수를 받습니다:

- accumulator (누적값)
- currentValue (현재값)
- currentIndex (인덱스)
- array (요소)

콜백의 최초 호출 때 __누적값__ 와 __현재값__ 는 다음 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 __초기값__ 를 제공한 경우, __누적값__ 는 __초기값__ 와 같고 __현재값__ 는 배열의 첫 번째 값과 같습니다. __초기값__ 를 제공하지 않았다면, __누적값__ 는 배열의 첫 번째 값과 같고 __현재값__ 는 두 번째와 같습니다.

> __참고__: ``초기값``를 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. ``초기값``를 제공하면 인덱스 0에서 시작합니다.  
  
배열이 비어있는데 ``초기값``도 제공하지 않으면 __TypeError__ 가 발생합니다. 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 ``초기값``를 제공되지 않은 경우, 또는 ``초기값``는 주어졌으나 배열이 빈 경우엔 그 단독 값을 ``callback`` 호출 없이 반환합니다.  
  
다음의 예제처럼 ``초기값``을 제공하지 않으면 출력 가능한 형식이 세 가지이므로, 보통 초기값을 주는 것이 더 안전합니다.

~~~js
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// 초기값 없이 reduce()
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce로 개선 - 비었거나 더 큰 배열에서도 동작함
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
~~~

### reduce() 작동  방식
다음의 예제를 생각해 봅시다.
~~~js
[0, 1, 2, 3, 4].reduce(function(누적값, 현재값, 인덱스, array) {
  return 누적값 + 현재값;
});
// 콜백은 4번 호출됩니다. 각 호출의 인수와 반환값은 다음과 같습니다.

//  callback  누적값 현재값 인덱스      array           반환값 
// 1번째 호출	0	   1	 1      [0, 1, 2, 3, 4]	    1
// 2번째 호출	1	   2	 2      [0, 1, 2, 3, 4]	    3
// 3번째 호출	3	   3	 3      [0, 1, 2, 3, 4]	    6
// 4번째 호출	6	   4	 4      [0, 1, 2, 3, 4]	    10
~~~

``reduce()``가 반환하는 값으로는 마지막 콜백 호출의 반환값(``10``)을 사용합니다.  
  
완전한 함수 대신에 화살표 함수를 제공할 수도 있습니다. 아래 코드는 위의 코드와 같은 결과를 반환합니다.

~~~js
[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
~~~

reduce()의 두 번째 인수로 초기값을 제공하는 경우, 결과는 다음과 같습니다:

~~~js
[0, 1, 2, 3, 4].reduce(function(누적값, 현재값, 인덱스, array) {
  return 누적값 + 현재값;
}, 10);
//  callback  누적값 현재값 인덱스      array           반환값 
// 1번째 호출	10	   0	  0	    [0, 1, 2, 3, 4]	    10
// 2번째 호출	10	   1	  1	    [0, 1, 2, 3, 4]	    11
// 3번째 호출	11	   2	  2	    [0, 1, 2, 3, 4]	    13
// 4번째 호출	13	   3	  3	    [0, 1, 2, 3, 4]	    16
// 5번째 호출	16	   4	  4	    [0, 1, 2, 3, 4]	    20
~~~
이 때 ``reduce()``가 결과로 반환하는 값은 ``20``입니다.

## 예제
### 배열의 모든 값 합산
~~~js
var sum = [0, 1, 2, 3].reduce(function (누적값, 현재값) {
  return 누적값 + 현재값;
}, 0);
// sum is 6
~~~

화살표 함수로도 작성할 수 있습니다.
~~~js
var total = [ 0, 1, 2, 3 ].reduce(
  ( 누적값, 현재값 ) => 누적값 + 현재값,
  0
);
~~~

### 객체 배열에서의 값 합산
객체로 이루어진 배열에 들어 있는 값을 합산하기 위해서는 __반드시__ 초기값을 주어 각 항목이 여러분의 함수를 거치도록 해야 합니다.

~~~js
var 초기값 = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (누적값, 현재값) {
    return 누적값 + 현재값.x;
},초기값)

console.log(sum) // logs 6
~~~

화살표 함수(arrow function)로도 작성할 수 있습니다: 

~~~js
var 초기값 = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (누적값, 초기값) => 누적값 + 초기값.x
    ,초기값
);

console.log(sum) // logs 6
~~~

### 중첩 배열 펼치기
~~~js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(누적값, 현재값) {
    return 누적값.concat(현재값);
  },
  []
);
// 펼친 결과: [0, 1, 2, 3, 4, 5]
~~~

화살표 함수로도 작성할 수 있습니다:

~~~js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( 누적값, 현재값 ) => 누적값.concat(현재값),
  []
);
~~~

### 객체 내의 값 인스턴스 개수 세기
~~~js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
~~~

### 속성으로 객체 분류하기
~~~js
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
~~~

### 확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기
~~~js
// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
~~~

### 배열의 중복 항목 제거
> 참고: [Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)과 [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)을 사용할 수 있는 환경이라면, ``let orderedArray = Array.from(new Set(myArray));``를 사용해 중복 요소를 제거할 수도 있습니다.

~~~js
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]
~~~

### 프로미스를 순차적으로 실행하기
~~~js
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200
~~~

### 함수 구성을 위한 파이프 함수
~~~js
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
~~~

### reduce()로 map() 작성
~~~js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]
~~~

[내용출처 MDN reduce() ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)