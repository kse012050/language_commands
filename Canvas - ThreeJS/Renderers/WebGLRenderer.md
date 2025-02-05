# WebGLRenderer
WebGL 렌더러는 WebGL을 사용하여 아름답게 만든 장면을 표시합니다.

## Constructor
WebGLRenderer( 매개변수 : 객체 )  
  
parameters - (선택 사항) 렌더러의 동작을 정의하는 속성이 있는 객체. 생성자는 또한 매개변수를 전혀 허용하지 않습니다. 모든 경우에 매개변수가 없는 경우 건전한 기본값을 가정합니다. 다음은 유효한 매개변수입니다.  
  
canvas - 렌더러가 출력을 그리는 캔버스입니다. 이는 아래의 domElement 속성에 해당합니다. 여기에 전달되지 않으면 새 캔버스 요소가 생성됩니다.  
context - 렌더러를 기존 RenderingContext에 연결하는 데 사용할 수 있습니다. 기본값은 null입니다.  
precision - 셰이더 정밀도입니다. ``"highp"``, ``"mediump"`` 또는 ``"lowp"``일 수 있습니다. 장치에서 지원하는 경우 기본값은 ``"highp"``입니다.  
alpha - 기본 지우기 알파 값을 제어합니다. ``true``로 설정하면 값은 ``0``입니다. 그렇지 않으면 ``1``입니다. 기본값은 ``false``입니다.  
premultipliedAlpha - 렌더러가 색상에 미리 곱해진 알파가 있다고 가정할지 여부입니다. 기본값은 ``true``입니다.  
antialias - 앤티앨리어싱을 수행할지 여부입니다. 기본값은 ``false``입니다.  
stencil - 그리기 버퍼에 최소 8비트의 스텐실 버퍼가 있는지 여부입니다. 기본값은 ``false``입니다.  
preserveDrawingBuffer - 수동으로 지우거나 덮어쓸 때까지 버퍼를 보존할지 여부입니다. 기본값은 false입니다.  
powerPreference - 이 WebGL 컨텍스트에 적합한 GPU 구성을 나타내는 힌트를 사용자 에이전트에 제공합니다. ``"고성능(high-performance)"``, ``"저전력(low-power)"`` 또는 ``"기본값(default)"``일 수 있습니다. 기본값은 "기본값"입니다. 자세한 내용은 WebGL 사양을 참조하세요.  
failIfMajorPerformanceCaveat - 성능이 낮을 때 렌더러 생성이 실패할지 여부입니다. 기본값은 ``false``입니다. 자세한 내용은 WebGL 사양을 참조하세요.  
depth - 그리기 버퍼에 최소 16비트의 깊이 버퍼가 있는지 여부입니다. 기본값은 ``true``입니다.  
logarithmicDepthBuffer - 대수 깊이 버퍼를 사용할지 여부입니다. 단일 장면에서 배율에 큰 차이가 있는 경우 이 기능을 사용해야 할 수 있습니다. 이 설정은 gl_FragDepth를 사용하는데, 사용 가능한 경우 Early Fragment Test 최적화를 비활성화하고 성능이 저하될 수 있습니다. 기본값은 false입니다. camera/logarithmicdepthbuffer 예를 참조하세요. reverseDepthBuffer - 역방향 깊이 버퍼를 사용할지 여부입니다. EXT_clip_control 확장이 필요합니다. 이것은 로그 깊이 버퍼보다 ​​더 빠르고 정확한 버전입니다. 기본값은 ``false``입니다.

## Properties
### .autoClear : Boolean
렌더러가 프레임을 렌더링하기 전에 자동으로 출력을 지워야 하는지 여부를 정의합니다. 기본값은 true입니다.

### .autoClearColor : Boolean
autoClear가 true이면 렌더러가 색상 버퍼를 지워야 하는지 여부를 정의합니다. 기본값은 true입니다.

### .autoClearDepth : Boolean
autoClear가 true이면 렌더러가 깊이 버퍼를 지워야 하는지 여부를 정의합니다. 기본값은 true입니다.

### .autoClearStencil : Boolean
autoClear가 true이면 렌더러가 스텐실 버퍼를 지워야 하는지 여부를 정의합니다. 기본값은 true입니다.

### .capabilities : Object
현재 RenderingContext의 기능에 대한 세부 정보가 포함된 객체입니다.
- floatFragmentTextures: 컨텍스트가 OES_texture_float 확장을 지원하는지 여부입니다.
- floatVertexTextures: floatFragmentTextures와 vertexTextures가 모두 true이면 true입니다.
- getMaxAnisotropy(): 사용 가능한 최대 이방성을 반환합니다.
- getMaxPrecision(): 정점 및 조각 셰이더에 사용 가능한 최대 정밀도를 반환합니다.
- isWebGL2: 사용 중인 컨텍스트가 WebGL2RenderingContext 객체이면 true입니다.
- logarithmicDepthBuffer: 생성자에서 logarithmicDepthBuffer가 true로 설정된 경우 true입니다.
- maxAttributes: gl.MAX_VERTEX_ATTRIBS의 값입니다.
- maxCubemapSize: gl.MAX_CUBE_MAP_TEXTURE_SIZE의 값입니다. 셰이더가 사용할 수 있는 큐브 맵 텍스처의 최대 높이 * 너비.
- maxFragmentUniforms: gl.MAX_FRAGMENT_UNIFORM_VECTORS의 값. 프래그먼트 셰이더가 사용할 수 있는 유니폼의 수.
- maxSamples: gl.MAX_SAMPLES의 값. 멀티샘플 앤티앨리어싱(MSAA) 컨텍스트에서 최대 샘플 수.
- maxTextureSize: gl.MAX_TEXTURE_SIZE의 값. 셰이더가 사용할 수 있는 텍스처의 최대 높이 * 너비.
- maxTextures: gl.MAX_TEXTURE_IMAGE_UNITS의 값. 셰이더가 사용할 수 있는 텍스처의 최대 수.
- maxVaryings: gl.MAX_VARYING_VECTORS의 값. 셰이더가 사용할 수 있는 가변 벡터의 수.
- maxVertexTextures: gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS의 값입니다. 정점 셰이더에서 사용할 수 있는 텍스처 수입니다.
- maxVertexUniforms: gl.MAX_VERTEX_UNIFORM_VECTORS의 값입니다. 정점 셰이더에서 사용할 수 있는 최대 유니폼 수입니다.
- precision: 현재 렌더러에서 사용 중인 셰이더 정밀도입니다.
- reverseDepthBuffer: 생성자에서 reverseDepthBuffer가 true로 설정되었고 컨텍스트가 EXT_clip_control 확장을 지원하는 경우 true입니다.
- vertexTextures: .maxVertexTextures: 정수가 0보다 큰 경우 true입니다(즉, 정점 텍스처를 사용할 수 있음).

### .clippingPlanes : 배열
세계 공간에서 THREE.Plane 객체로 지정된 사용자 정의 클리핑 평면. 이러한 평면은 전역적으로 적용됩니다. 평면과의 점곱이 음수인 공간의 점은 잘립니다. 기본값은 []입니다.

### .debug : 객체
- checkShaderErrors: true인 경우 컴파일 및 연결 프로세스 중에 머티리얼 셰이더 프로그램이 오류를 검사하는지 여부를 정의합니다. 성능 향상을 위해 프로덕션에서 이 검사를 비활성화하는 것이 유용할 수 있습니다. 개발 중에 이러한 검사를 활성화하는 것이 좋습니다. 셰이더가 컴파일 및 연결되지 않으면 작동하지 않고 연결된 머티리얼이 렌더링되지 않습니다. 기본값은 true입니다.
- onShaderError( gl, program, glVertexShader, glFragmentShader ): 사용자 정의 오류 보고에 사용할 수 있는 콜백 함수입니다. 콜백은 WebGL 컨텍스트, WebGLProgram 인스턴스, 정점 및 조각 셰이더를 나타내는 WebGLShader의 두 인스턴스를 수신합니다. 사용자 정의 함수를 할당하면 기본 오류 보고가 비활성화됩니다. 기본값은 null입니다.

### .domElement : DOMElement
렌더러가 출력을 그리는 캔버스입니다.  
이것은 생성자에서 렌더러에 의해 자동으로 생성됩니다(아직 제공되지 않은 경우). 다음과 같이 페이지에 추가하기만 하면 됩니다.
~~~js
document.body.appendChild( renderer.domElement );
~~~

### .extensions : Object
#### - get( extensionName : String ): 
다양한 확장이 지원되는지 확인하고, 사용 가능한 경우 확장의 세부 정보가 포함된 객체를 반환합니다. 이 메서드는 다음 확장을 확인할 수 있습니다.

    - WEBGL_depth_texture
    - EXT_texture_filter_anisotropic
    - WEBGL_compressed_texture_s3tc
    - WEBGL_compressed_texture_pvrtc
    - WEBGL_compressed_texture_etc1
    - 자세히 보기: 확장 목록
#### - has( extensionName : String ): 
확장이 지원되는 경우 true입니다.

### .info : Object
그래픽 보드 메모리와 렌더링 프로세스에 대한 일련의 통계 정보가 있는 객체입니다. 디버깅이나 호기심을 유발하는 데 유용합니다. 객체에는 다음 필드가 포함됩니다.

- memory:
    - geometries
    - textures
- render:
    - calls
    - triangles
    - points
    - lines
    - frame
- programs  

기본적으로 이러한 데이터는 각 렌더 호출에서 재설정되지만 프레임당 여러 렌더 패스가 있는 경우(예: 사후 처리를 사용하는 경우) 사용자 지정 패턴으로 재설정하는 것이 좋습니다. 먼저 autoReset을 false로 설정합니다.

~~~js
renderer.info.autoReset = false; 
~~~
단일 프레임의 렌더링이 끝나면 reset()을 호출합니다.
~~~js
renderer.info.reset();
~~~

### .localClippingEnabled : Boolean
렌더러가 객체 수준 클리핑 평면을 존중하는지 여부를 정의합니다. 기본값은 false입니다.

### .properties : Object
렌더러에서 다양한 하위 객체 속성을 추적하는 데 내부적으로 사용됩니다.

### .renderLists : WebGLRenderLists
장면 객체 렌더링 순서를 처리하는 데 내부적으로 사용됩니다.

### .shadowMap : WebGLShadowMap
사용하는 경우 그림자 맵에 대한 참조를 포함합니다.
- enabled: 설정한 경우 장면에서 그림자 맵을 사용합니다. 기본값은 false입니다.
- autoUpdate: 장면에서 그림자에 대한 자동 업데이트를 활성화합니다. 기본값은 true입니다.
동적 조명/그림자가 필요하지 않은 경우 렌더러가 인스턴스화될 때 이를 false로 설정할 수 있습니다.
- needsUpdate: true로 설정하면 장면의 그림자 맵이 다음 렌더링 호출에서 업데이트됩니다. 기본값은 false입니다.
그림자 맵에 대한 자동 업데이트를 비활성화한 경우(shadowMap.autoUpdate = false) 이를 true로 설정한 다음 렌더링 호출을 수행하여 장면의 그림자를 업데이트해야 합니다.
- type: 그림자 맵 유형(필터링되지 않음, 백분율 닫기 필터링, 셰이더에서 이중 선형 필터링이 있는 백분율 닫기 필터링)을 정의합니다. 옵션은 다음과 같습니다.
    - THREE.BasicShadowMap
    - THREE.PCFShadowMap(기본값)
    - THREE.PCFSoftShadowMap
    - THREE.VSMShadowMap  

자세한 내용은 렌더러 상수를 참조하세요.

### .sortObjects : Boolean
렌더러가 객체를 정렬해야 하는지 여부를 정의합니다. 기본값은 true입니다.  
  
참고: 정렬은 어느 정도 투명도가 있는 객체를 제대로 렌더링하는 데 사용됩니다. 정의에 따르면 객체 정렬이 모든 경우에 작동하지 않을 수 있습니다. 애플리케이션의 요구 사항에 따라 정렬을 끄고 투명도 렌더링을 처리하기 위해 다른 방법을 사용해야 할 수 있습니다(예: 각 객체의 렌더링 순서를 수동으로 결정).

### .state : Object
WebGLRenderer.context 상태의 다양한 속성을 설정하는 함수가 포함되어 있습니다.

### .toneMapping : Constant
기본값은 NoToneMapping입니다. 다른 선택 사항은 렌더러 상수를 참조하세요.

### .toneMappingExposure : 숫자
톤 매핑의 노출 수준입니다. 기본값은 1입니다.

### .transmissionResolutionScale : 숫자
투과 렌더 대상의 정규화된 해상도 스케일로, 뷰포트 크기의 백분율로 측정합니다. 이 값을 낮추면 MeshPhysicalMaterial 전송 성능이 크게 향상될 수 있습니다. 기본값은 1입니다.

### .xr : WebXRManager
렌더러의 WebXR 관련 인터페이스에 대한 액세스를 제공합니다.

## Methods
### .clear(color: Boolean, depth: Boolean, stencil: Boolean): undefined
렌더러에 색상, 깊이 또는 스텐실 그리기 버퍼를 지우라고 알립니다. 이 메서드는 색상 버퍼를 현재 지우기 색상 값으로 초기화합니다.  
인수는 기본적으로 true입니다.

### .clearColor(): undefined
색상 버퍼를 지웁니다. .clear(true, false, false)를 호출하는 것과 같습니다.

### .clearDepth(): undefined
깊이 버퍼를 지웁니다. .clear(false, true, false)를 호출하는 것과 같습니다.

### .clearStencil(): undefined
스텐실 버퍼를 지웁니다. .clear(false, false, true)를 호출하는 것과 같습니다.

### .compile(scene: Object3D, camera: Camera, targetScene: Scene): Set
카메라와 함께 장면의 모든 머티리얼을 컴파일합니다. 이것은 첫 번째 렌더링 전에 셰이더를 사전 컴파일하는 데 유용합니다. 기존 장면에 3D 객체를 추가하려면 세 번째 선택적 매개변수를 사용하여 대상 장면을 적용합니다.  
이 메서드를 호출하기 전에 (대상) 장면의 조명과 환경을 구성해야 합니다.

### .compileAsync ( scene : Object3D, camera : Camera, targetScene : Scene ) : Promise
.compile()의 비동기 버전입니다. 이 메서드는 셰이더 컴파일로 인해 불필요한 중단 없이 주어진 장면을 렌더링할 수 있는 시점을 확인하는 Promise를 반환합니다.  
  
이 메서드는 KHR_parallel_shader_compile WebGL 확장을 사용합니다.

### .copyFramebufferToTexture ( texture : FramebufferTexture, position : Vector2, level : Number ) : undefined
현재 WebGLFramebuffer에서 2D 텍스처로 픽셀을 복사합니다. WebGLRenderingContext.copyTexImage2D에 액세스할 수 있도록 합니다.

### .copyTextureToTexture ( srcTexture : Texture, dstTexture : Texture, srcRegion : Box2 | srcRegion : Box3, dstPosition : Vector2 | dstPosition : Vector3, srcLevel : Number, dstLevel : Number ) : undefined
지정된 위치부터 대상 텍스처의 경계 'srcRegion'에 있는 텍스처의 픽셀을 복사합니다. 2D 텍스처, 3D 텍스처 또는 두 가지의 혼합을 3D 텍스처의 레이어 간 복사를 위한 소스 및 대상 텍스처 인수로 사용할 수 있습니다.  
렌더 대상의 depthTexture 및 texture 속성도 지원됩니다.  
렌더 대상 텍스처를 srcTexture 및 dstTexture로 사용하는 경우 두 렌더 대상이 모두 초기화되었는지 확인해야 합니다(예: .initRenderTarget()을 통해).

### .dispose () : undefined
이 인스턴스에서 할당한 GPU 관련 리소스를 해제합니다. 앱에서 이 인스턴스가 더 이상 사용되지 않을 때마다 이 메서드를 호출합니다.

### .forceContextLoss() : undefined
WebGL 컨텍스트 손실을 시뮬레이션합니다. 여기에는 WEBGL_lose_context 확장에 대한 지원이 필요합니다.

### .forceContextRestore() : undefined
WebGL 컨텍스트 복원을 시뮬레이션합니다. 여기에는 WEBGL_lose_context 확장에 대한 지원이 필요합니다.

### .getClearAlpha() : Float
현재 지우기 알파가 있는 float를 반환합니다. 범위는 0~1입니다.

### .getClearColor(target: Color) : Color
현재 지우기 색상이 있는 THREE.Color 인스턴스를 반환합니다.

### .getContext() : WebGL2RenderingContext
현재 WebGL 컨텍스트를 반환합니다.

### .getContextAttributes() : WebGLContextAttributes
WebGL 컨텍스트가 생성될 때 설정된 속성을 설명하는 객체를 반환합니다.

### .getActiveCubeFace() : Integer
현재 활성 큐브 면을 반환합니다.

### .getActiveMipmapLevel() : Integer
현재 활성 밉맵 레벨을 반환합니다.

### .getRenderTarget() : RenderTarget
현재 RenderTarget이 있으면 반환합니다. 그렇지 않으면 null을 반환합니다.

### .getCurrentViewport(target: Vector4): Vector4
target — 결과가 이 Vector4에 복사됩니다.  
  
현재 뷰포트를 반환합니다.

### .getDrawingBufferSize(target: Vector2): Vector2
target — 결과가 이 Vector2에 복사됩니다.  
  
렌더러의 그리기 버퍼의 너비와 높이를 픽셀 단위로 반환합니다.

### .getPixelRatio() : number
사용 중인 현재 장치 픽셀 비율을 반환합니다.

### .getScissor(target: Vector4): Vector4
대상 — 결과가 이 Vector4에 복사됩니다.  
  
가위 영역을 반환합니다.

### .getScissorTest(): Boolean
가위 테스트가 활성화되어 있으면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.

### .getSize(target: Vector2): Vector2
대상 — 결과가 이 Vector2에 복사됩니다.  
  
렌더러의 출력 캔버스의 너비와 높이를 픽셀 단위로 반환합니다.

### .getViewport(target: Vector4): Vector4
대상 — 결과가 이 Vector4에 복사됩니다.  
  
뷰포트를 반환합니다.

### .initTexture(texture: Texture): undefined
지정된 텍스처를 초기화합니다. 첫 번째 렌더링까지 기다리는 대신 텍스처를 미리 로드하는 데 유용합니다(디코딩 및 GPU 업로드 오버헤드로 인해 눈에 띄는 지연이 발생할 수 있음).

### .initRenderTarget(target: WebGLRenderTarget): undefined
지정된 WebGLRenderTarget 메모리를 초기화합니다. 렌더링 대상을 초기화하는 데 유용하므로 렌더링되기 전에 
.copyTextureToTexture를 사용하여 데이터를 복사할 수 있습니다.

### .resetGLState(target: undefined)
GL 상태를 기본값으로 재설정합니다. WebGL 컨텍스트가 손실되면 내부적으로 호출됩니다.

### .readRenderTargetPixels(renderTarget: WebGLRenderTarget, x: Float, y: Float, width: Float, height: Float, buffer: TypedArray, activeCubeFaceIndex: Integer): undefined
buffer - Uint8Array는 모든 경우에 지원되는 유일한 대상 유형이며, 다른 유형은 renderTarget이며 플랫폼에 따라 다릅니다. 자세한 내용은 WebGL 사양을 참조하세요.  
  
renderTarget에서 전달한 버퍼로 픽셀 데이터를 읽습니다. 이는 WebGLRenderingContext.readPixels()를 둘러싼 래퍼입니다.  
  
WebGLCubeRenderTarget을 읽으려면 선택적 매개변수 activeCubeFaceIndex를 사용하여 어떤 면을 읽어야 하는지 결정합니다.

### .readRenderTargetPixelsAsync ( renderTarget : WebGLRenderTarget, x : Float, y : Float, width : Float, height : Float, buffer : TypedArray, activeCubeFaceIndex : Integer ) : Promise
.readRenderTargetPixels의 비동기, 비차단 버전입니다. 버퍼 데이터를 사용할 준비가 되면 반환된 약속이 해결됩니다.  
  
대화형 / 큐브 / gpu 예제를 참조하세요.  

### .render(scene: Object3D, camera: Camera): undefined
카메라를 사용하여 장면이나 다른 유형의 객체를 렌더링합니다.  
렌더링은 .setRenderTarget을 호출하여 이전에 지정한 renderTarget 집합이나 평소처럼 캔버스에 수행됩니다.  
기본적으로 렌더링 버퍼는 렌더링 전에 지워지지만 autoClear 속성을 false로 설정하여 이를 방지할 수 있습니다. 특정 버퍼만 지워지는 것을 방지하려면 autoClearColor, autoClearStencil 또는 autoClearDepth 속성을 false로 설정할 수 있습니다. 하나 이상의 버퍼를 강제로 지우려면 .clear를 호출합니다.

