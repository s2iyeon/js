// ex03-05.js 복사

/*
* 클래스 정의와 상속(private class fields)

*/

// HighSchool 클래스 정의
class HighSchool{
  #kor = 0;
  #eng = 0;
  constructor(kor, eng){
    this.#kor = kor;
    this.#eng = eng;
  }
  #sum(){
    return this.#kor + this.#eng;
  };
  avg(){
    return Math.round(this.#sum() / 2);
  };
}

const h1 = new HighSchool(100, 91);
// h1.eng += 5;
// console.log('h1', h1.kor, h1.eng); // 100, 91

// console.log('h1 평균', h1.sum() / 2); // 95.5

console.log('h1 평균', h1.avg()); // 95.5