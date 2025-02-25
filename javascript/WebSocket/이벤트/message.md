# WebSocket: message event
> __참고__: 이 기능은 ``Web Workers``에서 사용할 수 있습니다.  
  
``메시지`` 이벤트는 ``WebSocket``을 통해 데이터를 수신할 때 발생합니다.

## Syntax
``addEventListener()``와 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다.

~~~js
addEventListener("message", (event) => {});

onmessage = (event) => {};
~~~

## Event type
``MessageEvent``. ``Event``에서 상속됨.

Event <- MessageEvent

## Event properties
아래에 나열된 속성 외에도 부모 인터페이스인 ``Event``의 속성을 사용할 수 있습니다.  
  
### ``data`` ( 읽기 전용 )
메시지 발신자가 보낸 데이터입니다. 이 속성의 유형은 WebSocket 메시지의 유형과 ``WebSocket.binaryType``의 값에 따라 달라집니다.  
  
- 메시지 유형이 "text"인 경우 이 필드는 문자열입니다.
- 메시지 유형이 "binary" 유형인 경우 이 속성의 유형은 이 소켓의 binaryType에서 유추할 수 있습니다.
    - ``binaryType``이 ``"arraybuffer"``인 경우 ``ArrayBuffer``,
    - ``binaryType``이 ``"blob"``인 경우 ``Blob``입니다. 여기에는 연관된 미디어 유형이 없습니다(``Blob.type``은 ``""``).

### ``origin`` ( 읽기 전용 )
메시지 발신자의 원점을 나타내는 문자열입니다.  
  
``MessageEvent`` 인터페이스의 다른 속성이 있지만 WebSocket API와 관련이 없으며 기본값으로 유지됩니다.  
  
- lastEventId ( 읽기 전용 )
- source ( 읽기 전용 )
- ports ( 읽기 전용 )

## Examples
~~~js
// WebSocket 연결을 만듭니다.
const socket = new WebSocket("ws://localhost:8080");

// 메시지 수신
socket.addEventListener("message", (event) => {
console.log("Message from server ", event.data);
});
~~~

[내용출처 MDN WebSocket message](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/message_event)