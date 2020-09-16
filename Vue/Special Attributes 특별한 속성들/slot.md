# slot <sup>deprecated</sup> 비추천
> Prefer v-slot in 2.6.0+. / 2.6.0 이상에서 v 슬롯을 선호합니다.  
- 예산됨 : ``String``
컨텐츠가 있는 슬롯의 이름을 위해 자식 컴포넌트에 삽입된 컨텐츠에 사용됩니다.  
자세한 사용법은 아래 링크 된 가이드 섹션을 참조하십시오
- 참고 : [명명된 슬롯 Named Slots with slot](https://kr.vuejs.org/v2/guide/components.html#%EC%9D%B4%EB%A6%84%EC%9D%84-%EA%B0%80%EC%A7%80%EB%8A%94-%EC%8A%AC%EB%A1%AF)  
  
> 명명된 슬롯 -> 슬롯을 사용한 컨텐츠 배포 -> 이름을 가지는 슬롯

[내용 출처 Vue 공식 사이트 ](https://kr.vuejs.org/v2/api/index.html#slot)

## 사용 예제

### Vue 공식 사이트 modal 사용 
> 배우기 -> 예시 -> [모달 컴포넌트](https://kr.vuejs.org/v2/examples/modal.html)  
  
> A : 상위 컴포넌트 (modal을 가져가 쓸 컴포넌트) , B : 하위 컴포넌트 (Modal.vue)

#### B Modal.vue 모달 컴포넌트
~~~html
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
          <!-- 상위 컴포넌트의 slot="" 과  하위컴포넌트의 slot 태그의 name이 동일하다면 값이 변경됩니다-->
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
~~~


#### A : 상위컴포넌트 (modal을 가져다 쓸 컴포넌트?!!)
> TodoInput.vue
~~~html
<!-- 버튼 클릭시 addItem 함수 실행 -->
<button v-on:click="addItem"></button>

<!-- showModal 변수가 true면 나타나고, false면 사라진다. -->
<Modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">팝업 제목 부분</h3>
    <div slot="body">팝업 내용 부분</div>
    <footer slot="footer">
        팝업 푸터 부분
        <button v-on:click="popupBtn">확인</button>
    </footer>
</Modal>
~~~
~~~js
// modal.vue를 import(연결) 시켜줍니다.
import Modal from './common/Modal.vue'

export default {
    data:function(){
        return{
            // showModal 변수 생성
            showModal:false,
        }
    },
    methods:{
        // button 클릭시 실행 함수
        addItem:function(){
            // showModal이 true면 fales로 , fales면 true로
            this.showModal = !this.showModal;
        },
        popupBtn:function(){
            this.showModal = !this.showModal;
        }
    },
~~~