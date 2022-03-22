# Using Fetch
[Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)를 이용하면 Request나 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는것이 가능합니다. 또한 [fetch() (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/fetch) 메서드를 이용하는 것으로 비동기 네트워크 통신을 알기쉽게 기술할 수 있습니다.  
  
이전에 이러한 기능을  [XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)에서 제공하고 있었습니다. Fetch는 이러한 API의 대체제로 [Service Workers (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)같은 기술로 간단히 이용하는것이 가능합니다. 또한 CORS나 HTTP확장같은  HTTP에 관련한 개념을 모아 정의하고 있습니다.  
  
Fetch의 기본 스펙은 ``jQuery.ajax()``와 기본적으로 두가지가 다르다는 사실에 유념해야합니다.
- ``fetch()``로 부터 반환되는 Promise 객체는 __HTTP error 상태를 reject하지 않습니다.__ HTTP Statue Code가 404나 500을 반환하더라도요. 대신 ok 상태가 false인 resolve가 반환되며, 네트워크 장애나 요청이 완료되지 못한 상태에는 reject가 반환됩니다.
- 보통 ``fetch``는 __쿠키를 보내거나 받지 않습니다.__  사이트에서 사용자 세션을 유지 관리해야하는 경우 인증되지 않는 요청이 발생합니다. 쿠키를 전송하기 위해서는 자격증명(credentials) 옵션을 반드시 설정해야 합니다.
2017년 8월 25일 이후. 기본 자격증명(credentials) 정책이 ``same-origin`` 으로 변경되었습니다. 파이어폭스는 61.0b13 이후 변경되었습니다.  
  
기본적인 fetch는 누구라도 알기쉽고 간단하게 작성할 수 있습니다. 아래의 코드를 봐주시기 바랍니다.
~~~js
fetch('http://example.com/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
~~~
네트워크에서 JSON 파일을 가져 와서 콘솔에 인쇄합니다. 간단한 ``fetch()`` 사용 흐름은 인수 한개(가져올 자원의 경로)를 가져오고 응답을 포함하는 약속 ([Response (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Response) 개체)을 반환하는 것입니다.  
  
이것은 단순한 HTTP Response이며, 실제 JSON이 아닙니다. response 객체로부터 사진을 가져오기 위해서는 [json() (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) 메서드를 사용할 필요가 있습니다. (Body의 믹스인 (역주:php의 트레이드와 같은것입니다. )으로 정의되어, 이것은 [Request](https://developer.mozilla.org/ko/docs/Web/API/Request) 객체와 [Response (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Response) 객체의 쌍방에 구현되어 있습니다.  
  
> 노트: http Request와 http Response의 Body mixin은 Body 컨텐츠를 다른 mine 타입으로 사용하는 비슷한 메서드를 제공하고 있습니다.  상세한 내용은 ``Body`` 섹션을 참고해 주시기 바랍니다. 

## 리퀘스트의 옵션 적용

``fetch()`` 메서드에 두번째 파라미터를 적용하는것도 가능합니다. ``init`` 오브젝트는 다른 여러 세팅을 컨트롤 할 수 있게 해줍니다.  
  
모든 설정 가능한 옵션의 상세 설명은 [fetch() (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/fetch)를 참고해주시기 바랍니다.  

~~~js
/ Example POST method implementation:

postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native JavaScript objects
}
~~~

일단 여기까지.. 읽어도 모르겠다 천천히 나올 떄 마다 정리하자

