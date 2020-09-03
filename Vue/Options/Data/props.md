# props
- 타입 : ``Array<string> | Object``
- 상세 :  
    부모 컴포넌트의 데이터를 받을 수 있게 노출된 속성의 리스트/해시 입니다. 산순한 배열 기반 구문과 사용자 지정 유효성 검사 및 기본값과 같은 고급 구성을 허용하는 Object 기반 구문이 있습니다.  
      
    객체 기반 구문을 사용하면 다음 옵션을 사용할 수 있습니다.
    - ``type`` 다음 기본 생성자 중 하나 일 수 있다 : ``String``, ``Number``, ``Boolean``, ``Array``, ``Object``, ``Date``, ``Function``, ``Symbol``, 맞춤 생성자 함수 또는 이들의 배열. prop에 주어진 유형이 있는지 확인하고 그렇지 않은 경우 경고를 표시합니다. 수품 유형에 대한 [자세한정보](https://kr.vuejs.org/v2/guide/components-props.html#Prop-%ED%83%80%EC%9E%85)
    - ``default`` : ``any``  
    소줌의 기본값을 지정합니다. prop이 전달되지 않으면 이 값이 대신 사용됩니다. 객체 또는 배열 기본값은 팩토리 함수에서 반환되어야 합니다.
    - ``required 필수`` : ``Boolean``  
    소품이 필요한지 여부를 정의합니다. 비 프로덕션 환경에서 이 값이 사실이고 prop이 전달되지 않으면 콘솔 경고가 발생합니다.
    - ``validator`` : ``Function``
    prop 값을 유일한 인수로 사용하는 사용자 정의 유효성 검사기 함수입니다. 비 프로덕션 환경에서 이 함수가 잘못된 값을 반환하면(즉, 유효성 검사가 실패하면) 콘솔 경고가 발생합니다 [여기에서](https://kr.vuejs.org/v2/guide/components-props.html#Prop-%ED%83%80%EC%9E%85) 소품 유효성 검사에 대해 자세히 읽을 수 있습니다.

- 예제
~~~js
// 단순한 구문
Vue.component('props-demo-simple', {
  props: ['size', 'myMessage']
})

// 유효성 검사를 포함한 객체 구문
Vue.component('props-demo-advanced', {
  props: {
    // 타입 체크만 합니다.
    height: Number,
    // 타입 체크와 유효성 검사를 합니다.
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }
})
~~~
- 참조 : [Props](https://kr.vuejs.org/v2/guide/components.html#sidebar-sponsors-special)

# propsData
- 타입 : ``{ [key: string]: any }``
- 제한 : ``new``를 이용한 인스턴스 생성때만 사용됩니다.
- 상세 :  
    인스턴스를 생성하는 동안 속성을 전달합니다. 이것은 단위 테스트를 쉽게 하기 위한 것입니다.

- 예제 :  
~~~js
var Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
})

var vm = new Comp({
  propsData: {
    msg: 'hello'
  }
})
~~~

> 상위 컴포넌트에서 하위 컴포넌트로 데이터 전송?!!!  
## 상위 컴포넌트
~~~html
<TodoList v-bind:propsdata="todoItems"></TodoList>
~~~
~~~js
data : function(){
    return{
        todoItems : []
    }
},
...
~~~
## 하위 컴포넌트
~~~js
props:['propsdata'],
~~~
> vue-todo 할 일 관리 앱 참조  

[내용출처 Vue.js 공식사이트 props](https://kr.vuejs.org/v2/api/index.html#props)  
[내용출처 Vue.js 공식사이트 propsdata](https://kr.vuejs.org/v2/api/index.html#propsData)
