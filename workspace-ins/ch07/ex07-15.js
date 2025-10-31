// 내장 객체 Array - indexOf(), lastIndexOf()
(() => {
    const arr = [1, 3, 5, 8, 9, 3, 4, 5];
    console.log('첫번째 3의 위치', arr.indexOf(3)); // 1
    console.log('마지막 3의 위치', arr.lastIndexOf(3)); // 5
    console.log('첫번째 2의 위치', arr.indexOf(2)); // -1
    console.log('마지막 2의 위치', arr.lastIndexOf(2)); // -1
    // 배열에서 8을 찾아서 제거(8은 유일한 값으로 전제)
    // 김지유
    // const p = arr.indexOf(8);
    // if (arr.includes(8)) {
    //   arr.splice(p, 1);
    // }
    // 한정아
    // arr.splice(arr.indexOf(8), 1);
    // 류혜진
    // let ls: number[] = [];
    // for (let i = 0; i < arr.length; i++){
    //   if (arr[i] === 8) {
    //     ls = arr.splice(i, 1);
    //     break;
    //   }
    // }
    // console.log(arr); // [1, 3, 5, 9, 3, 4, 5]
    // 원본을 복사한 후 복사본을 이용해서 8을 제거하세요.
    // 김지유
    const arr2 = arr.slice();
    arr2.splice(arr.indexOf(8), 1);
    // 한정아
    // const arr2 = [ ...arr ];
    // arr2.splice(arr2.indexOf(8), 1);
    console.log(arr, arr2); // [1, 3, 5, 8, 9, 3, 4, 5] [1, 3, 5, 9, 3, 4, 5]
})();
export {};
