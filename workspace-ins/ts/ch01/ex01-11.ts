(() => {
  /*
  비교 연산자 >, >=, <, <=, ==, !=, ===, !==
  */
  
  var num1 = 5;
  var num2 = 10;
  var num3 = 5;
  var s1 = '5';
  
  console.log(num1 > num2); // false
  console.log(num1 < num2); // true
  console.log(num1 <= num3); // true
  console.log(num1 >= num3); // true
  
  console.log(num1 === num3); // true
  console.log(num1 == num3); // true
  console.log(num1 === s1); // false
  console.log(num1 == s1); // true, 5 === 5
  
  // 문자열 비교: 사전순으로 비교(각 문자를 첫글자부터 순차적으로 비교)
  console.log('ch05' < 'ch01'); // false
  console.log('ch05' > 'ch01'); // true
  
  console.log('ch12' > 'ch3'); // false
  console.log('ch12' > 'ch03'); // true
  
  
})();
