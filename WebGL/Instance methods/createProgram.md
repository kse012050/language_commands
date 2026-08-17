# WebGLRenderingContext: createProgram() 메서드

WebGL API의 **`WebGLRenderingContext.createProgram()`** 메서드는 새로운 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체를 생성합니다.

`WebGLProgram`은 보통 다음 두 셰이더를 하나의 프로그램으로 연결해서 사용할 때 필요합니다.

* Vertex Shader
* Fragment Shader

쉽게 말하면,

```text
Vertex Shader
+
Fragment Shader
↓
WebGLProgram
```

형태라고 보면 됩니다.

## 문법

```javascript
createProgram()
```

## 매개변수

없습니다.

`createProgram()`은 별도의 인자를 전달하지 않고 호출합니다.

```javascript
const program = gl.createProgram();
```

## 반환값

새로운 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체를 반환합니다.

이 프로그램에는 이미 컴파일된 두 개의 [`WebGLShader`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader)를 연결할 수 있습니다.

일반적으로 다음 두 셰이더를 사용합니다.

* Vertex Shader
* Fragment Shader

두 셰이더는 모두 GLSL로 작성됩니다.

그다음 `linkProgram()`을 사용해서 두 셰이더를 하나의 실제 사용 가능한 WebGL 프로그램으로 연결합니다.

전체 흐름은 다음과 같습니다.

```text
Vertex Shader
    ↓

compileShader()

    ↓

Fragment Shader
    ↓

compileShader()

    ↓

createProgram()

    ↓

attachShader()

    ↓

linkProgram()

    ↓

WebGLProgram
```

## 예제

### WebGL 프로그램 생성하기

```javascript
const program = gl.createProgram();

// 미리 생성하고 컴파일한 셰이더를 프로그램에 연결
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

각 코드가 하는 일을 하나씩 보면 다음과 같습니다.

### 프로그램 객체 생성

```javascript
const program = gl.createProgram();
```

새로운 `WebGLProgram` 객체를 생성합니다.

아직 이 상태에서는 셰이더가 연결되어 있지 않습니다.

개념적으로는 빈 프로그램 객체를 하나 만든 상태입니다.

```text
program

[ 비어 있음 ]
```

## attachShader()

```javascript
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

이미 생성하고 컴파일한 셰이더를 프로그램에 연결합니다.

첫 번째 코드는 Vertex Shader를 연결합니다.

```javascript
gl.attachShader(program, vertexShader);
```

두 번째 코드는 Fragment Shader를 연결합니다.

```javascript
gl.attachShader(program, fragmentShader);
```

개념적으로 보면 다음과 같습니다.

```text
vertexShader ─────┐
                  │
                  ▼
              WebGLProgram
                  ▲
                  │
fragmentShader ───┘
```

중요한 점은 `attachShader()`는 셰이더를 단순히 프로그램에 **연결하는 단계**라는 것입니다.

아직 최종적으로 하나의 프로그램이 된 것은 아닙니다.

## linkProgram()

셰이더를 모두 연결했다면 다음으로 프로그램을 링크해야 합니다.

```javascript
gl.linkProgram(program);
```

`linkProgram()`은 프로그램에 연결된 Vertex Shader와 Fragment Shader를 검사하고 하나의 실행 가능한 WebGL 프로그램으로 연결합니다.

즉:

```text
vertexShader
+
fragmentShader

    ↓

attachShader()

    ↓

linkProgram()

    ↓

실제로 사용할 수 있는 WebGLProgram
```

이라고 이해하면 됩니다.

## 링크 성공 여부 확인하기

프로그램 링크가 항상 성공하는 것은 아닙니다.

그래서 일반적으로 링크가 성공했는지 확인합니다.

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

전체 코드는 다음과 같습니다.

```javascript
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);

    throw new Error(`WebGL 프로그램을 링크할 수 없습니다.\n\n${info}`);
}
```

### `gl.LINK_STATUS`

프로그램 링크 성공 여부를 확인하는 값입니다.

```javascript
gl.getProgramParameter(
    program,
    gl.LINK_STATUS
);
```

링크에 성공하면 `true`에 해당하는 값을 반환합니다.

실패하면 `false`에 해당하는 값을 반환합니다.

따라서:

```javascript
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
```

는

```text
프로그램 링크에 실패했다면
```

이라는 의미입니다.

## getProgramInfoLog()

프로그램 링크에 실패했다면 원인을 확인해야 합니다.

