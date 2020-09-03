# vm.$emit( eventName, […args] )
- 전달인자 :  
    - ``{string} event``
    - ``[...args]``  
    현재 인스턴스에서 이벤트를 트리거 합니다. 추가 인자는 리스너의 콜백 함수로 전달됩니다.
- 예제 :  
## ``$emit`` 이벤트 이름 만 사용 :
~~~js
Vue.component('welcome-button', {
  template: `
    <button v-on:click="$emit('welcome')">
      Click me to be welcomed
    </button>
  `
})
~~~
~~~html
<div id="emit-example-simple">
  <welcome-button v-on:welcome="sayHi"></welcome-button>
</div>
~~~
~~~js
new Vue({
  el: '#emit-example-simple',
  methods: {
    sayHi: function () {
      alert('Hi!')
    }
  }
})
~~~

## ``$emit`` 추가 인수와 함께 사용 :
~~~js
Vue.component('magic-eight-ball', {
  data: function () {
    return {
      possibleAdvice: ['Yes', 'No', 'Maybe']
    }
  },
  methods: {
    giveAdvice: function () {
      var randomAdviceIndex = Math.floor(Math.random() * this.possibleAdvice.length)
      this.$emit('give-advice', this.possibleAdvice[randomAdviceIndex])
    }
  },
  template: `
    <button v-on:click="giveAdvice">
      Click me for advice
    </button>
  `
})
~~~
~~~html
<div id="emit-example-argument">
  <magic-eight-ball v-on:give-advice="showAdvice"></magic-eight-ball>
</div>
~~~
~~~js
new Vue({
  el: '#emit-example-argument',
  methods: {
    showAdvice: function (advice) {
      alert(advice)
    }
  }
})
~~~

> 하위 컴포넌트에서 상위 컴포넌트로 이벤트 전달!  
~~~js
methods:{
    addItem:function(){
        this.$emit('addTodoItem',this.newTodoItem);
    }
}
~~~

[내용 출처 Vue.js 공식사이트 $emit()](https://kr.vuejs.org/v2/api/index.html#vm-emit)