# Vue 기초
~~~js
new Vue({
  el: 인스턴가 그려지는 화면의 시작점 (특정 HTML 태그),
  template: 화면에 표시할 요소 (html , CSS등) 컴포넌트?,
  data: 뷰의 반응성(Reactivity)이 반영된 데이터 속성,
  methods: 화면의 동작과 이벤트 로직을 제어하는 메서드,
  created: 뷰의 라이프 사이클과 관련된 속성,
  watch: data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성,
});
 
~~~

## Vuex
store로 관리?
~~~js
new Vuex.Store({
  state : { 여러 컴포넌트에 공유되는 데이터 },
  getters : { 연산된 state 값을 접근하는 속성 },
  mutations : { state 값을 변형하는 이벤트 로직 메서드 },
  actions : { 비동기 처리 로직을 선언하는 메서드 },
})
~~~

### mutations
~~~js
new Vuex.Store({
  mutations : {
    함수(첫번째 , 두번째){
      첫번째 인자로 state로 접근이 가능하다,
      두번째 인자로 actions에서 넘오는 데이터를 받는다
    }
  }
})
~~~

### actions 사용방법
~~~js
new Vuex.Store({
  actions : {
    함수(첫번째){
      첫번째 인자로 mutations으로 접근이 가능하다
    }
  }
})
~~~

### 예
~~~js
export const store = new Vuex.Store({
    state : {
        news : [],
    },
    mutations : {
        SET_NEWS(state , news){
            state.news = news
        }
    },
    actions : {
        FETCH_NEWS(context){
            fetchNewsList()
            .then((response)=>{
                console.log(response);
                context.commit('SET_NEWS' , response.data);
            })
            .catch(function(error){
                console.log(error)
            })
        }
    }
})
~~~