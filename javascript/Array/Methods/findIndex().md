# Array.prototype.findIndex()
## 시도해보기
__findIndex()__ 메서드는 __주어진 판별 함수를 만족하는__ 배열의 첫 번째 요소에 대한 __인덱스__ 를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.

~~~js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
~~~

인덱스 대신 __값__ 을 반환하는 __find()__ 메서드도 참고하세요.

## 구문
~~~js
arr.findIndex(callback(element[, index[, array]])[, thisArg])
~~~

### 매개변수
#### callback
3개의 인수를 취하여 배열의 각 값에 대해 실행할 함수입니다.

##### element
배열에서 처리중인 현재 요소입니다.

##### index
배열에서 처리중인 현재 요소의 인덱스입니다.

##### array
findIndex 함수가 호출된 배열입니다.

#### thisArg
선택 사항. 콜백을 실행할 때 this로 사용할 객체입니다.

### 반환 값
요소가 테스트를 통과하면 배열의 인덱스. 그렇지 않으면 -1입니다.

## 설명
findIndex 메서드는 콜백 함수가 진리 값 (true를 반환하는 값)을 반환 할 때까지 배열의 모든 배열 인덱스 0..length-1 (포함)에 대해 한 번씩 콜백 함수를 실행합니다. 이러한 요소가 발견되면 findIndex는 해당 반복에 대한 색인을 즉시 반환합니다. 콜백이 진리 값을 반환하지 않거나 배열의 길이가 0 인 경우 findIndex는 -1을 반환합니다. Array # some과 같은 다른 배열 메소드와는 달리, 배열에 존재하지 않는 엔트리의 인덱스에 대해서조차 콜백이 호출됩니다.  
  
콜백은 요소의 값, 요소의 인덱스 및 가로 지르는 Array 객체의 세 가지 인수로 호출됩니다.  
  
thisArg 매개 변수가 findIndex에 제공되면 콜백 호출마다 thisArg 매개 변수가 사용됩니다. 제공되지 않으면 undefined가 사용됩니다.  
  
findIndex는 호출 된 배열을 변경하지 않습니다.  
  
findIndex에 의해 처리되는 요소의 범위는 콜백의 첫 번째 호출 전에 설정됩니다. findIndex 호출이 시작된 후 배열에 추가되는 요소는 콜백에 의해 방문되지 않습니다. 배열의 기존의 방문하지 않은 요소가 콜백에 의해 변경되면 방문 콜백에 전달 된 값은 findIndex가 해당 요소의 인덱스를 방문 할 때의 값이됩니다. 삭제된 요소도 방문합니다.

## 예제
### 배열에서 소수의 색인 찾기
다음 예제에서는 배열에서 소수 (소수가없는 경우 -1을 반환) 인 요소의 인덱스를 찾습니다.
~~~js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
~~~

[내용출처 MDN 찾는 요소의 index번호를 찾아준다](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)