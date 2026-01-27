# Fog
이 클래스는 거리에 따라 선형적으로 밀도가 높아지는 선형 안개를 정의하는 데 사용할 수 있습니다.

## Code Example
~~~js
const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );
~~~

## Constructor
### new Fog( color : number | Color, near : number, far : number )
새로운 안개를 생성합니다.  
  
__color__: 안개의 색상입니다.  
__near__: 안개를 적용하기 시작하는 최소 거리입니다. 기본값은 1입니다.  
__far__: 안개 계산 및 적용이 중지되는 최대 거리입니다. 기본값은 1000입니다.  
  
## Properties
### .color : Color
안개의 색상입니다.

### .far : number
안개 계산 및 적용이 중지되는 최대 거리입니다. 활성 카메라에서 ``far`` 단위보다 멀리 떨어진 객체는 안개의 영향을 받지 않습니다.  
기본값은 ``1000``입니다.

### .isFog : boolean (읽기 전용)
이 플래그는 유형 테스트에 사용할 수 있습니다.  
기본값은 ``true``입니다.

### .name : string
안개의 이름입니다.

### .near : number
안개를 적용하기 시작하는 최소 거리입니다. 활성 카메라에서 ``near`` 단위보다 가까이 있는 객체는 안개의 영향을 받지 않습니다.  
기본값은 ``1``입니다.

## Methods
### .clone() : Fog
이 인스턴스의 값을 복사한 새로운 Fog 객체를 반환합니다.  
__반환값__: 이 인스턴스의 복제본입니다.

### .toJSON( meta : Object | string ) : Object
Fog 객체를 JSON으로 직렬화합니다.  
  
__meta__: 직렬화에 대한 메타 정보를 담는 선택적 값입니다.  
__반환값__: 직렬화된 Fog 객체를 나타내는 JSON 객체입니다.

## Source
[src/scenes/Fog.js](https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js)  
  
[내용출처 ThreeJS 공식 사이트 Scenes - Fog](https://threejs.org/docs/#Fog)