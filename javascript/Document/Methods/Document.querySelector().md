# Document.querySelector()
``Document.querySelector()``는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 ``Element``를 반환합니다. 일치하는 요소가 없으면 ``null``을 반환합니다.

> __참고__ : 탐색은 깊이우선(depth-first) 전위(pre-order) 순회로, 문서의 첫 번째 요소부터 시작해 자식 노드의 수를 기준으로 순회합니다.

## 구문
~~~js
document.querySelector(selectors);
~~~

### 매개변수

#### selectors
나 이상의 선택자를 포함한 ``DOMString``. 유효한 CSS 선택자여야만 하며 아닐 경우 ``SYNTAX_ERR`` 예외가 발생합니다. [선택자로 DOM 요소 선택하기](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors) 문서를 참고해 선택자와 선택자 작성 방법을 더 알아보세요.  
  
> __참고__ : CSS 표준 구문이 포함하는 문자가 아닌 경우 역슬래시로 이스케이프해야 합니다. JavaScript 또한 역슬래시로 이스케이프를 하기 때문에 특히 주의를 기울여야 합니다. 자세한 내용은 특수 문자 이스케이프 항목을 참고하세요.

#### 반환 값
제공한 ``CSS 선택자``를 만족하는 첫 번째 ``Element`` 객체. 결과가 없다면 ``null``.

선택자를 만족하는 모든 요소의 목록이 필요하다면 [querySelectorAll()](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)을 대신 사용하세요.

#### 예외

##### SYNTAX_ERR
``selectors``의 구문이 유효하지 않음.

## 참고
만약 selector가 ID 선택자인데, 해당 ID를 잘못 사용하여 문서 내에 여러 번 사용했으면 첫 번째로 그 ID를 사용한 요소를 반환합니다.

## 예제

### 클래스를 만족하는 첫 번째 요소 검색
아래 예제는 문서에서 ``"myclass"``라는 클래스를 사용하는 첫 번째 요소를 반환합니다.

~~~js
var el = document.querySelector(".myclass");
~~~

### 좀 더 복잡한 선택자
아래 예제처럼 정말 강력한 선택자도 사용할 수 있습니다. 예제의 결과는 클래스가 "``user-panel main``"인 ``<div>(<div class="user-panel main">``) 안의, 이름이 "``login``"인 ``<input>`` 중 첫 번째 요소입니다.

~~~js
var el = document.querySelector("div.user-panel.main input[name=login]");
~~~

## 정리
``querySelector()`` 는 무조건 하나의 객체만 가지고 온다.  
``querySelectorAll()`` 여러개의 선택자를 리스트(배열)로 받아 온다.

[내용출처 MDN Document.querySelector()](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)