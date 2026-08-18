# WebGLRenderingContext: linkProgram() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

[`WebGLRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)의 **`linkProgram()`** 메서드는 주어진 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)을 링크합니다.

이 과정은 프로그램에 연결된 Vertex Shader와 Fragment Shader를 GPU에서 실제로 사용할 수 있는 형태로 준비하는 마지막 단계입니다.

쉽게 말하면:

```text id="obn2k3"
Vertex Shader
+
Fragment Shader
↓
attachShader()
↓
Program에 연결
↓
linkProgram()
↓
실행 가능한 WebGLProgram 완성
```

이라고 보면 됩니다.

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예제](#예제)
* [linkProgram()은 왜 필요한가?](#linkprogram은-왜-필요한가)
* [attachShader()와의 차이](#attachshader와의-차이)
* [링크 성공 여부 확인하기](#링크-성공-여부-확인하기)
* [링크 오류 확인하기](#링크-오류-확인하기)
* [전체 흐름](#전체-흐름)
* [관련 문서](#관련-문서)

## 문법

```javascript id="fsvllc"
linkProgram(program)
```

## 매개변수

### `program`

링크할 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체입니다.

일반적으로 `createProgram()`으로 생성한 프로그램을 전달합니다.

```javascript id="n54i4h"
const program = gl.createProgram();

gl.linkProgram(program);
```

하지만 실제로는 `linkProgram()`을 호출하기 전에 Vertex Shader와 Fragment Shader를 먼저 프로그램에 연결해야 합니다.

```javascript id="w2a6ul"
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
```

## 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

```javascript id="hn72u5"
const result = gl.linkProgram(program);

console.log(result);
// undefined
```

따라서 링크가 성공했는지는 반환값으로 확인하는 것이 아닙니다.

대신 `getProgramParameter()`와 `gl.LINK_STATUS`를 사용합니다.

```javascript id="z79bdv"
const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

## 예제

```javascript id="f2xwoz"
const program = gl.createProgram();

// 미리 생성하고 컴파일한 셰이더 연결
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

각 단계의 역할을 하나씩 보면 다음과 같습니다.

## 프로그램 생성

```javascript id="9w4q6n"
const program = gl.createProgram();
```

새로운 `WebGLProgram` 객체를 생성합니다.

이 시점에는 프로그램 안에 셰이더가 없습니다.

```text id="32o0my"
WebGLProgram

[ ]
```

## Vertex Shader 연결

```javascript id="yqhicj"
gl.attachShader(program, vertexShader);
```

미리 생성하고 컴파일한 Vertex Shader를 프로그램에 연결합니다.

## Fragment Shader 연결

```javascript id="ip0417"
gl.attachShader(program, fragmentShader);
```

Fragment Shader도 동일한 프로그램에 연결합니다.

이 시점은 다음과 같습니다.

```text id="dvi8rh"
vertexShader ──────┐
                   │
                   ▼
              WebGLProgram
                   ▲
                   │
fragmentShader ────┘
```

하지만 아직 두 셰이더는 단순히 같은 프로그램에 **연결된 상태**입니다.

## 프로그램 링크

```javascript id="rkye31"
gl.linkProgram(program);
```

이제 프로그램에 연결된 Vertex Shader와 Fragment Shader를 링크합니다.

링크가 성공하면 두 셰이더가 하나의 GPU 프로그램으로 사용될 수 있게 됩니다.

```text id="ymzuhd"
vertexShader
+
fragmentShader

    ↓

linkProgram()

    ↓

GPU에서 사용할 수 있는
WebGLProgram
```

## linkProgram()은 왜 필요한가?

Vertex Shader와 Fragment Shader는 각각 따로 컴파일됩니다.

예를 들어:

```javascript id="cxusz9"
gl.compileShader(vertexShader);

gl.compileShader(fragmentShader);
```

여기까지 성공했다고 해서 프로그램 전체가 정상이라는 의미는 아닙니다.

두 셰이더가 서로 호환되는지도 확인해야 합니다.

예를 들어 Vertex Shader가 다음 값을 Fragment Shader에 전달한다고 가정해 보겠습니다.

```glsl id="e2nb3f"
varying vec3 vColor;
```

그런데 Fragment Shader에서는 다른 타입으로 받는다면:

```glsl id="wq578w"
varying vec2 vColor;
```

각 셰이더를 따로 컴파일할 때는 문제가 발견되지 않을 수도 있습니다.

하지만 두 셰이더를 하나의 프로그램으로 연결하면 타입이 서로 맞지 않기 때문에 링크 과정에서 문제가 발생할 수 있습니다.

즉:

```text id="kobv6i"
compileShader()

→ 셰이더 하나하나가 문법적으로 올바른지 확인


linkProgram()

→ Vertex Shader와 Fragment Shader가
   서로 함께 사용할 수 있는지 확인
```

이라고 이해하면 됩니다.

## attachShader()와의 차이

`attachShader()`와 `linkProgram()`은 비슷해 보이지만 역할이 다릅니다.

### attachShader()

```javascript id="9jzykg"
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

셰이더를 프로그램에 **연결**합니다.

즉:

```text id="p7qflt"
Shader → Program
```

관계를 만들어주는 단계입니다.

아직 하나의 실행 가능한 프로그램이 된 것은 아닙니다.

### linkProgram()

```javascript id="h7wlbe"
gl.linkProgram(program);
```

프로그램에 연결되어 있는 셰이더들을 실제로 하나의 실행 가능한 프로그램으로 **링크**합니다.

따라서:

```text id="9j0xql"
attachShader()
셰이더를 프로그램에 붙인다

        ↓

linkProgram()
붙여놓은 셰이더들을 실제로 하나의 프로그램으로 결합한다
```

라고 구분하면 됩니다.

## 링크 성공 여부 확인하기

`linkProgram()`은 반환값이 없기 때문에 링크 성공 여부를 별도로 확인해야 합니다.

사용하는 코드는 다음과 같습니다.

```javascript id="h8yig5"
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

링크에 성공하면 참에 해당하는 값을 반환합니다.

예를 들어:

```javascript id="9flzns"
const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);

