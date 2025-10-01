/*
Call by Value와 Call by Reference 차이
*/

/**
 * data1의 값을 10 증가시킨다.
 * data2의 0번째 요소의 값을 10 증가시킨다.
 * data1, data2의 0번째 요소의 값을 출력한다.
 * @param {number} data1 
 * @param {Array} data2 
 */
function add10(data1, data2){
  data1 += 10;
  data2[0] += 10;
  console.log('함수 내부', data1, data2[0]); // 90 90
}

let d1 = 80; // number - 원시 타입
let d2 = [ 80 ]; // array(object) - 참조 타입

console.log('함수 호출 이전', d1, d2[0]); // 80 80

add10(d1, d2);

console.log('함수 호출 이후', d1, d2[0]); // 80 90

