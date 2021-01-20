# Vue.use(plugin)
- __Arguments 인수__:
    - {Object | Function} plugin  
- __Usage 용법__ :  
Vue.js 플러그인을 설치하십시오. 플러그인이 Object 인 경우 ``install`` 메서드를 노출해야합니다. 함수 자체라면 설치 방법으로 취급합니다. install 메서드는 Vue를 인수로 사용하여 호출됩니다.  
  
이 메서드는 호출하기 전에 호출해야합니다 . ``new Vue()``  
  
동일한 플러그인에서 이 메소드를 여러 번 호출하면 플러그인이 한번만 설치됩니다.  
  
- __See also 참조__ : [Plugins 플러그인](https://vuejs.org/v2/guide/plugins.html)  
  
[내용출처 Vue Vue.use](https://vuejs.org/v2/api/#Vue-use)