# in 연산자
``in`` __연산자__ 는 명시된 속성이 명시된 객체에 존재하면 ``true``를 반환합니다.

## 예 
~~~js
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// Expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// Expected output: "Suzuki"
~~~

## Syntax ( 문법 )
~~~js
// prop 속성 
prop in object
#prop in object
~~~

### Parameters ( 매개변수 )
#### prop ( 속성 )
속성 이름을 나타내는 문자열 또는 기호입니다(기호가 아닌 항목은 문자열로 강제 변환됨). 개인 속성 식별자일 수도 있습니다.

#### object
객체(또는 해당 프로토타입 체인)에 지정된 이름(prop)이 있는 속성이 포함되어 있는지 확인하는 개체입니다.

### Exceptions ( 예외 )
#### TypeError
객체가 객체(예: 프리미티브)가 아닌 경우 발생합니다.

## 설명
in 연산자는 객체 또는 프로토타입 체인에 문자열 또는 기호 속성이 있는지 테스트합니다. 상속되지 않은 속성만 확인하려면 Object.hasOwn()을 대신 사용하십시오.  
  
속성은 객체에 존재할 수 있지만 정의되지 않은 값을 가질 수 있습니다. 따라서 obj의 x는 obj.x === undefined와 동일하지 않습니다. 속성이 추가된 후 false를 반환하려면 해당 속성의 값을 undefined로 설정하는 대신 delete 연산자를 사용합니다.  
  
in 연산자를 사용하여 특정 개인 클래스 필드 또는 메서드가 객체에 정의되었는지 여부를 확인할 수도 있습니다. 연산자는 속성이 정의된 경우 true를 반환하고 그렇지 않은 경우 false를 반환합니다. 이는 객체가 해당 클래스 생성자로 생성된 경우에만 true를 반환하고 이후에 다른 개인 속성에도 안전하게 액세스할 수 있기 때문에 브랜드 확인이라고 합니다.  
  
이것은 특수 구문입니다. in 연산자의 왼쪽은 표현식이 아니라 속성 식별자이지만 인용 부호가 없습니다(그렇지 않으면 개인 속성이 아니라 문자열 속성이기 때문입니다).  
  
현재 클래스와 관련이 없는 개체의 개인 속성에 액세스하면 undefined를 반환하는 대신 TypeError가 발생하므로 이 구문을 사용하면 다음과 같이 단축할 수 있습니다.

## 예
다음 예제들은 in 연산자의 용도를 보여 줍니다.
~~~js
// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees         // true를 반환합니다.
3 in trees         // true를 반환합니다.
(1 + 2) in trees   // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
6 in trees         // false를 반환합니다.
"bay" in trees     // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
"length" in trees  // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
"PI" in Math       // true를 반환합니다.
"P" + "I" in Math  // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
"company" in myCar // true를 반환합니다.
"model" in myCar   // true를 반환합니다.
~~~

당신은 반드시 in 연산자의 오른쪽에 객체를 명시하여야 합니다. 예컨대 당신은 String 생성자로 만들어진 문자열을 명시할 수 있지만 문자열 리터럴은 명시할 수 없습니다.

~~~js
var color1 = new String("green");
"length" in color1 // true를 반환합니다.

var color2 = "coral";
"length" in color2 // color2는 String 객체가 아니기에 오류를 냅니다.
~~~

### 제거되었거나 정의되지 않은 속성에 대하여 in 연산자 사용하기
in 연산자는 ``delete`` 연산자로 제거된 속성에 대하여 false를 반환합니다.
~~~js
var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
delete myCar.company;
"company" in myCar; // false를 반환합니다.

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // false를 반환합니다.
~~~

만약 당신이 속성을 ``undefined``로 설정하였는데 그것을 제거하지 않으면, in 연산자는 그 속성에 대하여 ``true``를 반환합니다.

~~~js
var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
myCar.company = undefined;
"company" in myCar; // true를 반환합니다.
~~~

~~~js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // true를 반환합니다.
~~~

### 상속된 속성
``in`` 연산자는 프로토타입 체인에 의하여 접근할 수 있는 속성에 대하여 true를 반환합니다.
~~~js
"toString" in {}; // true를 반환합니다.
~~~