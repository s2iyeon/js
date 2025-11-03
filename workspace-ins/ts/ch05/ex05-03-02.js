// DOM 객체 구성이 완료된 후 발생하는 이벤트
window.addEventListener('DOMContentLoaded', function () {
  // 첫번째 버튼 찾기
  const btn1 = document.querySelector('div > button');
  const btn2 = btn1.nextElementSibling;
  const btn3 = btn2.nextElementSibling;

  // 소혜림, 김현주
  // (() => {
  //   const btn4 = document.querySelector("div > button:nth-child(4)");
  //   const btn5 = document.querySelector("div > button:nth-child(5)");

  //   btn4.addEventListener("click", function () {
  //     const buyFirst = document.querySelector("#buy-list > li");
  //     buyFirst?.remove();
  //   });

  //   btn5.addEventListener("click", function () {
  //     const movieFirst = document.querySelector("#movies > li");
  //     movieFirst?.remove();
  //   });
  // })();

  // 김지유, 장수정
  // (() => {
  //   const btn4 = btn3.nextElementSibling;
  //   const btn5 = btn4.nextElementSibling;
  //   //네번째 버튼 누르면 첫번째 마트 항목 삭제
  //   btn4.addEventListener("click", () => {
  //     const martFirst = document.querySelector("#buy-list > li");
  //     martFirst?.remove();
  //   });
  //   //다섯번째 버튼 누르면 첫번째 영화 항목 삭제
  //   btn5.addEventListener("click", () => {
  //     const movieFirst = document.querySelector("#movies > li");
  //     movieFirst?.remove();
  //   });
  // })();


  // 한정아, 오지아, 김현수
  // (() => {
  //   // 네번쨰 버튼 포커싱
  //   const btn4 = btn3.nextElementSibling;
  //   // 네번째 버튼 누르면 첫번째 마트 항목 삭제 
  //   btn4.addEventListener('click', () => {
  //     const targetBuylist = document.querySelector('#buy-list');
  //     const firstBuylist = targetBuylist.firstElementChild;
  //     firstBuylist?.remove();
  //   })


  //   // 다섯번쨰 버튼 포커싱
  //   const btn5 = btn4.nextElementSibling;
  //   // 다섯번째 버튼 누르면 첫번째 영화 항목 삭제
  //   btn5.addEventListener('click', () => {
  //     const targetMovies = document.querySelector('#movies');
  //     const firstMovies = targetMovies.firstElementChild;
  //     firstMovies?.remove();
  //   })
  // })();

  // 백승준
  // (() => {
  //   // 네번째 버튼에 클릭 이벤트 추가
  //   const btn4 = document.querySelectorAll('div > button')[3];

  //   btn4.addEventListener('click', () => {
  //     const targetBuyList = document.querySelector('#buy-list > li');
  //     targetBuyList?.remove();
  //   });

  //   // 다섯번째 버튼에 클릭 이벤트 추가
  //   const btn5 = document.querySelectorAll('div > button')[4];

  //   btn5.addEventListener('click', () => {
  //     const movieList = document.querySelector('#movies > li');
  //     movieList?.remove();
  //   });
  // })();

  // 박지섭
  // (() => {
  //   // 네번째 버튼 누르면 첫번째 마트 항목 삭제(과제)

  //   // 네 번째 버튼 찾기
  //   const btn4 = btn3.nextElementSibling;

  //   // 네 번째 버튼 눌렀을 때 첫 번째 마트 항목 삭제하는 이벤트 등록
  //   btn4.addEventListener("click", removeBuylist);

  //   // 첫 번째 마트 항목 삭제하는 함수
  //   function removeBuylist() {
  //     const buyUl = document.querySelector("#buy-list");
  //     const firstBuyLi = buyUl.firstElementChild;
  //     firstBuyLi?.remove();
  //   }
  //   /*----------------------------------------------------------- */

  //   // 다섯번째 버튼 누르면 첫번째 영화 항목 삭제(과제)

  //   // 다섯 번째 버튼 찾기
  //   const btn5 = btn4.nextElementSibling;

  //   // 다섯 번째 버튼 누르면 첫 번째 영화 항목 삭제하는 이벤트 등록
  //   btn5.addEventListener("click", removeMovieList);

  //   // 첫 번째 영화 항목 삭제하는 함수
  //   function removeMovieList() {
  //     const movieUl = document.querySelector("#movies");
  //     const firstMovieLi = movieUl.firstElementChild;
  //     firstMovieLi?.remove();
  //   }
  // })();

  // 김하연
  // (() => {
  //   const btn4 = btn3.nextElementSibling;
  //   const btn5 = btn4.nextElementSibling;

  //   // 세번째 버튼에 클릭 이벤트 추가(첫번째 항목 삭제)
  //   btn3.addEventListener('click', function () {
  //     const targetList = document.querySelectorAll('.list');
  //     for (let i = 0; i < targetList.length; i++){
  //       const target = targetList[i]; // <ul>
  //       const firstLi = target.firstElementChild; // <li>
  //       firstLi?.remove(); // 옵셔널 체이닝
  //     }
  //   });

  //   // 네번째 버튼 누르면 첫번째 마트 항목 삭제(과제)
  //   btn4.addEventListener('click', function () {
  //     const targetList = document.querySelectorAll('#buy-list');
  //     for (let i = 0; i < targetList.length; i++){
  //       const target = targetList[i]; // <ul>
  //       const firstLi = target.firstElementChild; // <li>
  //       firstLi?.remove(); // 옵셔널 체이닝
  //     }
  //   });


  //   // 다섯번째 버튼 누르면 첫번쨰 영화 항목 삭제(과졔)
  //   btn5.addEventListener('click', function () {
  //     const targetList = document.querySelectorAll('#movies');
  //     for (let i = 0; i < targetList.length; i++){
  //       const target = targetList[i]; // <ul>
  //       const firstLi = target.firstElementChild; // <li>
  //       firstLi?.remove(); // 옵셔널 체이닝
  //     }
  //   });

  // })();

  // 류혜진
  (() => {
    const btn4 = btn3.nextElementSibling;
    const btn5 = btn4.nextElementSibling;
    // 네번째 버튼 누르면 첫번째 마트 항목 삭제(과제)
    btn4.addEventListener('click', function () {
      const martList = document.querySelector('#buy-list');
      const listArray = Array.from(martList.children);
      const lastLi = listArray.shift();
      lastLi?.remove();

    })

    btn5.addEventListener('click', function () {
      const movieList = document.querySelector('#movies');
      const listArray = Array.from(movieList.children);
      const lastLi = listArray.shift();
      lastLi?.remove();
    })
  })();

});

