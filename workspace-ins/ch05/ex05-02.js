/*
* + 버튼을 누르면 count 값을 1씩 증가
*/

const btn = document.querySelector('#container > button');
const countSpan = document.querySelector('#container > span');

// + 버튼에 클릭 이벤트 등록
btn.addEventListener('click', plus);

function plus(){
  const currVal = parseInt(countSpan.lastChild.nodeValue);
  const nextVal = currVal + 1;
  countSpan.firstChild.nodeValue = nextVal;
}

setTimeout(function(){
  // 이벤트 취소
  btn.removeEventListener('click', plus);
}, 1000*10);