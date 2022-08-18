# getComputedStyle()  
간다하게 css 속성 값(value)를 가져온다

``Window.getComputedStyle()`` 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다. 이 속성값들은, 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값입니다. 개별 CSS속성 값은 객체를 통해 제공되는 API 또는 CSS 속성 이름을 사용해서 간단히 색인화해서 액세스할 수 있습니다.  

## 구문
~~~js
var style = window.getComputedStyle(element[, pseudoElt]);
~~~

### element
속성값을 얻으려하는 ``Element(태그)``

### pseudoElt (Optional)
일치시킬 의사요소(pseudo element)를 지정하는 문자열. 보통의 요소들에 대해서는 생략되거나 null이어야 함.

> __참고__: Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) 이전에는 pseudoElt 매개 변수가 필요했습니다. 다른 주요 브라우저에서는 pseudoElt 매개변수의 값이 null 인 경우에는 생략해도 됩니다. Gecko는 다른 브라우저의 동작과 일치하도록 변경되었습니다.

반환되는 ``style``은 요소의 스타일이 변경 될 때 자동으로 업데이트되는 실시간 [CSSStyleDeclaration (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) 객체입니다.

## 예제
이 예제에서는 간단한 ``<div>`` 요소에 CSS스타일을 적용하고, ``getComputedStyle()``를 사용해서 적용된 스타일값을 찾아낸 후에 ``<div>``의 본문으로 출력합니다.
~~~html
<p>Hello</p>
~~~
~~~css
p {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    line-height: 2;
    font-size: 2rem;
    font-family: sans-serif;
    background: purple;
    color: white;
    text-align: center;
}
~~~
~~~js
let para = document.querySelector('p');
let compStyles = window.getComputedStyle(para);
para.textContent = 'My computed font-size is ' + compStyles.getPropertyValue('font-size') + ',\nand my computed line-height is ' + compStyles.getPropertyValue('line-height') + '.';
~~~

### 결과
![getComputedStyle() 예제 결과 이미지](./images/getComputedStyle().PNG)

## 설명
- ``getComputedStyle()`` : css 읽기 전용
- ``style (dlt.style)`` : css 설정 전용

메소드의 호출에서 반환되는 객체의 자료형은 요소의 style (en-US) 속성에서 반환되는 객체와 동일한 [CSSStyleDeclaration (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)형입니다.  
  
첫 번째 인수는 요소여야합니다. #text 노드같은 비-요소 노드를 전달하면 오류가 발생합니다. Gecko 1.9.2 (Firefox 3.6 / Thunderbird 3.1 / Fennec 1.0)부터는, 반환되는 URL 값에는 url``("http://foo.com/bar.jpg")``과 같이 URL 문자열 주위에 따옴표가 있습니다.

### defaultView (이게 뭔데?)
온라인의 많은 코드 샘플중에서, ``getComputedStyle``은 ``document.defaultView``객체에서 사용됩니다만, 대개의 경우에는 ``getComputedStyle``은 ``window``객체에도 존재하므로 ``document.defaultView``객체에서 사용하는 패턴은 필요하지 않습니다. ``defaultView``패턴은 (1) window 스펙을 작성하고 싶지 않은 사람들과 (2) Java에서도 사용할 수있는 API를 만드는 것의 조합이었을 가능성이 큽니다. 그러나 defaultView의 메소드를 사용해야만하는 경우가 하나 있습니다. Firefox 3.6을 사용하여 프레임 스타일(framed styles)에 액세스하는 경우입니다.

## 의사요소 사용하기
getComputedStyle은 의사요소(pseudo-elements, ``::after``, ``::before``, ``::marker``, ``::line-marker``, spec참고)에서 스타일 정보를 가져올 수 있습니다.

~~~html
<style>
 h3::after {
   content: ' rocks!';
 }
</style>

<h3>generated content</h3>

<script>
  var h3       = document.querySelector('h3');
  var result   = getComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns ' rocks!'
</script>
~~~

## 참고
무슨 말인지 몰라서 정리 안했다  
다시 공부할 때 MDN 가서 확인하자

[내용출처 MDN CSS 속성 값 가져오기](https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle)