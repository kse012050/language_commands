# CanvasRenderingContext2D: getImageData() method
Canvas 2D API의 [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) 메서드 ``getImageData()``는 캔버스의 지정된 부분에 대한 기본 픽셀 데이터를 나타내는 [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) 객체를 반환합니다.  
  
이 메서드는 캔버스의 변환 행렬의 영향을 받지 않습니다. 지정된 사각형이 캔버스 경계를 ​​벗어나는 경우, 반환된 ``ImageData`` 객체에서 캔버스 외부 픽셀은 투명한 검은색으로 표시됩니다.  
  
> 참고: putImageData() 메서드를 사용하여 이미지 데이터를 캔버스에 그릴 수 있습니다.  
  
getImageData() 및 캔버스 콘텐츠의 일반적인 조작에 대한 자세한 내용은 캔버스를 이용한 픽셀 조작에서 확인할 수 있습니다.

## Syntax
~~~js
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
~~~

### Parameters
#### sx
``ImageData``를 추출할 사각형의 왼쪽 위 모서리의 x축 좌표입니다.

#### sy
``ImageData``를 추출할 사각형의 왼쪽 위 모서리의 y축 좌표입니다.

#### sw
``ImageData``를 추출할 사각형의 너비입니다. 양수 값은 오른쪽, 음수 값은 왼쪽을 나타냅니다.

#### sh
``ImageData``를 추출할 사각형의 높이입니다. 양수 값은 아래쪽, 음수 값은 위쪽을 나타냅니다.

#### settings ( 선택 사항 )
다음 속성을 가진 객체입니다.
- ``colorSpace``: 이미지 데이터의 색 공간을 지정합니다. [sRGB 색 공간](https://en.wikipedia.org/wiki/SRGB)의 경우 ``"srgb"``로, [display-p3 색 공간](https://en.wikipedia.org/wiki/DCI-P3)의 경우 ``"display-p3"``로 설정할 수 있습니다.

### Return value
지정된 캔버스 사각형의 이미지 데이터를 포함하는 [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) 객체입니다. 사각형의 왼쪽 위 모서리 좌표는 ``(sx, sy)``이고, 아래쪽 모서리 좌표는 ``(sx + sw - 1, sy + sh - 1)``입니다.

## Exceptions
### IndexSizeError [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)
``sw`` 또는 ``sh``가 0인 경우 발생합니다.

### SecurityError [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)
캔버스에 문서 자체가 로드된 원본이 아닌 다른 원본에서 로드된 픽셀이 포함되어 있거나 포함될 수 있습니다. 이 상황에서 SecurityError [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)이 발생하는 것을 방지하려면 CORS를 설정하여 원본 이미지를 이러한 방식으로 사용할 수 있도록 하세요. [이미지 및 캔버스의 교차 원본 사용 허용을 참조하세요.](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/CORS_enabled_image)

## Examples
### 캔버스에서 이미지 데이터 가져오기
이 예제에서는 이미지를 그린 다음 ``getImageData()``를 사용하여 캔버스의 일부를 가져옵니다.  
  
``getImageData()``를 사용하여 ``(10, 20)``에서 시작하여 너비가 80이고 높이가 ``230``인 이미지 슬라이스를 추출합니다. 그런 다음 이 슬라이스를 세 번 그리면서 마지막 슬라이스의 아래쪽과 오른쪽에 슬라이스를 점진적으로 배치합니다.

#### HTML
~~~html
<canvas id="canvas" width="700" height="400"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "plumeria.jpg";
image.addEventListener("load", () => {
    ctx.drawImage(image, 0, 0, 233, 320);

    const imageData = ctx.getImageData(10, 20, 80, 230);
    ctx.putImageData(imageData, 260, 0);
    ctx.putImageData(imageData, 380, 50);
    ctx.putImageData(imageData, 500, 100);
});
~~~

#### Result
![getImageData() 결과 이미지](images/getImageData().PNG)

### 색 공간 변환
선택적인 ``colorSpace`` 설정을 사용하면 원하는 형식으로 이미지 데이터를 가져올 수 있습니다.

~~~js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// ImageData를 sRGB로 변환
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)