// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// ex08-10.ts 복사

(()=>{
  function f1(){
    return new Promise<string>((resolve, reject) => {
      console.log('3. f1 호출됨.');
      const delay = Math.floor(Math.random() * 1000 * 10);

      console.log(`4. 작업 시작...`);

      setTimeout(() => {
        // 시간 걸리는 작업 처리중
        // ...
        if(delay < 5000){
          resolve('8. f1의 작업 결과: ' + delay);
        }else{
          reject('8. f1의 작업 실패 사유: ' + delay);
        }
      }, delay);

      console.log('5. f1 리턴됨.');
    });
  }

  function test(){
    console.log('2. test 호출됨.');
    f1().then((result) => {
      console.log(result.toLocaleLowerCase());
    }).catch((reason) => {
      console.error(reason);
    }).finally(() => {
      console.log('9. 비동기 작업 완료.');
    });
    console.log('6. test 리턴됨');
  }

  // 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();