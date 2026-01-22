# MathUtils
수학 관련 유틸리티 함수 모음입니다.

## Static Methods
### ceilPowerOfTwo( value : number ) : number
주어진 숫자보다 크거나 같은 가장 작은 2의 거듭제곱을 반환합니다.

__value__: POT를 찾을 값입니다.  
__반환값__: 주어진 숫자보다 크거나 같은 가장 작은 2의 거듭제곱입니다.  

### .clamp( value : number, min : number, max : number ) : number
주어진 값을 min과 max 사이로 제한합니다.

__value__: 제한할 값입니다.  
__min__: 최소값입니다.  
__max__: 최대값입니다.  
__반환값__: 제한된 값입니다.  

### .damp( x : number, y : number, lambda : number, dt : number ) : number
프레임 속도에 관계없이 움직임을 유지하기 위해 델타 시간을 사용하여 ``x``에서 ``y``까지 스프링처럼 부드럽게 보간합니다. 자세한 내용은 lerp를 사용한 프레임 속도 독립 감쇠를 참조하십시오.

__x__: 현재 지점입니다.  
__y__: 목표 지점입니다.  
__lambda__: 람다 값이 클수록 움직임이 더 급격해지고, 값이 작을수록 움직임이 더 완만해집니다.  
__dt__: 초 단위의 델타 시간입니다.  
__반환값__: 보간된 값.  

### .degToRad(degrees: number): number
도를 라디안으로 변환합니다.

__degrees__: 도 단위의 값입니다.  
__반환값__: 라디안으로 변환된 값.  

### .denormalize(value: number, array: TypedArray): number
주어진 값을 주어진 타입 배열에 따라 비정규화합니다.

__value__: 비정규화할 값입니다.  
__array__: 값의 데이터 타입을 정의하는 타입 배열입니다.  
__반환값__: [0,1] 범위의 비정규화된 (float) 값.  

### .euclideanModulo( n : number, m : number ) : number
주어진 매개변수의 유클리드 모듈로 값을 ( ( n % m ) + m ) % m으로 계산합니다.

__n__: 첫 번째 매개변수입니다.  
__m__: 두 번째 매개변수입니다.  
__반환값__: 유클리드 모듈로 값입니다.  

### .floorPowerOfTwo( value : number ) : number
주어진 숫자보다 작거나 같은 가장 큰 2의 거듭제곱을 반환합니다.  
  
__value__: POT를 찾을 값입니다.
__반환값__: 주어진 숫자보다 작거나 같은 가장 큰 2의 거듭제곱입니다.

### .generateUUID() : string
UUID(범용 고유 식별자)를 생성합니다.  
  
__반환값__: UUID입니다.  

### .inverseLerp( x : number, y : number, value : number ) : number
시작점과 끝점 사이에서 주어진 값의 닫힌 구간 ``[0, 1]`` 내 백분율을 반환합니다.  
  
__x__: 시작점  
__y__: 끝점  
__value__: 시작점과 끝점 사이의 값  
__반환값__: 보간 계수  

### .isPowerOfTwo( value : number ) : boolean
주어진 숫자가 2의 거듭제곱이면 ``true``를 반환합니다.  
  
__value__: 확인할 값  
__반환값__: 주어진 숫자가 2의 거듭제곱인지 여부  

### .lerp( x : number, y : number, t : number ) : number
주어진 구간을 기준으로 두 개의 알려진 점에서 선형 보간된 값을 반환합니다. ``t = 0``이면 ``x``를, ``t = 1``이면 ``y``를 반환합니다.  
  
__x__: 시작점  
__y__: 끝점  
__t__: 닫힌 구간 [0, 1] 내의 보간 계수입니다.  
__반환값__: 보간된 값  

### .mapLinear( x : number, a1 : number, a2 : number, b1 : number, b2 : number ) : number
주어진 값에 대해 범위 ``<a1, a2>``에서 범위 ``<b1, b2>``로 선형 매핑을 수행합니다.  
  
__x__: 매핑할 값입니다.  
__a1__: 범위 A의 최솟값입니다.  
__a2__: 범위 A의 최댓값입니다.  
__b1__: 범위 B의 최솟값입니다.  
__b2__: 범위 B의 최댓값입니다.  
__반환값__: 매핑된 값입니다.  

