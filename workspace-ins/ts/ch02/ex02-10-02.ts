(() => {
  /*
  * 함수를 만드는 방법 4 - 화살표 함수
    - 함수 표현식의 대안으로 간결하게 함수 정의
    - 익명 함수로만 정의 가능
    - 실행할 코드가 하나만 있다면 함수 본문의 중괄호 생략 가능
    - 함수 본문의 중괄호가 생략될 경우 함수의 코드가 자동으로 리턴값으로 사용됨
    - 매개 변수가 하나만 있다면 매개변수의 괄호 생략 가능
  */
  
  let arr = [10, 20, 30];
  let result = [];
  
  // 각 요소의 제곱값으로 구성된 새로운 배열 생성(for문)
  for(let i=0; i<arr.length; i++){
    result.push(arr[i] * arr[i]); // [100, 400, 900]
  }
  
  // Array.prototype.forEach()
  // 배열의 각 요소를 순회하면서 콜백 함수를 실행
  result = [];
  arr.forEach(function(elem, i){ // (10, 0), (20, 1), (30, 2)
    result.push(elem * elem);
  });
  
  // Array.prototype.map()
  // 배열의 각 요소를 순회하면서 콜백 함수를 실행하고 콜백 함수의 리턴값을 모아서 새로운 배열로 반환
  result = arr.map(function(elem, i){
    return elem * elem; // [100, 400, 900]
  });
  
  // ES6 arrow function
  result = arr.map(elem => elem * elem);
  
  console.log(arr, result);
})();
