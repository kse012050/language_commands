# CanvasRenderingContext2D.scale()
Canvas2D API의 __``CanvasRenderingContext2D.scale``__ () 메서드는 캔버스 단위에 수평 및 / 또는 수직으로 크기 조정 변환을 추가합니다.  
  
기본적으로 캔버스의 한 단위는 정확히 1 픽셀입니다. 크기 조정 변환 동작을 수정합니다. 예를 들어 배율이 0.5이면 단위 크기는 0.5 픽셀이됩니다. 따라서 모양은 일반 크기의 절반으로 그려집니다. 마찬가지로, 스케일링 계수가 2.0이면 한 단위가 두 픽셀이되도록 단위 크기가 증가합니다. 따라서 모양은 일반 크기의 두 배로 그려집니다.

## Syntax 문법
~~~
void ctx.scale(x,y);
~~~

### Parameters 매개 변수

#### x
수평(가로) 방향의 배율입니다. 음수 값은 세로 축에서 픽셀을 뒤집습니다. 값이 1이면 수평 확장이되지 않습니다.

#### y
수직(세로) 방향의 배율입니다. 음수 값은 가로 축에서 픽셀을 뒤집습니다. 값이 1이면 수직 확장이 없습니다.

## Examples 예
### Scaling a shape (모양 크기 조정)
이 예제는 크기가 조정 된 사각형을 그립니다. 그런 다음 비교를 위해 크기가 조정되지 않은 사각형이 그려집니다.

#### HTML
~~~html
    <canvas id="canvas"></canvas>
~~~

#### JavaScript
사각형의 너비(가로)는 8이고 높이(세로)는 20입니다. 변환 행렬은 가로로 9x, 세로로 3x 크기를 조정합니다. 따라서 최종 크기는 너비(가로) 72, 높이(세로) 60입니다.

~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 크기가 조정 된 직사각형
ctx.scale(9, 3);
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 8, 20);

// 현재 변환 행렬을 단위 행렬로 재설정
ctx.setTransform(1, 0, 0, 1, 0, 0);

// 크기가 조정되지 않은 직사각형
ctx.fillStyle = 'gray';
ctx.fillRect(10, 10, 8, 20);
~~~

#### Result
크기가 조정 된 사각형은 빨간색이고 크기가 조정되지 않은 사각형은 회색입니다.

![scale() 결과 이미지 01](images/scale()01.PNG)

### Flipping things horizontally or vertically (수평 또는 수직으로 뒤집기)
``scale(-1, 1)``을 사용하여 컨텍스트를 수평으로 뒤집고 ``scale(1, -1)``을 사용하여 수직으로 뒤집을 수 있습니다. 이 예에서 "Hello world!"라는 단어는 수평으로 뒤집 힙니다.

[``fillText()``](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText) 호출은 음의 x 좌표를 지정합니다. 음의 배율을 조정하기위한 것입니다. ``-280 * -1``은 ``280``이되고 텍스트는 그 지점에서 왼쪽으로 그려집니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(-1, 1);
ctx.font = '48px serif';
ctx.fillText('Hello world!', -280, 90);
ctx.setTransform(1, 0, 0, 1, 0, 0);
~~~

#### Result
![scale() 결과 이미지 02](images/scale()02.PNG)

[내용출처 MDN scale()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale)