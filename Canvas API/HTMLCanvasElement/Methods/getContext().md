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

`contextAttributes`는 WebGL 컨텍스트를 생성할 때 필요한 버퍼와 동작 방식을 요청하는 선택 설정입니다.

```js
const gl = canvas.getContext("webgl", {
  alpha: true,
  antialias: true,
  depth: true,
  stencil: false,
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  powerPreference: "default",
  failIfMajorPerformanceCaveat: false,
  desynchronized: false,
  xrCompatible: false,
});
```

WebGL과 WebGL 2는 동일한 컨텍스트 옵션을 사용합니다.

```js
canvas.getContext("webgl", contextAttributes);
canvas.getContext("webgl2", contextAttributes);
```

##### 전체 옵션 한눈에 보기

| 옵션 | 기본값 | 결정하는 것 | 설정을 바꿀 만한 경우 |
| --- | --- | --- | --- |
| `alpha` | `true` | Canvas 배경 투명도 | Canvas가 항상 불투명할 때 `false` |
| `premultipliedAlpha` | `true` | RGB와 알파의 합성 방식 | 직선 알파 방식이 꼭 필요할 때 `false` |
| `antialias` | `true` | 도형 경계선 보정 | 전체 화면 효과나 픽셀 아트에서 `false` |
| `depth` | `true` | 3D 물체의 앞뒤 판별 | 깊이 비교가 필요 없을 때 `false` |
| `stencil` | `false` | 영역 마스크 버퍼 | 포털, 거울, 복잡한 마스크가 필요할 때 `true` |
| `preserveDrawingBuffer` | `false` | 표시 후 프레임 보존 | 나중에 프레임을 다시 읽어야 할 때 `true` 검토 |
| `powerPreference` | `"default"` | 선호하는 GPU 성능 성향 | 고성능 또는 저전력 GPU를 선호할 때 변경 |
| `failIfMajorPerformanceCaveat` | `false` | 저성능 환경에서 생성 실패 여부 | 느린 GPU에서는 실행하지 않을 때 `true` |
| `desynchronized` | `false` | 입력부터 출력까지의 지연 감소 | 필기처럼 낮은 지연이 중요할 때 `true` |
| `xrCompatible` | `false` | WebXR 호환 GPU 요청 | VR·AR 세션을 사용할 때 고려 |

##### 어떤 컨텍스트에서 사용할 수 있는가?

위 10개를 한꺼번에 `getContext()`의 두 번째 인자로 받는 대상은 WebGL과 WebGL 2입니다.

| 범위 | 설명 |
| --- | --- |
| WebGL·WebGL 2 | 10개 옵션 모두 사용 가능 |
| Canvas 2D | `alpha`, `desynchronized` 등 일부만 사용 |
| `bitmaprenderer` | `alpha` 사용 가능 |
| WebGPU | `getContext()` 옵션으로 사용하지 않고 `configure()`, 렌더 파이프라인, `requestAdapter()`에서 따로 설정 |

같은 개념이 다른 API에도 존재할 수 있지만 이름이나 설정 위치는 다를 수 있습니다.

##### 투명도와 색상 합성

**1. `alpha`**

Canvas가 투명한 배경을 가질 수 있는지 결정합니다.

```text
true  : Canvas 뒤의 HTML이나 다른 레이어가 보일 수 있음
false : Canvas가 항상 불투명함
```

- 오버레이, 투명한 3D 뷰어: `true`
- 전체 화면 게임, 불투명한 시각화: `false` 고려

Canvas 2D와 `bitmaprenderer`도 `alpha`를 사용할 수 있습니다. WebGPU에서는 `context.configure()`의 `alphaMode`를 사용합니다.

**2. `premultipliedAlpha`**

브라우저가 WebGL의 RGB 색상이 알파값과 미리 곱해져 있다고 가정할지 결정합니다.

```text
원래 빨강: 1.0
알파값:    0.5
미리 곱한 빨강: 1.0 × 0.5 = 0.5
```

- 일반적인 투명 WebGL Canvas: 기본값 `true` 유지
- 셰이더가 직선 알파 방식의 RGB를 출력하고 그 방식으로 합성해야 하는 경우: `false` 검토
- `alpha: false`인 불투명 Canvas: 영향이 거의 없음

알파 합성 방식을 정확히 이해하지 못한 상태라면 기본값을 유지하는 편이 안전합니다.

##### 도형과 3D 버퍼

**3. `antialias`**

WebGL 도형의 경계선을 부드럽게 처리할지 요청합니다.

- 3D 모델의 윤곽을 부드럽게 표시: `true`
- 전체 화면 후처리, 픽셀 아트, 성능 우선: `false` 고려

이 옵션은 주로 도형의 가장자리에 적용됩니다. Canvas 해상도나 셰이더 내부의 색상 변화와는 별개입니다.

Canvas 2D의 `imageSmoothingEnabled`는 이미지 확대·축소 보정이므로 목적이 다릅니다. WebGPU에서는 렌더 파이프라인의 `multisample.count`를 설정합니다.

**4. `depth`**

각 픽셀에서 어떤 3D 물체가 더 가까운지 기록하는 깊이 버퍼를 요청합니다.

- 여러 3D 물체가 앞뒤로 겹치는 장면: `true`
- 2D 렌더링, 전체 화면 효과, 깊이 비교가 없는 장면: `false`

