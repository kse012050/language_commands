# CanvasRenderingContext2D 캔버스 표현 문맥 2D
[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)의 일부인 __CanvasRenderingContext2D__ 인터페이스는 [``<canvas>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) 요소의 그리기 표현에 대한 2D 랜더링 컨텍스트를 제공합니다. 도형, 텍스트, 이미지 및 기타 개체를 그리는 데 사용합니다.  
  
사이드 바 및 아래에서 인터페이스의 속성 및 메서드를 참조하십시오.  
[Canvas 튜토리얼](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)에는 더 많은 설명, 예제 및 리소스도 있습니다.

## Basic example 기본 예
``CanvasRenderingContext2D`` 인스턴스를 얻으려면 먼저 작업할 HTML ``<canvas>`` 요소가 있어야 합니다.

~~~html
<canvas id="my-house" width="300" height="300"></canvas>
~~~
  
캔버스의 2D 랜더링 컨텍스트를 가져 오러면 ``<canvas>`` 요소에서 [``getContext()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) 를 호출하여 '2d'를 인수로 제공합니다.

~~~js
const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');
~~~

컨텍스트가 있으면 원하는 것을 그릴 수 있습니다. 이 코드는 집을 그립니다.

~~~js
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
~~~
[결과는 MDN 사이트 참조](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

## Reference 참조

### Drawing rectangles 직사각형 그리기
캔버스에 직사각형을 즉시 그리는 세 가지 방법이 있습니다.

#### [CanvasRenderingContext2D.clearRect ()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)
시작점 (x,y) 및 크기(너비 , 높이)로 정의 된 사각형의 모든 픽셀을 투명한 검정으로 설정하여 이전에 그린 내용을 지웁니다.

#### [CanvasRenderingContext2D.fillRect ()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
너비와 높이에 따라 크기가 결정되는 (x,y) 위치에 채워진 사각형을 그립니다.

#### [CanvasRenderingContext2D.strokeRect ()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)
현재 획 스타일을 사용하여 (x,y)에 시작점이 있고 너비가 w이고 높이가 h 인 사각형을 캔버스에 그립니다.

[내용 출처 MDN CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)