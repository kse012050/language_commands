# CanvasRenderingContext2D.closePath()
Canvas 2D API의 ``CanvasRenderingContext2D.closePath()`` 메서드는 현재 지점에서 현재 하위 경로의 시작 부분까지 직선을 추가하려고 시도합니다. 모양이 이미 닫혀 있거나 점이 하나만 있는 경우 이 함수는 아무 작업도 수행하지 않습니다.  
  
이 방법은 캔버스에 직접 아무것도 그리지 않습니다. [stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) 또는 [fill()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) 메서드를 사용하여 경로를 렌더링할 수 있습니다.

## Syntax
~~~js
closePath();
~~~

## Examples
### 삼각형 닫기 ( Closing a triangle )
이 예제에서는 ``lineTo()`` 메서드를 사용하여 삼각형의 처음 두 변(대각선)을 만듭니다. 그런 다음 삼각형의 밑면은 모양의 첫 번째 점과 마지막 점을 자동으로 연결하는 ``closePath()`` 메서드로 생성됩니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
삼각형의 모서리는 (20, 140), (120, 10) 및 (220, 140)에 있습니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 140);   // 펜을 왼쪽 하단 모서리로 이동
ctx.lineTo(120, 10);   // 상단 모서리까지의 선
ctx.lineTo(220, 140);  // 오른쪽 하단 모서리에 선
ctx.closePath();       // 왼쪽 하단 모서리에 선
ctx.stroke();
~~~

#### Result
![closePath() 결과 이미지](./images/closePath()01.png)

### 하나의 하위 경로만 닫기 ( Closing just one sub-path )
이 예제에서는 연결되지 않은 세 개의 하위 경로로 구성된 웃는 얼굴을 그립니다.

> __참고__ : 모든 호가 생성된 후에 ``closePath()``가 호출되지만 마지막 호(하위 경로)만 닫힙니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
처음 두 개의 호는 얼굴의 눈을 만듭니다. 마지막 호는 입을 만듭니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
~~~

#### Result
![closePath() 결과 이미지](./images/closePath()02.png)

[내용출처 MDN closePath() 시작점과 마지막 부분을 연결해준다](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath)