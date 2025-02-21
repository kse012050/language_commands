# Shape ( 모양 )
선택적 구멍이 있는 경로를 사용하여 임의의 2d 모양 평면을 정의합니다. ``ExtrudeGeometry``, ``ShapeGeometry``와 함께 사용하여 점을 얻거나 삼각형 면을 얻을 수 있습니다.

## Code Example
~~~js
const heartShape = new THREE.Shape();

heartShape.moveTo( 25, 25 );
heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );

const extrudeSettings = { 
	depth: 8, 
	bevelEnabled: true, 
	bevelSegments: 2, 
	steps: 2, 
	bevelSize: 1, 
	bevelThickness: 1 
};

const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );

const mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );
~~~

## Examples
[geometry / shapes](https://threejs.org/examples/#webgl_geometry_shapes)  
[geometry / extrude / shapes](https://threejs.org/examples/#webgl_geometry_extrude_shapes)

## Constructor
### Shape( points : Array )
points -- (선택 사항) ``Vector2`` 배열.  
  
포인트에서 Shape를 만듭니다. 첫 번째 포인트는 오프셋을 정의한 다음 연속된 포인트가 ``LineCurves``로 ``curves`` 배열에 추가됩니다.  
  
포인트가 지정되지 않으면 빈 Shape가 생성되고 ``.currentPoint``가 원점으로 설정됩니다.

## Properties
일반적인 속성은 기본 ``Path`` 클래스를 참조하세요.

### .uuid : String
이 인스턴스의 ``UUID``입니다. 자동으로 할당되므로 편집하면 안 됩니다.

### .holes : Array
모양의 구멍을 정의하는 ``경로`` 배열입니다.

## Methods
일반적인 메서드는 기본 ``Path`` 클래스를 참조하세요.  
  
### .extractPoints(divisions: Integer): Array
divisions -- 결과의 세밀함.  
  
셰이프와 ``.holes`` 배열에서 ``getPoints``를 호출하고 다음 형식의 객체를 반환합니다.
~~~js
{ shape holes } 
~~~

여기서 shape와 hole은 ``Vector2``의 배열입니다.

### .getPointsHoles ( divisions : Integer ) : Array
divisions -- 결과의 세밀함.  
  
shape의 구멍을 나타내는 ``Vector2``의 배열을 가져옵니다.

## Source
[src/extras/core/Shape.js](https://threejs.org/docs/#api/en/extras/core/Shape)

[내용출처 threejs 공식 사이트 Shape ( 모양 )](https://threejs.org/docs/#api/en/extras/core/Shape)