# fetch()
전역 ``fetch()`` 메서드는 네트워크에서 리소스를 가져오는 프로세스를 시작하여 응답을 사용할 수 있게 되면 이행된 promise을 반환합니다.  
  
promise는 요청에 대한 응답을 나타내는 [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) 개체로 확인됩니다.  
  
fetch() promise는 네트워크 오류가 발생한 경우에만 거부합니다(일반적으로 권한 문제 또는 이와 유사한 문제가 있는 경우). fetch() promise는 HTTP 오류(404 등)에 대해 거부하지 않습니다. 대신 then() 핸들러는 [Response.ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) 및/또는 [Response.status](https://developer.mozilla.org/en-US/docs/Web/API/Response/status) 속성을 확인해야 합니다.  
  
``WindowOrWorkerGlobalScope``는 [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)와 [WorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope)에 의해 구현됩니다. 즉, ``fetch()`` 메서드는 리소스를 가져오려는 거의 모든 컨텍스트에서 사용할 수 있습니다.  
  
``fetch()`` 메서드는 검색하는 리소스의 지시문이 아니라 [Content Security Policy(콘텐츠 보안 정책)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)의 ``connect-src`` 지시문에 의해 제어됩니다.  
  
> 참고: ``fetch()`` 메서드의 매개변수는 [Request()](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request) 생성자의 매개변수와 동일합니다.

## 문법
~~~js
const fetchResponsePromise = fetch(resource [, init])
~~~