# WebGLRenderingContext: useProgram() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.useProgram()`** 메서드는 지정한 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)을 **현재 렌더링에 사용할 프로그램으로 설정**합니다.

쉽게 말하면:

```text
createProgram()
↓
프로그램 생성

attachShader()
↓
셰이더 연결

linkProgram()
↓
실행 가능한 프로그램 완성

useProgram()
↓
지금부터 이 프로그램을 사용
```

이라고 보면 됩니다.

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예제](#예제)
* [useProgram()은 왜 필요한가?](#useprogram은-왜-필요한가)
* [linkProgram()과의 차이](#linkprogram과의-차이)
* [WebGL의 상태 기반 동작](#webgl의-상태-기반-동작)
* [여러 프로그램을 사용하는 경우](#여러-프로그램을-사용하는-경우)
* [현재 프로그램 확인하기](#현재-프로그램-확인하기)
* [전체 흐름](#전체-흐름)
* [핵심 정리](#핵심-정리)
* [관련 문서](#관련-문서)

## 문법

```javascript
useProgram(program)
```

## 매개변수

### `program`

현재 렌더링에 사용할 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체입니다.

일반적으로 다음 과정을 거쳐 완성된 프로그램을 전달합니다.

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.useProgram(program);
```

즉:

```text
program
↓
useProgram()
↓
현재 활성 프로그램으로 설정
```

합니다.

## 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

```javascript
const result = gl.useProgram(program);

console.log(result);
// undefined
```

`useProgram()`은 값을 반환하기 위한 함수가 아니라 WebGL의 **현재 상태를 변경하는 함수**입니다.

## 예제

MDN의 기본 예제는 다음과 같습니다.

```javascript
const program = gl.createProgram();

// 미리 생성된 셰이더 연결
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.useProgram(program);
```

각 단계를 하나씩 보면 다음과 같습니다.

### 프로그램 생성

```javascript
const program = gl.createProgram();
```

새로운 `WebGLProgram` 객체를 생성합니다.

아직 셰이더도 연결되어 있지 않고 사용할 수도 없는 빈 프로그램입니다.

### Vertex Shader 연결

```javascript
gl.attachShader(program, vertexShader);
```

미리 생성하고 컴파일한 Vertex Shader를 프로그램에 연결합니다.

### Fragment Shader 연결

```javascript
gl.attachShader(program, fragmentShader);
```

Fragment Shader도 같은 프로그램에 연결합니다.

이 상태는 다음과 같습니다.

```text
vertexShader ──────┐
                   │
                   ▼
              WebGLProgram
                   ▲
                   │
fragmentShader ────┘
```

### 프로그램 링크

```javascript
gl.linkProgram(program);
```

두 셰이더를 하나의 실행 가능한 프로그램으로 링크합니다.

```text
Vertex Shader
+
Fragment Shader
↓
linkProgram()
↓
사용 가능한 WebGLProgram
```

### 현재 프로그램으로 사용

```javascript
gl.useProgram(program);
```

링크가 완료된 `program`을 현재 WebGL 렌더링에서 사용할 프로그램으로 설정합니다.

즉 WebGL에게:

```text
"앞으로 그릴 때 이 Shader Program을 사용해."
```

라고 지정하는 단계입니다.

## useProgram()은 왜 필요한가?

`linkProgram()`까지 성공했다고 해서 WebGL이 그 프로그램을 자동으로 사용하는 것은 아닙니다.

예를 들어:

```javascript
gl.linkProgram(program);
```

까지 실행하면 프로그램은 사용할 준비가 된 상태입니다.

하지만 아직 WebGL의 현재 프로그램으로 선택되지는 않았습니다.

개념적으로 보면:

```text
linkProgram()

프로그램 준비 완료
하지만 아직 선택 안 됨
```

입니다.

그다음:

```javascript
gl.useProgram(program);
```

을 호출해야 실제 현재 프로그램으로 선택됩니다.

```text
linkProgram()
↓
프로그램 준비

useProgram()
↓
현재 사용할 프로그램 선택
```

즉 `useProgram()`의 핵심은 **선택**입니다.

## linkProgram()과의 차이

`linkProgram()`과 `useProgram()`은 서로 역할이 완전히 다릅니다.

### `linkProgram()`

```javascript
gl.linkProgram(program);
```

Vertex Shader와 Fragment Shader를 하나의 실행 가능한 프로그램으로 링크합니다.

즉:

```text
프로그램을 완성한다
```

는 역할입니다.

### `useProgram()`

```javascript
gl.useProgram(program);
```

이미 완성된 프로그램을 현재 렌더링에 사용할 프로그램으로 선택합니다.

즉:

```text
완성된 프로그램 중 하나를 선택한다
```

는 역할입니다.

따라서:

```text
linkProgram()
프로그램 완성

        ↓

useProgram()
완성된 프로그램 활성화
```

라고 구분하면 됩니다.

## WebGL의 상태 기반 동작

`useProgram()`을 이해하려면 WebGL이 **상태 기반(State Machine)** 으로 동작한다는 점을 알아두면 좋습니다.

앞에서 `bindBuffer()`도 비슷한 구조였습니다.

```javascript
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    buffer
);
```

이 코드는:

```text
"현재 사용할 ARRAY_BUFFER는 이 buffer야."
```

라고 WebGL 상태를 변경합니다.

`useProgram()`도 마찬가지입니다.

```javascript
gl.useProgram(program);
```

은:

```text
"현재 사용할 Shader Program은 이 program이야."
```

라고 WebGL 상태를 변경합니다.

따라서 둘을 비교하면:

```text
bindBuffer()
↓
현재 버퍼 선택

useProgram()
↓
현재 Shader Program 선택
```

이라고 볼 수 있습니다.

## 왜 현재 프로그램이라는 개념이 필요한가?

WebGL에서는 하나의 애플리케이션에서 여러 개의 Shader Program을 만들 수 있습니다.

예를 들어:

```javascript
const basicProgram = gl.createProgram();
const waterProgram = gl.createProgram();
const shadowProgram = gl.createProgram();
```

각 프로그램은 서로 다른 Vertex Shader와 Fragment Shader를 사용할 수 있습니다.

```text
basicProgram
├─ 기본 Vertex Shader
└─ 기본 Fragment Shader

waterProgram
├─ 물 Vertex Shader
└─ 물 Fragment Shader

shadowProgram
├─ 그림자 Vertex Shader
└─ 그림자 Fragment Shader
```

WebGL이 어떤 프로그램을 이용해서 렌더링해야 하는지 알아야 하므로 `useProgram()`을 사용합니다.

예를 들어:

```javascript
gl.useProgram(waterProgram);
```

을 호출하면 이후 렌더링에는 `waterProgram`이 사용됩니다.

## 여러 프로그램을 사용하는 경우

여러 오브젝트에 다른 Shader Program을 사용할 수도 있습니다.

예를 들어:

```javascript
gl.useProgram(characterProgram);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    characterVertexCount
);
```

캐릭터를 `characterProgram`으로 그립니다.

그다음:

```javascript
gl.useProgram(waterProgram);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    waterVertexCount
);
```

물은 `waterProgram`으로 그릴 수 있습니다.

전체 흐름은:

```text
useProgram(characterProgram)
↓
캐릭터 렌더링

useProgram(waterProgram)
↓
물 렌더링
```

입니다.

즉 프로그램을 바꾸고 싶다면 다시 `useProgram()`을 호출하면 됩니다.

## 현재 프로그램과 draw 호출

`drawArrays()`나 `drawElements()`로 실제 렌더링을 수행하면 WebGL은 현재 선택된 프로그램을 사용합니다.

예를 들어:

```javascript
gl.useProgram(program);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

이 코드는 개념적으로:

```text
useProgram(program)
↓
program을 현재 프로그램으로 설정

drawArrays()
↓
현재 선택된 program을 이용해서 렌더링
```

입니다.

`drawArrays()`에 프로그램 객체를 직접 전달하지 않는다는 점이 중요합니다.

다음처럼 쓰지 않습니다.

```javascript
gl.drawArrays(
    program,
    gl.TRIANGLES,
    0,
    3
);
```

대신 먼저:

```javascript
gl.useProgram(program);
```

을 호출해 현재 프로그램을 지정해놓고 렌더링합니다.

이 부분도 `bindBuffer()`와 매우 비슷합니다.

## bindBuffer()와 비교

버퍼의 경우:

```javascript
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    buffer
);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

입니다.

`bufferData()`에 `buffer`를 직접 전달하지 않습니다.

이미 `bindBuffer()`로 현재 버퍼를 선택했기 때문입니다.

Shader Program도 마찬가지입니다.

```javascript
gl.useProgram(program);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    3
);
```

`drawArrays()`에 `program`을 직접 전달하지 않습니다.

이미 `useProgram()`으로 현재 프로그램을 선택했기 때문입니다.

따라서:

```text
bindBuffer()
→ 현재 버퍼 선택

useProgram()
→ 현재 프로그램 선택
```

이라는 공통점이 있습니다.

## 현재 프로그램 확인하기

현재 어떤 `WebGLProgram`이 사용되고 있는지 확인하려면 `getParameter()`를 사용할 수 있습니다.

```javascript
const currentProgram = gl.getParameter(
    gl.CURRENT_PROGRAM
);
```

예를 들어:

```javascript
gl.useProgram(program);

const currentProgram = gl.getParameter(
    gl.CURRENT_PROGRAM
);

console.log(currentProgram === program);
// true
```

즉:

```javascript
gl.getParameter(
    gl.CURRENT_PROGRAM
);
```

은 현재 활성화된 `WebGLProgram`을 가져옵니다.

## 프로그램 링크 확인 후 사용하는 것이 좋음

일반적으로 프로그램은 링크 성공 여부를 확인한 다음 사용합니다.

```javascript
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램 링크 실패.\n\n${info}`);
}

gl.useProgram(program);
```

전체 흐름은 다음과 같습니다.

```text
linkProgram()
↓
프로그램 링크

getProgramParameter(
    program,
    gl.LINK_STATUS
)
↓
링크 성공 여부 확인

실패
↓
getProgramInfoLog()

성공
↓
useProgram()
↓
현재 프로그램으로 설정
```

## 프로그램을 해제하려면?

현재 사용 중인 프로그램을 해제하고 싶다면 `null`을 사용할 수 있습니다.

```javascript
gl.useProgram(null);
```

이렇게 하면 현재 활성 프로그램이 없는 상태가 됩니다.

개념적으로는:

```text
useProgram(program)
↓
program 활성화

useProgram(null)
↓
현재 프로그램 해제
```

입니다.

## 전체 흐름

지금까지의 Shader Program 생성 과정을 모두 연결하면 다음과 같습니다.

```text
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
WebGLProgram 생성

attachShader()
    ↓
Vertex Shader 연결

attachShader()
    ↓
Fragment Shader 연결

linkProgram()
    ↓
두 Shader를 하나의 Program으로 링크

getProgramParameter(
    program,
    gl.LINK_STATUS
)
    ↓
링크 성공 여부 확인

실패
    ↓
getProgramInfoLog()

성공
    ↓
useProgram(program)
    ↓
현재 렌더링 프로그램으로 설정

drawArrays() / drawElements()
    ↓
실제 렌더링
```

코드로 보면 다음과 같습니다.

```javascript
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

    throw new Error(`WebGL 프로그램 링크 실패.\n\n${info}`);
}

gl.useProgram(program);
```

이제 이후 렌더링 명령은 현재 선택된 `program`을 사용하게 됩니다.

## 핵심 정리

`useProgram()`의 역할을 한 줄로 정리하면:

```text
링크가 완료된 WebGLProgram을
현재 렌더링에 사용할 프로그램으로 선택한다.
```

입니다.

지금까지의 흐름에서 보면:

```text
createProgram()
프로그램 생성

        ↓

attachShader()
셰이더 연결

        ↓

linkProgram()
프로그램 완성

        ↓

useProgram()
완성된 프로그램을 현재 사용할 프로그램으로 선택

        ↓

drawArrays() / drawElements()
선택된 프로그램으로 실제 렌더링
```

이라고 이해하면 됩니다.

특히 다음 두 개를 구분하면 중요합니다.

```text
linkProgram()
= 프로그램을 사용할 수 있게 완성

useProgram()
= 완성된 프로그램을 지금 사용할 것으로 선택
```

그리고 `bindBuffer()`와 비교하면:

```text
bindBuffer()
= 현재 사용할 Buffer 선택

useProgram()
= 현재 사용할 Shader Program 선택
```

이라서 WebGL의 상태 기반 구조를 이해하는 데 도움이 됩니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [createProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram)
* [attachShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader)
* [linkProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram)
* [getProgramParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter)
* [getProgramInfoLog()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
* [getParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter)
* [drawArrays()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)
* [drawElements()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements)
* [deleteProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteProgram)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
