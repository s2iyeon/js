/*
* Partial application(부분 적용 함수)
  - 기존 함수의 매개변수 중 일부를 미리 채워둔 상태의 함수
*/

const sum = function(n1, n2){
  return n1 + n2;
}
console.log(sum(100, 20));
console.log(sum(100, 40));
console.log(sum(100, 60));

const sum100 = sum.partial(100);

console.log(sum100(20)); // 120
console.log(sum100(40)); // 140
console.log(sum100(60)); // 160