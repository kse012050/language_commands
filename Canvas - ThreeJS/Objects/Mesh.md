# Mesh
삼각형 ``폴리곤 메시`` 기반 객체를 나타내는 클래스입니다. ``SkinnedMesh``와 같은 다른 클래스의 기반 역할도 합니다.

## Code Example
~~~js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
~~~

## Constructor
### Mesh( geometry : BufferGeometry, material : Material )
geometry — (선택 사항) ``BufferGeometry``의 인스턴스입니다. 기본값은 새 ``BufferGeometry``입니다.  
material — (선택 사항) 단일 또는 ``Material`` 배열입니다. 기본값은 새 ``MeshBasicMaterial``입니다.

## Properties
일반적인 속성은 기본 ``Object3D`` 클래스를 참조하세요.  

### .geometry : BufferGeometry
``BufferGeometry``(또는 파생 클래스)의 인스턴스로, 객체의 구조를 정의합니다.

### .isMesh : Boolean
지정된 객체가 Mesh 유형인지 확인하는 읽기 전용 플래그입니다.

### .material : Material
Material 기본 클래스에서 파생된 ``material``의 인스턴스 또는 객체의 모양을 정의하는 materials 배열입니다. 기본값은 ``MeshBasicMaterial``입니다.

### .morphTargetInfluences : Array
일반적으로 0~1 사이의 가중치 배열로, 적용되는 모프 양을 지정합니다. 기본적으로 정의되지 않지만 ``updateMorphTargets``에 의해 빈 배열로 재설정됩니다.

### .morphTargetDictionary : Object
morphTarget.name 속성을 기반으로 하는 morphTargets의 사전입니다. 기본적으로 정의되지 않지만 ``updateMorphTargets``를 다시 빌드했습니다.

## Methods
일반적인 메서드는 기본 Object3D 클래스를 참조하세요.

### .getVertexPosition(index: Integer, target: Vector3): Vector3
모프 대상과 스키닝의 현재 애니메이션 상태를 고려하여 지정된 인덱스에서 정점의 로컬 공간 위치를 가져옵니다.

### .raycast(raycaster: Raycaster, intersects: Array): undefined
캐스팅된 레이와 이 메시 사이의 교차점을 가져옵니다. ``Raycaster.intersectObject``는 이 메서드를 호출하지만 결과는 정렬되지 않습니다.

### .updateMorphTargets(): undefined
개체에 영향을 미치지 않도록 morphTargets를 업데이트합니다. ``morphTargetInfluences`` 및 ``morphTargetDictionary`` 속성을 재설정합니다.

## Source
[src/objects/Mesh.js](https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js)

[내용출처 threejs 공식 사이트 Mesh](https://threejs.org/docs/#api/en/objects/Mesh)