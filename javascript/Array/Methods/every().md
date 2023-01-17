# Array.prototype.every()
`every()` 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.

## 예
~~~js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
~~~

## 구문
~~~js
// 화살표 함수
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

// 콜백 함수
every(callbackFn)
every(callbackFn, thisArg)

// 인라인 콜백 함수
every(function callbackFn(element) { ... })
every(function callbackFn(element, index) { ... })
every(function callbackFn(element, index, array){ ... })
every(function callbackFn(element, index, array) { ... }, thisArg)
~~~

### 매개변수

#### callbackFn
각 요소를 시험할 함수. 다음 세 가지 인수를 받습니다.

##### element
배열에서 처리되는 현재 요소

##### index
처리할 현재 요소의 인덱스

##### array
every를 호출한 배열

#### thisArg (Optional)
callbackFn을 실행할 때 this로 사용하는 값.

### 반환 값
``callbackFn``이 모든 배열 요소에 참이면 __true__ 반환 , 참인 게 없는 경우 __false__

## 설명
사이트 참조

## 예제
### 모든 배열 요소의 크기 테스트
다음 예는 배열의 모든 요소가 10보다 더 큰지 테스트합니다.
~~~js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
~~~

### 하나의 배열이 다른 배열의 부분 집합인지 체크하기
다음은 어떤 배열의 모든 요소가 또 다른 배열에 존재하는지 테스트를 하는 예제입니다.
~~~js
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
~~~

### 초기 배열에 영향주기(수정, 추가, 삭제)
아래 예제는 배열이 수정될 때 ``every`` 메서드의 행위를 테스트합니다.
~~~js
// ---------------
// 요소 수정
// ---------------
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})

// 3회 순회하지만 앞선 2회의 순회는 수정이 일어나지 않습니다.
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// 요소 추가
// ---------------
arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// 새로운 요소가 추가된 후에도 3회 순회합니다.
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// 요소 삭제
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// 기존 요소가 `pop()` 됨에 따라 2회만 순회합니다.
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
~~~

### 배열이 아닌 객체에서 every() 호출하기
``every()`` 메서드는 ``this``의 ``length`` 속성을 읽고 마지막 혹은 ``callbackFn``이 ``false``를 리턴할때까지 정수 인덱스에 접근합니다.
~~~js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
~~~

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)