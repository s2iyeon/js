(() => {
  // ex02-15.js 복사
  
  /*
  * 생성자 함수 호출(new 연산자 사용)
    - 1. 빈 객체를 참조하는 this 생성
    - 2. this를 생성자 함수에 전달
    - 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
  */
  
  // 객체를 생성해서 반환하는 함수
  // 생성자 함수를 통해서 생성된 객체를 인스턴스라고 부름
  function Ping(pingName, age){
    this.pingName = pingName;
    this.age = age;
    this.getName = function(){
      return this.pingName;
    };
  }
  
  const haru = new Ping('하루핑', 5);
  const namu = new Ping('나무핑', 8);
  const bom = new Ping('봄핑', 11);
  
  console.log(haru.age, haru.getName()); // this = haru
  console.log(namu.age, namu.getName()); // this = namu
  console.log(bom.age, bom.getName()); // this = bom
})();
