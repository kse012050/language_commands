# TorusGeometry (토러스 지오메트리)
도넛 형태(토러스)를 표현하는 지오메트리 클래스입니다.

## Code Example

~~~js
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry, material );

scene.add( torus );
~~~

## Constructor
### TorusGeometry( radius : number, tube : number, radialSegments : number, tubularSegments : number, arc : number, thetaStart : number, thetaLength : number )
토러스 지오메트리를 생성합니다.

- radius  
토러스 중심에서 튜브 중심까지의 반지름입니다.  
기본값은 `1`입니다.

- tube  
튜브(두께)의 반지름입니다.  
radius보다 작아야 합니다.  
기본값은 `0.4`입니다.

- radialSegments  
방사 방향 세그먼트 수입니다.  
기본값은 `12`입니다.

- tubularSegments  
튜브 방향 세그먼트 수입니다.  
기본값은 `48`입니다.

- arc  
전체 토러스의 중심 각도(라디안)입니다.  
기본값은 `Math.PI * 2`입니다.

- thetaStart  
튜브 시작 각도(라디안)입니다.  
기본값은 `0`입니다.

- thetaLength  
튜브의 길이(라디안)입니다.  
기본값은 `Math.PI * 2`입니다.

## Properties

### .parameters : Object
지오메트리를 생성할 때 사용된 생성자 파라미터를 담고 있는 객체입니다.  
생성 이후 값을 변경해도 실제 지오메트리에는 영향을 주지 않습니다.

## Static Methods

### .fromJSON( data : Object ) : TorusGeometry
주어진 JSON 객체로부터 TorusGeometry 인스턴스를 생성하는 팩토리 메서드입니다.

- data  
직렬화된 지오메트리를 표현하는 JSON 객체입니다.

- 반환값  
새로운 TorusGeometry 인스턴스

## Source
[src/geometries/TorusGeometry.js](https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js)

[내용출처 threejs 공식 사이트 TorusGeometry](https://threejs.org/docs/#api/en/geometries/TorusGeometry)