# BufferGeometry (버퍼 지오메트리)
메쉬, 라인, 포인트 지오메트리를 표현하는 클래스입니다.  
정점 위치, 인덱스, 노멀, 색상, UV, 커스텀 속성 등을 버퍼 형태로 관리하여 GPU로 데이터를 효율적으로 전달합니다.

## Code Example

~~~js
const geometry = new THREE.BufferGeometry();

// 정사각형 생성 (각 삼각형마다 정점이 따로 필요)
const vertices = new Float32Array( [
    -1.0, -1.0,  1.0, // v0
     1.0, -1.0,  1.0, // v1
     1.0,  1.0,  1.0, // v2
     1.0,  1.0,  1.0, // v3
    -1.0,  1.0,  1.0, // v4
    -1.0, -1.0,  1.0  // v5
] );

// itemSize = 3 (x, y, z)
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );
~~~

## Constructor
### BufferGeometry()
새로운 BufferGeometry를 생성합니다.

## Properties

### .attributes : Object.<string, (BufferAttribute|InterleavedBufferAttribute)>
속성 이름을 key로, 버퍼 속성을 value로 가지는 객체입니다.  
직접 접근하지 말고 `setAttribute()` / `getAttribute()` 사용 권장.

---

### .boundingBox : Box3
지오메트리의 바운딩 박스입니다.  
`computeBoundingBox()`로 계산합니다.  
기본값은 `null`.

---

### .boundingSphere : Sphere
지오메트리의 바운딩 구입니다.  
`computeBoundingSphere()`로 계산합니다.  
기본값은 `null`.

---

### .drawRange : Object
렌더링할 지오메트리 범위입니다.  
직접 설정하지 말고 `setDrawRange()` 사용.

---

### .groups : Array.<Object>
지오메트리를 여러 그룹으로 나눠 각각 다른 머티리얼로 렌더링할 수 있습니다.  
`addGroup()` / `clearGroups()` 사용 권장.

주의:
- 모든 정점/인덱스는 반드시 하나의 그룹에만 속해야 함
- 중복/누락 금지

---

### .id : number (readonly)
지오메트리 ID

---

### .index : BufferAttribute
인덱스 버퍼입니다.  
정점을 재사용하여 삼각형을 구성합니다.  
없으면 3개씩 묶어 삼각형으로 처리합니다.  
기본값은 `null`.

---

### .indirect : BufferAttribute
compute shader로 생성된 간접 드로우 버퍼입니다.  
WebGPU 전용.  
기본값은 `null`.

---

### .indirectOffset : number | Array.<number>
간접 드로우 버퍼 시작 오프셋(byte 단위)  
WebGPU 전용.  
기본값은 `0`.

---

### .isBufferGeometry : boolean (readonly)
타입 확인용 플래그  
기본값은 `true`

---

### .morphAttributes : Object
모프 타겟 데이터 저장 객체

주의:
렌더 이후 변경 불가 → 변경 시 dispose 후 재생성 필요

---

### .morphTargetsRelative : boolean
모프 타겟을 상대값으로 사용할지 여부  
기본값은 `false`

---

### .name : string
지오메트리 이름

---

### .userData : Object
사용자 정의 데이터 저장 객체  
함수 참조는 넣지 않는 것이 권장됨

---

### .uuid : string (readonly)
UUID

## Methods

### .addGroup( start : number, count : number, materialIndex : number )
그룹 추가

- start: 시작 인덱스/정점  
- count: 포함 개수  
- materialIndex: 사용할 머티리얼 인덱스 (기본값 0)

---

### .applyMatrix4( matrix : Matrix4 ) : BufferGeometry
4x4 변환 행렬 적용

---

### .applyQuaternion( q : Quaternion ) : BufferGeometry
Quaternion 회전 적용

---

### .center() : BufferGeometry
지오메트리를 중심으로 이동

---

### .clearGroups()
모든 그룹 제거

---

### .clone() : BufferGeometry
복사본 생성

---

### .computeBoundingBox()
바운딩 박스 계산

---

### .computeBoundingSphere()
바운딩 구 계산  
(엔진에서 필요 시 자동 계산됨)

---

### .computeTangents()
탄젠트 계산 (조건 필요: index, position, normal, uv)

---

### .computeVertexNormals()
정점 노멀 계산

---

### .copy( source : BufferGeometry ) : BufferGeometry
다른 지오메트리 값 복사

---

### .deleteAttribute( name : string ) : BufferGeometry
속성 제거

---

### .dispose()
GPU 리소스 해제

---

### .getAttribute( name : string )
속성 반환

---

### .getIndex()
인덱스 반환

---

### .getIndirect()
indirect 반환

---

### .hasAttribute( name : string )
속성 존재 여부 확인

---

### .lookAt( vector : Vector3 ) : BufferGeometry
특정 방향을 바라보도록 회전 (1회성)

---

### .normalizeNormals()
노멀 벡터 정규화

---

### .rotateX( angle : number ) : BufferGeometry
X축 회전

---

### .rotateY( angle : number ) : BufferGeometry
Y축 회전

---

### .rotateZ( angle : number ) : BufferGeometry
Z축 회전

---

### .scale( x : number, y : number, z : number ) : BufferGeometry
스케일 적용

---

### .setAttribute( name : string, attribute ) : BufferGeometry
속성 설정

---

### .setDrawRange( start : number, count : number )
렌더링 범위 설정

---

### .setFromPoints( points : Array.<Vector2|Vector3> ) : BufferGeometry
포인트 배열로 geometry 생성

---

### .setIndex( index ) : BufferGeometry
인덱스 설정

---

### .setIndirect( indirect, indirectOffset ) : BufferGeometry
간접 드로우 설정 (WebGPU)

---

### .toJSON() : Object
JSON 직렬화

---

### .toNonIndexed() : BufferGeometry
비인덱스 지오메트리로 변환

---

### .translate( x : number, y : number, z : number ) : BufferGeometry
이동 변환

## Source
[src/core/BufferGeometry.js](https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js)

[내용출처 threejs 공식 사이트 BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry)