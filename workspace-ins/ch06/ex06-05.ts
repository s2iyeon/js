// 유니언 타입(union type)

(()=>{
  // 문자열을 받아서 콘솔에 출력하는 함수
  function logString(msg: string) {
    console.log(msg);
  }
  // 숫자를 받아서 콘솔에 출력하는 함수
  function logNumber(msg: number) {
    console.log(msg);
  }
  // boolean을 받아서 콘솔에 출력하는 함수
  function logBoolean(msg: boolean) {
    console.log(msg);
  }

  logString('hello');
  logNumber(100);
  logBoolean(true);

  // 유니언 타입
  // | 연산자로 여러 타입을 지정
  function log(msg: string | number | boolean){
    console.log(msg);
  }

  log('hello');
  log(100);
  log(false);

})();