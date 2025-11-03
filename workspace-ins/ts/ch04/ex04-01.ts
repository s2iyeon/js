(() => {
  /*
  * 클로저란?
    - 실행이 끝난 외부 함수의 변수에 접근할 수 있는 내부 함수
    - 함수가 생성되는 시점을 기준으로 접근 가능한 변수는, 그 유효범위가 사라진 후에도 접근 가능해야 한다는 자바스크립트의 규칙을 지키기 위해 사용되는 매커니즘
    - 클로저로 인해 유효 범위가 사라진 변수와 함수를 접근할 수 있음
  */
  
  const topLevel = '최상위 변수';
  
  function outerFn(){ // 외부 함수
    const innerVal = 'outerFn의 지역변수'; // 자유 변수
    console.log(2, topLevel);
    console.log(3, innerVal);
  
    const innerFn = function(){ // 내부 함수
      console.log(4, innerVal); // outerFn의 지역변수
    };
  
    return innerFn;
  }
  
  console.log(1, topLevel);
  // console.log(4, innerVal); // 지역변수는 선언한 함수내에서만 접근 가능
  
  const inner = outerFn();
  
  inner(); // outerFn() 리턴된 후에 호출
  
})();
