# CanvasRenderingContext2D.save()
Canvas 2D API의 __``CanvasRenderingContext2D.save()``__ 메서드는 현재 상태를 스택에 푸시하여 캔버스의 전체 상태를 저장합니다.

## 그리기 상태
스택에 저장되는 드로잉 상태는 다음으로 구성됩니다.
- 현재 변환 행렬.
- 현재 클리핑 영역.
- 현재 대시 목록입니다.
- 다음 속성의 현재 값 : strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.

## Syntax
~~~js
save()
~~~

### Parameters
None

### Return value
None (undefined)

## Examples
### 그리기 상태 저장
이 예제에서는 ``save()`` 메서드를 사용하여 기본 상태를 저장하고 ``restore()``를 사용하여 나중에 기본 상태로 사각형을 그릴 수 있도록 복원합니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~
#### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 기본 상태 저장
ctx.save();

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

// 기본 상태 복원
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
~~~
![save() 결과 이미지](./images/save().PNG)

[내용출처 MDN canvas 속성 저장](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save)