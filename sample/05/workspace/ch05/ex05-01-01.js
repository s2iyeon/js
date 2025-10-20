/*
* 첫번째 구매 항목을 출력하고(두부) 그 값을 양파로 수정
* document.getElementById(id): HTML 문서에서 해당 `id`를 가진 요소를 찾아서 반환
* document.getElementsByTagName(tagName): 문서 전체에서 태그명에 해당하는 요소노드를 NodeList(유사 배열 객체)로 반환
* 요소노드.getElementsByTagName(tagName): 지정한 요소노드의 하위 모든 요소를 대상으로 태그명에 해당하는 요소노드를 NodeList(유사 배열 객체)로 반환
* 텍스트 노드의 nodeValue: 문자열 값
*/

// id가 buy-list인 요소를 찾아서 반환

// getElementsByTagName 사용: 모든 li 태그를 배열로 가져온 후 첫 번째 요소 선택

// firstChild를 사용하여 텍스트 노드 선택 (요소 노드의 실제 텍스트 내용)

// nodeValue를 사용하여 텍스트 내용 수정
