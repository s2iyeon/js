// 인터페이스 다중 상속
(() => {
    const todo1 = {
        title: '등록용 할일',
        content: '내용',
    };
    const todo2 = {
        id: 1,
        title: '목록용 할일',
        done: true,
    };
    const todo3 = {
        id: 2,
        title: '상세 조회용',
        content: '내용',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    console.log(todo1, todo2, todo3);
    console.log(todo3.createdAt);
})();
export {};
