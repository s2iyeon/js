/*
* 함수 호출 방법 1 - 일반 함수로 호출
  - this는 window 객체
*/

// 선언문
function f1(){
  // console.log(this);
  window.console.log('window.');
  this.console.log('this.');
  console.log('hello');
};

// 표현식
const f2 = function(){
  console.log(this);
};

// 일반 함수로 호출
f1();
f2();
