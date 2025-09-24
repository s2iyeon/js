/*
삼항 연산자 ?
*/

// 짝수/홀수 판별
let num = 15;
let result = '모름';

// num을 2로 나눈 나머지가 0이면 result에는 '짝수'를 1이면 '홀수'를 저장
result = num % 2 === 0 ? '짝수' : '홀수';

console.log(`${num}: ${result}입니다.`);