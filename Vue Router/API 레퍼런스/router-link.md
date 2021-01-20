# ``<router-link>``
``<router-link>`` 는 라우터 지원 앱에서 사용자 네비게이션을 가능하게하는 컴포넌트입니다. 목표 위치는 ``to`` prop로 지정됩니다. 기본적으로 올바른 ``href`` 를 갖는 ``<a>`` 태그로 랜더링 되지만 ``tag`` prop로 구성 될 수 있습니다. 또한 대상 라우트가 활성화되어 있으면 링크가 자동으로 active CSS 클래스를 가져옵니다.  
  
``<router-link>``는 다음과 같은 이유로 하드 코드 된 ``<a href="...">`` 보다 선호 됩니다.  
  
- HTML5 히스토리 모드와 해시 모드에서 모두 동일한 방식으로 작동하므로 모드를 트랜지션하기로 결정하거나 라우터가 IE9에서 해시 모드로 트랜지션 한 경우 변경할 필요가 없습니다.  
- HTML 히스토리 모드에서, ``router-link``는 클릭 이벤트를 차단하여 브라우저가 페이지를 다시 로드 하지 않도록 합니다.
- HTML5 히스토리 모드에서 ``base`` 옵션을 사용할 때 ``to`` prop의 URL에 이를 포함 할 필요가 없습니다.

[내용출처 Vue Router API 레퍼런스 ``<router-link>``](https://router.vuejs.org/kr/api/#router-link)

## Props

### to
- 자료형: ``string | Location``
- 필수  
링크의 대상 라우트를 나타냅니다. 클릭하면, ``to`` prop의 값은 내부적으로 ``router.push()`` 에 전달 될 것이므로 값은 문자열이나 위치 디스크립터 객체가 될 수 있습니다.

~~~html
<!-- 리터럴 string -->
<router-link to="home">Home</router-link>
<!-- 이렇게 렌더링 됩니다. -->
<a href="home">Home</a>

<!-- `v-bind`를 이용한 표현식 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- `v-bind`를 생략하면 다른 prop를 바인딩 하는 것과 같습니다. -->
<router-link :to="'home'">Home</router-link>

<!-- 위와 같습니다. -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 이름을 가지는 라우트 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 쿼리가 있으면, `/register?plan=private` 이 됩니다. -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
~~~

[내용출처 Vue Router API 레퍼런스 ``<router-link>`` props ``to``](https://router.vuejs.org/kr/api/#to)