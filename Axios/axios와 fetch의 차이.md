# axios와 fetch의 차이
|Axios|Fetch|
|----|----|
| 요청 객체에 url이 있다 | 요청 객체에 url이 없다|
| 써드파티 라이브러리 설치가 필요 | 현대 브라우저에 빌트인이라설치 필요 없음 |
|XSRF 보호를 해준다 | 별도 보호 없음|
| data 속성을 사용 | body 속성을 사용 |
| data는 object를 포함한다 | body는 문자열화 되어있다 |
| status가 200이고 statusText가 'OK'이면 성공이다 | 응답객체가 ok 속성을 포함하면 성이다|
| 자동으로 JSON데이터 형식으로 변환된다 | .json()메서드를 사용해야 한다 |
| 요청을 취소할 수 있고 타임아웃을 걸 수 있다 | 해당 기능 존재 하지않음 |
| HTTP 요청을 가로챌 수 있음 | 기본적으로 제공하지 않음 |
| download진행에 대해 기본적인 지원을 함 | 지원하지 않음 |
| 좀 더 많은 브라우저에 지원됨 | js 내장 함수이기 때문에 지원하지 않는 브라우저 있음 |

## Axios
### 장점
- response timeout 처리 방법이 있다 (fetch에는 존재하지 않는 기능)
- promise 기반으로 다루기가 쉽다
- __크로스 브라우징에 신경을 많이썼기에 브라우저 호환성이 뛰어나다__

### 단점
- 모듈 설치를 해줘야 한다

## fetch
### 장점
- 내장 라이브러리이기에 별도의 import를 해줄 필요가 없다
- promise 기반으로 다루기가 쉽다
- __내장 라이브러리이기에 사용하는 프레임워크가 안정적이지 않을 때 사용하기 좋다__

### 단점
- internet explorer의 경우에는 fetch를 지원하지 않는 버전도 존재한다 (브라우저 호환성이 상대적으로 떨어진다)
- 기능이 부족하다

[내용출처 블로그 axios와 fetch의 차이 정리](https://kimtongting.tistory.com/entry/React-axios-vs-fetch-axios-fetch-%EC%B0%A8%EC%9D%B4-axios-fetch-%EC%B0%A8%EC%9D%B4%EC%A0%90)  
[내용출처 블로그 axios와 fetch의 차이 정리](https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-Ajax%EC%99%80-Axios-%EA%B7%B8%EB%A6%AC%EA%B3%A0-fetch)