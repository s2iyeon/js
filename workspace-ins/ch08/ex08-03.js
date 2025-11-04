// 에러 핸들링 - try...catch 문으로 에러 처리 1
// ex08-02.ts 복사
(() => {
    function f1() {
        console.log('1. f1 호출');
        try {
            const fn = new Function('retsdfsdfn 10;'); // SyntaxError
            console.log('2-A. fn 실행', fn());
        }
        catch (err) {
            if (err instanceof Error) { // 타입 가드
                console.error('2-B.', err.message);
            }
        }
        finally {
            console.log('3. try...catch 문이 실행 완료된 후 실행');
        }
        console.log('4. f1 함수 정상 종료');
    }
    function f2() {
        f1();
        console.log('5. f2 함수 정상 종료');
    }
    f2();
    console.log('6. 프로그램 정상 종료');
})();
export {};
