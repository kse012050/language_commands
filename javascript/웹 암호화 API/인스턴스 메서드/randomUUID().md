# Crypto: randomUUID() 메서드
> 보안 컨텍스트: 이 기능은 보안 컨텍스트(HTTPS)에서만 사용할 수 있으며, 일부 또는 모든 지원 브라우저에서 사용할 수 있습니다.  
  
Crypto 인터페이스의 randomUUID() 메서드는 암호학적으로 안전한 난수 생성기를 사용하여 v4 UUID를 생성하는 데 사용됩니다.

## 문법
~~~js
randomUUID()
~~~

### Parameters ( 매개변수 )
없음

### Return value
무작위로 생성된 36자 길이의 v4 UUID를 포함하는 문자열.

## 예
~~~ js
/* self.crypto.randomUUID()를 사용할 수 있다고 가정 */

let uuid = self.crypto.randomUUID();
console.log(uuid); // 예를 들어 "36b8f84d-df4e-4d49-b662-bcde71a8764f"
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID#parameters)