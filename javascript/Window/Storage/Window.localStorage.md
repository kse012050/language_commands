# Window.localStorage
읽기 전용 ``localStorage`` 속성은 사용자 로컬의 [Storage](https://developer.mozilla.org/ko/docs/Web/API/Storage) 갹체에 접근하게 해줍니다.  
``localStorage``는 [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) 와 비슷합니다. 유일한 차이점은 ``localStorage`` 에 저장된 데이터는 만료 기간이 없지만, ``sessionStorage``에 저장된 데이터는 세션이 끝나면(브라우저가 종료되면) 지워진다는 것입니다.  
  
``localStorage`` 또는 ``sessionStorage``에 저장될 데이터는 __프로토콜 페이지에 명시__ 되어 있습니다.  
  
모든 key와 value는 항상 __string으로 저장__ 됩니다. (주의하세요, object와 integer들은 string으로 자동 변환됩니다.)

## 문법
> myStorage = window.localStorage;

### 값
현재 오리진 로컬 스토리지 공간에 접근하기 위해 사용될 수 있는 [Storage](https://developer.mozilla.org/ko/docs/Web/API/Storage) 객체 

### 예외

#### ``SecurityError`` 보안오류
요청이 정책 결정을 위반하거나 오리진이 [유효한 체계 / 호스트 / 포트 튜플](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Definition_of_an_origin) 이 아닙니다.

## 예제
이 코드는 사용자 현재 도메인의 로컬 [Storage](https://developer.mozilla.org/ko/docs/Web/API/Storage) 객체에 [``Storage.setItem()``](https://developer.mozilla.org/ko/docs/Web/API/Storage/setItem접근해 ) 를 사용하여 데이터를 추가합니다.  
> localStorage.``setItem``('myCat','Tom');

### ``localStorage`` 아이템 읽기
~~~js
var cat = localStorage.getItem('myCat');
~~~

### ``localStorage`` 아이템 삭제
~~~js
localStorage.removeItem('myCat');
~~~

### ``localStorage`` 아이템 전체 삭제
~~~js
// Clear all items
localStorage.clear();
~~~

> Note: 전체 예시를 보려면 [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 글을 참조하세요.

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

