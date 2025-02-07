# IcosahedronGeometry ( 이십면체기하학 )
이십면체 기하학을 생성하는 클래스입니다.

## Constructor
### IcosahedronGeometry(radius : Float, detail : Integer)
radius — 기본값은 ``1``입니다.  
detail — 기본값은 ``0``입니다. 이 값을 ``0``보다 큰 값으로 설정하면 정점이 더 추가되어 더 이상 이십면체가 아닙니다. detail이 ``1``보다 크면 사실상 구입니다.

## Properties
일반적인 속성은 기본 ``PolyhedronGeometry`` 클래스를 참조하세요.

### .parameters : Object
각 생성자 매개변수에 대한 속성이 있는 객체입니다. 인스턴스화 후 수정해도 기하학은 변경되지 않습니다.

## Methods
일반적인 메서드는 기본 PolyhedronGeometry 클래스를 참조하세요.

## Source
[src/geometries/IcosahedronGeometry.js](https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js)

[내용출처 threejs 공식 사이트 IcosahedronGeometry](https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js)