# CanvasRenderingContext2D.strokeRect()
Canvas 2D API의 __``CanvasRenderingContext2D.strokeRect()``__ 메서드는 현재 [``strokeStyle``]() 및 기타 컨텍스트 설정에 따라 스트로크(윤곽선) 된 삼각형을 그립니다.  
  
이 메서드는 현재 경로를 수정하지 않고 캔버스에 직접 그리므로 이후의 [``fill()``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) 또는 [``stroke()``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) 호출은 영향을 주지 않습니다.

## Syntax   통사론
~~~js
void ctx.strokeRect(x, y, width, height);
~~~
``strokeRect()`` 메서드는 시작점이 ``(x,y)`` 이고 크기가 ``너비``와 ``높이``로 지정되는 스트로크 사각형을 그립니다.

### Parameters  매개변수

#### x
직사각형 시작점의 x축 좌표입니다.

#### y
직사각형 시작점의 y축 좌표입니다.

#### width
직사각형의 너비. 양수 값은 오른쪽에, 음수 값은 왼쪽에 있습니다.

#### height
직사각형의 높이. 양수 값은 감소하고 음수는 중가합니다.

## Examples     예

### A simple stroked rectangle  단순한 획이 있는 직사각형
이 예제에서는 ``strokeRect()`` 메서드를 사용하여 녹색 윤곽선이 있는 사각형을 그립니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
직사각형의 왼쪽 상단 모서리는 (20, 10)입니다. 너비는 160이고 높이는 100입니다.


#### Result
![strokeRect() 단순한 획이 있는 직사각형](images/strokeRect()01.png)

### Applying various context settings   다양한 컨텍스트 설정 적용
이 예제는 그림자와 두껍고 경 사진 윤곽이 있는 직사각형을 그립니다.
~~~html
<canvas id="canvas"></canvas>
~~~
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.shadowColor = '#d53';
ctx.shadowBlur = 20;
ctx.lineJoin = 'bevel';
ctx.lineWidth = 15;
ctx.strokeStyle = '#38f';
ctx.strokeRect(30, 30, 160, 90);
~~~

![strokeRect() 다양한 컨텍스트 설정 적용](images/strokeRect()02.png)

[내용출처 MDN strokeRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)