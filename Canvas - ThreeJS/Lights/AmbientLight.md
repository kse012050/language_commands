# AmbientLight ( 주변광 )
이 조명은 장면의 모든 객체를 전역적으로 동등하게 비춥니다.  
  
이 조명은 방향이 없으므로 그림자를 드리우는 데 사용할 수 없습니다.

## Code Example
~~~js
const light = new THREE.AmbientLight( 0x404040 ); // 부드러운 흰색 빛
scene.add( light );
~~~

## Constructor
### AmbientLight( color : Integer, intensity : Float )
color - (선택 사항) 색상의 RGB 구성 요소의 숫자 값입니다. 기본값은 0xffffff입니다.  
intensity - (선택 사항) 조명의 강도/강도의 숫자 값입니다. 기본값은 1입니다.  
  
새로운 AmbientLight를 생성합니다.

## Properties
일반적인 속성은 기본 ``Light`` 클래스를 참조하세요.

### .isAmbientLight : Boolean
주어진 객체가 AmbientLight 유형인지 확인하는 읽기 전용 플래그입니다.

## 메서드
일반적인 메서드는 기본 Light 클래스를 참조하세요.

## Source
[src/lights/AmbientLight.js](https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js)

[내용출처 threejs 공식 사이트 AmbientLight ( 주변광 )](https://threejs.org/docs/#api/en/lights/AmbientLight)