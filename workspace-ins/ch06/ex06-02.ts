// 주요 타입

(()=>{
  let str: string = 'hello';
  let age: number = 5;
  let done: boolean = true;
  // done = 'false'; // 컴파일 에러

  let nullVal: null = null;
  let emptyVal: undefined;

  let todo: object = { title: 'TypeScript 공부', done: false };
  let todoList: Array<string> = ['JavaScript 복습', 'TypeScript 공부']; // 문자열로 구성된 배열
  let todoList2: string[] = ['JavaScript 복습', 'TypeScript 공부']; // 문자열로 구성된 배열

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 배열
  let haru: [string, number] = ['하루', 5];
  let namu: [string, number] = ['나무', 8];

  // tsc가 타입 체크를 하지 않음
  let userName: any = '오이영';
  userName = 520;
  // console.log(userName.toUpperCase());

  // unknown: 값을 저장할 때는 타입을 체크하지 않지만 사용할 때는 타입을 체크
  let userName2: unknown = '이일구';
  userName2 = 219;
  if(typeof userName2 === 'string'){ // 타입 가드
    console.log(userName2.toUpperCase());
  }
})();