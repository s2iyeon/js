(() => {
  /*
  * 첫번째와 마지막 구매 항목을 출력
  * firstChild, firstElementChilde, lastChild, lastElementChild: 자식요소 접근
  */
  
  // getElementsByClassName: class 속성으로 요소 선택 (배열 형태로 반환되므로 인덱스 지정 필요)
  const buyList = document.getElementsByClassName('list')[0];
  
  // firstElementChild 사용: 직접 첫 번째 자식 요소 선택
  // const firstLi = buyList.firstElementChild;
  const firstLi = buyList.children[0];
  
  // firstChild를 사용하여 텍스트 노드 선택 (요소 노드의 실제 텍스트 내용)
  const firstTxt = firstLi.firstChild;
  console.log('첫번째 항목', firstTxt.nodeValue);
  
  // lastElementChild를 사용하여 마지막 li 요소의 텍스트 내용 출력
  // const lastLi = buyList.children[2];
  const lastLi = buyList.lastElementChild;
  const lastTxt = lastLi.firstChild;
  console.log('마지막 항목', lastTxt.nodeValue);
  
})();
