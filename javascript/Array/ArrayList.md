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

### Array.from()    ...에서
유사 배열 객체나 반복 가능한 객체를 복사해 새로운 Array객체를 만듭니다.
~~~js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
~~~

### Array.prototype.includes()      포함
배열이 특정 요소를 포함하고 있는지 판별합니다.
~~~js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
~~~

### Array.prototype.indexOf()
배열에서 지정된 요소를 찾고 인덱스 번호(몇번째에 있는지)를 반환합니다.  
존재하지 않으면 -1을 반환합니다.
~~~js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
~~~

### Array.isArray()
인자가 배열인지 판별합니다
~~~js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
~~~

### Array.prototype.join()      합치다
배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
~~~js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
~~~

### Array.prototype.keys()
배열의 각 인덱스를 키 값으로 가지는 새로운 배열(Array Iterator) 객체를 반환합니다
~~~js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
~~~

### Array.prototype.lastIndexOf()
배열에서 지정된 요소를 찾고 __뒤에서부터__ 인덱스 번호(몇번째에 있는지)를 반환합니다.  
존재하지 않으면 -1을 반환합니다.
~~~js
var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
~~~

### Array.prototype.map()
요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
~~~js
const array1 = [1, 4, 9, 16];

// 지도에 함수 전달
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
~~~

### Array.of()
인자의 수나 유형에 관계없이 가변 인자를 갖는 새 배열 인스턴스를 만듭니다.  
Array.of(7) 은 하나의 요소(7)을 가진 배열을 생성하지만 Array(7)은 length 속성이 7인 빈 배열을 생성합니다.
~~~js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
~~~

### Array.prototype.pop()
배열에서 __마지막__ 요소를 제거하고 그 요소를 반환합니다.
~~~js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
~~~

### Array.prototype.push()
배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
~~~js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
~~~


[내용출처 MDN Array의 Methods를 간단하게 정리 중이다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)