### .normalize( value : number, array : TypedArray ) : number
주어진 값을 주어진 타입 배열에 따라 정규화합니다.  
  
__value__: 정규화할 ``[0, 1]`` 범위의 부동 소수점 값입니다.  
__배열__: 값의 데이터 형식을 정의하는 형식화된 배열입니다.  
__반환값__: 정규화된 값  

### .pingpong( x : number, length : number ) : number
``0``과 지정된 ``길이`` 매개변수 사이를 번갈아 가며 값을 반환합니다.  
  
__x__: 핑퐁할 값  
__length__: 함수가 핑퐁할 양수 값, 기본값은 ``1``입니다.  
__반환값__: 번갈아 가며 변환된 값  

### .radToDeg( radians : number ) : number
라디안을 도로 변환합니다.  
  
__radians__: 라디안 값  
__반환값__: 도로 변환된 값  

### .randFloat( low : number, high : number ) : number
``<low, high>`` 범위에서 임의의 부동 소수점을 반환합니다.  
  
__low__: 하한값  
__high__: 상한값  
__반환값__: 임의의 부동 소수점  

### .randFloatSpread(range: number): number
``<-range/2, range/2>`` 범위에서 임의의 정수를 반환합니다.  
  
__range__: 값 범위를 정의합니다.  
__반환값__: 임의의 부동 소수점 숫자  

### .randInt(low: number, high: number): number
``<low, high>`` 범위에서 임의의 정수를 반환합니다.  
  
__low__: 하한값  
__high__: 상한값  
__반환값__: 임의의 정수  

### .seededRandom(s: number): number
``[0, 1]`` 범위의 결정론적 의사 난수 부동 소수점 숫자를 반환합니다.  
  
__s__: 정수 시드  
__반환값__: 임의의 부동 소수점 숫자  

### .setQuaternionFromProperEuler( q : Quaternion, a : number, b : number, c : number, order : 'XYX' | 'XZX' | 'YXY' | 'YZY' | 'ZXZ' | 'ZYZ' )
주어진 각도와 순서로 정의된 고유 오일러 각도에서 주어진 쿼터니언을 설정합니다.  
  
회전은 순서에 따라 축에 적용됩니다. 각도 ``a``만큼의 회전이 먼저 적용되고, 그 다음 각도 ``b``, 마지막으로 각도 ``c`` 순으로 적용됩니다.  
  
__q__: 설정할 쿼터니언입니다.  
__a__: 첫 번째 축에 적용되는 회전 각도(라디안)입니다.  
__b__: 두 번째 축에 적용되는 회전 각도(라디안)입니다.  
__c__: 세 번째 축에 적용되는 회전 각도입니다.  
__order__: 축 순서를 지정하는 문자열입니다.  

### .smoothstep( x : number, min : number, max : number ) : number
x=0과 x=1에서 1차 및 2차 미분값이 0인 smoothstep의 변형입니다.  
  
__x__: 최소값과 최대값 사이의 위치를 ​​기준으로 평가할 값입니다.  
__min__: 최소값입니다. min보다 작은 x 값은 모두 0입니다.  
__max__: 최대값입니다. max보다 큰 x 값은 모두 1입니다.  
__반환값__: 교대로 계산된 값입니다.  

### .smoothstep( x : number, min : number, max : number ) : number
``x``가 ``최소값``과 ``최대값`` 사이에서 이동한 비율을 나타내는 ``[0,1]`` 범위의 값을 반환합니다. 단, ``x``가 ``최소값``과 ``최대값``에 가까울수록 평활화 또는 속도가 느려집니다.  
  
자세한 내용은 [Smoothstep](https://en.wikipedia.org/wiki/Smoothstep)을 참조하십시오.  
  
__x__: 최소값과 최대값 사이의 위치를 ​​기준으로 평가할 값입니다.  
__min__: 최소값입니다. min보다 작은 x 값은 모두 0입니다.  
__max__: 최대값입니다. 최대값보다 큰 x 값은 모두 1이 됩니다.  
__반환값__: 교대로 계산된 값.  
  
## Source
[src/math/MathUtils.js](https://github.com/mrdoob/three.js/blob/master/src/math/MathUtils.js)