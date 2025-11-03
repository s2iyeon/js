(() => {
  /*
  do-while 반복문
  
  while (조건식) {
    반복할 코드1;
    반복할 코드2;
    ...
  }
  
  do {
    반복할 코드1;
    반복할 코드2;
    ...
  } while (조건식);
  */
  
  // 1부터 10까지의 합계를 출력
  let i = 1;
  let sum = 0;
  
  do {
    sum += i;
    i++;
  } while (i <= 10);
  
  console.log(sum);
  
})();
