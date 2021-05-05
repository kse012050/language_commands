# Array(배열)의 함수 간단 정리

## Propertise

### Array.prototype.length
배열의 길이를 반환합니다.

## Methods

### Array.prototype.concat() (concat -> 연결)
두 개 이상의 배열을 병합합니다
~~~js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// 예상 출력 : Array ["a", "b", "c", "d", "e", "f"]
~~~

### Array.prototype.copyWithin()    (entries -> 항목)
배열의 각 인덱스에 대한 키 / 값 쌍을 포함 하는 새 Array lterator 개체를 반환합니다.
~~~js
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
~~~

### Array.prototype.every() (every -> ...마다)
배열의 모든 요소가 제공된 함수(조건?)에 충족하는지 판단합니다.
~~~js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
~~~

### Array.prototype.fill()  (fill -> 가득 따르다)
배열의 값을 변경 합니다.
~~~js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
~~~

### Array.prototype.filter()
제공된 함수(조건?) 에 의해 구현 된 테스트를 통과하는 모든 요소로 새로운 배열을 만듭니다.
~~~js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
~~~

### Array.prototype.find()  (find -> 찾기)
제공된 테스트 함수(조건)을 충족하는 배열의 첫 번째 요소 값을 반환합니다.
~~~js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
~~~

### Array.prototype.findIndex()
제공된 테스트 함수(조건)을 충족하는 배열의 첫 번째 요소의 인덱스 값을 반환합니다.
~~~js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
~~~

### Array.prototype.flat()
배열안의 배열을 풀어줍니다?
~~~js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
~~~

### Array.prototype.flatMap()
??

### Array.prototype.forEach()
배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.
~~~js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
~~~

[내용출처 MDN Array의 Methods를 간단하게 정리 중이다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)