# bcrypt
비밀번호를 해시(암호)하는 데 모움을 주는 라이브러리이다

## 설치방법
> npm i bcrypt

## 사용방법
~~~js
const bcrypt = require('bcrypt');

const hash = bcrypt.hash('변경할 값 ( 비밀번호 )', 12)
// 12 -> 숫자가 높을수록 보안에 더 좋지만 오래 걸린다
~~~

## API
- genSaltSync(rounds, minor)
    - rounds- [선택 사항] - 데이터 처리 비용입니다. (기본값 - 10)
    - minor- [선택 사항] - 사용할 bcrypt의 하위 버전입니다. (기본값 - b)
- genSalt(rounds, minor, cb)
    - rounds- [선택 사항] - 데이터 처리 비용입니다. (기본값 - 10)
    - minor- [선택 사항] - 사용할 bcrypt의 하위 버전입니다. (기본값 - b)
    - cb- [선택 사항] - salt가 생성되면 실행되는 콜백입니다. eio를 사용하여 비동기적으로 만듭니다. cb지정되지 않으면 PromisePromise 지원이 가능한 경우 a가 반환됩니다.
        - err- 오류를 자세히 설명하는 콜백의 첫 번째 매개변수입니다.
        - salt- 생성된 salt를 제공하는 콜백에 대한 두 번째 매개변수입니다.
- hashSync(data, salt)
    - data- [필수] - 암호화할 데이터.
    - salt- [필수] - 비밀번호를 해시하는 데 사용할 salt. 숫자로 지정한 경우 지정된 라운드 수로 salt가 생성되어 사용됩니다( 사용법 아래의 예 참조 ).
- hash(data, salt, cb)
    - data- [필수] - 암호화할 데이터.
    - salt- [필수] - 비밀번호를 해시하는 데 사용할 salt. 숫자로 지정한 경우 지정된 라운드 수로 salt가 생성되어 사용됩니다( 사용법 아래의 예 참조 ).
    - cb- [선택 사항] - 데이터가 암호화되면 실행되는 콜백입니다. eio를 사용하여 비동기적으로 만듭니다. cb지정되지 않으면 PromisePromise 지원이 가능한 경우 a가 반환됩니다.
        - err- 오류를 자세히 설명하는 콜백의 첫 번째 매개변수입니다.
        - encrypted- 암호화된 양식을 제공하는 콜백에 대한 두 번째 매개변수입니다.
- compareSync(data, encrypted)
    - data- [필수] - 비교할 데이터.
    - encrypted- [필수] - 비교할 데이터입니다.
- compare(data, encrypted, cb)
    - data- [필수] - 비교할 데이터.
    - encrypted- [필수] - 비교할 데이터입니다.
    - cb- [선택 사항] - 데이터가 비교되면 실행되는 콜백입니다. eio를 사용하여 비동기적으로 만듭니다. cb지정되지 않으면 PromisePromise 지원이 가능한 경우 a가 반환됩니다.
        - err- 오류를 자세히 설명하는 콜백의 첫 번째 매개변수입니다.
        - same- 데이터와 암호화된 형식이 일치하는지 여부를 제공하는 콜백의 두 번째 매개변수입니다[true | false].
- getRounds(encrypted)- 주어진 해시를 암호화하는 데 사용된 라운드 수를 반환합니다.
    - encrypted- [필수] - 사용된 라운드 수를 추출해야 하는 해시입니다.

[내용출처 npm](https://www.npmjs.com/package/bcrypt)