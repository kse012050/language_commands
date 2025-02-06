# BoxGeometry
BoxGeometry는 주어진 '너비', '높이' 및 '깊이'를 갖는 직사각형 입방체에 대한 지오메트리 클래스입니다. 생성 시, 입방체는 원점을 중심으로 하고 각 모서리는 축 중 하나와 평행합니다.  
  
[예시 적용화면 공식 사이트 있음!! 꼭 확인!!](https://threejs.org/docs/#api/en/geometries/BoxGeometry)  
  
## Code Example
~~~js
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );
~~~

## Constructor
### BoxGeometry(width: Float, height: Float, depth: Float, widthSegments: Integer, heightSegments: Integer, depthSegments: Integer)
width — 너비, 즉 X축과 평행한 모서리의 길이입니다. 선택 사항입니다. 기본값은 ``1``입니다.  
height — 높이, 즉 Y축과 평행한 모서리의 길이입니다. 선택 사항입니다. 기본값은 ``1``입니다.  
depth — 깊이, 즉 Z축과 평행한 모서리의 길이입니다. 선택 사항입니다. 기본값은 ``1``입니다.  
widthSegments — 변의 너비를 따라 분할된 직사각형 면의 수입니다. 선택 사항입니다. 기본값은 ``1``입니다.  
heightSegments — 변의 높이를 따라 분할된 직사각형 면의 수입니다. 선택 사항입니다. 기본값은 ``1``입니다.  
depthSegments — 변의 깊이를 따라 분할된 직사각형 면의 수입니다. 선택 사항입니다. 기본값은 ``1``입니다.

## Properties
일반적인 속성에 대한 기본 BufferGeometry 클래스를 참조하세요.  

### .parameters : Object
각 생성자 매개변수에 대한 속성이 있는 객체입니다. 인스턴스화 후 수정해도 지오메트리는 변경되지 않습니다.

## Methods
일반적인 방법은 기본 BufferGeometry 클래스를 참조하세요.

## Source
[src/geometries/BoxGeometry.js](https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js)

[내용출처 threejs 공식 사이트](https://threejs.org/docs/#api/en/geometries/BoxGeometry)