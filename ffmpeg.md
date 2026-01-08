# ffmpeg
ffmpeg는 영상·오디오 파일을 __“변환·가공·분해·조합”__ 하는 __저수준 도구__ 입니다.  
영상을 __스크러빙(앞뒤 이동)__ 에 적합하게 만드는 도구  
ffmpeg는 영상의 __내부 구조를 바꾸는 도구__

## 설치법
[FFmpeg 공식 사이트 다운로드 페이지](https://ffmpeg.org/download.html)  
[FFmpeg 공식 사이트 윈도우용 알집 다운로드 페이지](https://www.gyan.dev/ffmpeg/builds/)  
  
ffmpeg-git-essentials.7z 압축 풀고 C: 드라이브로 이동  
bin 폴더 경로 환경변수 - 시스템 변수 - path에 추가

## 사용법
> ffmpeg -i mian.mp4 -c:v libx264 -preset veryfast -crf 18 -g 1 -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 192k output_scrub_v2.mp4  
  
> ffmpeg -i 파일이름.확장자(mian.mp4) 비디오 코텍(-c:v libx264) -preset veryfast 환질 설정 (-crf 18) GOP(Group of Pictures) 크기(-g 1) 최소 키프레임 간격(-keyint_min 1) 장면 전환 감지 비활성화(-sc_threshold 0) 픽셀 포맷(-pix_fmt yuv420p) 웹 스트리밍 최적화(-movflags +faststart) -c:a aac -b:a 192k 출력파일이름.확장자(output_scrub_v2.mp4)
  
- -c:v libx264
    - __비디오 코덱__
    - H.264 사용
    - 모든 브라우저에서 가장 안정적인 코덱  
      
- -preset veryfast
    - __인코딩 속도 vs 압축 효율__
    - veryfast:
        - 인코딩은 빠름
        - 파일 크기는 조금 커짐
          
- -crf 18
    - __화질 설정__
    - 숫자 낮을수록 고화질
    - 18은 웹에서 거의 무손실 체감
    - 일반 권장 범위: 18~23  
      
- -g 1
    - __GOP(Group of Pictures) 크기__
    - 키프레임 간격 = 1
    - 모든 프레임이 키프레임 (All-I 영상)
    - seek(앞뒤 이동) 시 디코딩 거의 필요 없음
    - 스크롤 → 즉각 화면 반영
    - 4초 영상 __3__ 으로 설정해서 만들었다

- 최소 키프레임 간격
    - 최소 키프레임 간격
    - ``-g 1``과 짝
    - __강제로 매 프레임 키프레임 유지__  
      
- -sc_threshold 0
    - 장면 전환 감지 비활성화
    - ffmpeg는 기본적으로
        - “화면이 많이 바뀌면” 자동으로 키프레임 삽입
    - 이 옵션을 꺼서:
        - 키프레임 간격을 완전히 일정하게 유지  
          
- -pix_fmt yuv420p
    - __픽셀 포맷__
    - 모든 브라우저·디바이스에서 호환되는 표준 포맷
    - 이거 없으면 일부 환경에서 재생 안 될 수 있음

- -movflags +faststart
    - __웹 스트리밍 최적화__
    - mp4의 메타데이터를 파일 앞쪽으로 이동
    - 로딩·seek 안정성 향상  
  
- -c:a aac -b:a 192k
    - 오디오 코덱: AAC
    - 비트레이트: 192kbps
    - 사실 스크롤 영상이면 오디오 없어도 되지만, 호환성을 위해 유지
- output_scrub_v2.mp4
    - 출력 파일
    - 새로 만들어진 “스크롤용 영상”


| 항목 | 기존 mp4 | output_scrub_v2.mp4 |
|:-------|:-----------------:|--------------------:|
키프레임 간격 | 길고 불규칙 | 모든 프레임
스크롤 반응 | 느림 | 즉각
파일 크기 | 작음 | 큼
스크러빙 적합성 | ❌ | ⭕  
  
> 스크러빙 = 영상을 “재생”하는 게 아니라, 시간 위치를 사용자가 직접 앞뒤로 빠르게 움직이며 확인하는 행위