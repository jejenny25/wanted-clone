# 원티드 클론코딩 채지은

## 9월 17일
1. 퍼블리싱 우선 순위 정하기
+ 원티드는 구인 구직 사이트이기때문에 구인광고와 상세 페이지를 최우선 순위로 결정
2. 이미지 다운로드
3. 공통영역 작업
+ 헤더 완료
+ 채용공고 리스트 완성

------------

## 9월 18일
1. redux 설치 후 적용 시켜보기(사소한 거라도)
+ 성공했으나 리덕스를 쓸경우 더 복잡해지는 것이라 뺌
2. 상세 페이지 완성
3. 네이버 맵 api 연동 완료
4. 푸터 완성
+ 일반회원가입 및 sns 회원가입 만들어야함
+ 생각보다 속도가 나지 않아서, 우선순위를 다시 생각해봐야겠다.

------------

## 9월 19일
1. 회원가입 모달 만들기
+ 회원가입이 모달창으로 뜨기때문에 사이트의 어느 곳에서든 클릭하면 호출이 되어야하는데 어디에 넣어야할지 고민중.
+ 모달창의 생김새가 비슷해서 공통으로 넣고 호출할때 어떤 모달이 띄워질지 받아와서 로그인,회원가입,비밀번호 입력 세가지 팝업 만듦
2. 로그인 이후 정보들을 리덕스에 저장하기 위해 리듀서 생성.
+ 이 과정에서 combineReducers를 하는 방법을 몰라서 한참 헤맸다. 결국 알아냄.

------------

## 9월 20일
1. 회사 소개 페이지 완성
+ 소개페이지 안에 그래프도 넣었으나, 데이터 연동이 될지 모르겠다. (우선 임시 데이터 array로 넣어둠)
2. 마이페이지 쪽 작업 중
+ 비슷한 포맷의 디자인이 반복되는데 어떻게 해야 재사용성을 높일 수 있을지 고민하면서 짜고 있다.

------------

## 9월 21일
1. 카카오 로그인 연동 
+ 여기서 문제 발생 > 로그인까지 문제없이 된 후에, index.html에 넣어둔 reset.css 로딩이 안됨.
+ 우선 css를 src로 옮김
2. 프로필 페이지 완성
3. 헤더의 직무카테고리 완성

+ 1차 피드백 사항 
``` 
1. 메인페이지 추가
2. 이력서, 로그인 여부에 따라 달라지는 페이지 (로컬스토리지사용)
3. 검색기능 추가
4. 검색 페이지 - 태그 분류
5. 이력서 입력, 파일업로드
```

------------

## 9월 22일
1. 메인페이지 작업
+ 생각보다 시간이 오래걸려서 오늘의 작업시간 메인에 다 투자됐다.
2. 이력서 인트로
+ 로그인 하지 않는 유저 접근시 보이는 페이지. 50% 완성

------------

## 9월 23일
1. 이력서 인트로(비로그인 완성)
2. 기존에 로그인 후 정보 저장을 리덕스로 했던 것을 localStorage로 바꿈
3. 이력서 리스트(로그인 후 보여지는 페이지) 완성
4. 이력서 입력페이지 10% 완성.

------------

## 9월 24일
1. 이력서 입력페이지 퍼블 완성
 + 기능적인 부분도 시간이 남으면 도전. (ex.글자수 같은 것)
2. 헤더 - 전체 검색 기능 퍼블 완성

-------------

## 9월 25일
1. 이력서 입력페이지에서 글자 수 체크해서 프로그레스바 변경하는 부분 완성

-------------

## 9월 26일
1. 채용메인 새로 만들기
2. 검색 결과 페이지 완성

-------------

## 9월 27일
1. 회원가입 모달 디테일 추가
+ 이메일, 비밀번호 유효성 체크 추가
+ 전체 체크 기능 추가
2. 직군 검색에서 직군을 선택하는 모달이 뜬 후, 모달 외 영역 클릭 시 닫히도록 구현
3. api연동 시도 중
+ 로그인시 이메일 입력을 하면 회원가입이 된 이메일인지 아닌지 여부를 가져오는 부분까지 완료

-------------

## 9월 28일
1. 회원가입 api 연동 완료
2. 로그인 api 연동 완료
3. 전체 직군 메뉴 api 연동 완료 ( + 받는 자료가 3개여서 나머지는 하드코딩으로 뿌려줌)
4. 서버 api 데이터가 적어서 채용리스트 json파일을 만들어서 가져와서 뿌려준수 검색 까지 되도록 수정.
 + 추후 api 데이터가 생기면 다시 연동 시도 해볼 예정
5. 채용 공고 필터 적용 어떻게 할지 고민

+ 2차 피드백 사항 
``` 
1. 반응형
2. 채용공고에서 필터
3. 응답률 매우 높음에서 토스트 -> 완료
4. 상세에서 공유- 라이브러리 (리액트 쉐어) -> 완료
``` 

## 9월 29일
1. 회사 소개 상세 api 연동
+ 회사 소개 글 안의 '\n'의 줄바꿈이 되지 않음 -> white-space: pre-wrap;로 해결
2. 회사 팔로우, 팔로우 삭제 api 연동
3. 채용공고 목록 리스트 조회 API 연동
4. 채용공고 - 적극 채용 회사 조회 API 연동