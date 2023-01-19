# String.prototype.replaceAll()
``replaceAll()`` 메서드는 패턴의 모든 일치 항목이 대체 항목으로 대체된 새 문자열을 반환합니다. 패턴은 문자열 또는 RegExp일 수 있으며 대체 항목은 각 일치 항목에 대해 호출되는 문자열 또는 함수일 수 있습니다. 원래 문자열은 변경되지 않습니다.

## 예
~~~js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// 정규식으로 replaceAll을 호출할 때 필요한 전역 플래그
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
~~~

## 문법
~~~js
replaceAll(pattern, replacement)
~~~

### 매개변수 ( Parameters )
#### pattern
문자열이거나 Symbol.replace 메서드가 있는 객체일 수 있습니다. 일반적인 예는 정규식입니다. Symbol.replace 메서드가 없는 모든 값은 문자열로 강제 변환됩니다.  
  
패턴이 정규식이면 전역(g) 플래그가 설정되어 있어야 합니다. 그렇지 않으면 TypeError가 발생합니다.

#### replacement
문자열 또는 함수일 수 있습니다. 교체는 String.prototype.replace()와 동일한 의미 체계를 갖습니다.

### 반환 값
패턴의 모든 일치 항목이 교체로 대체된 새 문자열입니다.

### 예외
#### 유형 오류
패턴이 전역(g) 플래그가 설정되지 않은 정규식인 경우 발생합니다(플래그 속성에 "g"가 포함되지 않음).

## 설명
이 메서드는 호출된 문자열 값을 변경하지 않습니다. 새 문자열을 반환합니다.  
  
replace()와 달리 이 메서드는 첫 번째 문자열뿐만 아니라 문자열의 모든 항목을 바꿉니다. 특수 문자를 이스케이프하지 않고 RegExp() 생성자를 호출하면 의도하지 않게 의미 체계가 변경될 수 있으므로 문자열이 정적으로 알려지지 않은 경우 특히 유용합니다.
~~~js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
~~~

pattern이 Symbol.replace 메서드(RegExp 객체 포함)가 있는 객체인 경우 대상 문자열과 교체를 인수로 사용하여 해당 메서드가 호출됩니다. 반환 값은 replaceAll()의 반환 값이 됩니다. 이 경우 replaceAll()의 동작은 @@replace 메서드에 의해 완전히 인코딩되므로 replace()와 동일한 결과를 갖게 됩니다(정규식이 전역이라는 추가 입력 유효성 검사는 제외).  
  
패턴이 빈 문자열인 경우 split() 동작과 유사하게 모든 UTF-16 코드 단위 사이에 교체가 삽입됩니다.
~~~js
"xxx".replaceAll("", "_"); // "_x_x_x_"
~~~

regex 속성(특히 고정 플래그)이 replaceAll()과 상호 작용하는 방식에 대한 자세한 내용은 RegExp.prototype[@@replace]()를 참조하세요.

## 예제
### replaceAll() 사용
~~~js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
~~~
### 비전역 정규식 throw
정규식 검색 값을 사용하는 경우 전역이어야 합니다. 이것은 작동하지 않습니다:
~~~js
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll은 전역 RegExp로 호출해야 합니다.
~~~

[내용출처 MDN 일치하는 모든 문자열을 다른 문자열로 바꾼다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)