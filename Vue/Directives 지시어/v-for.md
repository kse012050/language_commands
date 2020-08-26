# v-for
- 예상됨 : ``Array | Object | number | string | Iterable (since 2.6 -> 2.6 이후)``
- 사용방법 :  
원본 데이터를 기반으로 엘리먼트 또는 템플릿 블록을 여러번 랜더링합니다. 디렉티브의 값은 반복되는 현재 엘리먼트에 대한 별칭을 제공하기 위해 특수 구문인 ``alias in expression``을 사용해야 합니다.

~~~html
<div v-for="item in items">
    {{ item.text }}
</div>
~~~

또는, 인덱스(아니면 객체의 경우 키)의 별칠을 지정할 수 있습니다.

~~~html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, name, index) in object"></div>
~~~

``v-for``의 기본 동작은 엘리먼트를 이동하지 않고 그 자리에서 패치를 시도합니다. 강제로 엘리먼트의 순서를 바꾸려면 특수 속성 ``key``를 설정해야 합니다.
~~~html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
~~~
> v-if와 함께 사용하는 경우, v-for는 v-if보다 높은 우선순위를 갖습니다. 자세한 내용은 [이스트 랜더링 가이드](https://kr.vuejs.org/v2/guide/list.html#v-for-%EC%99%80-v-if)를 확인하세요.  
  
``v-for`` 에 대한 자세한 사용법은 아래 링크된 가이드에서 설명합니다.

- 참고 :
    - [리스트 랜더링](https://kr.vuejs.org/v2/guide/list.html)
    - [key](https://kr.vuejs.org/v2/guide/list.html#Maintaining-State)

[내용출처 Vue.js 공식사이트 v-for](https://kr.vuejs.org/v2/api/index.html?#v-for)