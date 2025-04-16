# CanvasRenderingContext2D: fillText() method
Canvas 2D API의 일부인 [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) 메서드 [fillText()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)는 지정된 좌표에 텍스트 문자열을 그리고 문자열의 문자를 현재 fillStyle로 채웁니다. 선택적 매개변수를 사용하여 렌더링된 텍스트의 최대 너비를 지정할 수 있으며, [사용자 에이전트](https://developer.mozilla.org/ko/docs/Glossary/User_agent)는 텍스트를 압축하거나 더 작은 글꼴 크기를 사용하여 최대 너비를 설정합니다.  
  
이 메서드는 현재 경로를 수정하지 않고 캔버스에 직접 그리므로 이후 [fill()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) 또는 [stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) 호출은 영향을 미치지 않습니다.  
  
텍스트는 [font](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font), [textAlign](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign), [textBaseline](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline) 및 [direction](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction) 속성에 정의된 글꼴 ​​및 텍스트 레이아웃 구성을 사용하여 렌더링됩니다.  
  
> __참고__: 문자열에 있는 문자의 윤곽선을 그리려면 컨텍스트의 [strokeText()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText) 메서드를 호출합니다.

## Syntax
~~~js
fillText(text, x, y)
fillText(text, x, y, maxWidth)
~~~

### Parameters

#### text
컨텍스트에 렌더링할 텍스트 문자열을 지정하는 문자열입니다. 텍스트는 [font](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font), [textAlign](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign), [textBaseline](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline) 및 [direction](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction)으로 지정된 설정을 사용하여 렌더링됩니다.

#### x
텍스트 그리기를 시작할 지점의 x축 좌표(픽셀)입니다.

#### y
텍스트 그리기를 시작할 기준선의 y축 좌표(픽셀)입니다.

#### maxWidth (선택 사항)
텍스트가 렌더링될 때 최대 너비(픽셀)입니다. 지정하지 않으면 텍스트 너비에 제한이 없습니다. 그러나 이 값을 지정하면 사용자 에이전트는 커닝을 조정하거나, 가로 방향으로 더 좁은 글꼴(사용 가능하거나 품질 저하 없이 생성할 수 있는 경우)을 선택하거나, 지정된 너비에 맞게 텍스트를 더 작은 글꼴 크기로 축소합니다.

### Return value
없음 ( undefined )

## Examples
### 채워진 텍스트 그리기
이 예제에서는 ``fillText()`` 메서드를 사용하여 "Hello world"라는 텍스트를 씁니다.

#### HTML
먼저, 그림을 그릴 캔버스가 필요합니다. 이 코드는 너비 400픽셀, 너비 150픽셀의 컨텍스트를 만듭니다.
~~~html
<canvas id="canvas" width="400" height="150"></canvas>
~~~

#### JavaScript
이 예제의 JavaScript 코드는 다음과 같습니다.
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90);
~~~
이 코드는 [``<canvas>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas)에 대한 참조를 가져온 다음, 해당 2D 그래픽 컨텍스트에 대한 참조를 가져옵니다.  
  
이제 글꼴을 50픽셀 높이의 "serif"(사용자의 기본 세리프 글꼴)로 설정한 후, fillText()를 호출하여 좌표 (50, 90)에서 시작하여 "Hello world"라는 텍스트를 그립니다.

#### Result
![fillText() 이미지](./images/fillText()01.PNG)

### 텍스트 크기 제한
이 예제에서는 "Hello world"라는 텍스트를 쓰고 너비를 140픽셀로 제한합니다.

#### HTML
~~~html
<canvas id="canvas" width="400" height="150"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90, 140);
~~~

#### Result
![fillText() 이미지](./images/fillText()02.PNG)

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)