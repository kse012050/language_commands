# CanvasRenderingContext2D.quadraticCurveTo() (2차곡선)
Canvas 2D API의 __``CanvasRenderingContext2D.quadraticCurveTo ()``__ 메서드는 현재 하위 경로에 2차 [베지어 곡선](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)을 추가합니다. 첫 번째 점은 제어 점이고 두 번째 점은 끝점입니다. 시작점은 현재 경로의 가장 최근 지점이며 2차 베지어 곡선을 만들기 전에 [moveTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)를 사용하여 변경할 수 있습니다.

## 문법
~~~js
void ctx.quadraticCurveTo(cpx, cpy, x, y);
~~~

### Parameters (매개변수)

#### cpx
제어점의 x 축 좌표입니다.

#### cpy
제어점의 y 축 좌표입니다.

#### x
끝점의 x 축 좌표입니다.

#### y
끝점의 y 축 좌표입니다.

## Examples (예)

### How quadraticCurveTo works (quadraticCurveTo의 작동 원리)
이 예제는 2차 베지어 곡선을 그리는 방법을 보여줍니다.

#### HTML
~~~html
    <canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // 2차 베지어 곡선
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.quadraticCurveTo(230, 30, 50, 100);
    ctx.stroke();

    // 시작점과 끝점
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(50, 20, 5, 0, 2 * Math.PI);   // Start point
    ctx.arc(50, 100, 5, 0, 2 * Math.PI);  // End point
    ctx.fill();

    // 점령 지점
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(230, 30, 5, 0, 2 * Math.PI);
    ctx.fill();
~~~

#### Result (결과)
이 예에서 __제어점은 빨간색__ 이고 __시작점과 끝점은 파란색__ 입니다.

![How quadraticCurveTo works 결과 이미지](images/quadraticCurveTo()01.PNG)

### A simple quadratic curve (간단한 2차 곡선)
이 예제는 ``quadraticCurveTo()``를 사용하여 간단한 2차 베지어 곡선을 그립니다.

#### HTML
~~~html
    <canvas id="canvas"></canvas>
~~~

#### JavaScript
곡선은 ``moveTo()`` : (20, 110)로 지정된 점에서 시작합니다. 점령 지점은 (230, 150)에 있습니다. 곡선은 (250, 20)에서 끝납니다.

~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
~~~

#### Result

![A simple quadratic curve 결과 이미지](images/quadraticCurveTo()02.PNG)

[내용출처 MDN quadraticCurveTo (2차 곡선)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
