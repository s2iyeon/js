(() => {
  /*
  기본값 매개변수(Default parameters)
  */
  
  function sum(a, b){
    return a + b;
  }
  
  // b가 전달되지 않을 경우 b를 0으로 계산한다.
  function sum(a, b){
    if(b === undefined) {
      b = 0;
    }
    return a + b;
  }
  
  function sum(a, b){
    b = b || 0;
    return a + b;
  }
  
  function sum(a, b=0){ // b=undefined일 경우에만 기본값 매개변수가 사용됨
    return a + b;
  }
  
  console.log(sum(10, 20)); // 30
  console.log(sum(50)); // 60
  console.log(sum(50, undefined)); // 60
  console.log(sum(50, null)); // 50
  console.log(sum(50, '')); // 50
  console.log(sum(50, false)); // 50
  console.log(sum(50, 0)); // 50
  
  
})();
