# Three.js: WebGLRenderer

`WebGLRenderer`는 **Three.js의 Scene과 Camera를 이용해 실제 Canvas에 3D 장면을 렌더링하는 클래스**입니다.

현재 `WebGLRenderer`는 **WebGL 2를 사용하며, r163부터 WebGL 1은 지원하지 않습니다.**

쉽게 말하면:

```text id="renderer-flow"
Scene
+
Camera
↓
WebGLRenderer
↓
Canvas에 화면 출력
```

기본 사용:

```javascript id="renderer-basic"
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

renderer.render(
    scene,
    camera
);
```

---

# Constructor

## new WebGLRenderer()

```javascript id="renderer-constructor"
new THREE.WebGLRenderer(parameters)
```

새로운 WebGL 렌더러를 생성합니다.

```javascript id="renderer-constructor-example"
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
```

---

# Properties

## autoClear

렌더링 전에 버퍼를 자동으로 초기화할지 결정합니다.

```javascript id="renderer-autoclear"
renderer.autoClear = true;
```

기본값은 `true`입니다.

---

## autoClearColor

`autoClear`가 `true`일 때 Color Buffer를 자동으로 지울지 결정합니다.

```javascript id="renderer-autoclear-color"
renderer.autoClearColor = true;
```

기본값은 `true`입니다.

---

## autoClearDepth

Depth Buffer를 자동으로 지울지 결정합니다.

```javascript id="renderer-autoclear-depth"
renderer.autoClearDepth = true;
```

기본값은 `true`입니다.

---

## autoClearStencil

Stencil Buffer를 자동으로 지울지 결정합니다.

```javascript id="renderer-autoclear-stencil"
renderer.autoClearStencil = true;
```

기본값은 `true`입니다.

---

## capabilities

현재 WebGL 환경에서 사용할 수 있는 GPU 기능 정보를 가지고 있습니다.

```javascript id="renderer-capabilities"
console.log(
    renderer.capabilities
);
```

예:

```text id="renderer-capability-list"
최대 Texture 크기
최대 Attribute 수
Shader precision
최대 Uniform 수
```

---

## clippingPlanes

Scene 전체에 적용되는 사용자 정의 clipping plane 목록입니다.

```javascript id="renderer-clipping"
renderer.clippingPlanes = [
    plane
];
```

Plane의 바깥쪽 영역을 잘라낼 때 사용합니다.

---

## coordinateSystem

Renderer가 사용하는 좌표계를 나타냅니다.

`WebGLRenderer`에서는 항상:

```text id="renderer-coordinate"
WebGLCoordinateSystem
```

입니다.

---

## debug

Shader 컴파일 및 링크 오류 확인 설정입니다.

```javascript id="renderer-debug"
renderer.debug.checkShaderErrors = true;
```

개발 중에는 Shader 오류 확인을 켜두는 것이 좋습니다.

`onShaderError`를 이용해 사용자 정의 오류 처리도 가능합니다.

---

## domElement

Renderer가 실제로 그림을 출력하는 Canvas입니다.

```javascript id="renderer-dom"
document.body.appendChild(
    renderer.domElement
);
```

별도의 canvas를 전달하지 않았다면 renderer가 자동으로 생성합니다.

---

## extensions

WebGL Extension 지원 여부를 확인합니다.

```javascript id="renderer-extension"
renderer.extensions.has(
    "EXT_texture_filter_anisotropic"
);
```

주요 메서드:

```text id="renderer-extension-methods"
get()
→ Extension 객체 반환

has()
→ 지원 여부 확인
```

---

## info

현재 렌더링과 GPU 메모리에 대한 통계 정보를 제공합니다.

```javascript id="renderer-info"
console.log(
    renderer.info
);
```

예:

```text id="renderer-info-list"
renderer.info.render.calls
→ Draw Call 수

renderer.info.render.triangles
→ Triangle 수

renderer.info.memory.geometries
→ Geometry 수

renderer.info.memory.textures
→ Texture 수
```

