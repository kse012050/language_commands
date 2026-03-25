# TextureLoader ( 텍스처 로더 )
텍스처 로딩 클래스입니다. 이미지는 내부적으로 ``ImageLoader``를 통해 로드됩니다.  
  
참고로, ``TextureLoader``는 r84 버전부터 진행률 이벤트 지원을 중단했습니다. 진행률 이벤트를 지원하는 ``TextureLoader``를 찾으려면 [이 스레드](https://github.com/mrdoob/three.js/issues/10439#issuecomment-293260145)를 참조하세요.

## Code Example
~~~javascript
const loader = new THREE.TextureLoader();
const texture = await loader.loadAsync( 'textures/land_ocean_ice_cloud_2048.jpg' );
const material = new THREE.MeshBasicMaterial( { map:texture } );
~~~

## Constructor
### new TextureLoader( manager : LoadingManager )
새로운 텍스처 로더를 생성합니다.  
  
__매니저__: 로딩 매니저입니다.

## Methods
### .load( url : string, onLoad : function, onProgress : onProgressCallback, onError : onErrorCallback ) : Texture
지정된 URL에서 텍스처 로딩을 시작하고, 로딩이 완료된 텍스처를 onLoad() 콜백 함수에 전달합니다. 이 메서드는 또한 머티리얼 생성에 직접 사용할 수 있는 새로운 텍스처 객체를 반환합니다. 이렇게 하면 해당 로딩 프로세스가 완료되는 즉시 텍스처가 장면에 나타날 수 있습니다.  
  
__url__:로드할 파일의 경로/URL입니다. 데이터 URI도 사용할 수 있습니다.  
__onLoad__:로딩 프로세스가 완료되면 실행됩니다.  
__onProgress__:이 로더에서는 지원되지 않습니다.  
__onError__:오류가 발생하면 실행됩니다.  
  
재정의: [Loader#load](https://threejs.org/docs/#Loader.load)
반환값: 텍스처.

## Source
[src/loaders/TextureLoader.js](https://github.com/mrdoob/three.js/blob/master/src/loaders/TextureLoader.js)  
  
[내용출처 threejs 공식 사이트 TextureLoader](https://threejs.org/docs/#TextureLoader)