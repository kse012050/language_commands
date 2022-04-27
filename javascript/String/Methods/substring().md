# String.prototype.substring()
__``substring()``__ 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.

~~~js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
~~~

## 사용방법
~~~js
str.substring(indexStart[, indexEnd])
~~~

### 매개변수
#### indexStart
반환문자열의 시작 인덱스 

#### indexEnd
옵션.  반환문자열의 마지막 인덱스 (포함하지 않음.)

### 반환값
기존문자열의  부분 문자열을 반환합니다. 

## 설명 ( Description )
``substring()`` 메서드는 ``indexStart`` 부터 문자를 추출하지만 ``indexEnd`` 가 포함되지 않아도 괜찮습니다. 특징은 아래와 같습니다.  
  
- 만약 ``indexEnd`` 가 생략된 경우, ``substring()`` 문자열의 끝까지 모든 문자를 추출합니다.
- 만약 ``indexStart`` 가 indexEnd와 같을 경우, ``substring()`` 빈 문자열을 반환합니다.
- 만약 ``indexStart`` 가 indexEnd보다 큰 경우, ``substring()`` 메서드는 마치 두 개의 인자를 바꾼 듯 작동하게 됩니다. 아래 예제를 보세요.  
  
0보다 작은 인자 값을 가지는 경우에는 0으로, ``stringName.length`` 보다 큰 인자 값을 가지는 경우, ``stringName.length`` 로 처리됩니다. NaN 값은 0으로 처리됩니다.

## 예 ( Examples )

### substring() 사용
다음 예제에서는 ``substring()``을 사용하여 ``'Mozilla'`` 문자열의 문자를 표시합니다.

~~~js
var anyString = 'Mozilla';

// Displays 'M'
console.log(anyString.substring(0, 1));
console.log(anyString.substring(1, 0));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
~~~

### length 속성과 함께 substring() 사용
다음 예제에서는 ``substring()`` 메서드와 length 속성을 사용하여 특정 문자열의 마지막 문자를 추출합니다. 이 방법은 위의 예에서와 같이 시작 및 종료 인덱스를 알 필요가 없다는 점을 감안할 때 기억하기 더 쉬울 수 있습니다.

~~~js
// 마지막 4자를 'illa'로 표시
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// 'zilla' 마지막 5자를 표시합니다.
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
~~~

### substring()과 substr()의 차이점
``substring()`` 메서드와 ``substr()`` 메서드 사이에는 미묘한 차이가 있으므로 혼동하지 않도록 주의해야 합니다.  
  
``substring()``의 인수는 시작 및 끝 인덱스를 나타내는 반면`` substr()``의 인수는 시작 인덱스와 반환된 문자열에 포함할 문자 수를 나타냅니다.

~~~js
var text = 'Mozilla';
console.log(text.substring(2,5)); // => "zil"
console.log(text.substr(2,3));    // => "zil"
~~~

### substring()과 slice()의 차이점
``substring()`` 및 ``slice()`` 메서드는 거의 동일하지만 둘 사이에는 특히 음수 인수를 처리하는 방식에서 몇 가지 미묘한 차이가 있습니다.  
  
``substring()`` 메서드는 ``indexStart``가 ``indexEnd``보다 크면 두 인수를 교환합니다. 즉, 문자열이 여전히 반환됩니다. 이 경우 ``slice()`` 메서드는 빈 문자열을 반환합니다.

~~~js
var text = 'Mozilla';
console.log(text.substring(5, 2)); // => "zil"
console.log(text.slice(5, 2));     // => ""
~~~
인수 중 하나 또는 모두가 음수 또는 ``NaN``이면 ``substring()`` 메서드는 인수를 0인 것처럼 처리합니다.

~~~js
console.log(text.substring(-5, 2)); // => "Mo"
console.log(text.substring(-5, -2)); // => ""
~~~

``slice()``는 또한 ``NaN`` 인수를 ``0``으로 처리하지만 음수 값이 주어지면 인덱스를 찾기 위해 문자열 끝에서 거꾸로 계산합니다.

~~~js
console.log(text.slice(-5, 2)); // => ""
console.log(text.slice(-5, -2)); // => "zil"
~~~
음수에 대한 더 많은 예는 [``slice()``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice) 페이지를 참조하십시오.

### 문자열 내의 부분 문자열 바꾸기
다음 예제에서는 문자열 내의 부분 문자열을 바꿉니다. 개별 문자와 하위 문자열을 모두 대체합니다. 예제 끝에 있는 함수 호출은 문자열 ``Brave New World``를 ``Brave New Web``으로 변경합니다.

~~~js
// fullS 문자열에서 oldS를 newS로 바꿉니다.
function replaceString(oldS, newS, fullS) {
  for (var i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString('World', 'Web', 'Brave New World');
~~~

예를 들어 여기서 'World'를 'OtherWorld'로 바꾸려고 시도한 경우와 같이 ``oldS`` 자체가 ``newS``의 하위 문자열인 경우 이로 인해 무한 루프가 발생할 수 있습니다. 문자열을 교체하는 더 좋은 방법은 다음과 같습니다.

~~~js
function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
}
~~~
위의 코드는 부분 문자열 작업의 예입니다. 부분 문자열을 교체해야 하는 경우 대부분 [``String.prototype.replace()``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)를 사용합니다.

[내용출처 MDN substring() 문자열 짜르기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)