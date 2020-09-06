# Storage.getItem()
인터페이스의 __getItem()__ 메서드는 [``Storage``](https://developer.mozilla.org/en-US/docs/Web/API/Storage) 키 이름이 전달 될 때 해당 키의 값을 반환하거나 ``null`` 키가 없는 경우 지정된 ``Storage``객체에 반환합니다.

## Properties 통사론  문법?
~~~js
var aValue = storage.getItem(keyName);  
~~~
### Parameters 매개 변수
``KeyName``  
[``DOMString``](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) 키가 포함 된 이름은 당신의 값을 검색합니다.

### Return Value 반환값
[``DOMString``](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) 키 값을 포함. 키가 없으면 ``null``이 반환됩니다.

### Example 예제
다음 함수는 로컬 저장소에서 세 개의 데이터 항목을 검색 한 다음 페이지에서 사용자 지정 스타일을 설정합니다.
~~~js
function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
~~~
> __참조__ : 실제 예제에서 사용되는 것을 보려면 [웹 스토리지 데모를]() 참조하십시오.


[내용 출처 MDN Storage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)

# DOMString
__``DOMString``__ UTF-16 문자열입니다. 자바 스크립트는 이미 문자열을 사용하기 때문에, ``DOMString`` A를 직접 매핑합니다.  
  
일반적으로 ``null``를 받는 메서드 또는 매개 변수에 전달하면 ``DOMString "null"``

[내용 출처 MDN DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString)
