# Window.history
__``Window.history``__ 읽기 전용 속성은 History 객체로의 참조를 반환합니다. History 객체는 브라우저의 세션 기록(현재 페이지를 불러온 탭 혹은 프레임이 방문했던 페이지)을 조작할 때 사용합니다.  
  
History API 문서를 방문해 자세한 정보와 함께 예제를 살펴보세요. 특히, 저 문서는 [pushState()](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)와 [replaceState()](https://developer.mozilla.org/ko/docs/Web/API/History/replaceState) 메서드를 사용하기 전 알아야 할 보안 기능을 설명합니다.

## 예제 
~~~js
history.back();     // 뒤로 가기 버튼 클릭과 동일
history.go(-1);     // history.back()과 동일
~~~

## 참고
프레임에 속하지 않은 최상위 페이지의 세션 기록은 브라우저의 뒤로 가기/앞으로 가기 버튼의 드롭다운 메뉴에서도 볼 수 있습니다.  
  
보안상의 문제로, History 객체는 세션 기록 내 다른 페이지의 URL을 알 수 없습니다. 그러나 세션 기록을 탐색하는 것은 할 수 있습니다.  
  
일반 코드에서 세션 기록을 지우거나, 브라우저의 뒤로/앞으로 가기 버튼을 비활성화할 방법은 없습니다. 그나마 가장 근접한 방법은 location.replace() (en-US) 메서드로, 세션 기록의 현재 항목을 주어진 URL로 바꿉니다.

[내용출처MDN](https://developer.mozilla.org/ko/docs/Web/API/History/replaceState)