# SpotLight (스포트라이트)
하나의 점에서 특정 방향으로 빛이 방출되는 라이트입니다.  
빛은 원뿔(cone) 형태로 퍼지며, 거리가 멀어질수록 범위가 넓어집니다.

이 라이트는 그림자를 생성할 수 있습니다.  
자세한 내용은 `SpotLightShadow`를 참고하세요.

## Code Example
~~~js
    // 텍스처로 조절되는 흰색 스포트라이트
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 100, 1000, 100 );
    spotLight.map = new THREE.TextureLoader().load( url );
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
~~~
## Constructor
### SpotLight( color : number | Color | string, intensity : number, distance : number, angle : number, penumbra : number, decay : number )
SpotLight를 생성합니다.

- color  
빛의 색상입니다.  
기본값은 `0xffffff`입니다.

- intensity  
빛의 세기입니다. 단위는 칸델라(cd)입니다.  
기본값은 `1`입니다.

- distance  
빛이 도달하는 최대 거리입니다.  
`0`이면 제한이 없습니다.  
기본값은 `0`입니다.

- angle  
빛이 퍼지는 최대 각도입니다.  
최대값은 `Math.PI / 2`입니다.  
기본값은 `Math.PI / 3`입니다.

- penumbra  
빛 가장자리의 감쇠 비율입니다.  
범위는 `[0,1]`입니다.  
기본값은 `0`입니다.

- decay  
거리 증가에 따른 빛의 감쇠 정도입니다.  
기본값은 `2`입니다.

## Properties

### .angle : number
빛이 퍼지는 최대 각도입니다.  
최대값은 `Math.PI / 2`입니다.  
기본값은 `Math.PI / 3`입니다.

### .decay : number
거리 증가에 따른 빛의 감쇠 정도입니다.  
물리 기반 렌더링에서는 기본값을 변경하지 않는 것이 권장됩니다.  
기본값은 `2`입니다.

### .distance : number
빛이 도달하는 최대 거리입니다.  
`0`이면 제한이 없습니다.  
기본값은 `0`입니다.

### .isSpotLight : boolean (readonly)
해당 객체가 SpotLight인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

### .map : Texture
빛의 색상을 조절하는 텍스처입니다.  
텍스처의 RGB 값과 라이트 색상이 혼합되며, 알파 값에 따라 비율이 결정됩니다.  

쿠키(cookie)처럼 특정 영역만 빛을 통과시키는 효과를 만들 수 있습니다.  

주의: `castShadow`가 `false`이면 이 속성은 비활성화됩니다.  
기본값은 `null`입니다.

### .penumbra : number
스포트라이트 가장자리의 감쇠 비율입니다.  
범위는 `[0,1]`입니다.  
기본값은 `0`입니다.

### .power : number
빛의 출력(광속)입니다. 단위는 루멘(lm)입니다.  
이 값을 변경하면 intensity도 함께 변경됩니다.

### .shadow : SpotLightShadow
이 라이트의 그림자 설정 정보를 담고 있는 객체입니다.

### .target : Object3D
라이트가 향하는 대상입니다.  
라이트는 자신의 위치에서 target의 위치를 향해 비춥니다.  

target의 위치를 변경하려면 반드시 scene에 추가해야 합니다.  
다른 3D 객체를 target으로 설정할 수도 있으며, 이 경우 해당 객체를 따라 움직입니다.

## Source
[src/lights/SpotLight.js](https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLight.js)

[내용출처 threejs 공식 사이트 SpotLight](https://threejs.org/docs/#api/en/lights/SpotLight)