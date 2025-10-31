// 내장 객체 Array - forEach(), map()
(() => {
    const arr = [10, 20, 30];
    // arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(for문)
    let newArr = [];
    for (let elem of arr) {
        newArr.push(elem * elem);
    }
    console.log('for문', newArr);
    // arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(forEach)
    newArr = [];
    arr.forEach(elem => {
        newArr.push(elem * elem);
    });
    console.log('forEach', newArr); // [100, 400, 900]
    // arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(map)
    newArr = arr.map(elem => {
        return elem * elem;
    });
    newArr = arr.map(elem => elem * elem);
    console.log('map', newArr); // [100, 400, 900]
})();
export {};
