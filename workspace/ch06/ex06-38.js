// 고급 타입 연산자 - keyof
(() => {
    // 지정한 객체의 속성값을 반환
    // function getProperty(obj: Todo, key: 'id' | 'title' | 'content' | 'done') {
    function getProperty(obj, key) {
        return obj[key];
    }
    const todo = {
        id: '1',
        title: '제목1',
        content: '내용1',
        done: false,
    };
    console.log(getProperty(todo, 'title')); // 제목1
    console.log(getProperty(todo, 'content')); // 내용1
    console.log(getProperty(todo, 'done')); // false
})();
export {};
