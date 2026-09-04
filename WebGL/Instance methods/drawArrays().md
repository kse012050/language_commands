# WebGLRenderingContext: drawArrays() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays#browser_compatibility)
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.drawArrays()`** 메서드는 배열 형태로 준비된 정점 데이터를 이용해서 실제 도형을 렌더링합니다.

쉽게 말하면 지금까지 준비한:

```text
Shader Program
+
Vertex Buffer
+
Attribute 설정
```

을 실제 화면에 그리는 명령 중 하나입니다.

예를 들어:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

이라고 하면:

```text
정점 0번부터 시작해서
정점 3개를 사용하고
TRIANGLES 방식으로 그려라
```

라는 의미입니다.

---

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [mode](#mode)
* [first](#first)
* [count](#count)
* [반환값](#반환값)
* [오류](#오류)
* [예제](#예제)
* [TRIANGLES 예제](#triangles-예제)
* [POINTS 예제](#points-예제)
* [LINES 예제](#lines-예제)
* [TRIANGLE_STRIP 예제](#triangle_strip-예제)
* [first와 count 이해하기](#first와-count-이해하기)
* [drawArrays()는 왜 필요한가?](#drawarrays는-왜-필요한가)
* [drawElements()와의 차이](#drawelements와의-차이)
* [전체 흐름](#전체-흐름)
* [핵심 정리](#핵심-정리)
* [관련 문서](#관련-문서)

---

## 문법

```javascript
drawArrays(mode, first, count)
```

예:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

---

## 매개변수

`drawArrays()`는 세 개의 값을 받습니다.

```text
drawArrays(mode, first, count)
```

각각의 의미는 다음과 같습니다.

```text
mode
어떤 방식으로 정점들을 연결해서 그릴지

first
몇 번째 정점부터 시작할지

count
정점을 몇 개 사용할지
```

---

# `mode`

어떤 Primitive 방식으로 도형을 그릴지 지정합니다.

사용 가능한 대표적인 값은 다음과 같습니다.

---

## `gl.POINTS`

각 정점을 하나의 점으로 그립니다.

```javascript
gl.drawArrays(
    gl.POINTS,
    0,
    3
);
```

정점이:

```text
A
B
C
```

라면 결과는:

```text
●     ●     ●
A     B     C
```

처럼 각각 독립된 점으로 그려집니다.

### `gl_PointSize`

`gl.POINTS`를 사용할 때 Vertex Shader에서 점 크기를 직접 지정해야 할 수 있습니다.

```glsl
gl_PointSize = 10.0;
```

예:

```glsl
attribute vec2 aPosition;

void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    gl_PointSize = 10.0;
}
```

GPU에 따라 `gl_PointSize` 기본값이 명확하지 않을 수 있기 때문에 직접 지정하는 편이 안전합니다.

---

## `gl.LINE_STRIP`

정점들을 순서대로 이어서 선을 그립니다.

예:

```text
A → B → C → D
```

결과:

```text
A────B────C────D
```

마지막 정점과 첫 번째 정점은 연결하지 않습니다.

```javascript
gl.drawArrays(
    gl.LINE_STRIP,
    0,
    4
);
```

---

## `gl.LINE_LOOP`

`LINE_STRIP`과 비슷하지만 마지막 정점을 다시 첫 번째 정점과 연결합니다.

```text
A → B → C → D → A
```

결과:

```text
A────B
│    │
D────C
```

예:

```javascript
gl.drawArrays(
    gl.LINE_LOOP,
    0,
    4
);
```

사각형의 외곽선 같은 것을 그릴 때 사용할 수 있습니다.

---

## `gl.LINES`

정점 두 개씩 한 쌍으로 선을 그립니다.

예를 들어 정점이:

```text
A B C D
```

라면:

```text
A────B

C────D
```

가 됩니다.

```javascript
gl.drawArrays(
    gl.LINES,
    0,
    4
);
```

즉:

```text
0, 1 → 첫 번째 선
2, 3 → 두 번째 선
4, 5 → 세 번째 선
```

처럼 정점을 두 개씩 소비합니다.

---

## `gl.TRIANGLES`

정점 세 개씩 하나의 삼각형을 만듭니다.

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

정점:

```text
A
B
C
```

를 이용해서:

```text
    A
   / \
  /   \
 B─────C
```

삼각형 하나를 만듭니다.

정점이 6개라면:

```text
0, 1, 2 → 첫 번째 삼각형

3, 4, 5 → 두 번째 삼각형
```

이 됩니다.

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    6
);
```

---

## `gl.TRIANGLE_STRIP`

앞에서 사용한 정점을 재사용하면서 연결된 삼각형을 만듭니다.

