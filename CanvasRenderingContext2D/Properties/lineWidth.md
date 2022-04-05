# CanvasRenderingContext2D.lineWidth
Canvas 2D API의 ``CanvasRenderingContext2D.lineWidth`` 속성은 선의 굵기를 설정합니다.
> __Note__ : 선은 [stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke), [strokeRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect) 및 [strokeText()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText) 메서드를 사용하여 그릴 수 있습니다.

## 값 ( Value )
좌표 공간 단위로 선 너비를 지정하는 숫자입니다. __0__ , __음수__ , __Infinity__ 및 __NaN__ 값은 무시됩니다. 이 값은 기본적으로 ``1.0``입니다.

## Examples ( 예 )

### 선 너비 변경 ( Changing line width )
이 예제에서는 15단위의 선 너비를 사용하여 선과 직사각형을 그립니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 15;

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(130, 130);
ctx.rect(40, 40, 70, 70);
ctx.stroke();
~~~

[내용출처 MDN 선 둙기](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)