---

## isWebGLRenderer

현재 객체가 `WebGLRenderer`인지 확인합니다.

```javascript id="renderer-is"
renderer.isWebGLRenderer;
// true
```

읽기 전용이며 기본값은 `true`입니다.

---

## localClippingEnabled

각 Object의 개별 clipping plane을 사용할지 결정합니다.

```javascript id="renderer-local-clipping"
renderer.localClippingEnabled = true;
```

기본값은 `false`입니다.

---

## outputColorSpace

Renderer가 출력할 Color Space를 설정합니다.

기본값:

```text id="renderer-color-space"
SRGBColorSpace
```

---

## properties

Three.js 객체와 내부 WebGL 객체의 상태를 추적하는 내부 관리 객체입니다.

일반적인 사용에서는 직접 다룰 일이 많지 않습니다.

---

## renderLists

Renderer가 렌더링할 Object 목록을 관리합니다.

일반적인 사용에서는 Three.js 내부에서 자동으로 처리합니다.

---

## shadowMap

Shadow Map을 관리합니다.

```javascript id="renderer-shadow"
renderer.shadowMap.enabled = true;
```

그림자를 사용하려면 활성화합니다.

---

## sortObjects

Object의 렌더링 순서를 자동으로 정렬할지 결정합니다.

```javascript id="renderer-sort"
renderer.sortObjects = true;
```

기본값은 `true`입니다.

투명 Object의 렌더링 순서 등에 사용됩니다.

---

## state

현재 WebGL State를 관리하는 내부 객체입니다.

예를 들어 WebGL의:

```text id="renderer-state-list"
blend
depth
viewport
scissor
```

같은 상태를 Three.js가 관리합니다.

---

## toneMapping

HDR 색상을 화면에 표현할 때 사용할 Tone Mapping 방식을 설정합니다.

예:

```javascript id="renderer-tonemap"
renderer.toneMapping =
    THREE.ACESFilmicToneMapping;
```

기본값은 `NoToneMapping`입니다.

---

## toneMappingExposure

Tone Mapping의 노출값을 설정합니다.

```javascript id="renderer-exposure"
renderer.toneMappingExposure = 1;
```

기본값은 `1`입니다.

---

## transmissionResolutionScale

`MeshPhysicalMaterial`의 `transmission` 렌더링 해상도 배율입니다.

값을 낮추면 성능을 개선할 수 있습니다.

기본값:

```text id="renderer-transmission"
1
```

---

## xr

WebXR 기능을 관리하는 `WebXRManager`입니다.

```javascript id="renderer-xr"
renderer.xr
```

VR / AR 렌더링과 관련됩니다.

---

# Methods

## clear()

Color, Depth, Stencil Buffer를 초기화합니다.

```javascript id="renderer-clear"
renderer.clear(
    true,
    true,
    true
);
```

기본값은 모두 `true`입니다.

---

## clearColor()

Color Buffer만 초기화합니다.

```javascript id="renderer-clear-color"
renderer.clearColor();
```

다음과 같습니다.

```javascript id="renderer-clear-color-equal"
renderer.clear(
    true,
    false,
    false
);
```

---

## clearDepth()

Depth Buffer만 초기화합니다.

```javascript id="renderer-clear-depth"
renderer.clearDepth();
```

---

## clearStencil()

Stencil Buffer만 초기화합니다.

```javascript id="renderer-clear-stencil"
renderer.clearStencil();
```

---

## compile()

Scene에서 사용할 Material Shader를 미리 컴파일합니다.

```javascript id="renderer-compile"
renderer.compile(
    scene,
    camera
);
```

첫 렌더링 시 발생할 수 있는 Shader 컴파일 지연을 줄이는 데 사용할 수 있습니다.

---

## compileAsync()

`compile()`의 비동기 버전입니다.

```javascript id="renderer-compile-async"
await renderer.compileAsync(
    scene,
    camera
);
```

`KHR_parallel_shader_compile` Extension을 사용하며 가능한 경우 이 방식이 권장됩니다.

---

## copyFramebufferToTexture()

현재 Framebuffer의 픽셀을 Texture에 복사합니다.

```javascript id="renderer-copy-framebuffer"
renderer.copyFramebufferToTexture(
    texture,
    position
);
```

---

## copyTextureToTexture()

한 Texture의 데이터를 다른 Texture로 복사합니다.

```javascript id="renderer-copy-texture"
renderer.copyTextureToTexture(
    sourceTexture,
    destinationTexture
);
```

필요한 경우 복사할 영역과 mip level도 지정할 수 있습니다.

---

## dispose()

Renderer가 사용하던 GPU 관련 리소스를 해제합니다.

```javascript id="renderer-dispose"
renderer.dispose();
```

Renderer를 더 이상 사용하지 않을 때 호출합니다.

---

## forceContextLoss()

WebGL Context Loss 상태를 강제로 발생시킵니다.

```javascript id="renderer-context-loss"
renderer.forceContextLoss();
```

주로 테스트나 디버깅용입니다.

---

## forceContextRestore()

강제로 잃어버린 WebGL Context를 복구합니다.

```javascript id="renderer-context-restore"
renderer.forceContextRestore();
```

---

## getActiveCubeFace()

현재 활성화된 Cube Render Target의 face index를 반환합니다.

```javascript id="renderer-active-cube"
const face =
    renderer.getActiveCubeFace();
```

---

## getActiveMipmapLevel()

현재 활성화된 mipmap level을 반환합니다.

```javascript id="renderer-active-mipmap"
const level =
    renderer.getActiveMipmapLevel();
```

---

## getClearAlpha()

현재 Clear Alpha 값을 반환합니다.

```javascript id="renderer-get-alpha"
const alpha =
    renderer.getClearAlpha();
```

범위:

```text id="renderer-alpha-range"
0 ~ 1
```

---

## getClearColor()

현재 Clear Color를 가져옵니다.

```javascript id="renderer-get-color"
const color = new THREE.Color();

renderer.getClearColor(
    color
);
```

---

## getContext()

Renderer가 내부적으로 사용하는 WebGL Context를 반환합니다.

```javascript id="renderer-context"
const gl =
    renderer.getContext();
```

현재는 `WebGL2RenderingContext`입니다.

---

## getContextAttributes()

WebGL Context 생성 옵션을 반환합니다.

```javascript id="renderer-context-attributes"
const attributes =
    renderer.getContextAttributes();
```

---

## getCurrentViewport()

현재 실제로 사용 중인 Viewport 정보를 가져옵니다.

```javascript id="renderer-current-viewport"
const viewport = new THREE.Vector4();

renderer.getCurrentViewport(
    viewport
);
```

---

## getDrawingBufferSize()

실제 Drawing Buffer의 크기를 **물리 픽셀 기준**으로 가져옵니다.

```javascript id="renderer-buffer-size"
const size = new THREE.Vector2();

renderer.getDrawingBufferSize(
    size
);
```

Pixel Ratio가 반영됩니다.

```text id="renderer-buffer-example"
Renderer 크기
800 × 600

Pixel Ratio
2

↓

Drawing Buffer
1600 × 1200
```

`getSize()`와의 차이:

```text id="renderer-size-compare"
getSize()
→ 논리 픽셀

getDrawingBufferSize()
→ 실제 물리 픽셀
→ Pixel Ratio 반영
```

---

## getPixelRatio()

현재 Pixel Ratio를 반환합니다.

```javascript id="renderer-get-ratio"
const ratio =
    renderer.getPixelRatio();
```

---

## getRenderTarget()

현재 활성화된 Render Target을 반환합니다.

```javascript id="renderer-get-target"
const target =
    renderer.getRenderTarget();
```

Canvas로 직접 렌더링 중이면 `null`입니다.

---

## getScissor()

현재 Scissor 영역을 가져옵니다.

```javascript id="renderer-get-scissor"
const scissor = new THREE.Vector4();

renderer.getScissor(
    scissor
);
```

---

## getScissorTest()

현재 Scissor Test가 활성화되어 있는지 반환합니다.

```javascript id="renderer-get-scissor-test"
const enabled =
    renderer.getScissorTest();
```

---

## getSize()

Renderer 크기를 **논리 픽셀 기준**으로 가져옵니다.

```javascript id="renderer-get-size"
const size = new THREE.Vector2();

renderer.getSize(
    size
);
```

Pixel Ratio는 반영하지 않습니다.

---

## getViewport()

설정된 Viewport 값을 가져옵니다.

```javascript id="renderer-get-viewport"
const viewport = new THREE.Vector4();

renderer.getViewport(
    viewport
);
```

---

## initRenderTarget()

Render Target의 GPU 메모리를 미리 초기화합니다.

```javascript id="renderer-init-target"
renderer.initRenderTarget(
    renderTarget
);
```

렌더링 전에 Texture 복사 작업 등을 해야 할 때 사용할 수 있습니다.

---

## initTexture()

Texture를 GPU에 미리 초기화합니다.

```javascript id="renderer-init-texture"
renderer.initTexture(
    texture
);
```

첫 사용 시 발생할 수 있는 Texture 업로드 지연을 줄이는 데 사용할 수 있습니다.

---

## readRenderTargetPixels()

Render Target의 픽셀 데이터를 TypedArray로 읽습니다.

```javascript id="renderer-read-pixels"
renderer.readRenderTargetPixels(
    renderTarget,
    0,
    0,
    width,
    height,
    buffer
);
```

GPU의 렌더링 결과를 JavaScript에서 읽을 때 사용합니다.

---

## readRenderTargetPixelsAsync()

`readRenderTargetPixels()`의 비동기 버전입니다.

```javascript id="renderer-read-pixels-async"
const data =
    await renderer.readRenderTargetPixelsAsync(
        renderTarget,
        0,
        0,
        width,
        height,
        buffer
    );
```

가능한 경우 비동기 버전 사용이 권장됩니다.

---

## render()

Scene을 Camera 기준으로 실제 렌더링합니다.

```javascript id="renderer-render"
renderer.render(
    scene,
    camera
);
```

쉽게 말하면:

```text id="renderer-render-flow"
Scene
→ 무엇을 그릴지

Camera
→ 어디서 볼지

Renderer
→ 실제 화면에 그리기
```

입니다.

---

## resetState()

Three.js가 관리하는 내부 WebGL State를 초기화합니다.

```javascript id="renderer-reset"
renderer.resetState();
```

하나의 WebGL Context를 여러 라이브러리가 공유할 때 주로 사용합니다.

---

## setAnimationLoop()

애니메이션 렌더링 루프를 설정합니다.

```javascript id="renderer-animation"
renderer.setAnimationLoop(() => {
    renderer.render(
        scene,
        camera
    );
});
```

Three.js에서는 호환성을 위해 직접 `requestAnimationFrame()`을 사용하는 것보다 이 방식을 권장합니다.

---

## setClearAlpha()

Clear Alpha 값을 설정합니다.

```javascript id="renderer-set-alpha"
renderer.setClearAlpha(
    0.5
);
```

---

## setClearColor()

Clear Color와 Alpha 값을 설정합니다.

```javascript id="renderer-set-color"
renderer.setClearColor(
    0x000000,
    1
);
```

---

## setDrawingBufferSize()

Width, Height, Pixel Ratio를 한 번에 지정해 Drawing Buffer 크기를 설정합니다.

```javascript id="renderer-set-buffer-size"
renderer.setDrawingBufferSize(
    width,
    height,
    pixelRatio
);
```

실제 크기는:

```text id="renderer-buffer-formula"
drawing width
= width × pixelRatio

drawing height
= height × pixelRatio
```

입니다.

---

## setEffects()

