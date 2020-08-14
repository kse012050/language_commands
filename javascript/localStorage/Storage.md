# Storage
웹 스토리지 API의 스토리지 인터페이스는 특정 도메인을 위한 세션스토리지(``sessionStorage``) 또는 로컬 스토리지(``localStorage``)에 접근할 수 있게 합니다. 예를 들면, 저장된 데이터 아이템들의 추가, 변경, 삭제가 가능한 방식과 같습니다.  
  
만약 한 도메인을 위한 세션스토리지(``sessionStorage``)를 조작하고 싶다면, __Window.sessionStorage__ 메서드를 사용하면 됩니다. 마찬가지로, 로컬스토리지의 경우에는 __Window.localStorage__ 를 사용합니다.

## Properties 속성

### ``Storage.length``  >  Read only (읽기 전용)
Storage 오브젝트에 저장된 데이터 아이템들의 갯수를 반환합니다.

## Methods

### [Storage.key()](https://developer.mozilla.org/ko/docs/Web/API/Storage/key)
특정 숫자 n에 대해서, 스토리지에 n번째 저장되어 있는 키의 이름을 반환합니다.

### [``Storage.getItem()``](https://developer.mozilla.org/ko/docs/Web/API/Storage/getItem)
키의 이름을 넘기면, 키 값이 반환됩니다.

### [``Storage.setItem()``](https://developer.mozilla.org/ko/docs/Web/API/Storage/setItem)
키 이름과 값을 지정하여 스토리지에 저장합니다. 만약 키가 이미 있다면, 키의 값을 업데이트합니다.

### [Storage.removeItem()](https://developer.mozilla.org/ko/docs/Web/API/Storage/removeItem)
키 이름에 해당하는 아이템을 제거합니다.

### [Storage.clear()](https://developer.mozilla.org/ko/docs/Web/API/Storage/clear)
스토리지의 모든 키를 제거합니다.


## Examples 예제
localStorage를 호출함으로써 Storage의 객체에 접근할 수 있습니다. ``!localStorage.getItem('bgcolor')``을 이용하여 로컬 스토리지가 해당 데이터를 포함하는지의 여부를 확인할 수 있습니다. 만약 포함하고 있다면, setStyle() 메서드를 이용하여 로컬스토리지에 저장된 아이템들의 값에 접근하고, 그 값으로 현재의 속성들의 값을 업데이트합니다. 만약 bgcolor 값이 존재하지 않는다면, populateStorage() 메서드를 이용하여 로컬스토리지에 새로운 아이템들과 그 값을 저장합니다.  
  
~~~js
if(!localStorage.getItem('bgcolor')){
    populateStorage();
}else{
    setStyles();
}

function populateStorage(){
    localStorage.setItem('bgcolor', document.getElementById
    ('bgcolor').value);
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);

    setStyles();
}

function setStyles(){
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');

    document.getElementById('bgcolor').value = currentColor;
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;

    htmlElem.style.backgroundColor = '#' + currentColor;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute('src',currntImage);
}
~~~

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/API/Storage)