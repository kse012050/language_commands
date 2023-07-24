# Window.location
``Window.location`` 프로퍼티에 접근하면 읽기 전용인 ``Location`` 오브젝트를 얻어올 수 있습니다. 이는 현재 도큐먼트의 로케이션에 대한 정보를 담고 있습니다.  
  
Window.location은 읽기 전용 Location 개체이지만 DOMString을 할당할 수도 있습니다. 즉, 대부분의 경우 위치가 문자열인 것처럼 작업할 수 있습니다. ``Location = 'http://www.example.com'``은 ``location.href = 'http://www.example.com'``과 동의어입니다.

~~~js
var oldLocation = location;
location = newLocation;
~~~

## 예제
~~~js
alert(location); // alerts "https://developer.mozilla.org/en-US/docs/Web/API/Window.location"
~~~

### 예제 #1: 새 페이지로 이동하기
위치 객체에 새 값이 할당될 때마다 수정된 URL로 ``location.assign()``이 호출된 것처럼 URL을 사용하여 문서가 로드됩니다. CORS와 같은 보안 설정으로 인해 이러한 일이 효과적으로 발생하지 않을 수 있습니다.
~~~js
location.assign("http://www.mozilla.org"); // 또는
location = "http://www.mozilla.org";
~~~

### 예제 #2: 서버로부터 현재 페이지 강제로 다시 로드하기
~~~js
location.reload(true);
~~~

### 예제 #3
다음 예제를 고려하십시오. ``replace()`` 메서드를 사용하여 ``location.pathname`` 값을 해시에 삽입하여 페이지를 다시 로드합니다.
~~~js
function reloadPageWithHash() {
    var initialPage = location.pathname;
    location.replace('http://example.com/#' + initialPage);
}
~~~

>  __참고__: 위의 예는`` location.hash``를 유지할 필요가 없는 상황에서 작동합니다. 그러나 Gecko 기반 브라우저에서 이러한 방식으로 ``location.pathname``을 설정하면 ``location.hash``의 모든 정보가 지워지는 반면 WebKit(및 기타 브라우저)에서는 경로 이름을 설정해도 해시가 변경되지 않습니다. 경로 이름을 변경해야 하지만 해시는 그대로 유지하려면 브라우저에서 일관되게 작동하는 ``replace()`` 메서드를 대신 사용하세요.

### 예제 #4: 경고 대화 상자에 현재 URL의 속성을 표시합니다.
~~~js
function showLoc() {
    var oLocation = location, aLog = ["Property (Typeof): Value", "location (" + (typeof oLocation) + "): " + oLocation ];
    for (var sProp in oLocation){
        aLog.push(sProp + " (" + (typeof oLocation[sProp]) + "): " +  (oLocation[sProp] || "n/a"));
    }
    alert(aLog.join("\n"));
}

// in html: <button onclick="showLoc();">Show location properties</button>
~~~

[내용출처 MDN 현재 URL를 가져 온다](https://developer.mozilla.org/ko/docs/Web/API/Window/location)