렌더링 후 적용할 Post-processing Effect 목록을 설정합니다.

```javascript id="renderer-effects"
renderer.setEffects(
    effects
);
```

---

## setNodesHandler()

WebGLRenderer에서 TSL Node Material을 사용할 수 있도록 Node Handler를 설정합니다.

```javascript id="renderer-nodes"
renderer.setNodesHandler(
    nodesHandler
);
```

WebGPURenderer로의 이전을 준비할 때 사용할 수 있습니다.

---

## setOpaqueSort()

불투명 Object의 렌더링 순서를 결정하는 사용자 정의 정렬 함수를 설정합니다.

```javascript id="renderer-opaque-sort"
renderer.setOpaqueSort(
    customSort
);
```

`null`을 전달하면 기본 정렬 방식을 사용합니다.

---

## setPixelRatio()

Pixel Ratio를 설정합니다.

```javascript id="renderer-set-ratio"
renderer.setPixelRatio(
    window.devicePixelRatio
);
```

고해상도 디스플레이에서 더 선명하게 렌더링할 수 있습니다.

일반적으로 성능을 위해 제한하기도 합니다.

```javascript id="renderer-set-ratio-limit"
renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);
```

---

## setRenderTarget()

현재 렌더링 대상을 변경합니다.

```javascript id="renderer-set-target"
renderer.setRenderTarget(
    renderTarget
);
```

Render Target을 Texture 등에 렌더링할 때 사용합니다.

다시 Canvas로 렌더링하려면:

```javascript id="renderer-set-target-null"
renderer.setRenderTarget(
    null
);
```

---

## setScissor()

렌더링이 영향을 줄 Scissor 영역을 지정합니다.

```javascript id="renderer-set-scissor"
renderer.setScissor(
    0,
    0,
    400,
    300
);
```

---

## setScissorTest()

Scissor Test를 활성화하거나 비활성화합니다.

```javascript id="renderer-scissor-test"
renderer.setScissorTest(
    true
);
```

활성화하면 `setScissor()`로 지정한 영역 안의 픽셀만 영향을 받습니다.

---

## setSize()

Renderer와 Canvas의 크기를 설정합니다.

```javascript id="renderer-size"
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);
```

Pixel Ratio를 고려해 Canvas 크기를 변경하고 Viewport도 `(0, 0)`부터 해당 크기로 설정합니다.

세 번째 인자를 `false`로 지정하면 Canvas CSS Style은 변경하지 않습니다.

```javascript id="renderer-size-style"
renderer.setSize(
    800,
    600,
    false
);
```

---

## setTransparentSort()

투명 Object의 렌더링 순서를 결정하는 사용자 정의 정렬 함수를 설정합니다.

```javascript id="renderer-transparent-sort"
renderer.setTransparentSort(
    customSort
);
```

---

## setViewport()

렌더링할 Viewport 영역을 설정합니다.

```javascript id="renderer-viewport"
renderer.setViewport(
    0,
    0,
    800,
    600
);
```

WebGL의:

```javascript id="renderer-gl-viewport"
gl.viewport(
    0,
    0,
    800,
    600
);
```

와 비슷한 역할입니다.

---

# Type Definitions

## Capabilities

현재 Renderer와 GPU가 지원하는 기능 정보입니다.

### getMaxAnisotropy

사용 가능한 최대 Anisotropy 값을 반환합니다.

```javascript id="renderer-anisotropy"
renderer.capabilities.getMaxAnisotropy();
```

### getMaxPrecision

지원 가능한 최대 Shader precision을 반환합니다.

```javascript id="renderer-precision"
renderer.capabilities.getMaxPrecision(
    "highp"
);
```

### logarithmicDepthBuffer

Logarithmic Depth Buffer 사용 여부입니다.

### maxAttributes

Vertex Shader에서 사용할 수 있는 최대 Attribute 수입니다.

### maxCubemapSize

사용 가능한 최대 Cube Map Texture 크기입니다.

