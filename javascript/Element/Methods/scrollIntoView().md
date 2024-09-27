# scrollIntoView()
Element 인터페이스의 ``scrollIntoView()`` 메서드는 ``scrollIntoView()``가 호출된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤합니다.  
  
## Syntax ( 문법 )
~~~js
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
~~~

### Parameters ( 매개변수 )
#### alignToTop ( Optional 선택사항 )
부울 값:
- 참이면 요소의 상단이 스크롤 가능한 조상의 표시 영역 상단에 정렬됩니다. scrollIntoViewOptions: {block: "start", inline: "nearest"}에 해당합니다. 기본값입니다.
- 거짓이면 요소의 하단이 스크롤 가능한 조상의 표시 영역 하단에 정렬됩니다. scrollIntoViewOptions: {block: "end", inline: "nearest"}에 해당합니다. 

#### scrollIntoViewOptions ( Optional 선택사항 - 실험적 )
다음 속성을 가진 객체:

##### behavior ( Optional 선택사항 )
스크롤이 즉시 실행되는지 또는 부드럽게 애니메이션이 실행되는지 여부를 결정합니다. 이 옵션은 다음 값 중 하나를 가져야 하는 문자열입니다.
- smooth: 스크롤이 부드럽게 애니메이션이 실행되어야 함
- instant: 스크롤이 단일 점프에서 즉시 실행되어야 함
- auto: 스크롤 동작은 scroll-behavior의 계산된 값에 따라 결정됨

##### block ( Optional 선택사항 )
수직 정렬을 정의합니다. ``start``, ``center``, ``end`` 또는 ``nearest`` 중 하나. 기본값은 ``start``입니다.

##### inline ( Optional 선택사항 )
수평 정렬을 정의합니다. ``start``, ``center``, ``end`` 또는 ``nearest`` 중 하나. 기본값은 ``nearest``입니다.

### Return value
없음(정의되지 않음).

## 예제
### scrollIntoView() 사용
~~~js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
~~~

### 상단/하단 정렬 제어
기본적으로 요소는 스크롤 가능한 조상의 상단(또는 하단) 가장자리에 맞춰집니다. 사용자 지정 간격을 정의하려면 scroll-margin-top 또는 scroll-margin-bottom을 사용합니다. 이는 페이지에 고정된 헤더가 있는 경우에 종종 유용합니다.

#### HTML
~~~html
<body>
    <header class="navbar">Navbar</header>
    <main class="content">
        <button id="go-to-bottom">Go to bottom</button>
        <button id="go-to-top">Go to top</button>
    </main>
</body>
~~~

#### CSS
~~~css
.navbar {
    height: 50px;
    position: sticky;
    top: 0;
    border-bottom: 1.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    height: 2000px;
    position: relative;
}
#go-to-bottom {
    position: absolute;
    top: 10px;
    /* 이것이 없으면 버튼은 스크롤 시 탐색 막대 하단이 아닌 페이지 상단에 정렬됩니다. */
    scroll-margin-top: 60px;
}
#go-to-top {
    position: absolute;
    bottom: 10px;
    scroll-margin-bottom: 0;
}
~~~

#### JavaScript
~~~js
const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
goToBottom.addEventListener("click", () => {
    goToTop.scrollIntoView({ behavior: "instant", block: "end" });
});
goToTop.addEventListener("click", () => {
    goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
});
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)