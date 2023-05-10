# URL: createObjectURL() static method
``URL.createObjectURL()`` 정적 메소드는 매개변수에 지정된 객체를 나타내는 URL을 포함하는 문자열을 생성합니다.  
  
URL 수명은 문서가 생성된 창의 ``문서``에 연결되어 있습니다. 새 객체 URL은 지정된 ``File 객체`` 또는 ``Blob 객체``를 나타냅니다.  
  
객체 URL을 해제하려면 [revokeObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL_static)을 호출합니다.

> __참고__: 이 기능은 웹 작업자에서 사용할 수 있습니다.

> __참고__: 이 기능은 메모리 누수를 일으킬 가능성이 있으므로 서비스 워커에서 사용할 수 없습니다.

## Syntax ( 문법 )
~~~js
URL.createObjectURL(object)
~~~

### Parameters ( 매개변수 )
#### object
객체 URL을 생성할 File, Blob 또는 MediaSource 객체.

#### 반환 값
지정된 소스 개체의 내용을 참조하는 데 사용할 수 있는 개체 URL이 포함된 문자열입니다.

## 사용 참고 사항
### 메모리 관리
동일한 객체에 대해 이미 생성한 경우에도 createObjectURL()을 호출할 때마다 새 객체 URL이 생성됩니다. 이들 각각은 더 이상 필요하지 않을 때 URL.revokeObjectURL()을 호출하여 해제해야 합니다.  
  
브라우저는 문서가 언로드될 때 객체 URL을 자동으로 해제합니다. 그러나 최적의 성능과 메모리 사용을 위해 명시적으로 언로드할 수 있는 안전한 시간이 있는 경우 그렇게 해야 합니다.

### 미디어 스트림에 객체 URL 사용
이전 버전의 미디어 소스 사양에서는 스트림을 ``<video>`` 요소에 연결하려면 MediaStream에 대한 객체 URL을 생성해야 했습니다. 이것은 더 이상 필요하지 않으며 브라우저는 이 작업에 대한 지원을 제거하고 있습니다.  
  
> __경고__: 스트림을 미디어 요소에 연결하기 위해 createObjectURL()에 의존하는 코드가 여전히 있는 경우 srcObject를 MediaStream으로 직접 설정하도록 코드를 업데이트해야 합니다.

[내용출처 MDN local? 에 있는 이미지 가져오는 것?](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)
