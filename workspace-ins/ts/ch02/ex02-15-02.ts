(() => {
  // ex02-15.js 복사
  
  /*
  * 함수 호출 방법 2 - 메서드
    - this는 메서드를 정의한 객체
    - call, apply 메서드를 사용하여 this를 지정할 수 있음
  */
  
  const getPingName = function(){
    console.log(this);
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
  console.log(getPingName.call(haru)); // this = haru
  
  // 함수 호출 방법 2 - 메서드
  console.log(haru.getName(), haru.getName.call(namu)); // this = haru, namu
  console.log(namu.getName(), namu.getName.apply(haru)); // this = namu, haru
})();
