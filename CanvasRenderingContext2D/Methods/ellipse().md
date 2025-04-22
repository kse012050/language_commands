# CanvasRenderingContext2D: ellipse() method
Canvas 2D API의 __``CanvasRenderingContext2D.ellipse()``__ 메서드는 현재 하위 경로에 타원형 호를 추가합니다.

## Syntax
~~~js
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
~~~
``ellipse()`` 메서드는 ``(x, y)``를 중심으로 하고 반지름이 ``radiusX``와 ``radiusY``인 타원형 호를 생성합니다. 경로는 ``startAngle``에서 시작하여 ``endAngle``에서 끝나며, ``반시계 방향``(기본값은 시계 방향)으로 이동합니다.

### Parameters
#### x
타원 중심의 x축(수평) 좌표입니다.

#### y
타원 중심의 y축(수직) 좌표입니다.

#### radiusX
타원의 장축 반지름입니다. 음수가 아니어야 합니다.

#### radiusY
타원의 단축 반지름입니다. 음수가 아니어야 합니다.

#### rotation
타원의 회전 각도이며, 라디안으로 표시됩니다.

#### startAngle
타원이 시작되는 이심각으로, 양의 x축에서 시계 방향으로 측정하며 라디안으로 표시됩니다.

#### endAngle
타원이 끝나는 이심각으로, 양의 x축에서 시계 방향으로 측정하며 라디안으로 표시됩니다.

#### counterclock 선택 사항
선택 사항인 부울 값으로, ``true``이면 타원을 시계 반대 방향으로 그립니다. 기본값은 ``false``(시계 방향)입니다.

### Return value
None (undefined)

## Examples
### 완전한 타원 그리기
이 예제에서는 π/4 라디안(45°) 각도로 타원을 그립니다. 완전한 타원을 만들려면 호가 0 라디안(0°) 각도에서 시작하여 2π 라디안(360°) 각도에서 끝나야 합니다.

#### HTML
~~~html
<canvas id="canvas" width="200" height="200"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 타원 그리기
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// 타원의 반사선 그리기
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
~~~

#### Result
![ellipse() 결과 이미지](./images/ellipse()01.PNG)

### 다양한 타원형 호
이 예제에서는 서로 다른 속성을 가진 세 개의 타원형 경로를 만듭니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * 0.25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
ctx.fill();
~~~

#### Result
![ellipse() 결과 이미지](./images/ellipse()02.PNG)

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse)