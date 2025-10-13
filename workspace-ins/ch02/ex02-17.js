/*
* 함수 내부의 this가 상위 Scope의 this를 참조해야 하지 못하고 함수 자신의 this를 참조하는 경우
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function(){
    // 방문자를 한명 증가시킨다.
    
  },
};

myObj.visit();
myObj.visit();
console.log('방문자수', myObj.count);