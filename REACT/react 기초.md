# 기초 문법

## WARNING 메세지 제어
js 파일 최상단에 넣으면 터미널 ``WARNING`` 메세지를 출럭하지 않는다 ( 주석 중요!! // -  안됨 /* */ - 이것으로 해야 한다)
~~~js
/* esline-disable */
~~~

## component 생성
~~~js
function componentName(){
  return (
    // case01
    <div></div> /* return 안 최상위 태그는 하나만 */

    // case02
    <></>   /* 최상위 태그 생성하지 않고 넣기 */
  )
}
~~~
생성한 ``componenet`` 적용하는 방법
~~~html
<!-- case01 -->
<componentName></componentName> 

<!-- case02 -->
<componentName/>
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

// useState 값 변경
let [따봉, 따봉변경] = useState(0);
console.log(따봉)  /* 0 */
// 따봉변경(변경내용)
글제목수정('제목 바꿔줘') /* 글제목 변수를 '글제목' 에서 '제목 바꿔줘' 로 변경*/
따봉변경(따봉 + 1) /* 실행할 때 마다 따봉 1씩 증가 */

// useState 배열로 만들기
let [글제목 , 글제목수정] = useState(['글제목1' , '글제목2', '글제목3']);
// 출력
console.log(글제목[0]);
console.log(글제목[1]);
console.log(글제목[2]);

console.log(글제목) /* 글제목1글제목2글제목3 */

// 배열 useState 값 변경
/* case01 */
글제목수정(['글제목변경' , '글제목2', '글제목3'])

/* case02 */
let copy = [...글제목]      /* 글제목(배열) 을 복사해서 copay 변수에 새로 생성 */
copy[0] = '글제목 변경'     /* copy(배열)의 첫번째 내용을 '글제목 변경' 으로 변경 */
글제목변경(copy)            /* 글제목 배열 변수를 copy 배열 변수로 바꾼다 */
~~~
그냥 변수로 작업하게 되면 변수가 변경되었을 때 HTML에서 재 랜더링 해줘야하지만 ``useState`` 를 사용하면 변수가 변경되었을 때 자동으로 재 랜더링 해준다
> 변경이 많은 데이터는 ``useState()`` 로  
> 변경이 많이 일어나지 않는 데이터는 ``그냥 변수`` 로  
 
배열변수는 새로 만들어서 넣어줘야 배열을 가르키는 ``키`` 값이 변경되면서 내용이 변경되었다고 판단한다  
변경되었다고 인식해야 값을 변경해준다  
[내용출처 애플코딩 개념설명 동영상](https://codingapple.com/unit/react-5-setstate-homework-edit-button/?id=2305)
> array , object는 ``reference data type`` 이라서..?  
> 더 공부하고 싶으면 ``reference data type`` 찾아서 공부  
  

## event
event(``click``) 삽입 방법  
함수를 따로 만들어서 넣을 수 있고, 함수를 만들지 않고 바로 로직 작성도 가능하다
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