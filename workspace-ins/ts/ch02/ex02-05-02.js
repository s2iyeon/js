// ex02-05.js 복사

/*
* 함수를 만드는 방법 1 - 함수 선언문
  - function 키워드로 시작하는 함수 정의
*/

// 함수 선언문
function add(x, y){
  console.log(this);
  const result = x + y;
  return result;
}

console.log(add(10, 20)); // 30, this = window
console.log(add.call({pingName: '하루핑'}, 10, 20)); // 30, this = {pingName: '하루핑'}
console.log(add.apply({pingName: '나무핑'}, [10, 20])); // 30, this = {pingName: '나무핑'}