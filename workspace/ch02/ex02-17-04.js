// ex02-17.js 복사

/*
* 함수 내부의 this가 상위 Scope의 this를 참조해야 하지 못하고 함수 자신의 this를 참조하는 경우
  - 화살표 함수는 this가 생성되지 않음
*/

var count = 0; // window.count = 0
const myObj = {
  count: 0,
  visit: function(){
    // 방문자를 한명 증가시킨다.
    this.count++; // this = myObj

    const visit2 = () => {
      this.count++; // this = myObj
    };
    visit2();
  },
};

myObj.visit(); // this = myObj
myObj.visit(); // this = myObj
console.log('방문자수', myObj.count); // 4