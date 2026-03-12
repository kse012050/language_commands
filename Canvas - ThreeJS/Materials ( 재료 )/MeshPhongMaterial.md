# MeshPhongMaterial (메시 퐁 소재)

반짝이는 표면과 정반사 하이라이트(specular highlights)를 위한 소재입니다.

이 소재는 반사율을 계산하기 위해 물리 기반이 아닌 **Blinn-Phong** 모델을 사용합니다. `MeshLambertMaterial`에서 사용하는 램버트(Lambertian) 모델과 달리, 이 소재는 니스칠한 나무와 같이 하이라이트가 있는 반짝이는 표면을 시뮬레이션할 수 있습니다. `MeshPhongMaterial`은 픽셀 단위(per-fragment) 쉐이딩을 사용합니다.

`MeshStandardMaterial`이나 `MeshPhysicalMaterial`을 사용하는 것보다 그래픽 정확도는 다소 떨어지지만, 일반적으로 **성능이 더 우수합니다.**

## Constructor

### new MeshPhongMaterial( parameters : Object )
- **parameters**: (선택 사항) 머티리얼의 모양을 정의하는 하나 이상의 속성이 있는 객체입니다. 머티리얼의 모든 속성(Material에서 상속된 모든 속성 포함)을 여기에 전달할 수 있습니다. 색상 값은 `Color.set`에서 허용하는 모든 타입의 값을 사용할 수 있습니다.

## Properties

### .alphaMap : Texture
- 표면 전체의 불투명도를 제어하는 회색조 텍스처입니다(검정: 완전 투명, 흰색: 완전 불투명). 기본값은 `null`입니다.
- 텍스처의 색상만 사용되며, 알파 채널이 있는 경우 무시됩니다. RGB 및 RGBA 텍스처의 경우, 렌더러는 DXT 압축 및 비압축 RGB 565 형식에서 녹색에 제공되는 추가 정밀도로 인해 이 텍스처를 샘플링할 때 녹색 채널을 사용합니다. 휘도 전용 및 휘도/알파 텍스처도 예상대로 작동합니다.

### .aoMap : Texture
- 이 텍스처의 빨간색 채널은 앰비언트 오클루전(Ambient Occlusion) 맵으로 사용됩니다. 기본값은 `null`입니다. `aoMap`에는 두 번째 UV 세트가 필요합니다.

### .aoMapIntensity : number
- 앰비언트 오클루전 효과의 강도입니다. 범위는 `[0, 1]`이며, `0`은 앰비언트 오클루전을 비활성화합니다. 강도가 `1`이고 `.aoMap`의 빨간색 채널도 `1`인 경우 주변광은 표면에서 완전히 가려집니다. 기본값은 `1`입니다.

### .bumpMap : Texture
- 범프 맵을 생성하기 위한 텍스처입니다. 흑백 값은 조명과 관련된 인지된 깊이에 매핑됩니다. 범프는 실제 기하학적 구조에는 영향을 주지 않고 조명에만 영향을 줍니다. 노멀 맵이 정의되어 있으면 무시됩니다. 기본값은 `null`입니다.

### .bumpScale : number
- 범프 맵이 재질에 미치는 영향력을 설정합니다. 일반적인 범위는 `[0, 1]`이며 기본값은 `1`입니다.

### .color : Color
- 재질의 색상입니다. 기본값은 `(1, 1, 1)`(흰색)입니다.

### .combine : MultiplyOperation | MixOperation | AddOperation
- 표면의 색상 결과를 환경 맵(있는 경우)과 결합하는 방법입니다. `MixOperation`으로 설정하면 `.reflectivity`를 사용하여 두 색상을 혼합합니다. 기본값은 `MultiplyOperation`입니다.

### .displacementBias : number
- 메시 정점에 대한 변위 맵 값의 오프셋입니다. 변위 맵의 스케일링된 샘플에 이 바이어스 값이 더해집니다. 변위 맵이 설정되지 않은 경우 이 값은 적용되지 않습니다. 기본값은 `0`입니다.

### .displacementMap : Texture
- 변위 맵은 메시 정점의 위치에 영향을 줍니다. 조명과 음영에만 영향을 주는 다른 맵과 달리, 변위된 정점은 실제로 그림자를 생성하고 다른 물체를 차단하는 등 실제 기하 구조로 작동합니다. 변위 텍스처는 각 픽셀의 값(흰색이 가장 높음)이 정점의 위치를 재배치하는 이미지입니다. 기본값은 `null`입니다.

### .displacementScale : number
- 변위 맵이 메시에 미치는 영향력(검정색은 변위 없음, 흰색은 최대 변위)을 설정합니다. 변위 맵이 설정되지 않은 경우 이 값은 적용되지 않습니다. 기본값은 `0`입니다.

### .emissive : Color
- 재질의 방출(광원) 색상입니다. 본질적으로 다른 조명의 영향을 받지 않는 고유한 색상입니다. 기본값은 `(0, 0, 0)`입니다.

