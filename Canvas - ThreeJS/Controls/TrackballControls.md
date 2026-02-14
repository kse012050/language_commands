# TrackballControls
이 클래스는 OrbitControls와 유사합니다. 하지만 카메라의 상향 벡터를 일정하게 유지하지 않습니다. 즉, 카메라가 북극과 남극 위를 공전할 때 "바로 선" 상태를 유지하도록 뒤집히지 않습니다.

## Import
TrackballControls는 애드온이므로 명시적으로 가져와야 합니다. 설치#애드온 부분을 참조하세요.
~~~js
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
~~~

## Constructor
### new TrackballControls( object : Object3D, domElement : HTMLElement )
새로운 컨트롤 인스턴스를 생성합니다.  
  
__object__: 컨트롤에서 관리하는 객체입니다.  
__domElement__ : 이벤트 리스너에 사용되는 HTML 요소입니다.  
  
기본값은 ``null``입니다.

## Properties
### .dynamicDampingFactor : number
감쇠 강도를 정의합니다. ``staticMoving``이 ``false``로 설정된 경우에만 적용됩니다.  
기본값은 ``0.2``입니다.

### .keys : Array.``<string>``
이 배열은 상호 작용을 제어하는 ​​키 코드를 저장합니다.
- 첫 번째 정의된 키를 누르면 모든 마우스 상호 작용(왼쪽, 가운데, 오른쪽)이 궤도 운동을 수행합니다.
- 두 번째 정의된 키를 누르면 모든 마우스 상호 작용(왼쪽, 가운데, 오른쪽)이 확대/축소 운동을 수행합니다.
- 세 번째 정의된 키를 누르면 모든 마우스 상호 작용(왼쪽, 가운데, 오른쪽)이 패닝 운동을 수행합니다.  
기본값은 KeyA, KeyS, KeyD이며, 각각 A, S, D를 나타냅니다.  
__재정의__: [Controls#keys](https://threejs.org/docs/#Controls.keys)

### .maxDistance : number
돌리 아웃할 수 있는 최대 거리(원근 카메라만 해당).  
기본값은 ``무한대``입니다.

### .maxZoom : number
줌 아웃할 수 있는 최대 거리(직교 카메라만 해당).  
기본값은 ``무한대``입니다.

### .minDistance : number
돌리 촬영 가능 거리 (원근 카메라만 해당).  
기본값은 ``0``입니다.

### .minZoom : number
줌 촬영 가능 거리 (직교 카메라만 해당).  
기본값은 ``0``입니다.

### .mouseButtons : Object
이 객체는 컨트롤에서 사용되는 마우스 동작에 대한 참조를 포함합니다.
~~~js
controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	MIDDLE: THREE.MOUSE.DOLLY,
	RIGHT: THREE.MOUSE.PAN
}
~~~
__재정의__: [컨트롤#마우스버튼](https://threejs.org/docs/#Controls.mouseButtons)

### .noPan : boolean
패닝 활성화 여부.  
기본값은 ``false``입니다.

### .noRotate : boolean
회전 활성화 여부.  
기본값은 ``false``입니다.

### .noZoom : boolean
확대/축소 활성화 여부.  
기본값은 ``false``입니다.

### .panSpeed ​​: number
패닝 속도.  
기본값은 ``0.3``입니다.

### .rotateSpeed ​​: number
회전 속도.  
기본값은 ``1``입니다.

### .screen : Object (읽기 전용)
화면 속성을 나타냅니다. ``handleResize()``가 호출될 때 자동으로 설정됩니다.

### .staticMoving : boolean
움직임 감쇠 활성화 여부.  
기본값은 ``false``입니다.

### .target : Vector3
컨트롤의 초점 위치.

### .zoomSpeed ​​: number
확대/축소 속도.  
기본값은 ``1.2``입니다.


## Methods
### .handleResize()
애플리케이션 창 크기가 변경될 경우 반드시 호출해야 합니다.

### .reset()
컨트롤을 초기 상태로 되돌립니다.


## Events
### .change
컨트롤에 의해 카메라가 변형되었을 때 발생합니다.  
__유형__: 객체

### .end
상호작용이 종료되었을 때 발생합니다.  
__유형__: 객체

### .start
상호작용이 시작되었을 때 발생합니다.  
__유형__: 객체  
  
## Source
[examples/jsm/controls/TrackballControls.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/TrackballControls.js)  
  
[내용출처 threejs 공식 사이트](https://threejs.org/docs/#TrackballControls)