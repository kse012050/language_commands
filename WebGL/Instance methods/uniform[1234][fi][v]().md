# WebGLRenderingContext: `uniform[1234][fi][v]()` 메서드

WebGL API의 **`WebGLRenderingContext.uniform[1234][fi][v]()`** 메서드는 Shader에 선언된 **uniform 변수의 값을 설정**합니다.

프로그램이 성공적으로 링크되면 모든 활성 uniform 값은 처음에 `0`으로 초기화됩니다.

이후 `uniform*()` 메서드로 값을 넣으면, 프로그램이 다시 링크되기 전까지 그 값이 유지됩니다.

쉽게 말하면:

```text
Shader 안의 uniform 변수
↓
getUniformLocation()
↓
uniform 위치 찾기
↓
uniform1f(), uniform2fv(), uniform4fv() 등
↓
JavaScript 값을 Shader에 전달
```

과정을 거칩니다.

예를 들어 Fragment Shader에:

```glsl
uniform float uAlpha;
```

가 있다면 JavaScript에서는:

```javascript
const uAlpha = gl.getUniformLocation(
    program,
    "uAlpha"
);

gl.uniform1f(
    uAlpha,
    0.8
);
```

처럼 값을 전달할 수 있습니다.

## 문법

```javascript
uniform1f(location, v0)
uniform1fv(location, value)

uniform2f(location, v0, v1)
uniform2fv(location, value)

uniform3f(location, v0, v1, v2)
uniform3fv(location, value)

uniform4f(location, v0, v1, v2, v3)
uniform4fv(location, value)
```

정수형도 같은 방식입니다.

```javascript
uniform1i(location, v0)
uniform2i(location, v0, v1)
uniform3i(location, v0, v1, v2)
uniform4i(location, v0, v1, v2, v3)
```

배열을 전달하려면 `iv`를 사용합니다.

```javascript
uniform1iv(location, value)
uniform2iv(location, value)
uniform3iv(location, value)
uniform4iv(location, value)
```

## 이름 규칙

메서드 이름을 보면 타입을 알 수 있습니다.

```text
uniform4fv
        │││
        ││└─ v = 배열 형태
        │└── f = float
        └─── 4 = 값 4개
```

예를 들어:

```text
uniform1f
= float 값 1개

uniform2f
= float 값 2개

uniform3fv
= float 값 3개를 배열로 전달

uniform4iv
= integer 값 4개를 배열로 전달
```

입니다.

## 매개변수

### `location`

변경할 uniform의 위치입니다.

`getUniformLocation()`으로 가져옵니다.

```javascript
const uColor = gl.getUniformLocation(
    program,
    "uColor"
);
```

### `value`, `v0`, `v1`, `v2`, `v3`

uniform에 넣을 실제 값입니다.

`f`가 붙으면 실수형입니다.

```javascript
gl.uniform1f(
    uAlpha,
    0.8
);
```

`i`가 붙으면 정수형입니다.

```javascript
gl.uniform1i(
    uMode,
    1
);
```

`fv`는 실수 배열입니다.

```javascript
gl.uniform4fv(
    uColor,
    [1.0, 0.0, 0.0, 1.0]
);
```

`iv`는 정수 배열입니다.

```javascript
gl.uniform2iv(
    uPosition,
    new Int32Array([10, 20])
);
```

## 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

## 예제 1: float 값 전달

Shader:

```glsl
uniform float uAlpha;
```

JavaScript:

```javascript
const uAlpha = gl.getUniformLocation(
    program,
    "uAlpha"
);

gl.uniform1f(
    uAlpha,
    0.8
);
```

결과:

```text
uAlpha = 0.8
```

## 예제 2: vec2 값 전달

Shader:

```glsl
uniform vec2 uResolution;
```

JavaScript:

```javascript
const uResolution = gl.getUniformLocation(
    program,
    "uResolution"
);

gl.uniform2fv(
    uResolution,
    [
        canvas.width,
        canvas.height
    ]
);
```

결과:

```text
uResolution.x = canvas.width
uResolution.y = canvas.height
```

## 예제 3: 색상 전달

Shader:

```glsl
uniform vec4 uColor;
```

JavaScript:

```javascript
const uColor = gl.getUniformLocation(
    program,
    "uColor"
);

gl.uniform4fv(
    uColor,
    [1.0, 0.0, 0.0, 1.0]
);
```

결과:

```text
R = 1.0
G = 0.0
B = 0.0
A = 1.0

→ 빨간색
```

## 자주 사용하는 형태

```text
float
→ uniform1f()

vec2
→ uniform2fv()

vec3
→ uniform3fv()

vec4
→ uniform4fv()

int
→ uniform1i()

ivec2
→ uniform2iv()
```

행렬은 `uniformMatrix*()` 계열을 사용합니다.

```text
mat2
→ uniformMatrix2fv()

mat3
→ uniformMatrix3fv()

mat4
→ uniformMatrix4fv()
```

## 핵심 정리

```text
getUniformLocation()
= uniform 위치 찾기

uniform*()
= 실제 값 넣기
```

예:

```javascript
const uColor = gl.getUniformLocation(
    program,
    "uColor"
);

gl.uniform4fv(
    uColor,
    [1.0, 0.0, 0.0, 1.0]
);
```

즉 `uniform*()` 계열 메서드는 **JavaScript의 값을 Shader의 uniform 변수에 전달하는 역할**을 합니다.

## 관련 문서

* [uniform()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform)
* [getUniformLocation()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniformLocation)
* [getUniform()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniform)
* [uniformMatrix()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix)
* [WebGLUniformLocation](https://developer.mozilla.org/en-US/docs/Web/API/WebGLUniformLocation)
