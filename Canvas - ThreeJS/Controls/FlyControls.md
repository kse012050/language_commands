# FlyControls
이 클래스는 Blender와 같은 DCC 도구의 비행 모드와 유사한 탐색 기능을 제공합니다. 3D 공간에서 카메라를 자유롭게 이동시킬 수 있으며, 특정 대상을 초점 맞추는 등의 작업에는 제한이 없습니다.

## Import
FlyControls는 애드온이므로 명시적으로 가져와야 합니다. [설치#애드온](https://threejs.org/manual/#en/installation)을 참조하세요.
~~~js
import { FlyControls } from 'three/addons/controls/FlyControls.js';
~~~

## Constructor
### new FlyControls( object : Object3D, domElement : HTMLElement )
새로운 컨트롤 인스턴스를 생성합니다.  
  
__object__: 컨트롤에서 관리하는 객체입니다.  
__domElement__: 이벤트 리스너에 사용되는 HTML 요소입니다. 기본값은 ``null``입니다.

## Properties
### .autoForward : boolean
``true``로 설정하면 카메라가 처음 이동 시 자동으로 앞으로 이동합니다(멈추지 않음).  
기본값은 ``false``입니다.

### .dragToLook : boolean
``true``로 설정하면 드래그 상호 작용을 통해서만 주변을 둘러볼 수 있습니다.  
기본값은 ``false``입니다.

### .movementSpeed ​​: number
이동 속도입니다.  
기본값은 ``1``입니다.

### .rollSpeed ​​: number
회전 속도입니다.  
기본값은 ``0.005``입니다.

## Events
### .change
컨트롤에 의해 카메라가 변형되었을 때 발생합니다.  
  
__유형__: 오브젝트

## Source
[examples/jsm/controls/FlyControls.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/FlyControls.js)  
  
[내용출처 threejs 공식 사이트](https://threejs.org/docs/#FlyControls)