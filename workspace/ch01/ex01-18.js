/*
if-else if문
*/

// 나이에 따른 성인 미성년자 판별

// num이 양수이면 '양수' 출력
// num이 음수이면 '음수' 출력
// num이 0이면 '영' 출력
const num = 5;
if (num > 0) {
  console.log('양수');
} else if (num < 0) {
  console.log('음수');
} else {
  console.log('영');
}

const num2 = 16;

// num2가 2의 배수이면 '2의 배수'를 출력하고
// 3의 배수이면 '3의 배수' 출력하고 그렇지 않으면 '2와 3의 배수 아님' 출력
if (num2 % 2 === 0) {
  console.log('2의 배수');
} else if (num2 % 3 === 0) {
  console.log('3의 배수');
} else {
  console.log('2나 3의 배수 아님');
}