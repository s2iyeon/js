(() => {
  /*
  * 함수를 만드는 방법 2 - 함수 표현식
    - 함수 정의를 변수에 할당
    - 변수명을 함수명처럼 사용
    - 변수에 익명함수를 지정
  */
  
  // 함수 표현식(익명 함수)
  const add = function(x, y){
    const result = x + y;
    return result;
  };
  
  console.log(add(10, 20));
})();
