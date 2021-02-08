# HTMLCanvasElement.getContext()
__``HTMLCanvasElement.getContext()``__ 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다. 컨텍스트 식별자가 지원되지 않을 경우 [``null``]()을 반환합니다.  
  
동일한 캔버스 엘리먼트에서 나중에 이 메소드를 호출하면 동일한 ``contextType`` 인자와 함께 메소드가 마지막으로 호출되었을 때 반환된 것과 같이 동일한 드로잉 컨텍스트 인스턴스를 반환합니다. 다른 드로잉 컨텍스트 객체를 얻으려면 다른 ``contextType``을 전달하거나 다른 캔버스 엘리먼트에서 메소드를 호출해야 합니다.

## 구문

~~~js
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
~~~

### 파라미터

#### contextType
캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 [``DOMString``](https://developer.mozilla.org/ko/docs/Web/API/DOMString) 입니다. 가능한 값은 다음과 같습니다.
- ``"2d"``, 2차원 랜더링 컨텍스트를 나타내는 [CanvasRenderingContext2D](https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D) 객체를 생성하게 합니다.
- ``"webgl"`` (또는 ``"experimental-webgl"``), 3차원 랜더링 컨텍스트를 나타내는 [``WebGLRenderingContext``](https://developer.mozilla.org/ko/docs/Web/API/WebGLRenderingContext) 객체를 생성합니다. 이 컨텍스트는 [WebGL](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API) 버전 1(OpenGL ES 2.0)을 구현하는 브라우저에서만 사용가능합니다.
- ``"webgl2``, 3차원 랜더링 컨텍스트를 나타내는 [``WebGL2RenderingContext``](https://developer.mozilla.org/ko/docs/Web/API/WebGL2RenderingContext) 객체를 생성합니다. 이 컨텍스트는 [WebGL](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API) 버전 2(OpenGL ES 3.0)을 구현하는 브라우저에서만 사용가능합니다.
- ``"bitmaprenderer"``. 캔버스의 컨텐츠를 주어진 [``ImageBitmap``](https://developer.mozilla.org/ko/docs/Web/API/ImageBitmap)으로 대체하기위한 기능만을 제공하는 [``ImageBitmapRenderingContext``](https://developer.mozilla.org/ko/docs/Web/API/ImageBitmap) 를 생성합니다.  
  
> __노트 :__ 식별자 ``"experimental-webgl"`` 은 WebGL의 새로운 구현에서 사용됩니다. 이러한 구현은 테스트 스위트 적합성을 아직 만족하지 못하며, 플랫폼 상의 그래픽 드라이버도 아직 불안정합니다. [Khronos Group](https://www.khronos.org/) 은 특정 [적합성 규칙](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt) 에 따라 WebGL 구현을 인증합니다.

#### contextAttributes
랜더링 컨텍스트를 생성할 떄 몇 가지 컨텍스트 속성을 사용할 수 있습니다. 예를 들면
~~~js
const gl = canvas.getContext('webgl',{
    antialias : false,
    depth: false
})
~~~

2d 컨텍스트 속성 :
- __``alpha``__ : 캔버스가 알파 채널을 포함하는지를나타내는 불리언입니다. ``false`` 로 설정할 경우,브라우저는 이제 배경이 항상 투명하다는 것을 알기 때문에투명한 컨텐츠나 이미지를 그리는 속도를 높일 수 있습니다.
- (Gecko 전용) __``willReadFrequently``__ : 많은 다시읽기 작업이 계획되어 있는지 여부를 나타내는 불리언입니다.이는 소프트웨어(하드웨어 가속 대신) 2D 캔버스의 사용을강제하며 [``getImageData()``]() 호출이 빈번할 때메모리를 절약할 수 있습니다. 이 옵션은 ``gfx.canvaswillReadFrequently.enable`` 플래그가 ``true``(기본값이며, B2G/Firefox OS에만 해당)설정되었을 경우에만사용가능합니다.
- (Bink only) __``storage``__ : 어떤 스토리지가사용되었는지를 나타내는 문자열입니다 (기본값은"persistent")  
  
WebGL 컨텍스트 속성 :
- __alpha__ : 캔버스가 알파 버퍼를 포함하는지 여부를 나타내는 불리언입니다.

### 예시
다음 ``<canvas>`` 엘리먼트를 고려해볼 때
~~~html
<canvas id="canvas" width="300" height="300"></canvas>
~~~
다음 코드를 사용해 캔버스의 ``2d`` 컨텍스트를 얻을 수 있습니다.
~~~js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log(ctx);   // CanvasRenderingContext2D { ... }
~~~
이제 캔버스에 대한 [2D 랜더링 컨텍스트](https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D) 를 갖고 있으며 이 안에 그릴 수 있습니다.

[내용출처 MDN getContext() 아직 작성하지 않은 내용은 사용할 때 정리할 것!](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)