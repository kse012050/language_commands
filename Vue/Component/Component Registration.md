# Component Registration 컴포넌트 등록

## Component Names 컴포넌트 이름
컴포넌트를 등록할 때는 항상 이름을 지어줘야 합니다. 예를 들어 우리가 살펴봤던 전역등록은 아래처럼 하죠.
~~~js
Vue.component('my-component-name', {{ /* ... */}})
~~~
컴포넌트의 이름은 ``Vue.componenet`` 의 첫번째 인자입니다.  
  
컴포넌트에 부여한 이름은 그 컴포넌트를 어디에 쓸 지에 따라 다를 수 있습니다. 컴포넌트를 (스트링 템플릿이나 [싱글파일 컴포넌트](https://kr.vuejs.org/v2/guide/single-file-components.html)로 사용하지 않고) DOM에서 바로 사용할 떄는 [W3C 규칙](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)에 따라서 사용자 정의 태그의 이름처럼 쓰는 것을 추천합니다(모두 소문자로 쓰고 단어는 하이픈(-)으로 연결하는 거죠) 이렇게 하면 지금 있거나 앞으로 작성할 HTML 엘리먼트와 충돌하는 것을 피할 수 있습니다.  
  
기타 컴포넌트 이름을 지을 때 숙지할 내용은 [스타일 가이드](https://kr.vuejs.org/v2/style-guide/#%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%EB%A6%84-%EB%A7%A4%EC%9A%B0-%EC%B6%94%EC%B2%9C%ED%95%A8)를 참고해주세요.

### Name Casing 이름 표기법
컴포넌트 이름을 지을 때는 두가지 방법이 있습니다.

#### With kebab-case 케밥-표기법
~~~js
Vue.component('my-component-name', { /* ... */})
~~~
케밥-표시법으로 컴포넌트를 정의할 때는 사용자 정의 엘리먼트를 부를 때에도 ``<my-component-name>`` 와 같이 반드시 케밥-표기법으로 사용해야 합니다.

#### With PascalCase 파스칼표기법
~~~js
Vue.component('MyComponentName', { /* ... */})
~~~
파스칼표기법으로 컴포넌트를 정의할 때는 사용자 정의 엘리머느를 부를 때 두가지 표기법 모두 사용할 수 있습니다. 즉 ``<my-component-name>`` 와 ``<MyComponentName>`` 모두 괜찮습니다. 단, DOM에 바로 쓸 떄는 케밥-표기법 이름만 가능합니다.


## Global Registration 전역 등록
이전 섹션에서 다음을 사용하여 새 Vue 인스턴스를 만들 수 있음을 알게 되었습니다.
~~~js
new Vue({
    el: '#some-element',
    // 옵션
})
~~~
전역 컴포넌트를 등록하려면, ``Vue.component(tagName, options)`` 를 사용합니다.

~~~js
Vue.component('my-component', {
    // 옵션
})
~~~

> Vue는 사용자 지정 태그 이름에 대해 [W3C 규칙](http://www.w3.org/TR/custom-elements/#concepts)을 적용하지 않습니다 (모두 소문자이어야 하고 하이픈을 포함해야합니다). 그러나 이 규칙을 따르는 것이 좋습니다.

일단 등록되면, 컴포넌트는 인스턴스의 템플릿에서 커스텀 엘리먼트, ``<my-component></my-component>`` 로 사용할 수 있습니다. 루트 Vue 인스턴스를 인스턴스화 하기 __전에__ 컴포넌트가 등록되어 있는지 확인하십시오. 전체 예제는 다음과 같습니다.

~~~html
<div id="example">
    <my-component></my-component>
</div>
~~~
~~~js
// 등록
Vue.component('my-component', {
  template: '<div>사용자 정의 컴포넌트 입니다!</div>'
})

// 루트 인스턴스 생성
new Vue({
  el: '#example'
})
~~~

아래와 같이 랜더링 됩니다.

~~~html
<div id="example">
  <div>사용자 정의 컴포넌트 입니다!</div>
</div>
~~~

> 사용자 정의 컴포넌트 입니다.

지금까지 우리는 ``Vue.componenet``를 이용해서만 컴포넌트를 만들었습니다.
~~~js
Vue.component('my-component-name',{
    // ...options...
})
~~~
이런 컴포넌트를 __전역 등록__ 되었다고 합니다. 즉 어떤 루트 Vue인스턴스 (``new Vue``)에서도 사용할 수 있는거죠.
~~~js
Vue.component('component-a', { /* ... */})
Vue.component('component-a', { /* ... */})
Vue.component('component-a', { /* ... */})

new Vue({ el: '#app' })
~~~

~~~html
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
~~~

이렇게 등록한 컴포넌트들은 모든 하위 컴포넌트에도 사용가능합니다. 즉 위의 3개 컴포넌트들은 각각의 컴포넌트 안에서도 사용할 수 있습니다.

## Local Registration 지역 등록
모든 컴포넌트를 전역으로 등록할 필요는 없습니다. 컴포넌트를 ``components`` 인스턴스 옵션으로 등록함으로써 다른 인스턴스/컴포넌트의 범위에서만 사용할 수 있는 컴포넌트를 만들 수 있습니다.
~~~js
var Child = {
  template: '<div>사용자 정의 컴포넌트 입니다!</div>'
}

new Vue({
  // ...
  components: {
    // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
    'my-component': Child
  }
})
~~~

동일한 캡슐화는 디렉티브와 같은 다른 등록 가능한 Vue 기능에도 적용됩니다.  
  
전역 등록이 썩 좋기만 한 건 아닙니다. 예를 들어 웹팩같은 빌드 시스템을 사용하고 모든 컴포넌트를 전역 등록했으면 설사 어떤 컴포넌트를 더 이상 사용하지 않더라도 최종 빌드에는 들어가 있게 됩니다. 사용자가 내려받아야 하는 자바스크립트의 양이 불필요하게 커지는 거죠.  
  
이 경우네는 컴포넌트를 일반 자바스크립트 객체로 정의할 수 있습니다.
~~~js
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
~~~
그러면 사용할 컴포넌트들만 ``components`` 옵션을 통해 쓸 수 있습니다.

~~~js
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
~~~
``component`` 객체의 각 속성에서 키가 커스텀 엘리먼트의 이름이 되고 밸류가 사용할 컴포넌트 객체를 지정합니다.  
  
__지역 등록된 컴포넌트는 하위컴포넌트에서는 사용이 불가능하다__ 는 점을 우의해야 합니다. 예를 들어 ``ComponentA``를 ``ComponentB``에서 쓰고 싶다면 아래와 같이 해야 합니다.
~~~js
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
~~~
바벨이나 웹팩을 이용해서 ES2015를 적용하고 있다면 싱글파일 컴포넌트를 이용해서 이렇게 할 수도 있습니다.

~~~js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}
~~~

ES2015 이상에서는 객체 내의 ``components`` 옵션에서     ``ComponentA: ComponentA``라고 하지 않고 ``ComponentA`` 라고만 해도 됩니다. 즉 키로 아래의 두 가지가 모두 가능합니다. (역자 주: ``component-a:ComponentA``,``componentA:ComponentA``,``ComponentA`` 가 모두 가능합니다.)
- 템플릿에서 사용할 사용자정의 엘리먼트 이름
- 컴포넌트 옵션에 들어갈 변수명

## 모듈 시스템
``import / require`` 를 이용한 모듈 시스템

### 모듈 시스템에서 컴포넌트를 다른 컴포넌트에 지역적으로 등록하기
지금 읽고 있다면 당신은 모듈 시스템을 쓴다는 뜻이겠죠. 바벨이나 웹팩같은 것과 함께 말입니다. 이 경우에는 ``components`` 디렉토리를 만들고 각 컴포넌트들을 그 자체로 하나의 파일에 관리하는 것을 추천합니다.  
  
그러면 어떤 컴포넌트를 다른 컴포넌트에 지역적으로 등록하기 전에 사용할 컴포넌트를 가져와야 합니다. 예를 들면 ``ComponentB.js`` 나 ``ComponentB.vue`` 같은 파일에서 아래처럼 다른 컴포넌트를 가져오는 거죠.

~~~js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
~~~
이제 ``ComponentA``와 ``ComponentC`` __모두__ ComponentB`의 템플릿에서 사용할 수 있습니다.

### 기본 컴포넌트를 자동으로 전역 등록하기
많은 컴포넌트들은 여기저기서 쓰이고 입력값이나 버튼 하나로 구성될 수도 있습니다. 이런 컴포넌트는 기본 컴포넌트라고 하고 여러 컴포넌트들에서 매우 빈번하게 사용합니다.  
  
그래서 많은 컴포넌트에서 긴 기본 컴포넌트 목록을 보게 되죠.
~~~js
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'

export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
}
~~~

템플릿에서는 좀 더 짧은 마크업을 사용할 수 있습니다.
~~~html
<BaseInput
  v-model="searchText"
  @keydown.enter="search"
/>
<BaseButton @click="search">
  <BaseIcon name="search"/>
</BaseButton>
~~~
다행히 웹팩을 쓴다면 ``require.context``를 써서 자주 쓰는 기본 컴포넌트들을 전역 등록할 수 있습니다. 아래의 예시는 어플리케이션의 엔트리 파일(``src/main.js``)에 기본 컴포넌트들을 전역적으로 불어오는 코드입니다.
~~~js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 컴포넌트들이 있는 폴더
  './components',
  // 하위 폴더까지 포함할 지 여부
  false,
  // 기본 컴포넌트를 찾는데 사용할 정규표현식
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 컴포넌트 설정 가져오기
  const componentConfig = requireComponent(fileName)

  // 컴포넌트의 파스칼표기법 이름 가져오기
  const componentName = upperFirst(
    camelCase(
      // 폴더 위치와 무관하게 파일이름 추출
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 컴포넌트를 전역적으로 등록
  Vue.component(
    componentName,
    // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트
    // 옵션을 추출하고 그렇지 않은 컴포넌트는 모듈의 루트를 호출
    componentConfig.default || componentConfig
  )
})
~~~

** 전역 등록은 (``new Vue``로) 루트 Vue 인스턴스가 만들어지기 전에 반드시 이뤄져야 한다는 것** 을 기억해주시기 바랍니다. 실제 프로젝트에서 이 패턴이 어떻게 이뤄지는지 [이 예시](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js)를 참고하세요

[내용출처 Vue.js 공식 사이트 컴포넌트](https://kr.vuejs.org/v2/guide/components.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94)

[내용출처 Vue.js 공식 사이트 컴포넌트 등록](https://kr.vuejs.org/v2/guide/components-registration.html)