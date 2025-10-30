// 유틸리티 타입 - Readonly
(() => {
    const todo1 = {
        title: '할일1',
        content: '내용1',
        done: false,
    };
    todo1.content = '수정된 내용1';
    // const todo2: ReadonlyTodo = {
    const todo2 = {
        title: '할일2',
        content: '내용2',
        done: true,
    };
    // todo2.content = '수정된 내용1';
    console.log(todo1);
    console.log(todo2);
})();
export {};
