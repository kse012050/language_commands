# WebGLRenderingContext: bufferData() 메서드

> **Baseline: 대부분의 환경에서 사용 가능**
>
> 이 기능은 오래전부터 안정적으로 지원되고 있으며, 다양한 기기와 브라우저 버전에서 사용할 수 있습니다.
>
> 주요 브라우저에서는 **2015년 7월부터 지원**되고 있습니다.
>
> * [Baseline 호환성 자세히 보기](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
> * [전체 브라우저 호환성 보기](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData#browser_compatibility)

> **참고:** 이 기능은 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)에서도 사용할 수 있습니다.

WebGL API의 **`WebGLRenderingContext.bufferData()`** 메서드는 버퍼 객체가 사용할 **데이터 저장 공간을 생성하고 초기화**합니다.

쉽게 말하면 `createBuffer()`로 버퍼 객체를 만들고, `bindBuffer()`로 현재 사용할 버퍼를 선택한 다음, `bufferData()`를 사용해서 **실제 데이터를 넣거나 필요한 크기만큼 메모리를 확보**합니다.

```javascript
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
    ]),
    gl.STATIC_DRAW
);
```

## 목차

* [문법](#문법)
* [매개변수](#매개변수)
* [target](#target)
* [size](#size)
* [srcData](#srcdata)
* [usage](#usage)
* [반환값](#반환값)
* [예외](#예외)
* [예제](#예제)
* [버퍼 정보 확인하기](#버퍼-정보-확인하기)
* [TypedArray의 크기 계산하기](#typedarray의-크기-계산하기)
* [bufferData()는 왜 필요한가?](#bufferdata는-왜-필요한가)
* [관련 문서](#관련-문서)

## 문법

`bufferData()`는 크게 두 가지 방식으로 사용할 수 있습니다.

```javascript
bufferData(target, size, usage)
```

또는

```javascript
bufferData(target, srcData, usage)
```

첫 번째 방식은 **버퍼에 사용할 메모리 크기만 지정**합니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    1024,
    gl.STATIC_DRAW
);
```

두 번째 방식은 **실제 데이터를 전달하면서 버퍼를 생성**합니다.

```javascript
const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

## 매개변수

`bufferData()`는 다음 세 가지 값을 전달받습니다.

```text
bufferData(target, 데이터 또는 크기, usage)
```

각각의 의미는 다음과 같습니다.

```text
target
어떤 종류의 버퍼인지

srcData 또는 size
실제 데이터 또는 확보할 메모리 크기

usage
데이터를 얼마나 자주 변경하고 사용할 것인지
```

## `target`

버퍼를 어떤 용도로 사용할 것인지 지정합니다.

WebGL 1에서는 주로 다음 두 가지 값을 사용합니다.

### `gl.ARRAY_BUFFER`

정점 속성(Vertex Attribute) 데이터를 저장할 때 사용합니다.

예를 들어 다음과 같은 데이터가 포함됩니다.

* 정점 좌표
* 정점 색상
* 텍스처 좌표
* 노멀 벡터

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

### `gl.ELEMENT_ARRAY_BUFFER`

정점의 인덱스 데이터를 저장할 때 사용합니다.

```javascript
const indices = new Uint16Array([
    0, 1, 2,
    0, 2, 3
]);

gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    indices,
    gl.STATIC_DRAW
);
```

## WebGL 2에서 추가된 target

WebGL 2에서는 다음과 같은 버퍼 타입도 사용할 수 있습니다.

### `gl.COPY_READ_BUFFER`

버퍼 객체 간 데이터를 복사할 때 읽기 대상으로 사용합니다.

### `gl.COPY_WRITE_BUFFER`

버퍼 객체 간 데이터를 복사할 때 쓰기 대상으로 사용합니다.

### `gl.TRANSFORM_FEEDBACK_BUFFER`

Transform Feedback 연산에서 사용합니다.

### `gl.UNIFORM_BUFFER`

Uniform Block 데이터를 저장합니다.

### `gl.PIXEL_PACK_BUFFER`

픽셀 데이터를 GPU에서 버퍼 쪽으로 전달할 때 사용합니다.

### `gl.PIXEL_UNPACK_BUFFER`

픽셀 데이터를 버퍼에서 GPU 쪽으로 전달할 때 사용합니다.

입문 단계에서는 우선 다음 두 개를 가장 중요하게 보면 됩니다.

```javascript
gl.ARRAY_BUFFER
gl.ELEMENT_ARRAY_BUFFER
```

## `size`

버퍼가 사용할 데이터 저장 공간의 크기를 **바이트(byte)** 단위로 지정합니다.

예를 들어 다음 코드는 1024바이트 크기의 버퍼 저장 공간을 만듭니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    1024,
    gl.STATIC_DRAW
);
```

이 방식에서는 실제 데이터가 전달되지 않습니다.

단순히 GPU에서 사용할 메모리 공간만 확보합니다.

```text
1024
↓
1024 Byte 크기의 데이터 저장 공간 생성
```

이후 `bufferSubData()` 같은 메서드를 이용해 실제 데이터를 넣을 수 있습니다.

## `srcData`

버퍼에 복사할 실제 데이터를 전달합니다.

일반 JavaScript 배열이 아니라 보통 다음과 같은 타입을 사용합니다.

* `Float32Array`
* `Uint8Array`
* `Uint16Array`
* `Int32Array`
* 기타 `TypedArray`
* `DataView`

예를 들어:

```javascript
const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

이 경우 `vertices`의 데이터가 현재 `ARRAY_BUFFER`에 바인딩되어 있는 `WebGLBuffer`의 데이터 저장 공간으로 복사됩니다.

즉:

```text
JavaScript

Float32Array
    ↓

bufferData()
    ↓

WebGLBuffer
    ↓

GPU에서 사용
```

### `null`을 전달하는 경우

`srcData`에 `null`을 전달할 수도 있습니다.

이 경우 데이터 저장 공간은 만들어지지만 내용은 초기화되지 않습니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    null,
    gl.STATIC_DRAW
);
```

다만 실제 코드에서는 데이터를 직접 전달하거나 `size`를 지정하는 방식을 더 명확하게 사용하는 경우가 많습니다.

## `usage`

`usage`는 WebGL에게 **이 버퍼 데이터를 앞으로 어떤 방식으로 사용할 예정인지 알려주는 힌트**입니다.

WebGL은 이 정보를 이용해 내부적으로 메모리와 데이터 처리를 최적화할 수 있습니다.

WebGL 1에서는 다음 세 가지 값을 사용할 수 있습니다.

### `gl.STATIC_DRAW`

데이터를 한 번 지정하고 여러 번 사용하는 경우입니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

예를 들어 움직이지 않는 3D 모델의 정점 데이터처럼 데이터가 거의 변경되지 않는 경우에 적합합니다.

```text
데이터 생성
    ↓
한 번 저장
    ↓
여러 번 렌더링
```

WebGL 입문 코드에서 가장 자주 볼 수 있는 값입니다.

### `gl.DYNAMIC_DRAW`

데이터를 여러 번 변경하고, 여러 번 렌더링할 경우 사용합니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.DYNAMIC_DRAW
);
```

예를 들어 정점 위치가 계속 변화하는 오브젝트나 실시간으로 갱신되는 데이터를 처리할 때 사용할 수 있습니다.

```text
데이터 수정
    ↓
렌더링
    ↓
데이터 수정
    ↓
렌더링
    ↓
반복
```

### `gl.STREAM_DRAW`

데이터를 한 번 지정하고, 몇 번 정도만 사용하는 경우를 의미합니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STREAM_DRAW
);
```

데이터의 수명이 짧거나 매우 제한된 횟수만 사용할 것으로 예상되는 경우에 사용할 수 있습니다.

## STATIC / DYNAMIC / STREAM 차이

간단하게 정리하면 다음처럼 기억할 수 있습니다.

```text
STATIC_DRAW
거의 안 바뀜
한 번 저장 → 여러 번 사용

DYNAMIC_DRAW
자주 바뀜
여러 번 저장 → 여러 번 사용

STREAM_DRAW
잠깐 사용
한 번 저장 → 몇 번만 사용
```

일반적인 정적 3D 모델을 그리는 경우라면 보통:

```javascript
gl.STATIC_DRAW
```

를 먼저 사용한다고 생각하면 됩니다.

## WebGL 2에서 추가된 usage

WebGL 2에서는 추가적인 `usage` 값을 사용할 수 있습니다.

### `gl.STATIC_READ`

WebGL에서 데이터를 한 번 읽어온 뒤 애플리케이션에서 여러 번 조회할 경우 사용합니다.

### `gl.DYNAMIC_READ`

WebGL에서 데이터를 반복적으로 읽어오고 애플리케이션에서 여러 번 조회할 경우 사용합니다.

### `gl.STREAM_READ`

WebGL에서 데이터를 한 번 읽어온 뒤 애플리케이션에서 몇 번만 조회할 경우 사용합니다.

### `gl.STATIC_COPY`

WebGL에서 데이터를 한 번 읽어와 저장하고 여러 번 렌더링 작업 등에 사용할 경우 사용합니다.

### `gl.DYNAMIC_COPY`

WebGL에서 데이터를 반복적으로 읽어와 저장하고 여러 번 사용할 경우 사용합니다.

### `gl.STREAM_COPY`

WebGL에서 데이터를 한 번 읽어와 저장하고 몇 번 정도만 사용할 경우 사용합니다.

WebGL 2의 이러한 세부적인 `usage` 값들은 고급 버퍼 처리에서 주로 사용됩니다.

입문 단계에서는 우선 다음 세 가지를 이해하면 충분합니다.

```javascript
gl.STATIC_DRAW
gl.DYNAMIC_DRAW
gl.STREAM_DRAW
```

## 반환값

반환값은 없습니다.

JavaScript에서는 `undefined`를 반환합니다.

```javascript
const result = gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);

console.log(result);
// undefined
```

## 예외

### `gl.OUT_OF_MEMORY`

요청한 크기의 데이터 저장 공간을 만들 수 없으면 발생합니다.

예를 들어 지나치게 큰 `size`를 지정해 GPU 또는 시스템 메모리를 확보하지 못하는 경우입니다.

### `gl.INVALID_VALUE`

`size` 값이 음수이면 발생합니다.

잘못된 예:

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    -100,
    gl.STATIC_DRAW
);
```

버퍼 크기는 음수가 될 수 없습니다.

### `gl.INVALID_ENUM`

`target` 또는 `usage`에 허용되지 않은 값을 전달하면 발생합니다.

예를 들어:

```javascript
gl.bufferData(
    123,
    vertices,
    gl.STATIC_DRAW
);
```

처럼 올바르지 않은 `target` 값을 사용하면 오류가 발생합니다.

## 예제

### bufferData() 사용하기

```javascript
const canvas = document.getElementById("canvas");

const gl = canvas.getContext("webgl");

const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(
    gl.ARRAY_BUFFER,
    1024,
    gl.STATIC_DRAW
);
```

이 코드는 다음과 같은 순서로 동작합니다.

```text
1. WebGLBuffer 생성

createBuffer()
    ↓

2. 해당 버퍼를 ARRAY_BUFFER에 바인딩

bindBuffer()
    ↓

3. 1024바이트 크기의 데이터 저장 공간 생성

bufferData()
```

즉:

```javascript
const buffer = gl.createBuffer();
```

버퍼 객체를 생성합니다.

```javascript
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

생성한 버퍼를 현재 `ARRAY_BUFFER` 작업 대상으로 지정합니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    1024,
    gl.STATIC_DRAW
);
```

현재 `ARRAY_BUFFER`에 바인딩된 버퍼에 1024바이트 크기의 데이터 저장 공간을 만듭니다.

## 실제 데이터를 전달하는 예제

실제 WebGL 코드에서는 크기만 지정하기보다 `TypedArray`를 직접 전달하는 경우가 많습니다.

```javascript
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);

const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

여기서 중요한 부분은 다음입니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

이 코드는:

```text
vertices 데이터를
↓
현재 ARRAY_BUFFER에 바인딩된 버퍼로 복사하고
↓
이 데이터는 자주 변경되지 않을 예정이라고 WebGL에 알려준다
```

라는 의미입니다.

## 버퍼 정보 확인하기

현재 버퍼의 크기와 사용 방식을 확인하려면 `getBufferParameter()`를 사용할 수 있습니다.

### 버퍼 크기 확인

```javascript
gl.getBufferParameter(
    gl.ARRAY_BUFFER,
    gl.BUFFER_SIZE
);
```

현재 바인딩된 `ARRAY_BUFFER`의 크기를 바이트 단위로 반환합니다.

예를 들어:

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    1024,
    gl.STATIC_DRAW
);

const size = gl.getBufferParameter(
    gl.ARRAY_BUFFER,
    gl.BUFFER_SIZE
);

console.log(size);
// 1024
```

### 버퍼 usage 확인

```javascript
gl.getBufferParameter(
    gl.ARRAY_BUFFER,
    gl.BUFFER_USAGE
);
```

현재 버퍼가 어떤 `usage` 값으로 생성되었는지 확인합니다.

예를 들어 `gl.STATIC_DRAW`로 생성했다면 해당 값을 확인할 수 있습니다.

## TypedArray의 크기 계산하기

`TypedArray`가 실제로 몇 바이트를 사용하는지 계산할 수 있습니다.

```javascript
const dataArray = new Float32Array([
    1,
    2,
    3,
    4
]);

const sizeInBytes =
    dataArray.length * dataArray.BYTES_PER_ELEMENT;
```

`Float32Array`는 요소 하나당 4바이트를 사용합니다.

따라서:

```text
원소 개수
4개

×

원소 하나의 크기
4 Byte

=

전체 크기
16 Byte
```

즉:

```javascript
console.log(dataArray.length);
// 4

console.log(dataArray.BYTES_PER_ELEMENT);
// 4

console.log(sizeInBytes);
// 16
```

더 간단하게는 `byteLength`를 사용할 수도 있습니다.

```javascript
console.log(dataArray.byteLength);
// 16
```

## bufferData()는 왜 필요한가?

JavaScript에서 만든 배열은 CPU 쪽 메모리에 존재합니다.

예를 들어:

```javascript
const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);
```

이 데이터만 만들었다고 해서 GPU가 바로 사용할 수 있는 것은 아닙니다.

WebGL에서는 GPU가 사용할 버퍼를 생성하고 데이터를 전달해야 합니다.

전체적인 과정은 다음과 같습니다.

```text
JavaScript / CPU

Float32Array
    ↓

createBuffer()
GPU에서 사용할 버퍼 객체 생성
    ↓

bindBuffer()
현재 작업할 버퍼 선택
    ↓

bufferData()
실제 데이터를 버퍼로 전달
    ↓

GPU

WebGLBuffer
```

코드로 보면:

```javascript
const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);

const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

따라서 지금까지의 세 메서드는 다음처럼 정리할 수 있습니다.

```text
createBuffer()
버퍼 객체를 만든다

        ↓

bindBuffer()
어떤 버퍼를 사용할지 선택한다

        ↓

bufferData()
선택한 버퍼에 실제 데이터를 넣는다
```

특히 `bufferData()`에는 `buffer` 객체 자체를 전달하지 않는다는 점이 중요합니다.

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

여기에는 `buffer` 변수가 없습니다.

그 이유는 이미 앞에서:

```javascript
gl.bindBuffer(
    gl.ARRAY_BUFFER,
    buffer
);
```

를 호출해 현재 `ARRAY_BUFFER`가 어떤 버퍼를 사용하고 있는지 WebGL에 알려줬기 때문입니다.

즉, WebGL은 내부적으로:

```text
ARRAY_BUFFER → buffer
```

상태를 기억하고 있습니다.

그래서 이후:

```javascript
gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);
```

를 실행하면 WebGL은:

```text
현재 ARRAY_BUFFER에 연결된 버퍼에
vertices 데이터를 넣어라
```

라고 이해합니다.

## 관련 문서

* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
* [WebGLBuffer](https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer)
* [createBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer)
* [bindBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer)
* [bufferSubData()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData)
* [getBufferParameter()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter)
* [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
* [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
