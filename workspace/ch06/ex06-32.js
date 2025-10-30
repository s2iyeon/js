// 유틸리티 타입 - Pick
(() => {
    // { title: string, content: string } 타입으로 지정
    const todo = {
        title: '제목1',
        content: '내용1'
    };
    console.log(todo.title, todo.content); // 제목1 내용1
    // console.log(todo.done); // 컴파일 에러
})();
export {};
