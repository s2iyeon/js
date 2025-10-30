// 유틸리티 타입 - Partial
(() => {
    const todo1 = {
        title: '할일1',
        content: '내용1',
        done: false,
    };
    // const todo2: OptionalTodo = {
    const todo2 = {
        title: '할일2',
    };
    console.log(todo1);
    console.log(todo2);
})();
export {};
