# CanvasRenderingContext2D.clearRect()
Canvas 2D API 의 ``CanvasRenderingContext2D.clearRect()`` 메서드는 삼각형 영역의 픽셀을 투명한 검정색으로 설정하여 지웁니다.  
  
> __참고 :__ 경로를 올바르게 사용하지 않으면 ``clearRect()`` 로 인해 의도하지 않은 부작용이 발생할 수 있습니다. ``clearRect()`` 를 호출 한 후 새 항목을 그리기 시작하기 전에 [``beginPath()``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) 를 호출해야합니다.

## Syntax   통사론
~~~js
void ctx.clearRect(x, y, width, height);
~~~

``clearRect()`` 메서드는 직사각형 영역의 픽셀을 투명한 검정 (``rgba (0,0,0,0)``) 으로 설정합니다. 사각형의 모서리는 ``(x,y)``에 있으며 ``너비``와 ``높이``로 지정됩니다.

### Parameters  매개변수

#### x
사각형 시작점의 x 축 좌표입니다.

#### y
사각형 시작점의 y 축 좌표입니다.

#### width
직사각형의 너비. 양수 값은 오른쪽에, 음수 값은 왼쪽에 있습니다.

#### height
직사각형의 높이. 양수 값은 아래로, 음수는 위로


### Examples    예

#### Erasing the whole canvas   캔버스 전체 지우기
이 코드 조각은 전체 캔버스를 지웁니다. 일반적으로 애니메이션의 각 프레임이 시작될 떄 필요합니다. 지워진 영역은 [``<canvas>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) 요소의 ``너비`` 및 ``높이`` 속성과 동일하게 설정됩니다.

~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
~~~

#### Erasing part of a canvas   캔버스의 일부 지우기
이 예제는 노란색 배경 위에 파란색 삼각형을 그립니다. 그런 다음 ``clearRect()`` 메서드는 캔버스의 일부를 지웁니다.

##### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

##### JavaScript
지워진 여역은 직사각형 모양이며 왼쪽 상단 모서리는 (10,10)입니다. 지워진 영역의 너비는 120이고 높이는 100입니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw yellow background
ctx.beginPath();
ctx.fillStyle = '#ff6';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw blue triangle
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(180, 20);
ctx.lineTo(130, 130);
ctx.closePath();
ctx.fill();

// Clear part of the canvas
ctx.clearRect(10, 10, 120, 100);
~~~

##### Result
![clearRect() 결과 이미지](clearRect().png)

[내용출처 MDN clearRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)