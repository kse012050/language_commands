# CanvasRenderingContext2D: textAlign property
Canvas 2D API의 ``CanvasRenderingContext2D.textAlign`` 속성은 텍스트를 그릴 때 사용되는 현재 텍스트 정렬을 지정합니다.  
  
정렬은 [fillText()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText) 메서드의 x 값을 기준으로 합니다. 예를 들어, ``textAlign``이 ``"center"``이면 텍스트의 왼쪽 가장자리는 ``x - (textWidth / 2)``에 위치합니다.

## Value
가능한 값:

### "left"
텍스트가 왼쪽 정렬됩니다.

### "right"
텍스트가 오른쪽 정렬됩니다.

### "center"
텍스트가 가운데 정렬됩니다.

### "start"
텍스트가 줄의 일반적인 시작 부분에 정렬됩니다(왼쪽에서 오른쪽으로 읽는 로캘의 경우 왼쪽 정렬, 오른쪽에서 왼쪽으로 읽는 로캘의 경우 오른쪽 정렬).

### "end"
텍스트가 줄의 일반적인 끝에 정렬됩니다(왼쪽에서 오른쪽으로 읽는 로캘의 경우 오른쪽 정렬, 오른쪽에서 왼쪽으로 읽는 로캘의 경우 왼쪽 정렬).  
  
기본값은 ``"start"``입니다.

## Examples
### 일반 텍스트 정렬
이 예제는 textAlign 속성의 세 가지 "물리적" 값인 ``"left"``, ``"center"``, ``"right"``를 보여줍니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
canvas.width = 350;
const ctx = canvas.getContext("2d");
const x = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();

ctx.font = "30px serif";

ctx.textAlign = "left";
ctx.fillText("left-aligned", x, 40);

ctx.textAlign = "center";
ctx.fillText("center-aligned", x, 85);

ctx.textAlign = "right";
ctx.fillText("right-aligned", x, 130);
~~~

#### Result
![textAlign 결과 이미지](images/textAlign01.png)

### 방향에 따른 텍스트 정렬
이 예제는 ``textAlign`` 속성의 두 가지 방향에 따른 값인 ``"start``"와 ``"end"``를 보여줍니다. [direction](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction) 속성은 ``"ltr"``로 수동으로 지정해야 하지만, 이는 영어 텍스트의 기본값이기도 합니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";
ctx.direction = "ltr";

ctx.textAlign = "start";
ctx.fillText("Start-aligned", 0, 50);

ctx.textAlign = "end";
ctx.fillText("End-aligned", canvas.width, 120);
~~~

#### Result
![textAlign 결과 이미지](images/textAlign02.png)

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign)