# GLTFLoader
glTF ``2.0 리소스용`` 로더.  
  
[glTF](https://www.khronos.org/gltf/)(GL 전송 형식)는 3D 콘텐츠의 효율적인 전달 및 로딩을 위한 [오픈 포맷 사양](https://github.com/KhronosGroup/glTF/tree/main/specification/2.0)입니다. 자산은 JSON(.gltf) 또는 바이너리(.glb) 형식으로 제공될 수 있습니다. 외부 파일은 텍스처(.jpg, .png)와 추가 바이너리 데이터(.bin)를 저장합니다. glTF 자산은 메시, 소재, 텍스처, 스킨, 스켈레톤, 모프 타겟, 애니메이션, 조명 및/또는 카메라를 포함하여 하나 이상의 장면을 전달할 수 있습니다.  
  
GLTFLoader는 가능한 한 [ImageBitmapLoader](https://threejs.org/docs/#api/en/loaders/ImageBitmapLoader)를 사용합니다. 이미지 비트맵은 더 이상 참조되지 않을 때 자동으로 GC 수집되지 않으며 폐기 프로세스 중에 특별한 처리가 필요하다는 점에 유의하세요. 자세한 내용은 [객체 폐기 방법](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects) 가이드를 참조하세요.

## Import
GLTFLoader는 애드온이며 명시적으로 가져와야 합니다. [설치/애드온](https://threejs.org/docs/#manual/en/introduction/Installation)을 참조하세요.
~~~js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
~~~

## Extensions
GLTFLoader는 다음 [glTF 2.0 확장](https://github.com/KhronosGroup/glTF/tree/main/extensions)을 지원합니다.
- KHR_draco_mesh_compression
- KHR_materials_clearcoat
- KHR_materials_dispersion
- KHR_materials_ior
- KHR_materials_specular
- KHR_materials_transmission
- KHR_materials_iridescence
- KHR_materials_unlit
- KHR_materials_volume
- KHR_mesh_quantization
- KHR_lights_punctual
- KHR_texture_basisu
- KHR_texture_transform
- EXT_texture_webp
- EXT_meshopt_compression
- EXT_mesh_gpu_instancing  

다음 glTF 2.0 확장은 외부 사용자 플러그인에서 지원합니다.

- [KHR_materials_variants1](https://github.com/takahirox/three-gltf-extensions)
- [MSFT_texture_dds](https://github.com/takahirox/three-gltf-extensions)

1애플리케이션에서 로드한 후 확장을 수동으로 처리할 수도 있습니다. [Three.js glTF 머티리얼 변형 예](https://threejs.org/examples/#webgl_loader_gltf_variants)를 참조하세요.

## Code Example
~~~js
// 로더 인스턴스화
const loader = new GLTFLoader();

// 선택 사항: 압축 메시 데이터를 디코딩하기 위한 DRACOLoader 인스턴스 제공
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
loader.setDRACOLoader( dracoLoader );

// glTF 리소스 로드
loader.load(
    // 리소스 URL
    'models/gltf/duck/duck.gltf',
    // 리소스가 로드될 때 호출
    function ( gltf ) {
        scene.add( gltf.scene );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
    },
    // 로딩이 진행되는 동안 호출
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // 로딩에 오류가 있을 때 호출
    function ( error ) {
        console.log( '오류가 발생했습니다' );
    }
);
~~~

## Examples
[webgl_loader_gltf](https://threejs.org/examples/#webgl_loader_gltf)

## Textures
텍스처를 외부에서 로드할 때(예: [TextureLoader](https://threejs.org/docs/#api/en/loaders/TextureLoader) 사용) glTF 모델에 적용할 때 텍스처를 구성해야 합니다. glTF 모델에서 참조된 텍스처는 GLTFLoader에 의해 자동으로 구성됩니다.

~~~js
// 텍스처가 색상 정보(.map, .emissiveMap, .specularMap, ...)에 사용되는 경우 색상 공간을 설정합니다.
texture.colorSpace = THREE.SRGBColorSpace;

// UV는 (0, 0)이 텍스처의 왼쪽 위 모서리에 해당한다는 규칙을 사용합니다.
texture.flipY = false;
~~~

## Custom extensions ( 사용자 정의 확장 )
알 수 없는 확장의 메타데이터는 Object3D, Scene 및 Material 인스턴스에서 “.userData.gltfExtensions”로 보존되거나 응답 “gltf” 객체에 첨부됩니다. 예:
~~~js
loader.load('foo.gltf', function ( gltf ) {
	const scene = gltf.scene;
	const mesh = scene.children[ 3 ];
	const fooExtension = mesh.userData.gltfExtensions.EXT_foo;
	gltf.parser.getDependency( 'bufferView', fooExtension.bufferView )
		.then( function ( fooBuffer ) { ... } );
});
~~~

## Constructor
### GLTFLoader( manager : LoadingManager )
[manager](https://threejs.org/docs/index.html#api/en/loaders/managers/LoadingManager) — 로더가 사용할 [loadingManager](https://threejs.org/docs/index.html#api/en/loaders/managers/LoadingManager)입니다. 기본값은 [THREE.DefaultLoadingManager](https://threejs.org/docs/index.html#api/en/loaders/managers/LoadingManager)입니다.  
  
새 GLTFLoader를 만듭니다.

## Properties
일반적인 속성에 대해서는 기본 [Loader](https://threejs.org/docs/index.html#api/en/loaders/Loader) 클래스를 참조하세요.

## Methods
일반적인 메서드는 기본 [Loader](https://threejs.org/docs/index.html#api/en/loaders/Loader) 클래스를 참조하세요.

### .load(https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader.load) ( url : String, onLoad : Function, onProgress : Function, onError : Function ) : undefined
``url`` — .gltf 또는 .glb 파일의 경로/URL이 포함된 문자열입니다.  
``onLoad`` — 로딩이 성공적으로 완료된 후 호출되는 함수입니다. 이 함수는 ``parse``에서 반환된 로드된 JSON 응답을 수신합니다.  
``onProgress`` — (선택 사항) 로딩이 진행되는 동안 호출되는 함수입니다. 인수는 .``total`` 및 .``loaded`` 바이트를 포함하는 XMLHttpRequest 인스턴스입니다. 서버가 Content-Length 헤더를 설정하지 않으면 .``total``은 0이 됩니다.  
``onError`` — (선택 사항) 로딩 중에 오류가 발생하면 호출되는 함수입니다. 이 함수는 인수로 error를 수신합니다.  
  
url에서 로딩을 시작하고 파싱된 응답 콘텐츠로 콜백 함수를 호출합니다.

### .setDRACOLoader(dracoLoader: DRACOLoader): this
[dracoLoader](https://threejs.org/docs/index.html#examples/en/loaders/DRACOLoader) — KHR_draco_mesh_compression 확장으로 압축된 에셋을 디코딩하는 데 사용되는 DRACOLoader의 인스턴스입니다.  
  
Draco와 디코더에 대한 자세한 내용은 이 [readme](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/libs/draco#readme)를 참조하세요.

### .setKTX2Loader(ktx2Loader: KTX2Loader): this
[ktx2Loader](https://threejs.org/docs/#examples/en/loaders/KTX2Loader) — KTX2 압축 텍스처를 로드하는 데 사용되는 KTX2Loader의 인스턴스입니다.  

### .parse(data: ArrayBuffer, path: String, onLoad: Function, onError: Function): undefined
``data`` — ``ArrayBuffer``, ``JSON`` 문자열 또는 객체로 구문 분석할 glTF 에셋입니다.  
``path`` — 텍스처 및 .bin 데이터 파일과 같은 후속 glTF 리소스를 찾을 기본 경로입니다.  
``onLoad`` — 구문 분석이 완료되면 호출되는 함수입니다.  
``onError`` — (선택 사항) 파싱 중에 오류가 발생하면 호출되는 함수입니다. 이 함수는 인수로 오류를 받습니다.  
  
glTF 기반 ``ArrayBuffer``, ``JSON`` 문자열 또는 객체를 파싱하고 완료되면 ``onLoad`` 콜백을 실행합니다. ``onLoad``에 대한 인수는 로드된 부분인 .[scene](https://threejs.org/docs/index.html#api/en/objects/Group), .``scenes``, .``cameras``, .``animations`` 및 .``asset을`` 포함하는 ``객체``입니다.

## Source
[examples/jsm/loaders/GLTFLoader.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/loaders/GLTFLoader.js)

[내용출처 threejs 공식 사이트 GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader.load)