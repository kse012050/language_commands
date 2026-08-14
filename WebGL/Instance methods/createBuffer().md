# WebGLRenderingContext: createBuffer() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.createBuffer()`** 메서드는 [`WebGLBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer) 객체를 생성하고 초기화합니다.

이 버퍼는 주로 다음과 같은 데이터를 저장하는 데 사용됩니다.

* 정점(Vertex) 데이터
* 색상(Color) 데이터
* 텍스처 좌표
* 인덱스 데이터

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예제](#예제)
* [명세](#명세)
* [브라우저 호환성](#브라우저-호환성)
* [관련 문서](#관련-문서)

## 문법

```javascript
createBuffer()
```

## 매개변수

없습니다.

`createBuffer()`는 별도의 인자를 전달하지 않고 호출합니다.

```javascript
const buffer = gl.createBuffer();
```

## 반환값

새로운 [`WebGLBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer) 객체를 반환합니다.

생성된 버퍼에는 다음과 같은 데이터를 저장할 수 있습니다.

* 정점 위치
* 색상
* 텍스처 좌표
* 인덱스

예를 들어 다음과 같이 버퍼를 생성할 수 있습니다.

```javascript
const buffer = gl.createBuffer();
```

다만 `createBuffer()`를 호출했다고 해서 바로 JavaScript의 배열 데이터가 GPU 버퍼에 저장되는 것은 아닙니다.

일반적으로 이후에 `bindBuffer()`와 `bufferData()`를 함께 사용합니다.

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

전체적인 흐름은 다음과 같습니다.

```text
createBuffer()
    ↓
bindBuffer()
    ↓
bufferData()
```

각 메서드의 역할은 다음과 같습니다.

### `createBuffer()`

GPU에서 사용할 버퍼 객체를 생성합니다.

```javascript
const buffer = gl.createBuffer();
```

### `bindBuffer()`

생성한 버퍼를 현재 사용할 버퍼로 지정합니다.

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### `bufferData()`

JavaScript에서 만든 실제 데이터를 WebGL 버퍼에 전달합니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

## 예제

### 버퍼 생성하기

```javascript
const canvas = document.getElementById("canvas");

const gl = canvas.getContext("webgl");

const buffer = gl.createBuffer();
```

각 코드의 역할을 보면 다음과 같습니다.

```javascript
const canvas = document.getElementById("canvas");
```

HTML에서 `canvas` 요소를 가져옵니다.

```javascript
const gl = canvas.getContext("webgl");
```

`canvas`에서 WebGL 렌더링 컨텍스트를 가져옵니다.

```javascript
const buffer = gl.createBuffer();
```

새로운 WebGL 버퍼 객체를 생성합니다.

## createBuffer()는 왜 필요한가?

WebGL에서는 삼각형이나 3D 모델을 그릴 때 많은 정점 데이터를 GPU에 전달해야 합니다.

예를 들어 삼각형의 위치 정보가 다음과 같다고 해보겠습니다.

```javascript
const vertices = [
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
];
```

이 배열은 JavaScript 메모리에 존재합니다.

하지만 GPU는 이 JavaScript 배열을 직접 사용하지 않습니다.

따라서 WebGL에서는 다음과 같은 과정이 필요합니다.

```text
JavaScript 데이터
    ↓
WebGLBuffer 생성
    ↓
버퍼에 데이터 저장
    ↓
GPU에서 사용
```

즉, `createBuffer()`는 **JavaScript의 데이터를 GPU가 사용할 수 있도록 전달하기 위한 저장 공간을 만드는 역할**을 합니다.

## 명세

자세한 WebGL 명세는 MDN의 관련 문서를 참고할 수 있습니다.

## 브라우저 호환성

`createBuffer()`는 오래전부터 대부분의 주요 브라우저에서 지원되고 있습니다.

MDN 기준으로 주요 브라우저에서는 **2015년 7월부터 폭넓게 사용할 수 있는 기능**으로 분류되어 있습니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLBuffer](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer)
* [bindBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer)
* [bufferData()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
