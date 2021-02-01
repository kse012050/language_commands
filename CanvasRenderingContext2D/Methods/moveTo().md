# CanvasRenderingContext2D.moveTo()
Canvas 2D API의 ``CanvasRenderingContext2D.moveTo()`` 메서드는 주어진 ``(x, y)`` 좌표로 지정된 지점에서 새 하위 경로를 시작합니다.

## Syntax
~~~js
void ctx.moveTo(x, y);
~~~

### Parameters

#### x
점의 x 축 (수평) 좌표입니다.
#### y
점의 y 축 (세로) 좌표입니다.

## Examples

### Creating multiple sub-paths(여러 하위 경로 만들기)
이 예제에서는 ``moveTo()``를 사용하여 단일 경로 내에 두 개의 하위 경로를 만듭니다. 그런 다음 두 하위 경로가 단일 ``stroke()`` 호출로 렌더링됩니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
첫 번째 줄은 (50, 50)에서 시작하여 (200, 50)에서 끝납니다. 두 번째 줄은 (50, 90)에서 시작하여 (280, 120)에서 끝납니다.
~~~js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);   // 첫 번째 하위 경로 시작
ctx.lineTo(200, 50);
ctx.moveTo(50, 90);   // 두 번째 하위 경로 시작
ctx.lineTo(280, 120);
ctx.stroke();
~~~

#### Result
![moveTo() 결과 이미지](images/moveTo().PNG)

[내용출처 MDN moveTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo#creating_multiple_sub-paths)