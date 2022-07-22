# 기초 문법

## WARNING 메세지 제어
js 파일 최상단에 넣으면 터미널 ``WARNING`` 메세지를 출럭하지 않는다 ( 주석 중요!! // -  안됨 /* */ - 이것으로 해야 한다)
~~~js
/* esline-disable */
~~~

## 파일 상대 경로로 연결하기

### public
public폴어의 index.html에서 시작한다고 생각하고 그냥 상대 경로로 연결하면 된다

### src 폴더에 파일이 있는 경우
#### js , jsx
~~~js
import 네이밍 from '상대경로';

return (
  <>
    <img src={네이밍}/>
  </>
)
~~~
#### css
~~~css
div{background-image:url('상대경로');}
~~~

### lazy  (게으른)
상황에 따라서 현재 페이지에는 없는 하위 컴포넌트들을 import하는 경우가 있다  
그런 경우 하위 컴포넌트가 실제로 랜더링 될 때 불러오도록 설정한다
#### App.js
~~~js
import { lazy , Suspense} from 'react';
// import Home from './routes/Home.jsx'
// import About from './routes/About.js'

const Home = lazy(()=> import('./routes/Home.jsx'))
const About = lazy(()=>import ('./routes/About.js'))

function App() {
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
  // Suspense의 fallback 속성을 이용해서 게을러진 하위 컴포넌트를 불러올 때 로딩 화면을 설정할 수 있다
}
~~~
``lasy``를 사용할 때 ``Suspense``를 꼭 사용해야 한다?  
그렇게 하지 않으면 ``에러`` 난다  
[내용출처 react 공식 사이트](https://ko.reactjs.org/docs/code-splitting.html#reactlazy)



## component 생성
~~~js
// case01
function componentName(){
  return (
    // case01
    <div></div> /* return 안 최상위 태그는 하나만 */

    // case02
    <></>   /* 최상위 태그 생성하지 않고 넣기 */
  )
}

// case02
const componentName = () =>{
  return (
    <>
    </>
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

## useEffect()
컴포넌트가 ``랜더링`` 이후에 어떤 일을 수행해야 하는지를 말한다  
[좀 더 내용이 알고 싶다면 react 공식 사이트 useEffect()](https://ko.reactjs.org/docs/hooks-effect.html)

### 사용법
~~~js
 useEffect(()=>{ /* 랜더링(HTML)이 되고 나서 실행 */
        // mount(장착) , update시 여기 코드 실행
        return () =>{   /* mount(장착)시 실행 안됨 , unmount(제거)시 실행 됨 */
            // useEffect 가 실행하기 전에 실행할 코드
            // 예 > 
            // 기존 타이머는 제거해주세요~
            // 기존 데이터요청은 제거해주세요~
        }
    },[count1 , count2]);
~~~

#### 빡통식 정리의 시간
~~~js
    useEffect(()=>{ })     /*  1. 재랜더링마다 코드 실행하고 싶으면 */
    useEffect(()=>{ } , []) /* 2. mount시 1회 코드실행하고 싶으면 */
    useEffect(()=>{
        return ()=>{
            /* 3. unmount시 1회 코드실행하고 싶으면 */
        }
    })
    useEffect(()=>{ return()=>{
        /* 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{} */
    } })
    useEffect(()=>{ return()=>{
        /* 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{} */
    } } , [])

    useEffect(()=>{ } , [특정state])    /* 5. 특정 state 변경시에만 실행하려면 [state명] */
~~~

### 구 버전 사용법
~~~js
class componentName extends React.Component{
    componentDidMount(){
        // 컴포넌트 mount(장착)시 여기 코드 실행
    }
    componentDidUpdate(){
        // 컴포넌트 update시 여기 코드 실행
    }
    componentWillUnmount(){
        // 컴포넌트 unmount(삭제)시 여기 코드 실행
    }
}
~~~

## useMemo()  성능개선
함수를 최초 랜더링할 때 한번만 실행되게 하는 훅  
``useEffect()`` 와 유사하지만 실행 되는 시점이 다르다  
> useEffect() : HTML이 다 실행하고 실행한다  
> useMemo() : HTML이 랜더링 될 때 실행한다

### 사용법
#### component.js
~~~js
import { useMemo} from 'react';
function 함수(){

}

function Component(){
  useMemo(()=>{
    return 함수()
  } , [state])
  // state가 변경될 때만 실행
}
~~~

### memo()  성능개선
컴포넌트가 재랜더링될 때 변화가 없는 하위 컴포넌트도 같이 랜더링 된다  
변화가 없는 하위 컴포넌트의 랜더링을 막는다

#### 사용법
##### component.js
~~~js
import {  useState } from 'react';

let Child = memo(function(){
  console.log('재랜더링됨');
  return <div>하위 컴포넌트</div>
})

function Component(){
  let [count , setCount] = useState(0)
  return (
    <div>
      <Child count={count}></Child>
      <button onClick={()=>{
        setCount(count++)
      }}>+</button>
    </div>
    // Child 컴포넌트가 count를 받고 있지 않으면 버튼을 눌러도 재랜더링 되지 않고  
    // count 받고 있다면 count 변수가 변할 때 같이 랜더링 된다
  )
}
~~~

## useTransition() , useDeferredValue() 성능개선
느린 컴포넌트 성능향상 가능  
기본적으로 js는 하나의 작업(single-threaded)만 실행이 가능하다 
``useTransition()``을 사용하면 ``useTransition()``로 감싼 코드는 약간 늦게 실행해준다
> batch 기능  
> (리액트18) ajax , setTiemout 내부라면  
> state1변경 , state2변경 , state3변경 이 연달아 일어난다면 마지막 state 변경할 때 한번에 해주는 기능
### 사용법
~~~js
import { useState , useTransition , useDeferredValue } from 'react';

let a = new Array(10000).fill(0);

export default function Performance(){
    let [name , setName] = useState('');
    let [isPending, startTransition] = useTransition();
    // isPending은 startTransition가 아직 처리 중이면 true 

    let state1 = useDeferredValue(name);
    // useTransition 과 거의 동일
    // useDeferredValue 안에 state 값을 넣으면
    // 그 state가 변경 되었을 때 늦게 처리해준다

    return (
        <div>
            <input onChange={(e)=>{
                startTransition(()=>{ /* 감싼 코드를 약간 늦게 실행 */
                    setName(e.target.value)
                })
            }}></input>
            {
              isPending ? '로딩중' : 
              a.map((a , b)=>{
                  return <div key={b}>{state1}</div>
              })
              // startTransition으로 감싼 코드가 실행 중이면 '로딩중'
              //      실행이 끝나면 코드 실행해서 보여준다
              // useDeferredValue를 사용했기 때문에 'name' state1가 state 변수로 변경되었다
            }
        </div>
    )
}
~~~
리액트 18 버전에서 추가 되었지만 , 아직은 사용할 수 없는 테스트 단계이다?  
[react 공식 사이트 더 정확한 내용은 공식 사이트에서 확인](https://ko.reactjs.org/docs/concurrent-mode-patterns.html)

## useContext()
상위 컴포넌트에서 멀리 떨어진(중첩구조의) 하위 컴포넌트로 데이터를 전송할 때 사용된다 
아무리 깊숙히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있습니다   
많이 사용되지는 않는다  
그 이유는 ( Context API 특징)
1. state 변경시 쓸데없는 것까지 재랜더링 된다
2. 나중에 컴포넌트 재사용이 어렵다 (컴포넌트를 다른 페이지에서 사용할려고 할 때..)
> 그래서 __외부 라이브러리 ( Redux 등)__ 을 사용해서 작업한다

### 사용법
#### App.js
~~~js
import './App.css';
import { useState , createContext} from 'react';
import Detail from './routes/Detail.jsx'

function App() { 
  let [재고] = useState([10,20,30]);
  let [데이터] = useState(['뭐로 하지','몰라','아무거나 해']);

  export let Context1 = createContext();
  // 다른 컴포넌트에서 사용할 것이기 때문에 export 해준다

  return (
    <>
      <Context1.Provider value={{ 제고 , 데이터}}>
        <Detail />
      </Context1.Provider>
    </>
    // useContext() 를 사용할 컴포넌트를 useContext()가 담겨있는 변수로 감싸줘야 한다 (.Provider를 붙여줘야 한다)
    // value 속성을 이용해서 여러개의 변수( , 로 구분 )를 넘길 수 있다
  )
}
~~~

#### detail.jsx
~~~js
import { Context1 } from './../App.js'
import { useContext } from "react";

export default function Detail() {
  return (
    <>
      <TabContent />
    </>
  )
}

// 컴포넌트를 다른 js 파일로 만들어서 붙여도 상관없다
function TabContent(){
  let { 재고 , 데이터} = useContext(Context1);
  let objTest = useContext(Context1);
  // 데이터를 넘길 때 {}(오브젝트)로 넘겼기 때문에 오브젝트로 넘어온다

  return (
    <>
      <div>{ 재고[0] }</div> 
      <div>{ 재고[1] }</div> 
      <div>{ 재고[2] }</div>
      <div>{ objTest.재고[0]}</div>
      <div>{ objTest.재고[1]}</div>
      <div>{ objTest.재고[2]}</div>
    </>
    // `재고` 데이터와 `objText.재고[0]` 데이터는 같은 결과 값을 갖는다
  )
}
~~~

## 데이터 전송 (props)
~~~js
function App(){
  let [변수명 , 리셋변수명] = useState([]);
  return (
    <>
      <하위컴포넌트 하위 컴포넌트에서 사용할 이름={상위 컴포넌트 변수 명}></하위컴포넌트>
    </>
    // 변수 뿐 아니라 함수 등... 다양한 것들을 다 넘길 수 있다
    // 변수 , 함수 등..
  )
}

function 하위컴포넌트(상위컴포넌트에서 넘어온 데이터){ /* object로 넘어온다 */
  return (
    <>
      { 매개변수.데이터 이름 }
    </>
  )
}
~~~
### 예
~~~js
function App(){
  let [글제목 , 글제목변경] = useState([]);
  return (
    <>
      <Modal 
        글제목하위={글제목}
        글제목변경하위={글제목변경}
      ></Modal>
    </>
    // 변수 뿐 아니라 함수 등... 다양한 것들을 다 넘길 수 있다
    // 변수 , 함수 등..
  )
}

function Modal(props){ /* object로 넘어온다 */
  return (
    <>
      { props.글제목하위 }
      { props.글제목변경 }
    </>
  )
}
// props 축약 가능
function Modal({글제목하위 , 글제목변경}){ 
  return (
    <>
      {글제목하위}
      {글제목변경}
    </>
  )
}
~~~

## event

### 단순 클릭
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

### 스위치 클릭
~~~js
function App(){
  let [switch , setSwitch] = useState(true) /* 꼭 boolean type일 필요는 없다, 문자열 , 숫자 다 가능 */

  return(
    <div>
      { switch ? <SwitchClick></SwitchClick> : null } 
    </div>
  )
  // 삼항 연산자 사용 , return안 {} 안에서는 if , for는 사용할 수 없다?!
}

// component 생성
function SwitchClick(){
  return(
    <div>
      click 하면 나오고 다시 click 하면 없어지고
    </div>
  )
}
~~~

## animation , transition 주는 법
~~~css
.start{
  opacity: 0;
}
.end{
  opacity: 1;
  transition: opacity 0.5s;
}
~~~
~~~js
// case01 page 전환시 애니메이션
export default function Detail(props) {
  let [fade , setFade] = useState('')

  useEffect(()=>{
      setFade('end');
  }, [fade])

  return (
    <div className={"container start " + fade}>
    </div>
  )
}

// case02   tab에 animation
function TabContent({탭}){
  useEffect(()=>{
      setTimeout(()=>{
          setFade('end');
      },100)
      return ()=>{
          setFade('');
      }
  }, [탭]);

  return (<div className={"start " + fade}>{[<div>내용0</div> , <div>내용1</div> , <div>내용2</div>][탭]}</div>)
}
~~~

### input 내용 가져오기
~~~js
<input type="text" onChange={(e)=> console.log(e.target.value)}/>
<input type="text" onInput={(e)=> console.log(e.target.value)}/>
// onChange , onInput 은 동일하다?!!
~~~