# Path ( 길 )
2D 경로 표현. 이 클래스는 2D Canvas API와 유사한 2D 모양의 경로와 윤곽을 만드는 방법을 제공합니다.

## Code Example
~~~js
const path = new THREE.Path();

path.lineTo( 0, 0.8 );
path.quadraticCurveTo( 0, 1, 0.2, 1 );
path.lineTo( 1, 1 );

const points = path.getPoints();

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial( { color: 0xffffff } );

const line = new THREE.Line( geometry, material );
scene.add( line );
~~~

## Constructor
### Path( points : Array )
points -- (선택 사항) ``Vector2`` 배열.  
  
points에서 Path를 만듭니다. 첫 번째 point는 오프셋을 정의한 다음 연속된 point가 ``LineCurves``로 ``curves`` 배열에 추가됩니다.  
  
point가 지정되지 않으면 빈 경로가 생성되고 ``.currentPoint``가 원점으로 설정됩니다.

## Properties
일반적인 속성은 기본 CurvePath 클래스를 참조하세요.

### .currentPoint : Vector2
경로의 현재 오프셋입니다. 추가된 모든 새 ``Curve``는 여기서 시작됩니다.

## Methods
일반적인 메서드는 기본 CurvePath 클래스를 참조하세요.

### .absarc ( x : Float, y : Float, radius : Float, startAngle : Float, endAngle : Float, clock32 : Boolean ) : this
x, y -- 호의 절대 중심.  
radius -- 호의 반지름.  
startAngle -- 라디안 단위의 시작 각도.  
endAngle -- 라디안 단위의 끝 각도.  
clock32 -- 호를 시계 방향으로 스윕합니다. 기본값은 ``false``입니다.  
  
경로에 절대 위치가 지정된 EllipseCurve를 추가합니다.  
  
### .absellipse ( x : Float, y : Float, xRadius : Float, yRadius : Float, startAngle : Float, endAngle : Float, clock32 : Boolean, rotation : Float ) : this
x, y -- 타원의 절대 중심입니다.  
xRadius -- x축에서 타원의 반지름입니다.  
yRadius -- y축에서 타원의 반지름입니다.  
startAngle -- 라디안 단위의 시작 각도입니다.  
endAngle -- 라디안 단위의 끝 각도입니다.  
clock32 -- 타원을 시계 방향으로 스윕합니다. 기본값은 false입니다.  
rotation -- 양의 X축에서 반시계 방향으로 타원의 회전 각도입니다. 선택 사항이며 기본값은 ``0``입니다.  
  
경로에 절대적으로 배치된 EllipseCurve를 추가합니다.

### .arc ( x : Float, y : Float, radius : Float, startAngle : Float, endAngle : Float, clockwise : Boolean ) : this
x, y -- 마지막 호출에서 오프셋된 호의 중심  
radius -- 호의 반지름  
startAngle -- 라디안 단위의 시작 각도  
endAngle -- 라디안 단위의 종료 각도  
clockwork -- 호를 시계 방향으로 스윕합니다. 기본값은 ``false``입니다.  
  
``.currentPoint``를 기준으로 배치된 ``EllipseCurve``를 경로에 추가합니다.