# Map() constructor
``Map()`` __constructor(생성자)__ 는 ``Map`` 객체를 생성합니다.

## 구문
~~~js
new Map()
new Map(iterable)
~~~
> __참고__: ``Map()``은 오직 ``new``로만 생성할 수 있습니다. ``new`` 없이 호출하면 ``TypeError``가 발생합니다.

## 매개변수
### iterable ( Optional )
하나의 ``Array`` 혹은 키-값 쌍인 요소를 가진 반복 가능 객체. (예를 들어 ``[[ 1, 'one' ],[ 2, 'two' ]]``과 같이 2개의 요소를 가진 배열). 각각의 키-값 쌍은 새로운 Map에 추가됩니다.

## 예제
### 새로운 Map 생성하기
~~~js
const myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
~~~

[내용출처 Map() 생성자 Map이라는게.. 배열 , 오브젝트 같은 게 또 있는 건가](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)