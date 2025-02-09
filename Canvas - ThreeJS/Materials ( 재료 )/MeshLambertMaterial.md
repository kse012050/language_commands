# MeshLambertMaterial ( 메시램버트소재 )
반사 하이라이트가 없는 비반사 표면을 위한 소재입니다.  
  
이 소재는 반사율을 계산하기 위해 비물리 기반 ``램버트`` 모델을 사용합니다. 이는 일부 표면(예: 처리되지 않은 목재 또는 돌)을 잘 시뮬레이션할 수 있지만 반사 하이라이트가 있는 반짝이는 표면(예: 광택 처리된 목재)은 시뮬레이션할 수 없습니다. MeshLambertMaterial은 조각당 셰이딩을 사용합니다.  
  
반사율 및 조명 모델의 단순성으로 인해 ``MeshPhongMaterial``, ``MeshStandardMaterial`` 또는 ``MeshPhysicalMaterial``보다 이 소재를 사용할 때 성능이 더 뛰어나지만 그래픽 정확도는 다소 떨어집니다.

[예시 적용화면 공식 사이트 있음!! 꼭 확인!!](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial) 

## Constructor
### MeshLambertMaterial( parameters : Object )
``parameters`` - (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(``Material``에서 상속된 모든 속성 포함)을 여기에 전달할 수 있습니다.  
  
예외는 속성 ``color``로, 16진수 문자열로 전달할 수 있으며 기본적으로 ``0xffffff``(흰색)입니다. ``Color.set``( color )은 내부적으로 호출됩니다.

## Properties
일반적인 속성은 기본 ``Material`` 클래스를 참조하세요.

## .alphaMap : Texture
알파 맵은 표면 전체의 불투명도를 제어하는 ​​회색조 텍스처입니다(검정: 완전 투명, 흰색: 완전 불투명). 기본값은 null입니다.  
  
텍스처의 색상만 사용되며 알파 채널이 있는 경우 무시합니다. RGB 및 RGBA 텍스처의 경우 ``WebGL`` 렌더러는 DXT 압축 및 비압축 RGB 565 형식에서 녹색에 제공되는 추가 정밀도로 인해 이 텍스처를 샘플링할 때 녹색 채널을 사용합니다. 휘도 전용 및 휘도/알파 텍스처도 예상대로 작동합니다.  
  
### .aoMap : Texture
이 텍스처의 빨간색 채널은 앰비언트 오클루전 맵으로 사용됩니다. 기본값은 null입니다. aoMap에는 두 번째 UV 세트가 필요합니다.

### .aoMapIntensity : Float
앰비언트 오클루전 효과의 강도입니다. 범위는 0-1이며, ``0``은 앰비언트 오클루전을 비활성화합니다. 강도가 ``1``이고 ``.aoMap`` 빨간색 채널도 ``1``인 경우 주변광은 표면에서 완전히 가려집니다. 기본값은 ``1``입니다.

### .bumpMap : Texture
범프 맵을 만드는 텍스처입니다. 흑백 값은 조명과 관련하여 인식된 깊이에 매핑됩니다. 범프는 실제로 객체의 지오메트리에는 영향을 미치지 않고 조명에만 영향을 미칩니다. 일반 맵이 정의된 경우 무시됩니다.

### .bumpScale : Float
범프 맵이 재료에 미치는 영향입니다. 일반적인 범위는 0-1입니다. 기본값은 1입니다.

### .color : Color
기본적으로 흰색(0xffffff)으로 설정된 재료의 ``색상``입니다.

### .combine : Integer
표면 색상의 결과를 환경 맵과 결합하는 방법(있는 경우).  
  
옵션은 ``THREE.MultiplyOperation``(기본값), ``THREE.MixOperation``, ``THREE.AddOperation``입니다. mix를 선택한 경우 ``.reflectivity``를 사용하여 두 색상을 혼합합니다.  

### .displacementMap : 텍스처
변위 맵은 메시의 정점 위치에 영향을 미칩니다. 재료의 빛과 그늘에만 영향을 미치는 다른 맵과 달리 변위된 정점은 그림자를 드리우고, 다른 객체를 차단하고, 그렇지 않으면 실제 지오메트리로 작용할 수 있습니다. 변위 텍스처는 각 픽셀의 값(가장 높은 흰색)이 메시의 정점에 매핑되고 위치를 변경하는 이미지입니다.

### .displacementScale : Float
변위 맵이 메시에 미치는 영향(검정색은 변위 없음, 흰색은 최대 변위)입니다. 변위 맵을 설정하지 않으면 이 값은 적용되지 않습니다. 기본값은 1입니다.

### .displacementBias : Float
메시의 정점에서 변위 맵 값의 오프셋입니다. 변위 맵을 설정하지 않으면 이 값은 적용되지 않습니다. 기본값은 ``0``입니다.

### .emissive : Color
재료의 방출(밝은) 색상, 기본적으로 다른 조명의 영향을 받지 않는 단색입니다. 기본값은 검정색입니다.

### .emissiveMap : Texture
방출(광선) 맵을 설정합니다. 기본값은 null입니다. 방출 맵 색상은 방출 색상과 방출 강도에 의해 조절됩니다. 방출 맵이 있는 경우 방출 색상을 검정색이 아닌 다른 색상으로 설정해야 합니다.

### .emissiveIntensity : Float
방출 조명의 강도입니다. 방출 색상을 조절합니다. 기본값은 1입니다.

### .envMap : Texture
환경 맵입니다. 기본값은 null입니다.

### .envMapRotation : Euler
라디안 단위의 환경 맵 회전입니다. 기본값은 ``(0,0,0)``입니다.

### .flatShading : Boolean
소재가 플랫 셰이딩으로 렌더링되는지 정의합니다. 기본값은 false입니다.

### .fog : Boolean
소재가 안개의 영향을 받는지 여부입니다. 기본값은 ``true``입니다.

### .lightMap : Texture
조명 맵입니다. 기본값은 null입니다. lightMap에는 두 번째 UV 세트가 필요합니다.

### .lightMapIntensity : Float
베이크된 빛의 강도. 기본값은 ``1``입니다.

### .map : Texture
색상 맵입니다. 알파 채널을 포함할 수 있으며, 일반적으로 ``.transparent`` 또는 ``.alphaTest``와 결합됩니다. 기본값은 null입니다.

### .normalMap : Texture
법선 맵을 만드는 텍스처입니다. RGB 값은 각 픽셀 조각의 표면 법선에 영향을 미치고 색상이 켜지는 방식을 변경합니다. 법선 맵은 표면의 실제 모양을 변경하지 않고 조명만 변경합니다. 재료에 왼손 규칙을 사용하여 작성된 법선 맵이 있는 경우 normalScale의 y 구성 요소를 부정하여 다른 손잡이를 보정해야 합니다.

### .normalMapType : Integer
법선 맵의 유형입니다.  
  
옵션은 ``THREE.TangentSpaceNormalMap``(기본값) 및 ``THREE.ObjectSpaceNormalMap``입니다.

### .normalScale : Vector2
법선 맵이 재료에 미치는 영향의 정도입니다. 일반적인 범위는 0-1입니다. 기본값은 (1,1)로 설정된 ``Vector2``입니다.

### .reflectivity : Float
환경 맵이 표면에 미치는 영향입니다. ``.combine``도 참조하세요.

### .refractionRatio : Float
공기의 굴절률(IOR)(약 1)을 재료의 굴절률로 나눈 값입니다. 환경 매핑 모드 ``THREE.CubeRefractionMapping`` 및 ``THREE.EquirectangularRefractionMapping``과 함께 사용됩니다. 굴절률은 ``1``을 초과해서는 안 됩니다. 기본값은`` 0.98``입니다.

### .specularMap : Texture
재료에서 사용하는 반사 맵입니다. 기본값은 null입니다.

### .wireframe : Boolean
지오메트리를 와이어프레임으로 렌더링합니다. 기본값은 ``false``입니다(즉, 평평한 다각형으로 렌더링).

### .wireframeLinecap : String
선 끝의 모양을 정의합니다. 가능한 값은 "butt", "round" 및 "square"입니다. 기본값은 'round'입니다.    
  
이는 2D Canvas lineCap 속성에 해당하며 WebGL 렌더러에서 무시됩니다.

### .wireframeLinejoin : String
선 조인트 모양을 정의합니다. 가능한 값은 "round", "bevel" 및 "miter"입니다. 기본값은 'round'입니다.  
  
이는 ``2D Canvas lineJoin`` 속성에 해당하며 ``WebGL`` 렌더러에서 무시됩니다.

### .wireframeLinewidth : Float
와이어프레임 두께를 제어합니다. 기본값은 ``1``입니다.  
  
대부분 플랫폼에서 ``WebGL`` 렌더러가 있는 ``OpenGL Core Profile``의 제한으로 인해 설정된 값에 관계없이 선 너비는 항상 ``1``입니다.

## Methods
일반적인 메서드에 대해서는 기본 ``Material`` 클래스를 참조하세요.

## Source
[src/materials/MeshLambertMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshLambertMaterial.js)

[내용출처 threejs 공식 사이트 MeshLambertMaterial ( 메시 램버트 소재 )](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial)