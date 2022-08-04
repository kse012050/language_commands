# Express
Express는 웹 및 모바일 애플리케이션을 위한 일련의 강력한 기능을 제공하는 간결하고 유연한 Node.js 웹 애플리케이션 프레임워크입니다.

## 설치
> npm init  
  
> __entry point :__ 서버 첫 실행 파일 이름  
> 나머지는 일단 그냥 설정
  
    
> npm install express
[내용출처 Express 공식사이트](https://expressjs.com/ko/starter/installing.html)

## 사용법
기본 사용법
~~~js
const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});
// 8080 server 포트 번호

// app.get('경로',function(요청 request , 응답 response ){
//     응답.send('반갑습니다');
// })

app.get('/pet' , function(req , res){
    res.send('펫용품 쇼핑할 수 있는 페이지입니다')
})

// http://localhost:8080/pet 입력 시 '펫용품 쇼핑할 수 있는 페이지입니다' 문구가 뜬다
~~~
[내용출처 Express 공식사이트](https://expressjs.com/ko/guide/routing.html)

### sendFile()
지정한 문자가 아니라 파일을 보여주고 싶을 때
~~~js
app.get('/' , function(req , res){
    res.sendFile(__dirname + '/index.html');
    // __dirname 현재 주소를 뜻하는 것 같다
    // http://localhost:위에 입력해 놓은 포트번호/  입력시 index.html를 보여준다
})
~~~

### post()
넘어온 데이터를 처리할 수 있다
~~~html
    <form action="/add" method="POST">  <!-- action : 데이터 넘길 파일 경로 / method -->
        <div class="form-group">
            <label>오늘의 할일</label>
            <input type="text" class="form-control" name="title">   <!-- name 변수명 -->
        </div>
        <div class="form-group">
            <label>날짜</label>
            <input type="text" class="form-control" name="date">    <!-- name 변수명 -->
        </div>
        <button type="submit" class="btn btn-outline-secondary">Submit</button>
    </form>
~~~
~~~js
// 기본
app.post('경로' , function(요청 , 응답)){
    응답.send('전송완료')
})

// 실 사용
app.post('/add' , function(요청 , 응답){
    응답.send('전송완료')
    console.log(요청.body.userName);
    // http://localhost:위에 입력해 놓은 포트번호/add 로 넘어온 데이터를 '요청'을 통해 볼 수 있다
})
~~~