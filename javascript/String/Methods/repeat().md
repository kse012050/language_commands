# String.prototype.repeat()
__``repeat()``__ 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

## 구문
~~~js
str.repeat(count);
~~~

### 매개변수
#### count
문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수([0, +∞)).

### 반환값
현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열.

### 예외
- ``RangeError``: 반복 횟수는 양의 정수여야 함.  
- ``RangeError``: 반복 횟수는 무한대보다 작아야 하며, 최대 문자열 크기를 넘어선 안됨.

## 예제
~~~js
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count는 정수로 변환됩니다)
'abc'.repeat(1/0);  // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
~~~

[내용출처 MDN repeat() 문자를 반복해주는 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)