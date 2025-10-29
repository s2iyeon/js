// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(()=>{
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  // console.log(echo<boolean>(true));
  // console.log(echo<Date>(new Date()));

  const str = echo<string>('hello');
  const num = echo<number>(123.456);

  console.log(str.toUpperCase(), num.toFixed(2));

  function echo2<T extends { length: number }>(msg: T): void {
    console.log(msg.length);
  }

  echo2<string>('haru');
  echo2<number[]>([1, 2, 3]);

  interface Hire {
    length: number;
    domain: string;
    techStack: string;
  }

  const naverHire: Hire = {
    length: 50000,
    domain: '프론트엔드',
    techStack: 'JS, TS, React, Next.js'
  };

  echo2<Hire>(naverHire);
})();
