# Strict mode

가끔 엄격하지 않은 기본값을 "[느슨한 모드](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode)(sloppy mode)"라고 부르기도 합니다. 공식적인 용어는 아니지만 혹시 모르니 알아두세요.
[ECMAScript 5](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) 에서 소개된 JavaScript 의 엄격모드는 JavaScript 의 제한된 버전을 선택하여 암묵적인 "[느슨한 모드](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode)(sloppy mode)" 를 해제하기 위한 방법입니다. 엄격 모드는 단지 부분적인 것이 아니며, 이것은 고의적으로 일반 코드와 다른 시멘틱을 가지고 있습니다. 엄격모드를 지원하지 않는 브라우저에서는 엄격 모드의 코드가 다른 방식으로 동작할 것입니다, 그 때문에 엄격 모드가 적절하게 적용된 피쳐 테스트 없이 엄격 모드에 의존하면 안됩니다. 엄격 모드의 코드와 비-엄격 모드의 코드는 공존할 수 있으며, 때문에 스크립트의 엄격 모드를 취사 선택하는 것이 점진적으로 가능하게 되었습니다.
엄격 모드는 평범한 JavaScript 시멘틱스에 몇가지 변경이 일어나게 합니다.  
  
    1.기존에는 조용히 무시되던 에러들을 throwing합니다.
    2.JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
    3.엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

코드를 JavaScript의 변형이 제한된 환경에서 동작하도록 하고 싶다면, 엄격 모드로의 변환(t[ransitioning to strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode))을 참고하세요.

## 엄격모드 적용하기
엄격모드는 전체 스크립트 또는 부분 함수에 적용가능합니다. 단, ``{}`` 괄호로 묶여진 블럭문에는 적용되지 않습니다. 컨텍스트와 같은곳에 적용을 시도하면 동작하지 않습니다. ``eval`` 코드, ``Function`` 코드, 이벤트 핸들러 속성, [WindowTimers.setTimeout()](https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout) 과 연관된 함수들에 전달된 문자열이 전체 스크립트이며 여기에서 엄격모드가 예상대로 동작합니다.

### 스크립트 엄격 모드
엄격모드를 전체 스크립트에 적용하기 위해, 정확한 구문 ``"use strict";``(또는 ``'use strict';``) 을 다른 구문 작성 전에 삽입합니다.
~~~js
// 전체 스크립트 엄격 모드 구문
'use strict';
var v = "Hi!  I'm a strict mode script!";
~~~

이 구문은 이미 [유명한 웹사이트](https://bugzilla.mozilla.org/show_bug.cgi?id=627531)에서 [문제를 일으킨 전적](https://bugzilla.mozilla.org/show_bug.cgi?id=579119)이 있습니다. 상충되지 않는 스크립트들 끼리 맹목적인 연결이 불가능하기 때문입니다. 엄격 모드의 스크립트와 비-엄격 모드의 스크립트의 연결은 심사숙고 하시기를 바랍니다. 이렇게 되면 전체 연결은 엄격으로 보입니다! 엄격 모드에 다른 엄격모드 들을 결합하는 것은 괜찮습니다. 그리고, 비-엄격 스크립트 사이의 결합도 괜찮습니다. 분명한건, 스크립트를 결합하는 것이 절대 이상적인 것이 아니라는 것이지만, 그래야 한다면 함수를 기준으로 엄격모드 사용을 고려하시기 바랍니다.

또한 함수 내부의 전체 스크립트 내용에 접근할 수 있으며, 엄격모드를 사용하는 외부 함수를 가질 수 있습니다. 이는 결합 문제를 없애주기도 하지만, 이것이 스코프 바깥에 위치한 어떤 전역 변수든 확실하게 밖으로 추출할 수 있음을 의미합니다 . 

[내용출처 MDN JS 엄격모드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)