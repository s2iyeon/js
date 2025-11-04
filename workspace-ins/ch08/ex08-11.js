// 비동기 함수 - async 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
(() => {
    function p1() {
        return new Promise((resolve, reject) => {
            resolve('p1 정상 완료.');
        });
    }
    async function a1() {
        return 'a1 정상 완료.';
    }
    function p2() {
        return new Promise((resolve, reject) => {
            reject('p2 실행 오류.');
        });
    }
    async function a2() {
        throw 'a2 실행 오류.';
    }
    function test() {
        p1().then(result => {
            console.log(result);
        }).then(a1).then(result => {
            console.log(result);
            // }).then(p2).then(result => {
            //   console.log(result);
        }).then(a2).then(result => {
            console.log(result);
        }).catch(reason => console.log(reason));
    }
    console.log('1. 작업 시작.');
    test();
    console.log('2. 작업 종료. 이 메세지가 p1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미');
})();
export {};
