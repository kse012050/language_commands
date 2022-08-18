# forEach()
forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.  
> JQuery 에선 each() ?!

## 시도해보기
~~~js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
~~~

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
> 간단한  for 반복문
> - for...of , for...in 반복문
> - [Array.prototype.every()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
> - [Array.prototype.some()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
> - [Array.prototype.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
> - [Array.prototype.findIndex()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)다른 배열 메서드 [every()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [some()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [findIndex()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)는 배열 요소를 판별 함수에 전달하고, 그 결과의 참/거짓 여부에 따라 반복의 종료 여부를 결정합니다.

## 예제
### 초기화하지 않은 값의 반복 생략
~~~js
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element){
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: 보시다시피 3과 7 사이의 누락된 값은 콜백 함수를 호출하지 않았습니다.
~~~

### for 반복문을 forEach()로 바꾸기
~~~js
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// 이후
items.forEach(function(item){
  copy.push(item);
});
~~~

### 배열 콘텐츠 출력
> __참고__: [console.table()](https://developer.mozilla.org/en-US/docs/Web/API/console/table) (en-US)을 사용하면 배열 내용물을 서식에 맞춰 출력할 수 있습니다.다음 예제는 forEach()를 사용한 다른 방법을 소개합니다  

다음 코드는 배열의 각 요소에 대해 한 줄을 기록합니다:
~~~js
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// 인덱스 2는 배열의 그 위치에 항목이 없기에
// 건너뜀을 주의하세요.
[2, 5, , 9].forEach(logArrayElements);
// 기록:
// a[0] = 2
// a[1] = 5
// a[3] = 9
~~~

### ``thisArg`` 사용
다음 예제는 배열의 각 항목에서 객체의 속성을 갱신합니다:
~~~js
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry
    ++this.count
  }, this)
  // ^---- 주의
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16
~~~
``thisArg`` 매개변수(``this``)를 ``forEach()``에 제공했기에, ``callback``은 전달받은 ``this``의 값을 자신의 ``this`` 값으로 사용할 수 있습니다.

## map()과 차이점
map()은 새로운 배열을 생성  
배열안의 내용을 수정하기 용이하고 빠르다  
forEach()는 새로운 배열을 생성하지 않고  
배열안의 내용을 수정하기 용이하지 않다 즉 , 읽기 전용?

더 자세한 내용은 링크를 통해 확인하세요.  
[자료 출처 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)