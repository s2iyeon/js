(() => {
  // ex02-17.js 복사
  
  /*
  * 함수 내부의 this가 상위 Scope의 this를 참조해야 하지 못하고 함수 자신의 this를 참조하는 경우
    - Function.prototype.bind는 this를 지정하는 기능 뿐만 아니라 커링을 구현한 함수이기 때문에 인자값도 미리 전달이 가능
  */
  
  var count = 0; // window.count = 0
  const myObj = {
    count: 0,
    visit: function(){
      // 방문자를 한명 증가시킨다.
      this.count++; // this = myObj
  
      const visitN = function(n){
        this.count += n; // this = window
      };
      
      visitN.call(this, 2); // this = window
      visitN.call(this, 2); // this = window
  
      const visit3 = visitN.bind(this, 3);
      visit3();
      visit3();
    },
  };
  
  myObj.visit(); // this = myObj
  myObj.visit(); // this = myObj
  console.log('방문자수', myObj.count); // 2
})();
