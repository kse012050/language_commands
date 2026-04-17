# HemisphereLight (헤미스피어 라이트)
씬 위쪽에 위치한 광원으로, 하늘 색상에서 지면 색상으로 자연스럽게 색이 전환되는 라이트입니다.

이 라이트는 그림자를 생성할 수 없습니다.

## Code Example
~~~js
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );
~~~
## Constructor
### HemisphereLight( skyColor : number | Color | string, groundColor : number | Color | string, intensity : number )
HemisphereLight를 생성합니다.

- skyColor  
하늘 방향의 빛 색상입니다.  
기본값은 `0xffffff`입니다.

- groundColor  
지면 방향의 빛 색상입니다.  
기본값은 `0xffffff`입니다.

- intensity  
빛의 세기입니다.  
기본값은 `1`입니다.

## Properties

### .groundColor : Color
지면 방향의 빛 색상입니다.

### .isHemisphereLight : boolean (readonly)
해당 객체가 HemisphereLight인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

## Methods
일반적인 메서드는 기본 Light 클래스를 참조하세요.

## Source
[src/lights/HemisphereLight.js](https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js)

[내용출처 threejs 공식 사이트 HemisphereLight](https://threejs.org/docs/#api/en/lights/HemisphereLight)