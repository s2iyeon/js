// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(100));
    // console.log(echo<boolean>(true));
    // console.log(echo<Date>(new Date()));
    const str = echo('hello');
    const num = echo(123.456);
    console.log(str.toUpperCase(), num.toFixed(2));
    function echo2(msg) {
        console.log(msg.length);
    }
    echo2('haru');
    echo2([1, 2, 3]);
    const naverHire = {
        length: 50000,
        domain: '프론트엔드',
        techStack: 'JS, TS, React, Next.js'
    };
    echo2(naverHire);
})();
export {};
