# DragControls
이 클래스는 드래그 앤 드롭 상호 작용을 제공하는 데 사용할 수 있습니다.

## Code Example
~~~js
const controls = new DragControls( objects, camera, renderer.domElement );

// 드래그된 객체를 강조 표시하는 이벤트 리스너 추가
controls.addEventListener( 'dragstart', function ( event ) {
    event.object.material.emissive.set( 0xaaaaaa );
});
controls.addEventListener( 'dragend', function ( event ) {
    event.object.material.emissive.set( 0x000000 );
});
~~~

## Import
DragControls는 애드온이므로 명시적으로 가져와야 합니다. [설치#애드온](https://threejs.org/manual/#en/installation)을 참조하세요.

## Constructor
### new DragControls( objects : ``Array.<Object3D>``, camera : ``Camera``, domElement : ``HTMLElement`` )
새로운 컨트롤 인스턴스를 생성합니다.  
  
__objects__: 드래그 가능한 3D 객체 배열입니다.  
__camera__: 렌더링된 장면의 카메라입니다.  
__domElement__: 이벤트 리스너에 사용되는 HTML DOM 요소입니다. 기본값은 ``null``입니다.

## Properties
### .objects : ``Array.<Object3D>``
드래그 가능한 3D 객체 배열입니다.

### .raycaster : Raycaster
3D 객체 감지에 사용되는 레이캐스터입니다.

### .recursive : boolean
드래그 가능한 객체의 자식 객체를 부모 객체와 독립적으로 드래그할 수 있는지 여부입니다.  
기본값은 ``true``입니다.

### .rotateSpeed ​​: number
``회전 모드``에서 드래그할 때 객체가 회전하는 속도입니다. 숫자가 높을수록 회전 속도가 빨라집니다.  
기본값은 ``1``입니다.

### .transformGroup : boolean
이 옵션은 객체 배열에 드래그 가능한 ``그룹 객체``가 하나만 있는 경우에만 작동합니다. ``true``로 설정하면 컨트롤은 개별 객체가 아닌 전체 그룹을 변환합니다.  
기본값은 ``false``입니다.

## Events
### .drag
사용자가 3D 객체를 드래그할 때 발생합니다.  
__유형__:객체

### .dragend
사용자가 3D 객체 드래그를 완료했을 때 발생합니다.  
__유형__:객체

### .hoveroff
포인터가 3D 객체 밖으로 이동할 때 발생합니다.  
__유형__:객체

### .hoveron
포인터가 3D 객체 또는 해당 객체의 자식 요소 위로 이동할 때 발생합니다.  
__유형__:객체


## Source
[examples/jsm/controls/DragControls.js](https://threejs.org/manual/#en/installation)  
  
  
   
[내용출처 threejs 공식 사이트](https://threejs.org/docs/#DragControls)