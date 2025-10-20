/*
* + 버튼을 누르면 count 값을 1씩 증가
*/

const countSpan = document.querySelector('#container > span');

function plus(){
  const currVal = parseInt(countSpan.lastChild.nodeValue);
  const nextVal = currVal + 1;
  countSpan.firstChild.nodeValue = nextVal;
}