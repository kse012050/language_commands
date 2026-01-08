# PerspectiveCamera ( 관점카메라 )
원근 투영을 사용하는 카메라.  
  
이 투영 모드는 인간의 눈이 보는 방식을 모방하도록 설계되었습니다. 3D 장면을 렌더링하는 데 사용되는 가장 일반적인 투영 모드입니다.

## Code Example
~~~js
const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );
~~~

## Examples
[animation / skinning / blending](https://threejs.org/examples/#webgl_animation_skinning_blending)  
[animation / skinning / morph](https://threejs.org/examples/#webgl_animation_skinning_morph)  
[effects / stereo](https://threejs.org/examples/#webgl_effects_stereo)  
[interactive / cubes](https://threejs.org/examples/#webgl_interactive_cubes)  
[loader / collada / skinning](https://threejs.org/examples/#webgl_loader_collada_skinning)

## Constructor
### PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
fov — 카메라 프러스텀 수직 시야.  
aspect — 카메라 프러스텀 종횡비.  
near — 카메라 프러스텀 근처 평면.( 카메라가 얼마나 가까울 때 안보이게 할지 정한다 )  
far — 카메라 프러스텀 먼 평면.( 카메라가 얼마나 멀어졌을 때 안보이게 할지 정한다 )  
 
이것들이 합쳐져서 카메라의 시야 프러스텀을 정의합니다.

## Properties
일반적인 속성은 기본 카메라 클래스를 참조하세요.  
이러한 속성 대부분을 변경한 후에는 .updateProjectionMatrix를 호출해야 변경 사항이 적용됩니다.  
  
### .aspect : Float
카메라 프러스텀 종횡비, 일반적으로 캔버스 너비/캔버스 높이입니다. 기본값은 ``1``(정사각형 캔버스)입니다.

### .far : Float
카메라 프러스텀 원거리 평면입니다. 기본값은 ``2000``입니다.  
  
근거리 평면의 현재 값보다 커야 합니다.

### .filmGauge : Float
더 큰 축에 사용되는 필름 크기입니다. 기본값은 ``35``(밀리미터)입니다. 이 매개변수는 .filmOffset이 0이 아닌 값으로 설정되지 않는 한 투영 행렬에 영향을 미치지 않습니다.

### .filmOffset : Float
``.filmGauge``와 동일한 단위의 수평 오프 센터 오프셋입니다. 기본값은 ``0``입니다.

### .focus : Float
입체 영상 및 피사계 심도 효과에 사용되는 객체 거리입니다. 이 매개변수는 ``StereoCamera``를 사용하지 않는 한 투영 행렬에 영향을 미치지 않습니다. 기본값은 ``10``입니다.

### .fov : Float
카메라 프러스텀 수직 시야, 아래에서 위로 시야, 도 단위입니다. 기본값은 ``50``입니다.

### .isPerspectiveCamera : Boolean
지정된 객체가 PerspectiveCamera 유형인지 확인하는 읽기 전용 플래그입니다.

### .near : Float
카메라 절두체 근처 평면입니다. 기본값은 ``0.1``입니다.  
  
유효 범위는 ``0``보다 크고 원거리 평면의 현재 값보다 작습니다. ``OrthographicCamera``와 달리 ``0``은 ``PerspectiveCamera``의 근처 평면에 유효한 값이 아닙니다.

### .view : Object
절두체 창 사양 또는 null입니다. 이는 ``.setViewOffset`` 메서드를 사용하여 설정하고 ``.clearViewOffset``을 사용하여 지웁니다.

### .zoom : number
카메라의 확대/축소 비율을 가져오거나 설정합니다. 기본값은 ``1``입니다.

## Methods
일반적인 방법은 기본 ``Camera`` 클래스를 참조하세요.

### .clearViewOffset() : undefined
``.setViewOffset`` 메서드로 설정된 모든 오프셋을 제거합니다.

### .getEffectiveFOV() : Float
.zoom을 고려하여 현재 수직 시야각을 각도로 반환합니다.

### .getFilmHeight() : Float
필름의 이미지 높이를 반환합니다. .aspect가 1보다 작거나 같은 경우(세로 형식) 결과는 .filmGauge와 같습니다.

### .getFilmWidth() : Float
필름의 이미지 너비를 반환합니다. .aspect가 1보다 크거나 같은 경우(가로 형식) 결과는 .filmGauge와 같습니다.

### .getFocalLength() : Float
.filmGauge에 대한 현재 .fov의 초점 거리를 반환합니다.

### .setFocalLength( focalLength : Float ) : undefined
현재 ``.filmGauge``에 대한 초점 거리로 FOV를 설정합니다.  
  
기본적으로 초점 거리는 35mm(풀 프레임) 카메라에 대해 지정됩니다.

### .getViewBounds( distance : Float, minTarget : Vector2, maxTarget : Vector2 ) : undefined
시야 방향을 따라 주어진 거리에서 카메라의 볼 수 있는 사각형의 2D 경계를 계산합니다. minTarget과 maxTarget을 뷰 사각형의 왼쪽 아래 및 오른쪽 위 모서리의 좌표로 설정합니다.

### .getViewSize( distance : Float, target : Vector2 ) : Vector2
시야 방향을 따라 주어진 거리에서 카메라의 볼 수 있는 사각형의 너비와 높이를 계산합니다. 결과를 대상 Vector2에 복사합니다. 여기서 x는 너비이고 y는 높이입니다.

### .setViewOffset ( fullWidth : Float, fullHeight : Float, x : Float, y : Float, width : Float, height : Float ) : undefined
fullWidth — 멀티뷰 설정의 전체 너비  
fullHeight — 멀티뷰 설정의 전체 높이  
x — 서브카메라의 수평 오프셋  
y — 서브카메라의 수직 오프셋  
width — 서브카메라의 너비  
height — 서브카메라의 높이  
  
더 큰 프러스텀에서 오프셋을 설정합니다. 이는 다중 창 또는 다중 모니터/다중 머신 설정에 유용합니다.  
  
예를 들어, 3x2 모니터가 있고 각 모니터가 1920x1080이며 모니터가 다음과 같이 그리드에 있는 경우:  

+---+---+---+  
| A | B | C |  
+---+---+---+  
| D | E | F |  
+---+---+---+  

||||
|------|---|---|
| A | B | C |
| D | E | F |

  
그러면 각 모니터에 대해 이렇게 호출합니다:
~~~js
const w = 1920;
const h = 1080;
const fullWidth = w * 3;
const fullHeight = h * 2;

// A
camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
// B
camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
// C
camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
// D
camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
// E
camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
// F
camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
~~~
모니터가 같은 크기이거나 그리드에 있어야 하는 이유는 없습니다.

### .updateProjectionMatrix() : undefined
카메라 투영 행렬을 업데이트합니다. 매개변수가 변경된 후에는 반드시 호출해야 합니다.

### .toJSON(meta : Object) : Object
meta -- 객체의 자손에 있는 텍스처나 이미지와 같은 메타데이터를 포함하는 객체입니다.  
카메라를 [three.js JSON 객체/장면 형식](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4)으로 변환합니다.

## Source
[src/cameras/PerspectiveCamera.js](https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js)