# URL.createObjectURL()
__URL.createObjectURL()__ 정적 메서드는 주어진 객체를 가리키는 URL을 DOMString으로 반환합니다. 해당 URL은 자신을 생성한 창의 document가 사라지면 함께 무효화됩니다.  
  
객체 URL을 해제하려면 revokeObjectURL()을 호출하세요.
>__참고__: 이 기능은 [Web Worker](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다

>__참고__: 이 기능은 메모리 누수의 가능성으로 인해 [Service Worker](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)에서 사용할 수 없습니다.

## 구문
~~~js
const objectURL = URL.createObjectURL(object)
~~~

### 매개변수
#### object
객체 URL을 생성할 File, Blob, MediaSource (en-US) 객체.

#### 반환 값
지정한 object의 참조 URL을 담은 DOMString

## 사용 일람
### 메모리 관리
같은 객체를 사용하더라도, createObjectURL()을 매번 호출할 때마다 새로운 객체 URL을 생성합니다. 각각의 URL을 더는 쓰지 않을 땐 URL.revokeObjectURL()을 사용해 하나씩 해제해줘야 합니다.  
  
브라우저는 불러온 문서를 해제할 때 객체 URL도 자동으로 해제합니다. 그러나 최적의 성능과 메모리 사용량을 위해서, 객체 URL을 해제해도 안전하다면 그렇게 해야 합니다.

### 미디어 스트림 객체 URL
구 Media Source 명세에서는 ``<video>`` 요소에 스트림을 부착하려면 MediaStream (en-US)의 객체 URL을 생성했어야 했습니다. 이제 이런 과정은 필수가 아니며, 브라우저도 지원을 중단하고 있습니다.

> 경고: 중요: 아직 미디어 요소에 createObjectURL()을 사용해 스트림을 부착하고 있다면, srcObject에 MediaStream을 직접 설정하도록 코드를 수정해야 합니다.

## 사용 예
### input file로 이미지 보여주기 react
~~~html
 <section>
    {file && <img src={URL.createObjectURL(file)} alt='local file'/>}
    <form onSubmit={handleSubmit}>
        <input type="file" accept='image/*' name="file" required onChange={handleChange} />
    </form>
</section>
~~~

~~~js
const [file, setFile] = useState();
const handleChange = (e) => {
    const { files } = e.target;
    if(name === 'file'){
        setFile(files && files[0]);
        return;
    }
}
~~~

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL_static)