# HTMLCanvasElement.getContext()
__``HTMLCanvasElement.getContext()``__ 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다. 컨텍스트 식별자가 지원되지 않을 경우 [``null``]()을 반환합니다.  
  
동일한 캔버스 엘리먼트에서 나중에 이 메소드를 호출하면 동일한 ``contextType`` 인자와 함께 메소드가 마지막으로 호출되었을 때 반환된 것과 같이 동일한 드로잉 컨텍스트 인스턴스를 반환합니다. 다른 드로잉 컨텍스트 객체를 얻으려면 다른 ``contextType``을 전달하거나 다른 캔버스 엘리먼트에서 메소드를 호출해야 합니다.

## 구문

~~~js
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
~~~

### 파라미터

#### contextType
캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 [``DOMString``](https://developer.mozilla.org/ko/docs/Web/API/DOMString) 입니다. 가능한 값은 다음과 같습니다.
- ``"2d"``, 2차원 랜더링 컨텍스트를 나타내는 [CanvasRenderingContext2D](https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D) 객체를 생성하게 합니다.
- ``"webgl"`` (또는 ``"experimental-webgl"``), 3차원 랜더링 컨텍스트를 나타내는 [``WebGLRenderingContext``](https://developer.mozilla.org/ko/docs/Web/API/WebGLRenderingContext) 객체를 생성합니다. 이 컨텍스트는 [WebGL](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API) 버전 1(OpenGL ES 2.0)을 구현하는 브라우저에서만 사용가능합니다.
- ``"webgl2``, 3차원 랜더링 컨텍스트를 나타내는 [``WebGL2RenderingContext``](https://developer.mozilla.org/ko/docs/Web/API/WebGL2RenderingContext) 객체를 생성합니다. 이 컨텍스트는 [WebGL](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API) 버전 2(OpenGL ES 3.0)을 구현하는 브라우저에서만 사용가능합니다.
- ``"bitmaprenderer"``. 캔버스의 컨텐츠를 주어진 [``ImageBitmap``](https://developer.mozilla.org/ko/docs/Web/API/ImageBitmap)으로 대체하기위한 기능만을 제공하는 [``ImageBitmapRenderingContext``](https://developer.mozilla.org/ko/docs/Web/API/ImageBitmap) 를 생성합니다.  
  
> __노트 :__ 식별자 ``"experimental-webgl"`` 은 WebGL의 새로운 구현에서 사용됩니다. 이러한 구현은 테스트 스위트 적합성을 아직 만족하지 못하며, 플랫폼 상의 그래픽 드라이버도 아직 불안정합니다. [Khronos Group](https://www.khronos.org/) 은 특정 [적합성 규칙](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt) 에 따라 WebGL 구현을 인증합니다.

#### contextAttributes
랜더링 컨텍스트를 생성할 떄 몇 가지 컨텍스트 속성을 사용할 수 있습니다. 예를 들면
~~~js
const gl = canvas.getContext('webgl',{
    antialias : false,
    depth: false
})
~~~

#### 2D 컨텍스트 속성

- __``alpha``__ : `false`이면 Canvas를 항상 불투명한 것으로 처리합니다. 투명한 Canvas가 필요 없다면 합성 작업을 줄이는 데 도움이 될 수 있습니다.
- __``willReadFrequently``__ : `getImageData()`처럼 픽셀을 자주 읽을 예정임을 브라우저에 알리는 힌트입니다.

#### WebGL 컨텍스트 속성

```js
const gl = canvas.getContext("webgl", {
  alpha: false,
  antialias: false,
  depth: false,
  stencil: false,
  preserveDrawingBuffer: false,
  powerPreference: "high-performance",
});
```

이 옵션들은 WebGL Canvas를 만들 때 브라우저에 요청하는 초기 설정입니다. 필요한 버퍼와 기능만 활성화하면 메모리와 처리 비용을 줄이는 데 도움이 됩니다.

##### 어디에서 사용할 수 있는가?

아래 표는 같은 옵션을 `getContext()`의 두 번째 인자로 직접 전달할 수 있는지와 다른 API에서의 대응 방법을 보여줍니다.

| 옵션 | Canvas 2D | `bitmaprenderer` | WebGL·WebGL 2 | WebGPU에서의 대응 방법 |
| --- | --- | --- | --- | --- |
| `alpha` | 사용 가능 | 사용 가능 | 사용 가능 | `context.configure()`의 `alphaMode` |
| `antialias` | 직접 설정 불가 | 해당 없음 | 사용 가능 | 렌더 파이프라인의 `multisample.count` |
| `depth` | 해당 없음 | 해당 없음 | 사용 가능 | 깊이 텍스처와 `depthStencil` 설정 |
| `stencil` | 해당 없음 | 해당 없음 | 사용 가능 | 스텐실 형식 텍스처와 `depthStencil` 설정 |
| `preserveDrawingBuffer` | 해당 없음 | 해당 없음 | 사용 가능 | 동일한 옵션 없음. 필요한 결과를 별도 텍스처에 복사 |
| `powerPreference` | 해당 없음 | 해당 없음 | 사용 가능 | `navigator.gpu.requestAdapter()`에서 설정 |

여섯 값을 현재 형태로 한꺼번에 전달하는 대상은 WebGL과 WebGL 2입니다. 다른 API에서도 같은 개념을 사용할 수 있지만 이름이나 설정 위치가 다를 수 있습니다.

##### `alpha: false`

Canvas 배경의 투명도를 사용하지 않겠다는 뜻입니다.

```text
alpha: true
Canvas가 투명할 수 있고 뒤쪽 HTML이 보일 수 있음

alpha: false
Canvas가 항상 불투명하고 뒤쪽 HTML이 보이지 않음
```

Canvas 뒤의 HTML이나 다른 레이어가 보여야 한다면 `true`를 사용합니다. 전체 화면 게임, 이미지 처리 결과, 불투명한 시각화처럼 배경이 비칠 필요가 없다면 `false`를 사용할 수 있습니다. Canvas가 항상 불투명하다는 사실을 브라우저가 알 수 있어 합성 비용을 줄이는 데 도움이 될 수 있습니다.

Canvas 2D와 `bitmaprenderer`도 `alpha`를 사용할 수 있습니다. WebGPU에서는 `alpha` 대신 `context.configure()`의 `alphaMode`를 설정합니다.

##### `antialias: false`

WebGL 도형의 경계선을 부드럽게 만드는 기본 멀티샘플링을 사용하지 않겠다는 뜻입니다. 일반적인 3D 삼각형의 가장자리는 계단처럼 보일 수 있습니다.

일반적인 3D 모델의 윤곽을 부드럽게 보여야 한다면 `true`가 유용합니다. 화면 전체를 덮는 후처리 효과, 픽셀 아트, 경계가 화면 밖에 있는 전체 화면 셰이더처럼 기본 도형 경계 보정이 중요하지 않다면 `false`를 고려할 수 있습니다.

`antialias: false`라고 해서 셰이더 내부의 색상 변화가 무조건 거칠어지는 것은 아닙니다. 이 옵션은 주로 WebGL 도형의 가장자리에 적용되며 Canvas 해상도와는 별개의 문제입니다.

Canvas 2D는 이 값을 `getContext()` 옵션으로 받지 않습니다. `ctx.imageSmoothingEnabled`는 이미지 확대·축소 보정 기능이므로 이 옵션과 목적이 다릅니다. WebGPU에서는 렌더 파이프라인의 `multisample.count`로 멀티샘플링을 구성합니다.

##### `depth: false`

어떤 물체가 앞에 있고 뒤에 있는지 기록하는 깊이 버퍼를 만들지 않겠다는 뜻입니다.

여러 3D 물체가 앞뒤로 겹치는 장면이라면 일반적으로 `true`가 필요합니다. 2D 렌더링, 전체 화면 후처리, 사각형 하나만 그리는 셰이더처럼 물체의 앞뒤를 비교하지 않는다면 `false`로 메모리를 절약할 수 있습니다.

Canvas 2D에는 깊이 버퍼가 없습니다. WebGPU에서는 `getContext()`가 아니라 깊이 텍스처와 렌더 파이프라인의 `depthStencil` 항목을 구성합니다.

##### `stencil: false`

특정 영역에만 그림을 그리기 위한 스텐실 버퍼를 만들지 않겠다는 뜻입니다.

스텐실 버퍼는 다음과 같은 마스크 효과에 사용됩니다.

- 거울과 포털
- 특정 영역 잘라내기
- 복잡한 마스크
- 윤곽선 효과

이런 영역 마스킹이 필요하면 `true`를 사용하고, 사용하지 않는다면 `false`로 스텐실 버퍼 생성을 생략할 수 있습니다.

Canvas 2D에서는 `clip()`으로 2D 영역을 잘라낼 수 있습니다. WebGPU에서는 스텐실을 포함하는 텍스처 형식과 렌더 파이프라인의 `depthStencil` 항목을 구성합니다.

##### `preserveDrawingBuffer: false`

프레임을 화면에 표시한 후 그 내용을 계속 보존할 필요가 없다는 뜻입니다.

```text
1번 프레임을 그림
→ 화면에 표시
→ 이전 내용은 보존하지 않아도 됨

2번 프레임을 새로 그림
→ 화면에 표시
```

매 프레임 화면 전체를 다시 그리는 애니메이션과 게임이라면 일반적으로 `false`가 적합합니다. 브라우저가 이전 프레임 버퍼를 자유롭게 재사용하거나 폐기할 수 있어 성능에 유리합니다.

`false`인 경우 프레임 표시가 끝난 후의 버퍼 내용은 보장되지 않습니다. `canvas.toDataURL()` 등으로 나중에 저장하거나 이전 프레임을 계속 이용해야 한다면 렌더링 직후 캡처하거나 `true`를 검토해야 합니다. `true`는 성능과 메모리 비용이 커질 수 있으므로 필요한 경우에만 사용합니다.

Canvas 2D는 그린 내용이 기본적으로 남으므로 이 옵션이 없습니다. WebGPU에도 동일한 옵션이 없으며, 보존할 결과를 별도의 텍스처나 버퍼로 복사해야 합니다.

##### `powerPreference: "high-performance"`

가능하면 고성능 GPU를 사용해 달라는 힌트입니다.

```text
"default"          브라우저와 운영체제의 기본 선택
"low-power"        전력 소비가 낮은 GPU 선호
"high-performance" 성능이 높은 GPU 선호
```

복잡한 3D 게임, 고해상도 시각화, 연산량이 많은 셰이더에는 `"high-performance"`를 고려할 수 있습니다. 간단한 그래픽이나 배터리 사용 시간이 더 중요하다면 `"low-power"`가 적합할 수 있습니다.

다만 반드시 특정 GPU가 선택된다는 보장은 없습니다. 최종 선택은 브라우저, 운영체제, 그래픽 드라이버가 결정합니다. WebGPU에서는 `getContext()`가 아니라 `navigator.gpu.requestAdapter()`에 같은 이름의 옵션을 전달합니다.

##### 한눈에 정리

| 옵션 | `true` 또는 고성능 설정을 고려할 때 | `false` 또는 저전력 설정을 고려할 때 |
| --- | --- | --- |
| `alpha` | Canvas 뒤의 HTML이 보여야 할 때 | 완전히 불투명한 화면일 때 |
| `antialias` | 3D 도형 윤곽을 부드럽게 보여야 할 때 | 전체 화면 효과, 픽셀 아트, 성능이 중요할 때 |
| `depth` | 여러 3D 물체의 앞뒤를 판별할 때 | 2D 또는 전체 화면 효과만 그릴 때 |
| `stencil` | 포털, 거울, 복잡한 마스크가 필요할 때 | 영역 마스킹을 사용하지 않을 때 |
| `preserveDrawingBuffer` | 표시 후에도 프레임 버퍼가 필요할 때 | 매 프레임 전체를 다시 그릴 때 |
| `powerPreference` | 복잡한 그래픽에는 `"high-performance"` | 배터리가 중요하면 `"low-power"` |

필요하지 않은 버퍼와 기능은 끄는 것이 메모리와 성능에 유리할 수 있습니다. 반대로 필요한 기능까지 끄면 올바른 화면을 만들 수 없으므로 렌더링 방식에 맞춰 선택해야 합니다.

컨텍스트 속성은 생성 시점에 정해지므로 같은 컨텍스트에서 나중에 변경할 수 없습니다. 브라우저가 실제로 적용한 값은 다음처럼 확인할 수 있습니다.

```js
console.log(gl.getContextAttributes());
```

### 예시
다음 ``<canvas>`` 엘리먼트를 고려해볼 때
~~~html
<canvas id="canvas" width="300" height="300"></canvas>
~~~
다음 코드를 사용해 캔버스의 ``2d`` 컨텍스트를 얻을 수 있습니다.
~~~js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log(ctx);   // CanvasRenderingContext2D { ... }
~~~
이제 캔버스에 대한 [2D 랜더링 컨텍스트](https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D) 를 갖고 있으며 이 안에 그릴 수 있습니다.

## 무엇을 만들 때 사용하는가?

컨텍스트마다 만들 수 있는 결과물이 완전히 나뉘는 것은 아니다. 움직이는 원이나 간단한 게임은 `2d`, WebGL, WebGPU로 모두 만들 수 있다.

차이는 **무엇을 만들 수 있는가**보다 **어떤 방식과 규모로 만드는가**에 가깝다.

| 컨텍스트 | 쉽게 말하면 | 만들기 좋은 것 |
| --- | --- | --- |
| `"2d"` | 일반 그림 도구 | 그림판, 차트, 간단한 2D 게임 |
| `"bitmaprenderer"` | 완성된 그림 전달 도구 | Worker 등에서 만든 화면 표시 |
| `"webgl"` | GPU 그림 도구 | 3D, 파티클, 불꽃, 화려한 효과 |
| `"webgl2"` | 기능이 확장된 WebGL | 복잡한 3D와 고급 효과 |
| `"webgpu"` | 최신 GPU 작업 도구 | 대규모 3D, 시뮬레이션, GPU 연산 |

### `"2d"`로 만들기 좋은 것

- 서명판과 그림판
- 막대그래프와 선 그래프
- 이미지 자르기와 간단한 편집
- 공 튕기기, 테트리스, 카드 게임
- 캐릭터 스프라이트 애니메이션
- 간단한 눈이나 폭죽 효과

원을 그릴 때도 브라우저가 준비한 도형 명령을 바로 사용한다.

```js
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.fill();
```

### `"webgl"`로 만들기 좋은 것

- 3D 지구본, 자동차 전시장, 3D 게임
- 실시간 반사와 절차적으로 생성한 배경
- 불, 연기, 안개, 별이 가득한 우주
- 수만 개의 파티클
- 이미지 왜곡과 액체 같은 배경
- 화려한 웹사이트 시각 효과

WebGL은 수많은 점과 픽셀을 GPU가 동시에 계산해야 하는 화면에 적합하다. 예를 들어 GPU가 픽셀마다 빛, 표면 방향, 색상과 반사량을 계산하는 효과를 만들 수 있다.

### `"webgl2"`로 만들기 좋은 것

WebGL 1과 결과물의 종류는 비슷하지만 더 복잡한 그래픽을 효율적으로 처리할 수 있다.

- 오브젝트가 많은 3D 장면
- 고급 그림자와 후처리 효과
- 발전된 파티클 시스템
- 의료·과학 데이터 시각화
- 3D 볼륨 데이터

처음 공부할 때는 WebGL 1과 WebGL 2를 완전히 별개의 기술로 보기보다 같은 WebGL 계열의 두 버전으로 이해하면 된다.

### `"webgpu"`로 만들기 좋은 것

- 최신 고성능 3D 게임
- 아주 많은 파티클
- 유체, 천, 머리카락 시뮬레이션
- 대규모 물리 계산과 데이터 시각화
- 브라우저에서 실행하는 영상 처리와 AI 연산

예를 들어 물방울 10개를 움직이는 작업은 `2d`로도 충분하지만, 물 입자 수십만 개를 동시에 계산해야 한다면 WebGPU가 더 적합할 수 있다.

### `"bitmaprenderer"`로 만들기 좋은 것

`bitmaprenderer`는 직접 그림을 만드는 도구가 아니다. 다른 곳에서 완성된 `ImageBitmap`을 Canvas에 표시하는 역할만 담당한다.

```text
Web Worker에서 그림 완성
            ↓
     ImageBitmap 생성
            ↓
bitmaprenderer가 Canvas에 표시
```

### 상황별 선택 기준

```text
그림판, 차트, 간단한 2D 게임
→ 2d

3D 또는 화려한 시각 효과
→ webgl 또는 webgl2

최신 GPU 그래픽이나 대규모 계산
→ webgpu

다른 곳에서 완성한 이미지를 표시만 하는 경우
→ bitmaprenderer
```

처음에는 **`2d`는 일반 그림**, **WebGL은 GPU 특수효과와 3D**라고 구분하면 충분하다.

[내용출처 MDN getContext() 아직 작성하지 않은 내용은 사용할 때 정리할 것!](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)