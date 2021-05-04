# String.prototype.toLocaleLowerCase()
``toLocaleLowerCase()`` 메서드는 로케일 별 대소 문자 매핑에 따라 소문자로 변환 된 호출 문자열 값을 반환합니다.
~~~js
const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// 예상 출력 : "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// 예상 출력 : "istanbul"
~~~

## Syntax (문법)
~~~js
toLocaleLowerCase()
toLocaleLowerCase(locale)
toLocaleLowerCase([locale1, locale2, ...])
~~~

### Parameters (매개변수)
#### locale [Optional]
로케일 매개 변수는 로케일 별 케이스 맵핑에 따라 소문자로 변환하는 데 사용할 로케일을 나타냅니다. 배열에 여러 로케일이 제공되는 경우 가장 적합한 로케일이 사용됩니다. 기본 로케일은 호스트 환경의 현재 로케일입니다.

### Return value (반환 값)
로케일 별 대소 문자 매핑에 따라 소문자로 변환 된 호출 문자열을 나타내는 새 문자열입니다.

### Exceptions (예외)
- 로케일 인수가 유효한 언어 태그가 아닌 경우 [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) ( "잘못된 언어 태그 : xx_yy")가 발생합니다.
- 배열 요소가 문자열 유형이 아닌 경우 [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ( "로케일 인수의 잘못된 요소")가 발생합니다.

## Description (기술)
``toLocaleLowerCase()`` 메서드는 로케일 별 대소 문자 매핑에 따라 소문자로 변환 된 문자열 값을 반환합니다. ``toLocaleLowerCase()``는 문자열 자체의 값에 영향을주지 않습니다. 대부분의 경우 이는 [toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)와 동일한 결과를 생성하지만 터키어와 같이 대소 문자 매핑이 유니 코드의 기본 대소 문자 매핑을 따르지 않는 일부 로케일의 경우 결과가 다를 수 있습니다.

## Examples (예제)
### toLocaleLowerCase() 사용
~~~js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
~~~

[내용출처 MDN toLocaleLowerCase() (소문자로 변환)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)