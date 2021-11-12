# Window.sessionStorage
__``sessionStorage``__ 읽기 전용 속성은 현재 출처 세션의 Storage 객체에 접근합니다. ``sessionStorage``는 ``localStorage`` 와 비슷하지만, ``localStorage``의 데이터는 __만료되지 않고__ , ``sessionStorage`` 의 __데이터는 페이지 세션이 끝날 때 제거되는 차이가 있습니다.__

- 페이지 세션은 브라우저가 열려있는 한 새로고침과 페이지 복구를 거쳐도 남아있습니다.
- __페이지를 새로운 탭이나 창에서 열면, 세션 쿠키의 동작과는 다르게 최상위 브라우징 맥락의 값을 가진 새로운 세션을 생성합니다.__
- 같은 URL을 다수의 탭/창에서 열면 각각의 탭/창에 대해 새로운 sessionStorage를 생성합니다.
- 탭/창을 닫으면 세션이 끝나고 sessionStorage 안의 객체를 초기화합니다.  

``sessionStorage``에 저장한 자료는 페이지 __프로토콜별로 구분__ 합니다. 특히 [HTTP](http://example.com)로 방문한 페이지에서 저장한 데이터는 같은 페이지의 [HTTPS](https://example.com)와는 다른 ``sessionStorage`` 에 저장됩니다.  
  
키와 값은 항상 각 문자에 2바이트를 할당하는 UTF-16 DOMString의 형태로 저장합니다. 객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다.

## 구문
~~~js
    myStorage = window.sessionStorage;
~~~

### 값
현재 출처의 세션 저장 공간에 접근할 수 있는 Storage 객체.

### 예외
#### SecurityError ( 보안 에러 )
요청이 정책의 결정을 위반했거나, 출처가 유효한 [스킴/호스트/포트 튜플](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy#%EC%B6%9C%EC%B2%98%EC%9D%98_%EC%A0%95%EC%9D%98)이 아닌 경우. 유효하지 않은 튜플은 출처가 file:이나 data: 스킴을 사용했을 때 발생할 수 있습니다. 예외의 예를 들자면 사용자가 특정 출처의 지속성 데이터를 거부하도록 브라우저를 설정하는 경우가 있습니다.

## 예제
아래 코드는 현재 출처의 세션 Storage 객체에 접근한 후, Storage.setItem()을 사용해 항목 하나를 추가합니다.
~~~js
    sessionStorage.setItem('myCat', 'Tom');
~~~
다음 예제는 텍스트 필드의 문장을 자동 저장하여 브라우저가 의도치 않게 재시작 되었을 경우 자동으로 텍스트 필드의 내용을 저장된 문장으로 복구하여 작성한 내용이 사라지지 않게 합니다.
~~~js
    // 추적할 텍스트 입력 칸 가져오기
    let field = document.getElementById("field");

    // 자동저장 값이 존재하는지 판별
    // (의도치 않게 페이지를 새로 불러올 경우에만 발생)
    if (sessionStorage.getItem("autosave")) {
    // 입력 칸의 콘텐츠 복구
    field.value = sessionStorage.getItem("autosave");
    }

    // 텍스트 입력 칸의 변화 수신
    field.addEventListener("change", function() {
    // 결과를 세션에 저장
    sessionStorage.setItem("autosave", field.value);
    });
~~~

[내용출처 MDN Window.sessionStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage)