// ex02-15.js 복사

/*
* 함수 호출 방법 2 - 메서드(화살표 함수)
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

console.log(this); // window

const getPingName = () => {
  // window.pingName
  // haru.pingName
  // namu.pingName
  return this.pingName;
};

const haru = new Object();
haru.pingName = '하루핑';
haru.age = 5;
haru.getName = getPingName;

const namu = {
  pingName: '나무핑',
  age: 8,
  getName: getPingName
};

// 함수 호출 방법 1 - 일반 함수로 호출
console.log(getPingName()); // this = window

// 함수 호출 방법 2 - 메서드
console.log(haru.age, haru.getName()); // this = haru
console.log(namu.age, namu.getName()); // this = namu