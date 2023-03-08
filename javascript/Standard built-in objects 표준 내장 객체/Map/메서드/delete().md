# Map.prototype.delete()
__``delete()``__ 메서드는 키로 ``Map`` 객체에서 특정 요소를 제거합니다.

## 시도해보기
~~~js
    const map1 = new Map();
    map1.set('bar', 'foo');

    console.log(map1.delete('bar'));
    // 예상 결과: true
    // True는 성공적인 제거를 나타냅니다.

    console.log(map1.has('bar'));
    // 예상 결과: false
~~~

## 구문
~~~js
    delete(key)
~~~

### 매개 변수

#### key
``Map`` 객체에서 제거할 요소의 키

### 반환 값
``Map`` 객체에서 요소가 존재하고 제거된 경우 ``true``, 그렇지 않고 해당 요소가 존재하지 않으면 ``false``를 반환합니다.

## 예제
### delete() 사용하기
~~~js
    const myMap = new Map();
    myMap.set('bar', 'foo');

    console.log(myMap.delete('bar')); // 참을 반환합니다. 성공적으로 제거되었습니다.
    console.log(myMap.has('bar')); // 거짓을 반환합니다. "bar" 요소는 더 이상 존재하지 않습니다.
~~~

[내용출처 MDN Map 특정 요소 제거](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)