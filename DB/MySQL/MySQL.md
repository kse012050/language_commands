# MySQL ( 관계형 데이터 베이스 )
Structured Query Language - 구조화된 쿼리 언어

## 간단 명령어 사용법 ( 데이터베이스 스키마 관련 )

### SHOW {DATABASES | SCHEMAS};
데이터베이스( 스키마 ) 목록을 보여준다

### USE 이름;
`이름`으로 된 데이터베이스( 스키마 )를 사용한다

### CREATE DATABASE 이름;
사용자가 지정한 `이름`으로 데이터베이스( 스키마 )를 생성한다

### DROP DATABASE 이름;
`이름` 으로 된 데이터 베이스( 스키마 )를 제거한다


## 간단 명령어 사용법 ( 데이터베이스 스키마안 테이블 관련 )

### SHOW TABLES;
데이터베이스 ( 스카마 )안에 있는 테이블 목록을 보여준다

### CREATE TABLE 이름( 옵션들 - 행, PRIMARY KEY(행 이름) )
사용자가 지정한 `이름`으로 테이블을 만든다 ( 옵션은 나중에 정리 )

### DROP TABLE 이름;
`이름` 으로 된 데이터 베이스( 스키마 )안 데이블을 제거한다


## 에러 정리
### ERROR 1820 (HY000): __You Must reset your password__ using ALTER USER statement before executing this statement
비밀번호를 바꿔야 한다

#### SET PASSWORD = PASSWORD('새로운 비밀번호');
``root``의 비밀번호를 변경한다  
> 공부할 땐 괜찮지만, 실제 서비스할 때는 이렇게 하면 안된다 ( 더 좋은? 더 보안에 적합한 방법이 있는 건가? )