# CanvasRenderingContext2D.createLinearGradient()
Canvas 2D API의 __``CanvasRenderingContext2D.createLinearGradient()``__ 메서드는 주어진 두 좌표를 연결하는 선을 따라 그라디언트를 만듭니다.

![createLinearGradient() 이미지](./images/createLinearGradient()01.PNG)

이 메서드는 선형 [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)를 반환합니다. 모양에 적용하려면 먼저 그라디언트를 [fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) 또는 [strokeStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) 속성에 할당해야합니다.

> __참고 :__ 그라데이션 좌표는 전역, 즉 현재 좌표 공간을 기준으로합니다. 도형에 적용 할 때 좌표는 도형의 좌표와 관련이 없습니다.

## Syntax
~~~js
/* CanvasGradient */
ctx.createLinearGradient(x0, y0, x1, y1);
~~~
``createLinearGradient()`` 메서드는 그래디언트 선의 시작점과 끝점을 정의하는 4 개의 매개 변수로 지정됩니다.

### Parameters
#### x0
시작점의 x 축 좌표입니다.
#### y0
시작점의 y 축 좌표입니다.
#### x1
끝점의 x 축 좌표입니다.
#### y1
끝점의 y 축 좌표입니다.

### Return value
#### [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)
지정된 줄로 초기화 된 선형 ``CanvasGradient``입니다.

## Examples

### Filling a rectangle with a linear gradient (선형 그래디언트로 사각형 채우기)
이 예제는 ``createLinearGradient()`` 메서드를 사용하여 선형 그래디언트를 초기화합니다. 그런 다음 그라디언트의 시작점과 끝점 사이에 세 가지 색상 정지 점이 만들어집니다. 마지막으로 그라디언트는 캔버스 컨텍스트에 할당되고 채워진 사각형으로 렌더링됩니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// 선형 그래디언트 만들기
// 시작 그라디언트 포인트는 x = 20, y = 0입니다.
// 끝 그라데이션 점은 x = 220, y = 0입니다.
var gradient = ctx.createLinearGradient(20,0, 220,0);

// 세 가지 색상 중지 추가
gradient.addColorStop(0, 'green');
gradient.addColorStop(.5, 'cyan');
gradient.addColorStop(1, 'green');

// 채우기 스타일을 설정하고 직사각형을 그립니다.
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
~~~

![createLinearGradient() 결과 이미지](./images/createLinearGradient()02.PNG)

[내용출처 MDN createLinearGradient()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)