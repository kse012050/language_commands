# WebGLRenderingContext: attachShader() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.attachShader()`** 메서드는 Fragment Shader 또는 Vertex Shader 형태의 [`WebGLShader`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader)를 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)에 연결합니다.

쉽게 말하면,

```text
미리 만들어 둔 셰이더
↓
프로그램에 연결
```

하는 역할입니다.

일반적으로 Vertex Shader와 Fragment Shader를 각각 프로그램에 연결합니다.

```javascript
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예제](#예제)
* [attachShader()는 왜 필요한가?](#attachshader는-왜-필요한가)
* [createProgram()과의 관계](#createprogram과의-관계)
* [linkProgram()과의 관계](#linkprogram과의-관계)
* [전체 흐름](#전체-흐름)
* [관련 문서](#관련-문서)

## 문법

```javascript
attachShader(program, shader)
```

## 매개변수

`attachShader()`는 두 개의 값을 전달받습니다.

```text
attachShader(program, shader)
```

각각의 의미는 다음과 같습니다.

```text
program
셰이더를 연결할 WebGLProgram

shader
프로그램에 연결할 WebGLShader
```

## `program`

셰이더를 연결할 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체입니다.

보통 `createProgram()`으로 생성합니다.

```javascript
const program = gl.createProgram();
```

이렇게 만든 `program`은 처음에는 아직 셰이더가 연결되지 않은 상태입니다.

```text
WebGLProgram

[ 아직 셰이더 없음 ]
```

이 프로그램에 `attachShader()`를 사용해서 셰이더를 연결합니다.

```javascript
gl.attachShader(program, vertexShader);
```

## `shader`

프로그램에 연결할 [`WebGLShader`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader) 객체입니다.

Vertex Shader 또는 Fragment Shader를 전달할 수 있습니다.

예를 들어 Vertex Shader를 연결할 경우:

```javascript
gl.attachShader(program, vertexShader);
```

Fragment Shader를 연결할 경우:

```javascript
gl.attachShader(program, fragmentShader);
```

일반적으로 하나의 WebGL 프로그램에는 두 종류의 셰이더를 연결합니다.

```text
Vertex Shader
+
Fragment Shader
↓
WebGLProgram
```

## 반환값

반환값은 없습니다.

JavaScript 기준으로는 `undefined`를 반환합니다.

```javascript
const result = gl.attachShader(
    program,
    vertexShader
);

console.log(result);
// undefined
```

## 예제

다음 코드는 미리 생성되어 있는 Vertex Shader와 Fragment Shader를 `WebGLProgram`에 연결하는 예제입니다.

```javascript
const program = gl.createProgram();

// 미리 생성된 셰이더를 프로그램에 연결
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

각 코드를 하나씩 보면 다음과 같습니다.

### 프로그램 생성

```javascript
const program = gl.createProgram();
```

새로운 `WebGLProgram`을 생성합니다.

아직 프로그램 안에는 셰이더가 연결되어 있지 않습니다.

```text
program

[ ]
```

### Vertex Shader 연결

```javascript
gl.attachShader(program, vertexShader);
```

미리 생성하고 컴파일한 Vertex Shader를 프로그램에 연결합니다.

```text
vertexShader
    ↓
program
```

### Fragment Shader 연결

```javascript
gl.attachShader(program, fragmentShader);
```

Fragment Shader도 같은 프로그램에 연결합니다.

```text
vertexShader ──────┐
                   │
                   ▼
              WebGLProgram
                   ▲
                   │
fragmentShader ────┘
```

이 상태에서는 두 셰이더가 프로그램에 **연결만 되어 있는 상태**입니다.

아직 실행 가능한 프로그램이 완성된 것은 아닙니다.

### 프로그램 링크

```javascript
gl.linkProgram(program);
```

연결된 Vertex Shader와 Fragment Shader를 하나의 실행 가능한 WebGL 프로그램으로 링크합니다.

```text
Vertex Shader
+
Fragment Shader

    ↓

attachShader()

    ↓

WebGLProgram에 연결

    ↓

linkProgram()

    ↓

사용 가능한 WebGLProgram
```

## attachShader()는 왜 필요한가?

WebGL에서 Vertex Shader와 Fragment Shader는 처음에는 각각 독립적인 `WebGLShader` 객체입니다.

예를 들어:

```javascript
const vertexShader = gl.createShader(
    gl.VERTEX_SHADER
);

const fragmentShader = gl.createShader(
    gl.FRAGMENT_SHADER
);
```

이 둘은 서로 별개의 객체입니다.

```text
vertexShader

fragmentShader
```

하지만 렌더링할 때는 두 셰이더를 하나의 프로그램으로 함께 사용해야 합니다.

따라서 먼저 프로그램을 만듭니다.

```javascript
const program = gl.createProgram();
```

그리고 두 셰이더를 이 프로그램에 연결합니다.

```javascript
gl.attachShader(program, vertexShader);

gl.attachShader(program, fragmentShader);
```

