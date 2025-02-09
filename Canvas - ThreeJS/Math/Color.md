# Color
색상을 나타내는 클래스.  
  
Color 인스턴스는 선형 작업 색상 공간의 RGB 구성 요소로 표현되며, 기본적으로 ``LinearSRGBColorSpace``입니다. ``SRGBColorSpace``를 기존에 사용하는 입력(예: 16진수 및 CSS 문자열)은 자동으로 작업 색상 공간으로 변환됩니다.
~~~js
// SRGBColorSpace에서 LinearSRGBColorSpace로 자동 변환됨
const color = new THREE.Color().setHex( 0x112233 );
~~~
올바른 변환을 보장하기 위해 원본 색상 공간을 명시적으로 지정할 수 있습니다.

~~~js
// 이미 LinearSRGBColorSpace로 가정; 변환 없음
const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5 );

// SRGBColorSpace에서 LinearSRGBColorSpace로 명시적으로 변환
const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5, SRGBColorSpace );
~~~
THREE.ColorManagement가 비활성화된 경우 변환이 발생하지 않습니다. 자세한 내용은 색상 관리를 참조하세요.  
  
Color 인스턴스를 반복하면 해당 순서로 구성 요소(r, g, b)가 생성됩니다.

## Code Examples
Color는 다음 방법 중 하나로 초기화될 수 있습니다.
~~~js
//empty 생성자 - 기본 흰색
const color1 = new THREE.Color();

//16진수 색상(권장)
const color2 = new THREE.Color( 0xff0000 );

//RGB 문자열
const color3 = new THREE.Color("rgb(255, 0, 0)");
const color4 = new THREE.Color("rgb(100%, 0%, 0%)");

//X11 색상 이름 - 140개의 모든 색상 이름이 지원됩니다.
//이름에 CamelCase가 없는 점에 유의
const color5 = new THREE.Color( 'skyblue' );

//HSL 문자열
const color6 = new THREE.Color("hsl(0, 100%, 50%)");

//0과 1 사이의 RGB 값을 구분합니다.
const color7 = new THREE.Color( 1, 0, 0 );
~~~

## Constructor
### Color( r : Color_Hex_or_String, g : Float, b : Float )
r - (선택 사항) 인수 ``g``와 ``b``가 정의된 경우 색상의 빨간색 구성 요소입니다. 정의되지 않은 경우 ``16진수 3중항``(권장), CSS 스타일 문자열 또는 다른 ``Color`` 인스턴스가 될 수 있습니다.  
g - (선택 사항) 정의된 경우 색상의 녹색 구성 요소입니다.  
b - (선택 사항) 정의된 경우 색상의 파란색 구성 요소입니다.  

three.js에서 색상을 지정하는 표준 방법은 ``16진수 3중항``을 사용하는 것이며, 이 방법은 나머지 설명서 전체에서 사용됩니다.  
  
모든 인수가 정의된 경우 r은 빨간색 구성 요소, g는 녹색 구성 요소, b는 색상의 파란색 구성 요소입니다.  
r만 정의된 경우:  
- 색상을 나타내는 ``16진수 3중항``일 수 있습니다(권장).
- 다른 Color 인스턴스일 수 있습니다.
- CSS 스타일 문자열일 수 있습니다. 예:
    - 'rgb(250, 0,0)'
    - 'rgb(100%,0%,0%)'
    - 'hsl(0, 100%, 50%)'
    - '#ff0000'
    - '#f00'
    - 'red'

## Properties
### .isColor : Boolean
지정된 객체가 Color 유형인지 확인하는 읽기 전용 플래그입니다.

### .r : Float
``0.0``과 ``1.0`` 사이의 빨간색 채널 값입니다. 기본값은 ``1``입니다.

### .g : Float
``0.0``과 ``1.0`` 사이의 녹색 채널 값입니다. 기본값은 ``1``입니다.

### .b : Float
``0.0``과 ``1.0`` 사이의 파란색 채널 값입니다. 기본값은 ``1``입니다.

## Methods
### .add(color:Color): this
``color``의 RGB 값을 이 색상의 RGB 값에 더합니다.

### .addColors(color1:Color, color2:Color): this
이 색상의 RGB 값을 ``color1``과 ``color2``의 RGB 값의 합으로 설정합니다.

### .addScalar(s:Number): this
``s``를 이 색상의 RGB 값에 더합니다.

### .applyMatrix3(m:Matrix3): this
변환 ``m``을 이 색상의 RGB 구성 요소에 적용합니다.

### .clone(): Color
이 색상과 동일한 ``r``, ``g``, ``b`` 값을 가진 새 Color를 반환합니다.

### .copy(color:Color): this
color의 ``r``, ``g``, ``b`` 매개변수를 이 색상으로 복사합니다.

### .convertLinearToSRGB(): this
이 색상을 ``LinearSRGBColorSpace``에서 ``SRGBColorSpace``로 변환합니다.

### .convertSRGBToLinear() : this
이 색상을 ``SRGBColorSpace``에서 ``LinearSRGBColorSpace``로 변환합니다.

### .copyLinearToSRGB(color : Color) : this
``color`` — 복사할 색상입니다.  
주어진 색상을 이 색상으로 복사한 다음, 이 색상을 ``LinearSRGBColorSpace``에서 ``SRGBColorSpace``로 변환합니다.

### .copySRGBToLinear(color : Color) : this
``color`` — 복사할 색상입니다.  
주어진 색상을 이 색상으로 복사한 다음, 이 색상을 ``SRGBColorSpace``에서 ``LinearSRGBColorSpace``로 변환합니다.

### .equals(color : Color) : Boolean
``color``의 RGB 값을 이 객체의 값과 비교합니다. 같으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.

### .fromArray(array : Array, offset : Integer) : this
``array`` - [``r``, ``g``, ``b``] 형식의 float ``배열``입니다.  
``offset`` - 배열로의 선택적 오프셋입니다.  
  
[``r``, ``g``, ``b``]와 같이 포맷된 배열을 기반으로 이 색상의 ``구성 요소``를 설정합니다.

### .fromBufferAttribute( attribute : BufferAttribute, index : Integer ) : this
attribute - 소스 속성.  
index: 속성의 인덱스.  
  
속성에서 이 색상의 ``구성 요소``를 설정합니다.

### .getHex(색상공간: 문자열 = SRGBColorSpace): 정수
이 색상의 16진수 값을 반환합니다.

### .getHexString(색상공간: 문자열 = SRGBColorSpace): 문자열
이 색상의 16진수 값을 문자열(예: 'FFFFFF')로 반환합니다.

### .getHSL(대상: 객체, 색상공간: 문자열 = LinearSRGBColorSpace): 객체
target — 결과가 이 객체에 복사됩니다. 객체에 h, s, l 키를 추가합니다(아직 없는 경우).  
  
이 Color의 ``r``, ``g``, ``b`` 값을 ``HSL`` 포맷으로 변환하고 다음 형태의 객체를 반환합니다.
~~~js
{
	h: 0,
	s: 0,
	l: 0
}
~~~
### .getRGB(target: Color, colorSpace: string = LinearSRGBColorSpace): Color
target — 결과가 이 객체에 복사됩니다.

이 색상의 RGB 값을 ``Color``의 인스턴스로 반환합니다.

### .getStyle(colorSpace: string = SRGBColorSpace): String
이 색상의 값을 CSS 스타일 문자열로 반환합니다. 예: ``rgb(255,0,0)``.

### .lerp(color: Color, alpha: Float): this
color - 수렴할 색상입니다.  
alpha - 닫힌 구간 ``[0, 1]``의 보간 계수입니다.  
  
이 색상의 RGB 값을 전달된 인수의 RGB 값으로 선형 보간합니다. alpha 인수는 두 색상 간의 비율로 생각할 수 있으며, 여기서 ``0.0``은 이 색상이고 ``1.0``은 첫 번째 인수입니다.

### .lerpColors(color1: Color, color2: Color, alpha: Float): this
color1 - 시작 ``Color``.  
color2 - 보간할 ``Color``.  
alpha - 보간 계수, 일반적으로 닫힌 구간 ``[0, 1]``.  
  
이 색상을 ``color1``과 ``color2 ``사이에서 선형 보간된 색상으로 설정합니다. 여기서 alpha는 두 색상을 연결하는 선을 따라 퍼센트 거리입니다. alpha = 0은 ``color1``이고 alpha = 1은 ``color2``입니다.

### .lerpHSL(color: Color, alpha: Float): this
color - 수렴할 색상.  
alpha - 닫힌 구간 ``[0, 1]``의 보간 계수.  
  
이 색상의 HSL 값을 전달된 인수의 HSL 값에 선형 보간합니다. 한 색상에서 다른 색상으로 직접 보간하지 않고 두 색상 사이의 모든 색조를 거쳐 보간한다는 점에서 기존 ``.lerp``와 다릅니다. 알파 인수는 두 색상 간의 비율로 생각할 수 있는데, 여기서 0.0은 이 색상이고 1.0은 첫 번째 인수입니다.

### .multiply ( color : Color ) : this
이 색상의 RGB 값에 주어진 ``색상``의 RGB 값을 곱합니다.

### .multiplyScalar ( s : Number ) : this
이 색상의 RGB 값에 ``s``를 곱합니다.

