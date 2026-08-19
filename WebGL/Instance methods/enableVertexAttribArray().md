# WebGLRenderingContext: enableVertexAttribArray() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.enableVertexAttribArray()`** 메서드는 지정한 인덱스의 **Vertex Attribute Array를 활성화**합니다.

쉽게 말하면 Vertex Shader에서 사용하는 `attribute`가 버퍼의 데이터를 받을 수 있도록 **해당 attribute 입력을 켜주는 역할**을 합니다.

예를 들어 Vertex Shader에 다음과 같은 attribute가 있다고 가정합니다.

```glsl id="ejnwzy"
attribute vec3 aVertexPosition;
```

JavaScript에서는 이 attribute의 위치(index)를 알아낸 다음:

```javascript id="x0z721"
const location = gl.getAttribLocation(
    program,
    "aVertexPosition"
);
```

해당 attribute를 활성화합니다.

```javascript id="kjb8su"
gl.enableVertexAttribArray(location);
```

전체적으로 보면:

```text id="p91icr"
Vertex Buffer
↓
attribute location 확인
↓
enableVertexAttribArray()
↓
attribute 활성화
↓
vertexAttribPointer()
↓
버퍼 데이터를 attribute에 연결
```

하는 흐름입니다.

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [반환값](#반환값)
* [오류](#오류)
* [예제](#예제)
* [attribute란?](#attribute란)
* [왜 enableVertexAttribArray()가 필요한가?](#왜-enablevertexattribarray가-필요한가)
* [getAttribLocation()과의 관계](#getattriblocation과의-관계)
* [vertexAttribPointer()와의 관계](#vertexattribpointer와의-관계)
* [disableVertexAttribArray()](#disablevertexattribarray)
* [전체 흐름](#전체-흐름)
* [핵심 정리](#핵심-정리)
* [관련 문서](#관련-문서)

## 문법

```javascript id="97is5v"
enableVertexAttribArray(index)
```

## 매개변수

### `index`

활성화할 Vertex Attribute를 고유하게 식별하는 인덱스 번호입니다.

타입은 `GLuint`입니다.

예를 들어:

```javascript id="9k1rm9"
gl.enableVertexAttribArray(0);
```

처럼 사용할 수 있습니다.

하지만 실제 코드에서는 숫자를 직접 작성하기보다는 `getAttribLocation()`을 사용해서 Shader의 attribute 위치를 가져오는 경우가 많습니다.

```javascript id="1ior0h"
const location = gl.getAttribLocation(
    program,
    "aVertexPosition"
);

gl.enableVertexAttribArray(location);
```

즉:

```text id="6b8nzw"
"aVertexPosition"
↓
getAttribLocation()
↓
attribute index
↓
enableVertexAttribArray()
```

입니다.

## 반환값

반환값은 없습니다.

JavaScript 기준으로 `undefined`를 반환합니다.

```javascript id="pssvi3"
const result = gl.enableVertexAttribArray(location);

console.log(result);
// undefined
```

이 메서드는 값을 반환하기 위한 것이 아니라 WebGL의 attribute 상태를 변경하는 메서드입니다.

## 오류

`enableVertexAttribArray()` 호출 이후 오류가 발생했는지 확인하려면 `getError()`를 사용할 수 있습니다.

```javascript id="5phkvs"
const error = gl.getError();
```

### `gl.INVALID_VALUE`

전달한 `index`가 사용할 수 있는 Vertex Attribute의 최대 개수를 벗어난 경우 발생합니다.

WebGL에서 사용할 수 있는 최대 Attribute 개수는 다음과 같이 확인할 수 있습니다.

```javascript id="7yn88i"
const maxAttributes = gl.getParameter(
    gl.MAX_VERTEX_ATTRIBS
);
```

예를 들어 최대 attribute 개수가 `16`이라면 사용할 수 있는 인덱스는:

```text id="bkexvv"
0 ~ 15
```

입니다.

따라서:

```javascript id="g6o04a"
gl.enableVertexAttribArray(16);
```

처럼 범위를 벗어난 값을 전달하면 `INVALID_VALUE` 오류가 발생할 수 있습니다.

## attribute란?

WebGL에서 **attribute**는 정점(Vertex)마다 서로 다른 데이터를 Vertex Shader에 전달할 때 사용합니다.

예를 들어 삼각형 정점이 있다고 해보겠습니다.

```text id="rkv9bt"
Vertex 1 → 위치 A
Vertex 2 → 위치 B
Vertex 3 → 위치 C
```

각 정점마다 위치가 다르기 때문에 위치 데이터는 attribute로 전달하기 적합합니다.

Vertex Shader에서는 다음과 같이 선언할 수 있습니다.

```glsl id="mm4v6m"
attribute vec3 aVertexPosition;
```

각 정점이 처리될 때 `aVertexPosition`에는 해당 정점의 위치가 들어갑니다.

예를 들어:

```text id="5t6g9r"
첫 번째 Vertex 실행
aVertexPosition = [0.0, 0.5, 0.0]

두 번째 Vertex 실행
aVertexPosition = [-0.5, -0.5, 0.0]

세 번째 Vertex 실행
aVertexPosition = [0.5, -0.5, 0.0]
```

처럼 정점마다 값이 달라집니다.

attribute에는 위치뿐 아니라 다음과 같은 데이터를 전달할 수도 있습니다.

* 정점 위치
* 정점 색상
* 텍스처 좌표
* 노멀 벡터
* 기타 정점별 데이터

## 왜 enableVertexAttribArray()가 필요한가?

Vertex Attribute Array는 기본적으로 비활성화되어 있습니다.

따라서 Shader에 attribute를 선언했다고 해서 자동으로 버퍼 데이터를 읽는 것은 아닙니다.

예를 들어:

```glsl id="a8nk09"
attribute vec3 aVertexPosition;
```

가 있다고 하더라도 JavaScript에서:

```javascript id="vdwcv1"
const location = gl.getAttribLocation(
    program,
    "aVertexPosition"
);
```

로 위치만 가져왔다고 해서 버퍼 데이터를 자동으로 읽지는 않습니다.

해당 attribute array를 활성화해야 합니다.

```javascript id="c7zp3s"
gl.enableVertexAttribArray(location);
```

개념적으로 보면:

```text id="qk9h8y"
aVertexPosition

기본 상태
OFF

        ↓

enableVertexAttribArray()

        ↓

ON
```

입니다.

즉 WebGL에게:

```text id="co42me"
"이 attribute는 앞으로 배열 데이터를 사용하게 해."
```

라고 설정한다고 생각하면 됩니다.

## getAttribLocation()과의 관계

`enableVertexAttribArray()`는 attribute의 **이름이 아니라 인덱스 번호**를 받습니다.

즉 다음처럼 사용할 수 없습니다.

```javascript id="tht34b"
gl.enableVertexAttribArray(
    "aVertexPosition"
);
```

먼저 `getAttribLocation()`을 이용해 Shader 프로그램 안에서 해당 attribute가 몇 번 위치를 사용하는지 찾아야 합니다.

```javascript id="0vvza8"
const aVertexPosition = gl.getAttribLocation(
    program,
    "aVertexPosition"
);
```

예를 들어 이 값이:

```text id="pcfm3w"
0
```

이라고 하면 다음 코드는:

```javascript id="zwkokv"
gl.enableVertexAttribArray(
    aVertexPosition
);
```

실제로는 개념적으로:

```javascript id="06hxd9"
gl.enableVertexAttribArray(0);
```

과 같은 의미입니다.

따라서 흐름은:

```text id="h69j6r"
Shader attribute 이름
"aVertexPosition"

        ↓

getAttribLocation()

        ↓

attribute index
예: 0

        ↓

enableVertexAttribArray(0)

        ↓

해당 attribute 활성화
```

입니다.

## vertexAttribPointer()와의 관계

`enableVertexAttribArray()`만 호출했다고 해서 attribute가 어느 버퍼 데이터를 읽을지 결정되는 것은 아닙니다.

그 역할은 `vertexAttribPointer()`가 담당합니다.

일반적으로 다음 두 메서드를 함께 사용합니다.

```javascript id="zs346t"
gl.enableVertexAttribArray(aVertexPosition);

gl.vertexAttribPointer(
    aVertexPosition,
    3,
    gl.FLOAT,
    false,
    0,
    0
);
```

역할을 비교하면:

```text id="abqohw"
enableVertexAttribArray()
↓
이 attribute를 사용하도록 활성화

vertexAttribPointer()
↓
이 attribute가 버퍼 데이터를
어떤 방식으로 읽을지 설정
```

입니다.

## vertexAttribPointer()에서 버퍼가 연결되는 방식

처음 보면 헷갈리는 부분입니다.

다음 코드를 보겠습니다.

```javascript id="fbz8nj"
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);

gl.vertexAttribPointer(
    aVertexPosition,
    3,
    gl.FLOAT,
    false,
    0,
    0
);
```

`vertexAttribPointer()`에는 `vertexBuffer` 변수가 직접 들어가지 않습니다.

그 이유는 앞에서:

```javascript id="29jy0n"
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);
```

를 실행했기 때문입니다.

WebGL은 현재 `ARRAY_BUFFER`에 연결되어 있는 버퍼를 기억하고 있습니다.

```text id="zix9vz"
ARRAY_BUFFER
↓
vertexBuffer
```

이 상태에서:

```javascript id="8mq00m"
gl.vertexAttribPointer(
    aVertexPosition,
    3,
    gl.FLOAT,
    false,
    0,
    0
);
```

를 호출하면 현재 `ARRAY_BUFFER`에 연결되어 있는 `vertexBuffer`를 `aVertexPosition` attribute의 데이터 소스로 설정합니다.

개념적으로는:

```text id="eoitds"
vertexBuffer
    ↓
bindBuffer()
    ↓
현재 ARRAY_BUFFER

        ↓

vertexAttribPointer()

        ↓

aVertexPosition
```

입니다.

## 전체 예제

MDN 예제를 정리하면 다음과 같습니다.

```javascript id="q61wsc"
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);

const aVertexPosition = gl.getAttribLocation(
    shaderProgram,
    "aVertexPosition"
);

gl.enableVertexAttribArray(
    aVertexPosition
);

gl.vertexAttribPointer(
    aVertexPosition,
    vertexNumComponents,
    gl.FLOAT,
    false,
    0,
    0
);

gl.drawArrays(
    gl.TRIANGLES,
    0,
    vertexCount
);
```

각 단계의 역할을 하나씩 보면 다음과 같습니다.

### 1. Vertex Buffer 선택

```javascript id="kgmrgs"
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);
```

정점 데이터가 저장되어 있는 `vertexBuffer`를 현재 `ARRAY_BUFFER`로 선택합니다.

```text id="u7lxpn"
ARRAY_BUFFER
↓
vertexBuffer
```

### 2. attribute 위치 확인

```javascript id="an8ixe"
const aVertexPosition = gl.getAttribLocation(
    shaderProgram,
    "aVertexPosition"
);
```

Vertex Shader에서 `aVertexPosition` attribute의 인덱스를 가져옵니다.

예를 들어:

```text id="5lgz8t"
aVertexPosition
↓
index 0
```

이라고 가정할 수 있습니다.

### 3. attribute 활성화

```javascript id="5e5zpt"
gl.enableVertexAttribArray(
    aVertexPosition
);
```

해당 attribute가 Vertex Buffer의 배열 데이터를 사용할 수 있도록 활성화합니다.

```text id="uicjkb"
aVertexPosition

OFF
↓
enableVertexAttribArray()
↓
ON
```

### 4. 버퍼 데이터 연결

```javascript id="1e08pl"
gl.vertexAttribPointer(
    aVertexPosition,
    vertexNumComponents,
    gl.FLOAT,
    false,
    0,
    0
);
```

현재 `ARRAY_BUFFER`의 데이터를 `aVertexPosition` attribute가 어떻게 읽을 것인지 지정합니다.

개념적으로는:

```text id="jts69z"
vertexBuffer
↓
aVertexPosition
↓
Vertex Shader
```

연결을 만들어주는 단계입니다.

### 5. 렌더링

```javascript id="o7h6zx"
gl.drawArrays(
    gl.TRIANGLES,
    0,
    vertexCount
);
```

설정된 Vertex Buffer와 Shader Program을 이용해 실제로 삼각형을 렌더링합니다.

## 예제를 데이터 흐름으로 보면

전체 데이터 흐름은 다음과 같습니다.

```text id="lprcm2"
JavaScript Vertex 데이터
↓
bufferData()
↓
vertexBuffer
↓
bindBuffer()
↓
현재 ARRAY_BUFFER

Shader의
aVertexPosition
↓
getAttribLocation()
↓
attribute index 확인
↓
enableVertexAttribArray()
↓
attribute 활성화
↓
vertexAttribPointer()
↓
현재 ARRAY_BUFFER와 attribute 연결
↓
drawArrays()
↓
Vertex Shader가 정점 데이터를 하나씩 전달받음
```

## disableVertexAttribArray()

활성화된 Vertex Attribute Array를 다시 비활성화하려면 `disableVertexAttribArray()`를 사용할 수 있습니다.

```javascript id="5p1ctx"
gl.disableVertexAttribArray(
    aVertexPosition
);
```

두 메서드는 서로 반대 역할을 합니다.

```text id="41plk5"
enableVertexAttribArray()
↓
attribute array 활성화

disableVertexAttribArray()
↓
attribute array 비활성화
```

즉:

```text id="rpyco5"
enable = ON

disable = OFF
```

라고 생각하면 됩니다.

## enableVertexAttribArray()와 vertexAttribPointer() 차이

두 메서드는 거의 항상 같이 나오기 때문에 처음에는 역할이 헷갈릴 수 있습니다.

### enableVertexAttribArray()

```javascript id="cnqj9m"
gl.enableVertexAttribArray(
    aVertexPosition
);
```

해당 attribute가 배열 데이터를 사용할 수 있도록 **활성화**합니다.

```text id="6zxkyv"
aVertexPosition
↓
ON
```

### vertexAttribPointer()

```javascript id="0z83ij"
gl.vertexAttribPointer(
    aVertexPosition,
    3,
    gl.FLOAT,
    false,
    0,
    0
);
```

해당 attribute가 **버퍼 데이터를 어떻게 읽을지 설정**합니다.

```text id="uf6myk"
vertexBuffer
↓
어떤 형식으로 읽나?
↓
aVertexPosition
```

따라서:

```text id="unjva9"
enableVertexAttribArray()
= attribute 입력 켜기

vertexAttribPointer()
= attribute가 버퍼 데이터를 읽는 규칙 설정
```

이라고 구분하면 됩니다.

## bindBuffer()와의 관계

지금까지의 버퍼 관련 흐름과 연결하면 더욱 이해하기 쉽습니다.

먼저 버퍼를 생성합니다.

```javascript id="nwla08"
const vertexBuffer = gl.createBuffer();
```

현재 버퍼로 선택합니다.

```javascript id="iecnwa"
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    vertexBuffer
);
```

실제 정점 데이터를 넣습니다.

```javascript id="v740cm"
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

그리고 Shader attribute를 찾습니다.

```javascript id="is6lkm"
const aVertexPosition = gl.getAttribLocation(
    program,
    "aVertexPosition"
);
```

attribute를 활성화합니다.

```javascript id="mv2k3o"
gl.enableVertexAttribArray(
    aVertexPosition
);
```

현재 버퍼와 attribute를 연결합니다.

```javascript id="4vmmho"
gl.vertexAttribPointer(
    aVertexPosition,
    3,
    gl.FLOAT,
    false,
    0,
    0
);
```

전체 구조는:

```text id="9q48e2"
createBuffer()
↓
버퍼 생성

bindBuffer()
↓
버퍼 선택

bufferData()
↓
정점 데이터 저장

getAttribLocation()
↓
Shader attribute 위치 찾기

enableVertexAttribArray()
↓
attribute 활성화

vertexAttribPointer()
↓
버퍼와 attribute 연결

drawArrays()
↓
렌더링
```

입니다.

## Program과 Buffer가 만나는 지점

지금까지 배운 내용을 크게 나누면 두 가지 흐름이 있습니다.

### Shader Program 준비

```text id="m6yveb"
createShader()
↓
shaderSource()
↓
compileShader()
↓
createProgram()
↓
attachShader()
↓
linkProgram()
↓
useProgram()
```

### Vertex Buffer 준비

```text id="qaomma"
createBuffer()
↓
bindBuffer()
↓
bufferData()
```

이 두 흐름을 이어주는 부분이 바로 Attribute 설정입니다.

```text id="jleat8"
Buffer
    ↓

getAttribLocation()
enableVertexAttribArray()
vertexAttribPointer()

    ↓

Vertex Shader
```

즉 `enableVertexAttribArray()`는 **JavaScript의 Vertex Buffer 데이터가 Vertex Shader의 attribute로 들어가기 위한 연결 과정 중 하나**입니다.

## 핵심 정리

`enableVertexAttribArray()`의 역할을 한 줄로 정리하면:

```text id="7ip0zl"
특정 Vertex Attribute가
버퍼의 배열 데이터를 사용할 수 있도록 활성화한다.
```

입니다.

가장 중요한 흐름은 다음과 같습니다.

```text id="rwu5ko"
getAttribLocation()
↓
attribute의 위치(index)를 찾는다

enableVertexAttribArray()
↓
그 attribute를 활성화한다

vertexAttribPointer()
↓
어느 버퍼 데이터를 어떤 방식으로 읽을지 설정한다
```

코드로 보면:

```javascript id="1i1klg"
const location = gl.getAttribLocation(
    program,
    "aVertexPosition"
);

gl.enableVertexAttribArray(
    location
);

gl.vertexAttribPointer(
    location,
    3,
    gl.FLOAT,
    false,
    0,
    0
);
```

그리고 전체적인 데이터 흐름은:

```text id="bnsiwc"
Vertex Buffer
↓
vertexAttribPointer()
↓
Attribute
↓
Vertex Shader
```

라고 이해하면 됩니다.

특히 다음 차이를 기억하면 좋습니다.

```text id="z6pahi"
getAttribLocation()
= attribute가 몇 번 위치인지 찾기

enableVertexAttribArray()
= 해당 attribute 입력 켜기

vertexAttribPointer()
= 버퍼 데이터를 어떻게 읽을지 지정
```

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [getAttribLocation()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation)
* [vertexAttribPointer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
* [disableVertexAttribArray()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
* [getVertexAttrib()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
* [bindBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer)
* [bufferData()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
* [drawArrays()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)
* [getError()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getError)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
