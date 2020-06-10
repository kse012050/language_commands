# forEach()
forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.  
> JQuery 에선 each() ?!

## 구문
### 매개 변수
#### callback
각 요소에 대해 실행할 함수.  
다음 세 가지 매개변수를 받습니다.

##### currentValue
처리할 현재 요소

##### index
처리할 현재 요소의 인덱스

##### array
``forEach()``를 호출한 배열

### 반환 값
``undefined``

## 설명
``forEach()``는 주어진 ``callback``을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행합니다.  
삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 ``실행하지 않습니다.`` (예:희소 배열?)  
  
    
``callback``은 다음 세 인수와 함께 호출됩니다.
- 요소 값
- 요소 인덱스
- 순회 중인 배열
  
``thisArg`` 매개변수를 ``forEach()``에 제공한 경우 ``callback``을 호출할 때 전달해 ``this``의 값으로 쓰입니다. 전달하지 않으면 ``undefined``를 사용하며, 최종 ``this`` 값은 __함수의 this를 결정하는 평소 규칙__ 를 따릅니다.  
  
``forEach()`` 로 처리할 요소의 범위는 최초 ``callback`` 호출 전에 설정됩니다. ``forEach()`` 호출을 시작한 뒤 배열에 추가한 요소는 ``callback``이 방문하지 않습니다. 배열의 기존 요소값이 바뀐 경우, ``callback``에 전달하는 값은 ``forEach()``가 요소를 방문한 시점의 값을 사용합니다. 방문하기 전에 삭제한 요소는 방문하지 않습니다.
  
``forEach()``는 각 배열 요소에 대해 한 번씩 ``callback`` 함수를 실행합니다. ``map()``과 ``reduce()`` 와는 달리 ``undefined``를 반환하기 때문에 메서드 체인의 중간에 사용할 수 없습니다. 대표적인 사용처는 메서드 체인 끝에 부작용을 실행하는 겁니다.  
  
``forEach()``는 배열을 변형하지 않습니다. 그러나 ``callback``이 변형할 수는 있습니다.  
> 예외를 던지지 않고는 ``forEach()`` 를 중간에 멈출 수 없습니다. 중간에 멈춰야 한다면 ``forEach()``가 적절한 방법이 아닐지도 모릅니다.  

더 자세한 내용은 링크를 통해 확인하세요.  
[자료 출처 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)