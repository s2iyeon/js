// td에 click 이벤트를 추가한다.
// 배경색을 빨간색과 원래색으로 토글한다.
// const tdList = document.querySelectorAll('td');
// for(let td of tdList){
//   td.addEventListener('click', () => td.classList.toggle('red'));
// }


const table = document.querySelector('table');
table.addEventListener('click', e => e.target.classList.toggle('red'));