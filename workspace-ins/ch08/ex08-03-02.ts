// 에러 핸들링 - try...catch 문으로 에러 처리 2
// ex08-02.ts 복사

(()=>{
  function f1() {
    const fn = new Function('retrun 10;'); // SyntaxError
    fn();

    console.log('1. f1 함수 정상 종료');
  }

  function f2() {
    try{
      f1(); // SyntaxError
    }catch(err){
      console.error(err);
    }
    console.log('2. f2 함수 정상 종료');
  }

  f2();

  console.log('3. 프로그램 정상 종료');
})();