예를 들어 정점이:

```text
A
B
C
D
```

라면:

```text
A, B, C
```

로 첫 번째 삼각형을 만들고,

```text
B, C, D
```

로 두 번째 삼각형을 만듭니다.

즉:

```text
첫 번째
0, 1, 2

두 번째
1, 2, 3

세 번째
2, 3, 4
```

처럼 이어집니다.

같은 정점을 반복해서 작성하지 않아도 되는 장점이 있습니다.

---

## `gl.TRIANGLE_FAN`

하나의 중심 정점을 기준으로 주변 정점들과 삼각형을 만듭니다.

예를 들어:

```text
       B
      / \
     /   \
    A─────C
     \   /
      \ /
       D
```

라고 할 때 `A`를 중심으로:

```text
A, B, C
A, C, D
```

형태의 삼각형을 만들 수 있습니다.

팬처럼 펼쳐지는 구조입니다.

---

# `first`

배열에서 몇 번째 정점부터 그리기 시작할지 지정합니다.

예를 들어 정점 데이터가:

```text
0 → A
1 → B
2 → C
3 → D
4 → E
5 → F
```

라고 할 때:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

이면:

```text
0, 1, 2
```

를 사용합니다.

즉:

```text
A, B, C
```

입니다.

반면:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    3,
    3
);
```

이면:

```text
3, 4, 5
```

를 사용합니다.

즉:

```text
D, E, F
```

입니다.

---

# `count`

몇 개의 정점을 사용할지 지정합니다.

예를 들어:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

의 `3`은:

```text
정점 3개 사용
```

이라는 의미입니다.

주의할 점은 `count`가 **삼각형 개수**가 아니라 **정점 개수**라는 점입니다.

```text
gl.TRIANGLES

count = 3
→ 삼각형 1개

count = 6
→ 삼각형 2개

count = 9
→ 삼각형 3개
```

입니다.

---

# 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

```javascript
const result = gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);

console.log(result);
// undefined
```

`drawArrays()`는 값을 반환하는 함수가 아니라 GPU에 렌더링 명령을 전달하는 함수입니다.

---

# 오류

## `gl.INVALID_ENUM`

`mode`에 허용되지 않은 값을 전달하면 발생합니다.

잘못된 예:

```javascript
gl.drawArrays(
    123,
    0,
    3
);
```

---

## `gl.INVALID_VALUE`

`first` 또는 `count`가 음수일 경우 발생합니다.

잘못된 예:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    -1,
    3
);
```

또는:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    -3
);
```

---

## `gl.INVALID_OPERATION`

현재 사용 중인 Shader Program이 없다면 발생합니다.

즉:

```javascript
gl.getParameter(
    gl.CURRENT_PROGRAM
);
```

의 결과가 `null`인 상태에서는 정상적으로 그릴 수 없습니다.

일반적으로 먼저:

```javascript
gl.useProgram(program);
```

을 실행해야 합니다.

즉:

```text
useProgram()
↓
현재 Shader Program 선택
↓
drawArrays()
↓
렌더링
```

순서가 필요합니다.

---

# 예제

MDN의 기본 예제는 다음과 같습니다.

```javascript
gl.drawArrays(
    gl.POINTS,
    0,
    8
);
```

의미는:

```text
POINTS 방식으로

0번 정점부터

8개의 정점을 사용해서

8개의 점을 그려라
```

입니다.

---

# TRIANGLES 예제

가장 기본적인 삼각형을 그리는 예제입니다.

## HTML

```html
<canvas id="canvas" width="500" height="500"></canvas>
```

## JavaScript

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const vertexShaderSource = `
    attribute vec2 aPosition;

    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision mediump float;

    void main() {
        gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0);
    }
`;

function createShader(gl, type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(shader);

        gl.deleteShader(shader);

        throw new Error(info);
    }

    return shader;
}

const vertexShader = createShader(
    gl,
    gl.VERTEX_SHADER,
    vertexShaderSource
);

const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
);

const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(info);
}

gl.useProgram(program);

const vertices = new Float32Array([
    0.0, 0.7,
    -0.7, -0.7,
    0.7, -0.7
]);

const vertexBuffer = gl.createBuffer();

gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);

const aPosition = gl.getAttribLocation(
    program,
    "aPosition"
);

gl.enableVertexAttribArray(aPosition);

gl.vertexAttribPointer(
    aPosition,
    2,
    gl.FLOAT,
    false,
    0,
    0
);

gl.clearColor(
    0.0,
    0.0,
    0.0,
    1.0
);

gl.clear(
    gl.COLOR_BUFFER_BIT
);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

마지막 부분이 실제 렌더링 명령입니다.

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

의미는:

```text
gl.TRIANGLES
↓
삼각형 방식

