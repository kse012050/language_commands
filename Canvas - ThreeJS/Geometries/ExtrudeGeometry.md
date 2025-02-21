# ExtrudeGeometry (돌출 기하학)
경로 모양에서 돌출된 형상을 만듭니다.  
  
[예시 적용화면 공식 사이트 있음!! 꼭 확인!!](https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry)

## Code Example
~~~js
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );
~~~

## Constructor
### ExtrudeGeometry(shapes : Array, options : Object)
shapes — Shape 또는 Shape 배열.  
options — 다음 매개변수를 포함할 수 있는 Object.  
  
- curveSegments — int. 곡선의 점 수. 기본값은 ``12``입니다.
- steps — int. 돌출된 스플라인의 깊이를 따라 세그먼트를 세분화하는 데 사용되는 점 수. 기본값은 ``1``입니다.
- depth — float. Shape를 돌출할 깊이. 기본값은 ``1``입니다.
- bevelEnabled — bool. Shape에 베벨을 적용합니다. 기본값은 true입니다.
- bevelThickness — float. 원래 Shape에 베벨이 얼마나 깊이 들어가는지. 기본값은 ``0.2``입니다.
- bevelSize — float. 베벨이 확장되는 Shape 윤곽선으로부터의 거리. 기본값은 bevelThickness - 0.1입니다.
- bevelOffset — float. 베벨이 시작되는 Shape 윤곽선으로부터의 거리. 기본값은 ``0``입니다.
- bevelSegments — int. 베벨 레이어 수. 기본값은 ``3``입니다.
- extrudePath — THREE.Curve. 모양이 돌출되어야 하는 3D 스플라인 경로입니다. 경로 돌출에는 베벨이 지원되지 않습니다.
- UVGenerator — 객체. UV 생성기 기능을 제공하는 객체
- 이 객체는 2D 모양을 3D 지오메트리로 돌출합니다.
  
이 지오메트리로 메시를 만들 때 면과 돌출된 측면에 별도의 소재를 사용하려면 소재 배열을 사용할 수 있습니다. 첫 번째 소재는 면에 적용되고 두 번째 소재는 측면에 적용됩니다.

## Properties
일반적인 속성은 기본 ``BufferGeometry`` 클래스를 참조하세요.  
  
### .parameters : Object
각 생성자 매개변수에 대한 속성이 있는 객체입니다. 인스턴스화 후 수정해도 지오메트리는 변경되지 않습니다.

## Methods
일반적인 방법은 기본 ``BufferGeometry`` 클래스를 참조하세요.

## Source
[src/geometries/ExtrudeGeometry.js](https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js)  
  
[내용출처 threejs 공식 사이트 ExtrudeGeometry (돌출 기하학)](https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry)