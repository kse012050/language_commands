# Array.prototype.map()
__``map()``__ 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

## Try it
~~~js
const array1 = [1, 4, 9, 16];

// 매핑에 함수를 전달
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
~~~

## 구문
~~~js
arr.map(callback(currentValue[, index[, array]])[, thisArg]);

arr.map(function(요소, 인덱스, 배열) , thisArg)

// thisArg : this로 사용되는 값 지정?
~~~

### 매개변수
#### callback
새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.

##### currentValue
처리할 현재 요소.

##### index (Optional)
처리할 현재 요소의 인덱스.

##### array (Optional)
``map()``을 호출한 배열.

##### thisArg (Optional)
``callback``을 실행할 때 ``this``로 사용되는 값.

### 반환값
배열의 각 요소에 대해 실행한 ``callback``의 결과를 모은 새로운 배열.

## 설명
``map``은 ``callback`` 함수를 __각각의 요소에 대해 한번씩__ 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듭니다. ``callback`` 함수는 (``undefined``도 포함해서) 배열 값이 들어있는 인덱스에 대해서만 호출됩니다. 즉, 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다.  
  
``callback`` 함수는 호출될 때 대상 요소의 값, 그 요소의 인덱스, 그리고 ``map``을 호출한 원본 배열 3개의 인수를 전달받습니다.  
  
``thisArg`` 매개변수가 ``map``에 전달된 경우 ``callback`` 함수의 ``this``값으로 사용됩니다. 그 외의 경우 ``undefined``값이 ``this`` 값으로 사용됩니다. ``callback`` 함수에서 최종적으로 볼 수 있는 ``this`` 값은  함수 내 [this를 정하는 일반적인 규칙](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 결정됩니다.  
  
``map``은 호출한 배열의 값을 변형하지 않습니다. 단, ``callback`` 함수에 의해서 변형될 수는 있습니다.  
  
``map``이 처리할 요소의 범위는 첫 ``callback``을 호출하기 전에 정해집니다. ``map``이 시작한 이후 배열에 추가되는 요소들은 ``callback``을 호출하지 않습니다. 배열에 존재하는 요소들의 값이 바뀐 경우 ``map``이 방문하는 시점의 값이 ``callback``에 전달됩니다. ``map``이 시작되고, 방문하기 전에 삭제된 요소들은 방문하지 않습니다.  
  
명세서에 정의된 알고리즘으로 인해 ``map``을 호출한 배열의 중간이 비어있는 경우, 결과 배열 또한 동일한 인덱스를 빈 값으로 유지합니다.

## 예제
### 배열에 들어있는 숫자들의 제곱근을 구하여 새로운 배열을 만들기
다음 코드는 숫자의 배열을 받아 각 숫자들의 제곱근이 들어있는 새로운 배열을 만듭니다.
~~~js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots는 [1, 2, 3]
// numbers는 그대로 [1, 4, 9]
~~~

### ``map``을 활용해 배열 속 객체를 재구성하기
다음 코드는 오브젝트의 배열을 받아 각 오브젝트를 다른 형태으로 재구성해 새로운 배열을 만듭니다.
~~~js
var kvArray = [{key:1, value:10},
               {key:2, value:20},
               {key:3, value: 30}];

var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray는 [{1:10}, {2:20}, {3:30}]

// kvArray는 그대로
// [{key:1, value:10},
//  {key:2, value:20},
//  {key:3, value: 30}]
~~~

### 인자를 받는 함수를 사용하여 숫자 배열 재구성하기
다음 코드는 인자가 한개인 함수를 이용하여 map이 어떻게 동작하는지 나타냅니다. 인자인 배열과 안의 요소들은 map을 통해 순회하면서 원본 배열로 부터 자동으로 할당됩니다.

~~~js
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles는 이제 [2, 8, 18]
// numbers는 그대로 [1, 4, 9]
~~~

### ``map``을 포괄적으로 사용하기
아래 예제는 ``String``에 ``map``을 사용해서 각 문자의 ASCII 인코딩 값을 요소로 갖는 배열을 얻는 방법을 보여줍니다.

~~~js
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a는 이제 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
~~~

### ``map``을 포괄적으로 사용하기 (``querySelectorAll``)
아래 예제는 ``querySelectorAll``을 사용해서 수집된 객체들을 순회 처리하는 법을 보여줍니다. 이번 경우 체크한 옵션 박스를 콘솔에 프린트합니다.

~~~js
var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj) {
    return obj.value;
});
~~~
더 쉬운 방법은 [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)을 사용하는 것입니다.

### 까다로운 사례
map에 하나의 인자(순회하는 원소)만 받는 콜백을 사용하는 경우가 많습니다. 그러나 어떤 함수는 대개 하나의 인자로 호출하지만 두 개 이상의 인자를 사용하는 경우도 있습니다. 이로 인해 어떤 경우 혼란스러울 수도 있습니다.
~~~js
// 아래 라인을 보시면...
['1', '2', '3'].map(parseInt);
// 결과를 [1, 2, 3] 으로 기대할 수 있습니다.
// 그러나 실제 결과는 [1, NaN, NaN] 입니다.

// parseInt 함수는 보통 하나의 인자만 사용하지만, 두 개를 받을 수 있습니다.
// 첫 번째 인자는 변환하고자 하는 표현이고 두 번째는 숫자로 변환할 때 사용할 진법입니다.
// Array.prototype.map은 콜백에 세 가지 인자를 전달합니다.
// 배열의 값, 값의 인덱스, 그리고 배열
// 세 번째 인자는 parseInt가 무시하지만 두 번째 인자는 아닙니다.
// 따라서 혼란스러운 결과를 도출할 수 있습니다. 자세한 내용은 블로그 포스트를 참고하시길 바랍니다.

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// 실제 결과가 예상한 대로 배열의 숫자와 같습니다.

// 위와 같지만 더 간단한 화살표 표현식
['1', '2', '3'].map(str => parseInt(str));

// 더 간단하게 해결할 수 있는 방법
['1', '2', '3'].map(Number); // [1, 2, 3]
// 그러나 `parseInt`와 달리 float이나 지수표현도 반환합니다.
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
~~~

[내용출처 MDN map() 배열 내의 모든 요소를 각각에 대한 함수를 호출한 결과를 모아 새오룬 배열을 반환](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## 테스트
~~~js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
animals.map(function(a , b , c){
    console.log(a);
    console.log(b);
    console.log(c);

    console.log(this);
},[1,2,3,4]);
// 출력 결과
// Dodo
// 0
// (4) ['Dodo', 'Tiger', 'Penguin', 'Dodo']
// (4) [1, 2, 3, 4]
// Tiger
// 1
// (4) ['Dodo', 'Tiger', 'Penguin', 'Dodo']
// (4) [1, 2, 3, 4]
// Penguin
// 2
// (4) ['Dodo', 'Tiger', 'Penguin', 'Dodo']
// (4) [1, 2, 3, 4]
// Dodo
// 3
// (4) ['Dodo', 'Tiger', 'Penguin', 'Dodo']
// (4) [1, 2, 3, 4]
~~~