### .resetState(): undefined
내부 WebGL 상태를 재설정하는 데 사용할 수 있습니다. 이 메서드는 주로 여러 WebGL 라이브러리에서 단일 WebGL 컨텍스트를 공유하는 애플리케이션과 관련이 있습니다.

### .setAnimationLoop(callback: Function): undefined
callback — 이 함수는 사용 가능한 모든 프레임에서 호출됩니다. null이 전달되면 이미 진행 중인 애니메이션이 중지됩니다.  
  
requestAnimationFrame 대신 사용할 수 있는 내장 함수입니다. WebXR 프로젝트의 경우 이 함수를 사용해야 합니다.

### .setClearAlpha(alpha: Float): undefined
지우기 알파를 설정합니다. 유효한 입력은 0.0~1.0 사이의 float입니다.

### .setClearColor(color: Color, alpha: Float): undefined
지우기 색상과 불투명도를 설정합니다.

### .setPixelRatio(value: number): undefined
장치 픽셀 비율을 설정합니다. 이는 일반적으로 HiDPI 장치에서 출력 캔버스가 흐릿해지는 것을 방지하기 위해 사용됩니다.

### .setRenderTarget(renderTarget: WebGLRenderTarget, activeCubeFace: Integer, activeMipmapLevel: Integer): undefined
renderTarget -- 활성화해야 하는 renderTarget입니다. null이 주어지면 캔버스가 대신 활성 렌더 대상으로 설정됩니다.  
activeCubeFace -- WebGLCubeRenderTarget의 활성 큐브 면(PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5)을 지정합니다.   WebGLArrayRenderTarget 또는 WebGL3DRenderTarget을 전달하는 경우 렌더링할 z 레이어를 나타냅니다(선택 사항).  
activeMipmapLevel -- 활성 밉맵 레벨을 지정합니다(선택 사항).  
  
이 메서드는 활성 렌더 타겟을 설정합니다.  
  
### .setScissor(x: 정수, y: 정수, 너비: 정수, 높이: 정수) : undefined
### .setScissor(벡터: 벡터4) : undefined
가위 영역의 x, y, 너비 및 높이 매개변수입니다.  
선택적으로 영역의 매개변수를 지정하는 4개 구성 요소 벡터입니다.  
  
가위 영역을 (x, y)에서 (x + 너비, y + 높이)로 설정합니다.  
(x, y)는 가위 영역의 왼쪽 아래 모서리입니다.

### .setScissorTest ( boolean : Boolean ) : undefined
가위 테스트를 활성화하거나 비활성화합니다. 이 기능이 활성화되면 정의된 가위 영역 내의 픽셀만 추가 렌더러 작업의 영향을 받습니다.

### .setOpaqueSort ( method : Function ) : undefined
WebGLRenderLists에 대한 사용자 정의 불투명 정렬 함수를 설정합니다. 기본 painterSortStable 함수를 사용하려면 null을 전달합니다.

### .setTransparentSort ( method : Function ) : undefined
WebGLRenderLists에 대한 사용자 정의 투명 정렬 함수를 설정합니다. 기본 reversePainterSortStable 함수를 사용하려면 null을 전달합니다.

### .setSize(width: Integer, height: Integer, updateStyle: Boolean): undefined
출력 캔버스 크기를 장치 픽셀 비율을 고려하여 (width, height)로 조정하고, 뷰포트를 해당 크기에 맞게 설정합니다(0, 0부터 시작). updateStyle을 false로 설정하면 출력 캔버스의 스타일이 변경되지 않습니다.

### .setViewport(x: Integer, y: Integer, width: Integer, height: Integer): undefined
### .setViewport(vector: Vector4): undefined
뷰포트의 x, y, width, height 매개변수입니다.  
선택적으로 뷰포트의 매개변수를 지정하는 4개 구성 요소 벡터입니다.  
  
(x, y)에서 (x + width, y + height)까지 렌더링할 뷰포트를 설정합니다.  
(x, y)는 영역의 왼쪽 아래 모서리입니다.

[내용출처 threejs 공식 사이트](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)