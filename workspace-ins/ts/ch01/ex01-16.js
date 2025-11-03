/*
if문
*/

// const: 상수 선언, 초기화 필수, 초기화 후에 다른 값을 할당할 수 없음
const age = 25;

// age가 20 이상이면 '성인' 출력
if (age >= 20) {
  console.log('성인');
}

// age가 20 미만이면 '미성년자' 출력
if (age < 20) {
  console.log('미성년자');
}

const num = -5;

// num이 양수이면 '양수' 출력
if (num > 0) {
  console.log('양수');
}
// num이 음수이면 '음수' 출력
if (num < 0) {
  console.log('음수');
}
// num이 0이면 '영' 출력
if (num === 0) {
  console.log('영');
}

const password = '1234';

// password가 '1234'이면 '로그인 성공' 출력
if (password === '1234') {
  console.log('로그인 성공');
}
// password가 '1234'가 아니면 '로그인 실패' 출력
if (password !== '1234') {
  console.log('로그인 실패');
}

const num2 = 15;

// num2가 홀수이면 '홀수' 출력
if (num2 % 2 !== 0) {
  console.log('홀수');
}
// num2가 짝수이면 '짝수' 출력
if (num2 % 2 === 0) {
  console.log('짝수');
}

const num3 = 12;

// num3가 3의 배수이면 '3의 배수' 출력
if (num3 % 3 === 0) {
  console.log('3의 배수');
}
// num3가 3의 배수가 아니면 '3의 배수 아님' 출력
if (num3 % 3 !== 0) {
  console.log('3의 배수 아님');
}

