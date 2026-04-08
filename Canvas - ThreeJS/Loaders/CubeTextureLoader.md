# MeshMatcapMaterial (메시 매트캡 소재)
MatCap(Lit Sphere) 텍스처를 기반으로 정의되는 머티리얼입니다.  
이 텍스처에는 색상과 음영 정보가 함께 포함되어 있습니다.

MeshMatcapMaterial은 조명에 반응하지 않습니다.  
MatCap 이미지에 이미 조명 정보가 베이크되어 있기 때문입니다.  

그림자는 다음과 같이 동작합니다:
- 다른 오브젝트에 그림자를 투사할 수 있음
- 자기 자신에 대한 그림자는 생성하지 않음
- 그림자를 받지 않음

## Constructor
### MeshMatcapMaterial( parameters : Object )
parameters - (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(상속된 속성 포함)을 전달할 수 있습니다.  
색상 값은 `Color.set`에서 허용하는 모든 형식으로 전달할 수 있습니다.

## Properties
일반적인 속성은 기본 `Material` 클래스를 참조하세요.

### .alphaMap : Texture
알파 맵은 표면 전체의 불투명도를 제어하는 회색조 텍스처입니다(검정: 완전 투명, 흰색: 완전 불투명).  

텍스처의 색상만 사용되며 알파 채널은 무시됩니다.  
RGB/RGBA 텍스처의 경우 녹색 채널을 사용하여 샘플링됩니다.  

기본값은 `null`입니다.

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
실제 지오메트리를 변경하여 그림자 및 충돌에 영향을 줍니다.  
기본값은 `null`입니다.

### .displacementScale : number
디스플레이스먼트 맵이 메시에 미치는 영향 정도입니다.  
(검정: 영향 없음, 흰색: 최대 영향)  
기본값은 `0`입니다.

### .flatShading : boolean
플랫 셰이딩으로 렌더링할지 여부입니다.  
기본값은 `false`입니다.

### .fog : boolean
안개의 영향을 받을지 여부입니다.  
기본값은 `true`입니다.

### .isMeshMatcapMaterial : boolean (readonly)
해당 객체가 MeshMatcapMaterial인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

### .map : Texture
색상 맵입니다.  
알파 채널을 포함할 수 있으며 `transparent` 또는 `alphaTest`와 함께 사용됩니다.  
기본값은 `null`입니다.

### .matcap : Texture
MatCap 텍스처입니다.  
이 텍스처가 실제 재질의 색상과 음영을 결정합니다.  
기본값은 `null`입니다.

### .normalMap : Texture
노멀 맵을 생성하는 텍스처입니다.  
RGB 값이 각 픽셀의 법선 방향에 영향을 주어 조명 표현을 변경합니다.  
실제 지오메트리는 변경하지 않습니다.  

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

### .wireframeLinewidth : number
와이어프레임 두께를 설정합니다.  

`SVGRenderer`에서만 사용 가능합니다.  
기본값은 `1`입니다.

## Methods
일반적인 메서드는 기본 Material 클래스를 참조하세요.

## Source
[src/materials/MeshMatcapMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshMatcapMaterial.js)

[내용출처 threejs 공식 사이트 MeshMatcapMaterial](https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial)