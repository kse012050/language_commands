# WebGLRenderingContext: viewport() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport#browser_compatibility)
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.viewport()`** 메서드는 WebGL이 렌더링 결과를 출력할 **화면 영역(viewport)** 을 지정합니다.

조금 더 정확히 말하면, Vertex Shader를 거친 뒤 만들어지는 **Normalized Device Coordinates(NDC)** 의 `x`, `y` 좌표를 실제 화면의 픽셀 좌표로 변환할 때 사용할 영역을 설정합니다.

쉽게 말하면:

```text
WebGL 내부 좌표
-1 ~ 1

        ↓

viewport()

        ↓

실제 canvas 픽셀 영역
0 ~ canvas.width
0 ~ canvas.height
```

이라고 보면 됩니다.

예를 들어:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

라고 하면 WebGL 렌더링 결과가 canvas 전체 영역에 맞춰서 출력됩니다.

---

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [x](#x)
* [y](#y)
* [width](#width)
* [height](#height)
* [반환값](#반환값)
* [오류](#오류)
* [viewport는 왜 필요한가?](#viewport는-왜-필요한가)
* [NDC와 viewport의 관계](#ndc와-viewport의-관계)
* [기본 예제](#기본-예제)
* [canvas 크기 변경 예제](#canvas-크기-변경-예제)
* [화면 일부에만 렌더링하기](#화면-일부에만-렌더링하기)
* [현재 viewport 확인하기](#현재-viewport-확인하기)
* [최대 viewport 크기 확인하기](#최대-viewport-크기-확인하기)
* [CSS 크기와 canvas 실제 크기의 차이](#css-크기와-canvas-실제-크기의-차이)
* [전체 흐름](#전체-흐름)
* [핵심 정리](#핵심-정리)
* [관련 문서](#관련-문서)

---

## 문법

```javascript
viewport(x, y, width, height)
```

가장 일반적인 사용 형태는 다음과 같습니다.

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

---

# 매개변수

`viewport()`는 네 개의 값을 받습니다.

```text
viewport(x, y, width, height)
```

각각의 의미는 다음과 같습니다.

```text
x
viewport 시작 X 위치

y
viewport 시작 Y 위치

width
viewport 너비

height
viewport 높이
```

---

# `x`

Viewport의 왼쪽 아래 모서리의 가로 좌표를 지정합니다.

기본값은:

```text
0
```

입니다.

예:

```javascript
gl.viewport(
    100,
    0,
    500,
    500
);
```

이 경우 viewport는 canvas 왼쪽에서 `100px` 떨어진 위치부터 시작합니다.

---

# `y`

Viewport의 왼쪽 아래 모서리의 세로 좌표를 지정합니다.

기본값은:

```text
0
```

입니다.

예:

```javascript
gl.viewport(
    0,
    100,
    500,
    500
);
```

이 경우 viewport는 아래쪽에서 `100px` 떨어진 위치부터 시작합니다.

여기서 주의할 점은 WebGL의 viewport 좌표 기준점이 **왼쪽 아래**라는 점입니다.

일반적인 CSS 좌표는:

```text
왼쪽 위
```

가 기준인 경우가 많지만 WebGL viewport는:

```text
왼쪽 아래
```

를 기준으로 생각합니다.

---

# `width`

Viewport의 너비를 지정합니다.

음수가 아닌 값이어야 합니다.

기본값은 canvas의 너비입니다.

예:

```javascript
gl.viewport(
    0,
    0,
    400,
    300
);
```

이면 viewport 너비는:

```text
400px
```

입니다.

---

# `height`

Viewport의 높이를 지정합니다.

음수가 아닌 값이어야 합니다.

기본값은 canvas의 높이입니다.

예:

```javascript
gl.viewport(
    0,
    0,
    400,
    300
);
```

이면 viewport 높이는:

```text
300px
```

입니다.

---

# 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

```javascript
const result = gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);

console.log(result);
// undefined
```

`viewport()`는 값을 반환하기 위한 함수가 아니라 WebGL의 **현재 렌더링 상태를 설정하는 함수**입니다.

---

# 오류

## `gl.INVALID_VALUE`

`width` 또는 `height`가 음수이면 발생합니다.

잘못된 예:

```javascript
gl.viewport(
    0,
    0,
    -500,
    300
);
```

또는:

```javascript
gl.viewport(
    0,
    0,
    500,
    -300
);
```

Viewport 크기는 음수가 될 수 없습니다.

---

# viewport는 왜 필요한가?

WebGL은 Vertex Shader에서 최종적으로 다음 값을 출력합니다.

```glsl
gl_Position
```

예를 들어:

```glsl
gl_Position = vec4(
    0.0,
    0.0,
    0.0,
    1.0
);
```

이 값은 곧바로 픽셀 좌표가 아닙니다.

WebGL 렌더링 파이프라인을 거치면 최종적으로 NDC라는 좌표 공간을 사용하게 됩니다.

NDC의 기본 범위는:

```text
X: -1 ~ 1
Y: -1 ~ 1
```

입니다.

예를 들어:

```text
(-1, 1)          (1, 1)

    ┌───────────┐
    │           │
    │   (0,0)   │
    │           │
    └───────────┘

(-1, -1)        (1, -1)
```

하지만 실제 canvas는:

```text
800px × 600px
```

같은 픽셀 크기를 가질 수 있습니다.

그래서 WebGL은 NDC 좌표를 실제 픽셀 위치로 변환해야 합니다.

그때 사용하는 영역이 `viewport`입니다.

```text
NDC
-1 ~ 1

↓ viewport()

Pixel coordinates
0 ~ width
0 ~ height
```

---

# NDC와 viewport의 관계

다음 viewport를 사용한다고 해보겠습니다.

```javascript
gl.viewport(
    0,
    0,
    800,
    600
);
```

그러면 NDC의 좌표가 대략 다음 화면 위치로 변환됩니다.

```text
NDC (-1, -1)
↓
canvas 왼쪽 아래

NDC (0, 0)
↓
canvas 중앙

NDC (1, 1)
↓
canvas 오른쪽 위
```

픽셀 기준으로 보면:

```text
NDC (-1, -1)
→ (0, 0)

NDC (0, 0)
→ (400, 300)

NDC (1, 1)
→ (800, 600)
```

와 비슷한 관계가 됩니다.

즉 `viewport()`는:

```text
WebGL 좌표 공간
↓
실제 화면 영역
```

을 연결하는 역할을 합니다.

---

# 기본 예제

WebGL context를 처음 만들면 기본 viewport 크기는 canvas 크기와 같습니다.

```html
<canvas id="canvas" width="640" height="480"></canvas>
```

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
```

이 경우 초기 viewport도 보통:

```text
0
0
640
480
```

에 해당합니다.

명시적으로 설정한다면:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

라고 작성할 수 있습니다.

---

# canvas 크기 변경 예제

MDN에서 특히 강조하는 부분입니다.

WebGL context를 처음 생성할 때는 viewport가 canvas 크기와 맞춰져 있습니다.

하지만 이후 canvas 크기를 변경하면 viewport도 다시 설정해야 합니다.

예를 들어:

```javascript
canvas.width = 1200;
canvas.height = 800;
```

처럼 canvas 크기를 바꿨다고 해보겠습니다.

그다음:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

를 호출합니다.

즉:

```text
canvas resize

        ↓

viewport도 resize
```

해줘야 합니다.

전체 예:

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
    );
}

window.addEventListener(
    "resize",
    resize
);

resize();
```

이렇게 하면 브라우저 크기가 바뀔 때마다 viewport도 canvas 크기에 맞춰집니다.

---

# 전체 화면 WebGL 예제

실제 WebGL 프로젝트에서는 이런 형태를 자주 사용합니다.

## HTML

```html
<canvas id="canvas"></canvas>
```

## CSS

```css
html,body{width: 100%; height: 100%; margin: 0;}
canvas{display: block; width: 100%; height: 100%;}
```

## JavaScript

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
    );
}

window.addEventListener(
    "resize",
    resizeCanvas
);

resizeCanvas();
```

이 구조는 WebGL이나 Three.js를 공부할 때도 많이 보게 되는 형태입니다.

---

# 화면 일부에만 렌더링하기

Viewport는 꼭 canvas 전체를 사용할 필요는 없습니다.

예를 들어 canvas가:

```text
800 × 600
```

이라고 해보겠습니다.

왼쪽 절반에만 렌더링하려면:

```javascript
gl.viewport(
    0,
    0,
    400,
    600
);
```

을 사용할 수 있습니다.

결과는 개념적으로:

```text
┌───────────────┐
│       │       │
│ WebGL │       │
│       │       │
│       │       │
└───────────────┘
```

처럼 왼쪽 절반만 렌더링 영역이 됩니다.

---

# 오른쪽 절반에 렌더링하기

오른쪽 절반을 사용하려면:

```javascript
gl.viewport(
    400,
    0,
    400,
    600
);
```

이라고 할 수 있습니다.

```text
┌───────────────┐
│       │       │
│       │ WebGL │
│       │       │
│       │       │
└───────────────┘
```

즉 `x`, `y`를 이용해서 viewport의 위치도 지정할 수 있습니다.

---

# 4분할 렌더링 예제

하나의 canvas를 네 영역으로 나누는 것도 가능합니다.

Canvas:

```text
800 × 600
```

이라면 한 영역 크기는:

```text
400 × 300
```

입니다.

### 왼쪽 아래

```javascript
gl.viewport(
    0,
    0,
    400,
    300
);
```

### 오른쪽 아래

```javascript
gl.viewport(
    400,
    0,
    400,
    300
);
```

### 왼쪽 위

```javascript
gl.viewport(
    0,
    300,
    400,
    300
);
```

### 오른쪽 위

```javascript
gl.viewport(
    400,
    300,
    400,
    300
);
```

개념적으로:

```text
┌────────┬────────┐
│        │        │
│   3    │   4    │
│        │        │
├────────┼────────┤
│        │        │
│   1    │   2    │
│        │        │
└────────┴────────┘
```

처럼 canvas 하나에 여러 viewport를 사용할 수 있습니다.

이런 방식은:

* 멀티 카메라
* 미니맵
* 에디터 뷰
* 분할 화면
* 디버깅 화면

같은 구조에서 활용할 수 있습니다.

---

# 현재 viewport 확인하기

현재 viewport 값을 확인하려면:

```javascript
gl.getParameter(
    gl.VIEWPORT
);
```

를 사용할 수 있습니다.

예:

```javascript
gl.viewport(
    0,
    0,
    640,
    480
);

const viewport = gl.getParameter(
    gl.VIEWPORT
);

console.log(viewport);
```

결과는 다음과 같은 `Int32Array` 형태가 될 수 있습니다.

```text
Int32Array[
    0,
    0,
    640,
    480
]
```

각 값은:

```text
[
    x,
    y,
    width,
    height
]
```

입니다.

즉:

```javascript
const viewport = gl.getParameter(
    gl.VIEWPORT
);

console.log(viewport[0]);
// x

console.log(viewport[1]);
// y

console.log(viewport[2]);
// width

console.log(viewport[3]);
// height
```

처럼 사용할 수 있습니다.

---

# 최대 viewport 크기 확인하기

GPU나 브라우저 구현에 따라 사용할 수 있는 viewport의 최대 크기가 다를 수 있습니다.

이를 확인하려면:

```javascript
gl.getParameter(
    gl.MAX_VIEWPORT_DIMS
);
```

를 사용합니다.

예:

```javascript
const maxViewport = gl.getParameter(
    gl.MAX_VIEWPORT_DIMS
);

console.log(maxViewport);
```

예를 들어:

```text
Int32Array[
    16384,
    16384
]
```

가 반환될 수 있습니다.

이 경우 최대 viewport 크기는:

```text
16384 × 16384
```

입니다.

다만 이 값은 GPU나 실행 환경에 따라 다를 수 있습니다.

---

# CSS 크기와 canvas 실제 크기의 차이

WebGL에서 자주 헷갈리는 부분입니다.

다음 CSS가 있다고 해보겠습니다.

```css
canvas{width: 800px; height: 600px;}
```

이건 canvas가 **화면에 보이는 크기**를 설정합니다.

하지만 canvas 내부 렌더링 해상도는 HTML 속성 또는 JavaScript의:

```javascript
canvas.width
canvas.height
```

로 결정됩니다.

예를 들어:

```html
<canvas id="canvas" width="300" height="150"></canvas>
```

에:

```css
canvas{width: 800px; height: 600px;}
```

를 사용한다면:

```text
CSS 표시 크기
800 × 600

실제 렌더링 버퍼
300 × 150
```

가 됩니다.

이 경우 WebGL을:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

로 설정하면 실제 viewport는:

```text
300 × 150
```

입니다.

CSS에 보이는 크기와 WebGL 렌더링 해상도가 다르기 때문에 화면이 흐릿하게 보일 수도 있습니다.

---

# devicePixelRatio까지 고려하는 예제

고해상도 디스플레이에서는 `devicePixelRatio`를 고려하는 경우가 많습니다.

예를 들어 화면에 canvas를:

```text
800 × 600 CSS px
```

크기로 보여주고 있다고 가정합니다.

Retina 같은 환경에서:

```javascript
window.devicePixelRatio
```

가 `2`라면 실제 렌더링 크기를:

```text
1600 × 1200
```

으로 만들 수 있습니다.

예:

```javascript
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    const width = Math.floor(
        canvas.clientWidth * dpr
    );

    const height = Math.floor(
        canvas.clientHeight * dpr
    );

    if (
        canvas.width !== width ||
        canvas.height !== height
    ) {
        canvas.width = width;
        canvas.height = height;
    }

    gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
    );
}
```

이렇게 하면 실제 canvas 렌더링 버퍼와 viewport 크기가 고해상도 화면에 맞춰집니다.

개념적으로:

```text
CSS 크기

800 × 600

        ↓

devicePixelRatio = 2

        ↓

canvas 실제 크기

1600 × 1200

        ↓

viewport

1600 × 1200
```

가 됩니다.

---

# viewport와 drawArrays()

`viewport()`는 어디에 그릴지를 지정하고, `drawArrays()`는 실제로 그리라는 명령을 내립니다.

예:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

역할을 구분하면:

```text
viewport()
↓
그릴 화면 영역 지정

drawArrays()
↓
실제로 그리기
```

입니다.

---

# viewport와 gl_Position

Vertex Shader에서 다음과 같이 출력한다고 해보겠습니다.

```glsl
void main() {
    gl_Position = vec4(
        0.0,
        0.0,
        0.0,
        1.0
    );
}
```

`x = 0`, `y = 0`은 NDC 기준 중앙입니다.

Viewport가:

```javascript
gl.viewport(
    0,
    0,
    800,
    600
);
```

이라면 이 정점은 대략:

```text
400, 300
```

위치에 나타나게 됩니다.

즉:

```text
gl_Position
↓
NDC
↓
viewport 변환
↓
실제 픽셀 위치
```

과정으로 화면에 나타납니다.

---

# 전체 흐름

WebGL 렌더링 흐름에서 viewport의 위치를 보면 다음과 같습니다.

```text
Vertex 데이터
↓
Vertex Shader
↓
gl_Position
↓
Perspective Divide
↓
Normalized Device Coordinates
↓
viewport()
↓
Window / Pixel Coordinates
↓
Rasterization
↓
Fragment Shader
↓
화면 출력
```

조금 더 쉽게 줄이면:

```text
Vertex Shader
↓
-1 ~ 1 좌표

viewport()
↓
실제 canvas 크기로 변환

drawArrays()
↓
렌더링
```

이라고 볼 수 있습니다.

실제 코드 흐름에서는 보통:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);

gl.useProgram(program);

gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);

gl.vertexAttribPointer(
    aPosition,
    2,
    gl.FLOAT,
    false,
    0,
    0
);

gl.enableVertexAttribArray(
    aPosition
);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

처럼 사용할 수 있습니다.

---

# 핵심 정리

`viewport()`를 한 줄로 정리하면:

```text
WebGL의 NDC 좌표를
실제 canvas의 어느 픽셀 영역에 출력할지 설정하는 메서드
```

입니다.

가장 일반적인 코드는:

```javascript
gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

입니다.

각 값의 의미는:

```text
0
↓
왼쪽 시작 위치

0
↓
아래쪽 시작 위치

canvas.width
↓
viewport 너비

canvas.height
↓
viewport 높이
```

입니다.

즉:

```text
canvas 전체를 렌더링 영역으로 사용
```

한다는 뜻입니다.

특히 중요한 흐름은:

```text
Vertex Shader
↓
gl_Position

NDC
↓
-1 ~ 1

viewport()
↓
실제 픽셀 영역으로 변환

drawArrays()
↓
화면에 렌더링
```

입니다.

그리고 canvas 크기를 변경했다면 일반적으로:

```javascript
canvas.width = width;
canvas.height = height;

gl.viewport(
    0,
    0,
    canvas.width,
    canvas.height
);
```

처럼 viewport도 함께 다시 설정해야 합니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [viewport()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport)
* [getParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter)
* [drawArrays()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)
* [drawElements()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements)
* [canvas](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