Canvas 2D에는 깊이 버퍼가 없습니다. WebGPU에서는 깊이 텍스처와 렌더 파이프라인의 `depthStencil`을 구성합니다.

**5. `stencil`**

화면의 특정 영역에만 그리기 위한 스텐실 버퍼를 요청합니다.

사용 사례:

- 거울과 포털
- 특정 영역 잘라내기
- 복잡한 마스크
- 윤곽선 효과

스텐실 마스크가 필요하면 `true`, 사용하지 않으면 `false`가 적합합니다. Canvas 2D에서는 `clip()`으로 2D 영역을 자를 수 있습니다. WebGPU에서는 스텐실을 포함하는 텍스처 형식과 `depthStencil`을 구성합니다.

##### 프레임 보존과 성능

**6. `preserveDrawingBuffer`**

프레임을 화면에 표시한 뒤 드로잉 버퍼의 내용을 계속 보존할지 결정합니다.

```text
false : 표시가 끝난 버퍼를 브라우저가 재사용하거나 폐기할 수 있음
true  : 직접 지우거나 덮어쓸 때까지 내용을 보존
```

- 매 프레임 전체를 다시 그리는 애니메이션과 게임: `false`
- 표시가 끝난 뒤 프레임을 읽거나 이전 내용을 계속 사용해야 하는 경우: `true` 검토

`true`는 성능과 메모리 비용이 커질 수 있습니다. 스크린샷은 가능하면 렌더링 직후 `toDataURL()` 또는 `readPixels()`를 호출하고 기본값을 유지하는 편이 좋습니다.

Canvas 2D는 그린 내용이 기본적으로 남으므로 이 옵션이 없습니다. WebGPU에서는 보존할 결과를 별도 텍스처나 버퍼로 복사합니다.

**7. `powerPreference`**

어떤 성능 성향의 GPU를 선호하는지 브라우저에 전달합니다.

```text
"default"          브라우저와 운영체제가 결정
"high-performance" 렌더링 성능 우선
"low-power"        전력 절약 우선
```

- 복잡한 3D, 고해상도 시각화, 무거운 셰이더: `"high-performance"` 고려
- 간단한 그래픽, 배터리 사용 시간 우선: `"low-power"` 고려

이 값은 힌트일 뿐이며 특정 GPU 선택을 보장하지 않습니다. WebGPU에서는 `navigator.gpu.requestAdapter()`에 같은 이름의 옵션을 전달합니다.

**8. `failIfMajorPerformanceCaveat`**

하드웨어 GPU를 제대로 사용할 수 없거나 성능 문제가 클 때 WebGL 컨텍스트 생성을 실패시킬지 결정합니다.

```text
false : 성능이 낮아도 가능한 컨텍스트를 생성
true  : 심각한 성능 문제가 예상되면 null 반환
```

- 가능한 많은 환경에서 실행해야 하는 일반 콘텐츠: `false`
- 충분한 GPU 성능이 없으면 실행할 의미가 없는 고성능 콘텐츠: `true` 고려

```js
const gl = canvas.getContext("webgl", {
  failIfMajorPerformanceCaveat: true,
});

if (!gl) {
  // 2D 화면이나 정적 이미지 같은 대체 콘텐츠 표시
}
```

`true`를 사용한다면 WebGL을 생성하지 못한 환경을 위한 대체 화면이 필요합니다.

**9. `desynchronized`**

Canvas의 그리기 주기와 브라우저의 일반적인 화면 표시 주기를 덜 동기화하여 지연을 줄여달라는 힌트입니다.

- 빠른 필기와 드로잉 애플리케이션
- 입력 반응이 중요한 실시간 인터랙션
- 화질 안정성보다 낮은 지연이 중요한 화면

일반적인 애니메이션에서는 기본값 `false`를 유지하면 됩니다. `true` 요청은 환경에 따라 무시될 수 있습니다.

Canvas 2D에서도 같은 옵션을 사용할 수 있습니다.

##### VR·AR

**10. `xrCompatible`**

VR·AR 장치와 호환되는 GPU 설정을 요청합니다.

- 일반적인 WebGL 콘텐츠: `false`
- WebXR VR·AR 콘텐츠: 필요할 때 XR 호환 설정

컨텍스트 생성 단계에서 `xrCompatible: true`를 지정할 수 있지만, 실제 XR 세션을 시작할 때 비동기 메서드를 사용하는 방식이 권장됩니다.

```js
await gl.makeXRCompatible();
```

##### 요청값과 실제 적용값

컨텍스트 옵션은 생성 시점에 정해지므로 같은 컨텍스트에서 나중에 변경할 수 없습니다.

특히 `depth`, `stencil`, `antialias`를 `true`로 지정하는 것은 요청입니다. 브라우저나 GPU가 그대로 제공하지 못할 수 있습니다. 반대로 `false`로 요청하면 해당 버퍼나 기능을 제공하지 않아야 합니다.

실제로 적용된 값은 `getContextAttributes()`로 확인합니다.

```js
const actualOptions = gl.getContextAttributes();
console.log(actualOptions);
```

관련 자료:

- [MDN: `HTMLCanvasElement.getContext()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
- [Khronos: WebGL Specification](https://registry.khronos.org/webgl/specs/latest/1.0/)

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