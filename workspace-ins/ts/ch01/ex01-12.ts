(() => {
  /*
  동등 연산자와 일치 연산자 차이
  */
  
  console.log(10 === '10'); // false
  console.log(10 == '10'); // true, 10 === 10
  
  console.log(null === undefined); // false
  console.log(null == undefined); // true
  
  console.log('1' === true); // false
  console.log('1' == true); // true, 1 === 1
  
  
})();
