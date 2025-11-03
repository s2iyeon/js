/*
국어, 영어, 수학 점수의 총점과 평균을 출력(JSON 이용)
*/

// 2. 객체로 선언
// const score = new Object();
// score.name = '객체핑';
// score.kor = 90;
// score.eng = 80;
// score.math = 75;

const score = {
  name: '객체핑',
  kor: 90,
  eng: 80,
  math: 75,
};

score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / 3;

console.log(score.name, '총점:', score.sum);
console.log(score.name, '평균:', score.avg);