# get Map[@@species]
__``Map[@@species]``__ 정적 접근자 속성은 Map 개체를 복사하는 방법을 지정하는 사용되지 않는 접근자 속성입니다.

## 문법
~~~js
Map[Symbol.species]
~~~

## 반환 값
``get @@species``가 호출된 생성자(``this``)의 값입니다. 반환 값은 복사된 ``Map`` 인스턴스를 구성하는 데 사용됩니다.

## 설명
``@@species`` 접근자 속성은 ``Map`` 개체의 기본 생성자를 반환합니다. 하위 클래스 생성자는 이를 재정의하여 생성자 할당을 변경할 수 있습니다.
> __참고__: 이 속성은 현재 모든 ``Map`` 메서드에서 사용되지 않습니다.

## 예제
### 일반 물체의 종
``@@species`` 속성은 ``Map``의 ``Map`` 생성자인 기본 생성자 함수를 반환합니다.
~~~js
Map[Symbol.species]; // function Map()
~~~

### 파생 개체의 종
``MyMap``과 같은 사용자 정의 ``Map`` 하위 클래스의 인스턴스에서 ``MyMap`` 종은 ``MyMap`` 생성자입니다. 그러나 파생 클래스 메서드에서 부모 ``Map`` 개체를 반환하기 위해 이를 덮어쓸 수 있습니다.
~~~js
class MyMap extends Map {
    // 부모 Map 생성자에 MyMap 종을 덮어씁니다.
    static get [Symbol.species]() {
        return Map;
    }
}
~~~

[내용출처 MDN ??](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species)