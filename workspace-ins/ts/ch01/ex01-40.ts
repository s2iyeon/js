(() => {
  /*
  Template literals
  */
  
  /*
  멋사핑 님의 정보입니다.
  나이: 29
  전화번호: 0102345678
  주소: 서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼
  */
  
  const userName = '멋사핑';
  const age = 29;
  const phone = '0102345678';
  const address = '서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼';
  
  // const info = userName + ' 님의 정보입니다.\n나이: ' + age + '\n전화번호: ' + phone + '\n주소: ' + address;
  const info = `${userName} 님의 정보입니다.
  나이: ${age}
  전화번호: ${phone}
  주소: ${address}`;
  
  console.log(info);
  
  
})();
