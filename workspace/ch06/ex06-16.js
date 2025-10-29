// 인터페이스 선언 병합, 인덱스 시그니처
// ex06-15.ts 복사
(() => {
    const todo = {
        id: 1,
        title: '인터페이스 병합',
        content: '인터페이스 병합을 해봐요',
        done: true,
    };
    const todo2 = {
        id: 1,
        title: '인터페이스 병합',
        content: '인터페이스 병합을 해봐요',
        done: true,
    };
    console.log(todo, todo2);
    const haru = {
        name: '하루',
        email: 'haru@gmail.com',
        phone: '01022223333',
    };
    const namu = {
        name: '나무',
        email: 'namu@gmail.com',
        address: '경기도 김포시',
        job: '강아지',
        gender: '여자'
    };
    console.log(haru, namu);
})();
export {};
