(() => {
  /*
  매개변수를 가진 함수
  */
  
  /**
   * 이름을 전달 받아서 'Hello'와 함께 인사말을 출력하는 함수
   * @param {string} name - 사용자 이름
   */
  function sayHello(name){ // var name;
    console.log('Hello', name);
  }
  
  sayHello();
  sayHello('하츄핑');
  sayHello('초롱핑');
  sayHello('조아핑');
})();
