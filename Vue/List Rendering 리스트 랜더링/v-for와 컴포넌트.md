# ``v-for`` 와 컴포넌트
> 이 섹션에서는 [컴포넌트](https://kr.vuejs.org/v2/guide/components.html)를 안다는 가정합니다.  
  
``v-for``를 사요자 정의 컴포넌트에 직접 사용할 수 있습니다.
~~~html
<my-component v-for="item in items" :key="item.id"></my-component>
~~~

> 2.2.0 이상에서 ``v-for``는 ``key``가 필수 입니다.  
  
그러나 컴포넌트에는 자체 범위가 분리되어있기 때문에 컴포넌트에 데이터를 자동으로 전달하지는 않습니다. 반복할 데이터를 컴포넌트로 전달하려면 ``props``도 사용해야합니다.
~~~html
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
~~~
컴포넌트에 ``item``을 자동으로 주입하지 않는 이유는 컴포넌트가 ``v-for``의 작동 방식과 밀접하게 결합되기 때문입니다. 데이터의 출처를 명확히 하면 다른 상황에서 컴포넌트를 재사용할 수 있습니다.  
  
간단한 할일 목록 전체 예제입니다.
~~~html
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
~~~

~~~js
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
~~~

[내용출처 Vue.js 공식사이트 v-for와 컴포넌트](https://kr.vuejs.org/v2/guide/list.html#v-for-%EC%99%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)
