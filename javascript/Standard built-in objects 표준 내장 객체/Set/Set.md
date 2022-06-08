# Set
__``Set``__ 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.

## 설명
``Set`` 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다. 하나의 ``Set`` 내 값은 한 번만 나타날 수 있습니다. 즉, 어떤 값은 그 ``Set`` 콜렉션 내에서 유일합니다.

### 값 같음
``Set`` 내의 값은 유일해야 하기 때문에 값이 같은지 검사를 수행합니다. 이전 ECMAScript 명세에서는 검사 알고리즘이 ``===`` 연산자와는 다른 것이었습니다. 특히,`` +0 === -0``이었지만 ``Set``에서는 ``+0``과 ``-0``이 다른 값이었습니다. 그러나 이는 ECMAScript 2015 명세에서 변경되었습니다. 브라우저 호환성의 "Key equality for -0 and 0"을 참고하세요.  
  
NaN과 undefined도 ``Set``에 저장할 수 있습니다. 원래 ``NaN !== NaN``이지만, ``Set``에서 ``NaN``은 ``NaN``과 같은 것으로 간주됩니다.

## 생성자 
### Set()
새 Set 개체를 만듭니다.

## 정적 속성
### [get Set[@@species] (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species)
파생 객체를 생성하는데 사용하는 생성자 함수입니다.

## 인스턴스 속성

### [Set.prototype.size](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/size)
Set 개체의 값 수를 반환합니다.

### 인스턴스 메서드
#### [Set.prototype.add(value)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/add)
``Set`` 개체에 ``값``을 추가합니다. 값이 추가된 ``Set`` 개체를 반환합니다.

#### [Set.prototype.clear()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)
Set 개체에서 모든 요소를 제거합니다.

#### [Set.prototype.delete(value)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)
값과 연결된 요소를 제거하고 요소가 성공적으로 제거되었는지 여부를 확인하는 부울을 반환합니다. Set.prototype.has(value)는 나중에 false를 반환합니다.

#### [Set.prototype.has(value)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
요소가 Set 개체에 주어진 값으로 존재하는지 여부를 확인하는 부울을 반환합니다.

## 예제
### ``Set`` 객체 사용
~~~js
var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o와 다른 객체를 참조하므로 괜찮음

mySet.has(1); // true
mySet.has(3); // false, 3은 set에 추가되지 않았음
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // set에서 5를 제거함
mySet.has(5);    // false, 5가 제거되었음

mySet.size; // 4, 방금 값을 하나 제거했음
console.log(mySet);// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}
~~~

### Set 반복
~~~js
// set 내 항목에 대해 반복
// 순서대로 항목을 (콘솔에) 기록: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// 순서대로 항목을 기록: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item);

// 순서대로 항목을 기록: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item);

// 순서대로 항목을 기록: 1, "some text", {"a": 1, "b": 2}
// (여기서 key와 value는 같음)
for (let [key, value] of mySet.entries()) console.log(key);

// Set 객체를 배열 객체로 변환 (Array.from으로)
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

// 다음도 HTML 문서에서 실행하는 경우 작동함
mySet.add(document.body);
mySet.has(document.querySelector('body')); // true

// Set과 Array 사이 변환
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// 교집합은 다음으로 흉내(simulate)낼 수 있음
var intersection = new Set([...set1].filter(x => set2.has(x)));

// 차집합은 다음으로 흉내낼 수 있음
var difference = new Set([...set1].filter(x => !set2.has(x)));

// forEach로 set 항목 반복
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
~~~

### 기본 집합 연산 구현
~~~js
Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

setA.isSuperset(setB); // => true
setA.union(setC); // => Set [1, 2, 3, 4, 5, 6]
setA.intersection(setC); // => Set [3, 4]
setA.difference(setC); // => Set [1, 2]
~~~

### Array 객체와의 관계
~~~js
var myArray = ['value1', 'value2', 'value3'];

// Array를 Set으로 변환하기 위해서는 정규 Set 생성자 사용
var mySet = new Set(myArray);

mySet.has('value1'); // true 반환

// set을 Array로 변환하기 위해 전개 연산자 사용함.
console.log([...mySet]); // myArray와 정확히 같은 배열을 보여줌
~~~

## 사용 예
배열의 중복 값을 제거 해준다
~~~js
var array = [1,1,1,2,3,3,3,2,2,4,4,5,6,7,7,8,67,6]
var result = new Set(array);
console.log(result);
// Set(9)
// [[Entries]]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// 6: 7
// 7: 8
// 8: 67
// size: 9
~~~

[내용출처 MDN Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)