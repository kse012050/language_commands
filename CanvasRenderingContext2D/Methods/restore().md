# CanvasRenderingContext2D.restore()
Canvas 2D API의 __``CanvasRenderingContext2D.restore()``__ 메서드는 그리기 상태 스택의 맨 위 항목을 팝하여 가장 최근에 저장된 캔버스 상태를 복원합니다. 저장된 상태가 없으면 이 메서드는 아무 작업도 수행하지 않습니다.  
  
그리기 상태에 대한 자세한 내용은 [CanvasRenderingContext2D.save()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save)를 참조하십시오.

## Syntax
~~~js
restore()
~~~

### Parameters
None

### Return value
None (undefined)

## Examples
### 저장된 상태 복원
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

[내용출처 MDN canvas 저장된 속성 불러오기](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore)