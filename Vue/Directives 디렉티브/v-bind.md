# v-bind
- 약어 :
- 예상됨 : ``any (with argument) | Object (without argument)``
- 전달인자 : ``attrOrProp (optional)``
- 수식어
    - ``prop`` - 속성 대신 DOM 속성으로 바인딩([무슨 차이가 있습니까?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028)). 만약 태그가 컴포넌트라면
    ``.props``는 컴포넌트의 ``$el`` 에 속성을 추가합니다.
    - ``.camel`` - (2.1.0+) kebab-case 속성 이름을 camelCase로 변환합니다.
    - ``.sync`` - (2.3.1+) 바인딩 된 값을 업데이트하기 위한 ``v-on``를 확장하는 신택스 슈가입니다.
- 사용방법 :  
 동적으로 하나 이상의 컴포넌트 속성 또는 표현식을 바인딩 합니다.
  
    ``class`` 또는 ``style`` 속성을 묶는 데 사용될 때, Array나 Objects와 같은 추가 값 유형을 지원합니다. 자세한 내용은 아래 링크된 섹션을 참조하세요.
      
    전달인자 없이 사용하면 속성 이름 - 값 쌍을 포함하는 객체를 바인딩 하는데 사용할 수 있습니다.  
    이 모드에서는 ``class`` 와 ``style`` 은 Array나 Objects를 지원하지 않습니다.

- 예제

~~~html
<!-- 속성을 바인딩 합니다. -->
<img v-bind:src="imageSrc">

<!-- dynamic attribute name (2.6.0+) 동적 속성 이름-->
<button v-bind:[key]="value"></button>

<!-- 약어 -->
<img :src="imageSrc">

<!-- shorthand dynamic attribute name (2.6.0+) 단축 동적 속성 이름-->
<button :[key]="value"></button>

<!-- with inline string concatenation 인라인 문자열 연결 사용-->
<img :src="'/path/to/images/' + fileName">

<!-- 클래스 바인딩 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- 스타일 바인딩 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 속성 객체 바인딩 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- prop 수식어를 사용하는 DOM 속성 바인딩 -->
<div v-bind:text-content.prop="text"></div>

<!-- 속성 바인딩. 컴포넌트에서 "prop"를 선언 해야 합니다.  -->
<my-component :prop="someThing"></my-component>

<!-- 자식 컴포넌트와 공통으로 사용하는 부모 props를 전달합니다 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
~~~

``.camel`` 수식어는 DOM 템플릿을 사용할 때 ``v-bind`` 속성 이름을 camelCase화 할 수 있습니다. (예:SVG ``viewBox`` 속성)

~~~html
<svg :view-box.camel="viewBox"></svg>
~~~

문자열 템플릿을 사용하거나 ``vue-loader`` / ``vueify`` 로 컴파일 하는 경우 ``.camel``은 필요 없습니다.
- 참고 :
    - [클래스 및 스타일 바인딩](https://kr.vuejs.org/v2/guide/class-and-style.html)
    - [컴포넌트 - 컴포넌트 속성](https://kr.vuejs.org/v2/guide/components.html#sidebar-sponsors-special)
    - [컴포넌트 - ``.sync`` 수식어](https://kr.vuejs.org/v2/guide/components.html#sync-%EC%88%98%EC%8B%9D%EC%96%B4)

[내용출처 Vue.js 공식사이트 v-bind](https://kr.vuejs.org/v2/api/index.html#v-bind)


## 사용 예제
### v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"
> A : 상위 컴포넌트 , B : 하위 컴포넌트

#### A 컴포넌트
~~~html
<TodoList v-bind:propsdata="todoItems"></todoList>
<하위컴포넌트  v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성">
~~~
~~~js
export default {
  data : function(){
    return{
      todoItems : []    // 작성한 함수(로직)에 의해 채워질 배열
    // todoItems -> 현재 위치의 컴포넌트 데이터 속성
    }
  },
  ....  // 로직
}
~~~

#### B 컴포넌트
~~~html
<template>
    <ul>
        <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem.item">
        <!-- 음.. 아직 잘 모르겠따... v-for쓸 때는 v-bind:key="값" 을 넣어줘야합니다. -->
        </li>
    </ul>
</template>
~~~
~~~js
export default {
    props:['propsdata'],
    // props:[(상위 컴포넌트에서) 내려보낼 프롬스 속성 이름]
}
~~~

### v-bind:class , boolean 값에 따라 class 넣고 빼기
~~~html
<span v-bind:class="{textCompleted: todoItem.complated}"></span>
<!-- v-bind:class="{클래스명: boolean 값이 담겨 있는 변수} -->
~~~

