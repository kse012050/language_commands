# WebGLRenderingContext: bindBuffer() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.bindBuffer()`** 메서드는 지정한 [`WebGLBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer)를 특정 **타깃(target)** 에 바인딩합니다.

쉽게 말하면, `createBuffer()`로 만든 버퍼를 **"지금부터 이 용도로 사용하겠다"라고 WebGL에 지정하는 역할**을 합니다.

예를 들어 다음 코드는 `buffer`를 정점 데이터용 버퍼로 사용하겠다는 의미입니다.

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예외](#예외)
* [예제](#예제)
* [현재 바인딩 확인하기](#현재-바인딩-확인하기)
* [bindBuffer()는 왜 필요한가?](#bindbuffer는-왜-필요한가)
* [관련 문서](#관련-문서)

## 문법

```javascript
bindBuffer(target, buffer)
```

## 매개변수

### `target`

버퍼를 어떤 용도로 사용할 것인지 지정하는 값입니다.

`GLenum` 타입의 값을 사용합니다.

WebGL 1에서는 주로 다음 두 가지 값을 사용합니다.

### `gl.ARRAY_BUFFER`

정점(Vertex)의 속성 데이터를 저장하는 버퍼입니다.

예를 들어 다음과 같은 데이터를 저장할 때 사용합니다.

* 정점 좌표
* 텍스처 좌표
* 정점 색상
* 노멀 벡터

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

가장 흔하게 사용하는 버퍼 타입 중 하나입니다.

예를 들어 삼각형의 정점 좌표를 GPU에 전달할 때 사용할 수 있습니다.

```javascript
const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);
```

이런 정점 데이터를 저장할 버퍼라면 일반적으로 `gl.ARRAY_BUFFER`에 바인딩합니다.

### `gl.ELEMENT_ARRAY_BUFFER`

정점 자체가 아니라 **정점의 인덱스(index)** 를 저장하는 버퍼입니다.

```javascript
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
```

예를 들어 여러 삼각형에서 같은 정점을 반복해서 사용해야 할 경우, 정점 데이터를 계속 중복해서 작성하는 대신 인덱스를 이용할 수 있습니다.

```text
정점 데이터

0 → 왼쪽 위
1 → 왼쪽 아래
2 → 오른쪽 아래
3 → 오른쪽 위
```

그리고 삼각형을 다음처럼 표현할 수 있습니다.

```text
첫 번째 삼각형: 0, 1, 2
두 번째 삼각형: 0, 2, 3
```

이런 인덱스 정보를 저장할 때 `ELEMENT_ARRAY_BUFFER`를 사용합니다.

## WebGL 2에서 추가된 target

WebGL 2 환경에서는 추가적인 버퍼 타깃을 사용할 수 있습니다.

### `gl.COPY_READ_BUFFER`

버퍼 객체에서 다른 버퍼 객체로 데이터를 복사할 때 **읽기 대상**으로 사용하는 버퍼입니다.

### `gl.COPY_WRITE_BUFFER`

버퍼 객체 간 데이터를 복사할 때 **쓰기 대상**으로 사용하는 버퍼입니다.

### `gl.TRANSFORM_FEEDBACK_BUFFER`

Transform Feedback 연산에서 사용하는 버퍼입니다.

GPU에서 처리된 정점 데이터를 다시 버퍼에 저장할 때 사용할 수 있습니다.

### `gl.UNIFORM_BUFFER`

Uniform Block 데이터를 저장하는 버퍼입니다.

여러 셰이더에서 공통으로 사용하는 uniform 데이터를 하나의 버퍼로 관리할 때 사용할 수 있습니다.

### `gl.PIXEL_PACK_BUFFER`

픽셀 데이터를 GPU에서 버퍼로 전달하는 작업에 사용합니다.

### `gl.PIXEL_UNPACK_BUFFER`

픽셀 데이터를 버퍼에서 GPU로 전달하는 작업에 사용합니다.

일반적인 WebGL 입문 단계에서는 우선 다음 두 가지를 가장 중요하게 보면 됩니다.

```javascript
gl.ARRAY_BUFFER
gl.ELEMENT_ARRAY_BUFFER
```

## `buffer`

바인딩할 [`WebGLBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer) 객체를 전달합니다.

보통 `createBuffer()`로 생성한 값을 사용합니다.

```javascript
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

즉,

```javascript
const buffer = gl.createBuffer();
```

는 버퍼를 **생성**하고,

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

는 생성된 버퍼를 **현재 사용할 버퍼로 지정**합니다.

## 반환값

반환값은 없습니다.

JavaScript 기준으로는 `undefined`를 반환합니다.

```javascript
const result = gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

console.log(result);
// undefined
```

## 예외

### 하나의 WebGLBuffer는 하나의 target 타입으로 사용됩니다

하나의 [`WebGLBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer)는 처음 사용된 버퍼 타입과 다른 타입으로 다시 바인딩할 수 없습니다.

예를 들어 다음과 같이 사용했다고 가정합니다.

```javascript
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

이 버퍼는 `ARRAY_BUFFER`로 사용되었습니다.

이후 같은 버퍼를 다음처럼 다른 타깃에 연결하려고 하면 문제가 발생합니다.

```javascript
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
```

이 경우 WebGL은 `INVALID_OPERATION` 오류를 발생시킵니다.

기존의 버퍼 바인딩 상태는 그대로 유지됩니다.

따라서 일반적으로 용도가 다른 버퍼는 각각 따로 생성합니다.

```javascript
const vertexBuffer = gl.createBuffer();
const indexBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
```

### 삭제된 버퍼는 다시 바인딩할 수 없습니다

`deleteBuffer()`로 삭제 대상으로 표시된 버퍼는 다시 바인딩할 수 없습니다.

```javascript
gl.deleteBuffer(buffer);
```

그 이후 다음과 같이 다시 바인딩하려고 하면:

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

`INVALID_OPERATION` 오류가 발생합니다.

현재의 버퍼 바인딩 상태는 변경되지 않습니다.

## 예제

### 버퍼를 target에 바인딩하기

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

각 코드의 역할을 보면 다음과 같습니다.

```javascript
const canvas = document.getElementById("canvas");
```

HTML의 `canvas` 요소를 가져옵니다.

```javascript
const gl = canvas.getContext("webgl");
```

`canvas`에서 WebGL 렌더링 컨텍스트를 가져옵니다.

```javascript
const buffer = gl.createBuffer();
```

새로운 WebGL 버퍼 객체를 생성합니다.

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

생성한 버퍼를 `ARRAY_BUFFER`에 바인딩합니다.

즉, 앞으로 정점 관련 데이터를 넣을 대상으로 이 버퍼를 지정합니다.

## 일반적인 사용 흐름

`bindBuffer()`는 일반적으로 `createBuffer()`와 `bufferData()` 사이에서 사용됩니다.

```javascript
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
    ]),
    gl.STATIC_DRAW
);
```

전체 흐름은 다음과 같습니다.

```text
createBuffer()
    ↓
bindBuffer()
    ↓
bufferData()
```

각각의 역할은 다음과 같습니다.

```text
createBuffer()
버퍼 객체 생성

        ↓

bindBuffer()
현재 사용할 버퍼 지정

        ↓

bufferData()
실제 데이터를 해당 버퍼에 저장
```

중요한 점은 `bufferData()`에서 버퍼 객체를 직접 전달하지 않는다는 것입니다.

예를 들어:

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

여기에는 `buffer` 변수가 없습니다.

그 이유는 이미 이전에:

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

를 실행했기 때문입니다.

WebGL은 현재 `ARRAY_BUFFER`에 어떤 버퍼가 연결되어 있는지 기억하고 있기 때문에, 이후 `bufferData()`는 현재 바인딩된 버퍼를 대상으로 데이터를 저장합니다.

## 현재 바인딩 확인하기

현재 어떤 버퍼가 바인딩되어 있는지 확인하려면 `getParameter()`를 사용할 수 있습니다.

### ARRAY_BUFFER 확인

```javascript
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
```

현재 `gl.ARRAY_BUFFER`에 바인딩되어 있는 `WebGLBuffer`를 반환합니다.

예를 들어:

```javascript
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

const currentBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);

console.log(currentBuffer);
```

`currentBuffer`에는 현재 연결된 `buffer` 객체가 들어갑니다.

### ELEMENT_ARRAY_BUFFER 확인

```javascript
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

현재 `gl.ELEMENT_ARRAY_BUFFER`에 바인딩된 버퍼를 확인합니다.

## bindBuffer()는 왜 필요한가?

WebGL은 내부적으로 **상태 기반(State Machine)** 방식으로 동작합니다.

즉, WebGL에게 계속해서:

```text
"이 객체에 이 작업을 해줘"
```

라고 객체를 직접 전달하는 방식보다는,

먼저:

```text
"지금부터 이 버퍼를 사용할 거야"
```

라고 지정하고,

그다음:

```text
"현재 선택된 버퍼에 데이터를 넣어"
```

라고 명령하는 방식입니다.

예를 들어:

```javascript
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

이 코드는 개념적으로 다음과 같습니다.

```text
1. 버퍼 하나 생성

buffer
    ↓

2. 이 버퍼를 ARRAY_BUFFER로 선택

ARRAY_BUFFER → buffer

    ↓

3. 현재 ARRAY_BUFFER에 선택된 버퍼에 데이터 저장

vertices → buffer
```

그래서 `bindBuffer()`를 이해할 때는 **"연결한다"보다는 "현재 작업 대상으로 선택한다"**라고 이해하면 훨씬 쉽습니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLBuffer](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer)
* [createBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer)
* [bufferData()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
* [deleteBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteBuffer)
* [getParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
