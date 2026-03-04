# PointerLockControls
이 클래스의 구현은 [Pointer Lock API](Pointer Lock API)를 기반으로 합니다. ``PointerLockControls``는 1인칭 3D 게임에 매우 적합합니다.

## Code Example
~~~js
const controls = new PointerLockControls( camera, document.body );

// UI 표시/숨기기 이벤트 리스너 추가 (예: 게임 메뉴)
controls.addEventListener( 'lock', function () {
    menu.style.display = 'none';
});
controls.addEventListener( 'unlock', function () {
    menu.style.display = 'block';
});
~~~

## Import
PointerLockControls는 추가 기능이므로 명시적으로 가져와야 합니다. [설치#추가](https://threejs.org/manual/#en/installation) 기능을 참조하십시오.
~~~js
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
~~~

## Constructor
### new PointerLockControls( camera : Camera, domElement : HTMLElement )
새로운 컨트롤 인스턴스를 생성합니다.

__camera__: 컨트롤에서 관리하는 카메라입니다.  
__domElement__: 이벤트 리스너에 사용되는 HTML 요소입니다. 기본값은 ``null``입니다.


## Properties
### .isLocked : boolean (readonly)
컨트롤이 잠겨 있는지 여부입니다.  
기본값은 ``false``입니다.

### .maxPolarAngle : number
카메라 피치의 상한값입니다. 범위는 라디안 단위로 '[0, Math.PI]'입니다.  
기본값은 ``Math.PI``입니다.

### .minPolarAngle : number
카메라 피치의 하한값입니다. 범위는 라디안 단위로 '[0, Math.PI]'입니다.  
기본값은 ``0``입니다.

### .pointerSpeed ​​: number
포인터 움직임이 카메라 회전에 미치는 영향의 배율입니다.  
기본값은 ``1``입니다.

## Methods
### `.getDirection(v: Vector3): Vector3`
카메라의 시점 방향을 반환합니다.  
  
`v`: 메서드의 결과를 저장하는 데 사용되는 대상 벡터입니다.  
``반환값``: 정규화된 방향 벡터.

### `.lock(unadjustedMovement: boolean)`
포인터 잠금을 활성화합니다.  
  
`unadjustedMovement`: 마우스 가속에 대한 OS 수준 조정을 비활성화하고 대신 원시 마우스 입력에 액세스합니다. `true`로 설정하면 마우스 가속이 비활성화됩니다.  
기본값은 `false`입니다.

### `.moveForward(distance: number)`
카메라를 xz 평면에 평행하게 앞으로 이동합니다. `camera.up`은 y축 방향이라고 가정합니다.  
`distance ( 거리 )`: 부호 있는 거리입니다.

### `.moveRight(distance: number)`
카메라를 xz 평면에 평행하게 좌우로 이동합니다.  
`distance ( 거리 )`: 부호 있는 거리입니다.

### `.unlock()`
포인터 잠금을 해제합니다.

## Events
### .change
사용자가 마우스를 움직일 때 발생합니다.  
  
__유형__: 객체

### .lock
포인터 잠금 상태가 "잠김"일 때(즉, 마우스가 점유되었을 때) 발생합니다.  
  
__유형__: 객체

### .unlock
포인터 잠금 상태가 "해제됨"일 때(즉, 마우스가 더 이상 점유되지 않았을 때) 발생합니다.  
  
__유형__: 객체

## Source
[examples/jsm/controls/PointerLockControls.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/PointerLockControls.js)  
  
[내용출처 threejs 공식 사이트](https://threejs.org/docs/#PointerLockControls)