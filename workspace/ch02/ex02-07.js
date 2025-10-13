/*
* 함수를 만드는 방법 2 - 함수 표현식
  - 함수 정의를 변수에 할당
  - 변수명을 함수명처럼 사용
  - 변수에 기명함수를 지정
    - 함수명을 통한 접근은 해당 함수 내부에서만 사용 가능 (재귀 함수)
*/

// 함수 표현식(기명 함수)
const add = function sum(x, y){
  const result = x + y;
  return result;
};

console.log(add(10, 20));
// console.log(sum(10, 20));