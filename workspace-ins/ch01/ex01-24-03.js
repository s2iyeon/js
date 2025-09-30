/*
국어, 영어, 수학 점수의 총점과 평균을 출력(JSON 이용)
*/

const score = {
  name: '객체핑',
  kor: 90,
  eng: 80,
  math: 75,
};

// TODO 반복적인 sum, avg 계산 작업을 줄이기 위한 방법은???
score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;
// Math.round(81.66666): 소수 첫째 자리에서 반올림
//  -> 82
// Math.round(81.66666 * 10**2) / 10**2 => Math.round(8166.666) / 10**2 => 8167 / 10**2 => 81.67
score.avg = Math.round((score.sum / 3) * 10**2) / 10**2; // 소수 세째 자리에서 반올림 처리

console.log(score.name, '총점:', score.sum);
console.log(score.name, '평균:', score.avg);

score.eng += 10;
score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;
score.avg = Math.round((score.sum / 3) * 10**2) / 10**2; // 소수 세째 자리에서 반올림 처리
console.log(score.name, '총점:', score.sum);
console.log(score.name, '평균:', score.avg);

score.math += 10;
score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;
// score.avg = Math.round((score.sum / 3) * 10**2) / 10**2; // 소수 세째 자리에서 반올림 처리
score.avg = Number((score.sum / 3).toFixed(2)); // 소수 세째 자리에서 반올림 처리
console.log(score.name, '총점:', score.sum);
console.log(score.name, '평균:', score.avg);
