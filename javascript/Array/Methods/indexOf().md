# Array.prototype.indexOf()
``indexOf()`` 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

> __참고__ : 문자열은 [String.prototype.indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)를 참고하세요.

## Try it
~~~js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
~~~

## 구문

~~~js
arr.indexOf(searchElement[, fromIndex])
~~~

### 매개변수

#### searchElement
배열에서 찾을 요소입니다.

#### fromIndex (Optional)
검색을 시작할 색인입니다. 인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않습니다. 제공된 색인 값이 음수이면 배열 끝(뒤)에서부터의 오프셋(순서) 값으로 사용됩니다. 참고 : 제공된 색인이 음수이면 배열은 여전히 __앞에서 뒤로 검색__ 됩니다. 계산 된 인덱스가 0보다 작 으면 전체 배열이 검색됩니다. 기본값 : 0 (전체 배열 검색).

### 반환 값
배열 내의 요소의 최초의 인덱스. 발견되지 않으면 -1.

## 설명
``indexOf()``는 엄격한 동등성 (``===`` 또는 triple-equals 연산자에서 사용하는 것과 같은 메서드)을 사용하여 검색 요소를 ``Array``의 요소와 비교합니다.

## 예제
### indexOf() 사용하기
다음 예제에서는 indexOf ()를 사용하여 배열의 값을 찾습니다.

~~~js
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
~~~

### 요소의 모든 항목 찾기
~~~js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
~~~

### 요소가 배열에 존재하는지 확인하고 배열을 업데이트
~~~js
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('새로운 veggies 컬렉션 : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' 은 이미 veggies 컬렉션에 존재합니다.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// 새로운 veggies 컬렉션 : potato, tomato, chillies, green-pepper, spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach 은 이미 veggies 컬렉션에 존재합니다.
~~~

[내용출처 MDN 배열안에 있는 특정요소(값) 찾아주는 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)