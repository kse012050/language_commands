# Element.getBoundingClientRect ()
이 __``Element.getBoundingClientRect()``__ 세머드는 요소의 크기와 뷰포트를 기준으로 한 위치를 반환합니다.  
  
요소의 크기는 표준 상자 모델을 사용하는 경우 ``width`` / ``height`` + ``padding`` + ``border-width`` 와 같거나 ``width``/ 설정된 ``height`` 경우에만 해당됩니다 ``box-sizing: border-box``

## Syntax 통사론
> domRect = element.getBoundingClientRect();

### value 값
반환 된 값은 요소 [``DOMRect``](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect)에 [getClientRects()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects) 대해 반환 된 사각형의 합집합 인 객체입니다. 즉, 요소와 관련된 CSS 테두리 상자입니다. 겨로가적으로, 전체 요소를 포함하는 작은 직사각형 읽기 전용 ``left``, ``top``, ``right``, ``bottom``, ``x``, ``y``, ``width``, 및 ``height`` 픽셀의 전체 경계 박스를 나타내는 속성. ``width`` 및 이외의 속성 ``height``은 뷰포트의 왼쪽 상단을 기준으로합니다.

![Element.getBoundingClientRect() img](Element.getBoundingClientRect()img.png)
  
문서의 왼쪽 상단 모서리에 경계의 구형 상태가 필요하면, 바로 현재 스크롤 위치를 추가 ``top``하고 ``left``(이들은 사용하여 얻을 수 있는 속성 [``window.scrollX``]()과 [``window.scrollY``]() 현재 스크롤 위치에서 독립적 인 경계 사각형을 얻기 위해)

> window.scrollX 와 window.scrollY 는 아직 뭔지 잘 모르겠다. 추가 공부 필요!

> Element.getBoundingClientRect() 는 현재 보고 있는 __브라우저(window)__ 기준으로부터의 거리 입니다.

### Cross-browser fallback  브라우저 간 대체
높은 크로스 브라우저 호환성을 필요로 하는 스크립트 사용 [``window.pageXOffset``]() 과 [``window.pageYOffset``]() 대신 ``window.scrollX`` 와 ``window.scrollY`` 같은 코드를 사용하여 이러한 속성에 엑세스 하지 않고 스크립트

~~~js
// For scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft
// For scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.scrollTop == 'number' ? t : document.body).scrollTop
~~~

[출처 내용 MDN Element.getBoundingClientRect ()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)


