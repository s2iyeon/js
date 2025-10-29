// echo 함수 - 제네릭 함수
// ex06-17.ts 복사
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(100));
    console.log(echo(true));
    console.log(echo(new Date()));
})();
export {};