### maxFragmentUniforms

Fragment Shader에서 사용할 수 있는 최대 Uniform 수입니다.

### maxSamples

MSAA에서 사용할 수 있는 최대 Sample 수입니다.

### maxTextures

Shader에서 사용할 수 있는 최대 Texture 수입니다.

### maxTextureSize

지원되는 최대 Texture 크기입니다.

### maxVaryings

Shader에서 사용할 수 있는 최대 varying vector 수입니다.

### maxVertexTextures

Vertex Shader에서 사용할 수 있는 최대 Texture 수입니다.

### maxVertexUniforms

Vertex Shader에서 사용할 수 있는 최대 Uniform 수입니다.

### precision

현재 Renderer가 사용하는 Shader precision입니다.

```text id="renderer-precision-types"
highp
mediump
lowp
```

### reversedDepthBuffer

Reverse Depth Buffer 사용 여부입니다.

---

# Info

`renderer.info`에 들어 있는 렌더링 통계 정보입니다.

## autoReset

매 렌더링마다 통계 정보를 자동 초기화할지 결정합니다.

기본값:

```text id="renderer-info-reset"
true
```

---

## memory

GPU 관련 Object 수를 기록합니다.

```text id="renderer-memory"
geometries
→ 활성 Geometry 수

textures
→ 활성 Texture 수
```

---

## render

현재 프레임의 렌더링 정보를 제공합니다.

```text id="renderer-render-info"
frame
→ Frame ID

calls
→ Draw Call 수

triangles
→ Triangle 수

points
→ Point 수

lines
→ Line 수
```

---

## programs

Renderer가 사용 중인 `WebGLProgram` 배열입니다.

---

## reset()

`renderer.info` 통계를 초기화합니다.

```javascript id="renderer-info-reset-method"
renderer.info.reset();
```

---

# Options

`new WebGLRenderer()` 생성 시 전달할 수 있는 주요 설정입니다.

```javascript id="renderer-options-example"
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
```

## canvas

Renderer가 사용할 기존 Canvas를 전달합니다.

```javascript id="renderer-option-canvas"
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
```

기본값은 `null`입니다.

---

## context

기존 `WebGL2RenderingContext`를 직접 전달합니다.

```javascript id="renderer-option-context"
const renderer = new THREE.WebGLRenderer({
    context: gl
});
```

기본값은 `null`입니다.

---

## precision

Shader의 기본 precision을 설정합니다.

```text id="renderer-option-precision"
highp
mediump
lowp
```

기본값은 지원된다면 `highp`입니다.

---

## alpha

Canvas의 기본 Clear Alpha를 투명하게 사용할지 결정합니다.

```javascript id="renderer-option-alpha"
const renderer = new THREE.WebGLRenderer({
    alpha: true
});
```

기본값은 `false`입니다.

---

## premultipliedAlpha

색상이 premultiplied alpha를 사용한다고 가정할지 결정합니다.

기본값은 `true`입니다.

---

## antialias

기본 MSAA Anti-aliasing을 사용할지 결정합니다.

```javascript id="renderer-option-antialias"
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
```

기본값은 `false`입니다.

---

## stencil

Stencil Buffer를 생성할지 결정합니다.

기본값:

```text id="renderer-option-stencil"
false
```

---

## preserveDrawingBuffer

다음 렌더링이나 clear 전까지 Drawing Buffer를 유지할지 결정합니다.

기본값은 `false`입니다.

---

## powerPreference

사용할 GPU 성능 수준에 대한 힌트를 제공합니다.

```text id="renderer-option-power"
default
low-power
high-performance
```

기본값은 `default`입니다.

---

## failIfMajorPerformanceCaveat

낮은 GPU 성능이 감지될 경우 Renderer 생성을 실패시킬지 결정합니다.

기본값은 `false`입니다.

---

## depth

Depth Buffer를 사용할지 결정합니다.

기본값은 `true`입니다.

---

## logarithmicDepthBuffer

