# State 상태

## 단일 상태 트리
Vuex는 __단일 상태 트리__ 를 사용합니다. 즉, 이 단일 객체는 모든 애플리케이션 수준의 상태를 포함하며, "원본 소스" 역할을 합니다. 이는 각 애프릴케이션마다 하나의 저장소만 갖게 된다는 것을 의미합니다. 단일 상태 트리를 사용하면 특정 상태를 쉽게 찾을 수 있으므로 디버깅을 위해 현재 앱 상태의 스냅 샷을 쉽게 가져올 수 있습니다.  
  
단일 상태 트리는 모듈성과 충돌하지 않습니다. 나중에 상태와 변이를 하위 모듈로 분할하는 방법에 대해 설명합니다.  
  
### Vuex 상태를 Vue 컴포넌트에서 가져오기
그러면 Vue 컴포넌트에서 저장소 내부의 사앹를 어떻게 표시하나요? Vuex 저장소는 반응적이기 때문에 저장소에서 상태를 "검색" 하는 가장 간단한 반법은 [계산된 속성](https://kr.vuejs.org/v2/guide/computed.html) 내에서 일부 저장소 상태를 가져오는 것입니다.
~~~js
// Counter 컴포넌트를 만듭니다
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
~~~
``store.state.count`` 가 변경되면 계산된 속성이 다시 변경되고 관련 DOM 업데이트가 트리거 됩니다.  
  
그러나 이 패턴은 컴포넌트가 전역 저장소 단독 항목에 의존하게합니다. 모듈 시스템을 사용할 때는 저장소 상태를 사용하는 모든 컴포넌트에서 저장소를 가져와야하며 컴포넌트를 테스트 할 때는 가짜데이터가 필요합니다.  
  
Vuex는 ``store`` 옵션 (``Vue.use(Vuex)``에 의해 가능)으로 컴포넌트의 모든 자식 컴포넌트에 저장소를 "주입"하는 메커니즘을 제공합니다.
~~~js
const app = new Vue({
  el: '#app',
  // "store" 옵션을 사용하여 저장소를 제공하십시오.
  // 그러면 모든 하위 컴포넌트에 저장소 인스턴스가 삽입됩니다.
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
~~~
루트 인스턴스에 ``store`` 옵션을 제공함으로써 제정소는 루트의 모든 하위 컴포넌트에 주입되고 ``this.$store``로 사용할 수 있습니다. ``Counter`` 구현을 수정해야 합니다.

~~~js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
~~~

[내용 출처 Vuex 공식사이트](https://vuex.vuejs.org/kr/guide/state.html)