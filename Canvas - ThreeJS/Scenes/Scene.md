# Scene
장면을 사용하면 three.js로 렌더링할 내용과 위치를 설정할 수 있습니다. 여기에 객체, 조명 및 카메라를 배치합니다.  

## Constructor
### Scene()
새 장면 객체를 만듭니다.

## Properties
### .background : Object
장면의 배경을 정의합니다. 기본값은 null입니다. 유효한 입력은 다음과 같습니다.  
  
- 균일한 색상의 배경을 정의하기 위한 색상.
- (평평한) 텍스처 배경을 정의하기 위한 텍스처.
- 스카이박스를 정의하기 위한 텍스처 큐브(CubeTexture) 또는 등방형 텍스처.  

참고: 확대/축소 또는 보기와 같은 카메라 관련 구성은 무시됩니다.

### .backgroundBlurriness : Float
배경의 흐릿함을 설정합니다. Scene.background에 할당된 환경 맵에만 영향을 미칩니다. 유효한 입력은 ``0``과 ``1`` 사이의 float입니다. 기본값은 ``0``입니다.

### .backgroundIntensity : Float
배경의 색상을 약화합니다. 배경 텍스처에만 적용됩니다. 기본값은 1입니다.

### .backgroundRotation : Euler
라디안 단위의 배경 회전입니다. Scene.background에 할당된 환경 맵에만 영향을 미칩니다. 기본값은 ``(0,0,0)``입니다.

### .environment : Texture
장면의 모든 물리적 소재에 대한 환경 맵을 설정합니다. 그러나 MeshStandardMaterial.envMap에 할당된 기존 텍스처를 덮어쓸 수는 없습니다. 기본값은 ``null``입니다.

### .environmentIntensity : Float
환경의 색상을 약화합니다. Scene.environment에 할당된 환경 맵에만 영향을 미칩니다. 기본값은 ``1``입니다.

### .environmentRotation : Euler
라디안 단위의 환경 맵 회전입니다. .environment를 사용할 때만 장면의 물리적 소재에 영향을 미칩니다. 기본값은 ``(0,0,0)``입니다.

### .fog : Fog
장면에서 렌더링되는 모든 것에 영향을 미치는 안개 유형을 정의하는 안개 인스턴스입니다. 기본값은 ``null``입니다.

### .isScene : Boolean
지정된 객체가 Scene 유형인지 확인하는 읽기 전용 플래그입니다.

### .overrideMaterial : Material
모든 씬을 정의된 소재로 렌더링합니다. 기본값은 ``null``입니다.

## Methods
### .toJSON ( meta : Object ) : Object
meta -- 씬의 텍스처나 이미지와 같은 메타데이터를 포함하는 객체입니다.  
씬을 three.js JSON Object/Scene 형식으로 변환합니다.

## Source
[src/scenes/Scene.js](https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js)  
  
    
[내용출처 threejs 공식 사이트](https://threejs.org/docs/#api/en/scenes/Scene)