// 내장 객체 Array - some(), every()
(() => {
    // const arr = [1, 2, 3];
    // const arr = [2, 4, 6];
    const arr = [1, 3, 5];
    // 2의 배수가 하나라도 있나?
    const hasEven = arr.some(elem => elem % 2 === 0); // true
    // 전부 2의 배수인가?
    const allEven = arr.every(elem => elem % 2 === 0); // false
    console.log(hasEven, allEven);
})();
export {};
