# MeshToonMaterial (메시 툰 소재)
툰 셰이딩(toon shading)을 구현하는 머티리얼입니다.

## Constructor
### MeshToonMaterial( parameters : Object )
parameters - (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(상속된 속성 포함)을 전달할 수 있습니다.  
색상 값은 `Color.set`에서 허용하는 모든 형식으로 전달할 수 있습니다.

## Properties
일반적인 속성은 기본 `Material` 클래스를 참조하세요.

### .alphaMap : Texture
알파 맵은 표면 전체의 불투명도를 제어하는 회색조 텍스처입니다(검정: 완전 투명, 흰색: 완전 불투명).  
텍스처의 색상만 사용되며 알파 채널은 무시됩니다.  

RGB/RGBA 텍스처의 경우, 렌더러는 정밀도가 높은 녹색 채널을 사용합니다.  
기본값은 `null`입니다.

### .aoMap : Texture
이 텍스처의 빨간색 채널은 앰비언트 오클루전 맵으로 사용됩니다.  
두 번째 UV 세트가 필요합니다.  
기본값은 `null`입니다.

### .aoMapIntensity : number
앰비언트 오클루전 효과의 강도입니다. 범위는 `[0,1]`입니다.  
`0`이면 비활성화되고, `1`이면 최대 효과가 적용됩니다.  
기본값은 `1`입니다.

### .bumpMap : Texture
범프 맵을 생성하는 텍스처입니다.  
흑백 값은 빛에 대한 상대적인 깊이를 표현합니다.  
지오메트리는 변경하지 않고 조명에만 영향을 줍니다.  

`normalMap`이 설정되어 있으면 무시됩니다.  
기본값은 `null`입니다.

### .bumpScale : number
범프 맵이 재질에 미치는 영향 정도입니다.  
일반적인 범위는 `[0,1]`입니다.  
기본값은 `1`입니다.

### .color : Color
재질의 색상입니다.  
기본값은 `(1,1,1)`입니다.

### .displacementBias : number
디스플레이스먼트 맵 값에 더해지는 오프셋입니다.  
디스플레이스먼트 맵이 없으면 적용되지 않습니다.  
기본값은 `0`입니다.

### .displacementMap : Texture
정점 위치를 변경하는 디스플레이스먼트 맵입니다.  
실제 지오메트리를 변경하여 그림자 생성 및 충돌에 영향을 줍니다.  
기본값은 `null`입니다.

### .displacementScale : number
디스플레이스먼트 맵이 메시에 미치는 영향 정도입니다.  
(검정: 영향 없음, 흰색: 최대 영향)  
기본값은 `0`입니다.

### .emissive : Color
자체 발광 색상입니다.  
다른 조명의 영향을 받지 않는 색입니다.  
기본값은 `(0,0,0)`입니다.

### .emissiveIntensity : number
발광 강도입니다.  
기본값은 `1`입니다.

### .emissiveMap : Texture
발광 맵입니다.  
emissive 색상과 강도에 의해 조절됩니다.  
사용 시 emissive 색상을 검정이 아닌 값으로 설정해야 합니다.  
기본값은 `null`입니다.

### .fog : boolean
안개의 영향을 받을지 여부입니다.  
기본값은 `true`입니다.

### .gradientMap : Texture
툰 셰이딩에 사용되는 그라디언트 맵입니다.  
사용 시 `Texture.minFilter`와 `Texture.magFilter`를 `NearestFilter`로 설정해야 합니다.  
기본값은 `null`입니다.

### .isMeshToonMaterial : boolean (readonly)
해당 객체가 MeshToonMaterial인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

### .lightMap : Texture
라이트 맵입니다.  
두 번째 UV 세트가 필요합니다.  
기본값은 `null`입니다.

### .lightMapIntensity : number
베이크된 조명의 강도입니다.  
기본값은 `1`입니다.

### .map : Texture
색상 맵입니다.  
알파 채널을 포함할 수 있으며 `transparent` 또는 `alphaTest`와 함께 사용됩니다.  
기본값은 `null`입니다.

### .normalMap : Texture
노멀 맵을 생성하는 텍스처입니다.  
표면의 법선 방향을 변경하여 조명 효과를 바꿉니다.  
실제 형태는 변경하지 않습니다.  

좌표계가 다를 경우 `normalScale.y`를 반전해야 할 수 있습니다.  
기본값은 `null`입니다.

### .normalMapType : TangentSpaceNormalMap | ObjectSpaceNormalMap
노멀 맵의 타입입니다.  
기본값은 `TangentSpaceNormalMap`입니다.

### .normalScale : Vector2
노멀 맵의 영향 정도입니다.  
일반 범위는 `[0,1]`입니다.  
기본값은 `(1,1)`입니다.

### .wireframe : boolean
지오메트리를 와이어프레임으로 렌더링합니다.  
기본값은 `false`입니다.

### .wireframeLinecap : 'round' | 'bevel' | 'miter'
와이어프레임 선 끝의 모양을 정의합니다.  
SVGRenderer에서만 사용 가능합니다.  
기본값은 `'round'`입니다.

### .wireframeLinejoin : 'round' | 'bevel' | 'miter'
와이어프레임 선 연결부의 모양을 정의합니다.  
SVGRenderer에서만 사용 가능합니다.  
기본값은 `'round'`입니다.

### .wireframeLinewidth : number
와이어프레임 두께를 설정합니다.  
SVGRenderer에서만 사용 가능합니다.  
기본값은 `1`입니다.

## Methods
일반적인 메서드는 기본 Material 클래스를 참조하세요.

## Source
[src/materials/MeshToonMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshToonMaterial.js)

[내용출처 threejs 공식 사이트 MeshToonMaterial](https://threejs.org/docs/#api/en/materials/MeshToonMaterial)