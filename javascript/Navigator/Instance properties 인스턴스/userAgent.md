# Navigator: userAgent property
Navigator.userAgent 읽기 전용 속성은 현재 브라우저의 사용자 에이전트 문자열을 반환합니다.
> __참고__: 사양은 브라우저가 이 필드를 통해 가능한 한 적은 정보를 제공하도록 요청합니다. 이 속성의 값이 동일한 브라우저의 향후 버전에서 동일하게 유지될 것이라고 가정하지 마십시오. 전혀 사용하지 않거나 현재 및 이전 버전의 브라우저에만 사용하십시오. 새 브라우저는 이전 브라우저와 동일한 UA 또는 그 일부를 사용하기 시작할 수 있습니다. 브라우저 에이전트가 실제로 이 속성에 의해 광고되는 브라우저인지 보장할 수 없습니다.  
  
사용자 에이전트 문자열은 사용자가 구성할 수 있으므로 사용자 에이전트 문자열 감지에 기반한 브라우저 식별은 ``신뢰할 수 없으며 권장되지 않습니다.``  
  
예를 들어:
- Firefox에서는 about:config에서 general.useragent.override 기본 설정을 변경할 수 있습니다. 일부 Firefox 확장 기능은 그렇게 합니다. 그러나 이것은 전송되고 navigator.userAgent에 의해 반환되는 HTTP 헤더만 변경합니다. JavaScript 코드를 활용하여 브라우저를 식별하는 다른 방법이 있을 수 있습니다.
- Opera 6+에서는 사용자가 메뉴를 통해 브라우저 식별 문자열을 설정할 수 있습니다.

## Value 
브라우저가 HTTP 헤더와 이에 대한 응답 및 Navigator 개체의 기타 관련 메서드에 제공하는 전체 사용자 에이전트 문자열을 지정하는 문자열입니다.  
  
사용자 에이전트 문자열은 여러 정보로 분해될 수 있는 형식적 구조를 기반으로 합니다. 이러한 각 정보는 사용자가 설정할 수 있는 다른 네비게이터 속성에서 가져옵니다. Gecko 기반 브라우저는 다음 일반 구조를 따릅니다.

~~~js
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
~~~

## Examples
~~~js
alert(window.navigator.userAgent);
// alerts "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
~~~

### PC , Mobile 구분하기
~~~js
if (/Mobi|Android/i.test(navigator.userAgent)) {
  // MOBILE로 접속한 경우
  document.querySelector('div').innerHTML = 'Mobile'
} else {
  // PC로 접속한 경우
  document.querySelector('div').innerHTML = 'PC'
}
~~~

[내용출처 MDN PC , Mobile 구분](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)