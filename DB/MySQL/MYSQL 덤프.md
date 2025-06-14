# MYSQL 덤프
cdm에서 실행

## MYSQL 덤프 생성 방법
~~~dir
mysql -u [유저명] -p [데이터베이스명] < [백업파일명].sql
~~~

## MYSQL 덤프 적용 방법
~~~dir
mysql -u [유저명] -p [데이터베이스명] < [백업파일명].sql
mysql -u [유저명] -p -P [포트번호] [데이터베이스명] < [백업파일명].sql
~~~
포트 생략 가능