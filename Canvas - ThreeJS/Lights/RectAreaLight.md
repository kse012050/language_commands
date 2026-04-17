# RectAreaLight (직사각형 영역 라이트)
직사각형 평면 전체에서 균일하게 빛을 방출하는 라이트입니다.  
밝은 창문이나 형광등(스트립 조명) 같은 광원을 시뮬레이션할 때 사용됩니다.

## Important Notes
- 그림자(Shadow)를 지원하지 않습니다.
- PBR(Material 기반 물리 렌더링) 재질에서만 동작합니다.
- 반드시 아래 라이브러리를 초기화해야 합니다:
  - WebGLRenderer: `RectAreaLightUniformsLib`
  - WebGPURenderer: `RectAreaLightTexturesLib`

## Code Example

~~~js
RectAreaLightUniformsLib.init(); // WebGLRenderer 사용 시

THREE.RectAreaLightNode.setLTC(
    RectAreaLightTexturesLib.init()
); // WebGPURenderer 사용 시

const intensity = 1;
const width = 10;
const height = 10;

const rectLight = new THREE.RectAreaLight( 0xffffff, intensity, width, height );
rectLight.position.set( 5, 5, 0 );
rectLight.lookAt( 0, 0, 0 );

scene.add( rectLight );
~~~

## Constructor
### RectAreaLight( color : number | Color | string, intensity : number, width : number, height : number )
RectAreaLight를 생성합니다.

- color  
빛의 색상입니다.  
기본값은 `0xffffff`입니다.

- intensity  
빛의 세기입니다.  
기본값은 `1`입니다.

- width  
라이트의 너비입니다.  
기본값은 `10`입니다.

- height  
라이트의 높이입니다.  
기본값은 `10`입니다.

## Properties

### .height : number
라이트의 높이입니다.  
기본값은 `10`입니다.

### .isRectAreaLight : boolean (readonly)
해당 객체가 RectAreaLight인지 확인하는 플래그입니다.  
기본값은 `true`입니다.

### .power : number
빛의 출력(광속)입니다. 단위는 루멘(lm)입니다.  
이 값을 변경하면 intensity도 함께 변경됩니다.

### .width : number
라이트의 너비입니다.  
기본값은 `10`입니다.

## Methods
일반적인 메서드는 기본 Light 클래스를 참조하세요.

## Source
[src/lights/RectAreaLight.js](https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js)

[내용출처 threejs 공식 사이트 RectAreaLight](https://threejs.org/docs/#api/en/lights/RectAreaLight)