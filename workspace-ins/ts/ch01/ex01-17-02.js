/*
if-else를 이용하여 학생의 점수에 따라 학점을 계산하고 출력하는 프로그램을 작성합니다.
*/

// 점수는 0 ~ 100 점 사이의 정수
const score = 79;

// 학점을 저장하는 변수
let grade = '';

// A: 90점 이상 100점 이하
if (score >= 90 && score <= 100) {
  grade = 'A';
} else {
  // B: 80점 이상 90점 미만
  if (score >= 80) {
    grade = 'B';
  } else {
    // C: 70점 이상 80점 미만
    if (score >= 70) {
      grade = 'C';
    } else {
      // D: 60점 이상 70점 미만
      if (score >= 60) {
        grade = 'D';
      } else {
        // F: 60점 미만
        grade = 'F';
      }
    }
  }
}

// 소혜림, 박한섭
if (90 <= score && score <= 100) {
  grade = 'A';
} else {
  if (80 <= score && score < 90) {
    grade = 'B';
  } else {
    if (70 <= score && score < 80) {
      grade = 'C';
    } else {
      if (60 <= score && score < 70) {
        grade = 'D';
      } else {
        grade = 'F';
      }
    }
  }
}

// 한정아
if (score < 60) {
  grade = 'F';
} else { // 60 이상
  if (score < 70) {
    grade = 'D';
  } else { // 70 이상
    if (score < 80) {
      grade = 'C';
    } else { // 80 이상
      if (score < 90) {
        grade = 'B';
      } else { // 90 이상
        if (/* score >= 90 && */ score <= 100) {
          grade = 'A';
        } else {
          grade = '재확인 필요한 ';
        }
      }
    }
  }
}

// 이승규
const agradeRange = score >= 90 && score <= 100; // A: 90점 이상 100점 이하
const bgradeRange = score >= 80 && score < 90; // B: 80점 이상 90점 미만
const cgradeRange = score >= 70 && score < 80; // C: 70점 이상 80점 미만
const dgradeRange = score >= 60 && score < 70; // D: 60점 이상 70점 미만
const fgradeRange = score < 60;                 // F: 60점 미만

if (score != null && typeof score === 'number') {
    
    if (agradeRange) grade = 'A';
    if (bgradeRange) grade = 'B';
    if (cgradeRange) grade = 'C';
    if (dgradeRange) grade = 'D';
    if (fgradeRange) grade = 'F';

    console.log(`${score}점 : ${grade} 학점 입니다.`);
} else {
    console.log("score에 0 ~ 100 까지 숫자를 입력해주세요"); 
}

console.log(`${score}: ${grade}학점`); // 79: C학점


