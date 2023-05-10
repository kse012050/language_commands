# String(문자열)의 함수 간단 정리

## Methods

### String.prototype.at(index)   (at ~에)
index 번째 있는 글자를 가져온다  
``-1`` 마이너스 값을 주면 뒤에서 부터 순서  
> String[index] 랑 차이가 있을까?

### String.prototype.charAt(index) (char 문자 at ~에)
index 번째 있는 글자를 가져온다  
마이너스 값을 허용하지 않는다  
index 값이 length보다 크면 ``빈 문자열`` 반환  
index 값이 ``없으면`` ``0``으로 취급
> at(index) 랑 차이가 뭘가

### String.prototype.charCodeAt(index)
index번째 텍스트의 유니코드 값을 반환한다
~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// 예상 출력 : "The character code 113 is equal to q"
console.log(`${sentence.charCodeAt(index)}`)
// 예상 출력 : 113
~~~

### String.prototype.codePointAt()

### String.prototype.concat()
문자열을 ``연결``하고 새 문자열을 반환한다
~~~js
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// 예상 출력: "Hello World"

console.log(str2.concat(', ', str1));
// 예상 출력: "World, Hello"
~~~

### String.prototype.endsWith()
문자열이 지정된 문자열의 문자로 ``끝나는지`` 여부를 ``boolean`` 값으로 반환한다
~~~js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// 예상 출력: true

console.log(str1.endsWith('best', 17));
// 예상 출력: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// 예상 출력: false
~~~

### String.fromCharCode()
UTF-16 코드 단위 시퀀스에서 생성된 문자열을 반환한다  
무슨 말이야  
유니코드로 문자를 출력하는건가
~~~js
console.log(String.fromCharCode(189, 43, 190, 61));
// 예상 출력: "½+¾="
~~~

### String.fromCodePoint()
지정된 코드 시퀀스를 사용하여 생성된 문자열을 반환한다  
무슨 말이야  
유니코드로 문자를 출력하는건가
~~~js
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// 예상 출력: "☃★♲你"
~~~

### String.prototype.includes()
대/소문자 구분 검색하여 boolean으로 반환

~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// 예상 출력: "The word "fox" is in the sentence"
console.log(`${sentence.includes(word)}`);
// 예상 출력: true
~~~

### String.prototype.indexOf()
``indexOf()`` 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.
~~~js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "dog" is 52"
~~~

### String.prototype.lastIndexOf()
``lastIndexOf()`` 메서드는 주어진 값과 일치하는 부분을 ``fromIndex``로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다. 일치하는 부분을 찾을 수 없으면 ``-1``을 반환합니다.
~~~js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// Expected output: "The index of the first "dog" from the end is 52"
~~~

### String.prototype.localeCompare() ??

### String.prototype.match()
``match()`` 메서드는 문자열이 __정규식__ 과 매치되는 부분을 검색합니다.

### String.prototype.matchAll()
``matchAll()`` 메서드는 캡처 그룹을 포함하여 문자열과 정규 표현식이 일치하는 모든 결과의 반복자를 반환합니다.
~~~js
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
~~~

### String.prototype.normalize()
normalize() 메서드는 문자열의 유니코드 정규화 형식을 반환합니다.
~~~js
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true
~~~

### String.prototype.padEnd()
``padEnd()`` 메서드는 결과 문자열이 주어진 길이에 도달하도록 현재 문자열을 주어진 문자열(필요한 경우 반복)로 채웁니다. 패딩은 현재 문자열의 끝부터 적용됩니다.
~~~js
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "
~~~

### String.prototype.padStart()
``padStart()`` 메서드는 결과 문자열이 지정된 길이에 도달할 때까지 현재 문자열을 다른 문자열로 채웁니다(필요한 경우 여러 번). 패딩은 현재 문자열의 시작 부분부터 적용됩니다.
~~~js
const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"
~~~

### String.raw()
``String.raw()``메서드는 템플릿 리터럴의 태그 함수입니다. 이는 Pyhon의 r 접두사 또는 C#의 문자열 리터럴의 @ 접두사와 유사합니다.(그러나 동일 하지는 않습니다. 이 문제에 관해서는 여기 이슈를 참조하십시오.) 이 메서드는 템플릿 리터럴의 윈시 문자열을 가져오는데 사용됩니다. 즉, 대체(예: ${foo})는 처리되지만 이스케이프(예: \n)는 처리되지 않습니다.
~~~js
// Windows를 사용하는 변수 생성
// 백슬래시를 이스케이프 처리하지 않은 경로:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
~~~

### String.prototype.repeat()
``repeat()`` 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
~~~js
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
~~~

### String.prototype.replace()
해당되는 문자를 원하는 문자로 변경 
~~~js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
~~~

### String.prototype.replaceAll()
모든 해당되는 문자를 원하는 문자로 변경 
~~~js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
~~~

### String.prototype.search()
search() 메서드는 정규 표현식과 이 String 객체간에 같은 것을 찾기 위한 검색을 실행한다.
~~~js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// Expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."
~~~

### String.prototype.slice()
slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
~~~js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
~~~

### String.prototype.split()
split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
~~~js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
~~~

### String.prototype.startsWith()
startsWith() 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.
~~~js
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false
~~~

### String.prototype.substring()
substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
~~~js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
~~~

### String.prototype.toLocaleLowerCase()
toLocaleLowerCase() 메서드는 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다.
~~~js
const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"
~~~

### String.prototype.toLocaleUpperCase()
toLocaleUpperCase() 메서드는 어떤 지역 특정 대/소문자 매핑에 따른 대문자로 변환된 문자열 값을 반환합니다.
~~~js
const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"
~~~

### String.prototype.toLowerCase()
toLowerCase() 메서드는 문자열을 소문자로 변환해 반환합니다.
~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
~~~

### String.prototype.toString()
toString() 메서드는 객체의 문자열 표현을 반환합니다.
~~~js
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
~~~

### String.prototype.toUpperCase()
toUpperCase() 메서드는 문자열을 대문자로 변환해 반환합니다.
~~~js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
~~~

### String.prototype.toWellFormed()
??

### String.prototype.trim()
이 trim()메서드는 문자열의 양쪽 끝에서 공백을 제거하고 원래 문자열을 수정하지 않고 새 문자열을 반환합니다.
~~~js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
~~~

### String.prototype.trimEnd()
이 trimEnd()메서드는 문자열 끝에서 공백을 제거하고 원래 문자열을 수정하지 않고 새 문자열을 반환합니다. trimRight()이 메서드의 별칭입니다.
~~~js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
~~~

### String.prototype.trimStart()
이 trimStart()메서드는 문자열의 시작 부분에서 공백을 제거하고 원래 문자열을 수정하지 않고 새 문자열을 반환합니다. trimLeft()이 메서드의 별칭입니다.
~~~js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   "
~~~

### String.prototype.valueOf()
이 valueOf()메서드는 개체의 기본 값을 반환합니다 String.
~~~js
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
~~~