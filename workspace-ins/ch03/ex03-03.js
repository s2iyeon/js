/*
* 프로토타입 체인을 이용한 상속 기능 구현

* 출력값이 주석과 일치하도록 HighSchool과 College를 작성하세요.
  - sum, avg 메서드는 prototype에 작성하세요.
*/

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng){

}

const h1 = new HighSchool(100, 91);
console.log('h1', h1.kor, h1.eng); // 100, 91
console.log('h1 총점', h1.sum()); // 191
console.log('h1 평균', h1.avg()); // 95.5

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng){

}

// College가 HighSchool을 상속 받는다.(sum, avg 메서드 상속)


// College에 학점 계산 메서드 추가(grade 메서드 추가)


const c1 = new College(80, 71);
console.log('c1', c1.kor, c1.eng); // 80, 71
console.log('c1 총점', c1.sum()); // 151
console.log('c1 평균', c1.avg()); // 75.5
console.log('c1 학점', c1.grade()); // C
