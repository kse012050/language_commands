# CanvasRenderingContext2D.arc()
Canvas 2D API의 __``CanvasRenderingContext2D.arc()``__ 메서드는 현재 하위 경로에 원호를 추가합니다.

## Syntax
~~~js
void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
~~~

``arc()`` 메서드는 반경 반경으로` ``(x, y)``를 중심으로하는 원호를 만듭니다. 경로는 ``startAngle``에서 시작하고 ``endAngle``에서 끝나며 시계 반대 방향으로 지정된 방향으로 이동합니다 (기본값은 시계 방향).

### Parameters

#### x
호 중심의 수평 좌표입니다.

#### y
호 중심의 수직 좌표입니다.
#### radius
호의 반경. 긍정적이어야합니다.

#### startAngle
양의 x 축에서 측정 한 호가 라디안으로 시작하는 각도입니다.

#### endAngle
양의 x 축에서 측정 한 호가 라디안으로 끝나는 각도입니다.
#### anticlockwise -> Optional
선택적 __Boolean__ 입니다. 참이면 시작 각도와 끝 각도 사이에 시계 반대 방향으로 호를 그립니다. 기본값은 false (시계 방향)입니다.

## Examples

### Drawing a full circle (완전한 원 그리기)
이 예제는 ``arc()`` 메서드를 사용하여 완전한 원을 그립니다.

#### HTML
~~~html
<canvas></canvas>
~~~

#### JavaScript
호에는 x 좌표 100, y 좌표 75, 반지름 50이 지정됩니다. 완전한 원을 만들기 위해 호는 0라디안 (0°) 각도에서 시작하여 다음 각도에서 끝납니다. 2π 라디안 (360°).
~~~js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
~~~

#### Result
![arc() 결과 이미지 01](images/arc()01.PNG)

### Different shapes demonstrated (시연 된 다양한 모양)
이 예제는 ``arc()``로 가능한 것을 보여주기 위해 다양한 모양을 그립니다.

~~~js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 도형 그리기
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x             = 25 + j * 50;                 // x 좌표
    let y             = 25 + i * 50;                 // y 좌표
    let radius        = 20;                          // 아크 반경
    let startAngle    = 0;                           // 원의 시작점
    let endAngle      = Math.PI + (Math.PI * j) / 2; // 원의 끝점
    let anticlockwise = i % 2 == 1;                  // 시계 반대 방향으로 그리기

    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
~~~

#### Result
![arc() 결과 이미지 01](images/arc()02.PNG)

[내용출처 MDN arc()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)