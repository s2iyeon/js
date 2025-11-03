/*
* 함수를 만드는 방법 3 - Function 생성자 함수
  - 함수를 생성해서 반환
*/

// Function 생성자 함수 이용
const add = new Function('x', 'y', 'const result = x + y; return x+y;');

console.log(add(10, 20));