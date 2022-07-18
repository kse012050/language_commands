# Redux

## 설치
> npm install @reduxjs/toolkit react-redux  
  
[redux 공식 사이트](https://ko.redux.js.org/introduction/getting-started)

## 사용법

### store.js
데이터들만 모아놓은 js 파일
~~~js
import { configureStore , createSlice} from '@reduxjs/toolkit'

let user = createSlice({   /* useState() 역할 (비슷함) */
    name : 'user',          /* name은 어디에 쓰는거지? */
    initialState : 'kim' ,
})

let stock = createSlice({
    name : 'stock',
    initialState : [10,20,30]
})

export default configureStore({
    reducer: { 
        // 작명 : 변수명.reducer
        // reducer를 꼭 붙여줘야 한다
        user1 : user.reducer,
        stock : stock.reducer
    }
}) 
~~~

### index.js
~~~js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"; /* ! */
import store from './store.js';         /* ! */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// Provider 태그로 App를 감싸주고 속성으로 store를 넘겨줘야 store의 데이터를 가져다 쓸 수 있다
//  store 속성은 고정 , 값은 import 받아올 때 변경할 수 있지면 동일 명칭 store로 많이 쓴다
~~~

#### ``<Provider></<Provider>``
전체 주위에 구성 요소를 랜더링 하고 Redux저장소를 소품으로 전달하여 이를 수행한다
~~~html
<Provider store={store}>
    <App/>
</Provider>
~~~


### subPage.js
~~~js
import { useSelector } from 'react-redux';

function SubPage(){
    let a = useSelector((state)=>{return state});   /* state는 store안에 있던 모든 state */
    console.log(a) /* {user1 : Kim , stock:[10,20,30]} */
    // 작명한 변수로 넘어온다
}
~~~

## state 변경

### store.js
~~~js
import { configureStore , createSlice} from '@reduxjs/toolkit'

let user = createSlice({  
    name : 'user',        
    initialState : 'kim' ,
    reducers : {    /* state 변경 함수를 만드는 공간 */
        함수명(state){  /* 함수명 자유롭게~ , state 기존 값*/
            return 변경값 /* user의 값을 return 값으로 변경 */
        },
        changeName(state){  /* 여러개의 함수를 만들 수 있다 */
            return 'john ' + state   
        }
    }
})

let stock = createSlice({
    name : 'stock',
    initialState : [10,20,30],
    // array , object 변경 방법 , 매개변수 넘기는 방법
    reducers : {
        changeStock(state , a){
            return [20,30,40];
            // 쉬운 방법    Immer.js 도움 ( redux 설치시 같이 설치 됨?) , return 없이 가능
            state[0] = a.payload[0];    /* 12 */
            state[1] = a.payload[1];    /* 34 */
            // payload를 꼭 적어줘야하고 payload까지 붙여야 넘긴 값이 된다
            state[2] = 40;
        }
    }
})

export default configureStore({
    reducer: { 
        user1 : user.reducer,
        stock : stock.reducer
    }
}) 

export let { 함수명 , changeName } =  user.actions;
// user.actions 은 user변수 안에 있는 reducers(함수)를 오브젝트 형식으로 가져온다
export let { changeStock } = stock.actions;

export let 모든함수 = {user : user.actions, stock : stock.actions};
~~~
### subPage.js
~~~js
import { useDispatch, useSelector } from 'react-redux';
import { 함수명, changeName , changeStock } from './../store.js'
// store.js에서 내보낸 함수를 받아와야 한다
import { 모든함수 } from './../store.js'
// 한번에 모든 함수 받아오기

function SubPage(){
    let a = useSelector((state)=>{return state});   /* state는 store안에 있던 모든 state */
    console.log(a) /* {user1 : Kim , stock:[10,20,30]} */
    // 작명한 변수로 넘어온다

    let dispatch = useDispatch();
    // 넘어온 함수를 사용하기위해 필요한 함수

    return (
        <>
            {a.user1} {a.stock}
            <button onClick={()={
                dispatch(changeName())
                dispatch(changeStock([12 ,34]))
            }}>state 변경</button>
        </>
        // a.user1의 초기값은 'Kim'
        // button을 클릭 시 a.user1의 값은 'john Kim' 으로 변경

        // a.stock의 초기값 102030
        // button을 클릭 시 a.stock의 값은 '123440' 으로 변경

        // 값을 넘길 땐 '하나의 값'만 가능하다 ?! array , object 활용
    )
}
~~~