이때 사용하는 것이:

```javascript
gl.getProgramInfoLog(program);
```

입니다.

프로그램 링크 과정에서 발생한 오류 메시지를 문자열로 반환합니다.

예를 들어:

```javascript
const info = gl.getProgramInfoLog(program);

console.log(info);
```

를 통해 셰이더 간 연결 문제 등을 확인할 수 있습니다.

## createProgram() 전체 흐름

`createProgram()`만 따로 보면 단순히 프로그램 객체 하나를 생성하는 메서드입니다.

하지만 실제 WebGL에서는 셰이더 생성 과정과 함께 이해해야 합니다.

전체적인 과정은 다음과 같습니다.

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


vertexShader + fragmentShader
    ↓
createProgram()
    ↓
attachShader()
    ↓
linkProgram()
    ↓
WebGLProgram
```

코드로 보면 다음과 같은 구조입니다.

```javascript
const vertexShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertexShader, vertexShaderSource);

gl.compileShader(vertexShader);


const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(fragmentShader, fragmentShaderSource);

gl.compileShader(fragmentShader);


const program = gl.createProgram();

gl.attachShader(program, vertexShader);

gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
```

## createShader()와 createProgram()의 차이

처음 공부할 때 가장 헷갈릴 수 있는 부분입니다.

### createShader()

```javascript
gl.createShader();
```

개별 셰이더 객체를 생성합니다.

예를 들어:

```text
Vertex Shader
```

또는

```text
Fragment Shader
```

하나를 만드는 역할입니다.

### createProgram()

```javascript
gl.createProgram();
```

Vertex Shader와 Fragment Shader를 연결해서 함께 사용할 프로그램 객체를 만듭니다.

즉:

```text
createShader()

→ 각각의 셰이더를 만든다


createProgram()

→ 셰이더들을 하나의 프로그램으로 묶는다
```

라고 보면 됩니다.

## 프로그램을 생성하는 이유

WebGL에서는 Vertex Shader와 Fragment Shader가 서로 독립적으로 실행되는 것이 아니라 하나의 렌더링 프로그램을 구성합니다.

예를 들어 Vertex Shader는 정점의 위치를 계산합니다.

```text
Vertex Shader
↓
정점 위치 계산
```

그리고 Fragment Shader는 최종 픽셀 색상을 계산합니다.

```text
Fragment Shader
↓
픽셀 색상 계산
```

WebGL은 이 두 셰이더를 하나의 렌더링 파이프라인에서 함께 사용해야 합니다.

그래서 다음과 같이 프로그램으로 연결합니다.

```text
Vertex Shader
    ↓

WebGLProgram

    ↓

Fragment Shader
```

실제로는:

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);

gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
```

형태가 됩니다.

## WebGLShader 생성

위 예제의 `vertexShader`와 `fragmentShader`는 미리 생성되어 있어야 합니다.

예를 들어:

```javascript
const vertexShader = gl.createShader(gl.VERTEX_SHADER);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
```

그리고 각각 GLSL 소스를 넣습니다.

```javascript
gl.shaderSource(
    vertexShader,
    vertexShaderSource
);

gl.shaderSource(
    fragmentShader,
    fragmentShaderSource
);
```

그다음 컴파일합니다.

```javascript
gl.compileShader(vertexShader);

gl.compileShader(fragmentShader);
```

이렇게 준비된 셰이더를 `createProgram()`으로 만든 프로그램에 연결합니다.

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);

gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
```

## 핵심 정리

`createProgram()` 자체의 역할은 단순합니다.

```text
createProgram()

→ WebGLProgram 객체 생성
```

하지만 실제 사용 흐름은 다음과 같이 기억하는 것이 좋습니다.

```text
createShader()
셰이더 생성

    ↓

shaderSource()
GLSL 코드 입력

    ↓

compileShader()
각 셰이더 컴파일

    ↓

createProgram()
프로그램 생성

    ↓

attachShader()
Vertex / Fragment Shader 연결

    ↓

linkProgram()
두 셰이더를 하나의 프로그램으로 링크

    ↓

사용 가능한 WebGLProgram
```

즉, 한 줄로 정리하면:

```text
Shader를 각각 만든 뒤
Program으로 하나로 묶는다.
```

## 관련 문서

* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [WebGLShader](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader)
* [createShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader)
* [attachShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader)
* [linkProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram)
* [getProgramParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter)
* [getProgramInfoLog()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
