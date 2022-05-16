# String.prototype.charCodeAt()
## 시도해보기
__``charCodeAt()``__ 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.

~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code `113` is equal to `q`"
~~~

전체 코드 값을 원하신다면 [String.prototype.codePointAt() (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)을 사용하세요.

## 구문
~~~js
str.charCodeAt(index)
~~~

### 매개변수
#### index
0 이상이고 문자열의 길이보다 작은 정수. 숫자가 아니라면 0을 기본값으로 사용함. 

### 반환 값
주어진 인덱스 대한 문자에 대한 UTF-16 코드를 나타내는 숫자
범위 밖으로 넘어갔을 경우 __NaN__

## 설명
유니코드 코드 포인트의 범위는 0에서 1114111(0x10FFFF)입니다. 처음 128개의 유니코드 코드 포인트는 ASCII 문자 인코딩과 직접 일치합니다. 유니코드에 대한 정보는 JavaScript 가이드를 참조하십시오.  
  
``charCodeAt()``는 항상 65536보다 작은 값을 반환합니다. 이는 높은 코드 포인트가 실제 문자를 구성하는 데 사용되는 (낮은 값) "대리" 의사 문자 쌍으로 표시되기 때문입니다. 이 때문에 값이 65536 이상인 개별 문자에 대한 전체 문자를 검사하거나 재생산하려면 해당 문자에 대해 charCodeAt(i)뿐만 아니라 charCodeAt(i+1)(검사하는 것처럼 /두 글자로 된 문자열 재생) 또는 대신 codePointAt(i)를 사용합니다. 아래의 예 2와 3을 참조하십시오.  
  
``charCodeAt()``는 주어진 인덱스가 0보다 작거나 문자열 길이보다 크거나 같은 경우 NaN을 반환합니다.  
  
이전 버전과의 호환성: JavaScript 1.2와 같은 이전 버전에서 ``charCodeAt() ``메서드는 지정된 인덱스에 있는 문자의 ISO-Latin-1 코드 집합 값을 나타내는 숫자를 반환합니다. ISO-Latin-1 코드 집합의 범위는 0에서 255까지입니다. 처음 0에서 127은 ASCII 문자 집합과 직접 일치합니다.

## 예제
### charCodeAt() 사용
다음 예제에서는 A의 유니코드 값인 65를 반환합니다.
~~~js
'ABC'.charCodeAt(0); // returns 65
~~~

### 문자열의 앞부분에 존재하는지 알 수 없는 경우 기본 다국어 평면이 아닌 문자를 처리하도록 charCodeAt() 수정
이 버전은 지정된 인덱스 위치 이전에 BMP가 아닌 문자가 있는지 여부를 알 수 없는 경우 for 루프 등에 사용할 수 있습니다.
~~~js
function fixedCharCodeAt(str, idx) {
    // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;

    // High surrogate (could change last hex to 0xDB7F to treat high
    // private surrogates as single characters)
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        if (isNaN(low)) {
        throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        // We return false to allow loops to skip this iteration since should have
        // already handled high surrogate above in the previous iteration
        return false;
        /*hi = str.charCodeAt(idx - 1);
        low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
    }
    return code;
}
~~~

### 기본 다국어 평면이 아닌 문자가 문자열의 이전에 존재하는 것으로 알려진 경우 처리하도록 charCodeAt() 수정
~~~js
function knownCharCodeAt(str, idx) {
    str += '';
    var code,
        end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 < idx) {
        idx++;
        }
        else {
        break;
        }
    }

    if (idx >= end || idx < 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        // Go one further, since one of the "characters" is part of a surrogate pair
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}
~~~

[내용출처 MDN 문자열을 유니코드 값으로 변환한다](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)