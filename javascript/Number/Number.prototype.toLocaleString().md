# Number.prototype.toLocaleString()
이 __``toLocalsString()``__ 메서드는 이 숫자의 언어 구분 표현이 있는 문자열을 반환합니다.
~~~js
function eArabic(x){
  return x.toLocaleString('ar-EG');
}

console.log(eArabic(123456.789));
// expected output: "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic('123456.789'));
// expected output: "123456.789"

console.log(eArabic(NaN));
// expected output: "ليس رقم"
~~~

## 구문
~~~js
numObj.toLocaleString([locales [, options]])
~~~

### 매개 변수
``locales`` 및 ``options`` 인수는 함수의 동작을 사용자와 응용 프로그램이 그 서식 규칙에 사용하는 언어를 지정할 수 있습니다. ``locales`` 및 ``options`` 인수를 무시하는 구현에서 사용되는 로케일과 반환되는 문자열의 형식은 전적으로 구현에 따라 다릅니다.  
  
이러한 매개 변수 및 사용 방법에 대한 자세한 내용은 [Intl.NumberFormat()생성자 ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 를 참조하십시오.

### 반환 값
주어진 숫자의 언어 구분 표현이 있는 문자열

## 예제

### 사용 ``toLocaleString``
로케일을 지정하지 않고 기본적으로 사용하는 경우 기본 로케일 및 기본 옵션이 있는 형식화 된 문자열이 리턴됩니다.
~~~js
var number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
~~~

### 지원 ``locales`` 및 ``options`` 인수 확인
``locales`` 및 ``options`` 인수는 아직 모든 브라우저에서 지원되지 않습니다. ES5.1 이상 구현에서 지원을 확인하려면 [``RangeError``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) 예외 와 함께 잘못된 언어 태그를 거부해야한다는 요구 사항을 사용할 수 있습니다.

~~~js
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
~~~
ES5.1 이전에는 ``toLocaleStrings``인수로 호출하는 경우 범위 오류 예외를 발생시킬 구현이 필요하지 않았습니다.  
  
ed 5.1 이전의 ECMA-262를 지원하는 호스트를 포함하여 모든 호스트에서 작동하는 검사는 다음과 같은 지역 옵션을 ``Number.prototype.toLocaleString`` 직접 지원하는 데 필요한 ECMA-402에 지정된 기능을 테스트하는 것입니다.
~~~js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
~~~
이것은 전역 ``Intl``객체를 테스트 하고 그것이 아닌지 ``null`` 그리고 ``NumberFormat`` 함수 인 속성을 가지고 있는지 확인합니다.

### 사용 ``locales``
이 예는 현지화 된 숫자 형식의 몇 가지 변형을 보여줍니다. 애플리케이션의 사용자 인터페이스에서 사용되는 언어의 형식을 얻으려면 다음 ``locales``인수를 사용하여 해당 언어(및 일부 대체 언어)를 지정해야합니다.
~~~js
var number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
~~~
  
### 사용 ``options``
에서 제공하는 결과는 ``toLocaleString`` 다음 ``options`` 인수를 사용하여 사용자 정의 할 수 있습니다.
~~~js
var number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Use the host default language with options for number formatting
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" where English is the default language, or
// → "30.000,65" where German is the default language, or
// → "30 000,65" where French is the default language
~~~

[내용출처 MDN 공식사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

## 성은이가 정리하는 예제
~~~js
var total = Number.toLocaleString() ;

$('선택자').text(total+ ' 원');
// ex ->  17000 -> 17,000
//        4000000 -> 4,000,000
~~~