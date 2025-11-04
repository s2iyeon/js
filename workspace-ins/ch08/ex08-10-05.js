// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-10-02.ts 복사
(() => {
    function f1() {
        return new Promise((resolve, reject) => {
            console.log('3. f1 호출됨.');
            const delay = Math.floor(Math.random() * 1000 * 10);
            console.log(`4. 작업 시작...`);
            setTimeout(() => {
                // 시간 걸리는 작업 처리중
                // ...
                if (delay < 5000) {
                    resolve('8. f1의 작업 결과: ' + delay);
                }
                else {
                    reject('8. f1의 작업 실패 사유: ' + delay);
                }
            }, delay);
            console.log('5. f1 리턴됨.');
        });
    }
    function test() {
        console.log('2. test 호출됨.');
        // f1을 동시에 6번 호출해서 모두 성공한 경우에 결과를 출력
        // 모든 Promise가 fulfilled가 되면 성공, 하나라도 rejected가 되면 실패
        // 모든 작업이 성공하면 결과 배열 반환, 하나라도 실패하면 첫번째 실패한 이유 반환
        // Promise.all([f1(), f1(), f1(), f1(), f1(), f1()]).then(result => {
        //   console.log(result);
        //   console.log('🍀🍀🍀당신은 행운아🍀🍀🍀 로또 사세요.', generateLottoNumbers());
        // }).catch(reason => {
        //   console.error(reason);
        // });
        // 가장 먼저 fulfilled가 된 Promise의 결과 반환, 전부 rejected가 되면 실패
        // Promise.any([f1(), f1(), f1(), f1(), f1(), f1()]).then(result => {
        //   console.log(result);
        // }).catch(reason => {
        //   console.error(reason);
        // });
        // 가정 먼저 settled된 결과 반환(성공, 실패 상관없음)
        // Promise.race([f1(), f1(), f1(), f1(), f1(), f1()]).then(result => {
        //   console.log(result);
        // }).catch(reason => {
        //   console.error(reason);
        // });
        // 모든 Promise가 settled된 후 결과 배열 반환
        Promise.allSettled([f1(), f1(), f1(), f1(), f1(), f1()]).then(result => {
            console.log(result);
        });
        console.log('6. test 리턴됨');
    }
    // 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
    console.log('1. 작업 시작.');
    test();
    console.log('7. 작업 종료.');
    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const number = Math.floor(Math.random() * 45) + 1;
            numbers.add(number);
            console.log(numbers.size, '로또 번호', number);
        }
        // compare 함수가 음수를 반환하면 a, b 순서를 유지
        // 양수를 반환하면 a, b 순서를 바꿈
        return [...numbers].sort((a, b) => a - b);
    }
})();
export {};
