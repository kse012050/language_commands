# PointLight (포인트 라이트)
하나의 점에서 모든 방향으로 빛이 방출되는 라이트입니다.  
전구와 같은 광원을 표현할 때 주로 사용됩니다.

이 라이트는 그림자를 생성할 수 있습니다.  
자세한 내용은 `PointLightShadow`를 참고하세요.

## Code Example
~~~js
    const light = new THREE.PointLight( 0xff0000, 1, 100 );
    light.position.set( 50, 50, 50 );
    scene.add( light );
~~~
## Constructor
### PointLight( color : number | Color | string, intensity : number, distance : number, decay : number )
PointLight를 생성합니다.

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

- decay  
거리 증가에 따른 빛의 감쇠 정도입니다.  
기본값은 `2`입니다.

## Properties

### .decay : number
거리 증가에 따른 빛의 감쇠 정도입니다.  
물리 기반 렌더링에서는 기본값을 변경하지 않는 것이 권장됩니다.  
기본값은 `2`입니다.

### .distance : number
빛의 감쇠 거리 설정입니다.  

- `0`일 경우: 무한 거리까지 inverse-square 법칙으로 감쇠  
- `0`이 아닐 경우: 특정 거리까지는 inverse-square, 이후 급격히 0으로 감소  

이러한 cutoff는 물리적으로 완전히 정확하지 않습니다.  
기본값은 `0`입니다.

### .isPointLight : boolean (readonly)
해당 객체가 PointLight인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

### .power : number
빛의 출력(광속)입니다. 단위는 루멘(lm)입니다.  
이 값을 변경하면 intensity도 함께 변경됩니다.

### .shadow : PointLightShadow
이 라이트의 그림자 설정 정보를 담고 있는 객체입니다.

## Source
[src/lights/PointLight.js](https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js)

[내용출처 threejs 공식 사이트 PointLight](https://threejs.org/docs/#api/en/lights/PointLight)