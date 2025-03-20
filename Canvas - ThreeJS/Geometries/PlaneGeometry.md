# PlaneGeometry ( 평면 기하학 )
평면 기하 구조를 생성하는 클래스입니다.

[예시 적용화면 공식 사이트 있음!! 꼭 확인!!](https://threejs.org/docs/#api/en/geometries/PlaneGeometry)

## Code Example
~~~js
const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );
~~~

## Constructor
### PlaneGeometry(width: Float, height: Float, widthSegments: Integer, heightSegments: Integer)
width — X축을 따라 너비입니다. 기본값은 ``1``입니다.  
height — Y축을 따라 높이입니다. 기본값은 ``1``입니다.  
widthSegments — 선택 사항입니다. 기본값은 ``1``입니다.  
heightSegments — 선택 사항입니다. 기본값은 ``1``입니다.  

## Properties
일반적인 속성은 기본 ``BufferGeometry`` 클래스를 참조하세요.  
  
### .parameters : Object
생성자 매개변수 각각에 대한 속성이 있는 객체입니다. 인스턴스화 후 수정해도 지오메트리는 변경되지 않습니다.

## Methods
일반적인 방법은 기본 ``BufferGeometry`` 클래스를 참조하세요.

## Source
[src/geometries/PlaneGeometry.js](https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js)

[내용출처 threejs 공식 사이트 PlaneGeometry ( 평면 기하학 )](https://threejs.org/docs/#api/en/geometries/PlaneGeometry)