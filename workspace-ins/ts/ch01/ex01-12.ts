(() => {
  /*
  동등 연산자와 일치 연산자 차이
  */
  
  // @ts-ignore
  console.log(10 === '10'); // false
  // @ts-ignore
  console.log(10 == '10'); // true, 10 === 10
  
  console.log(null === undefined); // false
  console.log(null == undefined); // true
  
  // @ts-ignore
  console.log('1' === true); // false
  // @ts-ignore
  console.log('1' == true); // true, 1 === 1
  
  
})();
