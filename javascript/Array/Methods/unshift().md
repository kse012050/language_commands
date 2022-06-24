# Array.prototype.unshift()
__``unshift()``__ 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

## 시도해보기
~~~js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
~~~

## 문법
~~~js
arr.unshift([...elementN])
~~~

### 매개변수
#### elementN
배열 맨 앞에 추가할 요소.
### 반환 값
메서드를 호출한 배열의 새로운 length 속성.

## 설명
unshift 메서드는 배열 형태의 객체 시작점에 주어진 값을 삽입합니다.  
  
unshift는 제네릭하도록 설계되었으며, 배열 형태를 가진 객체가 호출하거나 객체에 적용할 수 있습니다. length 속성을 가지지 않고, 대신 마지막 요소를 0부터 시작하는 순차적 인덱스로만 나타내는 객체에서는 의도한 것과 다르게 행동할 수 있습니다.

## 예제
~~~js
var arr = [1, 2];

arr.unshift(0); // 호출 결과는 3, 새 배열 길이
// arr은 [0, 1, 2]입니다

arr.unshift(-2, -1); // = 5
// arr은 [-2, -1, 0, 1, 2]입니다

arr.unshift([-3]);
// arr은 [[-3], -2, -1, 0, 1, 2]입니다
~~~

[내용출처 MDN unshift() 배열 맨 앞에 데이터 추가 push와 비슷](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)