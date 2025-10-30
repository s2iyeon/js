// FIXME: 타입 단언 - JS로 작성된 코드를 TS로 리팩토링. 로직은 수정하지 말고 타입만 추가 정의
// ex06-23.js 복사
(() => {
    const todo1 = {
        title: 'Ajax',
        content: '서버와 통신하는 Ajax 배우기'
    };
    const todo2 = {
        title: '기타',
        content: 'try-catch로 에러 처리 배우기'
    };
    const todo3 = {};
    todo3.title = '내장 함수';
    const todo4 = { title: '내장 객체' };
    todo4.content = 'Date, String, Array 등의 내장 객체 배우기';
    // todo4.content가 없으면 런타임 에러
    console.log(todo1, todo2, todo3, todo4.content.toUpperCase());
})();
export {};
