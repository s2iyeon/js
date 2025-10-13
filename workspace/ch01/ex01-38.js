/*
전역 변수와 지역 변수
*/

var age = 20; // 전역 변수
window.year = 7; // 전역 변수 window. 생략 가능

function getAge(year) { // 지역 변수
  var age = 30; // 지역 변수
  window.myAge = age + year; // 전역 변수
  window.console.log(myAge);
}

window.getAge(5);
window.console.log(age, year);



