# Math.ceil()       (ceil 올림)
Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.

## Syntax (문법)
~~~js
Math.ceil(x)
~~~

### Parameters (매개변수)

#### x
숫자

### Return value (반환값)
주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자


## Description (설명)
ceil() 은 Math 의 정적 메소드이므로, 사용자가 생성하는 Math 객체의 메소드처럼 사용하지 않고, 언제나 Math.ceil() 의 형태로 사용 합니다. (Math 는 생성자가 아님)

## Examples (예제)
### Math.ceil() 사용 예
다음은 Math.ceil() 의 사용 예입니다.
~~~js
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
~~~

### 소수점 처리
~~~js
// Closure
(function() {
  /**
   * 숫자의 소수 조정.
   *
   * @param {String}  type  조정 유형입니다.
   * @param {Number}  value 수.
   * @param {Integer} exp   지수 (조정 밑의 10 로그).
   * @returns {Number} 조정 된 값입니다.
   */
  function decimalAdjust(type, value, exp) {
    // exp가 정의되지 않거나 0 인 경우 ...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // 값이 숫자가 아니거나 exp가 정수가 아닌 경우 ...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // 소수점 반올림
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // 소수점 바닥
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // 십진수 천장
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
// Floor
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Ceil
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
~~~

[내용출처 MDN ceil(올림)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)