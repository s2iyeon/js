// 비동기 함수 - async/await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-10.ts 복사

(()=>{
  function f1(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      console.log('3. f1 호출됨.');
      const delay = Math.floor(Math.random() * 1000 * 10);
      console.log(`4. 작업 시작...`);
      setTimeout(() => {
        // 시간 걸리는 작업 처리중
        // ...
        const result = '🗒️🗒️🗒️';
        console.log('8. f1 작업 완료. 소요시간:', delay);
        resolve(result);
      }, delay);

      console.log('5. f1 리턴됨.');
    });
  }
  
  async function test(){
    console.log('2. test 호출됨.');

    const result1 = await f1();
    console.log('9. f1 작업 완료 후에 실행.', result1.toUpperCase());

    const result2 = await f1();
    console.log('10. f1 작업 완료 후에 실행.', result2.toUpperCase());

    console.log('6. test 리턴됨');
  }

  // 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();