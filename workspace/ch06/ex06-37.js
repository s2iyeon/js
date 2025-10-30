// 맵드 타입 - 유틸리티 타입 구현 원리
(() => {
    const todo1 = {
        title: '제목1',
    };
    const todo2 = {
        title: '제목2',
    };
    const todo3 = {
        title: '제목3',
    };
    // todo3.title = '수정'; // 컴파일 에러
    const todo4 = {
        title: '제목4',
    };
    console.log(todo1, todo2);
})();
export {};
