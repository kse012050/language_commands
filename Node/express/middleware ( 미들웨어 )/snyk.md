# snyk
dependencies (npm i 로 설치한 모듈들)을 관리해주는 모듈  
npm@6부터 npm은 자동으로 모든 설치 요청을 검사합니다  
또한 ``npm audit``을 이용해 의존성 트리를 검사할 수 있습니다  
더 강한 보안을 원한다면, ``snyk``을 사용하세요

## 사용법
### 설치방법
> npm i -g snyk

### 취약점 검사 방법
> snyk test

[내용출처 express](https://expressjs.com/ko/advanced/best-practice-security.html#ensure-your-dependencies-are-secure)