# Map.prototype.size
``size`` 접근자 속성은 ``Map`` 객체의 요소 수를 반환합니다.

## 시도해보기
~~~js
const map1 = new Map();

map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');

console.log(map1.size);
// 예상 출력: 3
~~~

## 설명
``size`` 값은 ``Map`` 객체에 몇 개의 항목이 있는지 나타내는 정수입니다. ``size`` 설정 접근자 함수는 ``undefined`` 이므로 이 속성을 변경할 수 없습니다.

## 예제
### size 사용하기
~~~js
const myMap = new Map();
myMap.set('a', 'alpha');
myMap.set('b', 'beta');
myMap.set('g', 'gamma');

console.log(myMap.size); // 3
~~~

[내용출처 MDN map 크기 (length와 비슷)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/size)