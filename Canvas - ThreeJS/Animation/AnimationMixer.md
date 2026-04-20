# AnimationMixer (애니메이션 믹서)
특정 객체에 대한 애니메이션을 재생하는 플레이어입니다.  
씬에서 여러 객체가 독립적으로 애니메이션될 경우, 객체마다 하나의 AnimationMixer를 사용할 수 있습니다.

## Constructor
### AnimationMixer( root : Object3D )
AnimationMixer를 생성합니다.

- root  
이 믹서가 애니메이션을 적용할 대상 객체

## Properties

### .time : number
믹서의 전역 시간 (초 단위, 생성 시 0부터 시작)  
기본값은 `0`

---

### .timeScale : number
전역 시간 스케일 값

주의:
`0`으로 설정하면 일시정지, 다시 `1`로 설정하면 재생

기본값은 `1`

## Methods

### .clipAction( clip : AnimationClip | string, optionalRoot : Object3D, blendMode : NormalAnimationBlendMode | AdditiveAnimationBlendMode ) : AnimationAction
주어진 클립에 대한 AnimationAction을 반환합니다.

- 동일한 clip + root 조합이면 항상 같은 action 반환
- 존재하지 않으면 새로 생성

- clip  
AnimationClip 또는 이름

- optionalRoot  
대체 루트 객체

- blendMode  
블렌딩 모드

- 반환값  
AnimationAction

---

### .existingAction( clip : AnimationClip | string, optionalRoot : Object3D ) : AnimationAction
이미 존재하는 AnimationAction을 반환합니다.

- clip  
AnimationClip 또는 이름

- optionalRoot  
대체 루트 객체

- 반환값  
AnimationAction (없으면 null)

---

### .getRoot() : Object3D
현재 믹서의 루트 객체 반환

---

### .setTime( time : number ) : AnimationMixer
특정 시간으로 이동하고 애니메이션을 갱신합니다.

- time  
초 단위 시간

주의:
timeScale이 적용됨

- 반환값  
현재 믹서

---

### .stopAllAction() : AnimationMixer
모든 애니메이션 액션 비활성화

---

### .uncacheAction( clip : AnimationClip | string, optionalRoot : Object3D )
특정 액션의 메모리 해제

주의:
반드시 `AnimationAction.stop()` 호출 후 사용

---

### .uncacheClip( clip : AnimationClip )
특정 클립의 메모리 해제

주의:
관련된 모든 action을 stop 후 사용

---

### .uncacheRoot( root : Object3D )
특정 루트 객체의 메모리 해제

주의:
- 모든 action stop 필요
- 또는 `stopAllAction()` 사용

---

### .update( deltaTime : number ) : AnimationMixer
시간을 진행시키고 애니메이션 업데이트

- deltaTime  
초 단위 시간 (보통 Clock에서 가져옴)

- 반환값  
현재 믹서

## Source
[src/animation/AnimationMixer.js](https://github.com/mrdoob/three.js/blob/master/src/animation/AnimationMixer.js)

[내용출처 threejs 공식 사이트 AnimationMixer](https://threejs.org/docs/#api/en/animation/AnimationMixer)