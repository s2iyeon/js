// 인터페이스 상속
(() => {
    // 할일 등록에 사용
    const todo1 = {
        title: '할일1',
        content: '내용1',
    };
    // 할일 상세 조회에 사용
    const todo2 = {
        title: '할일2',
        content: '내용2',
        id: 5,
        done: true,
    };
    console.log(todo1);
    console.log(todo2);
})();
export {};
