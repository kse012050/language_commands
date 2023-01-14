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