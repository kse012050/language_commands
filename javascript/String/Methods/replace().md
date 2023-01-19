# String.prototype.replace()    (replace : 바꾸다)
__replace()__ 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 그 패턴은 문자열이나 ``정규식(RegExp)``이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.  
 
pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않습니다.

## 시도해보기
~~~js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// 빠른 갈색 여우는 게으른 개를 뛰어 넘습니다. 개가 반응하면 정말 게으른 걸까?

console.log(p.replace('dog', 'monkey'));    /* monkey : 원숭이 */
// 예상 출력: "빠른 갈색 여우가 게으른 원숭이를 뛰어 넘습니다. 개가 반응하면 정말 게으른 것입니까?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));    /* ferret : 흰 족제비 */
// 예상 출력: "빠른 갈색 여우가 게으른 흰 족제비를 뛰어 넘습니다. 개가 반응하면 정말 게으른 것입니까?"
~~~

## 구문
~~~js
var newStr = str.replace(regexp|substr, newSubstr|function)
~~~

### 매개변수
- regexp (pattern)  
정규식(RegExp) 객체 또는 리터럴. 일치하는 항목은 newSubStr 또는 지정된 함수(function)가 반환 한 값으로 대체됩니다.

- substr (pattern)  
newSubStr로 대체 될 String. 정규식이 아닌 글자 그대로의 문자열로 처리됩니다. 오직 첫 번째 일치되는 문자열만이 교체됩니다.

- newSubStr (replacement)  
첫번째 파라미터를 대신할 문자열(String). 여러가지 대체 패턴들이 지원됩니다. 아래의 "매개변수가 string으로 지정되었을 때" 섹션을 참고하세요.

- function (replacement)  
주어진 regexp 또는 substr에 일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수. 이 함수에 제공되는 인수는 아래 "매개변수가 function으로 지정되었을 때"단원에서 설명합니다.

### 반환값
어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열

## 설명 
이 메서드는 호출된 ``String`` 객체를 바꾸지 않습니다. 단순히 새로운 문자열을 리턴합니다.  
  
모든 문자열에 대해 검색하고 바꾸려면 정규표현식의 g플래그를 포함하세요.

> 뒷 내용은 아직 잘 모르겠다

[내용출처 MDN 일치하는 문자열을 다른 문자열로 바꾼다](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
