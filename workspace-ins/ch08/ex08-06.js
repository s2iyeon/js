// 일반 함수(동기 방식)

function test(a, a) {
  console.log(this); // window(global)
  x = 10; // window(global).x = 10;
  console.log(x); // 10
  console.log(a + a); // 40
}
test(10, 20);