if (success) {
    console.log("프로그램 링크 성공");
}
```

보통은 실패했을 때 처리하도록 작성합니다.

```javascript id="crr2qq"
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log("프로그램 링크 실패");
}
```

## 링크 오류 확인하기

링크에 실패했다면 `getProgramInfoLog()`를 사용해서 오류 정보를 확인할 수 있습니다.

```javascript id="u9v16y"
const info = gl.getProgramInfoLog(program);
```

일반적으로 다음처럼 사용합니다.

```javascript id="agkil7"
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    console.error(info);
}
```

MDN 예제에서는 오류를 발생시키도록 작성되어 있습니다.

```javascript id="tnvrne"
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

## compileShader()와 linkProgram()의 차이

WebGL 셰이더를 처음 공부할 때 중요한 부분입니다.

### compileShader()

```javascript id="yx9uv2"
gl.compileShader(vertexShader);
```

개별 셰이더 하나를 컴파일합니다.

예를 들어:

```text id="ia8u2n"
Vertex Shader GLSL 코드
↓
compileShader()
↓
컴파일된 Vertex Shader
```

Fragment Shader도 별도로 컴파일합니다.

```text id="cpa4c4"
Fragment Shader GLSL 코드
↓
compileShader()
↓
컴파일된 Fragment Shader
```

### linkProgram()

```javascript id="uf68y6"
gl.linkProgram(program);
```

이미 컴파일된 셰이더들을 하나의 프로그램으로 연결합니다.

```text id="lf6slh"
컴파일된 Vertex Shader
+
컴파일된 Fragment Shader
↓
linkProgram()
↓
실행 가능한 WebGLProgram
```

따라서 다음과 같이 기억하면 됩니다.

```text id="zsk4qi"
compileShader()
각 셰이더를 따로 준비

linkProgram()
준비된 셰이더들을 하나의 프로그램으로 결합
```

## 전체 흐름

셰이더 소스 코드부터 실제 WebGL 프로그램이 만들어지는 과정은 다음과 같습니다.

```text id="4pqklj"
Vertex Shader GLSL
    ↓
createShader()
    ↓
shaderSource()
    ↓
compileShader()
    ↓
vertexShader


Fragment Shader GLSL
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

코드로 연결하면 다음과 같습니다.

```javascript id="2ozjrn"
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


if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

## 핵심 정리

`linkProgram()`의 역할을 한 줄로 정리하면:

```text id="yx64bj"
프로그램에 연결된 Vertex Shader와 Fragment Shader를
실제로 실행 가능한 하나의 WebGLProgram으로 결합한다.
```

지금까지의 흐름은 다음처럼 기억하면 됩니다.

```text id="9p0jtu"
createShader()
셰이더 생성

    ↓

shaderSource()
GLSL 코드 입력

    ↓

compileShader()
개별 셰이더 컴파일

    ↓

createProgram()
프로그램 객체 생성

    ↓

attachShader()
셰이더를 프로그램에 연결

    ↓

linkProgram()
연결된 셰이더를 하나의 프로그램으로 결합
```

특히:

```text id="yh9y6g"
attachShader() = 붙이기

linkProgram() = 실제로 결합하기
```

라고 구분하면 이해하기 쉽습니다.

## 관련 문서

* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [WebGLShader](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader)
* [createShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader)
* [shaderSource()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource)
* [compileShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader)
* [createProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram)
* [attachShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader)
* [getProgramParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter)
* [getProgramInfoLog()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
