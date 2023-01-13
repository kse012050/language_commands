# String(문자열)의 함수 간단 정리

## Methods

### String.prototype.at(index)   (at ~에)
index 번째 있는 글자를 가져온다  
``-1`` 마이너스 값을 주면 뒤에서 부터 순서  
> String[index] 랑 차이가 있을까?

### String.prototype.charAt(index) (char 문자 at ~에)
index 번째 있는 글자를 가져온다  
마이너스 값을 허용하지 않는다  
index 값이 length보다 크면 ``빈 문자열`` 반환  
index 값이 ``없으면`` ``0``으로 취급
> at(index) 랑 차이가 뭘가