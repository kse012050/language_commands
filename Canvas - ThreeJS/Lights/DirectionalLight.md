# DirectionalLight ( 방향성 조명 )
특정 방향으로 방출되는 빛. 이 빛은 무한히 멀리 떨어져 있고 생성된 광선이 모두 평행한 것처럼 동작합니다. 이것의 일반적인 사용 사례는 일광을 시뮬레이션하는 것입니다. 태양은 충분히 멀리 떨어져 있어서 위치가 무한하다고 간주될 수 있고, 태양에서 나오는 모든 광선은 평행합니다.   
  
이 빛은 그림자를 드리울 수 있습니다. 자세한 내용은 ``DirectionalLightShadow`` 페이지를 참조하세요.

## 위치, 대상 및 회전에 대한 참고 사항
방향성 조명에 대한 일반적인 혼동 사항은 회전을 설정해도 효과가 없다는 것입니다. 이는 three.js의 DirectionalLight가 다른 애플리케이션에서 종종 '대상 직접 조명'이라고 하는 것과 동일하기 때문입니다.  
  
즉, 방향은 조명의 ``위치``에서 ``대상``의 위치를 ​​가리키는 것으로 계산됩니다(회전 구성 요소만 있는 '자유 직접 조명'과 대조적으로).  
  
그 이유는 조명이 ``그림자``를 드리울 수 있도록 하기 위해서입니다. 그림자 카메라에는 그림자를 계산할 위치가 필요합니다.  
  
``대상``을 업데이트하는 방법에 대한 자세한 내용은 아래의 대상 속성을 참조하세요.

## Code Example
~~~js
// 위쪽에서 반광도로 비추는 흰색 방향성 조명입니다.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
~~~

## Examples
[controls / fly](https://threejs.org/examples/#misc_controls_fly)  
[effects / parallaxbarrier](https://threejs.org/examples/#webgl_effects_parallaxbarrier)  
[effects / stereo](https://threejs.org/examples/#webgl_effects_stereo)  
[geometry / extrude / splines](https://threejs.org/examples/#webgl_geometry_extrude_splines)  
[materials / bumpmap](https://threejs.org/examples/#webgl_materials_bumpmap)

## Constructor
### DirectionalLight( color : Integer, intensity : Float )
color - (선택 사항) 조명의 16진수 색상. 기본값은 0xffffff(흰색)입니다.  
intensity - (선택 사항) 조명의 강도/강도의 숫자 값. 기본값은 1입니다.  
  
새로운 DirectionalLight를 만듭니다.

## Properties
일반적인 속성은 기본 Light 클래스를 참조하세요.

### .castShadow : Boolean
``true``로 설정하면 조명이 동적 그림자를 드리웁니다. 경고: 비용이 많이 들고 그림자가 제대로 보이도록 조정해야 합니다. 자세한 내용은 DirectionalLightShadow를 참조하세요. 기본값은 ``false``입니다.

### .isDirectionalLight : Boolean
지정된 객체가 DirectionalLight 유형인지 확인하는 읽기 전용 플래그입니다.

### .position : Vector3
이것은 ``Object3D.DEFAULT_UP``(0, 1, 0)과 같게 설정되어 조명이 위에서 아래로 비춥니다.

### .shadow : DirectionalLightShadow
이 조명의 그림자를 계산하는 데 사용되는 ``DirectionalLightShadow``입니다.

### .target : Object3D
DirectionalLight는 해당 ``위치``에서 target.position을 가리킵니다. 대상의 기본 위치는 ``(0, 0, 0)``입니다.  
__참고__: 대상의 위치를 ​​기본값이 아닌 다른 것으로 변경하려면 다음을 사용하여 ``장면``에 추가해야 합니다.  
  
~~~js
scene.add( light.target );
~~~
이렇게 하면 대상의 ``matrixWorld``가 각 프레임마다 자동으로 업데이트됩니다.  
  
다음과 같이 장면의 다른 객체(``위치`` 속성이 있는 모든 객체)로 대상을 설정할 수도 있습니다.  

~~~js
const targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;
~~~
이제 directionalLight가 대상 객체를 추적합니다.

## Methods
일반적인 메서드는 기본 ``Light`` 클래스를 참조하세요.

### .dispose() : undefined
이 인스턴스에서 할당한 GPU 관련 리소스를 해제합니다. 앱에서 이 인스턴스가 더 이상 사용되지 않을 때마다 이 메서드를 호출합니다.

### .copy(source : DirectionalLight) : this
``소스``의 모든 속성 값을 이 DirectionalLight로 복사합니다.

## Source
[src/lights/DirectionalLight.js](https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js)

[내용출처 threejs 공식 사이트 DirectionalLight ( 방향성 조명 )](https://threejs.org/docs/#api/en/objects/Mesh)