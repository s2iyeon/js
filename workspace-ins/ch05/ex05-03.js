// 화면을 다 구성하고(DOM 객체 구성, 이미지, js, css 파일등) 발생하는 이벤트
window.addEventListener('load', function(){
  console.log('load 이벤트 발생');
});

// DOM 객체 구성이 완료된 후 발생하는 이벤트
window.addEventListener('DOMContentLoaded', function(){
  console.log('DOMContentLoaded 이벤트 발생');

  // 첫번째 버튼 찾기
  const btn1 = document.querySelector('div > button');
  // const btn2 = document.querySelector('div > :nth-child(2)');
  // const btn2 = document.querySelector('div').children[1];
  // const btn2 = document.querySelectorAll('button')[1];
  // const btn2 = document.querySelector("div").firstElementChild.nextElementSibling;

  // 서주희
  // btn1.remove();
  // const btn2 = document.querySelector('div > button');
  // const divEl = document.querySelector('div');
  // divEl.insertBefore(btn1, divEl.firstChild);

  const btn2 = btn1.nextElementSibling;
  const btn3 = btn2.nextElementSibling;

  // 첫번째 버튼에 클릭 이벤트 추가(두번째 영화 찾기)
  btn1.addEventListener('click', function(){
    const movies = document.querySelector('#movies');
    const secondLi = movies.children[1];
    console.log(secondLi?.textContent); // 옵셔널 체이닝
  });

  // 두번째 버튼에 클릭 이벤트 추가(우유 추가)
  btn2.addEventListener('click', addMilk);

  // 세번째 버튼에 클릭 이벤트 추가(첫번째 항목 삭제)
  btn3.addEventListener('click', () => {
    const targetList = document.querySelectorAll('.list');
    for(let i=0; i<targetList.length; i++){
      const target = targetList[i]; // <ul>
      const firstLi = target.firstElementChild; // <li>
      firstLi?.remove(); // 옵셔널 체이닝
    }
  });

  // 네번째 버튼 누르면 첫번째 마트 항목 삭제(과제)
  

  // 다섯번째 버튼 우르면 첫번째 영화 항목 삭제(과제)


  function addMilk(){
    const newLi = document.createElement('li');
    const newTxt = document.createTextNode('우유');
    newLi.appendChild(newTxt);

    const buyList = document.querySelector('#buy-list');
    // buyList.appendChild(newLi); // 맨 뒤에 우유 추가
    buyList.insertBefore(newLi, buyList.firstChild); // 맨 앞에 우유 추가
  }

  function addMilk(){
    const buyList = document.querySelector('#buy-list');
    buyList.innerHTML += '<li>우유</li>';
  }
});

