# CanvasRenderingContext2D.quadraticCurveTo()
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
이 예에서 <span style="color:red;"> 제어점은 빨간색 </span>이고 <span style="color:blue;">시작점과 끝점은 파란색</span>입니다.