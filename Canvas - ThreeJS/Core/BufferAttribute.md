# BufferAttribute (버퍼 속성)
지오메트리와 연결된 속성 데이터를 저장하는 클래스입니다.

예:
- 정점 위치(position)
- 인덱스(index)
- 노멀(normal)
- 색상(color)
- UV
- 사용자 정의 속성(custom attribute)

이 데이터를 GPU에 효율적으로 전달할 수 있도록 설계되었습니다.

벡터 형태 데이터를 다룰 때는 다음 헬퍼 메서드를 사용할 수 있습니다:

~~~js
Vector3.fromBufferAttribute( attribute, index );
~~~

---

# Constructor

### BufferAttribute( array : TypedArray, itemSize : number, normalized : boolean )

새로운 BufferAttribute를 생성합니다.

- array  
속성 데이터를 담는 TypedArray

- itemSize  
각 정점이 가지는 값 개수

예:
- position → 3 (x,y,z)
- uv → 2 (u,v)

- normalized  
정규화 여부

기본값은 `false`

---

# Properties

### .array : TypedArray
실제 데이터를 저장하는 배열

배열 길이는 다음 구조를 가져야 합니다:

~~~txt
itemSize * vertexCount
~~~

---

### .count : number (readonly)
저장된 아이템 개수

내부적으로:

~~~txt
array.length / itemSize
~~~

로 계산됩니다.

---

### .gpuType : FloatType | IntType
GPU에서 사용할 타입 설정

주의:
- integer 배열에서만 적용
- float 배열에서는 변경 불가

기본값은 `FloatType`

---

### .id : number (readonly)
버퍼 속성 ID

---

### .isBufferAttribute : boolean (readonly)
타입 확인용 플래그

기본값은 `true`

---

### .itemSize : number
정점 하나당 저장되는 값 개수

예:
- vec2 → 2
- vec3 → 3
- vec4 → 4

---

### .name : string
버퍼 속성 이름

---

### .needsUpdate : boolean
값 변경 후 GPU 재업로드 여부

배열 수정 후 반드시:

~~~js
attribute.needsUpdate = true;
~~~

설정 필요

기본값은 `false`

---

### .normalized : boolean
정수형 데이터 정규화 여부

예:
`UInt16Array + normalized = true`

~~~txt
0 ~ 65535
↓
0.0 ~ 1.0
~~~

---

### .updateRanges : Array.<Object>
일부 데이터만 GPU 업데이트할 때 사용

`addUpdateRange()` 사용 권장

---

### .usage
GPU 최적화를 위한 사용 패턴 설정

종류:
- StaticDrawUsage
- DynamicDrawUsage
- StreamDrawUsage
- StaticReadUsage
- DynamicReadUsage
- StreamReadUsage
- StaticCopyUsage
- DynamicCopyUsage
- StreamCopyUsage

주의:
초기 사용 후 변경 불가

기본값은 `StaticDrawUsage`

---

### .version : number
`needsUpdate = true` 될 때마다 증가

---

# Methods

### .addUpdateRange( start : number, count : number )
일부 범위만 GPU 업데이트

---

### .applyMatrix3( m : Matrix3 ) : BufferAttribute
3x3 행렬 적용

itemSize 2 또는 3만 가능

---

### .applyMatrix4( m : Matrix4 ) : BufferAttribute
4x4 행렬 적용

itemSize 3만 가능

---

### .applyNormalMatrix( m : Matrix3 ) : BufferAttribute
노멀 매트릭스 적용

itemSize 3만 가능

---

### .clearUpdateRanges()
업데이트 범위 초기화

---

### .clone() : BufferAttribute
복사본 생성

---

### .copy( source : BufferAttribute ) : BufferAttribute
다른 BufferAttribute 값 복사

---

### .copyArray( array ) : BufferAttribute
배열 데이터 복사

---

### .copyAt( index1, attribute, index2 ) : BufferAttribute
특정 인덱스 데이터 복사

---

### .dispose()
버퍼 속성 해제

WebGPU 전용

---

### .getComponent( index, component ) : number
특정 컴포넌트 값 반환

---

### .getW( index ) : number
w 값 반환

---

### .getX( index ) : number
x 값 반환

---

### .getY( index ) : number
y 값 반환

---

### .getZ( index ) : number
z 값 반환

---

### .onUpload( callback : function ) : BufferAttribute
GPU 업로드 완료 후 콜백 설정

CPU 메모리 정리에 사용 가능

---

### .onUploadCallback()
GPU 업로드 후 실행되는 콜백

---

### .set( value : TypedArray | Array, offset : number ) : BufferAttribute
배열 데이터 설정

기본 offset은 `0`

---

### .setComponent( index, component, value ) : BufferAttribute
특정 컴포넌트 값 설정

---

### .setUsage( value ) : BufferAttribute
usage 설정

---

### .setW( index, w ) : BufferAttribute
w 값 설정

---

### .setX( index, x ) : BufferAttribute
x 값 설정

---

### .setXY( index, x, y ) : BufferAttribute
x,y 설정

---

### .setXYZ( index, x, y, z ) : BufferAttribute
x,y,z 설정

---

### .setXYZW( index, x, y, z, w ) : BufferAttribute
x,y,z,w 설정

---

### .setY( index, y ) : BufferAttribute
y 값 설정

---

### .setZ( index, z ) : BufferAttribute
z 값 설정

---

### .toJSON() : Object
JSON 직렬화

---

### .transformDirection( m : Matrix4 ) : BufferAttribute
방향 벡터에 Matrix4 적용

itemSize 3만 가능

---

# Source
[src/core/BufferAttribute.js](https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js)

[내용출처 threejs 공식 사이트 BufferAttribute](https://threejs.org/docs/#api/en/core/BufferAttribute)