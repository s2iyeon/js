// 함수에 타입 지정
(() => {
    function getCount(count) {
        return 'Count: ' + count.toFixed(2);
    }
    let result = getCount(20.3456);
    // getCount('hello');
    // const result2: number = getCount(30);
    // getCount();
    // getCount(10, 20);
    console.log(result);
})();
export {};
