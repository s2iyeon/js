(() => {
  /*
  * 첫번째와 마지막 구매 항목을 출력
  * document.querySelector(selector): 지정한 selector 구문에 매칭되는 노드 목록 중 첫번째 노드를 반환
  */
  
  // querySelector를 사용한 CSS 선택자 방식으로 첫번째 요소 선택
  // #purchases: id가 purchases인 요소
  // > li:first-child: purchases의 직계 자식 중 첫번째 li 요소
  console.log('첫번째', document.querySelector('.list > li:first-child').textContent);
  
  // querySelector를 사용한 CSS 선택자 방식으로 마지막 요소 선택
  // #purchases: id가 purchases인 요소
  // > li:last-child: purchases의 직계 자식 중 마지막 li 요소
  console.log('마지막', document.querySelector('.list > li:last-child').textContent);
})();
