# methods (행동 양식)
- type (유형) : ``{[key: string]: function}``
- Details (세부 사항):  
  
Vue 인스턴스에 혼합 될 메서드입니다. 이러한 메서드는 VM 인스턴스에서 직접 액세스하거나 지시문 표현식에서 사용할 수 있습니다. 모든 메서드는 ``this`` 컨텐스트가 Vue 인스턴스에 자동으로 바인딩됩니다.  
> 참고 __이 방법을 정의하는 화살표 기능을 사용하지 말아야 합니다__ (예 ``plus: () => this.a++``). 그 이유는 화살표 함수가 부모 컨텍스트를 바인딩하므로 ``this`` 예상대로 Vue 인스턴스가 아니며 ``this.a`` 정의 되지 않는 것입니다.
- Example (예):
~~~js
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
})
vm.plus()
vm.a // 2
~~~

- See also(참조): [Event Handling 이벤트 처리](https://vuejs.org/v2/guide/events.html)  
  
[내용출처 Vue.js 공식사이트 ](https://vuejs.org/v2/api/#methods)