# DirectionalLightHelper (방향성 라이트 헬퍼)
DirectionalLight의 효과를 시각적으로 확인할 수 있도록 도와주는 헬퍼 객체입니다.  

이 헬퍼는 다음 요소로 구성됩니다:
- 빛의 위치를 나타내는 평면
- 빛의 방향을 나타내는 선

DirectionalLight 또는 target이 변형되거나, 라이트 속성이 변경된 경우  
`update()` 메서드를 호출해야 합니다.

## Code Example
~~~js
    const light = new THREE.DirectionalLight( 0xFFFFFF );
    scene.add( light );

    const helper = new THREE.DirectionalLightHelper( light, 5 );
    scene.add( helper );
~~~
## Constructor
### DirectionalLightHelper( light : DirectionalLight, size : number, color : number | Color | string )
DirectionalLight 헬퍼를 생성합니다.

- light  
시각화할 라이트 객체입니다.

- size  
평면의 크기입니다.  
기본값은 `1`입니다.

- color  
헬퍼의 색상입니다.  
설정하지 않으면 라이트의 색상을 사용합니다.

## Properties

### .color : number | Color | string
생성자에서 전달된 색상 값입니다.  
설정하지 않으면 라이트의 색상을 사용합니다.

### .light : DirectionalLight
시각화 대상이 되는 라이트입니다.

### .lightPlane : Line
DirectionalLight의 위치를 나타내는 선(평면 포함)입니다.

### .targetLine : Line
DirectionalLight의 target 방향을 나타내는 선입니다.

## Methods

### .dispose()
이 인스턴스에서 사용된 GPU 리소스를 해제합니다.  
더 이상 사용하지 않을 때 반드시 호출해야 합니다.

### .update()
라이트의 위치와 방향 변화에 맞게 헬퍼를 업데이트합니다.

## Source
[src/helpers/DirectionalLightHelper.js](https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js)

[내용출처 threejs 공식 사이트 DirectionalLightHelper](https://threejs.org/docs/#api/en/helpers/DirectionalLightHelper)