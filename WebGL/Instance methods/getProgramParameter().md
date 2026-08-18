# WebGLRenderingContext: getProgramParameter() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.getProgramParameter()`** 메서드는 주어진 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)의 상태나 정보를 조회합니다.

쉽게 말하면:

```text
WebGLProgram
↓
getProgramParameter()
↓
프로그램 상태나 정보 확인
```

하는 메서드입니다.

예를 들어 `linkProgram()`으로 프로그램을 링크한 뒤, 실제로 링크에 성공했는지 확인할 때 많이 사용합니다.

```javascript
const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [pname](#pname)
* [반환값](#반환값)
* [예제](#예제)
* [LINK_STATUS 확인하기](#link_status-확인하기)
* [ATTACHED_SHADERS 확인하기](#attached_shaders-확인하기)
* [ACTIVE_ATTRIBUTES와 ACTIVE_UNIFORMS](#active_attributes와-active_uniforms)
* [getProgramParameter()은 왜 필요한가?](#getprogramparameter는-왜-필요한가)
* [전체 흐름](#전체-흐름)
* [관련 문서](#관련-문서)

## 문법

```javascript
getProgramParameter(program, pname)
```

## 매개변수

`getProgramParameter()`는 두 개의 값을 전달받습니다.

```text
getProgramParameter(program, pname)
```

각각의 의미는 다음과 같습니다.

```text
program
정보를 확인할 WebGLProgram

pname
어떤 정보를 확인할 것인지 지정하는 값
```

## `program`

정보를 조회할 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체입니다.

보통 `createProgram()`으로 생성한 프로그램을 전달합니다.

```javascript
const program = gl.createProgram();
```

예를 들어 프로그램의 링크 상태를 확인하려면:

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

처럼 사용합니다.

## `pname`

프로그램에서 어떤 정보를 조회할 것인지 지정합니다.

`GLenum` 값을 사용하며, 대표적으로 다음 값들을 사용할 수 있습니다.

## `gl.DELETE_STATUS`

프로그램이 삭제 대상으로 표시되어 있는지 확인합니다.

```javascript
const deleteStatus = gl.getProgramParameter(
    program,
    gl.DELETE_STATUS
);
```

반환값은 `GLboolean`, 즉 JavaScript에서 참/거짓으로 사용할 수 있는 값입니다.

```text
true
프로그램이 삭제 대상으로 표시됨

false
삭제 대상으로 표시되지 않음
```

보통 `deleteProgram()`과 관련된 상태를 확인할 때 사용할 수 있습니다.

## `gl.LINK_STATUS`

가장 자주 사용하는 값 중 하나입니다.

마지막 `linkProgram()` 작업이 성공했는지 확인합니다.

```javascript
const linkStatus = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

성공하면 참에 해당하는 값을 반환하고, 실패하면 거짓에 해당하는 값을 반환합니다.

보통 다음처럼 사용합니다.

```javascript
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

즉:

```text
linkProgram()
↓
프로그램 링크 시도
↓
getProgramParameter(program, gl.LINK_STATUS)
↓
성공 여부 확인
```

하는 흐름입니다.

## `gl.VALIDATE_STATUS`

마지막 프로그램 검증 작업이 성공했는지 확인합니다.

```javascript
const validateStatus = gl.getProgramParameter(
    program,
    gl.VALIDATE_STATUS
);
```

`validateProgram()`을 호출한 이후 그 검증 결과를 확인할 때 사용합니다.

```javascript
gl.validateProgram(program);

const valid = gl.getProgramParameter(
    program,
    gl.VALIDATE_STATUS
);
```

쉽게 말하면:

```text
validateProgram()
↓
현재 WebGL 상태에서 프로그램 사용 가능 여부 검증

getProgramParameter(
    program,
    gl.VALIDATE_STATUS
)
↓
검증 결과 확인
```

입니다.

## `gl.ATTACHED_SHADERS`

프로그램에 현재 몇 개의 셰이더가 연결되어 있는지 반환합니다.

반환 타입은 `GLint`, 즉 정수입니다.

```javascript
const shaderCount = gl.getProgramParameter(
    program,
    gl.ATTACHED_SHADERS
);
```

일반적인 WebGL 프로그램에는 Vertex Shader와 Fragment Shader가 하나씩 연결되므로 보통 다음과 같은 값이 나올 수 있습니다.

```text
2
```

예를 들어:

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

const shaderCount = gl.getProgramParameter(
    program,
    gl.ATTACHED_SHADERS
);

console.log(shaderCount);
// 2
```

즉:

```text
Vertex Shader
+
Fragment Shader
↓
ATTACHED_SHADERS
↓
2
```

라고 볼 수 있습니다.

## `gl.ACTIVE_ATTRIBUTES`

프로그램에서 활성 상태인 `attribute` 변수의 개수를 반환합니다.

