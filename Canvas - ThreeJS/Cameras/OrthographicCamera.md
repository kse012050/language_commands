# OrthographicCamera ( 직교 카메라 )
[직교 투영](https://en.wikipedia.org/wiki/Orthographic_projection) 방식을 사용하는 카메라입니다.  
  
이 투영 모드에서는 렌더링된 이미지에서 객체의 크기가 카메라와의 거리에 관계없이 일정하게 유지됩니다. 이는 2D 장면 및 UI 요소 렌더링 등에 유용하게 사용될 수 있습니다.

## Code Example
~~~js
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
scene.add( camera );
~~~

## Constructor
~~~js
new OrthographicCamera( left : number, right : number, top : number, bottom : number, near : number, far : number )
~~~

새로운 직교 카메라를 제작합니다.

|  |  |
|--|--|
| left | 카메라 절두체의 왼쪽 평면입니다. 기본값은 -1입니다. |
| right | 카메라 절두체의 오른쪽 평면입니다. 기본값은 1입니다. |
| top | 카메라 절두체의 상단 평면입니다. 기본값은 1입니다. |
| bottom | 카메라 절두체의 하단 평면입니다. 기본값은 -1입니다. |
| near | 카메라의 근접 평면입니다. 기본값은 0.1입니다. |
| far | 카메라의 원거리면. 기본값은 2000입니다. |

## Properties
### .bottom : 숫자
카메라 절두체의 하단 평면입니다.

기본값은 -1입니다.

### .far : 숫자
카메라의 원거리 평면입니다. OrthographicCamera#near의 현재 값보다 커야 합니다.  
기본값은 2000입니다.

### .isOrthographicCamera : 부울 (읽기 전용)
이 플래그는 유형 테스트에 사용할 수 있습니다.  
기본값은 true입니다.

### .left : 숫자
카메라 절두체의 왼쪽 평면입니다.  
기본값은 -1입니다.

### .near : 숫자
카메라의 근거리 평면입니다. 유효 범위는 0보다 크고 OrthographicCamera#far의 현재 값보다 작습니다.  
PerspectiveCamera와 달리 직교 카메라의 근거리 평면은 0도 유효한 값입니다.  
기본값은 0.1입니다.

### .right : 숫자
카메라 절두체의 오른쪽 평면입니다.  
기본값은 1입니다.

### .top : 숫자
카메라 절두체의 상단 평면입니다.  
기본값은 1입니다.

### .view : 객체
절두체 창의 사양을 나타냅니다. 이 속성은 직접 편집할 수 없으며 PerspectiveCamera#setViewOffset 및 PerspectiveCamera#clearViewOffset을 통해 편집해야 합니다.  
기본값은 null입니다.

### .zoom : 숫자
카메라의 확대/축소 배율입니다.  
기본값은 1입니다.


## Methods
### .clearViewOffset()
투영 행렬에서 뷰 오프셋을 제거합니다.

### .setViewOffset( fullWidth : number, fullHeight : number, x : number, y : number, width : number, height : number )
더 큰 절두체에 오프셋을 설정합니다. 이는 다중 창 또는 다중 모니터/다중 컴퓨터 환경에서 유용합니다.

|  |  |
|--|--|
| fullWidth | 멀티뷰 설정의 전체 너비입니다. |
| fullHeight | 멀티뷰 설정의 전체 높이입니다. |
| x | 서브카메라의 수평 오프셋입니다. |
| y | 서브카메라의 수직 오프셋입니다. |
| width | 서브카메라의 너비입니다. |
| height | 서브카메라의 높이입니다. |

참조: PerspectiveCamera#setViewOffset  
### .updateProjectionMatrix()
카메라의 투영 행렬을 업데이트합니다. 카메라 속성이 변경된 후에는 반드시 호출해야 합니다.

## Source
[src/cameras/OrthographicCamera.js](src/cameras/OrthographicCamera.js)  
  
[내용출처 three.js 공식 사이트 OrthographicCamera](https://threejs.org/docs/#OrthographicCamera.clearViewOffset)