0
↓
0번 정점부터

3
↓
정점 3개 사용
```

입니다.

결과적으로:

```text
    Vertex 0
       ▲
      / \
     /   \
    /     \
   ▼───────▼
Vertex 1  Vertex 2
```

삼각형 하나가 만들어집니다.

---

# POINTS 예제

같은 정점 데이터를 점으로 그릴 수도 있습니다.

Vertex Shader에서 `gl_PointSize`를 설정합니다.

```glsl
attribute vec2 aPosition;

void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    gl_PointSize = 15.0;
}
```

그리고:

```javascript
gl.drawArrays(
    gl.POINTS,
    0,
    3
);
```

을 호출합니다.

결과는 삼각형이 아니라 세 개의 점이 됩니다.

```text
        ●


●               ●
```

같은 정점 데이터를 사용하더라도 `mode`에 따라 결과가 달라지는 것입니다.

```text
gl.TRIANGLES
↓
삼각형

gl.POINTS
↓
점
```

---

# LINES 예제

정점 네 개를 사용해서 두 개의 선을 그릴 수 있습니다.

```javascript
const vertices = new Float32Array([
    -0.8, 0.5,
    0.8, 0.5,

    -0.8, -0.5,
    0.8, -0.5
]);
```

그리고:

```javascript
gl.drawArrays(
    gl.LINES,
    0,
    4
);
```

을 호출합니다.

WebGL은 정점을 두 개씩 묶습니다.

```text
정점 0 + 정점 1
↓
첫 번째 선

정점 2 + 정점 3
↓
두 번째 선
```

결과:

```text
──────────────


──────────────
```

가 됩니다.

---

# LINE_LOOP 예제

사각형 외곽선을 만들 수도 있습니다.

```javascript
const vertices = new Float32Array([
    -0.5, 0.5,
    0.5, 0.5,
    0.5, -0.5,
    -0.5, -0.5
]);
```

그리고:

```javascript
gl.drawArrays(
    gl.LINE_LOOP,
    0,
    4
);
```

을 호출합니다.

정점은:

```text
0 → 1
1 → 2
2 → 3
3 → 0
```

순서로 연결됩니다.

결과:

```text
0────────1
│        │
│        │
3────────2
```

가 됩니다.

---

# TRIANGLE_STRIP 예제

정점 네 개만으로 사각형을 만들 수 있습니다.

```javascript
const vertices = new Float32Array([
    -0.5, 0.5,
    -0.5, -0.5,
    0.5, 0.5,
    0.5, -0.5
]);
```

그리고:

```javascript
gl.drawArrays(
    gl.TRIANGLE_STRIP,
    0,
    4
);
```

을 호출합니다.

정점 사용은 개념적으로:

```text
첫 번째 삼각형
0, 1, 2

두 번째 삼각형
1, 2, 3
```

처럼 이루어집니다.

결과적으로 두 삼각형이 붙어서 사각형이 됩니다.

```text
0────────2
│      / │
│    /   │
│  /     │
1────────3
```

이 방식은 정점 중복을 줄일 수 있다는 장점이 있습니다.

---

# first와 count 이해하기

다음과 같은 정점 배열이 있다고 해보겠습니다.

```javascript
const vertices = new Float32Array([
    0.0, 0.8,
    -0.8, 0.0,
    0.0, 0.0,

    0.0, 0.0,
    0.8, 0.0,
    0.0, -0.8
]);
```

총 정점은 6개입니다.

```text
Vertex 0
Vertex 1
Vertex 2

Vertex 3
Vertex 4
Vertex 5
```

첫 번째 삼각형만 그리려면:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

입니다.

즉:

```text
start = 0

0, 1, 2
```

를 사용합니다.

두 번째 삼각형만 그리려면:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    3,
    3
);
```

입니다.

즉:

```text
start = 3

3, 4, 5
```

를 사용합니다.

두 삼각형을 전부 그리려면:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    6
);
```

입니다.

---

# drawArrays()는 왜 필요한가?

지금까지 WebGL에서 많은 준비 작업을 했습니다.

먼저 Shader를 만들었습니다.

```text
createShader()
↓
shaderSource()
↓
compileShader()
```

Program도 만들었습니다.

```text
createProgram()
↓
attachShader()
↓
linkProgram()
↓
useProgram()
```

Vertex Buffer도 준비했습니다.

```text
createBuffer()
↓
bindBuffer()
↓
bufferData()
```

그리고 Buffer와 Shader Attribute를 연결했습니다.

```text
getAttribLocation()
↓
enableVertexAttribArray()
↓
vertexAttribPointer()
```

하지만 여기까지 했다고 화면에 자동으로 도형이 나타나는 것은 아닙니다.

마지막으로:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

같은 **Draw Call**을 호출해야 합니다.

즉:

```text
데이터 준비
+
Shader 준비
+
Attribute 연결

        ↓

drawArrays()

        ↓

GPU에게 실제로 그리라고 명령

        ↓

화면에 결과 출력
```

입니다.

`drawArrays()`는 실제 렌더링을 요청하는 함수라고 생각하면 됩니다.

---

# Draw Call

그래픽 프로그래밍에서는:

```javascript
gl.drawArrays();
```

또는:

```javascript
gl.drawElements();
```

같이 실제 렌더링을 요청하는 호출을 **Draw Call**이라고 부릅니다.

즉:

```text
JavaScript
↓
GPU에게

"지금 설정된 상태와 데이터를 이용해서 그려"

라고 명령
```

하는 것입니다.

그래서 WebGL 성능을 이야기할 때도 **Draw Call 개수**라는 표현을 자주 보게 됩니다.

---

# drawElements()와의 차이

`drawArrays()`와 자주 비교되는 함수가:

```javascript
gl.drawElements();
```

입니다.

## drawArrays()

정점 배열을 순서대로 사용합니다.

예:

```text
0
1
2

3
4
5
```

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    6
);
```

정점 6개를 그대로 사용합니다.

## drawElements()

Index Buffer를 사용합니다.

예를 들어 사각형을 그릴 때 정점은 4개만 만들고:

```text
0 ───── 1
│       │
│       │
3 ───── 2
```

인덱스를:

```javascript
const indices = new Uint16Array([
    0, 1, 2,
    0, 2, 3
]);
```

처럼 지정할 수 있습니다.

즉:

```text
첫 번째 삼각형
0, 1, 2

두 번째 삼각형
0, 2, 3
```

입니다.

같은 정점을 재사용할 수 있습니다.

따라서:

```text
drawArrays()
↓
Vertex 순서대로 직접 사용

drawElements()
↓
Index를 이용해서 Vertex 재사용
```

이라고 보면 됩니다.

---

# 전체 흐름

WebGL로 삼각형 하나를 그리는 전체 흐름을 보면 다음과 같습니다.

```text
Vertex Shader 작성
↓
createShader()
↓
shaderSource()
↓
compileShader()

Fragment Shader 작성
↓
createShader()
↓
shaderSource()
↓
compileShader()

createProgram()
↓
attachShader()
↓
linkProgram()
↓
useProgram()

Vertex 데이터 생성
↓
createBuffer()
↓
bindBuffer()
↓
bufferData()

getAttribLocation()
↓
Attribute 위치 찾기

enableVertexAttribArray()
↓
Attribute 활성화

vertexAttribPointer()
↓
Buffer와 Attribute 연결

drawArrays()
↓
실제 렌더링
```

코드의 핵심 흐름만 줄이면:

```javascript
gl.useProgram(program);

gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);

gl.enableVertexAttribArray(
    aPosition
);

gl.vertexAttribPointer(
    aPosition,
    2,
    gl.FLOAT,
    false,
    0,
    0
);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

입니다.

---

# 핵심 정리

`drawArrays()`를 한 줄로 정리하면:

```text
현재 설정된 Shader와 Vertex 데이터를 이용해서
GPU에게 실제 도형을 그리도록 명령하는 메서드
```

입니다.

문법:

```javascript
gl.drawArrays(
    mode,
    first,
    count
);
```

각 값은:

```text
mode
어떤 형태로 정점을 연결할지

first
몇 번째 정점부터 시작할지

count
정점을 몇 개 사용할지
```

입니다.

예:

```javascript
gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

는:

```text
TRIANGLES 방식으로

0번 Vertex부터

3개의 Vertex를 사용해서

삼각형 하나를 그려라
```

라는 의미입니다.

지금까지 배운 흐름에서는:

```text
createBuffer()
↓
bindBuffer()
↓
bufferData()

getAttribLocation()
↓
enableVertexAttribArray()
↓
vertexAttribPointer()

useProgram()
↓
drawArrays()
```

순서로 이해하면 됩니다.

특히:

```text
bufferData()
= GPU에 데이터 준비

vertexAttribPointer()
= 데이터를 Shader가 읽도록 연결

drawArrays()
= 이제 실제로 그려
```

라고 기억하면 가장 이해하기 쉽습니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [drawArrays()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)
* [drawElements()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements)
* [useProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram)
* [bindBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer)
* [bufferData()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
* [getAttribLocation()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation)
* [enableVertexAttribArray()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
* [vertexAttribPointer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
