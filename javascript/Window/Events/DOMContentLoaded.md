# DOMContentLoaded
``DOMContentLoaded`` 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생합니다. 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다.

|||
|--------|------|
| __확산__ | 예 |
| __취소 가능__ | 예 (취소할 수 없는 단순 이벤트로 지정되었지만) |
| __인터페이스__ | __``Event``__ |
| __이벤트 처리기 속성__ | 아니오 |

DOMContentLoaded의 기본 대상은 다 가져오기 문서입니다. 캡처 또는 버블링 단계에서 처리하기 위해 Window 인터페이스에서 이 이벤트를 수신할 수 있습니다. 이 이벤트에 대한 자세한 내용은 Document: [DOMContentLoaded(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) 이벤트 페이지를 참조하세요.  
  
다른 이벤트인 [load](https://developer.mozilla.org/ko/docs/Web/API/Window/load_event)는 완전히 로드된 페이지를 감지하는 데만 사용해야 합니다. DOMContentLoaded가 더 적절한 곳에서 load를 사용하는 것은 흔한 실수입니다.

## 예제
### 기본 용도
~~~js
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
~~~

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/DOMContentLoaded_event)