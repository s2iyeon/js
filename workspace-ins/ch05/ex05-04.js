const btn = document.querySelector('button');

// DOM Level 0 방식(비표준 -> HTML 표준)
btn.onclick = function(){
  console.log('2. 눌렀어');
};
btn.onclick = function(){
  console.log('3. 눌렀음');
};

// DOM Level 2 방식(DOM 표준)
btn.addEventListener('click', function(){
  console.log('4. 눌렀지');
});
btn.addEventListener('click', handleClick);

// 10초 후에 이벤트 등록 취소
setTimeout(() => {
  btn.removeEventListener('click', handleClick);
}, 1000*10);

function handleClick(){
  console.log('5. 눌렀소');
}