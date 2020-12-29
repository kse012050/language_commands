# Function.prototype.bind()
__``bind()``__ 메소드가 호출되면 새로운 함수를 생성합니다. 받게되는 첫 인자의 Value로는 ``this`` 키워드를 설정하고, 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.

~~~js
const module = {
    x: 42,
    getX : function() {
        return this.x;
    }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // 함수는 전역 범위에서 호출됩니다.
// 예상 출력 : 정의되지 않음

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// 예상 출력: 42
~~~

## 구문

> func.bind(thisArg[, arg1[, arg2[, ...]]])

### 매개변수

#### thisArg
바인딩 함수가 대상 함수(target function)의 ``this``에 전달하는 값입니다. 바인딩 함수를 [``new``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new) 연산자로 생성한 경우 무시됩니다. ``bind``를 사용하여 ``setTimeout`` 내에 콜백함수를 믄들 때, ``thisArg``로 전달된 원시 값은 객체로 변환됩니다. ``bind``할 인수(argument)가 제공되지 않으면 실행 스코프 내의 ``this``는 새로운 함수의 ``thisArg``로 처리됩니다.

#### arg1, arg2, ...
대상 함수의 인수 앞에 사용될 인수

### 반환 값
지정한 ``this`` 값 및 초기 인수를 사용하여 변경한 원본 함수의 복제본

## 설명
``bind()`` 함수는 새로운 바인딩한 함수를 만듭니다. 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ECMAScript 2015에서 말하는 특이 함수 객체(exotic function object)입니다. 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.  
  
바인딩한 함수는 다음과 같은 내부 속성을 가지고 있습니다.

- __[[BoundTargetFunction]]__ - 바인딩으로 감싼(wrapped) 원본 함수 객체
- __[[BoundThis]]__ - 감싸진 함수를 호출했을 때 항상 전달되는 값
- __[[BoundArguments]]__ - 감싸진 함수가 호출될 때 첫 번째 인수로 사용되는 값들의 목록
- __[[Call]]__ - 이 객체와 관련된 코드 실행. 함수 호출 식을 통해 호출됨. 내부 메소드의 인수는 this 값 및 호출 식으로 함수에 전다로디는 인수를 포함하는 목록입니다.
  
바인딩된 함수가 호출될 때 ``[[BoundTargetFunction]]`` 의 내부 메소드 ``[[Call]]`` 을 호출합니다. ``[[Call]]`` 은 ``Call(boundThis, args)`` 와 같은 인자를 가집니다. 이 때, ``boundThis``는 ``[[BoundTHis]]`` 이고, ``args``는 함수가 호출될 때 전달되어 따라오는 ``[[BoundArguments]]`` 입니다.  
  
바인딩된 함수는 [new]() 연산자를 사용하여 생성될 수도 있습니다. 그렇게 하면 대상 함수가 마치 대신 생성된 것처럼 행동합니다. 제공된 ``this`` 값은 무시됩니다. 앞에 붙은(prepend) 인수는 에뮬레이트된 함수에 제공되지만.?  
  

## 예제
### 바인딩된 함수 생성
``bind()``의 가장 간단한 사용법은 호출 방법과 관계없이 특정 ``this`` 값으로 호출되는 함수를 만드는 겁니다. 초보 JavaScript 프로그래머로서 흔한 실수는 객체로부터 메소드를 추출한 뒤 그 함수를 호출할 때, 원본 객체가 그 함수의 ``this``로 사용될 것이라는 기대하는 겁니다. (예시 : 콜백 기반 코드에서 해당 메소드 사용). 그러나 특별한 조치가 없으면, 대부분의 경우 원본 객체는 손실됩니다. 원본 객체가 바인딩 되는 함수를 생성하면, 이러한 문제를 깔끔하게 해결할 수 있습니다.

~~~js
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
~~~

### 부분 적용 함수
``bind()`` 의 다음으로 간단한 사용법은 미리 지정된 초기 인수가 있는 함수를 만드는 겁니다. 지정될 초기 인수가 있다면 제공된 ``this`` 값을 따르고, 바인딩 된 함수에 전달되어 바인딩 된 함수가 호출될 때 마다 대상 함수의 인수 앞에 삽입됩니다.

~~~js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// 선행될 인수를 설정하여 함수를 생성합니다.
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList();  // [37]

var list3 = leadingThirtysevenList(1, 2, 3);  // [37, 1, 2, 3]


function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var result1 = addArguments(1, 2); // 3

// 첫 번째 인수를 지정하여 함수를 생성합니다.
var addThirtySeven = addArguments.bind(null, 37);

var result2 = addThirtySeven(5); // 37 + 5 = 42

// 두 번째 인수는 무시됩니다.
var result3 = addThirtySeven(5, 10); // 37 + 5 = 42
~~~

### setTimeout과 함께 사용
[``window.setTimeout()``] 내에서 기본으로, ``this`` 키워드는 [window]() (또는 ``global``) 객체로 설정됩니다. 클래스 인스턴스를 참조하는 ``this``를 필요로 하는 클래스 메소드로 작업하는 경우, 명시해서 ``this``를 콜백 함수에 바인딩할 수 있습니다. 인스턴스를 유지하기 위해

~~~js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 1초 지체 후 bloom 선언
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();
// 1초 뒤, 'declare' 메소드 유발
~~~

### 생성자로 쓰이는 바인딩된 함수
> __경고 :__ 이 부분은 JavaScript 능력을 보이고 ``bind()`` 메소드의 일부 극단 상황(edge case)을 기록합니다. 아래 보이는 메소드는 일을 하는 가장 좋은 방법은 아니며 아마도 상용 환경에서 전혀 사용되 않을 겁니다.  
  
바인딩된 함수는 자동으로 대상 함수에 의해 생성되는 새로운 인스턴스를 생성하는 [new]() 연산자와 함께 쓰기에 적합합니다. 바인딩된 함수가 값을 생성하는 데 쓰이는 경우, 제공된 ``this``는 무시됩니다. 그러나, 제공된 인수는 여전히 생성자 호출에 (인수부) 앞에 붙습니다.

~~~js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

// 아래 폴리필에서는 지원되지 않음,

// 원 bind와는 잘 작동:

var YAxisPoint = Point.bind(null, 0/*x*/);


var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
~~~  
  
이후 내용은 이해가 되지 않아.. 나중에 추가적으로 정리하도록 하겠습니다.  
  
[내용출처 MDN bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)