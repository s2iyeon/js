(() => {
  // td에 click 이벤트를 추가한다.
  // 배경색을 빨간색과 원래색으로 토글한다.
  // const tdList = document.querySelectorAll('td');
  // for(let td of tdList){
  //   td.addEventListener('click', () => td.classList.toggle('red'));
  // }
  
  
  const table = document.querySelector('table');
  // 이벤트 위임
  table.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'TD'){
      e.target.classList.toggle('red');
    }
  });
  
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    table.innerHTML += `
      <tr>
        <td>0</td><td>0</td><td>0</td>
      </tr>
    `;
  });
})();
