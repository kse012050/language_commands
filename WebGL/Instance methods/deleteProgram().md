# WebGLRenderingContext: deleteProgram() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteProgram#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.deleteProgram()`** 메서드는 지정한 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체를 삭제합니다.

이미 삭제된 프로그램에 다시 `deleteProgram()`을 호출해도 별도의 효과는 없습니다.

쉽게 말하면:

```text
createProgram()
↓
프로그램 생성

...

deleteProgram()
↓
프로그램 제거
```

라고 보면 됩니다.

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [예제](#예제)
* [deleteProgram()은 왜 필요한가?](#deleteprogram은-왜-필요한가)
* [삭제 상태 확인하기](#삭제-상태-확인하기)
* [JavaScript 객체 삭제와의 차이](#javascript-객체-삭제와의-차이)
* [deleteShader()와의 관계](#deleteshader와의-관계)
* [전체 흐름](#전체-흐름)
* [핵심 정리](#핵심-정리)
* [관련 문서](#관련-문서)

## 문법

```javascript
deleteProgram(program)
```

## 매개변수

### `program`

삭제할 [`WebGLProgram`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram) 객체입니다.

보통 `createProgram()`으로 생성한 프로그램을 전달합니다.

```javascript
const program = gl.createProgram();

gl.deleteProgram(program);
```

즉:

```text
program
↓
deleteProgram()
↓
WebGL 프로그램 삭제
```

하는 구조입니다.

## 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

```javascript
const result = gl.deleteProgram(program);

console.log(result);
// undefined
```

따라서 삭제 성공 여부를 반환값으로 확인하는 방식은 아닙니다.

## 예제

### 프로그램 삭제하기

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const program = gl.createProgram();

// ...

gl.deleteProgram(program);
```

각 코드를 보면 다음과 같습니다.

### WebGL 컨텍스트 가져오기

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
```

HTML의 `canvas`에서 WebGL 렌더링 컨텍스트를 가져옵니다.

### 프로그램 생성

```javascript
const program = gl.createProgram();
```

새로운 `WebGLProgram` 객체를 생성합니다.

실제 코드에서는 이후 Vertex Shader와 Fragment Shader를 연결하고 링크해서 사용하게 됩니다.

```javascript
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
```

### 프로그램 삭제

프로그램이 더 이상 필요하지 않다면:

```javascript
gl.deleteProgram(program);
```

을 호출합니다.

이 프로그램은 WebGL에서 삭제 대상으로 처리됩니다.

## 이미 삭제된 프로그램

MDN 원문에서 중요한 부분입니다.

이미 삭제된 프로그램에 다시 `deleteProgram()`을 호출해도 별도의 효과가 없습니다.

예를 들어:

```javascript
gl.deleteProgram(program);

gl.deleteProgram(program);
```

처럼 두 번 호출해도 두 번째 호출 때문에 추가적인 삭제 작업이 발생하지 않습니다.

개념적으로는:

```text
첫 번째 deleteProgram()
↓
삭제 처리

두 번째 deleteProgram()
↓
이미 삭제 상태
↓
추가 효과 없음
```

입니다.

## deleteProgram()은 왜 필요한가?

WebGL에서 프로그램은 GPU와 관련된 리소스를 사용합니다.

예를 들어 프로그램에는 다음과 같은 정보가 포함될 수 있습니다.

```text
WebGLProgram

├─ Vertex Shader
├─ Fragment Shader
├─ Attribute 정보
├─ Uniform 정보
└─ GPU 실행 프로그램 정보
```

더 이상 사용하지 않는 프로그램을 계속 가지고 있으면 GPU 리소스가 불필요하게 유지될 수 있습니다.

따라서 프로그램이 완전히 필요 없어졌을 때:

```javascript
gl.deleteProgram(program);
```

을 사용해 WebGL에 해당 프로그램을 삭제할 수 있다고 알려줍니다.

즉:

```text
프로그램 생성
↓
사용
↓
더 이상 필요 없음
↓
deleteProgram()
↓
리소스 정리
```

의 흐름입니다.

## 언제 사용하나?

간단한 WebGL 예제에서는 프로그램 하나를 페이지가 끝날 때까지 계속 사용하는 경우가 많기 때문에 `deleteProgram()`을 직접 호출하지 않는 코드도 많습니다.

하지만 다음과 같은 경우에는 명시적으로 정리하는 것이 좋습니다.

* 여러 Shader Program을 동적으로 생성하는 경우
* 장면이나 렌더러를 교체하는 경우
* WebGL 기반 SPA에서 컴포넌트를 제거하는 경우
* 프로그램을 반복해서 생성하는 경우
* 더 이상 사용하지 않는 GPU 리소스를 명확하게 해제하고 싶은 경우

예를 들어:

```javascript
function destroyProgram() {
    gl.deleteProgram(program);
}
```

처럼 정리 로직을 따로 둘 수도 있습니다.

## 삭제 상태 확인하기

앞에서 본 `getProgramParameter()`를 이용해서 프로그램의 삭제 상태를 확인할 수 있습니다.

사용하는 값은:

```javascript
gl.DELETE_STATUS
```

입니다.

예를 들어:

```javascript
const program = gl.createProgram();

console.log(
    gl.getProgramParameter(
        program,
        gl.DELETE_STATUS
    )
);
```

아직 삭제하지 않았다면 거짓에 해당하는 값을 반환합니다.

이후:

```javascript
gl.deleteProgram(program);
```

을 호출하면 프로그램이 삭제 대상으로 표시됩니다.

`DELETE_STATUS`는 다음과 같은 의미입니다.

```text
false
↓
삭제 대상으로 표시되지 않음

true
↓
삭제 대상으로 표시됨
```

즉:

```javascript
gl.getProgramParameter(
    program,
    gl.DELETE_STATUS
);
```

는

```text
이 프로그램이 삭제 대상으로 표시되어 있는가?
```

를 확인하는 코드입니다.

## JavaScript 객체 삭제와의 차이

여기서 중요한 점이 하나 있습니다.

다음 코드는:

```javascript
program = null;
```

JavaScript 변수의 참조를 없애는 것입니다.

반면:

```javascript
gl.deleteProgram(program);
```

은 WebGL에게 **GPU 쪽 프로그램 리소스를 삭제하라고 요청하는 것**입니다.

둘은 같은 작업이 아닙니다.

예를 들어:

```javascript
let program = gl.createProgram();

program = null;
```

이라고 한다고 해서 `deleteProgram()`을 호출한 것과 같은 의미는 아닙니다.

개념적으로 보면:

```text
program = null

JavaScript 참조 제거
```

이고,

```text
gl.deleteProgram(program)

WebGL / GPU 리소스 삭제 요청
```

입니다.

따라서 WebGL 리소스를 명확하게 정리하려면:

```javascript
gl.deleteProgram(program);

program = null;
```

처럼 사용할 수도 있습니다.

## 현재 사용 중인 프로그램은 어떻게 되나?

WebGL 리소스 삭제는 일반 JavaScript 객체 삭제와 조금 다르게 동작합니다.

프로그램이 현재 WebGL 상태에서 사용되고 있다면 `deleteProgram()`을 호출했다고 해서 반드시 그 순간 모든 내부 리소스가 즉시 사라진다고 단순하게 생각하면 안 됩니다.

WebGL은 리소스가 더 이상 사용되지 않을 수 있는 시점에 실제 정리를 수행할 수 있습니다.

따라서 `deleteProgram()`은 개념적으로:

```text
"이 프로그램은 더 이상 필요 없으니 삭제해도 된다"
```

라고 WebGL에 알려주는 작업으로 이해하는 것이 정확합니다.

## deleteShader()와의 관계

`WebGLProgram`을 삭제하는 메서드는:

```javascript
gl.deleteProgram(program);
```

입니다.

반면 개별 `WebGLShader`를 삭제하는 메서드는:

```javascript
gl.deleteShader(shader);
```

입니다.

둘은 삭제 대상이 다릅니다.

```text
deleteShader()
↓
WebGLShader 삭제

deleteProgram()
↓
WebGLProgram 삭제
```

예를 들어 프로그램 생성 과정에서는:

```javascript
const vertexShader = gl.createShader(
    gl.VERTEX_SHADER
);

const fragmentShader = gl.createShader(
    gl.FRAGMENT_SHADER
);

const program = gl.createProgram();
```

총 세 개의 WebGL 객체가 만들어집니다.

```text
vertexShader
fragmentShader
program
```

각각 필요 없어졌을 때 해당 삭제 메서드를 사용할 수 있습니다.

```javascript
gl.deleteShader(vertexShader);
gl.deleteShader(fragmentShader);
gl.deleteProgram(program);
```

## Shader는 언제 삭제할 수 있나?

Vertex Shader와 Fragment Shader가 프로그램에 연결되고 프로그램 링크까지 성공했다면, 셰이더 객체 자체가 더 이상 필요하지 않은 경우 삭제 대상으로 표시할 수 있습니다.

예를 들어:

```javascript
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.deleteShader(vertexShader);
gl.deleteShader(fragmentShader);
```

이렇게 해도 이미 링크된 프로그램 자체를 바로 삭제하는 것은 아닙니다.

즉:

```text
vertexShader
fragmentShader
↓
attachShader()
↓
linkProgram()
↓
WebGLProgram 완성

그 이후

deleteShader()
↓
개별 Shader 객체 정리
```

라고 이해할 수 있습니다.

프로그램 자체가 더 이상 필요 없어졌을 때는:

```javascript
gl.deleteProgram(program);
```

을 호출합니다.

## 전체 흐름

프로그램 생성부터 삭제까지의 전체적인 흐름을 보면 다음과 같습니다.

```text
createShader()
↓
Vertex Shader 생성

shaderSource()
↓
GLSL 코드 지정

compileShader()
↓
Vertex Shader 컴파일


createShader()
↓
Fragment Shader 생성

shaderSource()
↓
GLSL 코드 지정

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

getProgramParameter()
↓
링크 상태 확인

프로그램 사용

...

deleteProgram()
↓
더 이상 필요 없는 WebGLProgram 삭제
```

코드로 보면 다음과 같은 흐름입니다.

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

// 프로그램 사용

// 더 이상 필요하지 않을 때
gl.deleteProgram(program);
```

## 생성과 삭제 비교

지금까지 나온 메서드를 비교하면 다음처럼 볼 수 있습니다.

```text
createShader()
↓
WebGLShader 생성

deleteShader()
↓
WebGLShader 삭제
```

그리고:

```text
createProgram()
↓
WebGLProgram 생성

deleteProgram()
↓
WebGLProgram 삭제
```

즉 생성과 삭제가 각각 대응됩니다.

```text
createShader()   ↔ deleteShader()

createProgram()  ↔ deleteProgram()
```

## 핵심 정리

`deleteProgram()`은 한 줄로 정리하면:

```text
더 이상 사용하지 않는 WebGLProgram을 삭제하도록
WebGL에 요청하는 메서드
```

입니다.

기본 사용법은 매우 단순합니다.

```javascript
gl.deleteProgram(program);
```

그리고 이미 삭제된 프로그램에 다시 호출해도 별도의 효과는 없습니다.

프로그램의 삭제 상태를 확인하고 싶다면:

```javascript
gl.getProgramParameter(
    program,
    gl.DELETE_STATUS
);
```

를 사용할 수 있습니다.

따라서 다음처럼 기억하면 됩니다.

```text
createProgram()
프로그램 생성

        ↓

프로그램 사용

        ↓

deleteProgram()
프로그램 리소스 정리
```

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLProgram](https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram)
* [createProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram)
* [attachShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader)
* [linkProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram)
* [getProgramParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter)
* [deleteShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteShader)
* [useProgram()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