### .offsetHSL ( h : Float, s : Float, l : Float ) : this
주어진 ``h``, ``s``, ``l``을 이 색상의 값에 더합니다. 내부적으로 이것은 색상의 ``r``, ``g``, ``b`` 값을 HSL로 변환하고, ``h``, ``s``, ``l``을 더한 다음, 색상을 다시 RGB로 변환합니다.

### .set ( r : Color_Hex_or_String, g : Float, b : Float ) : this
r - (선택 사항) 인수 ``g``와 ``b``가 정의된 경우 색상의 빨간색 구성 요소입니다. 정의되지 않은 경우 ``16진수 삼중항``(권장), CSS 스타일 문자열 또는 다른 ``Color`` 인스턴스가 될 수 있습니다.  
g - (선택 사항) 정의된 경우 색상의 녹색 구성 요소입니다.  
b - (선택 사항) 정의된 경우 색상의 파란색 구성 요소입니다.  

가능한 인수에 대한 자세한 내용은 위의 생성자를 참조하세요. 입력 유형에 따라 ``.copy``, ``.setStyle``, ``.setRGB`` 또는 ``.setHex``에 위임합니다.

### .setFromVector3 ( vector : Vector3 ) : this
지정된 ``벡터``의 x, y 및 z 구성 요소에서 이 색상의 ``r``, ``g`` 및 ``b`` 구성 요소를 설정합니다.

### .setHex ( hex : Integer, colorSpace : string = SRGBColorSpace ) : this
hex — ``16진수 삼중항`` 형식입니다.  
  
16진수 값에서 이 색상을 설정합니다.

### .setHSL(h: Float, s: Float, l: Float, colorSpace: string = LinearSRGBColorSpace): this
h — ``0.0``~``1.0`` 사이의 색조 값  
s — ``0.0``~``1.0`` 사이의 채도 값  
l — ``0.0``~``1.0`` 사이의 명도 값  
  
HSL 값에서 색상을 설정합니다.

### .setRGB(r: Float, g: Float, b: Float, colorSpace: string = LinearSRGBColorSpace): this
r — ``0.0``~``1.0`` 사이의 빨간색 채널 값  
g — ``0.0``~``1.0`` 사이의 녹색 채널 값  
b — ``0.0``~``1.0`` 사이의 파란색 채널 값  
  
RGB 값에서 이 색상을 설정합니다.

### .setScalar(scalar: Float): this
scalar — ``0.0``~``1.0`` 사이의 값  
  
세 가지 색상 구성 요소를 모두 값 ``스칼라``로 설정합니다.

### .setStyle(style: String, colorSpace: string = SRGBColorSpace): this
style — CSS 스타일 문자열로 색상입니다.  
  
CSS 스타일 문자열에서 이 색상을 설정합니다. 예를 들어, "rgb(250, 0,0)", "rgb(100%, 0%, 0%)", "hsl(0, 100%, 50%)", "#ff0000", "#f00" 또는 "red"(또는 모든 ``X11 색상 이름`` - 모든 140개 색상 이름이 지원됨)입니다.  
"rgba(255, 0, 0, 0.5)" 및 "hsla(0, 100%, 50%, 0.5)"와 같은 반투명 색상도 허용되지만 알파 채널 좌표는 삭제됩니다.  
  
X11 색상 이름의 경우 Dark Orange와 같은 여러 단어는 문자열 'darkorange'가 됩니다.

### .setColorName(style: String, colorSpace: string = SRGBColorSpace): this
style — 색상 이름(``X11 색상 이름에서``).  
  
색상 이름에서 이 색상을 설정합니다. 다른 CSS 스타일 형식이 필요하지 않은 경우 ``.setStyle`` 메서드보다 빠릅니다.  
  
편의상 이름 목록은 Color.NAMES에 해시로 노출됩니다.
~~~js
Color.NAMES.aliceblue // returns 0xF0F8FF
~~~
### .sub(color:Color): this
지정된 색상의 RGB 구성 요소를 이 색상의 RGB 구성 요소에서 뺍니다. 음수 구성 요소가 되면 해당 구성 요소는 0으로 설정됩니다.

### .toArray(array:Array, offset:Integer):Array
array - 색상을 저장할 선택적 배열입니다.  
offset - 배열로의 선택적 오프셋입니다.  
  
[r, g, b] 형식의 배열을 반환합니다.

### .toJSON(): Number
이 메서드는 Color의 직렬화 결과를 정의합니다. 색상을 16진수 값으로 반환합니다.

## Source
[src/math/Color.js](https://github.com/mrdoob/three.js/blob/master/src/math/Color.js)

[내용출처 threejs 공식 사이트 Color](https://threejs.org/docs/#api/en/math/Color)