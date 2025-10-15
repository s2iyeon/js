/*
* 생성자 함수 활용
*/

/**
 * 국어, 영어, 수학 점수를 받아서 sum, avg 메서드로 총점과 평균을 계산하는 객체를 생성해서 반환
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 * @param {number} math 수학 점수
 * @returns {Object} 총점과 평균을 계산할 수 있는 객체
 */
const Score = function(kor, eng, math){ // 매개변수는 지역변수
  this.kor = kor;
  this.eng = eng;
  this.math = math;
  this.sum = function(){
    // sum은 Score 함수가 리턴 된 후에 호출(실행)
    // kor, eng, math는 지역변수이기 때문에 함수가 리턴된 후에는 삭제됨
    // TODO Closure 단원. 실행이 완료된 함수의 지역변수가 참조 가능한 상태로 유지되는 현상
    // return kor + eng + math; // baro 100 + 90 + 80
    return this.kor + this.eng + this.math;
  };
  this.avg = function(){
    return this.sum() / 3;
  };
};

// 바로핑은 점수가 각각 100, 90, 80 이다.
// 라라핑은 점수가 각각 90, 80, 60 이다.
let baro = new Score(100, 90, 80);
let rara = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하세요.
console.log(baro.sum(), baro.avg()); // 270 90
console.log(rara.sum(), rara.avg()); // 230 76.666666

// 두 사람의 수학점수를 10점 올림
baro.math += 10;
rara.math += 10;

// 두 사람의 총점과 평균을 출력하세요.
console.log(baro.sum(), baro.avg()); // 280 93.333333
console.log(rara.sum(), rara.avg()); // 240 80

console.log(baro);
console.log(rara);