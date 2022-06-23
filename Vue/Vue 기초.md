# Vue

## Vue 기초
~~~js
new Vue({
  el: 인스턴가 그려지는 화면의 시작점 (특정 HTML 태그),
  template: 화면에 표시할 요소 (html , CSS등) 컴포넌트?,
  data: 뷰의 반응성(Reactivity)이 반영된 데이터 속성,
  computed : 선언형 함수,
  methods: 화면의 동작과 이벤트 로직을 제어하는 메서드,
  created: 뷰의 라이프 사이클과 관련된 속성,
  watch: data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성,
});
~~~

### 기초 사용법
~~~html
<template>
  <div>
    <button v-on:click="실행할 methods 함수 명(매개변수)">click</button>
    <!-- 매개 변수가 없다면 () 생략 가능 -->
  </div>
</template>
~~~
~~~js
import Basic from './view/Basic.vue'
export default {
  data(){
    return {
      변수명1 : 데이터,
      변수명1 : 데이터,
      // 숫자 , 문자열 , 배열 , 오브젝트 다 가능하다
    }
  },
  computed : {
    함수명(){
      // event에 연결할 수 없다
      retrun;
      // return이 꼭 있어야 한다
      // 즉, 로직과 동시에 결과 값을 반환 , 그 결과 값을 보여준다

      // ex)
      // 이미 선언된 변수를 활용해서 결과 값을 만들면 변수를 바꾸지 않고 결과 값을 얻을 수 있다
    }
  },
  methods : {
    // event에 연결할 수 있다
    // 함수의 매개변수를 받을 수 있다
    함수명(매개변수){
      // return이 없어도 된다
      // 즉, 결과 값을 다른 곳에서 사용할 수 있다
    }
  },
  watch : {
    변수명(){
      // 해당 변수가 변경이 되면 실행한다
    }
  }
  components: {
    // 페이지에서 사용할 컴포넌트 이름 : import해서 가져온 이름
    test : Basic,
    // 이름이 같다면 생략가능
    Basic
  }
}
~~~

#### 예
~~~html
<template>
  <div>
    <h2>현재 컴포넌트에서 데이터 실험</h2>
    {{ num }}
    <button v-on:click="test01(10)">click</button>
  </div>
</template>
~~~
~~~js
export default {
  data(){
    return {
      str : '문자열',
      num : 1,
      array : [1,2,3],
      obj : {
        a : 'A',
        b : 1,
      }
    }
  },
  computed : {
    test(){
      return this.num * 2;
    }
  },
  methods : {
    test01(a){
      console.log('methods');
      this.num = this.num + a;
    }
  },
  watch : {
    num(){
      console.log('whtch');
    }
  }
}
~~~

### 라이프 사이클 훅

## 데이터 전달
vuex 사용 전

### 상위 컴포넌트
~~~html
<template>
  <div>
    <!-- v-bind 하위 컴포넌트로 데이터 전달 -->
    <!-- v-on 하위 컴포넌트에서 넘어온 이벤트 -->
    <sub-components v-bind:하위컴포넌트 변수 명="상위 컴포넌트에서 보내는 변수 명" 
    v-on:하위 컴포넌트에서 넘어온 이벤트 이름="상위 컴포넌트에서 실행할 함수명(매개변수)">
    </sub-components>
    <!-- 매개변수가 없다면 () 생략가능 -->

    <sub-components v-bind:propsdata="num"></sub-components>
  </div>
</template>
~~~
~~~js
import SubComponenet from '경로'
export default{
  data(){
    return {
      num : 1,
    }
  },
  components : {
    SubComponent
  },
  methods : {
    함수명 : function(매개변수){

    },

    // 축약
    numIncrea(a){
      this.num = this.num + a;
    }
  }
}
~~~
### 하위 컴포넌트
sub component
~~~html
<template>
    <div>
        {{ propsdata }}
        <button v-on:click="하위 컴포넌트에 있는 함수 명">click</button>
    </div>
</template>
~~~
~~~js
export default {
    props : ['propsdata'],
    methods : {
      함수명 : function(){
        this.$emit('상위 컴포넌트로 넘길 이벤트 이름' , 데이터);
        // 넘길 데이터가 없다면 생략 가능
      }

      // 축약
      함수명(){

      }
    }
}
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