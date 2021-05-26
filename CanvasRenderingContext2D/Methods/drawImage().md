# CanvasRenderingContext2D.drawImage()
Canvas 2D API의 __``CanvasRenderingContext2D.drawImage ()``__ 메서드는 캔버스에 이미지를 그리는 다양한 방법을 제공합니다.

## Syntax ( 문법 )
~~~js
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
~~~

### Parameters ( 매개변수 )

#### image
컨텍스트에 그릴 요소입니다. 사양은 모든 캔버스 이미지 소스 (CanvasImageSource), 특히 CSSImageValue, HTMLImageElement, SVGImageElement, HTMLVideoElement, HTMLCanvasElement, ImageBitmap 또는 OffscreenCanvas를 허용합니다.

#### sx ( Optional : 선택 과목 )
대상 컨텍스트에 그릴 소스 이미지의 하위 직사각형의 __왼쪽 위 모서리에 대한 x 축 좌표__ 입니다. 이 인수는 3 또는 5 인수 구문에 포함되지 않습니다.

#### sy ( Optional : 선택 과목 )
대상 컨텍스트에 그릴 소스 이미지의 하위 사각형 __왼쪽 상단 모서리의 y 축 좌표__ 입니다. 이 인수는 3 또는 5 인수 구문에 포함되지 않습니다.

#### sWidth ( Optional : 선택 과목 )
대상 컨텍스트에 그릴 소스 이미지의 하위 __직사각형 너비__ 입니다. 지정하지 않으면 sx 및 sy로 지정된 좌표에서 이미지의 오른쪽 하단 모서리까지 전체 사각형이 사용됩니다. 이 인수는 3 또는 5 인수 구문에 포함되지 않습니다.

#### sHeight ( Optional : 선택 과목 )
대상 컨텍스트에 그릴 소스 이미지의 하위 __직사각형 높이__ 입니다. 이 인수는 3 또는 5 인수 구문에 포함되지 않습니다.

#### dx
소스 이미지의 왼쪽 위 모서리를 배치 할 대상 __캔버스의 x 축 좌표__ 입니다.

#### dy
소스 이미지의 왼쪽 위 모서리를 배치 할 대상 __캔버스의 y 축 좌표__ 입니다.

#### dWidth
대상 캔버스에 이미지를 그릴 너비입니다. 이렇게하면 그려진 이미지의 크기를 조정할 수 있습니다. 지정하지 않으면 이미지를 그릴 때 너비가 조정되지 않습니다. 이 인수는 3 인수 구문에 포함되지 않습니다.

#### dHeight
대상 캔버스에 이미지를 그릴 높이입니다. 이렇게하면 그려진 이미지의 크기를 조정할 수 있습니다. 지정하지 않으면 이미지를 그릴 때 높이가 조정되지 않습니다. 이 인수는 3 인수 구문에 포함되지 않습니다.

### Exceptions thrown ( throw 된 예외 )

#### INDEX_SIZE_ERR
캔버스 또는 소스 직사각형 너비 또는 높이가 0 인 경우.

#### INVALID_STATE_ERR
이미지에 이미지 데이터가 없습니다.

#### TYPE_MISMATCH_ERR
지정된 소스 요소가 지원되지 않습니다.

#### NS_ERROR_NOT_AVAILABLE
이미지가 아직로드되지 않았습니다. .complete === true 및 .
onload를 사용하여 언제 준비되었는지 확인합니다.

## Examples ( 예제 )
### Drawing an image to the canvas ( 캔버스에 이미지 그리기 )
이 예제는 ``drawImage()`` 메서드를 사용하여 캔버스에 이미지를 그립니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
<div style="display:none;">
  <img id="source"
       src="https://mdn.mozillademos.org/files/5397/rhino.jpg"
       width="300" height="227">
</div>
~~~

#### JavaScript
소스 이미지는 너비 104, 높이 124의 좌표 (33, 71)에서 가져옵니다. 캔버스에 (21, 20)에서 그려집니다. 여기서 너비는 87이고 높이는 104.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

image.addEventListener('load', e => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
~~~

#### Result
![drawImage() 결과 이미지 01](images/drawImage()01.PNG)

### Understanding source element size ( 소스 요소 크기 이해 )
``drawImage()`` 메서드는 그릴 때 CSS 픽셀에서 소스 요소의 고유 크기를 사용합니다.

예를 들어 ``Image``를로드하고 생성자에서 선택적 크기 매개 변수를 지정하는 경우 생성 된 인스턴스의 ``naturalWidth`` 및 ``naturalHeight`` 속성을 사용하여 ``element.width`` 및 element가 아닌 자르기 및 크기 조정 영역과 같은 항목을 올바르게 계산해야합니다. 신장. 요소가 ``<video>`` 요소 인 경우 ``videoWidth`` 및 ``videoHeight``도 마찬가지입니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image(60, 45); // 이미지에 선택적 크기 사용
image.onload = drawImageActualSize; //이미지가로드되면 그리기

// CSS 픽셀에서 고유 크기 300x227의 이미지로드
image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

function drawImageActualSize() {
  // 캔버스 요소에 CSS 픽셀의 이미지 고유 크기 사용
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // 60x45의 맞춤 크기를 무시하고 이미지를 300x227로 그립니다.
  // 생성자에 주어진
  ctx.drawImage(this, 0, 0);

  // 맞춤 크기를 사용하려면 배율 매개 변수를 지정해야합니다.
  // 요소의 너비 및 높이 속성 사용-하나를 그릴 수 있습니다.
  // 모서리 상단 :
  ctx.drawImage(this, 0, 0, this.width, this.height);
}
~~~

#### Result
![drawImage() 결과 이미지 02](images/drawImage()02.PNG)

[내용출처 MDN drawImage() 캔버스에 img 그리기](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)