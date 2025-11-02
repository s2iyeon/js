(() => {
  /*
  나머지 매개변수(Rest parameters)
  */
  
  // 모든 매개변수의 합계를 출력
  // 인자값이 모자랄 경우 0으로 처리
  // 인자값이 3개 이상일 경우에도 합계에 반영
  function sum(n1=0, n2=0, ...args){
    console.log(n1, n2, args);
    let result = 0;
    result = n1 + n2;
  
    for(let arg of args){
      result += arg;
    }
    console.log(result);
  }
  
  sum();
  sum(1);
  sum(1, 2);
  sum(3, 4, 5);
  sum(6, 7, 8, 9, 534,5,36,45657,56,845,56,34,534,6,45,7,456,345,6,456,345,3,43,45,56,4,564,56,345,34,5,3456,4356);
  
  
  
})();