### .emissiveIntensity : number
- 방출되는 빛의 강도입니다. 방출 색상을 변조합니다. 기본값은 `1`입니다.

### .emissiveMap : Texture
- 방출(glow) 맵을 설정합니다. 방출 맵 색상은 방출 색상과 방출 강도에 의해 변조됩니다. 방출 맵이 있는 경우 방출 색상을 검은색 이외의 색상으로 설정해야 합니다. 기본값은 `null`입니다.

### .envMap : Texture
- 환경 맵입니다. 기본값은 `null`입니다.

### .envMapIntensity : number
- 환경 맵의 색상에 곱하여 효과를 스케일링합니다. 기본값은 `1`입니다.

### .envMapRotation : Euler
- 라디안 단위의 환경 맵 회전입니다. 기본값은 `(0, 0, 0)`입니다.

### .flatShading : boolean
- 재질을 평면 쉐이딩(Flat Shading)으로 렌더링할지 여부입니다. 기본값은 `false`입니다.

### .fog : boolean
- 재질이 안개의 영향을 받는지 여부입니다. 기본값은 `true`입니다.

### .isMeshPhongMaterial : boolean (readonly)
- 유형 테스트를 위해 사용되는 플래그입니다. 기본값은 `true`입니다.

### .lightMap : Texture
- 조명 맵입니다. 기본값은 `null`입니다. `lightMap`에는 두 번째 UV 세트가 필요합니다.

### .lightMapIntensity : number
- 베이크된 빛의 강도입니다. 기본값은 `1`입니다.

### .map : Texture
- 컬러 맵입니다. 선택적으로 알파 채널을 포함할 수 있으며, 일반적으로 `Material.transparent` 또는 `Material.alphaTest`와 결합됩니다. 텍스처 맵 색상은 디퓨즈 `color`에 의해 변조됩니다. 기본값은 `null`입니다.

### .normalMap : Texture
- 노멀 맵을 생성하기 위한 텍스처입니다. RGB 값은 각 픽셀 단편의 표면 법선에 영향을 주어 조명이 비춰지는 방식을 바꿉니다. 노멀 맵은 실제 모양을 바꾸지 않고 조명만 바꿉니다. 기본값은 `null`입니다.

### .normalMapType : TangentSpaceNormalMap | ObjectSpaceNormalMap
- 노멀 맵의 유형입니다. 기본값은 `TangentSpaceNormalMap`입니다.

### .normalScale : Vector2
- 노멀 맵이 재질에 미치는 영향력을 설정합니다. 일반적인 범위는 `[0, 1]`이며 기본값은 `(1, 1)`입니다.

### .reflectivity : number
- 환경 맵이 표면에 미치는 영향력입니다. 유효한 범위는 `0`(반사 없음)에서 `1`(완전 반사) 사이입니다. 기본값은 `1`입니다.

### .refractionRatio : number
- 공기의 굴절률(IOR)(약 1)을 재질의 굴절률로 나눈 값입니다. 환경 매핑 모드 `CubeRefractionMapping` 및 `EquirectangularRefractionMapping`과 함께 사용됩니다. 굴절률은 `1`을 초과해서는 안 됩니다. 기본값은 `0.98`입니다.

### .shininess : number
- 정반사 하이라이트가 얼마나 반짝이는지를 설정합니다. 값이 높을수록 하이라이트가 더 날카롭고 선명해집니다. 기본값은 `30`입니다.

### .specular : Color
- 재질의 정반사(Specular) 색상입니다. 기본값은 `0x111111`(매우 어두운 회색)입니다. 이는 재질의 광택 정도와 광택의 색상을 정의합니다.

### .specularMap : Texture
- 정반사 맵 값은 정반사 하이라이트가 기여하는 정도와 환경 맵이 표면에 미치는 영향력 모두에 영향을 줍니다. 기본값은 `null`입니다.

### .wireframe : boolean
- 기하학 구조를 와이어프레임으로 렌더링합니다. 기본값은 `false`입니다.

### .wireframeLinecap : 'round' | 'bevel' | 'miter'
- 선 끝의 모양을 정의합니다. `SVGRenderer`에서만 사용할 수 있습니다. 기본값은 `'round'`입니다.

### .wireframeLinejoin : 'round' | 'bevel' | 'miter'
- 선 조인트의 모양을 정의합니다. `SVGRenderer`에서만 사용할 수 있습니다. 기본값은 `'round'`입니다.

### .wireframeLinewidth : number
- 와이어프레임의 두께를 제어합니다. `SVGRenderer`에서만 사용할 수 있습니다. 기본값은 `1`입니다.

## Source
[src/materials/MeshPhongMaterial.js](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshPhongMaterial.js)

[내용출처 threejs 공식 사이트 MeshPhongMaterial ](https://threejs.org/docs/#MeshPhongMaterial)