# new Set();
배열의 중복을 알아서 제거 해준다

~~~js
let array = [1,1,1,2,2,2,3,3,3];
array = new Set(array);
// Set()을 이용하면 ?? 데이터로 변한다 (?? 아직 뭔지 모르겠다)
// 그래서 배열로 다시 변경 해줘야 한다
array = Array.from(array);
console.log(array) /* [1,2,3] */
~~~