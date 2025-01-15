# hypot()
Math.hypot() 정적 메서드는 인수의 제곱 합의 제곱근을 반환합니다

## 예
~~~js
console.log(Math.hypot(3, 4));
// Expected output: 5

console.log(Math.hypot(5, 12));
// Expected output: 13

console.log(Math.hypot(3, 4, 5));
// Expected output: 7.0710678118654755

console.log(Math.hypot(-5));
// Expected output: 5
~~~

## 문법
~~~js
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
~~~

### Parameters ( 매개변수 )
value1, …, valueN  
숫자

### 반환 값
지정된 인수의 제곱의 합의 제곱근입니다. 인수 중 하나라도 ±무한대이면 무한대를 반환합니다. 그렇지 않고 인수 중 하나 이상이 NaN이거나 NaN으로 변환된 경우 NaN을 반환합니다. 인수가 주어지지 않거나 모든 인수가 ±0이면 0을 반환합니다.

## 설명
직각 삼각형의 빗변 또는 복소수의 크기를 계산하려면 Math.sqrt(v1*v1 + v2*v2) 공식을 사용합니다. 여기서 v1과 v2는 삼각형의 변 길이 또는 복소수의 실수 및 복소수 구성 요소입니다. 2차원 이상의 해당 거리는 제곱근 아래에 제곱을 더 추가하여 계산할 수 있습니다. Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4).  
  
이 함수는 이 계산을 더 쉽고 빠르게 만들어줍니다. Math.hypot(v1, v2) 또는 Math.hypot(v1, /* …, */, vN)을 호출합니다.  
  
Math.hypot은 숫자의 크기가 매우 큰 경우에도 오버플로/언더플로 문제를 방지합니다. JS에서 표현할 수 있는 가장 큰 숫자는 Number.MAX_VALUE로, 약 10308입니다. 숫자가 약 10154보다 큰 경우, 제곱하면 무한대가 됩니다. 예를 들어, Math.sqrt(1e200*1e200 + 1e200*1e200) = 무한대입니다. 대신 hypot()를 사용하면 더 나은 답을 얻을 수 있습니다. Math.hypot(1e200, 1e200) = 1.4142...e+200. 이는 매우 작은 숫자에도 해당합니다. Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0이지만 Math.hypot(1e-200, 1e-200) = 1.4142...e-200입니다.  
  
인수가 하나일 경우 Math.hypot()은 Math.abs()와 동일합니다. Math.hypot.length는 2로, 최소한 두 개의 매개변수를 처리하도록 설계되었음을 약하게 나타냅니다.  
  
hypot()은 Math의 정적 메서드이므로 항상 Math.hypot()으로 사용해야 하며, 직접 만든 Math 객체의 메서드로 사용해서는 안 됩니다(Math는 생성자가 아닙니다).

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)