# Window.history
__``Window.history``__ 읽기 전용 속성은 History 객체로의 참조를 반환합니다. History 객체는 브라우저의 세션 기록(현재 페이지를 불러온 탭 혹은 프레임이 방문했던 페이지)을 조작할 때 사용합니다.  
  
History API 문서를 방문해 자세한 정보와 함께 예제를 살펴보세요. 특히, 저 문서는 [pushState()](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)와 [replaceState()](https://developer.mozilla.org/ko/docs/Web/API/History/replaceState) 메서드를 사용하기 전 알아야 할 보안 기능을 설명합니다.

## 예제 
~~~js
history.back();     // 뒤로 가기 버튼 클릭과 동일
history.go(-1);     // history.back()과 동일
~~~

### 매개변수 (Parameters)
#### stateObj
state 객체는 replaceState에 전달된 history 항목과 연관된 JavaScript 객체입니다. state object는 null일 수 있습니다.

#### title
나중에는 사용할 수도 있지만, 대부분의 브라우저는 현재 이 파라미터를 무시하고 있습니다. 이 부분에 빈 String을 전달하면 나중에 메소드가 변화하더라도 안전합니다. 또는, state에 짧은 title을 전달할 수도 있습니다.

#### url (Optional)
history 항목의 URL 입니다. 새 URL은 현재 URL과 출처가 동일해야(same origin)합니다. 그렇지 않으면 replaceState에서 예외가 발생합니다.

## 예제
https://www.mozilla.org/ 에서 아래 JavaScript를 실행한다고 가정합시다: 
~~~js
const stateObj = { foo: 'bar' };
history.pushState(stateObj, '', 'bar.html');
~~~
위 두 줄에 대한 설명은 Working with the History API 문서의 Example of pushState() method에서 확인할 수 있습니다. 그 다음, https://www.mozilla.org/bar.html에서 아래와 같은 JavaScript를 실행한다고 가정해보세요:

~~~js
history.replaceState(stateObj, '', 'bar2.html');
~~~

이렇게하면 URL 표시줄에 https://www.mozilla.org/bar2.html이라고 표시되지만, 브라우저가 bar2.html을 로드하거나 bar2.html파일이 있는지 확인하지는 않습니다.  

이제 사용자가 https://www.microsoft.com으로 이동한 다음, 뒤로가기 버튼을 누른다고 가정해봅시다. 이 때, URL 표시줄에는https://www.mozilla.org/bar2.html이 표시됩니다. 사용자가 다시 뒤로가기 버튼을 누르면, URL 표시줄에는 https://www.mozilla.org/foo.html이 표시되고, bar.html은 완전히 무시되어 표시되지 않습니다.

[내용출처MDN](https://developer.mozilla.org/ko/docs/Web/API/History/replaceState)