# v-model
- Expects (예상됨) : 컴포넌트 폼 인풋 엘리먼트 또는 출력 값에 따라 다릅니다.
- 제한사항 : 
    - ``<input>``
    - ``<select>``
    - ``<textarea>``
    - components
- 수식어 :
    - ``.lazy`` - ``input`` 대신 ``change`` 이벤트를 듣습니다.
    - ``.number`` - 문자열을 숫자로 변경합니다.
    - ``.trim`` - 입력에 대한 trim을 합니다.
- 사용방법 :  
폼 인풋 엘리먼트 또는 컴포넌트에 양방향 바인딩을 만듭니다. 자세한 사용법은 아래 링크된 가이드 섹션을 참조하십시오.

- 참고 :
    - [폼 인풋 바인딩](https://kr.vuejs.org/v2/guide/forms.html)
    - [컴포넌트 - 사용자 정의 이벤트를 사용하여 폼 입력 컴포넌트 만들기](https://kr.vuejs.org/v2/guide/components.html#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%8F%BC-%EC%9E%85%EB%A0%A5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0)


[내용출처 Vue.js 공식사이트 v-model](https://kr.vuejs.org/v2/api/index.html#v-model)

## 사용 예제
### ``<input>`` 의 값 변수에 받기
~~~html
<input type="text" v-model="newTodoItem" v-on:keyup.enter="addItem">
<!-- v-model: (input text) 의 값을 받을 변수명 -->
~~~
~~~js
export default {
    data:function(){
        return{
            newTodoItem:''
        }
    },
}
~~~