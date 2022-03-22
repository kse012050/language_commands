# Math.sqrt() - square root 제곱근
``Math.sqrt()`` 함수는 숫자의 제곱근을 반환합니다

## 문법
~~~js
Math.sqrt(x)
~~~

### 매개변수
#### x
숫자

### 반환 값
주어진 숫자에 루트(√ )를 씌웁니다. 만약 숫자가 음수이면 __``NaN``__ 를 반환합니다.

### 설명
만약 ``x`` 가 음수라면 ``Math.sqrt()`` 함수는 __``NaN``__ 를 반환합니다.  
  
``sqrt()`` 는 ``Math``의 정적 메서드 이므로 만든  ``Math`` 객체의 메서드가 아니라 항상 ``Math.sqrt()``함수를 사용해야합니다. (``Math``는 생성자가 없습니다.)

## 예제

### Math.sqrt()
~~~js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
~~~
[내용출처 MDN 제곱근](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
