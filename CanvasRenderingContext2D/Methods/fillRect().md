# CanvasRenderingContext2D.fillRect()
Canvas 2D API의 ``CanvasRenderingContext2D.fillRect()`` 메서드는 현재 [``fillStyle``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) 에 따라 채워지는 사각형을 그립니다.  
  
이 메서드는 현재 경로를 수정하지 않고 캔버스에 직접 그리므로 이후의 [``fill()``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) 또는 [``stroke()``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) 호출은 영향을 주지 않습니다.  

## Syntax   통산론
~~~js
void ctx.fillRect(x, y, width, height);
~~~

``fillRext()`` 메서드는 시작점이 ``(x,y)`` 이고 크기가 ``너비``와 ``높이``로 지정된 채워진 사각형을 그립니다. 채우기 스타일은 현재 ``fillStyle`` 속성에 의해 결정됩니다.

### Parameters  매개변수

#### x
직사각형 시작점의 x 축 좌표입니다.

#### y
직사각형 시작점의 y축 좌표입니다.

#### width
직사각형의 너비. 양수 값은 오른쪽에, 음수 값은 왼쪽에 있습니다.

#### height
직사각형의 높이. 양수 값은 감소하고 음수는 증가합니다.

## Examples 예

### A simple filled rectangle   단순하게 채워진 직사각형
이 예제에서는 ``fillRect()`` 메서드를 사용하여 채워진 녹색 사각형을 그립니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
직사각형의 왼쪽 상단 모서리는 (20,10)입니다. 너비는 150이고 높이는 100입니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(20, 10, 150, 100);
~~~

#### Result
![fillRect() 단순하게 채워진 직사각형 예제 이미지](images/fillRect().PNG)

### Filling the whole canvas    캔버스 전체 채우기
이 코드 조각은 전체 캔버스를 사각형으로 채웁니다. 이것은 종종 배경을 만드는 데 유용하며 그 위에 다른 것들을 그려 질 수 있습니다. 이를 위해 사각형의 크기는 [``<canvas>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) 요소의 ``너비`` 및 ``높이`` 속성과 동일하게 설정됩니다.

~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);
~~~

[내용출처 MDN fillRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)