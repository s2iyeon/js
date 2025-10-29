// 변수의 타입 추론
(() => {
    let name = '오이영'; // string으로 타입 추론
    // name = 520; // 에러
    let age = 20; // number 타입으로 추론
    let name2; // 선언만 할 경우 any로 추론
    // let name2: string; // 선언만 할 경우 any로 추론하지 않도록 명시적으로 타입 지정
    name2 = '이일구';
    name2 = 219;
    console.log(name, age, name2);
})();
export {};