매우 큰 거리 범위를 가진 Scene에서 깊이 정밀도를 개선하기 위한 Logarithmic Depth Buffer 사용 여부입니다.

기본값은 `false`입니다.

성능 저하가 발생할 수 있습니다.

---

## reversedDepthBuffer

Reverse Depth Buffer를 사용할지 결정합니다.

`EXT_clip_control` Extension이 필요합니다.

기본값은 `false`입니다.

---

## outputBufferType

최종 출력 Buffer의 타입을 설정합니다.

기본값:

```text id="renderer-output-type"
UnsignedByteType
```

HDR + Tone Mapping + Post-processing에서는 `HalfFloatType`을 사용할 수 있습니다.

---

# ShadowMap

`renderer.shadowMap` 관련 설정입니다.

## enabled

Shadow Map 사용 여부입니다.

```javascript id="renderer-shadow-enabled"
renderer.shadowMap.enabled = true;
```

기본값은 `false`입니다.

---

## autoUpdate

Shadow Map을 자동으로 업데이트할지 결정합니다.

기본값은 `true`입니다.

정적인 Shadow라면 비활성화해서 성능을 줄일 수 있습니다.

---

## needsUpdate

다음 `render()`에서 Shadow Map을 강제로 다시 계산하도록 합니다.

```javascript id="renderer-shadow-update"
renderer.shadowMap.needsUpdate = true;
```

기본값은 `false`입니다.

---

## type

Shadow Map 방식을 설정합니다.

```text id="renderer-shadow-types"
BasicShadowMap
PCFShadowMap
VSMShadowMap
```

기본값은:

```text id="renderer-shadow-default"
PCFShadowMap
```

입니다.

---

# 전체 예제

```javascript id="renderer-full"
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);

document.body.appendChild(
    renderer.domElement
);

camera.position.z = 5;

renderer.setAnimationLoop(() => {
    renderer.render(
        scene,
        camera
    );
});
```

전체 흐름:

```text id="renderer-full-flow"
Scene 생성
↓
Camera 생성
↓
WebGLRenderer 생성
↓
setSize()
↓
setPixelRatio()
↓
Canvas 추가
↓
render()
↓
화면 출력
```

---

# 핵심 정리

`WebGLRenderer`는:

```text id="renderer-final"
Three.js의 Scene과 Camera를 받아
WebGL을 이용해 실제 Canvas에 렌더링하는 클래스
```

입니다.

가장 자주 사용하는 기능은:

```text id="renderer-important"
new WebGLRenderer()
→ Renderer 생성

setSize()
→ Canvas / 렌더링 크기 설정

setPixelRatio()
→ 고해상도 화면 대응

render()
→ Scene 렌더링

setAnimationLoop()
→ 반복 렌더링

setRenderTarget()
→ 다른 Texture 등에 렌더링

renderer.info
→ 렌더링 성능 확인

dispose()
→ GPU 리소스 정리
```

입니다.

특히 크기 관련 메서드는 구분해서 기억하면 좋습니다.

```text id="renderer-size-summary"
getSize()
→ 논리 픽셀 크기

getDrawingBufferSize()
→ 실제 물리 픽셀 크기
→ Pixel Ratio 반영

setSize()
→ Renderer 크기 설정

setPixelRatio()
→ Pixel Ratio 설정

setDrawingBufferSize()
→ Size + Pixel Ratio 직접 지정
```

## 관련 문서

* [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html)
* [Scene](https://threejs.org/docs/pages/Scene.html)
* [Camera](https://threejs.org/docs/pages/Camera.html)
* [WebGLRenderTarget](https://threejs.org/docs/pages/WebGLRenderTarget.html)
* [Vector2](https://threejs.org/docs/pages/Vector2.html)
* [Vector4](https://threejs.org/docs/pages/Vector4.html)
* [WebXRManager](https://threejs.org/docs/pages/WebXRManager.html)
* [WebGLRenderer Source](https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js)
