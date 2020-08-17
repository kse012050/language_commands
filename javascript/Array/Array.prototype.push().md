# Array.prototype.push()
``push()`` 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.

## 구문
> arr.push(element1[, ...[, elementN]])

### 매개변수
#### ``elementN``
배열의 끝에 추가할 요소

### 반환 값
호출한 배열의 새로운 [``lenght``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 속성

## 속명
``push`` 메서드는 배열 끝에 여러 값을 추가합니다.  
  
``push``는 의도적으로 제네릭합니다. 배열을 닮은 객체에 [``call()``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 또는 [``apply()``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)로 사용될 수 있다. ``push`` 메서드는 중진 값을 입력하는 것을 어디에 시작할 것이닞를 결정하기 위해 ``length`` 속성에 의존한다. 만약 ``length``속성이 숫자로 변환 될 수 없다면 인덱스는 0을 사용한다. ``length``가 생성되게 될 경우에 길이 값이 존재하지 않을 가능성을 포함한다.  
  
String(문자열)이 변경할 수 없는 것처럼 비록 이 명령어의 에플리케이션들이 적합하지 않다고 할지라도 단지 배열 같은 객체는 [strings](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 이다.

## 예시

### 배열에 엘리먼트를 추가하기
다음 코드는 두가지 엘리먼트를 포함하는 스포츠 배열을 생성하고 두개의 엘리먼트를 추가 한다. ``total`` 변수는 추가한 배열의 새 길이 값을 포함한다.
~~~js
var sports = ['축구', '야구'];
var total = sports.push('미식축구', '수영');

console.log(sports); // ['축구', '야구', '미식축구', '수영']
console.log(total);  // 4
~~~

### 두 개의 배열을 합치기
이 예제의 두 번쨰 배열의 모든 엘리먼트를 push 하기 위해 [apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 를 사용한다.  
  
만약 두 번째 배열(아래 예제에서는 moreVegs)이 매우 클 경우, 이 메소드를 사용하지 말아야한다. 실제로 한 함수가 사용가능한 매개변수의 최대 개수에는 제한이 있기 때문이다. 더 자세한 사항은 [apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 에서 찾아볼 수 있다.

~~~js
var vegetables = ['설탕당근', '감자'];
var moreVegs = ['셀러리', '홍당무'];

// 첫번째 배열에 두번째 배열을 합친다. 
// vegetables.push('셀러리', '홍당무'); 하는 것과 동일하다.
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['설탕당근', '감자', '셀러리', '홍당무']
~~~


> 제네릭 : java 나 C 에서 처럼 변수, 함수 지정시 타입을 미리 정하는 것?!

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)