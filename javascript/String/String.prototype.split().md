# String.prototype.split()
__``split()``__ 메서드는 [``String``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

~~~js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
~~~
> 배열 형식으로 반환됨

## 구문
~~~js
str.split([separator[, limit]])
~~~
> __주의__ : 구분자로 빈 문자열(" ")을 제공하면, 사용자가 인식하는 문자 하나 또는 유니코드 문자(코드포인트) 하나씩으로 나누는 것이 아니라, UTF-16코드 유닛으로 나누게 되며 [써로게이트페어(surrogate pair)](http://unicode.org/faq/utf_bom.html#utf16-2) 가 망가질 수 있습니다. 스택 오버플로우의 [How do you get a string to a character array in JavaScript?](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402) 질문도 참고해 보세요.  
써로게이트 페어가 뭘까?  

### 매개변수
#### separator 분리 기호 -> Optional 선택 과목
원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타냅니다. 실제 문자열이나 [정규표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)을 받을 수 있습니다. 문자열 유형의 ``separator``가 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어집니다. ``separator``가 생략되거나 ``str``에 등장하지 않을 경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가집니다. ``separator``가 빈 문자열일 경우 ``str``의 각각의 문자가 배열의 원소 하나씩으로 변환됩니다.

#### limit 한도  -> Optional 선택 과목
끊어진 문자열의 최대 개수를 나타내는 정수입니다. 이 매개변수를 전달하면 split() 메서드는 주어진 ``separator``가 등장할 때마다 문자열을 끊지만 배열의 원소가 ``limit``개가 되면 멈춥니다. 지정된 한계에 도달하기 전에 문자열의 끝까지 탐색했을 경우 ``limit``개 미만의 원소가 있을 수도 있습니다. 남은 문자열은 새로운 배열에 포함되지 않습니다.

### 반환값
주어진 문자열을 ``separator``마다 끊은 부분 문자열을 담은 [``Array``](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 설명
문자열에서 ``separator``가 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환됩니다. ``separator`` 가 등장하지 않거나 생략되었을 경우 배열은 원본 문자열을 유일한 원소로 가집니다. ``separator``가 빈 문자열일 경우, ``str``은 문자열의 모든 문자를 원소로 가지는 배열로 변환됩니다. ``separator``가 원본 문자열의 처음이나 끈에 등장할 경우 반환되는 배열도 빈 문자열로 시작하거나 끝납니다. 그러므로 원본 문자열에 ``separator`` 하나만이 포함되어 있을 경우 빈 문자열 두 개를 원소로 가지는 배열이 반한됩니다.  
  
``separator``가 포획 괄호(capturing parentheses)를 포함하는 정규표현식일 경우, ``separator``가 일치 할 때마다 포획 괄호의 (정의되지 않은 경우도 포함한) 결과가 배열의 해당 위치에 포함됩니다.
> __주의__ : ``separator``가 배열일 경우 분할에 사용하기 전에 우선 문자열로 변환됩니다.

## 예제
### ``split()`` 사용하기
> __주의__ : 빈 문자열이 주어졌을 경우 ``split()``은 빈 배열이 아니라 빈 문자열을 포함한 배열을 반환합니다. 문자열과 ``separator``가 모두 빈 문자열일 때는 빈 배열을 반환합니다.

~~~js
const myString = '';
const splits = myString.split();

console.log(splits);

// ↪ [""]
~~~
다음 예제에서는 문자열을 주어진 구분자로 끊는 함수를 정의합니다. 문자열을 끊은 다음에는 (끊기 이전의) 원본 문자열과 사용한 구분자, 배열의 길이와 각 원소를 로그로 출력합니다.

~~~js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
~~~
위 예제의 출력은 다음과 같습니다.  
  
> 원본 : "Oh brave new world that has such people in it."  
기분 기호 : " "  
10개의 배열 반환: Oh / brave / new / world / that / has / such / people / in / it.

> The original string is (원본): "Oh brave new world that has such people in it."  
The separator is (기분 기호): "undefined" -> 없음  
The array has 1 elements (1개의 배열 반환): Oh brave new world that has such people in it.

> The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"  
The separator is: ","  
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec

### 문자열에서 공백 제거하기
다음 예제에서 ``split()`` 은 세미콜론 앞 뒤에 각각 0개 이상의 공백이 있는 부분 문자열을 찾고, 있을 경우 무자열에서 세미콜론과 공백을 제거합니다. ``split()``의 결과로 반환된 배열은 ``nameList``에 저장됩니다.
~~~js
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*(?:;|$)\s*/;   // -> 정규표현식
var nameList = names.split(re);

console.log(nameList);
~~~

위 예제는 원본 문자열과 반환된 배열을 각각 한 줄씩 로그로 출력합니다.

> Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand   
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]

### 끊는 횟수 제한하기
다음 예제에서 ``split()``은 문자열을 공백으로 끊고 처음 3개의 문자열을 반환합니다.
~~~js
var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);
~~~
위 예제의 로그 출력은 다음과 같습니다.
> ["Hello", "World.", "How"]

### ``RegExp`` 정규표현식 를 사용해 구분자도 결과에 포함하기
``separator``가 포획 괄호 ``()``를 포함하는 정규표현식일 경우, 포획된 결과도 배열에 포함됩니다.
~~~js
var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);

console.log(splits);
~~~
위 예제의 로그 출력은 다음과 같습니다.
> [ "Hello ", "1", " word. Sentence number ", "2", "." ]

### 배열을 구분자로 사용하기
~~~js

var myString = 'this|is|a|Test';
var splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

var myString = 'ca,bc,a,bca,bca,bc';

var splits = myString.split(['a','b']); 
// myString.split(['a','b'])은 myString.split(String(['a','b']))와 같다

console.log(splits);  //["c", "c,", "c", "c", "c"]
~~~

### ``split()``으로 문자열 뒤집기
> 이 방법은 무자열 뒤집기에 효과적인 방법이 아닙니다.
~~~js
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split()에서 반환한 배열에는 reverse()와 join()을 사용할 수 있다
~~~
>문자열에 grapheme clusters가 있을 경우, 유니코드 플래그를 설정해도 오류를 일으킵니다.([esrever]() 등의 라이브러리를 대신 사용하세요).  
무슨말일까?
~~~js
var str = 'résumé';
var strReverse = str.split(/(?:)/u).reverse().join('');
// => "́emuśer"
~~~
> __추가__: === 연산자를 사용하면 원본 문자열이 팰린드롬인지 확인할 수 있습니다.  
팰린드롬이 뭘까?

[내용출처 MDN 공식사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
