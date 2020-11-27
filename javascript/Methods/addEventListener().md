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

#### __``useCapture``__
DOM 트리의 하단에 있는 ``EventTarget`` 으로 전송하기 전에, 등록된 ``listener``로 이 타입의 이벤트의 전송여부를 나타내는 [``Boolean``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 입니다. 트리에서 위쪽으로 버블링되는 이벤트는 캡처를 사용하도록, 지정된 listener를 트리거하지 않습니다. 이벤트 버블링과 갭쳐는 두 요소(엘리먼트)가 해당 이벤트에 대한 핸들(함수)를 등록한 경우, 다른 요소 내에 중첩된 요소에서 발생하는 이벤트를 전파하는 두 가지 방법 입니다. 이벤트 전파 모드는 요소가 이벤트를 수신하는 순서를 판별합니다. 자세한 설명은 [DOM Level 3 Events]() 과 [JavaScript Event order]() 를 참조하세요. 값을 지저하지 않으면, ``useCapture``의 기본값은 ``false`` 입니다.
> __참고 :__ 이벤트 타겟에 연결된 이벤트 리스너의 경우, 이벤트는 캡쳐링과 버블링 단계가 아니라 타겟 단계에 있습니다. 타겟 단계의 이벤트는 ``useCapture`` 매개변수(파라미터)와 상관없이, 그들이 등록된 순서대로 요소의 모든 리스너를 트리거합니다.  
  
> __참고 :__ ``useCapture`` 가 항상 선택사항인 것은 아닙니다. 가장 광범위한 브라우저 호환성을 위해 포함시키는 것이 좋습니다.  

#### __``wantsUntrusted``__
파이어폭스(겍코) 명세의 매개변수 입니다. ``true``의 경우, 리스너는 웹 컨텐츠의 의해 dispatch되는 합성 이벤트를 수신합니다. (기본값은 [chrome] 브라우저의 경우 ``false``, 보통의 웹 페이지에서는 ``true`` 입니다.) 이 매개 변수는 브라우저 자체 뿐만 아니라, 에드온에게도 유용합니다.

## Usage notes
### 이벤트 리스너 콜백
이벤트 리스너는 콜백 함수로 지정할 수 있습니다. 또는 <span style="color:#900; background-color:rgba(220,220,220,.5);">handleEvent()</span> 메서드가 콜백 함수 역할을 하는 [``EventListener``](https://developer.mozilla.org/ko/docs/Web/API/EventListener) 를 구현하는 객체로 지정할 수 있습니다.  
  
콜백 함수 자체는 ``handleEvent()`` 메서드와 동일한 매개 변수와 반환값을 가집니다. 즉, 콜백은 단일 매개 변수를 허용합니다 : 발생한 이벤트를 설명하는 [``Event``](https://developer.mozilla.org/ko/docs/Web/API/Event) 에 기반한 객체이며, 아무것도 반환하지 않습니다.  
  
예를들어 <span style="color:#900; background-color:rgba(220,220,220,.5);">fullscreenchange</span> 와 <span style="color:#900; background-color:rgba(220,220,220,.5);"> fullscreenerror </span>를 처리하는데 사용할 수 있는 이벤트 핸들러 콜백과 다음과 같습니다.

~~~js
function eventHandler(event) {
  if (event.type == 'fullscreenchange') {
    /* 전체 화면 토글 처리 */
  } else /* fullscreenerror */ {
    /* 전체 화면 전환 오류 처리 */
  }
}
~~~

### 옵션 지원을 안전하게 감지
이전 버전의 DOM 명세에선, ``addEventListener()``의 세 번째 매개 변수는 캡쳐의 사용여부를 나타내는 Boolean 값 이었습니다. 시간이 지남에 따라 더 많은 옵션이 필요하다는 것이 분명 해졌습니다.함수에 매개 변수를 추가하는 대신 (옵션값을 처리할 때 엄청나게 복잡한 작업), 세 번째 매개 변수는 다양한 속성을 포함 할 수 있는 객체로 변경되었습니다. 이 객체는 이벤트 리스너를 제거하는 프로세스를 구성하는 옵션값을 정의할 수 있습니다.  
  
지난 버전의 브라우저(뿐만 아니라 너무 오래된 브라우저)에서는 여전히 세 번째 매개 변수가 Boolean 이라고 가정하고 시나리오를 지능적으로 처리할 코드를 작성해야 합니다. 관심있는 각 옵션에 대해 기능 감지를 사용하여 이 작업을 수행할 수 있습니다.  
  
예를 들어서, ``passive`` 옵션을 확인하려면 다음과 같이 하세요.
~~~js
var passiveSupported = false;

try {
  var options = {
    get passive() { //이 함수는 브라우저가
                    //     수동 속성에 액세스하려고합니다.
      passiveSupported = true;
    }
  };

  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
} catch(err) {
  passiveSupported = false;
}
~~~
이렇게 하면 ``passive`` 속성(프로퍼티)에 대한 getter 함수를 사용하여 ``options`` 객체가 만들어집니다; get을 호출 할 경우 gtter는 플래그 ``passiveSupported``를 ``true``로 설정합니다. 즉, 브라우저가 ``options`` 객체의 ``passive`` 속성 값을 검사하면 ``passiveSupported``가 ``true``로 설정됩니다; 그렇지 않으면 ``false``가 유지됩니다. 그리고 ``addEventListener()``를 호출하여 가짜 이벤트 핸들러를 설정합니다. 해당 옵션을 지정하여 브라우저가 객체를 세 번째 매개 변수로 인식하면 옵션을 확인합니다. 그런 다음 ``removeEventListener()``를 호출하여 스스로 정리합니다(``handleEvent()``는 호출되지 않은 이벤트 리스너에서 무시됩니다.)  
  
이 방법으로 진원되는 옵션이 있는지 확인할 수 있습니다. 위와 비스한 ㅋ드를 사용하여 해당 옵션에 대한 getter를 추가하기 만하면 됩니다.  
  
그런 다음 문제의 옵션을 사용하는 실제 이벤트 리스너를 만들려면 다음과 같이 쓸 수 있습니다.

~~~js
someElement.addEventListener("mouseup", handleMouseUp, passiveSupported ? { passive: true } : false);
~~~
여기에서는 <span style="color:#900; background-color:rgba(220,220,220,.5);">mouseup</span> 이벤트에 대한 리스너를 ``someElement`` 요소에 추가합니다. 새 번째 매개변수의 경우 ``passiveSupported`` 가 ``true``면, ``options`` 객체를 ``passive`` : ``true`` 로 설정합니다. 그렇지 않으면, 우리는 Boolean을 전달해야 함을 알고있습니다. ``useCapture`` 매개변수의 값으로 ``false``를 전달합니다.  
  
원하는 경우 [Modernizr](https://modernizr.com/docs) 혹은 [Detect It](https://github.com/rafgraph/detect-it) 과 같은 서드파티 라이브러리를 사용하여 이러한 테스트를 수행할 수 있습니다.  
  
[Web Incubator Community Group](https://wicg.github.io/admin/charter.html)의 ``EventListenerOptions``에 대한 기사에서 더 많은 것을 배울 수 있습니다.

## 예제
### 간단한 리스너 추가
이 예제는 ``addEventListener()`` 를 사용하여 요소에 대한 마우스 클릭을 감지하는 방법을 보여줍니다.

#### HTML
~~~html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
~~~

#### js
~~~js
// 번역 결과 t2의 내용을 변경하는 기능
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// 테이블에 이벤트 리스너 추가
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
~~~

이 코드에서, ``modifyText()``는 ``addEventListener()``를 사용하여 등록된 ``click`` 이벤트에 대한 리스너입니다. 테이블의 아무곳이나 클릭하더라도, 핸들러에서 버블링되고 ``modifyText()``가 실행됩니다.

### 익명 함수와 이벤트 리스너
여기서는 익명 함수를 사용하여 매개 변수를 이벤트 리스너에 전달하는 방법을 살펴보겠습니다.

#### html
~~~html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
~~~

#### js
~~~js
// t2의 내용을 변경하는 기능
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;    
}
 
// 테이블에 이벤트 리스너를 추가하는 기능
var el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
~~~
리스너는 코드를 캡슐화 하는 익명 함수입니다. 이 익명의 함수는 실제로 이벤트에 응답하는 책임이 있는 ``modifyText()`` 함수에 매개변수를 전달 할 수 있습니다.

### 화살표 함수와 이벤트 리스너
이 예제는 화살표 함수를 사용하여 구현된 간단한 이벤트 리스너를 보여줍니다.

#### html
~~~html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
~~~

#### js
~~~js
// t2의 내용을 변경하는 기능
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;    
}
 
// 화살표 함수를 사용하여 테이블에 이벤트 리스너 추가
var el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);
~~~

화살표 함수와 익명 함수는 유사하지만 서로 다른 ``this`` 바인딩을 가집니다. 익명(모든 전통적인 자바스크립트 함수)는 그들 자신의 ``this`` 바인딩을 만들지만, 화살표 함수는 포함하고 있는 함수의 ``this`` 바인딩을 상속합니다.  
  
즉, 화살표 함수를 사용할 때 포함하고 있는 함수에서 사용중인 변수 및 상수를 이벤트 핸들러에서 사용할 수 있습니다.

### 옵션의 사용 예제

#### html
~~~html
<div class="outer">
    outer, once & none-once
    <div class="middle" target="_blank">
        middle, capture & none-capture
        <a class="inner1" href="https://www.mozilla.org" target="_blank">
            inner1, passive & preventDefault(which is not allowed)
        </a>
        <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
            inner2, none-passive & preventDefault(not open new page)
        </a>
    </div>
</div>
~~~

#### css
~~~css
.outer, .middle, .inner1, .inner2 {
    display:block;
    width:520px;
    padding:15px;
    margin:15px;
    text-decoration:none;
}
.outer{
    border:1px solid red;
    color:red;
}
.middle{
    border:1px solid green;
    color:green;
    width:460px;
}
.inner1, .inner2{
    border:1px solid purple;
    color:purple;
    width:400px;
}
~~~

#### JavaScript
~~~js
let outer  = document.getElementsByClassName('outer')[0];
let middle = document.getElementsByClassName('middle')[0];
let inner1 = document.getElementsByClassName('inner1')[0];
let inner2 = document.getElementsByClassName('inner2')[0];

let capture = {
    capture : true
};
let noneCapture = {
    capture : false
};
let once = {
    once : true
};
let noneOnce = {
    once : false
};
let passive = {
    passive : true
};
let nonePassive = {
    passive : false
};


outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event)
{
    alert('outer, once');
}
function noneOnceHandler(event)
{
    alert('outer, none-once, default');
}
function captureHandler(event)
{
    //event.stopImmediatePropagation();
    alert('middle, capture');
}
function noneCaptureHandler(event)
{
    alert('middle, none-capture, default');
}
function passiveHandler(event)
{
    // Unable to preventDefault inside passive event listener invocation.
    event.preventDefault();
    alert('inner1, passive, open new page');
}
function nonePassiveHandler(event)
{
    event.preventDefault();
    //event.stopPropagation();
    alert('inner2, none-passive, default, not open new page');
}
~~~

### Result
옵션이 어떻게 작동하는지 보려면 각각 outer, middle, inner 컨테이너를 클릭해보세요  
  

[MDN 참고](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support)

``options`` 객체에서 특정 값을 사용하기전에, 모든 브라우저의 모든 버전이 지원하는 것은 아니므로, 사용자의 브라우저가 해당 기능을 지원하는지 확인하는 것이 좋습니다. 자세한 내용은 [Safely detecting option support](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support) 을 참조하세요  
  
## Other notes (기타 참고 사항)
``addEventlistener()``는 W3C에서 지정한 DOM에 이벤트 리스너를 등록하는 방법입니다. 장점은 다음과 같습니다.
- 이벤트에 대해 하나 이상의 핸들러를 추가할 수 있습니다. 이는 [AJAX](https://developer.mozilla.org/ko/docs/Glossary/AJAX) 라이브러리, 자바스크립트 모듈, 또는 다른 라이브러리/확장 기능과 잘 작동해야 하는 다른 종류의 코드에 특히 유용합니다.
- 리스너가 활성화 되면(캡쳐링과 버블링) 단계의 세밀한 제어를 제공합니다.
- HTML 요소뿐만 아니라, 모든 DOM 요소에서 작동합니다.  
  
대안으로, [이벤트 리스너를 등록하는 오래된 방법](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener#Older_way_to_register_event_listeners)은 아래에 설명되어 있습니다.

### 이벤트 전달중에 리스너 추가
[``EventListener``](https://developer.mozilla.org/ko/docs/Web/API/EventListener)가 이벤트 처리중에 [``EventTarget``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget)에 추가되었다면, 그 이벤트는 리스너를 트리거하지 않습니다. 그러나 동일한 리스너는 버블링 단계와 같은 이벤트 흐름의 나중 단계에서 트리거 될 수 있습니다.

### 다수의 동일한 이벤트 리스너
만약 동일한 여러개의 ``EventListener`` 가 동일한 매개변수(parameter)로 동일한 ``EventTarget``에 등록되었다면, 중복된 항목(인스턴스)들은 버려집니다. ``EventListener``는 두번 호출되지 않으면 [``removeEventListener()``] 메서드를 사용해 직접 제거할 필요가 없습니다. 그러나 익명 함수를 핸들러로 사용할 때, 루프를 도는 경우가 있습니다. 이 경우 단순히 반복적으로 호출하는 동일한 소스 코드를 사용하여 이벤트를 등록하더라도, 익명 함수는 동일하지 않고 이 때문에 리스너 또한 동일하지 않습니다. 이와 같은 경우 동일한 함수를 반복적으로 정의하는 것이 더 문제가 될 수 있습니다. (아래의 메모리 문제를 참조하세요)

### 핸들러 내부의 ``this`` 값
유사한 요소 집합에 대한 일반적인 핸들러를 사용할 떄와 같이, 이벤트 핸들러가 동작한 엘리먼트를 참조하는 것이 좋습니다.  
  
``addEventListener()`` 를 사용하여 핸들러 함수를 요소에 연결하면, 핸들러 내부의 [``this``]() 값은 요소에 대한 참조입니다. 이것은 핸들러에 전달 된 이벤트 인수()의 ``currentTarget`` 속성() 값과 같습니다.

~~~js
my_element.addEventListener('click', function (e) {
  console.log(this.className)           // logs the className of my_element
  console.log(e.currentTarget === this) // logs `true`
})
~~~
다시 말해, [화살표 함수에는 ``this`` 컨텍스트가 없습니다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this)

~~~js
my_element.addEventListener('click', (e) => {
  console.log(this.className)           // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this) // logs `false`
})
~~~

HTML 소스의 요소(element)에 이벤트 핸들러(예: onclick)가 지정된 경우, 속성 값(attribute value)의 자바스크립트 코드는 효과적으로 ``addEventListener()``에 따라 ``this``값을 바인드 하는 핸들러 함수로 래핑됩니다. 코드 내에서 ``this``가 발생하면 요소에 대한 참조를 나타냅니다.

~~~html
<table id="my_table" onclick="console.log(this.id);"><!-- `this` refers to the table; logs 'my_table' -->
  ...
</table>
~~~
속성 값(attribute value)의 코드에 의해 호출 된 함수 내부의 ``this``는 [표준 규칙들](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 동작합니다. 다음은 그 예입니다.

~~~html
<script>
  function logID() { console.log(this.id); }
</script>
<table id="my_table" onclick="logID();"><!-- when called, `this` will refer to the global object -->
  ...
</table>
~~~
``logID()`` 내의 ``this`` 값은 [``window``](https://developer.mozilla.org/ko/docs/Web/API/Window) 전역 객체에 대한 참조입니다. (혹은 [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) 의 경우 ``undefined``입니다. )

__``bind()``__ 를 사용하여 __``this``__ 지정하기  
  
[``Function.prototype.bind()``]() 메서드를 사용하면 지정한 함수에 대한 모든 호출에 대해 ``this`` 값으로 사용해야 하는 값을 지정할 수 있습니다. 이를 이용하여 함수가 호출 된 컨텍스트에 따라 ``this`` 가 무엇인지 명확하지 않은 문제를 쉽게 우회할 수 있습니다.  
  
다음은 ``bind()``를 사용한, 사용하지 않은 예제입니다.
~~~js
var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // undefined, as |this| is the element
  };
  this.onclick2 = function(event) {
    console.log(this.name); // 'Something Good', as |this| is bound to newly created object
  };
  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2.bind(this), false); // Trick
}
var s = new Something(document.body);
~~~