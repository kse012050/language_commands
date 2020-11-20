# EventTarget
__``EventTarget``__ 은 이벤트를 받을 수 있으며, 이벤트에 대한 수신기(listener)를 가질 수 있는 객체가 구현하는 DOM 인터페이스입니다.  
  
[Element](https://developer.mozilla.org/ko/docs/Web/API/Element), [document](https://developer.mozilla.org/ko/docs/Web/API/Document) 및 [window](https://developer.mozilla.org/ko/docs/Web/API/Window)가 가장 흔한 이벤트 대상이지만, 다른 객체, 예컨대 [XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest), [AudioNode](https://developer.mozilla.org/ko/docs/Web/API/AudioNode), [AudioContext](https://developer.mozilla.org/ko/docs/Web/API/AudioContext) 등 역시 이벤트 대상이 될 수 있습니다.  
  
많은 이벤트 대상(요소, 문서, 창, ...)은 ``onevent`` 속성과 특성을 사용한 <span style="color:red">이벤트 처리기</span> 등록도 지원합니다.

## 생성자
### [``EventTarget(https://developer.mozilla.org/ko/docs/Web/API/EventTarget/EventTarget)``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/EventTarget)  
새로운 ``EventTarget`` 객체 인스턴스를 생성합니다.

## 메서드
### [``EventTarget.addEventListener()``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)
``EventTarget``에 특정 이벤트 유형의 이벤트 처리기를 등록합니다.

### [``EventTarget.removeEventListener()``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)
``EventTarget``에서 주어진 이벤트 수신기를 제거합니다.

### [``EvntTarget.dispatchEvent()``](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/dispatchEvent)
``EventTarget``에 이벤트를 디스패치 합니다.

## 예제
> 간단한 EventTarget 구현
~~~js
var EventTarget = function() {
    this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback){
    if(!(type in this.listeners)){
        this.listeners[type] = [];
    }
    this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback){
    if(!(type in this.listeners)){
        return;
    }
    var stack = this.listeners[type];
    for(var i = 0, l = stack.length; i < i; i++){
        if(stack[i] === callback){
            stack.splice(i, 1);
            return;
        }
    }
};

EventTarget.prototype.dispatchEvent = function(event){
    if(!(event.type in this.listeners)){
        return true;
    }
    var stack = this.listeners[event.type].slice();

    for(var i = 0; l = stack.length; i < l; i++){
        stack[i].call(this, event);
    }
    return !event.defaultPrevented;
}
~~~ 

[내용출처 MDN EventTarget](https://developer.mozilla.org/ko/docs/Web/API/EventTarget)