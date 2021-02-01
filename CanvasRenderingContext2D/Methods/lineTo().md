# CanvasRenderingContext2D.lineTo()
Canvas 2D API의 일부인 ``CanvasRenderingContext2D`` 메서드 ``__lineTo()__``는 하위 경로의 마지막 지점을 지정된 ``(x, y)`` 좌표에 연결하여 현재 하위 경로에 직선을 추가합니다.  
  
현재 경로를 수정하는 다른 메서드와 마찬가지로 이 메서드는 아무것도 직접 렌더링하지 않습니다. 캔버스에 패스를 그리려면 ``fill()`` 또는 ``stroke()`` 메서드를 사용할 수 있습니다.

## Syntax
~~~js
ctx.lineTo(x, y);
~~~

### Parameters

#### x
선 끝점의 x 축 좌표입니다.  

#### y
선 끝점의 y 축 좌표입니다.

### Return value
undefined

## Examples

### Drawing a straight line (직선 그리기)
이 예제는 ``lineTo()`` 메서드를 사용하여 직선을 그립니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
줄은 (30, 50)에서 시작하여 (150, 100)에서 끝납니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();       // 새 경로 시작
ctx.moveTo(30, 50);    // 펜을 (30, 50)으로 이동
ctx.lineTo(150, 100);  // (150, 100)에 선을 그립니다.
ctx.stroke();          // 경로 렌더링
~~~

#### Result
![lineTo() 결과 이미지01](images/lineTo()01.PNG)

### Drawing connected lines (연결된 선 그리기)
``lineTo()`` (및 유사한 메서드)를 호출 할 때마다 현재 하위 경로에 자동으로 추가됩니다. 즉, 모든 선이 모두 획이 나거나 함께 채워집니다. 이 예에서는 연속 된 단일 선으로 문자 'M'을 그립니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.lineWidth = 15;
ctx.stroke();
~~~

#### Result
![lineTo() 결과 이미지01](images/lineTo()02.PNG)

[내용출처 MDN lineTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)