# Clock
시간을 추적하기 위한 객체. ``performance.now``를 사용합니다.

## Constructor
### Clock( autoStart : Boolean )
autoStart — (선택 사항) ``.getDelta()``가 처음 호출될 때 시계를 자동으로 시작할지 여부. 기본값은 ``true``입니다.

## Properties

### .autoStart : Boolean
설정된 경우 ``.getDelta()``가 처음 호출될 때 시계를 자동으로 시작합니다. 기본값은 ``true``입니다.

### .startTime : Float
시계의 시작 메서드가 마지막으로 호출된 시간을 보관합니다. 기본값은 ``0``입니다.

### .oldTime : Float
시계의 시작, .getElapsedTime() 또는 ``.getDelta()`` 메서드가 마지막으로 호출된 시간을 보관합니다. 기본값은 ``0``입니다.

### .elapsedTime : Float
시계가 실행된 총 시간을 추적합니다. 기본값은 ``0``입니다.

### .running : Boolean
시계가 실행 중인지 여부입니다. 기본값은 ``false``입니다.

## Methods
### .start() : undefined
시계를 시작합니다. 또한 ``.startTime``과 ``.oldTime``을 현재 시간으로 설정하고 ``.elapsedTime``을 ``0``으로, ``.running``을 ``true``로 설정합니다.

### .stop() : undefined
시계를 중지하고 ``oldTime``을 현재 시간으로 설정합니다.

### .getElapsedTime() : Float
시계가 시작된 이후 경과한 초를 가져오고 ``.oldTime``을 현재 시간으로 설정합니다.
``.autoStart``가 ``true``이고 시계가 실행 중이 아니면 시계도 시작합니다.

### .getDelta() : Float
시간 ``.oldTime``이 설정된 이후 경과한 초를 가져오고 ``.oldTime``을 현재 시간으로 설정합니다.
``.autoStart``가 ``true``이고 시계가 실행 중이 아니면 시계도 시작합니다.

## Source
[src/core/Clock.js](https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js)

[내용출처 threejs 공식 사이트 시간](https://threejs.org/docs/#api/en/core/Clock)