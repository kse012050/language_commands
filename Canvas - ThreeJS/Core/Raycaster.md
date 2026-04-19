# Raycaster (레이캐스터)
레이캐스팅을 지원하는 클래스입니다.  
레이캐스팅은 마우스 피킹(마우스가 3D 공간에서 어떤 객체 위에 있는지 판별) 등에 사용됩니다.

## Constructor
### Raycaster( origin : Vector3, direction : Vector3, near : number, far : number )
Raycaster를 생성합니다.

- origin  
레이가 시작되는 위치 벡터입니다.

- direction  
레이의 방향을 나타내는 정규화된 벡터입니다.

- near  
이 거리보다 먼 결과만 반환됩니다. 음수는 사용할 수 없습니다.  
기본값은 `0`입니다.

- far  
이 거리보다 가까운 결과만 반환됩니다. near보다 작을 수 없습니다.  
기본값은 `Infinity`입니다.

## Properties

### .camera : Camera
스프라이트와 같은 뷰 의존 객체를 레이캐스팅할 때 사용하는 카메라입니다.  
직접 설정하거나 `setFromCamera()` 호출 시 자동 설정됩니다.  
기본값은 `null`입니다.

### .far : number
이 거리보다 가까운 결과만 반환됩니다.  
기본값은 `Infinity`입니다.

### .layers : Layers
레이캐스팅 시 특정 레이어의 객체만 검사할 수 있도록 설정합니다.

예시:
    
    raycaster.layers.set( 1 );
    object.layers.enable( 1 );

### .near : number
이 거리보다 먼 결과만 반환됩니다.  
기본값은 `0`입니다.

### .params : Object
레이캐스팅 설정 객체입니다. 구조는 다음과 같습니다:

    {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {}
    }

threshold는 교차 판정 시 정밀도를 의미하며, 단위는 월드 좌표입니다.

### .ray : Ray
레이캐스팅에 사용되는 Ray 객체입니다.

## Methods

### .intersectObject( object : Object3D, recursive : boolean, intersects : Array.<Raycaster~Intersection> ) : Array.<Raycaster~Intersection>
하나의 객체(및 선택적으로 자식 객체)에 대해 레이와의 교차를 검사합니다.  
결과는 거리 기준으로 가까운 순으로 정렬됩니다.

- object  
교차 검사 대상 3D 객체

- recursive  
true이면 자식 객체까지 검사합니다.  
기본값은 `true`

- intersects  
결과를 담을 배열  
기본값은 `[]`

- 반환값  
교차 정보 배열

주의:
- 메쉬는 레이 방향을 향한 면만 감지됩니다.
- 양면 감지를 위해 `Material.side = THREE.DoubleSide` 설정 필요

---

### .intersectObjects( objects : Array.<Object3D>, recursive : boolean, intersects : Array.<Raycaster~Intersection> ) : Array.<Raycaster~Intersection>
여러 객체에 대해 레이와의 교차를 검사합니다.

- objects  
교차 검사 대상 객체 배열

- recursive  
true이면 자식 객체까지 검사  
기본값은 `true`

- intersects  
결과를 담을 배열  
기본값은 `[]`

- 반환값  
교차 정보 배열

---

### .set( origin : Vector3, direction : Vector3 )
레이의 origin과 direction을 새 값으로 업데이트합니다.

---

### .setFromCamera( coords : Vector2, camera : Camera )
카메라와 좌표를 기반으로 레이를 설정합니다.

- coords  
정규화된 디바이스 좌표(NDC)  
x, y 값 범위는 `-1 ~ 1`

- camera  
레이를 생성할 카메라

---

### .setFromXRController( controller : WebXRController ) : Raycaster
WebXR 컨트롤러를 기반으로 레이를 설정합니다.

- controller  
위치와 방향을 가져올 컨트롤러

- 반환값  
현재 Raycaster 인스턴스

## Type Definitions

### .Intersection
레이와 객체의 교차 정보를 나타내는 객체입니다.

- distance : number  
레이 시작점에서 교차 지점까지의 거리

- distanceToRay : number  
레이와 가장 가까운 거리 (일부 객체에서만 제공)

- point : Vector3  
월드 좌표 기준 교차 지점

- face : Object  
교차된 면 정보

- faceIndex : number  
면 인덱스

- object : Object3D  
교차된 객체

- uv : Vector2  
교차 지점의 UV 좌표

- uv1 : Vector2  
두 번째 UV 좌표

- normal : Vector3  
보간된 노멀 벡터

- instanceId : number  
InstancedMesh에서 교차된 인스턴스 인덱스

## Source
[src/core/Raycaster.js](https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js)

[내용출처 threejs 공식 사이트 Raycaster](https://threejs.org/docs/#api/en/core/Raycaster)