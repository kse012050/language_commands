# EventTarget.addEventListener()
[``EventTarget``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget)의 __addEventListener()__ 메서드는 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정합니다. 일반적인 대상은 [``Element``](https://developer.mozilla.org/ko/docs/Web/API/Element), [``Document``](https://developer.mozilla.org/ko/docs/Web/API/Document), [``Window``](https://developer.mozilla.org/ko/docs/Web/API/Window) 지만, [``XMLHttpRequest``](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 와 같이 이벤트를 지원하는 모든 객체를 대상으로 지정할 수 있습니다.  
  
``addEventListener()`` 는 [``EventTarget``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget) 의 주어진 이벤트 유형에, [``EventListener``](https://developer.mozilla.org/ko/docs/Web/API/EventListener)를 구현한 함수 또는 객체를 이벤트 처리기 목록에 추가해 작동합니다.

## 구문
~~~js
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only
~~~

### 매개변수

#### __``type``__ 
반응할 [이벤트 유형](https://developer.mozilla.org/ko/docs/Web/Events) 을 나타내는 대소문자 구분 문자열

#### __``listener``__ 
지정된 타입의 이벤트가 발생했을 때, 알림([``Evnnt``](https://developer.mozilla.org/ko/docs/Web/API/Event) 인터페이스를 구현하는 객체)을 받는 객체입니다. [``EventListener``](https://developer.mozilla.org/ko/docs/Web/API/EventListener) 인터페이스 또는 JavaScript [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)를 구현하는 객체영만 합니다. 콜백 자체에 대한 자세한 내용은 [the Event listener callback](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback)를 참조하세요

#### __``options``__ 
이벤트 리스너에 대한 특성을 지정하는 옵션 객체입니다. 사용 가능한 옵션은 다음과 같습니다
- ``capture`` : DOM 트리의 하단에 있는 ``EventTarget`` 으로 전송하기 전에, 등록된 ``listener`` 로 이 타입의 이벤트의 전송여부를 나타내는 [``Boolean``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 입니다
- ``once`` : 리스너를 추가한 후 한 번만 호출되어야 함을 나타내는 [``Boolean``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 입니다. ``true``이면 호출할 때 ``listener`` 가 자동으로 삭제됩니다.
- ``passive`` : ``true``일 경우, ``listener``에서 지정한 함수가 [``preventDefault()``]() 를 호출하지 않음을 나타내는 [``Boolean``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 입니다. passive listener 가 ``preventDefault()``를 호출하면 user agent는 콘솔 경고를 생성하는 것 외의 작업은 수행하지 않습니다. 자세한 내용은 [Improving scrolling performance with passive listeners](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners)를 참조하세요
- ``mozSystemGroup`` : listener를 시스템 그룹에 추가해야함을 나타내는 [``Boolean``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 입니다. 오직 XBL 혹은 파이어폭스 브라우저의 [chrome](https://developer.mozilla.org/ko/docs/Glossary/Chrome) 에서 실행되는 코드에서만 사용할 수 있습니다.