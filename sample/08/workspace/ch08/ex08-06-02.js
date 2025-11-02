// 일반 함수(동기 방식)
"use strict";
function test(a, a) {
  console.log(this); // window
  x = 10; // window.x = 10;
  console.log(x); // 10
  console.log(a + a); // 40
}
test(10, 20);
