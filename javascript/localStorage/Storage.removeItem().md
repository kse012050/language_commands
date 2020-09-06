# Storage.removeItem()
인터페이스의 ``removeItem()`` 메소드는 [``Storage``](https://developer.mozilla.org/en-US/docs/Web/API/Storage) 키 이름이 전달 될 때 주어진 ``Storage`` 객체에서 해당 키가 있는 경우 해당 키를 제거 합니다. [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) 의 ``Storage`` 인터페이스는 특정 도메인의 세션 또는 로컬 스토리지에 대한 액세스를 제공합니다.  
  
주어진 키와 관련된 항목이 없으면 이 메서드는 아무 작업도 수행하지 않습니다.

## Properties 통사론  문법?
~~~js
storage.removeItem(keyName);
~~~
### Parameters 매개 변수
``KeyName``  
[``DOMString``](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) 제가 할 키의 이름을 포함

### Return Value 반환값
[``undefined``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Example 예제
다음 함수는 로컬 스토리지 내에 세 개의 데이터 항목을 생성 한 다음 데이터 항목을 제거합니다.
~~~js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');

  localStorage.removeItem('image');
}
~~~
세션 스토리지에 대해서도 똑같이 할 수 있습니다.
~~~js
function populateStorage() {
  sessionStorage.setItem('bgcolor', 'red');
  sessionStorage.setItem('font', 'Helvetica');
  sessionStorage.setItem('image', 'myCat.png');

  sessionStorage.removeItem('image');
}
~~~

[내용 출처 MDN Storage.removeItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)