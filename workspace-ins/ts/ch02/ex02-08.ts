(() => {
  /*
  * 함수를 만드는 방법 2 - 함수 표현식
    - 함수 정의를 변수에 할당
    - 변수명을 함수명처럼 사용
    - 변수에 기명함수를 지정
      - 함수명을 통한 접근은 해당 함수 내부에서만 사용 가능 (재귀 함수)
      - 기명함수 사용예
  */
  
  // 전달받은 숫자의 팩토리얼 값을 구해서 반환하는 함수
  /*
    5! = 5 * 4 * 3 * 2 * 1
  */
  let f = function factorial(n){
    let result = 1;
    for(let i=n; i>0; i--){ // i=5,4,3,2,1
      result *= i; // 5 * 4 * 3 * 2 * 1
    }
    return result;
  };
  
  /*
    5!
    = 5 * 4 * 3 * 2 * 1
    = 5 * 4!
    = 5 * 4 * 3!
    = 5 * 4 * 3 * 2!
    = 5 * 4 * 3 * 2 * 1!
  */
  f = function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1);
  };
  
  console.log(f(5));
  // console.log(factorial(5));
  
  // 로또 1등 당첨 확률은?
  // 45!/((45-6)!*6!)
  const result = f(45)/(f(45-6)*f(6));
  console.log('로또 1등 당첨 확률은 1/' + result);
  
})();
