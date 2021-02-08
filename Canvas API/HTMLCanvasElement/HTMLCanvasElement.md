# HTMLCanvasElement
__``HTMLCanvasElement``__ 인터페이스는 ``<canvas>`` 요소의 레이아웃이나 프레젠테이션을 조작하는 여러 프로퍼티와 메서드들을 제공합니다. 또한 ``HTMLCanvasElement`` 인터페이스는 [``HTMLElement``](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement) 인터페이스의 여러 프로퍼티와 메서드들을 상속받습니다.

## 프로퍼티
부모객체인 [``HTMLElement``](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement) 로 부터 프로퍼티를 상속받음.

### [HTMLCanvasElement.width](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width)
는 [``<canvas>``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas) 요소에서 HTML 속성인 [``width``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas#attr-width)를 반영하는 양의 정수이며, CSS의 픽셀값으로 해석되어집니다. 속성값이 주어지지 않거나, 음수와 같이 올바르지 않은 값이 주어진 경우에는 기본 값인 300이 사용됩니다.

### [HTMLCanvasElement.height](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height)
는 [``<canvas>``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas) 요소에서 HTML 속성인 [height](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas#attr-height) 를 반영하는 양의 정수이며, CSS의 픽셀값으로 해석되어집니다. 속성값이 주어지지 않거나, 음수와 같이 올바르지 않은 값이 주어진 경우에는 기본 값인 150이 사용됩니다.

### [HTMLCanvasElement.mozOpaque](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozOpaque)
는 [``<canvas>``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas) 요소에서 HTML 송성인 [``moz-opaque``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas#attr-moz-opaque)를 반영하는 [``Boolean``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 객체입니다. 이는 ``<canvas>``에게 반투명이 인자로 사용될지에 대한 여부를 알려줍니다. 만약 반투명요소가 없다면, ``<canvas>``의 성능이 최적화될 수 있습니다.

### [HTMLCanvasElement.mozPrintCallback](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/mozPrintCallback)
는 페이지가 프린트 되는 경우 호출되는 함수입니다. 사용자는 해당 객체에 특정 자바스크립트 함수를 등록함으로써, 만약 프린터가 사용되는 경우 ``<canvas>`` 를 더욱 고해상도로 다시 그리게 할 수 있습니다. 기본적으로 null 값을 갖습니다. [다음의 블로그 글을 참조하세요.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## 메서드

부모객체인 [HTMLElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement) 로부터 메서드를 상속받음

### [HTMLCanvasElement.captureStream()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream)
``<canvas>`` 상의 화면을 실시간 비디오로 캡처할 수 있는 [CanvasCaptureMediaStream](https://developer.mozilla.org/ko/docs/Web/API/CanvasCaptureMediaStream)을 반환합니다.

### [HTMLCanvasElement.getContext()](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)
``<canvas>`` 상의 드로잉 컨텍스트를 반환합니다. 만약 컨텍스트 ID가 지원되지 않는 경우 null 값을 반환합니다. 드로잉 컨텍스트는 ``<canvas>`` 상에 그림을 그릴 수 있게 해줍니다. getContext를 ``"2d"`` 를 매개 변수로 호출한다면 [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) 객체를 반환할 것이며, ``"experimental-webgl"`` (또는 "webgl")를 매개 변수로 호출한다면 [``WebGLRenderingContext``](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext) 객체를 반환할 것 입니다. 후자의 컨텍스트의 경우 [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) 이 구현된 브라우저에서만 사용 가능합니다.

[내용출처 MDN HTMLCanvasElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement)
