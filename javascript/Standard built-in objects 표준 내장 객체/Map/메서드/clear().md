# Map.prototype.clear()
``clear()`` 메서드는 ``Map`` 객체의 모든 요소를 제거합니다.

## 시도해보기
~~~js
    const map1 = new Map();

    map1.set('bar', 'baz');
    map1.set(1, 'foo');

    console.log(map1.size);
    // 예상 출력: 2

    map1.clear();

    console.log(map1.size);
    // 예상 출력: 0
~~~

## 구문
~~~js
    clear()
~~~

### 반환 값
``undefined``

## 예제
### clear() 사용하기
~~~js
    const myMap = new Map();
    myMap.set('bar', 'baz');
    myMap.set(1, 'foo');

    console.log(myMap.size);  // 2
    console.log(myMap.has('bar')); // true

    myMap.clear();

    console.log(myMap.size);  // 0
    console.log(myMap.has('bar')); // false
~~~

[내용출처 MDN clear() Map 안의 내용 모두 제거](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)