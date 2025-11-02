(() => {
  /*
  증감 연산자 a++, a--, ++a, --a
  */
  
  var count = 0; // 0으로 초기화
  console.log(count); // 0
  
  // count의 값을 1 증가
  count = count + 1; // 1, 기본 덧샘
  count += 1; // 2, 복합 대입 연산자
  count++; // 3, 증가 연산자
  
  console.log(count); // 3
  
  console.log(count++); // 3, 후위형일 경우 선사후증
  console.log(++count); // 5, 전위형일 경우 선증후사
  console.log(count); // 5
  
  console.log(++count); // 6, 전위형일 경우 선증후사
  console.log(count++); // 6, 후위형일 경우 선사후증
  console.log(count); // 7
  
  var sum = count++ + 10; // 7 + 10 = 17
  console.log(sum); // 17
  
  sum = ++count + 10; // 9 + 10 = 19
  console.log(sum); // 19
})();
