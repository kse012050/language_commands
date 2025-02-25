# WebSocket: open event
> __참고__: 이 기능은 ``Web Workers``에서 사용할 수 있습니다.  
  
WebSocket과의 연결이 열리면 ``open`` 이벤트가 발생합니다.

## Syntax
``addEventListener()``와 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다.

~~~js
addEventListener("open", (event) => {});

onopen = (event) => {};
~~~

## Event type
일반적인 ``이벤트``.

## Examples
~~~js
// WebSocket 연결을 만듭니다.
const socket = new WebSocket("ws://localhost:8080");

// 연결 열림
socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
});
~~~

[내용출처 MDN WebSocket open](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/open_event)