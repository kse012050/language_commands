# CanvasRenderingContext2D: font property
Canvas 2D API의 ``CanvasRenderingContext2D.font`` 속성은 텍스트를 그릴 때 사용할 현재 텍스트 스타일을 지정합니다. 이 문자열은 CSS 글꼴 지정자와 동일한 구문을 사용합니다.

## Value
CSS 글꼴 값으로 구문 분석된 문자열입니다. 기본 글꼴은 10px sans-serif입니다.

## Examples
### 사용자 정의 글꼴 사용
이 예제에서는 ``font`` 속성을 사용하여 사용자 정의 글꼴 굵기, 크기 및 글꼴 종류를 지정합니다.

#### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

#### JavaScript
~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
~~~

#### Result
[예제 확인하기](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font)

### CSS Font Loading API를 사용하여 글꼴 로드하기
``FontFace`` API를 사용하면 캔버스에서 글꼴을 사용하기 전에 명시적으로 로드할 수 있습니다.

~~~js
let f = new FontFace("test", "url(x)");

f.load().then(() => {
    // 캔버스 컨텍스트에서 글꼴 사용 준비 완료
});
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font)