반환값은 정수입니다.

```javascript
const attributeCount = gl.getProgramParameter(
    program,
    gl.ACTIVE_ATTRIBUTES
);
```

예를 들어 Vertex Shader에 다음과 같은 `attribute`가 있다고 가정할 수 있습니다.

```glsl
attribute vec3 aPosition;
attribute vec3 aColor;
```

두 변수가 실제 프로그램에서 사용되고 활성 상태라면:

```javascript
const count = gl.getProgramParameter(
    program,
    gl.ACTIVE_ATTRIBUTES
);
```

의 결과가 `2`가 될 수 있습니다.

다만 단순히 선언되어 있다고 해서 항상 활성 상태가 되는 것은 아닙니다.

셰이더에서 실제로 사용되지 않는 변수는 컴파일 또는 링크 과정에서 최적화되어 활성 변수로 잡히지 않을 수 있습니다.

## `gl.ACTIVE_UNIFORMS`

프로그램에서 활성 상태인 `uniform` 변수의 개수를 반환합니다.

```javascript
const uniformCount = gl.getProgramParameter(
    program,
    gl.ACTIVE_UNIFORMS
);
```

예를 들어 셰이더에:

```glsl
uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
```

같은 uniform 변수가 있고 실제로 사용되고 있다면 활성 uniform 개수를 조회할 수 있습니다.

```javascript
const count = gl.getProgramParameter(
    program,
    gl.ACTIVE_UNIFORMS
);

console.log(count);
```

## WebGL 2에서 추가된 pname

WebGL 2에서는 다음과 같은 값도 추가로 사용할 수 있습니다.

## `gl.TRANSFORM_FEEDBACK_BUFFER_MODE`

Transform Feedback가 활성화되어 있을 때 사용되는 버퍼 모드를 반환합니다.

반환값은 다음 중 하나가 될 수 있습니다.

```javascript
gl.SEPARATE_ATTRIBS
```

또는

```javascript
gl.INTERLEAVED_ATTRIBS
```

### `gl.SEPARATE_ATTRIBS`

각 varying 데이터를 서로 다른 버퍼에 저장하는 방식입니다.

### `gl.INTERLEAVED_ATTRIBS`

여러 varying 데이터를 하나의 버퍼에 섞어서 저장하는 방식입니다.

## `gl.TRANSFORM_FEEDBACK_VARYINGS`

Transform Feedback에서 캡처하도록 설정된 varying 변수의 개수를 반환합니다.

```javascript
const count = gl.getProgramParameter(
    program,
    gl.TRANSFORM_FEEDBACK_VARYINGS
);
```

반환값은 정수입니다.

## `gl.ACTIVE_UNIFORM_BLOCKS`

활성 uniform을 포함하고 있는 Uniform Block의 개수를 반환합니다.

```javascript
const count = gl.getProgramParameter(
    program,
    gl.ACTIVE_UNIFORM_BLOCKS
);
```

Uniform Block은 WebGL 2에서 여러 uniform 데이터를 하나의 블록으로 묶어 관리할 때 사용합니다.

입문 단계에서는 우선 WebGL 1에서 자주 사용하는 다음 값들을 중심으로 보면 충분합니다.

```javascript
gl.LINK_STATUS
gl.ATTACHED_SHADERS
gl.ACTIVE_ATTRIBUTES
gl.ACTIVE_UNIFORMS
```

그중에서도 가장 먼저 이해해야 할 것은:

```javascript
gl.LINK_STATUS
```

입니다.

## 반환값

`pname`으로 요청한 프로그램 정보를 반환합니다.

즉 `getProgramParameter()`의 반환 타입은 고정되어 있지 않습니다.

어떤 `pname`을 전달했는지에 따라 결과가 달라집니다.

예를 들어:

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

는 참/거짓 값을 반환합니다.

반면:

```javascript
gl.getProgramParameter(
    program,
    gl.ATTACHED_SHADERS
);
```

는 숫자를 반환합니다.

즉:

```text
pname
↓
어떤 정보를 요청했는가
↓
반환값의 의미와 타입도 달라짐
```

이라고 이해하면 됩니다.

대표적으로 정리하면:

| `pname`                | 반환 정보           |
| ---------------------- | --------------- |
| `gl.DELETE_STATUS`     | 삭제 대상 여부        |
| `gl.LINK_STATUS`       | 링크 성공 여부        |
| `gl.VALIDATE_STATUS`   | 검증 성공 여부        |
| `gl.ATTACHED_SHADERS`  | 연결된 셰이더 개수      |
| `gl.ACTIVE_ATTRIBUTES` | 활성 attribute 개수 |
| `gl.ACTIVE_UNIFORMS`   | 활성 uniform 개수   |

## 예제

MDN의 기본 예제는 다음과 같습니다.

```javascript
gl.getProgramParameter(
    program,
    gl.DELETE_STATUS
);
```

이 코드는 해당 프로그램이 삭제 대상으로 표시되어 있는지 확인합니다.

실제 WebGL 코드에서는 `LINK_STATUS`를 확인하는 예제를 훨씬 자주 볼 수 있습니다.

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

## LINK_STATUS 확인하기

`getProgramParameter()`의 대표적인 사용법입니다.

먼저 프로그램을 링크합니다.

```javascript
gl.linkProgram(program);
```

그다음 링크가 성공했는지 확인합니다.

```javascript
const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

그리고 실패했다면 오류 메시지를 확인합니다.

```javascript
if (!success) {
    const info = gl.getProgramInfoLog(program);

    console.error(info);
}
```

전체적으로 보면:

```javascript
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

입니다.

## ATTACHED_SHADERS 확인하기

프로그램에 연결된 셰이더 개수를 확인할 수 있습니다.

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

const count = gl.getProgramParameter(
    program,
    gl.ATTACHED_SHADERS
);

console.log(count);
// 일반적으로 2
```

이 경우 프로그램 구조는 다음과 같습니다.

```text
program
├─ vertexShader
└─ fragmentShader
```

따라서:

```text
ATTACHED_SHADERS = 2
```

가 됩니다.

## ACTIVE_ATTRIBUTES와 ACTIVE_UNIFORMS

프로그램 내부에서 실제로 활성 상태인 Shader 변수의 개수를 확인할 수도 있습니다.

예를 들어:

```javascript
const attributeCount = gl.getProgramParameter(
    program,
    gl.ACTIVE_ATTRIBUTES
);

const uniformCount = gl.getProgramParameter(
    program,
    gl.ACTIVE_UNIFORMS
);
```

이 정보를 이용하면 프로그램 내부에 실제로 활성화된 attribute와 uniform이 몇 개인지 확인할 수 있습니다.

```text
WebGLProgram

├─ Active Attributes
│   ├─ aPosition
│   └─ aColor
│
└─ Active Uniforms
    ├─ uModelMatrix
    └─ uProjectionMatrix
```

이런 정보를 기반으로 각각의 변수 정보를 추가로 조회할 수도 있습니다.

예를 들어:

```javascript
gl.getActiveAttrib();
```

또는:

```javascript
gl.getActiveUniform();
```

같은 메서드와 함께 사용할 수 있습니다.

## getProgramParameter()은 왜 필요한가?

`createProgram()`, `attachShader()`, `linkProgram()` 같은 메서드는 프로그램에 작업을 수행합니다.

하지만 작업이 성공했는지 또는 프로그램이 현재 어떤 상태인지 알아야 할 때가 있습니다.

예를 들어:

```javascript
gl.linkProgram(program);
```

만 호출하면 WebGL은 프로그램 링크를 시도합니다.

하지만 이 코드만으로는 JavaScript에서 성공 여부를 바로 알 수 없습니다.

`linkProgram()` 자체는 반환값이 없기 때문입니다.

```text
linkProgram()
↓
반환값 없음
```

그래서 다음과 같이 상태를 조회합니다.

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

즉:

```text
linkProgram()
프로그램에 작업 수행

        ↓

getProgramParameter()
작업 결과 또는 현재 상태 조회
```

라고 보면 됩니다.

## 전체 흐름

지금까지의 프로그램 생성 과정을 연결하면 다음과 같습니다.

```text
createShader()
↓
Vertex Shader 생성

shaderSource()
↓
GLSL 코드 입력

compileShader()
↓
Vertex Shader 컴파일


createShader()
↓
Fragment Shader 생성

shaderSource()
↓
GLSL 코드 입력

compileShader()
↓
Fragment Shader 컴파일


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
프로그램 링크

getProgramParameter(
    program,
    gl.LINK_STATUS
)
↓
링크 성공 여부 확인
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

const success = gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);

if (!success) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

## 핵심 정리

`getProgramParameter()`는 한 줄로 정리하면:

```text
WebGLProgram의 현재 상태나 정보를 조회하는 메서드
```

입니다.

특히 가장 자주 보게 되는 코드는:

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

입니다.

이 코드는:

```text
이 프로그램의 마지막 링크 작업이 성공했는가?
```

를 확인합니다.

따라서 지금까지의 흐름에서는:

```text
linkProgram()
프로그램 링크

        ↓

getProgramParameter(program, gl.LINK_STATUS)
링크 성공 여부 확인

        ↓

getProgramInfoLog()
실패했다면 오류 내용 확인
```

이 세 개를 한 세트로 기억하면 이해하기 쉽습니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [createProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram)
* [attachShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader)
* [linkProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram)
* [getProgramInfoLog()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
* [validateProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/validateProgram)
* [getActiveAttrib()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
* [getActiveUniform()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveUniform)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
