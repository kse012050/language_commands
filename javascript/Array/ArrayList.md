# Array(배열)의 함수 간단 정리

## Propertise

### Array.prototype.length
배열의 길이를 반환합니다.

## Methods

### Array.prototype.at()
배열에서 해당 값에 해당하는 인텍스의 요소를 반환한다.  
양수와 __음수(뒤에서 부터)__ 모두 지정 가능 
~~~js
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// 예상 출력: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// 예상 출력: "Using an index of -2 item returned is 130"
~~~

### Array.prototype.concat() (concat -> 연결)
두 개 이상의 배열을 병합합니다
~~~js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// 예상 출력 : Array ["a", "b", "c", "d", "e", "f"]
~~~

### Array.prototype.copyWithin()  (copyWithin -> 내부 복사)
``copyWithin()`` 메서드는 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다. 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.
~~~js
const array1 = ['a', 'b', 'c', 'd', 'e'];

// 인덱스 3에 있는 요소를 인덱스 0에 복사
console.log(array1.copyWithin(0, 3, 4));
// 예상 출력: Array ["d", "b", "c", "d", "e"]

// 인덱스 3부터 끝까지 모든 요소를 인덱스 1에 복사
console.log(array1.copyWithin(1, 3));
// 예상 출력: Array ["d", "d", "e", "d", "e"]
~~~

### Array.prototype.entries()    (entries -> 항목)
배열의 각 인덱스에 대한 키 / 값 쌍을 포함 하는 새 Array lterator 개체를 반환합니다.
~~~js
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// 예상 출력: Array [0, "a"]

console.log(iterator1.next().value);
// 예상 출력: Array [1, "b"]
~~~


### Array.prototype.every() (every -> ...마다)
배열의 모든 요소가 제공된 함수(조건?)에 충족하는지 판단합니다.
~~~js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// 예상 출력: true
~~~

### Array.prototype.fill()  (fill -> 가득 따르다)
배열의 값을 변경 합니다.
~~~js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// 예상 출력: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// 예상 출력: [1, 5, 5, 5]

console.log(array1.fill(6));
// 예상 출력: [6, 6, 6, 6]
~~~

### Array.prototype.filter()
제공된 함수(조건?) 에 의해 구현 된 테스트를 통과하는 모든 요소로 새로운 배열을 만듭니다.
~~~js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// 예상 출력: Array ["exuberant", "destruction", "present"]
~~~

### Array.prototype.find()  (find -> 찾기)
제공된 테스트 함수(조건)을 충족하는 배열의 첫 번째 요소 값을 반환합니다.
~~~js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// 예상 출력: 12
~~~

### Array.prototype.findIndex()
제공된 테스트 함수(조건)을 충족하는 배열의 첫 번째 요소의 인덱스 값을 반환합니다.
~~~js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// 예상 출력: 3
~~~

### Array.prototype.flat()
배열안의 배열을 풀어줍니다?
~~~js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// 예상 출력: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// 예상 출력: [0, 1, 2, [3, 4]]
~~~

### Array.prototype.flatMap()
??

### Array.prototype.forEach()
배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.
~~~js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// 예상 출력: "a"
// 예상 출력: "b"
// 예상 출력: "c"
~~~

### Array.from()    ...에서
유사 배열 객체나 반복 가능한 객체를 복사해 새로운 Array객체를 만듭니다.
~~~js
console.log(Array.from('foo'));
// 예상 출력: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// 예상 출력: Array [2, 4, 6]
~~~

### Array.prototype.includes()      포함
배열이 특정 요소를 포함하고 있는지 판별합니다.
~~~js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// 예상 출력: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// 예상 출력: true

console.log(pets.includes('at'));
// 예상 출력: false
~~~

### Array.prototype.indexOf()
배열에서 지정된 요소를 찾고 인덱스 번호(몇번째에 있는지)를 반환합니다.  
존재하지 않으면 -1을 반환합니다.
~~~js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// 예상 출력: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// 예상 출력: 4

console.log(beasts.indexOf('giraffe'));
// 예상 출력: -1
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
// 예상 출력: "Fire,Air,Water"

console.log(elements.join(''));
// 예상 출력: "FireAirWater"

console.log(elements.join('-'));
// 예상 출력: "Fire-Air-Water"
~~~

### Array.prototype.keys()
배열의 각 인덱스를 키 값으로 가지는 새로운 배열(Array Iterator) 객체를 반환합니다
~~~js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// 예상 출력: 0
// 예상 출력: 1
// 예상 출력: 2
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
// 예상 출력: Array [2, 8, 18, 32]
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
// 예상 출력: "tomato"

console.log(plants);
// 예상 출력: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// 예상 출력: Array ["broccoli", "cauliflower", "cabbage"]
~~~

### Array.prototype.push()
배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
~~~js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// 예상 출력: 4
console.log(animals);
// 예상 출력: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// 예상 출력: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
~~~

### Array.prototype.reduce()  아직 잘 모르겠다 따로 공부해야할 것 같다
배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환합니다.
~~~js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// 예상 출력: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// 예상 출력: 15
~~~

### Array.prototype.reduceRight()   ??

### Array.prototype.reverse()   ( reverse -> 역전 )
배열의 순서를 반전합니다. 첫번째 요소는 마지막요소로, 마지막요소는 첫번째 요소로
~~~js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// 예상 출력: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// 예상 출력: "reversed:" Array ["three", "two", "one"]

// 주의 : reverse는 파괴적입니다. 원래 배열을 변경합니다.
console.log('array1:', array1);
// 예상 출력: "array1:" Array ["three", "two", "one"]
~~~

### Array.prototype.shift()
배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.  
이 메서드는 배열의 길이를 변하게 합니다.
~~~js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// 예상 출력: Array [2, 3]

console.log(firstElement);
// 예상 출력: 1
~~~

### Array.prototype.slice()   ( slice -> 일부분)
어떤 배열의 begin(시작) 부터 end까지 (end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.  
원본 배열은 바뀌지 않습니다
~~~js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// 예상 출력: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// 예상 출력: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// 예상 출력: Array ["bison", "camel", "duck", "elephant"]
~~~

### Array.prototype.some()    ( some-> 약간 )
배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 합니다.
> __참고 :__ 빈 배열에서 호출하면 무조건 ``false``를 반환합니다.
~~~js
const array = [1, 2, 3, 4, 5];

// 요소가 짝수인지 확인
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// 예상 출력: true
~~~
다음 예제는 배열 내 요소 중 하나라도 10보다 큰지 판별합니다.
~~~js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
~~~

### Array.prototype.sort()    ( sort->종류 )
배열의 요소를 적절한 위치에 __정렬__ 한 후 그 배열을 반환합니다.  
정렬은 [stable sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) 가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다
~~~js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// 예상 출력: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// 예상 출력: Array [1, 100000, 21, 30, 4]
~~~

### Array.prototype.splice()  ( splice-> 접착 )
기존 요소를 __삭제__ 또는 __교체__ 하거나 __새 요소__ 를 추가하여 배열의 내용을 변경합니다.
~~~js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// 인덱스 1에 삽입
console.log(months);
// 예상 출력: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// 인덱스 4에서 요소 1 개를 대체합니다.
console.log(months);
// 예상 출력: Array ["Jan", "Feb", "March", "April", "May"]
~~~

### Array.prototype.toLocaleString()
??

### Array.prototype.toString()
지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.
~~~js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// 예상 출력: "1,2,a,1a"
~~~

### Array.prototype.unshift()
새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
~~~js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// 예상 출력: 5

console.log(array1);
// 예상 출력: Array [4, 5, 1, 2, 3]
~~~

### Array.prototype.values()
배열의 각 인덱스에 대한 값을 가지는 새로운 Array Iterator 객체를 반환합니다.

[내용출처 MDN Array의 Methods를 간단하게 정리 중이다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)