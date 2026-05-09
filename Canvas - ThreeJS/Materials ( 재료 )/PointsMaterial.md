# PointsMaterial (포인트 소재)
포인트(점) 프리미티브를 렌더링하기 위한 머티리얼입니다.

머티리얼은 렌더링 가능한 3D 객체의 외형을 정의합니다.

## Code Example

~~~js
const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {

    const x = THREE.MathUtils.randFloatSpread( 2000 );
    const y = THREE.MathUtils.randFloatSpread( 2000 );
    const z = THREE.MathUtils.randFloatSpread( 2000 );

    vertices.push( x, y, z );

}

const geometry = new THREE.BufferGeometry();

geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute( vertices, 3 )
);

const material = new THREE.PointsMaterial( {
    color: 0x888888
} );

const points = new THREE.Points( geometry, material );

scene.add( points );
~~~

## Constructor
### PointsMaterial( parameters : Object )
PointsMaterial을 생성합니다.

- parameters  
머티리얼의 외형을 정의하는 객체입니다.  
상속된 Material 속성을 포함한 모든 속성을 전달할 수 있습니다.

색상 값은 `Color.set()`에서 허용하는 형식이라면 모두 사용할 수 있습니다.

## Properties

### .alphaMap : Texture
표면 전체의 투명도를 제어하는 회색조 텍스처입니다.

- 검정 → 완전 투명
- 흰색 → 완전 불투명

알파 채널이 있어도 사용되지 않으며 색상 정보만 사용됩니다.

RGB/RGBA 텍스처에서는 녹색 채널이 사용됩니다.

기본값은 `null`

---

### .color : Color
머티리얼 색상

기본값은 `(1,1,1)`

---

### .fog : boolean
안개(Fog)의 영향을 받을지 여부

기본값은 `true`

---

### .isPointsMaterial : boolean (readonly)
해당 객체가 PointsMaterial인지 확인하는 플래그

기본값은 `true`

---

### .map : Texture
색상 텍스처 맵

알파 채널 포함 가능  
보통 `transparent` 또는 `alphaTest`와 함께 사용됩니다.

텍스처 색상은 diffuse color와 곱해집니다.

기본값은 `null`

---

### .size : number
포인트 크기(px 단위)

하드웨어 제한(`gl.ALIASED_POINT_SIZE_RANGE`)에 의해 최대 크기가 제한될 수 있습니다.

기본값은 `1`

---

### .sizeAttenuation : boolean
카메라 거리(depth)에 따라 포인트 크기를 줄일지 여부

PerspectiveCamera에서만 적용됩니다.

- true → 멀수록 작아짐
- false → 항상 동일 크기

기본값은 `true`

## Methods
일반적인 메서드는 기본 Material 클래스를 참조하세요.

## Source
[src/materials/PointsMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/PointsMaterial.js)

[내용출처 threejs 공식 사이트 PointsMaterial](https://threejs.org/docs/#api/en/materials/PointsMaterial)