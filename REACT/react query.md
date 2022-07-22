# react-query
데이터 요청을 실시간으로 할 수있게 만들어 주며 , 문법과 데이터 통신 (성공 , 실패 , 실시간 데이터 전송) 등을 편하게 작업 가능하게 만들어준다

## 설치 방법
> $ npm i @tanstack/react-query

> or  

> $ yarn add @tanstack/react-query

## 사용법

### index.js
~~~js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}
~~~

### SubPage.js
~~~js
import { useQuery } from '@tanstack/react-query'

function SubPage() {
    const result = useQuery(['repoData'], () =>{
        // useQuery 부븐에 꼭 [] 로 받아와야 된다?!
        // fetch 사용
        return fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>{
            return res.json()
        })
        // axios 사용
        return axios.get('https://codingapple1.github.io/userdata.json')
        .then((a)=>{ 
            console.log('요청됨');
            return a.data 
        }),
        { staleTime : 2000 }
        // staleTime을 이용해서 반복 실행 주기를 설정할 수 있다
    })  
    result.data       
    /* 성공했을 때 가져 오는 데이터 */
    result.isLoading  
    /* 데이터를 가지고 오고 있으면 true? */
    result.error
    // 데이터 요청이 실패하면 true?
}

~~~
[react-query 공식사이트 실시간 데이터 통신](https://tanstack.com/query/v4/docs/overview)