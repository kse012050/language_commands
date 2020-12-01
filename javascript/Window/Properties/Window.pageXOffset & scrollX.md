# Window.pageXOffset
읽기 전용 [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) 속성 __``pageXOffset``__은 [scrollX](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX) 의 별칭입니다.

# Window.scrollX
인터페이스의 읽기 전용 __``scrollX``__ 속성은 [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) 문서가 현재 가로로 스크롤되는 픽셀 수를 반환합니다. 이 값은 최신 브라우저에서 정확한 하위 픽셀이므로 반드시 정수가 아닐 수도 있습니다. [``scrollY``](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) 속성 에서 문서가 세로로 스크롤되는 픽셀 수를 가져올 수 있습니다.

## Syntax 통사론

~~~js
var y = window.scrollY
~~~

### 값
실제로 반환 된 값은 문서가 원본에서 현재 세로로 스크롤되는 픽셀 수를 나타내는 배정 밀도 부동 소수점 값입니다. 여기서 양수 값은 콘텐츠가 위쪽으로 스크롤됨을 의미합니다. 문서가 하위 픽셀 정밀도 장치에서 랜더링되는 경우 반환 된 값도 하위 픽셀 정밀도이며 10 진수 구성 요소를 포함 할 수 있습니다. 문서가 위로 또는 아래로 전혀 스크롤 되지 않으면 ``scrollY``는 0 입니다.  
  
> 정수 값이 필요한 경우을 사용 [``Math.round()``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 하여 반올림 할 수 있습니다.  
  
좀 더 전문적인 용어로, ``scrollY`` 현재 [뷰포트 viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport) 상단 가장자리의 Y 좌표를 반환합니다. 뷰포트가 없는 경우 반환되는 값은 0 입니다.

## Example 예
~~~js
// 확인하고 두 번째 페이지로 이동 
if (window.scrollY) {
  window.scroll(0, 0);  // 스크롤 위치를 문서의 왼쪽 상단으로 재설정.
}

window.scrollByPages(1);
~~~

## Notes 메모
  
같은 상대 스크롤 기능을 사용하면 문서가 이미 스크롤 되지 않았음을 확인하려면 이 속성을 사용하여 [``scrollBy()``](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy), [``scrollByLines()``](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByLines) 또는 [``scrollByPages()``](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages)  
  
``scrollY`` 속성의 ``pageYOffset`` 별칭입니다.  
  
~~~js
window.pageYOffset === window.scrolly; // 항상 사실
~~~  
  
브라우저 간 호환성을 위해 사용하는 ``window.pageYOffset`` 대신 ``window.scrollY`` __또한__ 이전 버전의 internet Explorer (<9>) 는 두 속성을 모두 지원하지 않으며 다른 비표준 속성을 확인하여 해결해야 합니다.  
  
완전히 호환되는 예 :
~~~js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
~~~
  
[내용 출처 MDN ``window.pageXOset`` 은 ``scrollY`` 의 별칭이다?!!!](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)