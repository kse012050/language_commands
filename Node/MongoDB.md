# MongoDB

## 설치
> npm install mongodb@버전  
> npm install mongodb@3.6.3

## 사용법
~~~js
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('URL',function(에러 , client){
    if(에러){console.log(에러)}
    db = client.db('Collections name')
})

app.get('경로', function(요청 , 응답){
    // .find().toArray  안에 있는 모든 데이터를 꺼낸다
     db.collection('Collections 안 테이블 이름').find().toArray(function(에러 , 결과){
        응답.render('데이터를 받을 파일 경로', { 변수명 : 결과});
    });
})
~~~

~~~js
const app = express();

const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://아이디:비밀번호@cluster0.pztdx.mongodb.net/?retryWrites=true&w=majority', function(에러 , client){
    // 연결되면 할일
    if(에러){return console.log(에러)}
    db = client.db('todoapp');

    app.listen(8080, function(){
        console.log('listening on 8080');
    });
    
})

app.get('/list',function(요청 , 응답){
    // 디비에 저장된 post라는 collection안의 모든 데이터를 꺼내주세요
    db.collection('post').find().toArray(function(에러 , 결과){
        console.log(결과);
        응답.render('list.ejs', { posts : 결과});
    });
})
~~~

### URL
#### 사이트에서 url 보는 방법
![mongodb connect URL 설명](./images/mongoDB_URL01.PNG)  
![mongodb connect URL 설명](./images/mongoDB_URL02.PNG)  
![mongodb connect URL 설명](./images/mongoDB_URL03.PNG)  
url에서 password 및 admin 정보는 변경해야 한다

### Collections name
#### 사이트에서 Collection 보는 방법
![mongodb collection 설명](./images/mongoDB_conllectionName01.PNG)
![mongodb collection 설명](./images/mongoDB_conllectionName02.PNG)



## 사이트 가입 및 초기셋팅
1. __구글에 Mongodb atlas 라고 검색해서 홈페이지를 방문합니다__
2. __가입합니다. 아마 메일인증 필요__
3. __뭐 채우라고 하면 잘 채워봅니다 (나중에 변경가능)__
![mongodb 초기 셋팅 방법](./images/mongoDB_setting01.png)
4. __무료 티어를 선택합니다__
![mongodb 초기 셋팅 방법](./images/mongoDB_setting02.png)
5. __서버위치를 선택합니다. 한국과 물리적으로 가장 가까운 곳을 골라줍니다__  
그 밑 내용들은 아마 안건드려도 될듯요 그리고 계속 진행하면 Cluster가 생성됩니다. 
![mongodb 초기 셋팅 방법](./images/mongoDB_setting03.png)
6. __Database Access 메뉴에서 DB 접속용 아이디/비번을 생성합니다__  
데이터베이스 접속할 수 있는 아이디/비번을 새로 만들어주는겁니다.  
왜냐면 하나의 데이터베이스를 여러사람이 사용할 수도 있으니까요.  
아주 안전해보이는 admin/qwer1234 이런 아이디 비번은 어떨까요 아무튼 만들고 잘 기억해두십시오. 
![mongodb 초기 셋팅 방법](./images/mongoDB_setting04.png)
![mongodb 초기 셋팅 방법](./images/mongoDB_setting05.png)
7. __Network Access 메뉴에서 IP를 추가합니다__  
데이터베이스 접속할 수 있는 IP를 미리 정의해놓는 일종의 보안장치입니다.  
스타벅스에서 코딩하실게 분명하니 Allow access from anywhere을 누르시거나 0.0.0.0/0 을 추가합니다. 
![mongodb 초기 셋팅 방법](./images/mongoDB_setting06.png)
![mongodb 초기 셋팅 방법](./images/mongoDB_setting07.png)
8. __Database / collection 만들기를 진행합니다__  
Cluster는 하나의 호스팅 공간이고  
거기 안에 여러분의 데이터베이스를 만들어야 데이터를 저장할 수 있습니다  
다음시간에 할 것이긴 한데 아무튼 먼저 합시다
![mongodb 초기 셋팅 방법](./images/mongoDB_setting08.png)
![mongodb 초기 셋팅 방법](./images/mongoDB_setting09.png)
![mongodb 초기 셋팅 방법](./images/mongoDB_setting10.png)

데이터베이스 이름을 맘대로 설정해주면 됩니다  
저는 이렇게 했는데 이러면 __todoapp 이라는 이름의 데이터베이스__ 가 하나 생성됩니다  
이제 이 데이터베이스를 여러분의 컴퓨터에서 접속하려면  
강의에서 설명하는 접속 url을 여러분 코드에 복붙해주면 됩니다  
접속 url엔 여러분의 디비 접속용 아이디/비번/데이터베이스 이름이 들어가야합니다  

[내용출처 애플코딩](https://codingapple.com/course-status/)

 