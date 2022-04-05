# CanvasRenderingContext2D.rect()
Canvas 2D API의 ``CanvasRenderingContext2D.rect()`` 메서드는 현재 경로에 사각형을 추가합니다.  
  
현재 경로를 수정하는 다른 메서드와 마찬가지로 이 메서드는 아무 것도 직접 렌더링하지 않습니다. 캔버스에 사각형을 그리려면 [fill()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) 또는 [stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)메서드를 사용할 수 있습니다.

> __Note__ : 한 단계에서 사각형을 만들고 렌더링하려면 [fillRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) 또는 [strokeRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect) 메서드를 사용하십시오.

## 문법 Syntax
~~~js
void ctx.rect(x, y, width, height);
~~~
``rect()`` 메서드는 시작점이 ``(x, y)``이고 크기가 ``너비``와 ``높이``로 지정되는 직사각형 경로를 만듭니다.

### 매개변수 ( Parameters )

#### x
사각형 시작점의 x축 좌표입니다.

#### y
사각형 시작점의 y축 좌표입니다.

#### width
사각형의 너비입니다. 양수 값은 오른쪽이고 음수는 왼쪽입니다.

#### height
사각형의 높이입니다. 양수 값은 아래로, 음수 값은 위로 이동합니다.

## 예 ( Examples )
### 직사각형 그리기 ( Drawing a rectangle )
이 예제에서는 ``rect()`` 메서드를 사용하여 직사각형 경로를 만듭니다. 그런 다음 ``fill()`` 메서드를 사용하여 경로를 렌더링합니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
직사각형의 모서리는 (10, 20)에 있습니다. 너비가 150이고 높이가 100입니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 20, 150, 100);
ctx.fill();
~~~

#### 결과 ( Result )
![rect() 결과 이미지](images/rect().png)

[내용출처 MDN rect() 사각형 그리기](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect)