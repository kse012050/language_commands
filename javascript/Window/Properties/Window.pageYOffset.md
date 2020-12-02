# Window.pageYOffset
[``Window``](https://developer.mozilla.org/en-US/docs/Web/API/Window) __``pageYOffset``__ 은 읽기 전용 별칭입니다.  [``scrollY``](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) 따라서 문서가 현재 세로 축(즉, 위 또는 아래)을 따라 스크롤되고 있는 픽셀 수를 0.0 값으로 반환하여 [``Document``](https://developer.mozilla.org/en-US/docs/Web/API/Document)의 위쪽 가장자리 가 현재 창 내용의 위쪽 가장자리와 정렬 되었음을 나타냅니다.  
  
이전 브라우저 ``pageYOffset`` 보다 약간 더 나은 지원이 ``scrollY``가 있지만, 몇 년 이상 된 브라우저에 대해 걱정하지 않는다면 둘 중 하나를 사용 할 수 있습니다.  
  
 가로 축(왼쪽 및 오른쪽)을 따라 스크롤 된 필셀 수를 반환하는 해당 [``pageXOffset``]() 속성은 [``scrollX``]() 의 별칭입니다.

 ## Syntax 통사론
 ~~~js
yOffset = window.pageYOffset;
 ~~~

 ### value 값
[``Document``](https://developer.mozilla.org/en-US/docs/Web/API/Document)가 포함된 [``Window``](https://developer.mozilla.org/en-US/docs/Web/API/Window) 내에서 세로로 스크롤되는 필셀 수를 지정하는 부동 소수점 숫자입니다. 이 숫자는 정확한 서브 필셀이브로 정수가 아닐 수 있습니다. 0.0값은 창이 세로로 스크롤되지 않고 문서의 상단이 창의 콘텐츠 영역의 상단 가장자리에 있음을 나타냅니다.  
   
이 속성은 [``Window.scrollY``](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)의 별칭이므로 이 값과 사용에 대한 자세한 내용은 문서를 참조하세요.

## Example 예
이 예에서는 [``<iframe>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 이 생성되고 콘텐츠로 채워진 다음 문서 내의 특정 요소가 프레임에서 보기로 스크롤됩니다. 완료되면 프레임의 [``contentWindow``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow)에서 pageYOffset 값을 보고 세로 스크롤 위치를 확인합니다.

### HTML
HTML은 매우 간단하며 스크롤 할 문서를 포함하는 [``<iframe>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)과 스크롤이 완료되면 pageYOffset의 값을 출력할 [``<div>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)의 두가지 요소만 있습니다.

~~~html
<iframe id="frame">
</iframe>

<div id="info">
</div>
~~~

### JavaScript
~~~js
var frame = document.getElementById("frame");
var frameDoc = frame.contentDocument;
var info = document.getElementById("info");

var target = frameDoc.getElementById("overview");
frameDoc.scrollingElement.scrollTop = target.offsetTop;

info.innerText = "Y offset after scrolling: " +
                 frame.contentWindow.pageYOffset + " pixels";
~~~

JavaScript 코드는 프레임에 들어가서 내용을 포함하는 ``<iframe>`` 요소와 스크롤 위치 확인 결과를 출력 할 ``<div>`` 요소를 정보로 가져 오는 것으로 시작합니다. 그런 다음 프레임의 [``HTMLIFrameElement.contentDocument``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument) 에서 [``getElementById()``](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) 를 호출하여 뷰로 스크롤하려는 요소에 대한 참조를 가져옵니다.  
  
대상 요소를 손에 들고 프레임의 [``scrollingElement``](https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement)의 [``scrollTop``](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)을 대상요소의 ``offsetTop``으로 설정합니다. 이를 통해 프레임 문서의 세로 스크롤 위치를 설정하여 대상 요소의 위쪽 가장자리와 동일하게 합니다.  
  
이렇게하면 스크롤 시도가 최대 값을 초과 할 경우 스크롤링 위치가 가능한 최대 값으로 자동 설정됩니다. 이것은 우리가 문서의 가장자리에서 떨어지는 것을 방지합니다. 아무도 거기에 무엇이 있는지 알고 싶어 하지 않습니다. 그래곤이 있을 수 있습니다.

### Result
결과는 다음과 같습니다. 프레임의 내용이 스크롤되어 "Overview" 라는 섹션이 표시되고 pageYOffset 속성 값이 해당 값과 함께 표시됩니다.
> 결과는 홈페이지 보기!!  
  
[내용출처 MDN Window.pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageyoffset)