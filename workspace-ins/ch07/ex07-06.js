// 내장 객체 - Object
(() => {
    const haru = { name: '하루', age: 5 };
    // keys, values, entries
    console.log(Object.keys(haru)); // ['name', 'age']
    console.log(Object.values(haru)); // ['하루', 5]
    console.log(Object.entries(haru)); // [['name', '하루'], ['age', 5]]
    // fromEntries
    const namu = Object.fromEntries([['name', '나무'], ['age', 8]]);
    console.log(namu); // { name: '나무', age: 8 }
    const haru2 = haru;
    haru.age++;
    console.log(haru.age, haru2.age); // 6 6
})();
export {};
