# MeshBasicMaterial ( 메시기본소재 )
간단한 음영 처리된(플랫 또는 와이어프레임) 방식으로 기하학을 그리기 위한 소재.  
  
이 소재는 빛의 영향을 받지 않습니다.  
  
[예시 적용화면 공식 사이트 있음!! 꼭 확인!!](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) 

## Constructor
### MeshBasicMaterial( parameters : Object )
parameters - (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(Material에서 상속된 모든 속성 포함)을 여기에 전달할 수 있습니다.  
  
예외는 속성 ``color``로, 16진수 문자열로 전달할 수 있으며 기본적으로 ``0xffffff``(흰색)입니다. ``Color.set``( color )은 내부적으로 호출됩니다.

## Properties
일반적인 속성은 기본 ``Material`` 클래스를 참조하세요.

### .alphaMap : Texture
알파 맵은 표면 전체의 불투명도를 제어하는 ​​회색조 텍스처입니다(검정: 완전 투명, 흰색: 완전 불투명). 기본값은 null입니다.  
  
텍스처의 색상만 사용되며 알파 채널이 있는 경우 무시합니다. RGB 및 RGBA 텍스처의 경우 WebGL 렌더러는 DXT 압축 및 비압축 RGB 565 형식에서 녹색에 제공되는 추가 정밀도로 인해 이 텍스처를 샘플링할 때 녹색 채널을 사용합니다. 휘도 전용 및 휘도/알파 텍스처도 예상대로 작동합니다.

### .aoMap : Texture
이 텍스처의 빨간색 채널은 앰비언트 오클루전 맵으로 사용됩니다. 기본값은 null입니다. aoMap에는 두 번째 UV 세트가 필요합니다.

### .aoMapIntensity : Float
앰비언트 오클루전 효과의 강도입니다. 범위는 0-1이며, 0은 앰비언트 오클루전을 비활성화합니다. 강도가 ``1``이고 ``.aoMap`` 빨간색 채널도 ``1``인 경우 주변광은 표면에서 완전히 가려집니다. 기본값은 ``1``입니다.

### .color : Color
기본적으로 흰색(0xffffff)으로 설정된 재료의 색상입니다.

### .combine : Integer
표면의 색상 결과를 환경 맵과 결합하는 방법(있는 경우).  
  
옵션은 ``THREE.MultiplyOperation``(기본값), ``THREE.MixOperation``, ``THREE.AddOperation``입니다. mix를 선택하면 .``reflectivity``를 사용하여 두 색상을 혼합합니다.

### .envMap : Texture
환경 맵입니다. 기본값은 null입니다.

### .envMapRotation : Euler
라디안 단위의 환경 맵 회전입니다. 기본값은 ``(0,0,0)``입니다.

### .fog : Boolean
재료가 안개의 영향을 받는지 여부입니다. 기본값은 ``true``입니다.

### .lightMap : Texture
조명 맵입니다. 기본값은 null입니다. lightMap에는 두 번째 UV 세트가 필요합니다.

### .lightMapIntensity : Float
베이크된 빛의 강도. 기본값은 ``1``입니다.

### .map : Texture
색상 맵입니다. 알파 채널을 포함할 수 있으며, 일반적으로 .transparent 또는 .alphaTest와 결합됩니다. 기본값은 null입니다.

### .reflectivity : Float
환경 맵이 표면에 미치는 영향입니다. ``.combine``도 참조하세요. 기본값은 ``1``이고 유효한 범위는 ``0``(반사 없음)과 1(완전 반사) 사이입니다.

### .refractionRatio : Float
공기의 굴절률(IOR)(약 1)을 재료의 굴절률로 나눈 값입니다. 환경 매핑 모드 ``THREE.CubeRefractionMapping`` 및 ``THREE.EquirectangularRefractionMapping``과 함께 사용됩니다. 굴절률은 ``1``을 초과해서는 안 됩니다. 기본값은 ``0.98``입니다.

### .specularMap : Texture
소재에서 사용하는 반사 맵입니다. 기본값은 null입니다.

### .wireframe : Boolean
지오메트리를 와이어프레임으로 렌더링합니다. 기본값은 ``false``입니다(즉, 평평한 다각형으로 렌더링).

### .wireframeLinecap : String
선 끝의 모양을 정의합니다. 가능한 값은 "butt", "round" 및 "square"입니다. 기본값은 'round'입니다.  
  
이는 ``2D 캔버스 lineCap`` 속성에 해당하며 ``WebGL`` 렌더러에서 무시됩니다.

### .wireframeLinejoin : String
선 조인트의 모양을 정의합니다. 가능한 값은 "round", "bevel" 및 "miter"입니다. 기본값은 'round'입니다.  
  
이는 ``2D 캔버스 lineJoin`` 속성에 해당하며 ``WebGL`` 렌더러에서 무시됩니다.

### .wireframeLinewidth : Float
와이어프레임 두께를 제어합니다. 기본값은 ``1``입니다.  
  
대부분 플랫폼에서 ``WebGL`` 렌더러를 사용하는 ``OpenGL Core Profile``의 제한으로 인해 선폭은 설정된 값과 관계없이 항상 ``1``입니다.

## Methods
일반적인 방법은 기본 Material 클래스를 참조하세요.

## Source
[src/materials/MeshBasicMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshBasicMaterial.js)

[내용출처 threejs 공식 사이트 MeshBasicMaterial (Mesh 기본 소재)](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial)