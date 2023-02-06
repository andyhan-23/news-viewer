# 뉴스 API를 활용한 뉴스 뷰어 만들기



## https://newsapi.org/ 에서 제공하는 API사용


### `1. 비동기 작업의 이해`

서버의 API를 사용 할 때는 네트워크 송수신 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리 합니다. 이 과정에서 해당 작업을 비동기적으로 처리하게 됩니다.


### `2. axios로 API호출해서 데이터 받아오기`

axios는 현대 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트로써 HTTP요청을 Promise기반으로 처리 합니다.

### `3. newsapi API 키 발급하기`

https://newsapi.org/register에 가입 후 https://newsapi.org/s/south-korea-news-api링크에 들어가 한국 뉴스를 가져오는 api키를 발급받을수 있습니다. 


### `4. 뉴스 뷰어 UI 만들기`

1. NewsItem 만들기
2. NewsList 만들기

### `5. 데이터 연동하기`

useEffect를 사용하여 컴포넌트가 처음 렌더링 되는 시점에 API를 요청하면 됩니다.

### `6. 카테고리 기능 구현하기`

뉴스 카테고리는 총 여섯 개이며, 다음 과 같이 영어로 되어 있습니다.
business(비즈니스) science(과학) entertainment(연예) sports(스포츠) health(건강) technology(기술)

### `7. 리액트 라우터 적용하기`

카테고리의 값을 리액트 라우터의 URL 파라미터를 사용하여 관리해줍니다.

## 구현화면
<img width="828" alt="스크린샷 2023-02-06 오후 10 45 19" src="https://user-images.githubusercontent.com/98483125/216987429-17a237a4-973d-4527-b602-113707bbb5d3.png">


