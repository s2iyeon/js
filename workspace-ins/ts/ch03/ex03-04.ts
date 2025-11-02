(() => {
  /*
  * 클래스 정의
  
  */
  
  // HighSchool 생성자 함수
  // function HighSchool(kor, eng){
  //   this.kor = kor;
  //   this.eng = eng;
  // }
  // HighSchool.prototype.sum = function(){
  //   return this.kor + this.eng;
  // };
  // HighSchool.prototype.avg = function(){
  //   return this.sum() / 2;
  // };
  
  // HighSchool 클래스
  class HighSchool{
    constructor(kor, eng){
      this.kor = kor;
      this.eng = eng;
    }
    sum(){
      return this.kor + this.eng;
    }
    avg(){
      return this.sum() / 2;
    }
  }
  
  const h1 = new HighSchool(100, 90);
  console.log('h1', h1.kor, h1.eng); // 100 90
  console.log('h1 총점', h1.sum()); // 190
  console.log('h1 평균', h1.avg()); // 95
})();
