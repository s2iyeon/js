(() => {
  /*
  switch 문을 이용해서 학점을 출력하세요.
  */
  
  // 0 ~ 100 까지의 정수
  const score = 79;
  let grade = '';
  
  // 점수에서 10의 자리만 꺼내기
  // 79/10 => 7.9 => parseInt(7.9) => 7
  
  switch (parseInt(score/10)) {
    case 10:
    case 9:
      grade = 'A';
      break;
    case 8:
      grade = 'B';
      break;
    case 7:
      grade = 'C';
      break;
    case 6:
      grade = 'D';
      break;
    default:
      grade = 'F';
      break;
  }
  
  console.log(`${score}: ${grade}학점`); // 79: C학점
  
})();
