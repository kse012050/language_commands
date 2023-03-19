# Map.prototype.set()
__``set()``__ 메서드는 ``Map`` 객체에서 주어진 키와 값을 추가하거나 업데이트합니다.

## 시도해보기
~~~js
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// 예상 출력: "foo"

console.log(map1.get('baz'));
// 예상 출력: undefined
~~~

## 구문
~~~js
set(key, value)
~~~

### 매개변수
#### key
``Map`` 객체에 추가되는 요소의 키. 이 키는 모든 종류의 JavaScript 타입(모든 원시형 혹은 모든 Javascript 객체)이 될 수 있습니다.

#### value
``Map `` 객체에 추가되는 요소의 값. 이 값은 모든 종류의 JavaScript 타입(모든 종류의 원시형 혹은 모든 종류의 Javascript 객체)이 될 수 있습니다.

### 반환 값
``Map`` 객체.

## 예제
### set() 사용하기
~~~js
const myMap = new Map();

// map에 새로운 요소를 추가합니다
myMap.set('bar', 'foo');
myMap.set(1, 'foobar');

// map에 요소를 업데이트 합니다
myMap.set('bar', 'baz');
~~~

### 연속으로 set() 사용
set()메서드는 같은 Map 객체를 반환하기 때문에 아래와 같이 연속으로 호출할 수 있습니다.
~~~js
// 연결을 사용하여 지도에 새 요소를 추가합니다.
myMap.set('bar', 'foo')
  .set(1, 'foobar')
  .set(2, 'baz');
~~~

[내용출처 MDN Map에 값 추가](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/set)