# CanvasRenderingContext2D.stroke()
Canvas 2D API의 ``CanvasRenderingContext2D.stroke()`` 메서드는 현재 획 스타일로 현재 또는 주어진 경로를 획(윤곽선)합니다.  
  
획은 패스의 중앙에 정렬됩니다. 즉, 획의 절반은 안쪽에 그리고 절반은 바깥쪽에 그려집니다.  
  
획은 0이 아닌 굴곡 규칙을 사용하여 그려지며, 이는 경로 교차점이 여전히 채워진다는 것을 의미합니다.

## 문법 Syntax
~~~js
void ctx.stroke();
void ctx.stroke(path);
~~~

### 매개변수 Parameters 
#### path
stroke에 대한 Path2D 경로입니다.

### 예제 Examples
#### A simple stroked rectangle (단순한 스트로크 직사각형)
이 예제에서는 rect() 메서드를 사용하여 사각형을 만든 다음 stroke()를 사용하여 캔버스에 그립니다.

##### HTML
~~~html
<canvas id="canvas"></canvas>
~~~

##### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 10, 150, 100);
ctx.stroke();
~~~

##### Result
![stroke() 결과 이미지](images/stroke()01.png)

#### Re-stroking paths (다시 선 경로)
일반적으로 스트로크하려는 각각의 새 항목에 대해 [beginPath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)를 호출하려고 할 것입니다. 그렇지 않으면 이전 하위 경로가 현재 경로의 일부로 남아 있으며 ``stroke()`` 메서드를 호출할 때마다 스트로크됩니다. 그러나 어떤 경우에는 이것이 원하는 효과일 수 있습니다.

##### HTML
~~~HTML
<canvas id="canvas"></canvas>
~~~

##### JavaScript
이 코드는 첫 번째 경로를 세 번, 두 번째 경로를 두 번, 세 번째 경로를 한 번만 스트로크합니다.
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 첫 번째 하위 경로
ctx.lineWidth = 26;
ctx.strokeStyle = 'orange';
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// 두 번째 하위 경로
ctx.lineWidth = 14;
ctx.strokeStyle = 'green';
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// 세 번째 하위 경로
ctx.lineWidth = 4;
ctx.strokeStyle = 'pink';
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
~~~

##### Result
![stroke() 결과 이미지](images/stroke()02.png)

#### Stroking and filling (쓰다듬어 채우기)
획을 긋고 패스를 채우려면 이러한 작업을 수행하는 순서에 따라 결과가 결정됩니다. 이 예에서 왼쪽의 사각형은 채우기 위에 획이 그려져 있습니다. 오른쪽의 사각형은 획 상단에 채우기로 그려집니다.

##### HTML
~~~HTML
<canvas id="canvas"></canvas>
~~~

##### JavaScript
~~~js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 16;
ctx.strokeStyle = 'red';

// 채우기 위에 획
ctx.beginPath();
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// 획 위에 채우기
ctx.beginPath();
ctx.rect(175, 25, 100, 100);
ctx.stroke();
ctx.fill();
~~~

##### Result
![stroke() 결과 이미지](images/stroke()03.png)

[내용출처 MDN stroke() 선 그리기 함수](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)