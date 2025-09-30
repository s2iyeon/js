/*
국어, 영어, 수학 점수의 총점과 평균을 출력(new Object() 이용)
*/

// 1. 원시형으로 선언
const userName = '원시핑';
let kor = 100;
let eng = 90;
let math = 85;
let sum = kor + eng + math;
let avg = sum / 3;

console.log(userName, '총점:', sum);
console.log(userName, '평균:', avg);

// 2. 객체로 선언
const score = new Object();
score.name = '객체핑';
score.kor = 90;
score.eng = 80;
score.math = 75;
score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / 3;

console.log(score.name, '총점:', score.sum);
console.log(score.name, '평균:', score.avg);
