# Object.prototype.constructor ( 생성자 )
인스턴스의 프로토타입을 만든 ``Object`` 함수의 참조를 반환합니다. 이 속성값은 함수 자체의 참조임을 주의하세요, 함수 이름을 포함하는 문자열이 아니라. 그 값은 ``1``, ``true`` 및 ``"test"``와 같은 원시(primitive) 값에 대해서만 읽기 전용입니다.

## 설명
모든 객체는 자신의 ``prototype``으로부터 ``constructor`` 속성을 상속합니다
~~~js
var o = {};
o.constructor === Object; // true

var o = new Object();
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array();
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
~~~