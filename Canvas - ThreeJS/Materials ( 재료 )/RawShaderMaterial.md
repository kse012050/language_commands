# Three.js: RawShaderMaterial

`RawShaderMaterial`은 [`ShaderMaterial`](https://threejs.org/docs/pages/ShaderMaterial.html)과 거의 동일하게 동작하지만, **Three.js가 기본 uniform과 attribute 선언을 GLSL 코드 앞에 자동으로 추가하지 않는 Material**입니다.

즉 `ShaderMaterial`보다 더 직접적으로 GLSL 코드를 제어할 수 있습니다.

쉽게 말하면:

```text id="raw-flow"
ShaderMaterial
↓
Three.js가 일부 기본 GLSL 코드 자동 추가

RawShaderMaterial
↓
자동 추가 없음
↓
필요한 attribute / uniform을 직접 선언
```

이라고 보면 됩니다.

예를 들어 `RawShaderMaterial`에서는 Vertex Shader에 필요한 값을 직접 선언합니다.

```glsl id="raw-glsl"
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

`RawShaderMaterial`은 [`WebGLRenderer`](https://threejs.org/docs/pages/WebGLRenderer.html)에서만 사용할 수 있습니다.

## 생성자

```javascript id="raw-constructor"
new THREE.RawShaderMaterial(parameters)
```

`parameters`에는 Material의 외형이나 Shader 설정과 관련된 값을 전달할 수 있습니다.

예:

```javascript id="raw-basic"
const material = new THREE.RawShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});
```

## 기본 예제

```javascript id="raw-example"
const material = new THREE.RawShaderMaterial({
    uniforms: {
        uColor: {
            value: new THREE.Color(0xff0000)
        }
    },
    vertexShader: `
        precision mediump float;

        attribute vec3 position;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        precision mediump float;

        uniform vec3 uColor;

        void main() {
            gl_FragColor = vec4(uColor, 1.0);
        }
    `
});
```

여기서 중요한 부분은:

```glsl id="raw-direct"
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
```

입니다.

`RawShaderMaterial`에서는 이런 Shader 변수들을 직접 선언해야 합니다.

## ShaderMaterial과 차이

```text id="raw-compare"
ShaderMaterial
→ Three.js가 일부 built-in 선언을 자동으로 추가

RawShaderMaterial
→ 자동 추가하지 않음
→ GLSL 코드를 직접 제어
```

따라서 Shader를 처음 공부할 때는 `ShaderMaterial`이 조금 더 편하고, GLSL 구조를 직접 다루고 싶을 때는 `RawShaderMaterial`이 유용합니다.

## `isRawShaderMaterial`

```javascript id="raw-is"
material.isRawShaderMaterial
```

현재 Material이 `RawShaderMaterial`인지 확인할 수 있는 읽기 전용 값입니다.

기본값:

```javascript id="raw-true"
true
```

예:

```javascript id="raw-check"
console.log(material.isRawShaderMaterial);
// true
```

## 핵심 정리

```text id="raw-summary"
ShaderMaterial
= Three.js의 Shader 보조 기능 사용

RawShaderMaterial
= GLSL 선언까지 직접 작성
```

즉 `RawShaderMaterial`은 **Three.js의 Material 시스템은 사용하면서 Shader 코드는 좀 더 순수한 WebGL 방식에 가깝게 직접 작성하고 싶을 때 사용하는 Material**이라고 보면 됩니다.

## 관련 문서

* [RawShaderMaterial](https://threejs.org/docs/pages/RawShaderMaterial.html)
* [ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html)
* [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html)
* [Color.set()](https://threejs.org/docs/pages/Color.html#set)
* [RawShaderMaterial Source](https://github.com/mrdoob/three.js/blob/master/src/materials/RawShaderMaterial.js)
