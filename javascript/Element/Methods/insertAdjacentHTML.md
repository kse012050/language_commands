# insertAdjacentHTML()  (insert -> 끼워 넣다 / Adjacent -> 인접한 HTML)
__insertAdjacentHTML()__ 메서드는 HTML or XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가 한다.  
이미 사용중인 element 는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element를 건드리지 않는다.  
(innerHtml과는 좀 다름). innerHtml보다 작업이 덜 드므로 빠르다.(덜 빠르다는거야 ,더 빠르다는거야)

## 구문 
~~~js
element.insertAdjacentHTML(position, text);
~~~
### position 항목
#### 'beforebegin'
element 앞에

#### 'afterbegin'
element 안에 가장 첫번째 child

#### 'beforeend'
element 안에 가장 마지막 child

#### 'afterend'
element 뒤에  
  
``text(인자)는 HTML 또는 XML로 해석될 수 있는 문자열이고(html code), (DOM) tree에 삽입할 수 있다.``

## position 의 예시
~~~html
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
~~~
> __참고__ : beforebegin , afterend position은 element의 부모가 존재해야 하고, node가 tree 안에 있어야 한다.

## 예시
~~~js
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

~~~
~~~html
<!-- 이 시점에서 새로운 구조는 다음과 같습니다. -->
<div id="one">one</div><div id="two">two</div>
~~~

[내용출처 MDN HTML 태그 추가](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)