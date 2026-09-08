# Three.js: Vector2

`Vector2`는 **2차원 벡터를 표현하는 클래스**입니다.  
Vector2는 x와 y 두 값을 하나로 묶어 2차원 공간의 위치, 방향, 거리 등을 표현하고 계산하는 클래스​입니다.

2차원 벡터는 두 개의 값:

```text id="vec2-basic"
(x, y)
```

으로 구성됩니다.

주로 다음과 같은 값을 표현할 때 사용합니다.

```text id="vec2-use"
2D 위치
방향
거리
마우스 좌표
UV 좌표
크기
```

예를 들어:

```javascript id="vec2-example"
const position = new THREE.Vector2(
    10,
    20
);
```

이면:

```text id="vec2-result"
x = 10
y = 20
```

인 2차원 벡터가 만들어집니다.

## 생성자

```javascript id="vec2-constructor"
new THREE.Vector2(x, y)
```

기본값은:

```text id="vec2-default"
x = 0
y = 0
```

입니다.

따라서:

```javascript id="vec2-empty"
const vector = new THREE.Vector2();
```

는:

```text id="vec2-zero"
(0, 0)
```

과 같습니다.

## 주요 속성

```javascript id="vec2-properties"
vector.x
vector.y
```

예:

```javascript id="vec2-prop-example"
const vector = new THREE.Vector2(
    10,
    20
);

console.log(vector.x);
// 10

console.log(vector.y);
// 20
```

`width`, `height`도 사용할 수 있습니다.

```text id="vec2-alias"
width = x

height = y
```

## set()

벡터의 `x`, `y` 값을 변경합니다.

```javascript id="vec2-set"
const vector = new THREE.Vector2();

vector.set(
    10,
    20
);
```

결과:

```text id="vec2-set-result"
(10, 20)
```

## add()

다른 벡터를 더합니다.

```javascript id="vec2-add"
const a = new THREE.Vector2(
    10,
    20
);

const b = new THREE.Vector2(
    5,
    3
);

a.add(b);
```

결과:

```text id="vec2-add-result"
(10 + 5, 20 + 3)

↓

(15, 23)
```

## sub()

다른 벡터를 뺍니다.

```javascript id="vec2-sub"
const a = new THREE.Vector2(
    10,
    20
);

const b = new THREE.Vector2(
    5,
    3
);

a.sub(b);
```

결과:

```text id="vec2-sub-result"
(5, 17)
```

## multiplyScalar()

`x`, `y`에 같은 숫자를 곱합니다.

```javascript id="vec2-multiply"
const vector = new THREE.Vector2(
    2,
    3
);

vector.multiplyScalar(2);
```

결과:

```text id="vec2-multiply-result"
(4, 6)
```

## divideScalar()

`x`, `y`를 같은 숫자로 나눕니다.

```javascript id="vec2-divide"
const vector = new THREE.Vector2(
    10,
    20
);

vector.divideScalar(2);
```

결과:

```text id="vec2-divide-result"
(5, 10)
```

## length()

벡터의 길이를 구합니다.

```javascript id="vec2-length"
const vector = new THREE.Vector2(
    3,
    4
);

console.log(vector.length());
// 5
```

벡터 길이는:

```text id="vec2-length-formula"
(0, 0)
↓
(x, y)

사이의 직선 거리
```

입니다.

## distanceTo()

두 벡터 사이의 거리를 구합니다.

```javascript id="vec2-distance"
const a = new THREE.Vector2(
    0,
    0
);

const b = new THREE.Vector2(
    3,
    4
);

const distance = a.distanceTo(b);

console.log(distance);
// 5
```

## normalize()

벡터의 방향은 유지하면서 길이를 `1`로 만듭니다.

```javascript id="vec2-normalize"
const vector = new THREE.Vector2(
    3,
    4
);

vector.normalize();
```

결과적으로:

```text id="vec2-normalize-result"
방향은 그대로

length = 1
```

이 됩니다.

방향만 필요할 때 많이 사용합니다.

## lerp()

두 벡터 사이의 값을 부드럽게 보간합니다.

```javascript id="vec2-lerp"
const current = new THREE.Vector2(
    0,
    0
);

const target = new THREE.Vector2(
    100,
    100
);

current.lerp(
    target,
    0.1
);
```

`0.1`은 target 방향으로 약 `10%` 이동한다는 의미입니다.

```text id="vec2-lerp-result"
현재 위치
↓
10%
↓
목표 위치
```

마우스를 부드럽게 따라가는 효과 등에 자주 사용할 수 있습니다.

## clone()

현재 벡터와 같은 값을 가진 새로운 벡터를 만듭니다.

```javascript id="vec2-clone"
const a = new THREE.Vector2(
    10,
    20
);

const b = a.clone();
```

## copy()

다른 벡터의 값을 현재 벡터에 복사합니다.

```javascript id="vec2-copy"
const a = new THREE.Vector2(
    10,
    20
);

const b = new THREE.Vector2();

b.copy(a);
```

결과:

```text id="vec2-copy-result"
b = (10, 20)
```

## random()

`x`, `y`에 `0 이상 1 미만`의 랜덤 값을 넣습니다.

```javascript id="vec2-random"
const vector = new THREE.Vector2();

vector.random();
```

예:

```text id="vec2-random-result"
x = 0.27
y = 0.81
```

## rotateAround()

특정 점을 기준으로 벡터를 회전시킵니다.

```javascript id="vec2-rotate"
const position = new THREE.Vector2(
    1,
    0
);

const center = new THREE.Vector2(
    0,
    0
);

position.rotateAround(
    center,
    Math.PI / 2
);
```

`Math.PI / 2`는 약 `90도`입니다.

## 실전 예제: 마우스 좌표

Three.js에서 `Vector2`는 마우스 좌표를 저장할 때 많이 사용합니다.

```javascript id="vec2-mouse"
const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});
```

브라우저 마우스 좌표를 Three.js에서 많이 사용하는 `-1 ~ 1` 범위로 변환합니다.

```text id="vec2-mouse-flow"
마우스 좌표

0 ~ width
0 ~ height

↓

Vector2

-1 ~ 1
```

이 값은 `Raycaster` 같은 기능에서도 자주 사용됩니다.

## 자주 사용하는 메서드

```text id="vec2-methods"
set()
→ 값 변경

add()
→ 벡터 더하기

sub()
→ 벡터 빼기

multiplyScalar()
→ 전체 크기 배율 변경

length()
→ 벡터 길이

distanceTo()
→ 두 점 사이 거리

normalize()
→ 길이를 1로 만들기

lerp()
→ 두 값 사이 부드럽게 이동

clone()
→ 복제

copy()
→ 값 복사
```

## 핵심 정리

```javascript id="vec2-summary-code"
const vector = new THREE.Vector2(
    10,
    20
);
```

는:

```text id="vec2-summary"
x = 10
y = 20
```

을 가진 2차원 벡터입니다.

쉽게 말하면:

```text id="vec2-final"
Vector2
= x와 y를 하나의 객체로 관리하는 클래스
```

라고 이해하면 됩니다.

특히 Three.js에서는:

```text id="vec2-three-use"
마우스 좌표
2D 위치
방향
거리 계산
보간
UV 관련 값
```

등에서 자주 사용됩니다.

## 관련 문서

* [Vector2](https://threejs.org/docs/pages/Vector2.html)
* [Vector3](https://threejs.org/docs/pages/Vector3.html)
* [Raycaster](https://threejs.org/docs/pages/Raycaster.html)
* [BufferAttribute](https://threejs.org/docs/pages/BufferAttribute.html)
