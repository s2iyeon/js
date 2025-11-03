// 에러 핸들링 - 에러 발생으로 비정상 종료
// ex08-01.ts 복사

(()=>{
  function f1() {
    // const obj = null as any;
    const obj = undefined as any;
    // obj.fn(); // TypeError

    // const fn = new Function('return x;'); // ReferenceError
    const fn = new Function('retrun 10;'); // SyntaxError
    fn();

    console.log('1. f1 함수 정상 종료');
  }

  function f2() {
    f1();
    console.log('2. f2 함수 정상 종료');
  }

  f2();

  console.log('3. 프로그램 정상 종료');
})();
