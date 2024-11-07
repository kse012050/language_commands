# helmet
정보보안을 위해서 서버와 클라이언트 간에 중요한 정보가 실수로 전달되지 않도록, 서버에서 다양한 HTTP 해더를 자동으로 설정해주는 모듈이다  

## 사용법
### 설치방법
> npm i helmet

### 사용방법
~~~js
import helmet from "helmet";

const app = express();

app.use(helmet());
~~~

### Helmet은 기본적으로 다음 헤더를 설정합니다
- ``Content-Security-Policy``: 페이지에서 발생할 수 있는 일에 대한 강력한 허용 목록으로 많은 공격을 완화합니다.
- ``Cross-Origin-Opener-Policy``: 페이지의 프로세스를 격리하는 데 도움이 됩니다.
- ``Cross-Origin-Resource-Policy``: 다른 사람이 리소스를 교차 출처로 로드하는 것을 차단합니다.
- ``Origin-Agent-Cluster``: 프로세스 격리를 출처 기반으로 변경합니다.
- ``Referrer-Policy``: Referer 헤더를 제어합니다.
- ``Strict-Transport-Security``: 브라우저에 HTTPS를 선호하도록 지시합니다.
- ``X-Content-Type-Options``: MIME 스니핑을 방지합니다.
- ``X-DNS-Prefetch-Control``: DNS 사전 페칭을 제어합니다.
- ``X-Download-Options``: 다운로드를 저장하도록 강제합니다(Internet Explorer 전용)
- ``X-Frame-Options``: 클릭재킹 공격을 완화하는 레거시 헤더
- ``X-Permitted-Cross-Domain-Policies``: Adobe 제품과 같은 교차 도메인 동작을 제어합니다. Acrobat
- ``X-Powered-By``: 웹 서버에 대한 정보. 간단한 공격에 사용될 수 있기 때문에 제거됨
- ``X-XSS-Protection``: XSS 공격을 완화하려는 레거시 헤더이지만 상황을 악화시키므로 Helmet에서 비활성화됨

각 헤더는 구성될 수 있습니다. 예를 들어, Content-Security-Policy 헤더를 구성하는 방법은 다음과 같습니다.
~~~js
// Content-Security-Policy 헤더를 구성합니다.
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "example.com"],
      },
    },
  }),
);
~~~

헤더도 비활성화할 수 있습니다. 예를 들어, Content-Security-Policy 및 X-Download-Options 헤더를 비활성화하는 방법은 다음과 같습니다.
~~~js
// Content-Security-Policy 및 X-Download-Options 헤더 비활성화
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  }),
);
~~~
[내용출처 npm 사이트](https://www.npmjs.com/package/helmet)