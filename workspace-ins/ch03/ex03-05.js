// ex03-03-02.js 복사

/*
* 클래스 정의와 상속

*/

// HighSchool 클래스 정의
class HighSchool{
  constructor(kor, eng){
    this.kor = kor;
    this.eng = eng;
  }
  sum(){
    return this.kor + this.eng;
  };
  avg(){
    return Math.round(this.sum() / 2);
  };
}

const h1 = new HighSchool(100, 91);
console.log('h1', h1.kor, h1.eng); // 100, 91
console.log('h1 총점', h1.sum()); // 191
console.log('h1 평균', h1.avg()); // 95.5


// College 클래스 작성
class College extends HighSchool{
  // constructor(kor, eng){
  //   super(kor, eng); // 부모(HighSchool)의 constructor 호출
  // }

  // constructor()를 생략할 경우 자동으로 추가
  // constructor(...args){
  //   super(...args);
  // }

  // College에 학점 계산 메서드 추가(grade 메서드 추가)
  grade(){
    const avg = this.avg();
    let level = 'F';

    // 평균 90점 이상 A
    // 평균 80점 이상 B
    // 평균 70점 이상 C
    // 평균 60점 이상 D
    // 평균 60점 미만 F
    if(avg >= 90){
      level = 'A';
    }else if(avg >= 80){
      level = 'B';
    }else if(avg >= 70){
      level = 'C';
    }else if(avg >= 60){
      level = 'D';
    }

    return level;
  };
}

const c1 = new College(80, 71);
console.log('c1', c1.kor, c1.eng); // 80, 71
console.log('c1 총점', c1.sum()); // 151
console.log('c1 평균', c1.avg()); // 75.5
console.log('c1 학점', c1.grade()); // C

