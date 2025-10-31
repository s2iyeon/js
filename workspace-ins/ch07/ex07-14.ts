// 내장 객체 Array - concat()

(()=>{

  const arr = ['오렌지', '딸기', '레몬'];

  // 배열 결합
  // const arr2 = arr.concat(['사과', '바나나'], ['포도']);

  const newArr1 = ['사과', '바나나'];
  const newArr2 = ['포도'];

  // 전개 구문
  const arr2 = [ ...arr, ...newArr1, ...newArr2 ];

  console.log(arr); // [ '오렌지', '딸기', '레몬' ]
  console.log(arr2); // [ '오렌지', '딸기', '레몬', '사과', '바나나', '포도' ]

})();