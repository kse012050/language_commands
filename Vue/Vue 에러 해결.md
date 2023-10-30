# 작업 중 해결한 에러 및 공부 사항

## use 사용시 나타나는 에러
### Vue3 에서  router4 사용
#### 내가 사용했던 방법
~~~js
const routes = [
    ...
]

const app = createApp(App);
app.use(routes);
app.mount('#app');
~~~
#### 에러 내용
__``A plugin must either be a function or an object with an "install" function.``__  

#### 해결법
~~~js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    ...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(routes);
app.mount('#app');
~~~

``createRouter``, ``createWebHistory`` 를 추가하여 사용