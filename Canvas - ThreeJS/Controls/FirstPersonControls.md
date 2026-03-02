# FirstPersonControls
이 클래스는 ``FlyControls``의 대체 구현체입니다.

## Import
FirstPersonControls는 추가 기능이므로 명시적으로 가져와야 합니다. [설치#추가](https://threejs.org/manual/#en/installation) 기능을 참조하세요.

## Constructor
### new FirstPersonControls( object : Object3D, domElement : HTMLElement )
새로운 컨트롤 인스턴스를 생성합니다.  
  
__객체__ : 컨트롤에서 관리하는 객체입니다.  
__domElement__ : 이벤트 리스너에 사용되는 HTML 요소입니다. 기본값은 ``null``입니다.

## Properties
### .activeLook : boolean
주변을 둘러볼 수 있는지 여부입니다.  
기본값은 ``true``입니다.

### .autoForward : boolean
카메라가 자동으로 앞으로 이동하는지 여부입니다.  
기본값은 ``false``입니다.

### .constrainVertical : boolean
주변을 둘러볼 때 ``verticalMin``과 ``verticalMax``를 사용하여 수직 방향으로 제한할지 여부입니다.  
기본값은 ``false``입니다.  

### .heightCoef : number
카메라의 y축이 ``heightMax``에 가까울 때 카메라 이동 속도를 얼마나 빠르게 할지 결정합니다.  
기본값은 ``1``입니다.

### .heightMax : number
이동 속도 조정에 사용되는 카메라 높이의 상한값입니다.  
기본값은 ``1``입니다.

### .heightMin : number
이동 속도 조정에 사용되는 카메라 높이의 하한값입니다.  
기본값은 ``0``입니다.

### .heightSpeed ​​: boolean
카메라 높이가 전진 이동 속도에 영향을 줄지 여부입니다. ``heightCoef``, ``heightMin``, ``heightMax`` 속성을 사용하여 설정할 수 있습니다.  
기본값은 false입니다.

### .lookSpeed ​​: number
시점 이동 속도입니다.  
기본값은 ``0.005``입니다.

### .lookVertical : boolean
수직 방향 시점 이동 가능 여부입니다.  
기본값은 ``true``입니다.

### .mouseDragOn : boolean (readonly)
마우스 드래그 여부입니다.  
기본값은 ``false``입니다.

### .movementSpeed ​​: number
이동 속도입니다.  
기본값은 ``1``입니다.

### .verticalMax : number
수직으로 둘러볼 수 있는 최대 거리(상한값). 범위는 ``0``에서 ``π(라디안)``까지입니다.  
기본값은 ``0``입니다.

### .verticalMin : number
수직으로 둘러볼 수 있는 최대 거리(하한값). 범위는 ``0``에서 ``π(라디안)``까지입니다.  
기본값은 ``0``입니다.

## Methods
### .handleResize()
애플리케이션 창 크기가 조정될 경우 반드시 호출해야 합니다.

### .lookAt( x : number | Vector3, y : number, z : number ) : FirstPersonControls
정의된 목표 위치로 카메라를 회전시킵니다.  
  
__x__: 대상 위치의 x 좌표 또는 대상 위치를 나타내는 벡터입니다.  
__y__: 대상 위치의 y 좌표입니다.  
__z__: 대상 위치의 z 좌표입니다.  
__반환값__: 이 컨트롤에 대한 참조입니다.  
  
## Source
[examples/jsm/controls/FirstPersonControls.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/FirstPersonControls.js)  
  
[내용출처 threejs 공식 사이트](https://threejs.org/docs/#FirstPersonControls)