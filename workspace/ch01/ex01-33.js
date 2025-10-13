/*
매개변수과 반환값이 있는 함수와 없는 함수
*/


/**
 * 10과 100의 합계를 출력하는 함수
 */
function add(){
  const n1 = 10;
  const n2 = 100;
  console.log(`${n1} + ${n2} = ${n1+n2}`);
}
add(); // 10 + 100 = 110
add(); // 10 + 100 = 110

/**
 * 전달받은 숫자와 100의 합계를 출력하는 함수
 */
function add100(n1){
  const n2 = 100;
  console.log(`${n1} + ${n2} = ${n1+n2}`);
}
add100(20); // 20 + 100 = 120
add100(30); // 30 + 100 = 130

/**
 * 전달받은 두 숫자의 합계를 출력하는 함수
 */
function sum(n1, n2){
  console.log(`${n1} + ${n2} = ${n1+n2}`);
}
sum(40, 50); // 40 + 50 = 90
const returnSum = sum(50, 60); // 50 + 60 = 110
console.log(returnSum); // undefined

/**
 * 전달받은 두 숫자의 합계를 반환하는 함수
 */
function getSum(n1, n2){
  return `${n1} + ${n2} = ${n1+n2}`;
}
const returnVal = getSum(60, 70); // '60 + 70 = 130' 반환
console.log(returnVal);
console.log(getSum(70, 80)); // '70 + 80 = 150'
