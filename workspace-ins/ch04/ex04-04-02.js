/*
* Partial application - 로그 함수
*/

// 로그를 출력하는 일반 함수
function log(target, level, message){
  const now = new Date();
  console.log(`[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`);
}
log('console', 'WARN', 'warn message 1');
log('console', 'WARN', 'warn message 2');
log('file', 'ERROR', 'error message 1');
log('file', 'ERROR', 'error message 2');

// lodash 라이브러리 사용
const consoleWarn = _.partial(log, 'console', 'WARN');
consoleWarn('lodash warn message 1');
consoleWarn('lodash warn message 2');

// mylib.js
const fileError = log.partial('file', 'ERROR');
fileError('mylib error message 1');
fileError('mylib error message 2');

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
console.log('h1 평균', h1.avg()); // 95.5  <------이 코드에서  avg함수가  kor + eng  평균값을 Math.round 사용해서 반올림하라는거면 96 아닌가여?