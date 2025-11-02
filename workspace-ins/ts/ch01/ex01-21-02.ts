(() => {
  /*
  for문을 이용해서 다양한 별찍기
  */
  
  const lines = 5; // 전체 줄 수를 정의
  
  /*
  *
  **
  ***
  ****
  *****
  */
  for (let i=0; i<lines; i++) {
    let star = '';
    for (let k=0; k<=i; k++) {
      star += '*';
    }
    console.log(star);
  }
  
  
  /*
  *****
  ****
  ***
  **
  *
  */
  for (let i=0; i<lines; i++) {
    let star = '';
    for (let k=0; k<(lines-i); k++) {
      star += '*';
    }
    console.log(star);
  }
  
  /*
      *
     **
    ***
   ****
  *****
  */
  // 한정아
  for (let i=0; i<lines; i++) {
    let star = '';
    for (let k=0; k<((lines-1)-i); k++) {
      star += ' ';
    }
    for (let k=0; k<=i; k++) {
      star += '*';
    }
    console.log(star);
  }
  
  
  /*
  *****
   ****
    ***
     **
      *
  */
  
  
  /*
      *
     ***
    *****
   *******
  *********
  */
  
  for (let i=1; i<=lines; i++) {
    let space = '';
    let star = '';
    // 공백 생성
    for (let k=0; k<lines-i; k++) {
      space += ' ';
    }
    for (let k=0; k<i*2-1; k++) {
      star += '*';
    }
    console.log(space + star);
  }
  
  /*
  *********
   *******
    *****
     ***
      *
  */
  for (let i=1; i<=lines; i++) {
    let space = '';
    let star = '';
    // 공백 생성
    for (let k=0; k<i-1; k++) {
      space += ' ';
    }
    for (let k=0; k<(lines-i)*2+1; k++) {
      star += '*';
    }
    console.log(space + star);
  }
  
  // 이제훈
  /*
  let star = 0;
  let blank = 0;
  
  for (let i = 1; i <= 5; i++){
    //star = i; 1번 별찍기 
    star = i * 2 - 1; //2번 별찍기
    blank = 5 - i;
    for (let n = 0; n < blank; n++){
      process.stdout.write(' ');
    }
    for (let t = 0; t < star; t++){
      process.stdout.write('*');
      
    }
    process.stdout.write('\n');
    
  }
  
  for (let i = 1; i <= 5; i++){
    //star = 6 - i; 1번 별찍기
    star = (6 - i) * 2 - 1; //2번 별찍기
    blank = i - 1;
  
    for (let t = 0; t < blank; t++){
      process.stdout.write(' ');
    }
    for (let n = 0; n < star; n++){
      process.stdout.write('*');
    }
    process.stdout.write('\n');
  }
  */
})();
