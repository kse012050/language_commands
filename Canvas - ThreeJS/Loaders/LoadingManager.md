# LoadingManager (로딩 매니저)

로딩된 데이터와 아직 로딩 중인 데이터를 관리하고 추적하는 클래스입니다.
기본적으로 전역 인스턴스가 하나 생성되어 로더들이 별도로 지정하지 않아도 이를 사용합니다.

일반적인 경우 기본 인스턴스로 충분하지만, 객체와 텍스처 각각에 대해 별도의 로딩 진행 바를 표시하는 등 로딩을 분리해야 하는 상황에서는 개별 매니저를 생성하는 것이 유용합니다.

## Code Example

```javascript
const manager = new THREE.LoadingManager();
manager.onLoad = () => console.log( 'Loading complete!' );

const loader1 = new OBJLoader( manager );
const loader2 = new ColladaLoader( manager );
```

## Constructor

### new LoadingManager( onLoad : function, onProgress : function, onError : function )

새로운 로딩 매니저를 생성합니다.

**onLoad**: 모든 항목 로딩이 완료되었을 때 실행됩니다.
**onProgress**: 개별 항목이 로딩될 때마다 실행됩니다.
**onError**: 오류 발생 시 실행됩니다.

## Properties

### .abortController : AbortController

이 매니저를 사용하는 로더에서 진행 중인 요청을 중단할 때 사용됩니다.

### .onError : function | undefined

오류 발생 시 실행됩니다.
기본값은 undefined 입니다.

### .onLoad : function | undefined

모든 항목 로딩 완료 시 실행됩니다.
기본값은 undefined 입니다.

### .onProgress : function | undefined

개별 항목 로딩 시 실행됩니다.
기본값은 undefined 입니다.

### .onStart : function | undefined

항목 로딩이 시작될 때 실행됩니다.
기본값은 undefined 입니다.

## Methods

### .abort() : LoadingManager

진행 중인 로딩 요청을 중단합니다.
이 기능은 로더가 Loader#abort를 구현하고, 브라우저가 AbortSignal.any()를 지원해야 동작합니다.

반환값: 현재 LoadingManager 인스턴스.

---

### .addHandler( regex : string, loader : Loader ) : LoadingManager

정규식을 기반으로 특정 파일을 처리할 로더를 등록합니다.
텍스처 로더를 커스터마이징할 때 주로 사용됩니다.

```javascript
// TGA 텍스처를 위한 핸들러 추가
manager.addHandler( /\.tga$/i, new TGALoader() );
```

**regex**: 정규식
**loader**: 해당 파일을 처리할 로더

반환값: 현재 LoadingManager 인스턴스.

---

### .getHandler( file : string ) : Loader

주어진 파일 경로에 대해 등록된 로더를 반환합니다.

**file**: 파일 경로

반환값: 등록된 로더 (없으면 null)

---

### .itemEnd( url : string )

로더가 항목 로딩을 완료했을 때 호출해야 합니다.

**url**: 로딩된 항목의 URL

---

### .itemError( url : string )

로더에서 오류가 발생했을 때 호출해야 합니다.

**url**: 오류가 발생한 항목의 URL

---

### .itemStart( url : string )

로더가 항목 로딩을 시작할 때 호출해야 합니다.

**url**: 로딩할 URL

---

### .removeHandler( regex : string ) : LoadingManager

지정한 정규식에 해당하는 로더를 제거합니다.

**regex**: 정규식

반환값: 현재 LoadingManager 인스턴스.

---

### .resolveURL( url : string ) : string

URL Modifier가 설정되어 있다면 이를 적용해 URL을 변환하고 반환합니다.
설정되어 있지 않다면 원래 URL을 그대로 반환합니다.

**url**: 로딩할 URL

반환값: 변환된 URL

---

### .setURLModifier( transform : function ) : LoadingManager

리소스 요청 전에 URL을 변환하는 콜백을 설정합니다.
ZIP 파일, 드래그 앤 드롭, Data URI 등 다양한 로딩 방식에 활용할 수 있습니다.

```javascript
const blobs = {
    'fish.gltf': blob1,
    'diffuse.png': blob2,
    'normal.png': blob3
};

const manager = new THREE.LoadingManager();
const objectURLs = [];

// URL 변환 설정
manager.setURLModifier( ( url ) => {
    url = URL.createObjectURL( blobs[ url ] );
    objectURLs.push( url );
    return url;
});

const loader = new GLTFLoader( manager );
loader.load( 'fish.gltf', (gltf) => {
    scene.add( gltf.scene );
    objectURLs.forEach( ( url ) => URL.revokeObjectURL( url ) );
});
```

**transform**: URL을 받아 변환된 URL을 반환하는 콜백

반환값: 현재 LoadingManager 인스턴스.

---

## Source
[src/loaders/LoadingManager.js](https://github.com/mrdoob/three.js/blob/master/src/loaders/LoadingManager.js)

[내용출처 threejs 공식 사이트 LoadingManager](https://threejs.org/docs/#LoadingManager)
