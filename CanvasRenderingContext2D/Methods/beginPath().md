# CanvasRenderingContext2D.beginPath()
Canvas 2D API의 ``CanvasRenderingContext2D.beginPath()``메서드는 하위 경로 목록을 비워 새 경로를 시작합니다. 새 경로를 만들려면이 메서드를 호출하십시오.  
  
> __참고__ : 새 하위 경로, 즉 현재 캔버스 상태와 일치하는 경로를 만들려면 CanvasRenderingContext2D.moveTo ()를 사용할 수 있습니다.

## Syntax 통사론
~~~js
void ctx.beginPath();
~~~

## Examples 예

### Creating distinct paths(고유 한 경로 만들기)
이 예제는 각각 한 줄을 포함하는 두 개의 경로를 만듭니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
``beginPath()`` 메서드는 각 줄을 시작하기 전에 호출되므로 다른 색으로 그릴 수 있습니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// First path
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
~~~

#### Result
![beginPath() 결과 이미지](images/beginPath().PNG)

[내용출처 MDN beginPath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)