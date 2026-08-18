# WebGLRenderingContext: getProgramInfoLog() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.getProgramInfoLog()`** 메서드는 지정한 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)의 **정보 로그(Information Log)** 를 반환합니다.

이 로그에는 주로 다음과 같은 정보가 들어 있습니다.

* 프로그램 링크 실패 원인
* 프로그램 검증 실패 원인
* 경고 메시지
* 기타 진단 정보

쉽게 말하면:

```text
linkProgram()
↓
프로그램 링크 시도
↓
실패
↓
getProgramInfoLog()
↓
왜 실패했는지 확인
```

하는 메서드입니다.

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예제](#예제)
* [링크 오류 확인하기](#링크-오류-확인하기)
* [getProgramParameter()와의 관계](#getprogramparameter와의-관계)
* [getProgramInfoLog()는 왜 필요한가?](#getprograminfolog는-왜-필요한가)
* [getShaderInfoLog()와의 차이](#getshaderinfolog와의-차이)
* [전체 흐름](#전체-흐름)
* [핵심 정리](#핵심-정리)
* [관련 문서](#관련-문서)

## 문법

```javascript
getProgramInfoLog(program)
```

## 매개변수

### `program`

정보를 확인할 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체입니다.

일반적으로 `createProgram()`으로 만든 프로그램을 전달합니다.

```javascript
const program = gl.createProgram();

const info = gl.getProgramInfoLog(program);
```

실제로는 프로그램을 링크하거나 검증한 이후에 사용하는 경우가 많습니다.

```javascript
gl.linkProgram(program);

const info = gl.getProgramInfoLog(program);
```

## 반환값

마지막 **링크 또는 검증 작업**에 대한 다음 정보를 문자열로 반환합니다.

* 진단 메시지
* 경고 메시지
* 오류 메시지
* 기타 프로그램 관련 정보

```javascript
const info = gl.getProgramInfoLog(program);

console.log(info);
```

반환 타입은 문자열입니다.

```text
String
```

### 프로그램을 처음 생성한 경우

`WebGLProgram`을 처음 생성했을 때는 아직 링크나 검증 작업이 수행되지 않았기 때문에 정보 로그의 길이는 `0`입니다.

예를 들어:

```javascript
const program = gl.createProgram();

const info = gl.getProgramInfoLog(program);

console.log(info.length);
// 0
```

즉, 처음에는 다음과 같은 상태라고 생각하면 됩니다.

```text
createProgram()
↓
아직 링크 작업 없음
↓
정보 로그 없음
↓
""
```

## 예제

### 프로그램 오류 확인하기

MDN 예제는 다음과 같습니다.

```javascript
const program = gl.createProgram();

// 미리 생성된 셰이더 연결
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.getProgramInfoLog(program);
```

각 단계를 보면 다음과 같습니다.

### 프로그램 생성

```javascript
const program = gl.createProgram();
```

빈 `WebGLProgram` 객체를 생성합니다.

### Vertex Shader 연결

```javascript
gl.attachShader(program, vertexShader);
```

미리 컴파일된 Vertex Shader를 프로그램에 연결합니다.

### Fragment Shader 연결

```javascript
gl.attachShader(program, fragmentShader);
```

Fragment Shader도 프로그램에 연결합니다.

### 프로그램 링크

```javascript
gl.linkProgram(program);
```

연결된 두 셰이더를 하나의 실행 가능한 프로그램으로 링크합니다.

### 프로그램 로그 확인

```javascript
gl.getProgramInfoLog(program);
```

마지막 링크 작업에서 발생한 오류나 경고 정보를 가져옵니다.

## 링크 오류 확인하기

실제로는 `getProgramInfoLog()`만 단독으로 호출하기보다는 `getProgramParameter()`와 함께 사용하는 경우가 많습니다.

```javascript
gl.linkProgram(program);

const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);

if (!success) {
    const info = gl.getProgramInfoLog(program);

    console.error(info);
}
```

전체 흐름은 다음과 같습니다.

```text
linkProgram()
↓
프로그램 링크
↓
getProgramParameter(program, gl.LINK_STATUS)
↓
성공 여부 확인
↓
실패했다면
↓
getProgramInfoLog(program)
↓
실패 원인 확인
```

보통 다음처럼 작성합니다.

```javascript
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램 링크 실패.\n\n${info}`);
}
```

## getProgramParameter()와의 관계

`getProgramParameter()`와 `getProgramInfoLog()`는 역할이 다릅니다.

### getProgramParameter()

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

링크가 **성공했는지 실패했는지** 확인합니다.

즉:

```text
성공했어?
```

라고 묻는 역할입니다.

### getProgramInfoLog()

```javascript
gl.getProgramInfoLog(program);
```

링크 과정에서 **무슨 문제가 발생했는지** 확인합니다.

즉:

```text
왜 실패했어?
```

라고 묻는 역할입니다.

따라서 둘을 다음처럼 기억하면 쉽습니다.

```text
getProgramParameter(program, gl.LINK_STATUS)
↓
성공 여부 확인

getProgramInfoLog(program)
↓
실패 원인 확인
```

예를 들어:

```javascript
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    console.error(info);
}
```

라고 사용합니다.

## getProgramInfoLog()는 왜 필요한가?

`linkProgram()`은 프로그램을 링크하지만, 실패 원인을 직접 반환하지 않습니다.

```javascript
const result = gl.linkProgram(program);

console.log(result);
// undefined
```

즉 `linkProgram()`만 실행해서는:

```text
성공했는지?
왜 실패했는지?
```

를 바로 알 수 없습니다.

그래서 먼저:

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

를 이용해 성공 여부를 확인하고,

실패했다면:

```javascript
gl.getProgramInfoLog(program);
```

를 이용해 구체적인 오류 내용을 확인합니다.

즉:

```text
linkProgram()
실제 링크 작업 수행

        ↓

getProgramParameter()
작업 성공 여부 확인

        ↓

getProgramInfoLog()
오류 내용 확인
```

이라는 구조입니다.

## 어떤 오류를 확인할 수 있나?

대표적으로 Vertex Shader와 Fragment Shader 사이의 연결 문제가 있을 수 있습니다.

예를 들어 Vertex Shader에서:

```glsl
varying vec3 vColor;
```

를 사용하고 있는데 Fragment Shader에서:

```glsl
varying vec2 vColor;
```

처럼 서로 다른 타입으로 선언되어 있다면 프로그램 링크 과정에서 문제가 발생할 수 있습니다.

이때 각각의 셰이더가 따로 컴파일되는 데는 성공할 수도 있습니다.

```text
Vertex Shader
compileShader()
→ 성공

Fragment Shader
compileShader()
→ 성공
```

하지만 두 셰이더를 프로그램으로 연결하면:

```text
Vertex Shader
        +
Fragment Shader
        ↓
linkProgram()
        ↓
서로 인터페이스가 맞지 않음
        ↓
링크 실패
```

할 수 있습니다.

이때:

```javascript
const info = gl.getProgramInfoLog(program);
```

를 이용하면 프로그램 링크 관련 오류 정보를 확인할 수 있습니다.

## getShaderInfoLog()와의 차이

WebGL에는 비슷한 이름의 메서드가 있습니다.

```javascript
gl.getShaderInfoLog(shader);
```

와:

```javascript
gl.getProgramInfoLog(program);
```

입니다.

둘은 확인하는 대상이 다릅니다.

### getShaderInfoLog()

개별 셰이더의 **컴파일 오류**를 확인합니다.

```javascript
gl.compileShader(vertexShader);

const info = gl.getShaderInfoLog(vertexShader);
```

즉:

```text
GLSL 코드
↓
compileShader()
↓
문법 또는 컴파일 오류
↓
getShaderInfoLog()
```

입니다.

### getProgramInfoLog()

여러 셰이더를 하나의 프로그램으로 연결하는 과정의 **링크 또는 검증 오류**를 확인합니다.

```javascript
gl.linkProgram(program);

const info = gl.getProgramInfoLog(program);
```

즉:

```text
Vertex Shader
+
Fragment Shader
↓
linkProgram()
↓
링크 오류
↓
getProgramInfoLog()
```

입니다.

두 메서드의 차이는 다음처럼 기억하면 됩니다.

| 메서드                   | 확인 대상          | 주로 확인하는 오류      |
| --------------------- | -------------- | --------------- |
| `getShaderInfoLog()`  | `WebGLShader`  | 셰이더 컴파일 오류      |
| `getProgramInfoLog()` | `WebGLProgram` | 프로그램 링크 / 검증 오류 |

## 실제 디버깅 흐름

WebGL에서 셰이더 프로그램을 만들 때는 보통 두 단계로 오류를 확인합니다.

### 1. Shader 컴파일 확인

Vertex Shader를 컴파일합니다.

```javascript
gl.compileShader(vertexShader);
```

컴파일 성공 여부를 확인합니다.

```javascript
const success = gl.getShaderParameter(
    vertexShader,
    gl.COMPILE_STATUS
);
```

실패했다면:

```javascript
const info = gl.getShaderInfoLog(vertexShader);
```

로 오류를 확인합니다.

Fragment Shader도 동일하게 확인합니다.

### 2. Program 링크 확인

두 셰이더를 프로그램에 연결합니다.

```javascript
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

그리고 링크합니다.

```javascript
gl.linkProgram(program);
```

링크 성공 여부를 확인합니다.

```javascript
const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

실패했다면:

```javascript
const info = gl.getProgramInfoLog(program);
```

으로 오류 내용을 확인합니다.

전체 구조는 다음과 같습니다.

```text
Shader 코드
↓
compileShader()
↓
getShaderParameter(COMPILE_STATUS)
↓
실패
↓
getShaderInfoLog()


컴파일된 Shader
↓
attachShader()
↓
linkProgram()
↓
getProgramParameter(LINK_STATUS)
↓
실패
↓
getProgramInfoLog()
```

## 전체 흐름

지금까지 배운 프로그램 생성 과정을 연결하면 다음과 같습니다.

```text
Vertex Shader GLSL
    ↓
createShader()
    ↓
shaderSource()
    ↓
compileShader()
    ↓
getShaderParameter(COMPILE_STATUS)
    ↓
실패하면 getShaderInfoLog()


Fragment Shader GLSL
    ↓
createShader()
    ↓
shaderSource()
    ↓
compileShader()
    ↓
getShaderParameter(COMPILE_STATUS)
    ↓
실패하면 getShaderInfoLog()


createProgram()
    ↓
attachShader(vertexShader)
    ↓
attachShader(fragmentShader)
    ↓
linkProgram()
    ↓
getProgramParameter(LINK_STATUS)
    ↓
실패하면 getProgramInfoLog()
    ↓
사용 가능한 WebGLProgram
```

실제 코드 구조로 보면 다음과 같습니다.

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

const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);

if (!success) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램 링크 실패.\n\n${info}`);
}
```

## 핵심 정리

`getProgramInfoLog()`의 역할을 한 줄로 정리하면:

```text
WebGLProgram의 마지막 링크 또는 검증 과정에서 발생한
오류, 경고, 진단 정보를 문자열로 가져오는 메서드
```

입니다.

특히 다음 세 개는 한 세트로 기억하면 됩니다.

```text
linkProgram()
프로그램 링크

        ↓

getProgramParameter(program, gl.LINK_STATUS)
링크 성공 여부 확인

        ↓

getProgramInfoLog(program)
실패했다면 오류 원인 확인
```

그리고 Shader와 Program의 오류 확인도 구분해두는 것이 중요합니다.

```text
Shader 컴파일 오류
→ getShaderInfoLog()

Program 링크 오류
→ getProgramInfoLog()
```

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [createProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram)
* [attachShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader)
* [linkProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram)
* [getProgramParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter)
* [validateProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/validateProgram)
* [getShaderParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
* [getShaderInfoLog()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
