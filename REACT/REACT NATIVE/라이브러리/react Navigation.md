# React Navigation
[공식 사이트](https://reactnavigation.org/)

## 설치
[공식 사이트 설치 페이지](https://reactnavigation.org/docs/getting-started/)

CMD에서 ``프로젝트 폴더``에서 
> npm install @react-navigation/native  
> npm install react-native-screens react-native-safe-area-context  
  

``android/app/src/main/java/프로젝트 이름/MainActivity.java`` 에 아래 코드 넣기
~~~js
import android.os.Bundle;
...
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
~~~