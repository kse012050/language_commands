# Element.scrollHeight
__``Element.scrollHeight``__ 읽기 전용 속성은 요소 콘텐츠의 총 높이를 나타내며, 바깥으로 넘쳐서 보이지 않는 콘텐츠도 포함합니다.  
  
``scrollHeight`` 값은 수직 스크롤바를 사용하지 않고 요소의 콘텐츠를 모두 나타낼 때 필요한 최소 높이의 값과 동일합니다. 높이 측정은 [``clientHeight``](https://developer.mozilla.org/ko/docs/Web/API/Element/clientHeight) 와 동일한 방법을 사용하여 요소의 안쪽 여백은 포함하고, 테두리와 바깥 여백, (존재하는 경우) 수평 스크롤바의 높이는 포함하지 않습니다. 또한 ``::before``, ``::after`` 등 의사 요소의 높이도 결과에 포함합니다. 요소의 콘텐츠를 수직 스크롤바 없이 모두 보일 수 있는 경우의 ``scrollHeight``는 ``clientHeight``와 동일합니다.  
  
> ``scrollHeight``의 반환 값은 정수로 반올림됩니다. 소수점을 포함한 값이 필요한 경우 [``Element.getBoundingClientRect()``](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) (en-US)를 사용하세요.

## 구문
~~~js
var intElemScrollHeight = element.scrollHeight;
~~~
intElemScrollHeight은 요소 ``scrollHeight``의 픽셀 값을 저장하는 정수형 변수입니다.

### 예제
![MDN scrollHeight Image](images/scrollHeightImg.PNG)

## 문제와 해결책
### 요소를 끝까지 스크롤했는지 판별하기
다음 등식이 참인 경우 요소를 끝까지 스크롤한 것입니다.
~~~js
element.scrollHeight - element.scrollTop === element.clientHeight
~~~

컨테이너가 스크롤 대신 오버플로된 자식을 노출하는 경우, 다음 검사로 컨테이너가 스크롤 가능한지 알아볼 수 있습니다.

~~~js
window.getComputedStyle(element).overflowY === 'visible'
window.getComputedStyle(element).overflowY !== 'hidden'
~~~

### 예제
별도의 HTML로 저장하겠습니다.

[내용출처 MDN Element.scrollHeight](https://developer.mozilla.org/ko/docs/Web/API/Element/scrollHeight)