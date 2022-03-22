# Element.clientHeight
``읽기 전용 속성인`` __``Element.clientHeight은``__ 엘리먼트의 내부 높이를 픽셀로 반환합니다. 이 내부 높이라는 것은 __내부 여백(padding)을 포함하지만__, 수평 스크롤바의 높이, 경계선, 또는 외부 여백(margin)은 포함하지 않습니다.

``clientHeight는 CSS상의 높이 + CSS상의 내부 여백 - 수평 스크롤바의 높이(존재하는 경우에만)만 `` 계산됩니다.

> __참고__ : 이 속성은 값을 정수로 반올립합니다. 분수 값이 필요한 경우 [element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

## 구문
~~~js
var h = element.clientHeight;
~~~
``h는``엘리먼트의 높이를 나타내는 픽센 단위의 integer 입니다.

[내용 출처 MDN element.clientHeight](https://developer.mozilla.org/ko/docs/Web/API/Element/clientHeight)