// 주요 타입
(() => {
    let str = 'hello';
    let age = 5;
    let done = true;
    // done = 'false'; // 컴파일 에러
    let nullVal = null;
    let emptyVal;
    let todo = { title: 'TypeScript 공부', done: false };
    let todoList = ['JavaScript 복습', 'TypeScript 공부']; // 문자열로 구성된 배열
    let todoList2 = ['JavaScript 복습', 'TypeScript 공부']; // 문자열로 구성된 배열
    // tuple: 길이가 고정되고 각 요소의 타입이 정의된 배열
    let haru = ['하루', 5];
    let namu = ['나무', 8];
    // tsc가 타입 체크를 하지 않음
    let userName = '오이영';
    userName = 520;
    // console.log(userName.toUpperCase());
    // unknown: 값을 저장할 때는 타입을 체크하지 않지만 사용할 때는 타입을 체크
    let userName2 = '이일구';
    userName2 = 219;
    if (typeof userName2 === 'string') { // 타입 가드
        console.log(userName2.toUpperCase());
    }
})();
export {};
