// A: 90점 이상 100점 이하
// B: 80점 이상 90점 미만
// C: 70점 이상 80점 미만
// D: 60점 이상 70점 미만
// F: 60점 미만

const score = 179;
let grade = '';
if (score < 0 || score > 100) {
  console.log('score는 0 ~ 100으로 입력하세요.');
} else {
  if (score >= 90 && score <= 100) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  
  console.log(score + ': ' + grade + '학점');
  // 템플릿 리터럴
  console.log(`${score}: ${grade}학점`); // 79: C학점
}
