# WebGLRenderingContext: getUniformLocation()

WebGL API의 WebGLRenderingContext.getUniformLocation() 메서드는 특정 WebGLProgram 안에 선언된 uniform 변수의 위치(location) 를 가져옵니다.

반환되는 값은 WebGLUniformLocation 객체입니다.

쉽게 말하면 JavaScript에서 Shader의 uniform 값을 변경하려면 먼저:

Shader 안의 uniform 이름
↓
getUniformLocation()
↓
uniform 위치 찾기
↓
uniform1f(), uniform2fv(), uniformMatrix4fv() 등
↓
실제 값 전달

과정을 거쳐야 합니다.

예를 들어 Fragment Shader에:

uniform vec4 uColor;

가 있다면 JavaScript에서는:

const uColor = gl.getUniformLocation(
    program,
    "uColor"
);

gl.uniform4fv(
    uColor,
    [1.0, 0.0, 0.0, 1.0]
);

처럼 사용할 수 있습니다.

```javascript
getUniformLocation(program, name)
```

## 매개변수

* `program`: uniform이 들어 있는 `WebGLProgram`
* `name`: 찾을 uniform 변수 이름

예:

```glsl
uniform vec4 uColor;
```

```javascript
const uColor = gl.getUniformLocation(program, "uColor");
```

## 반환값

해당 uniform의 위치를 나타내는 `WebGLUniformLocation` 객체를 반환합니다.

uniform이 없거나 최적화로 제거된 경우 `null`을 반환할 수 있습니다.

## 사용 방법

`getUniformLocation()`은 **위치만 찾습니다.**

실제 값은 `uniform*()` 계열 메서드로 전달합니다.

```javascript
const uColor = gl.getUniformLocation(program, "uColor");

gl.uniform4fv(uColor, [1.0, 0.0, 0.0, 1.0]);
```

흐름:

```text
Shader uniform
↓
getUniformLocation()
↓
위치 찾기
↓
uniform4fv()
↓
값 전달
```

## 예제

### Shader

```glsl
precision mediump float;

uniform vec4 uColor;

void main() {
    gl_FragColor = uColor;
}
```

### JavaScript

```javascript
gl.useProgram(program);

const uColor = gl.getUniformLocation(program, "uColor");

gl.uniform4fv(uColor, [0.1, 0.7, 0.2, 1.0]);

gl.drawArrays(gl.TRIANGLES, 0, 3);
```

이 경우 Shader의 `uColor` 값은 다음과 같습니다.

```text
R = 0.1
G = 0.7
B = 0.2
A = 1.0
```

## 자주 사용하는 uniform 함수

```text
float → uniform1f()
vec2  → uniform2fv()
vec3  → uniform3fv()
vec4  → uniform4fv()
mat4  → uniformMatrix4fv()
```

## getAttribLocation()과 차이

```text
getAttribLocation()
→ attribute 위치 찾기
→ 정점마다 다른 데이터

getUniformLocation()
→ uniform 위치 찾기
→ 여러 정점이 공통으로 사용하는 데이터
```

## 핵심

```javascript
const location = gl.getUniformLocation(program, "uColor");

gl.uniform4fv(location, [1, 0, 0, 1]);
```

즉:

```text
getUniformLocation()
= uniform 위치 찾기

uniform*()
= 실제 값 넣기
```

## 관련 문서

* [getUniformLocation()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniformLocation)
* [uniform()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform)
* [uniformMatrix()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix)
* [getAttribLocation()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation)
