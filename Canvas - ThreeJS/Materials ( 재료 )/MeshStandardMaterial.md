# MeshStandardMaterial ( 메시표준소재 )
Metallic-Roughness 워크플로를 사용하는 표준 물리 기반 소재.  
  
물리 기반 렌더링(PBR)은 최근 ``Unity``, ``Unreal``, ``3D Studio Max``와 같은 많은 3D 애플리케이션에서 표준이 되었습니다.  
  
이 접근 방식은 빛이 표면과 상호 작용하는 방식에 대한 근사치를 사용하는 대신 물리적으로 올바른 모델을 사용한다는 점에서 이전 접근 방식과 다릅니다. 아이디어는 특정 조명에서 보기 좋게 보이도록 소재를 조정하는 대신 모든 조명 시나리오에서 '올바르게' 반응하는 소재를 만들 수 있다는 것입니다.  
  
실제로 이 방법은 ``MeshLambertMaterial`` 또는 ``MeshPhongMaterial``보다 더 정확하고 사실적으로 보이는 결과를 제공하지만 컴퓨팅 비용이 다소 더 많이 듭니다. MeshStandardMaterial은 조각당 셰이딩을 사용합니다.  
  
최상의 결과를 얻으려면 이 소재를 사용할 때 항상 ``환경 맵``을 지정해야 합니다.  
  
PBR 개념과 PBR 소재를 설정하는 방법에 대한 비기술적인 소개를 원하시면 ``marmoset``의 사람들이 쓴 다음 기사를 확인하세요.  
- 물리 기반 렌더링의 기본 이론
- 물리 기반 렌더링과 당신도 할 수 있습니다  

three.js(및 대부분의 다른 PBR 시스템)에서 사용된 접근 방식에 대한 기술적 세부 사항은 Brent Burley가 쓴 ``Disney의 이 논문``(pdf)에서 찾을 수 있습니다.

[예시 적용화면 공식 사이트 있음!! 꼭 확인!!](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial) 

## Constructor
### MeshStandardMaterial( parameters : Object )
``parameters`` - (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(``Material``에서 상속된 모든 속성 포함)을 여기에 전달할 수 있습니다.  
  
예외는 속성 ``color``로, 16진수 문자열로 전달할 수 있으며 기본적으로 ``0xffffff``(흰색)입니다. ``Color.set``( color )은 내부적으로 호출됩니다.

## Properties
일반적인 속성은 기본 Material 클래스를 참조하세요.

### .alphaMap : Texture
알파 맵은 표면 전체의 불투명도를 제어하는 ​​회색조 텍스처입니다(검정: 완전 투명, 흰색: 완전 불투명). 기본값은 null입니다.  
  
텍스처의 색상만 사용되며 알파 채널이 있는 경우 무시합니다. RGB 및 RGBA 텍스처의 경우 ``WebGL`` 렌더러는 DXT 압축 및 비압축 RGB 565 형식에서 녹색에 제공되는 추가 정밀도로 인해 이 텍스처를 샘플링할 때 녹색 채널을 사용합니다. 휘도 전용 및 휘도/알파 텍스처도 예상대로 작동합니다.  
  
### .aoMap : Texture
이 텍스처의 빨간색 채널은 앰비언트 오클루전 맵으로 사용됩니다. 기본값은 null입니다. aoMap에는 두 번째 UV 세트가 필요합니다.

### .aoMapIntensity : Float
앰비언트 오클루전 효과의 강도입니다. 범위는 0-1이며, ``0``은 앰비언트 오클루전을 비활성화합니다. 강도가 ``1``이고 ``.aoMap`` 빨간색 채널도 ``1``인 경우 주변광은 표면에서 완전히 가려집니다. 기본값은 ``1``입니다.

### .bumpMap : Texture
범프 맵을 만드는 텍스처입니다. 흑백 값은 조명과 관련하여 인식된 깊이에 매핑됩니다. 범프는 실제로 객체의 지오메트리에는 영향을 미치지 않고 조명에만 영향을 미칩니다. 일반 맵이 정의된 경우 무시됩니다.

### .bumpScale : Float
범프 맵이 재료에 미치는 영향입니다. 일반적인 범위는 0-1입니다. 기본값은 ``1``입니다.

### .color : Color
기본적으로 흰색(0xffffff)으로 설정된 재료의 ``색상``입니다.

### .defines : Object
다음 형식의 객체:
~~~js
 { 'STANDARD': '' }; 
~~~
이는 ``WebGLRenderer``가 셰이더를 선택하는 데 사용됩니다.

### .displacementMap : Texture
변위 맵은 메시의 정점 위치에 영향을 미칩니다. 재료의 빛과 그늘에만 영향을 미치는 다른 맵과 달리 변위된 정점은 그림자를 드리우고, 다른 객체를 차단하고, 그렇지 않으면 실제 지오메트리로 작용할 수 있습니다. 변위 텍스처는 각 픽셀의 값(가장 높은 흰색)이 메시의 정점에 매핑되고 위치를 변경하는 이미지입니다.

### .displacementScale : Float
변위 맵이 메시에 미치는 영향(검정색은 변위 없음, 흰색은 최대 변위)입니다. 변위 맵을 설정하지 않으면 이 값은 적용되지 않습니다. 기본값은 ``1``입니다.

### .displacementBias : Float
메시의 정점에서 변위 맵 값의 오프셋입니다. 변위 맵을 설정하지 않으면 이 값은 적용되지 않습니다. 기본값은 ``0``입니다.

### .emissive : Color
재료의 방출(밝은) 색상, 기본적으로 다른 조명의 영향을 받지 않는 단색입니다. 기본값은 검정색입니다.

### .emissiveMap : Texture
방출(광선) 맵을 설정합니다. 기본값은 null입니다. 방출 맵 색상은 방출 색상과 방출 강도에 의해 조절됩니다. 방출 맵이 있는 경우 방출 색상을 검정색이 아닌 다른 색상으로 설정해야 합니다.

### .emissiveIntensity : Float
방출광의 강도입니다. 방출 색상을 조절합니다. 기본값은 1입니다.

### .envMap : Texture
환경 맵입니다. 물리적으로 올바른 렌더링을 보장하려면 ``PMREMGenerator``에서 사전 처리한 환경 맵만 추가해야 합니다. 기본값은 null입니다.

### .envMapRotation : Euler
라디안 단위의 환경 맵 회전입니다. 기본값은 ``(0,0,0)``입니다.

### .envMapIntensity : Float
환경 맵의 색상을 곱하여 환경 맵의 효과를 조정합니다.

### .flatShading : Boolean
소재가 플랫 셰이딩으로 렌더링되는지 정의합니다. 기본값은 false입니다.

### .fog : Boolean
소재가 안개의 영향을 받는지 여부입니다. 기본값은 ``true``입니다.

### .isMeshStandardMaterial : Boolean
지정된 객체가 MeshStandardMaterial 유형인지 확인하는 읽기 전용 플래그입니다.

### .lightMap : Texture
조명 맵입니다. 기본값은 null입니다. lightMap에는 두 번째 UV 세트가 필요합니다.

### .lightMapIntensity : Float
베이크된 조명의 강도입니다. 기본값은 ``1``입니다.

### .map : Texture
색상 맵입니다. 알파 채널을 포함할 수 있으며, 일반적으로 ``.transparent`` 또는 ``.alphaTest``와 결합됩니다. 기본값은 null입니다. 텍스처 맵 색상은 확산 ``.color``에 의해 조절됩니다.

### .metalness : Float
소재가 금속과 얼마나 비슷한지입니다. 나무나 돌과 같은 비금속 재료는 ``0.0``을 사용하고, 금속은 ``1.0``을 사용하며, 그 사이에는 아무것도 없습니다(보통). 기본값은 ``0.0``입니다. ``0.0``과 ``1.0`` 사이의 값을 사용하면 녹슨 금속처럼 보일 수 있습니다. metalnessMap도 제공된 경우 두 값이 모두 곱해집니다.

### .metalnessMap : Texture
이 텍스처의 파란색 채널은 재료의 금속성을 변경하는 데 사용됩니다.

### .normalMap : Texture
법선 맵을 만드는 텍스처입니다. RGB 값은 각 픽셀 조각의 표면 법선에 영향을 미치고 색상이 켜지는 방식을 변경합니다. 법선 맵은 표면의 실제 모양을 변경하지 않고 조명만 변경합니다. 재료에 왼손 규칙을 사용하여 작성된 법선 맵이 있는 경우 normalScale의 y 구성 요소를 부정하여 다른 손잡이를 보상해야 합니다.

### .normalMapType : Integer
법선 맵의 유형입니다.  
  
옵션은 ``THREE.TangentSpaceNormalMap``(기본값) 및 ``THREE.ObjectSpaceNormalMap``입니다.  

### .normalScale : Vector2
노멀 맵이 머티리얼에 미치는 영향의 정도입니다. 일반적인 범위는 0-1입니다. 기본값은 (1,1)로 설정된 ``Vector2``입니다.

### .roughness : Float
머티리얼이 얼마나 거칠게 보이는지입니다. ``0.0``은 매끄러운 거울 반사를 의미하고 ``1.0``은 완전히 확산됨을 의미합니다. 기본값은 ``1.0``입니다. roughnessMap도 제공된 경우 두 값이 모두 곱해집니다.

### .roughnessMap : Texture
이 텍스처의 녹색 채널은 머티리얼의 거칠기를 변경하는 데 사용됩니다.

### .wireframe : Boolean
지오메트리를 와이어프레임으로 렌더링합니다. 기본값은 ``false``(즉, 평평한 다각형으로 렌더링)입니다.

### .wireframeLinecap : String
선 끝의 모양을 정의합니다. 가능한 값은 "butt", "round" 및 "square"입니다. 기본값은 'round'입니다.  
  
이는 ``2D Canvas lineCap`` 속성에 해당하며 ``WebGL`` 렌더러에서는 무시됩니다.

### .wireframeLinejoin : String
선 조인트의 모양을 정의합니다. 가능한 값은 "round", "bevel" 및 "miter"입니다. 기본값은 'round'입니다.
  
이는 ``2D Canvas lineJoin`` 속성에 해당하며 ``WebGL`` 렌더러에서는 무시됩니다.

### .wireframeLinewidth : Float
와이어프레임 두께를 제어합니다. 기본값은 `1`입니다.  
  
대부분 플랫폼에서 ``WebGL`` 렌더러가 있는 ``OpenGL Core Profile``의 제한으로 인해 설정된 값에 관계없이 선폭은 항상 ``1``입니다.

## Methods
일반적인 메서드에 대해서는 기본 Material 클래스를 참조하세요.

## Source
[src/materials/MeshStandardMaterial.js](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)  
  
[내용출처 threejs 공식 사이트 MeshStandardMaterial ( Mesh 표준 소재 )](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)