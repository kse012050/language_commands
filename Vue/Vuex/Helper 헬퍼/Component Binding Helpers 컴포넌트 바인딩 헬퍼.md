# 컴포넌트 바인딩 헬퍼

## mapState
- ``mapState(namespace?: string, map: Array<string> | Object <string | function>): Object``
Vuex 저장소의 하위 트리를 반환하는 컴포넌트 계산 옵션을 만듭니다.[상세](https://vuex.vuejs.org/kr/guide/state.html#mapstate-%ED%97%AC%ED%8D%BC)  
처음 argument는 string 타입의 namespace가 될 수 있습니다.[상세](https://vuex.vuejs.org/kr/guide/modules.html#%ED%97%AC%ED%8D%BC%EC%97%90%EC%84%9C-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B0%94%EC%9D%B8%EB%94%A9)  
두 번째 오브젝트 argument는 함수가 될 수 있습니다. ``function(state: any)``

## mapGetters
- ``mapGetters(namespace?: string, map: Array<string> | Object<String>): Object``
getter의 평가된 값을 반환하는 컴포넌트 계산 옵션을 만듭니다.[상세](https://vuex.vuejs.org/kr/guide/getters.html#mapgetters-%ED%97%AC%ED%8D%BC)  
처음 argument는 String 타입의 namespace가 될 수 있습니다.[상세](https://vuex.vuejs.org/kr/guide/modules.html#%ED%97%AC%ED%8D%BC%EC%97%90%EC%84%9C-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B0%94%EC%9D%B8%EB%94%A9)

## mapActions
- ``mapActions(namespace?: string, map: Array<string> | Object< | function>): Object``  
액션을 전달하는 컴포넌트 메소드 옵션을 만듭니다.[상세](https://vuex.vuejs.org/kr/guide/actions.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%82%B4%EB%B6%80%EC%97%90%EC%84%9C-%EB%94%94%EC%8A%A4%ED%8C%A8%EC%B9%98-%EC%95%A1%EC%85%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)  
처음 argument는 string 타입의 namespace가 될 수 있습니다.[상세](https://vuex.vuejs.org/kr/guide/modules.html#%ED%97%AC%ED%8D%BC%EC%97%90%EC%84%9C-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B0%94%EC%9D%B8%EB%94%A9)  
두 번째 오브젝트 argument는 함수가 될 수 있습니다.``function(dispatch: function, ...args: any[])``  
  
## mapMutations
- ``mapMutations(namespace?: string, map: Array<string> | Object<string | function): Object``  
변이를 커밋하는 컴포넌트 메소드 옵션을 만듭니다.[상세](https://vuex.vuejs.org/kr/guide/mutations.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%95%88%EC%97%90%EC%84%9C-%EB%B3%80%EC%9D%B4-%EC%BB%A4%EB%B0%8B%ED%95%98%EA%B8%B0)  
처음 argument는 string 타입의 namespace가 될 수 있습니다.[상세](https://vuex.vuejs.org/kr/guide/modules.html#%ED%97%AC%ED%8D%BC%EC%97%90%EC%84%9C-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B0%94%EC%9D%B8%EB%94%A9)  
두 번째 오브젝트 argument는 함수가 될 수 있습니다.``function(commit: function, ...args: any[])``

## createNamespacedHelpers
- ``createNamespacedHelpers(namespace: string): Object``  
namespace가 적용된 컴포넌트 바인딩 helper를 만듭니다. 주이전 namespace가 적용된 ``mapState``,``mapGetters``,``mapActions``,``mapMutations`` 들을 가지고 있는 오브젝트를 반환합니다.[상세](https://vuex.vuejs.org/kr/guide/modules.html#%ED%97%AC%ED%8D%BC%EC%97%90%EC%84%9C-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B0%94%EC%9D%B8%EB%94%A9)  
  
[출처내용 Vuex 공식사이트 컴포넌트 바인딩 헬퍼](https://vuex.vuejs.org/kr/api/#unregistermodule)