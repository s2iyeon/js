// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(()=>{
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));
  console.log(echo<Date>(new Date()));
})();