개념적으로 보면:

```text
vertexShader
       \
        \
         → program
        /
       /
fragmentShader
```

입니다.

즉 `attachShader()`는

```text
셰이더와 프로그램을 연결한다
```

라고 이해하면 됩니다.

## createProgram()과의 관계

`createProgram()`과 `attachShader()`는 함께 사용하는 경우가 많습니다.

### createProgram()

```javascript
const program = gl.createProgram();
```

빈 프로그램 객체를 생성합니다.

```text
createProgram()

↓

WebGLProgram 생성
```

### attachShader()

```javascript
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

만든 프로그램에 셰이더를 연결합니다.

```text
createProgram()
    ↓
빈 프로그램 생성
    ↓
attachShader()
    ↓
셰이더 연결
```

따라서 두 메서드의 역할은 다음처럼 구분할 수 있습니다.

```text
createProgram()
프로그램을 만든다

attachShader()
그 프로그램에 셰이더를 연결한다
```

## linkProgram()과의 관계

`attachShader()`를 호출했다고 해서 바로 프로그램을 사용할 수 있는 것은 아닙니다.

예를 들어:

```javascript
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

까지 실행하면 두 셰이더가 프로그램에 연결되어 있을 뿐입니다.

이후 반드시 링크 과정을 거쳐야 합니다.

```javascript
gl.linkProgram(program);
```

전체 과정을 보면:

```text
Vertex Shader
Fragment Shader

        ↓

attachShader()

        ↓

WebGLProgram에 셰이더 연결

        ↓

linkProgram()

        ↓

실행 가능한 프로그램 완성
```

이라고 볼 수 있습니다.

## 미리 컴파일된 셰이더가 필요합니다

MDN 예제에서 중요한 표현이 하나 있습니다.

```javascript
// Attach pre-existing shaders
```

즉, `attachShader()`에서 사용하는 `vertexShader`와 `fragmentShader`는 미리 만들어져 있어야 합니다.

일반적으로 셰이더는 다음과 같은 순서로 준비합니다.

```javascript
const vertexShader = gl.createShader(
    gl.VERTEX_SHADER
);

gl.shaderSource(
    vertexShader,
    vertexShaderSource
);

gl.compileShader(vertexShader);
```

Fragment Shader도 동일합니다.

```javascript
const fragmentShader = gl.createShader(
    gl.FRAGMENT_SHADER
);

gl.shaderSource(
    fragmentShader,
    fragmentShaderSource
);

gl.compileShader(fragmentShader);
```

그리고 이렇게 만들어진 셰이더를 프로그램에 연결합니다.

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

## 전체 흐름

지금까지 나온 셰이더 관련 메서드를 연결하면 다음과 같습니다.

```text
Vertex Shader 소스
    ↓
createShader()
    ↓
shaderSource()
    ↓
compileShader()
    ↓
vertexShader


Fragment Shader 소스
    ↓
createShader()
    ↓
shaderSource()
    ↓
compileShader()
    ↓
fragmentShader


createProgram()
    ↓
program 생성
    ↓
attachShader(program, vertexShader)
    ↓
attachShader(program, fragmentShader)
    ↓
linkProgram(program)
    ↓
실행 가능한 WebGLProgram
```

코드로 보면 다음과 같습니다.

```javascript
const vertexShader = gl.createShader(
    gl.VERTEX_SHADER
);

gl.shaderSource(
    vertexShader,
    vertexShaderSource
);

gl.compileShader(vertexShader);


const fragmentShader = gl.createShader(
    gl.FRAGMENT_SHADER
);

gl.shaderSource(
    fragmentShader,
    fragmentShaderSource
);

gl.compileShader(fragmentShader);


const program = gl.createProgram();

gl.attachShader(
    program,
    vertexShader
);

gl.attachShader(
    program,
    fragmentShader
);

gl.linkProgram(program);
```

## 핵심 정리

`attachShader()`의 역할 자체는 단순합니다.

```text
attachShader()

→ WebGLShader를 WebGLProgram에 연결
```

일반적으로 다음 두 번 호출합니다.

```javascript
gl.attachShader(program, vertexShader);

gl.attachShader(program, fragmentShader);
```

그리고 다음 단계로:

```javascript
gl.linkProgram(program);
```

을 호출합니다.

따라서 다음 흐름으로 기억하면 됩니다.

```text
createProgram()
프로그램 생성

    ↓

attachShader()
Vertex Shader 연결

    ↓

attachShader()
Fragment Shader 연결

    ↓

linkProgram()
두 셰이더를 하나의 프로그램으로 링크
```

한 줄로 정리하면:

```text
attachShader() = 만들어 둔 셰이더를 프로그램에 꽂아 넣는 단계
```

라고 이해하면 됩니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [WebGLShader](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader)
* [createShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader)
* [createProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram)
* [shaderSource()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource)
* [compileShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader)
* [linkProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram)
* [getProgramParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter)
* [getProgramInfoLog()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
