# MeshNormalMaterial (메시 노멀 소재)
노멀 벡터를 RGB 색상으로 매핑하여 표현하는 머티리얼입니다.

## Constructor
### MeshNormalMaterial( parameters : Object )
parameters - (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(상속된 속성 포함)을 전달할 수 있습니다.  
색상 값은 `Color.set`에서 허용하는 모든 형식으로 전달할 수 있습니다.

## Properties
일반적인 속성은 기본 `Material` 클래스를 참조하세요.

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

### .flatShading : boolean
플랫 셰이딩(flat shading)으로 렌더링할지 여부입니다.  
기본값은 `false`입니다.

### .isMeshNormalMaterial : boolean (readonly)
해당 객체가 MeshNormalMaterial인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

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

`WebGL` 및 `WebGPU`에서는 이 속성을 무시하며 항상 1픽셀로 렌더링됩니다.  
기본값은 `1`입니다.

## Methods
일반적인 메서드는 기본 Material 클래스를 참조하세요.

## Source
[src/materials/MeshNormalMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshNormalMaterial.js)

[내용출처 threejs 공식 사이트 MeshNormalMaterial](https://threejs.org/docs/#api/en/materials/MeshNormalMaterial)