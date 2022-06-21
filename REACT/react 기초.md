# 기초 문법

## WARNING 메세지 제어
js 파일 최상단에 넣으면 터미널 ``WARNING`` 메세지를 출럭하지 않는다 ( 주석 중요!! // -  안됨 /* */ - 이것으로 해야 한다)
~~~js
/* esline-disable */
~~~


## useState()
__destructuring__ 문법
### 사용법
~~~js
// 축약
let [글제목 , 글제목수정] = useState('글제목');

// 위와 동일
let array = ['글제목', '글제목수정'];
let a = array[0]
let b = array[1]

// useState 배열로 만들기
let [글제목 , 글제목수정] = useState(['글제목1' , '글제목2', '글제목3']);
// 출력
console.log(글제목[0]);
console.log(글제목[1]);
console.log(글제목[2]);

console.log(글제목) /* 글제목1글제목2글제목3 */
~~~
그냥 변수로 작업하게 되면 변수가 변경되었을 때 HTML에서 재 랜더링 해줘야하지만 ``useState`` 를 사용하면 변수가 변경되었을 때 자동으로 재 랜더링 해준다
> 변경이 많은 데이터는 ``useState()`` 로  
> 변경이 많이 일어나지 않는 데이터는 ``그냥 변수`` 로

## event
~~~jsx
function App() {
  function 함수명(){
    로직
  }

  return (
    <div>
        <span onClick={ 함수명 }>👍</span></h4>
        <span onClick={ ()=>{로직} }>👍</span></h4>
    </div>
  );
}
~~~