# Array.from()

## 시도해보기
__``Array.from()``__ 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운``Array`` 객체를 만듭니다.

~~~js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
~~~

## 구문
~~~js
Array.from(arrayLike[, mapFn[, thisArg]])
~~~

### 매개변수

#### arrayLike
배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체.

#### mapFn  (Optional)
배열의 모든 요소에 대해 호출할 맵핑 함수.

#### thisArg    (Optional)
mapFn 실행 시에 this로 사용할 값.

### 반환 값
새로운 ``Array`` 인스턴스

## 설명
다음과 같은 경우에 ``Array.from()``으로 새 ``Array``를 만들 수 있습니다.  
  
- 유사 배열 객체 (length 속성과 인덱싱 된 요소를 가진 객체)
- 순회 가능한 객체 (Map, Set 등객체의 요소를 얻을 수 있는 객체)  
  
``Array.from()``은 선택 매개변수인 ``mapFn``를 가지는데, 배열(혹은 배열 서브클래스)의 각 요소를맵핑할 때 사용할 수 있습니다. 즉,``Array.from(obj, mapFn, thisArg)``는 중간에 다른 배열을 생성하지 않는다는 점을 제외하면 ``Array.from(obj).map(mapFn, thisArg)``와 같습니다. 이 특징은 typed arrays와 같은 특정 배열 서브클래스에서 중간 배열 값이 적절한 유형에 맞게 생략되기 때문에 특히 중요합니다.  
  
``from()`` 메서드의 ``length`` 속성은 1입니다.  
  
ES2015 이후, 클래스 구문은 내장 및 새 클래스의 상속을 가능케 했습니다. 그 결과로 Array.from과 같은 정적 메서드는 ``Array``의 서브클래스에 의해 상속되며, ``Array`` 대신 자신의 인스턴스를 만듭니다.

## 예제
### ``String``에서 배열 만들기
~~~js
Array.from('foo');
// ["f", "o", "o"]
~~~

### ``Map`` 에서 배열 만들기
~~~js
const m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
~~~

### 배열 형태를 가진 객체(``arguments``)에서 배열 만들기
~~~js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [1, 2, 3]
~~~

### ``Array.from``과 화살표 함수 사용하기
~~~js
// 화살표 함수를 지도 함수로 사용하여
// 요소 조작
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// 일련의 숫자 생성
// 배열은 각 위치에 'undefined'로 초기화되므로,
// 아래의 'v' 값은 'undefined'가 됩니다.
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
~~~

### 시퀀스 생성기(range)
~~~js
// 시퀀스 생성기 함수(일반적으로 "범위"라고 함, 예: Clojure, PHP 등)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// 숫자 범위 0..4 생성
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// 2단계로 숫자 범위 1..10 생성
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Array.from을 사용하여 알파벳을 생성하고 시퀀스로 정렬되는 것을 사용합니다.
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
~~~

[내용출처 MDN 배열로 만든다](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)