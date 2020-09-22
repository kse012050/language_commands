# Storage.setItem()
인터페이스의 __``setItem()``__ 메소드는 [``Storage``](https://developer.mozilla.org/en-US/docs/Web/API/Storage) 키 이름과 값을 전달하면 해당 키를 주어진 ``storage`` 객체에 추가하거나 이미 존재하는 경우 해당 키의 값을 업데이트합니다.

## 문법
~~~js
storage.setItem(keyName, keyValue);
~~~

### 매개변수

#### keyName
[DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) 당신은 / 업데이트를 만들려는 키의 이름 포함.

#### keyValue
[DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) 당신은 / 업데이트를 만드는 키를 부여 할 값을 포함.

### 반환 값
[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### 예외
``setItem()`` 스토리지가 가득 차면 예외가 발생할 수 있습니다. 특히 Mobile Safari(iOS 5 이후) 에서는 사용자가 개인 모드로 들어갈 때 항상 발생합니다. (Safari는 별도의 데이터 컨테이너를 사용하여 비공개 모드로 저장을 허용하는 다른 브라우저와 달리 비공개 모드에서 할당량을 0 바이트로 설정합니다.) 따라서 개발자는 __항상에서 가능한 예외를 포착 ``setItem()``__ 해야 합니다.

[내용 출처 MDN setItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)