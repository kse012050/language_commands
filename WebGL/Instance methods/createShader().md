# WebGLRenderingContext: createShader() 메서드

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 [`WebGLRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext) 인터페이스에서 제공하는 **`createShader()`** 메서드는 새로운 [`WebGLShader`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader) 객체를 생성합니다.

생성된 셰이더 객체는 이후 다음 메서드를 사용해서 추가로 설정할 수 있습니다.

* [`WebGLRenderingContext.shaderSource()`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource): 셰이더 소스 코드를 지정합니다.
* [`WebGLRenderingContext.compileShader()`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader): 셰이더를 컴파일합니다.

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
createShader(type)
```

## 매개변수

### `type`

생성할 셰이더의 종류를 지정합니다.

다음 두 값 중 하나를 사용할 수 있습니다.

```javascript
gl.VERTEX_SHADER
```

또는

```javascript
gl.FRAGMENT_SHADER
```

각 값의 의미는 다음과 같습니다.

* `gl.VERTEX_SHADER`

  * 버텍스 셰이더(Vertex Shader)를 생성합니다.
  * 정점(Vertex)의 위치와 관련된 연산을 담당합니다.

* `gl.FRAGMENT_SHADER`

  * 프래그먼트 셰이더(Fragment Shader)를 생성합니다.
  * 화면에 출력되는 픽셀의 색상과 관련된 연산을 담당합니다.

허용되지 않은 값을 전달하면 [`WebGLRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)에 `gl.INVALID_ENUM` 오류 플래그가 설정됩니다.

## 반환값

새로운 [`WebGLShader`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader) 인스턴스를 반환합니다.

셰이더를 생성하는 과정에서 오류가 발생하면 `null`을 반환합니다.

예를 들어 `type`에 올바르지 않은 값이 전달된 경우 셰이더 생성에 실패할 수 있습니다.

```javascript
const vertexShader = gl.createShader(gl.VERTEX_SHADER);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
```

## 일반적인 사용 흐름

`createShader()`는 보통 단독으로 사용하지 않고 다음과 같은 순서로 사용합니다.

```javascript
const shader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(shader, shaderSource);

gl.compileShader(shader);
```

전체적인 흐름은 다음과 같습니다.

```text
createShader()
    ↓
shaderSource()
    ↓
compileShader()
```

즉,

1. `createShader()`로 셰이더 객체를 생성하고
2. `shaderSource()`로 GLSL 셰이더 코드를 넣고
3. `compileShader()`로 셰이더 코드를 컴파일합니다.

## 예제

자세한 사용 방법과 예제는 MDN의 [`WebGLShader`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader) 문서를 참고할 수 있습니다.

간단한 버텍스 셰이더 생성 예시는 다음과 같습니다.

```javascript
const shaderSource = `
    attribute vec4 position;

    void main() {
        gl_Position = position;
    }
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertexShader, shaderSource);

gl.compileShader(vertexShader);
```

이 코드에서 각 단계의 역할은 다음과 같습니다.

```javascript
gl.createShader(gl.VERTEX_SHADER);
```

버텍스 셰이더 객체를 생성합니다.

```javascript
gl.shaderSource(vertexShader, shaderSource);
```

생성한 셰이더에 GLSL 코드를 전달합니다.

```javascript
gl.compileShader(vertexShader);
```

셰이더 코드를 GPU에서 사용할 수 있도록 컴파일합니다.

## 명세

자세한 WebGL 명세는 MDN의 관련 문서에서 확인할 수 있습니다.

## 브라우저 호환성

`createShader()`의 브라우저 지원 여부는 MDN의 브라우저 호환성 표를 참고하세요.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLShader](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader)
* [shaderSource()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource)
* [compileShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
