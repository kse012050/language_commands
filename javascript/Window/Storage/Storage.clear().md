# Storage.clear()
Storage 인터페이스의 __clear()__ 메서드는 지정된 Storage 객체에 저장된 모든 키를 지웁니다.

## Syntax
~~~js
storage.clear();
~~~

### Return value
undefined

## Examples
다음 함수는 로컬 저장소에 3개의 데이터 항목을 생성한 다음 clear()를 사용하여 삭제합니다.
~~~js
function populateStorage() {
    localStorage.setItem('bgcolor', 'red');
    localStorage.setItem('font', 'Helvetica');
    localStorage.setItem('image', 'miGato.png');

    localStorage.clear();
}
~~~
> 참고: 실제 사례는 [Web Storage 데모](https://mdn.github.io/dom-examples/web-storage/)를 참조하십시오.

[내용출처 MDn Storage.clear()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)