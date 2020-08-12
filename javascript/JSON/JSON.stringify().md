# JSON.stringify()
``JSON.stringify()`` 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환 합니다.  
선택적으로, ``replacer``를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함합니다.

## 구문
> JSON.stringify(value[, replacer[, space]])

### 매개변수

#### ``value``
JSON 문자열로 변환할 값

#### ``replacer``(대체자) - Optional
문자열화 동작 방식을 변경하는 함수, 혹은 JSON 문자열에 포함될 값 객체의 속성들을 선택하기 위한 화이트리스트(whitelist)로 쓰이는 ``String`` 과 ``Number`` 객체들의 배열.  
이 값이 null 이거나 제공되지 않으면, 객체의 모든 속성들이 JSON 문자열 결과에 포함된다.

#### ``space`` (공간 , 사이) -  Optional
가독성을 목적으로 JSON 문자열 출력에 공백을 삽입하는데 사용되는 ``String`` 또는 ``Number`` 객체.  
이것이 ``Number`` 라면, 공백으로 사용되는 스페이스(space)의 수를 나타낸다  
이 수가 10보다 크면 10 으로 제한된다. 1보다 작은 값은 스페이스가 사용되지 않는 것을 나타낸다.  
이것이 ``String`` 이라면, 그 문자열(만약 길이가 10보다 길다면, 첫 번째 10 개의 문자)이 공백으로 사용된다.  
이 매개 변수가 제공되지 않는다면(또는 null 이면), 공백이 사용되지 않는다.

### 반환 값
주어진 값과 대응하는 JSON 문자열.

### 예외
순환 참조를 발견할 경우 [TypeError](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

## 설명
``JSON.stringify()`` 는 값을 JSON 표기법으로 변환한다.
- 배열이 아닌 객체의 속성들은 어떤 특정한 순서에 따라 문자열화 될 것이라고 보장되지 않는다. 같은 객체의 문자열화에 있어서 속성의 순서에 의존하지 않는다.
- ``Boolean``, ``Number``, ``String`` 객체들은 문자열화 될 때 전통적인 변환 의미에 따라 연관된 기본형(primitive) 값으로 변환된다.
- ``undefined``, 함수, 심볼(symbol)은 변환될 때 생략되거나(객체 안에 있을 경우) ``null``로 변환된다(배열 안에 있을 경우)
- 심볼을 키로 가지는 속성들은 ``replacer`` 함수를 사용하더라도 완전히 무시 된다.
- 열거 불가능한 속성들은 무시된다.



내용을 아직 다 정리하지 못했다.(이해하지 못했기 때문에...)   
[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

