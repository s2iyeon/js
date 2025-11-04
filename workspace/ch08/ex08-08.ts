// 일반 함수(동기 방식)

(()=>{
  function f1(){
    console.log('3. f1 호출됨.');

    console.log(`4. 작업중...`);

    console.log('5. f1 리턴됨.');
  }

  function test(){
    console.log('2. test 호출됨.');
    f1();
    console.log('6. test 리턴됨');
  }

  // 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();

