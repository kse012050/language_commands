# v-on

- shorthand (약어) : ``@``

- Expects (예상됨) : ``Function | Inline Statement | Object``

- Argument (전달인자) : ``event``

- Modifiers (수정 자) : 
    - ``.stop`` - ``event.stopPropagation()`` 을 호출합니다.
    - ``.prevent`` - ``event.preventDefault()`` 을 호출합니다.
    - ``.capture`` - 갭처 모드에서 이벤트 리스너를 추가합니다.
    - ``self`` - 이벤트가 이 엘리먼트에서 전달된 경우에만 처리 됩니다.
    - ``{ketCode | keyAlias}`` - 특정 키에 대해서만 처리 됩니다.
    - ``.native`` 컴포넌트의 루트 엘리먼트에서 네이티브 이벤트를 수신합니다.
    - ``.once`` - 단 한번만 처리됩니다.
    - ``.left`` - (2.2.0) 왼쪽 버튼 마우스 이벤트 트리거 처리기.
    - ``.right`` - (2.2.0) 오른쪽 버튼 마우스 이벤트 트리거 처리기.
    - ``.middle`` - (2.2.0) 가운데 버튼 마우스 이벤트 트리거 처리기.
    - ``.passive`` - (2.3.0+) DOM 이벤트를 { passive: true }와 연결합니다.

- 사용방법 :  

엘리먼트에 이벤트 리스너를 연결합니다. 이벤트 유형은 전달인자로 표시됩니다. 표현식은 메소드 이름 또는 인라인 구문일 수 있으며, 수식어가 있으면 생략할 수 있습니다.  
  
``2.4.0``부터 ``v-on``도 인수없이 이벤트/리스너 쌍의 객체에 바인딩을 지원합니다. 객체 구문을 사용할 때는 수식어를 지원하지 않습니다.  
  
일반 엘리먼트에 사용되는 __기본 DOM 이벤트__ 만 받습니다. 사용자 정의 컴포넌트에서 사용될 때 해당 하위 컴포넌트에서 생성된 __사용자 정의 이벤트__ 를 받습니다.  
  
네이티브 DOM 이벤트를 수신하면 메소드는 네이티브 이벤트를 유일한 전달인자로 받습니다. 인라인 구문을 사용하는 경우 명령문은 특별한 ``$event`` 속성에 접근할 수 있습니다.

- Example (예제) :
~~~html
<!-- 메소드 핸들러 -->
<button v-on:click="doThis"></button>

<!-- dynamic event (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 인라인 구문 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 약어 -->
<button @click="doThis"></button>

<!-- shorthand dynamic event (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 전파 금지 -->
<button @click.stop="doThis"></button>

<!-- 기본 동작 방지 -->
<button @click.prevent="doThis"></button>

<!-- 표현식이 없는 기본 동작 방지 -->
<form @submit.prevent></form>

<!-- 수식어 체이닝 -->
<button @click.stop.prevent="doThis"></button>

<!-- 키 별칭을 이용한 키 입력 수식어 -->
<input @keyup.enter="onEnter">

<!-- 키 코드를 이용한 키 입력 수식어 -->
<input @keyup.13="onEnter">

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>

<!-- 객체 구문 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
~~~
하위 컴포넌트에서 사용자 지정 이벤트를 수신합니다. (자식에서 "my-event"가 생성될 때 처리기가 호출 됩니다.)
~~~html
<my-component @my-event="handleThis"></my-component>

<!-- 인라인 구문 -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- 컴포넌트의 기본 이벤트 -->
<my-component @click.native="onClick"></my-component>
~~~
- 참고 :
    - [메소드와 이벤트 핸들링](https://kr.vuejs.org/v2/guide/events.html)
    - [컴포넌트 - 사용자 정의 이벤트](https://kr.vuejs.org/v2/guide/components.html#search-query-nav)

[내용출처 Vue.js 공식사이트 v-on](https://kr.vuejs.org/v2/api/index.html#v-on)


## 사용 예제
### 하나의 페이지에서 사용할 때
~~~html
<태그명 v-on:click="toggleComplete()"></태그명>
<!-- v-on:event="함수명()" -->
~~~
~~~js
export default {
    methods:{
        toggleComplete(){
            // 로직...
      }
    }
}
~~~

### 상위 컴포넌트로 이벤트 올릴 때
> A : 상위 컴포넌트 , B : 하위 컴포넌트
#### B 컴포넌트
~~~html
<태그명 v-on:event="함수명(매개변수1, 매개변수2)"></태그명>
<태그명 v-on:event="하위 컴퍼넌트에서 발생시킨 이벤트 이름(매개변수1, 매개변수2)"></태그명>
~~~
~~~js
export default {
    methods:{
        함수명:function(매개변수1, 매개변수2){
            this.$emit('하위컴포넌트의 함수명', 넘길 인자1, 넘길 인자2, ...)
      },
        하위 컴퍼넌트에서 발생시킨 이벤트 이름(매개변수1, 매개변수2){
          this.$emit('하위컴포넌트의 함수명', 넘길 인자1, 넘길 인자2, ...)
      }
    }
}
~~~
#### A 컴포넌트
~~~html
<태그명 v-on:하위 컴퍼넌트에서 발생시킨 이벤트 이름:"현재 컴포넌트의 메서드 명"></태그명>
~~~
~~~js
export default {
    methods:{
        현재 컴포넌트의 메서드 명(매개변수1, 매개변수2){
            // ..로직
      }
    }
}
~~~
