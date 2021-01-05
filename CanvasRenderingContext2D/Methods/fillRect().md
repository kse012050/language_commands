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

## Examples