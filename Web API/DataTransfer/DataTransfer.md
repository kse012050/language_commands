# DataTransfer
__``DataTransfer``__ 개체는 끌어서 놓기 작업 중에 끌어 오는 데이터를 보관하는 데 사용됩니다. 각각 하나 이상의 데이터 유형 인 하나 이상의 데이터 항목을 보유 할 수 있습니다. 드래그 앤 드롭에 대한 자세한 내용은 [HTML 드래그 앤 드롭 API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)를 참조하세요.


이 개체는 모든 [드래그 이벤트](https://developer.mozilla.org/ko/docs/Web/API/DragEvent)의 [dataTransfer(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/dataTransfer) 속성에서 사용할 수 있습니다.

## Constructor
### [DataTransfer() (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/DataTransfer)
새 ``DataTransfer`` 객체를 만들고 반환합니다.

## Properties 속성
### Standard properties 표준 속성

#### [DataTransfer.dropEffect(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect)
현재 선택한 끌어서 놓기 작업의 유형을 가져 오거나 작업을 새 유형으로 설정합니다. 값은 ``없음``, ``복사``, ``연결`` 또는 ``이동``이어야합니다.

#### [DataTransfer.effectAllowed (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed)
가능한 모든 유형의 작업을 제공합니다. ``none``, ``copy``, ``copyLink``, ``copyMove``, ``link``, ``linkMove``, ``move``, ``all`` 또는 ``uninitialized`` 중 하나 여야합니다.

#### [DataTransfer.files (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files)
데이터 전송에 사용할 수있는 모든 로컬 파일 목록이 포함되어 있습니다. 드래그 작업에 파일 드래그가 포함되지 않은 경우이 속성은 빈 목록입니다.

#### [DataTransfer.items (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items) 읽기 전용
모든 드래그 데이터의 목록 인 [DataTransferItemList (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList) 개체를 제공합니다.

#### [DataTransfer.types (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types) 읽기 전용
[dragstart (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event) 이벤트에 설정된 형식을 제공하는 [문자열 배열](https://developer.mozilla.org/ko/docs/Web/API/DOMString)입니다.

[내용출처 MDN 파일에 대한 정보 (추가 내용은 실제로 사용할 때 하겠다)](https://developer.mozilla.org/ko/docs/Web/API/DataTransfer)