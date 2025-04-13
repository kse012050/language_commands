# CanvasRenderingContext2D: fillStyle property
[Canvas 2D API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)의 ``CanvasRenderingContext2D.fillStyle`` 속성은 도형 내부에 사용할 색상, 그라데이션 또는 패턴을 지정합니다. 기본 스타일은 #000(검정색)입니다.

> 참고: 채우기 및 획 스타일의 더 많은 예는 Canvas 튜토리얼의 스타일 및 색상 적용을 참조하세요.

## Value
다음 중 하나:
- CSS ``<color>`` 값으로 구문 분석된 문자열
- [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) 객체(선형 또는 방사형 그래디언트)
- [CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) 객체(반복되는 이미지)

## Examples

### 도형의 채우기 색상 변경
이 예제에서는 사각형에 파란색 채우기 색상을 적용합니다.

#### HTML
~~~HTML
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
~~~

#### Result
![fillStyle 결과 이미지](images/fillStyle01.png)

### 루프를 사용하여 여러 채우기 색상 만들기
이 예제에서는 두 개의 ``for`` 루프를 사용하여 각각 다른 채우기 색상을 갖는 사각형 격자를 그립니다. 이를 위해 두 변수 ``i``와 ``j``를 사용하여 각 사각형에 고유한 RGB 색상을 생성하고 빨간색과 녹색 값만 수정합니다. (파란색 채널은 고정된 값을 가집니다.) 채널을 수정하면 모든 종류의 팔레트를 생성할 수 있습니다.

~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)}
        0)`;
        ctx.fillRect(j * 25, i * 25, 25, 25);
    }
}
~~~

결과는 다음과 같습니다.  
![fillStyle 결과 이미지](images/fillStyle02.png)

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)