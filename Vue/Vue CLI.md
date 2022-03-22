# Vue CLI  (Command Line Interface)
> 경고  
> 이문서는 ``@vue/cli`` , ``vue-cli``은 [여기를](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--) 참조 하십시오.

Vue CLI는 신속한 Vue.js 개발을 위한 전체 시스템으로 다음을 제공합니다.
- ``@vue/cli.`` 를 통해 대화 형 플젝트 비계
- ``@vue/cli`` + 를 통한 제로 구성 신속한 프로토 타이핑 ``@vue/cil-service-global``
- 다음과 같은 런타임 종속성 (``@vue/cli-service``):
    - 업데이트 기능
    - 합리적인 기본값으로 웹팩 위에 구축되었습니다.
    - 프로젝트 내 구성 파일을 통해 구성 가능합니다.
    - 플러그인을 통해 확장 가능
- 프론트엔드 생태계에서 최고의 도구를 통합하는 풍부한 공식 플러그인 모음이다.
- Vue.js 프로젝트를 만들고 관리하기 위한 완전한 그래픽 사용자 인터페이스입니다.  
  
Vue CLI 는 Vue 에코 시스템의 표준 도구 기준이되는 것을 목표로 합니다. 다양한 빌드 도구가 합리적인 기본값과 함께 원활하게 작동하도록 보장하므로 구성을 다루는 데 며칠을 소비하는 대신 앱 작성에 집중할 수 있습니다. 동시에 꺼내지 않고도 각 도구의 구성을 조정할 수 있는 유연성을 제공합니다.

## 시스템 구성 요소
Vue CLI에는 몇 가지 움직이는 부분이 있습니다. [소스코드](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue)를 살펴보면 별도로 게시 된 여러 패키지가 포함 된 단일 저장소라는 것을 알 수 있습니다.  

### CLI
CLI(``@vue/cli``)는 전역 적으로 설치된 npm 패키지이며 ``vue`` 터미널에서 명령을 제공합니다. ``vue serve``을(를) 통해 새 프로젝트를 신속학 스캐 폴딩 ``vue create`` 통해 새로운 아이디어를 즉시 프로토 타입화 할 수 있는 기능을 제공합니다. ``vue ui`` 를 통해 그래픽 사용자 인터페이스를 사용하여 프로젝트를 관리 할 수도 있습니다. 

### CLI 서비스
CLI 서비스(``@vue/cli-service``)는 개발 종속성입니다. .NET에서 만든 모든 프로젝트에 로컬로 설치된 npm 패키지 ``@vue/cli`` 입니다.  
  
CLI 서비스는 [``webpack``](https://webpack.js.org/) 및 [``webpack-dev-server``](https://github.com/webpack/webpack-dev-server) 위에 굴축됩니다. 다음을 포함합니다.  
  
- 다른 CLI 플러그인을 로드하는 핵심 서비스입니다.
- 대부분의 앱에 최적화 된 내부 웹팩 구성
- ``vue-cli-service`` 기본 ``serve``, ``build`` 및 ``inspect`` 명령과 함께 제공되는 프로젝트 내부의 바이너리  
  
### CLI 플로그인
CLI 플로그인 Babel / TypeScript 트랜스 파일, ESLint 통합, 단위 테스트 및 종단 간 테스트와 같은 Vue CLI 프로젝트에 선택적 기능을 제공하는 npm 패키지입니다. Vue CLI 플러그인 이름이 ``@vue/cli-plugin-`` (내장 플로그인의 경우) 또는 ``vue-cli-plugin-`` (커뮤니티 플러그인의 경우)로 시작하기 때문에 쉽게 찾을 수 있습니다.  
  
``vue-cli-service`` ㅡ로젝트 내 에서 바이너리를 실행하면 프로젝트의 .NET Framework에 나열된 모든 CLI 플로그인을 자동으로 확인하고 로드합니다 ``package.json``.  
  
플로그인은 프로젝트 생성 프로세스의 일부로 포함되거나 나중에 프로젝트에 추가 될 수 있습니다. 재사용 가능한 사전 설정으로 그룹화 할 수도 있습니다. [플로그인 및 사전 설정](https://cli.vuejs.org/guide/plugins-and-presets.html#plugins) 섹션에서 더 자세히 논의 할 것입니다.  

## 설치
> __이전 버전에 대한 경고__  
> 패키지 이름에서 ``vue-cli``로 변경되었습니다. ``@vue/cli``. 이전 ``vue-cli``(1.x 또는 2.x) 패키지가 전역으로 설치되어있는 경우 먼저 ``npm uninstall vue-cli -g`` 또는 ``yarn global remove vue-cli``을 사용 하여 제거 해야합니다.  

> 노드 버전 요구 사항  
> [참조](https://cli.vuejs.org/guide/installation.html) , [Node.js](https://nodejs.org/en/)  
  
새 패키지를 설치하려면 다음 명령 중 하나를 사용하십시오. Node,js 버전 관리자 (예: n 또는 nvm)를 통해 시스템에 npm이 설치되지 않은 경우 이를 실행하려면 관리자 권한이 필요합니다.
~~~cmd
npm install -g @vue/cli
# OR
yarn global add @vue/cli
~~~
설치 후 ``vue`` 명령 줄에서 바이너리에 액세스 할 수 있습니다.  사용 가능한 모든 명령을 나열하는 도움말 메시지를 표시하는 ``vue``를 실행하여 제대로 설치되었는지 확인할 수 있습니다.

### vue 버전 확인
~~~cmd
ver --version
~~~

## 업그레이드
글로벌 Vue CLI 패키지를 업그레이드하려면 다음을 실행해야합니다.
~~~cmd
npm update -g @vue/cli

# OR
yarn global upgrade --latest @vue/cli
~~~

### 프로젝트 종속성
위에 표시된 업그레디으 명령은 글로벌 Vue CLI 설치에 적용됩니다. 프로젝트 내에서 하나 이상의 ``@vue/cli`` 관련 패키지 (로 시작하는 패키지 포함) 를 업그레이드하려면 프로젝트 디렉터리 내에서 ``@vue/cli-plugin-`` 실행하세요 ``vue upgrade``

## 파일 위치
C:\Users\김성은\AppData\Roaming\npm  

[출처 내용 Vue CLI](https://cli.vuejs.org/guide/)