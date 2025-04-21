# CanvasRenderingContext2D: resetTransform() method
Canvas 2D API의 __``CanvasRenderingContext2D.resetTransform()``__ 메서드는 현재 변환을 단위 행렬로 재설정합니다.

## Syntax
~~~js
resetTransform()
~~~

## Examples
### 행렬 재설정
이 예제에서는 행렬을 수정한 후 회전된 사각형을 그린 다음, resetTransform() 메서드를 사용하여 행렬을 재설정합니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
[rotate()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate) 메서드는 변환 행렬을 45° 회전합니다. [fillRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) 메서드는 해당 행렬에 따라 조정된 채워진 사각형을 그립니다.

~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 회전된 사각형을 그립니다.
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(60, 0, 100, 30);

// 변환 행렬을 단위 행렬로 재설정합니다.
ctx.resetTransform();
~~~

#### Result
![resetTransform() 결과 이미지](images/resetTransform()01.PNG)

### 정규 행렬 계속하기
변환된 도형 그리기가 끝나면 다른 렌더링을 하기 전에 ``resetTransform()``을 호출해야 합니다.  
이 예제에서 처음 두 도형은 기울기 변환을 사용하여 그려지고, 마지막 두 도형은 항등(정규) 변환을 사용하여 그려집니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 기울어진 사각형
ctx.transform(1, 0, 1.7, 1, 0, 0);
ctx.fillStyle = "gray";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);

// 기울어지지 않은 사각형
ctx.resetTransform();
ctx.fillStyle = "red";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);
~~~

#### Result
기울어진 사각형은 회색이고, 기울어지지 않은 사각형은 빨간색입니다.
![resetTransform() 결과 이미지](images/resetTransform()02.PNG)


## Polyfill ( 폴리필 )
``setTransform()`` 메서드를 사용하여 현재 변환을 단위 행렬로 재설정할 수도 있습니다. 다음과 같습니다.

~~~js
ctx.setTransform(1, 0, 0, 1, 0, 0);
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform)