# react router v6

## 설치
> npm install react-router-dom@6  
  
[react router 공식 사이트](https://reactrouter.com/docs/en/v6/getting-started/installation)

## 함수 목록
- BrowserRouter
- Routes
- Route
- Link
- Outlet

### HOOKS (훅)
- useNavigate
- useParams

## BrowserRouter
웹 브라우저에서 React Router를 싱행하기 위한 권장 인터페이스입니다

### 사용법
index.js
~~~js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';   /* ! */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>          !
      <App />
    </BrowserRouter>         !
  </React.StrictMode>
);
// <App> 를 <BrowserRouter> 로 감싸 주어야 router 적용?
~~~

## Routes
``<Routes> 및 <Route>`` 는 현재 위치를 기반으로 React Router에서 무언가를 랜더링하는 기본 방법입니다  
  
Router를 이용해서 페이지 이동시 변경되는 부분  
``Route``를 감싸는 용도

## Route
``<Routes> 및 <Route>`` 는 현재 위치를 기반으로 React Router에서 무언가를 랜더링하는 기본 방법입니다  
  
실제로 변하는 componenet


## Link
사용자가 클릭하거나 탭하여 다른 페이지로 이동할 수 있는 요소입니다  
  
페이지 이동 링크

## Outlet
자식 경로 요소를 랜더링하려면 부모 경로 요소에서 ``<Outlet>`` 을 사용해야 합니다


## 사용법
예 > App.js
~~~js
import Detail from './routes/Detail.jsx'
import { Routes , Route, Link , useNavigate, Outlet} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/detail" element={<Detail />} />
      <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<About/>}/>
      </Route>
      <Route path="*" element={<div>404 없는 페이지요</div>} />
    </Routes>
    // /about/member  입력 시 <Outlet>에 member 가 표시됨
    // nested routes
    // 태그(자식)를 태그(부모)안으로

    // path="*"   경로가 잘못되었을 때 표시되는 페이지
  )
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
~~~

## nested routes
태그(자식)를 태그(부모)안으로
~~~js
import Detail from './routes/Detail.jsx'
import { Routes , Route, Link , useNavigate, Outlet} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<About/>}/>
      </Route>
    </Routes>
  )
}
~~~
### /about/member
about componenet 내용과 memeber componenet 내용이 같이 보인다

### /about/member  (nested routes 사용하지 않았을 때)
about 내용은 안보이고 member만 보인다
~~~js
import Detail from './routes/Detail.jsx'
import { Routes , Route, Link , useNavigate, Outlet} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/about/member" element={<div>멤버임</div>}/>
      <Route path="/about/location" element={<About/>}/>
    </Routes>
  )
}
~~~

## HOOKS (훅)

### useNavigate()
``<Link>`` 태그가 아닌 다른 링크 태그에 router를 적용

#### 사용 법
~~~js
import Detail from './routes/Detail.jsx'
import { Routes , Route, Link , useNavigate, Outlet} from 'react-router-dom'

function App() {
  let navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link href="#cart" onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  )
}
~~~

### useParams()
일치된 현재 URL에서 동적 매개변수의 키 / 값 쌍의 개체를 반환합니다  
``<Route path>`` 자식 경로는 부모 경로에서 모든 매개변수를 상속합니다  

#### App.js
~~~js
import { Routes , Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/detail/:id/:test" element={<Detail />} />
    </Routes>
  )
}
~~~

#### 서브페이지
datail.js
~~~js
import { useParams } from "react-router-dom"
export default function Detail(props) {
  // Route path 경로에 있는 :네이밍 과 변수명을 동일하게 맞춰야한다
  let {id} = useParams();
  let {test} = useParams();

  // URL 파라미터 와 data의 ID 값에 맞는 상품 찾기
  let 찾는상품 = props.shoes.find(function(x){
    return x.id == id;
  })

  return (
    <>
      <h4 className="pt-5">{찾는상품.title}</h4>
    </>
  )
}
~~~