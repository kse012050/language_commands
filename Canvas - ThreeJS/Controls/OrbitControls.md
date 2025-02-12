# OrbitControls
궤도 컨트롤을 사용하면 카메라가 대상 주위를 궤도로 돌 수 있습니다.  
/examples 디렉토리의 모든 파일과 마찬가지로 이를 사용하려면 HTML에 별도로 파일을 포함해야 합니다.

## Import
OrbitControls는 애드온이며 명시적으로 가져와야 합니다. [설치/애드온](https://threejs.org/docs/#manual/en/introduction/Installation)을 참조하세요.
~~~js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
~~~

## Code Example
~~~js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

const controls = new OrbitControls( camera, renderer.domElement );

// 카메라의 변형에 대한 수동 변경 후에는 controls.update()를 호출해야 합니다.
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {

	requestAnimationFrame( animate );

	// controls.enableDamping 또는 controls.autoRotate가 true로 설정된 경우 필수입니다.
	controls.update();

	renderer.render( scene, camera );

}
~~~

## Examples
[misc / controls / orbit](https://threejs.org/examples/#misc_controls_orbit)

## Constructor
### OrbitControls( object : Camera, domElement : HTMLDOMElement )
object: (필수) 제어할 카메라. 카메라는 다른 객체의 자식이어서는 안 됩니다. 해당 객체가 장면 자체인 경우는 예외입니다.  
  
domElement: 이벤트 리스너에 사용되는 HTML 요소입니다. (선택 사항)

## Events
### change
카메라가 컨트롤에 의해 변형되었을 때 실행됩니다.

### start
상호 작용이 시작되었을 때 실행됩니다.

### end
상호 작용이 끝났을 때 실행됩니다.

## Properties
기본 ``Controls`` 클래스에서 일반적인 속성을 확인하세요.

### .autoRotate : Boolean
대상 주위를 자동으로 회전하려면 true로 설정합니다.  
이 기능이 활성화된 경우 애니메이션 루프에서 ``.update()``를 호출해야 합니다. 자동 회전 속도가 프레임 속도(디스플레이의 새로 고침 속도)와 무관하게 하려면 시간 deltaTime(초)을 ``.update()``에 전달해야 합니다.

### .autoRotateSpeed ​​: Float
``.autoRotate``가 true인 경우 대상 주위를 얼마나 빨리 회전할 것인가입니다. 기본값은 2.0으로, 60fps에서 궤도당 30초에 해당합니다.  
``.autoRotate``가 활성화된 경우 애니메이션 루프에서 ``.update()``를 호출해야 합니다.

### .dampingFactor : Float
``.enableDamping``이 ``true``로 설정된 경우 사용되는 댐핑 관성입니다. 기본값은 ``0.05``입니다.
이 기능을 사용하려면 애니메이션 루프에서 ``.update()``를 호출해야 합니다.

### .enableDamping : Boolean
true로 설정하면 감쇠(관성)를 활성화하여 컨트롤에 무게감을 줄 수 있습니다. 기본값은 false입니다.  
이 기능이 활성화된 경우 애니메이션 루프에서 ``.update()``를 호출해야 합니다.

### .enablePan : Boolean
카메라 패닝을 활성화하거나 비활성화합니다. 기본값은 true입니다.

### .enableRotate : Boolean
카메라의 수평 및 수직 회전을 활성화하거나 비활성화합니다. 기본값은 true입니다.  
``극각`` 또는 ``방위각``의 최소 및 최대값을 같은 값으로 설정하여 단일 축을 비활성화할 수 있습니다. 이렇게 하면 수직 또는 수평 회전이 해당 값으로 고정됩니다.

### .enableZoom : Boolean
카메라의 확대/축소(돌리)를 활성화하거나 비활성화합니다.

### .keyPanSpeed ​​: Float
키보드를 사용할 때 카메라를 얼마나 빨리 팬할지입니다. 기본값은 키 누름당 7.0픽셀입니다.

### .keyRotateSpeed ​​: Float
키보드를 사용할 때 카메라를 얼마나 빨리 회전할지입니다. 기본값은 1입니다.

### .keys : Object
이 객체에는 카메라 팬을 제어하기 위한 키코드에 대한 참조가 들어 있습니다. 기본값은 4개의 화살표 키입니다.
~~~js
controls.keys = {
	LEFT: 'ArrowLeft', //left arrow
	UP: 'ArrowUp', // up arrow
	RIGHT: 'ArrowRight', // right arrow
	BOTTOM: 'ArrowDown' // down arrow
}
~~~
전체 키코드 목록은 ``KeyboardEvent.code``를 참조하세요.

### .maxAzimuthAngle : Float
수평으로 얼마나 멀리 궤도를 돌 수 있는지, 상한값입니다. 설정된 경우 간격 [min, max]는 [- 2 PI, 2 PI]의 하위 간격이어야 하며 (max - min < 2 PI)이어야 합니다. 기본값은 무한대입니다.

### .maxDistance : Float
얼마나 멀리 돌리 아웃할 수 있는지(``PerspectiveCamera``에만 해당). 기본값은 무한대입니다.

### .maxPolarAngle : Float
수직으로 얼마나 멀리 궤도를 돌 수 있는지, 상한값입니다. 범위는 0~Math.PI 라디안이고 기본값은 Math.PI입니다.

### .maxZoom : Float
얼마나 멀리 줌 아웃할 수 있는지(``OrthographicCamera``에만 해당). 기본값은 무한대입니다.

### .minTargetRadius : Float
대상을 3D ``.cursor``에 얼마나 가까이 가져갈 수 있는지. 기본값은 0입니다.

### .maxTargetRadius : Float
3D ``.cursor``에서 대상을 얼마나 멀리 이동할 수 있는지. 기본값은 Infinity입니다.

### .minAzimuthAngle : Float
수평으로 얼마나 멀리 궤도를 돌 수 있는지, 하한값입니다. 설정된 경우 간격 [min, max]는 [- 2 PI, 2 PI]의 하위 간격이어야 하며 (max - min < 2 PI)입니다. 기본값은 Infinity입니다.

### .minDistance : Float
얼마나 멀리 돌리 인할 수 있는지 (``PerspectiveCamera``에만 해당). 기본값은 0입니다.

### .minPolarAngle : Float
얼마나 멀리 수직으로 궤도를 돌 수 있는지, 하한값입니다. 범위는 0~Math.PI 라디안이고 기본값은 0입니다.

### .minZoom : Float
얼마나 멀리 줌 인할 수 있는지 (``OrthographicCamera``에만 해당). 기본값은 0입니다.

### .mouseButtons : Object
이 객체에는 컨트롤에서 사용하는 마우스 동작에 대한 참조가 들어 있습니다.
~~~js
controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	MIDDLE: THREE.MOUSE.DOLLY,
	RIGHT: THREE.MOUSE.PAN
}
~~~

### .panSpeed ​​: Float
팬 속도. 기본값은 1입니다.

### .position0 : Vector3
``.saveState`` 및 ``.reset`` 메서드에서 내부적으로 사용됩니다.

### .rotateSpeed ​​: Float
회전 속도. 기본값은 1입니다.

### .screenSpacePanning : Boolean
팬할 때 카메라 위치가 어떻게 변환되는지 정의합니다. true이면 카메라가 화면 공간에서 팬합니다. 그렇지 않으면 카메라가 카메라의 위쪽 방향과 직교하는 평면에서 팬합니다. 기본값은 ``true``입니다.

### .target0 : Vector3
``.saveState`` 및 ``.reset`` 메서드에서 내부적으로 사용됩니다.

### .target : Vector3
컨트롤의 초점 지점, ``.object``가 이를 중심으로 공전합니다. 언제든지 수동으로 업데이트하여 컨트롤의 초점을 변경할 수 있습니다.

### .cursor : Vector3
``.minTargetRadius`` 및 ``.maxTargetRadius`` 제한의 초점 지점입니다. 언제든지 수동으로 업데이트하여 ``.target``의 관심 중심을 변경할 수 있습니다.

### .touches : Object
이 객체에는 컨트롤에서 사용하는 터치 동작에 대한 참조가 포함되어 있습니다.
~~~js
controls.touches = {
	ONE: THREE.TOUCH.ROTATE,
	TWO: THREE.TOUCH.DOLLY_PAN
}
~~~
### .zoom0 : Float
``.saveState`` 및 ``.reset`` 메서드에서 내부적으로 사용됩니다.

### .zoomSpeed ​​: Float
확대/이동 속도입니다. 기본값은 1입니다.

### .zoomToCursor : Boolean
이 속성을 ``true``로 설정하면 커서 위치로 확대/축소할 수 있습니다. 기본값은 ``false``입니다.

## Methods
일반적인 메서드는 기본 ``Controls`` 클래스를 참조하세요.

### .getAzimuthalAngle() : radians
라디안 단위의 현재 수평 회전을 가져옵니다.

### .getPolarAngle() : radians
라디안 단위의 현재 수직 회전을 가져옵니다.

### .getDistance() : Float
카메라에서 대상까지의 거리를 반환합니다.

### .listenToKeyEvents(domElement: HTMLDOMElement) : UNDEFINED
지정된 DOM 요소에 키 이벤트 리스너를 추가합니다. 이 메서드를 사용하는 데는 ``window``가 권장되는 인수입니다.

### .reset() : UNDEFINED
컨트롤을 마지막으로 ``.saveState``를 호출한 시점 또는 초기 상태로 재설정합니다.

### .saveState() : UNDEFINED
컨트롤의 현재 상태를 저장합니다. 나중에 ``.reset``을 사용하여 복구할 수 있습니다.

### .stopListenToKeyEvents() : undefined
``.listenToKeyEvents()``로 이전에 정의한 키 이벤트 리스너를 제거합니다.

### .update ( deltaTime : Number ) : Boolean
컨트롤을 업데이트합니다. 카메라의 변환을 수동으로 변경한 후 또는 ``.autoRotate`` 또는 ``.enableDamping``이 설정된 경우 업데이트 루프에서 호출해야 합니다. 초 단위의 ``deltaTime``은 선택 사항이며 자동 회전 속도를 프레임 속도(디스플레이의 새로 고침 속도)와 독립적으로 유지하려는 경우에만 필요합니다.

## Source
[examples/jsm/controls/OrbitControls.js](https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js)

[내용출처 threejs 공식 사이트](https://threejs.org/docs/#examples/en/controls/OrbitControls)