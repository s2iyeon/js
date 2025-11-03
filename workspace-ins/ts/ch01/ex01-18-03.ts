(() => {
  /*
  if-else if 문을 이용하여 사용자의 로그인 상태와 사용자의 등급을 출력하세요.
  */
  
  const isLogin = true; // 로그인 상태
  const isUser = true; // 구매자
  const isSeller = false; // 판매자
  const isAdmin = false; // 관리자
  
  // 로그인 상태 출력
  if (isLogin) {
    console.log("로그인 상태");
  } else {
    console.log("로그아웃 상태");
  }
  
  // 사용자 유형 출력
  if (isUser) {
    console.log("구매자");
  } else if (isSeller) {
    console.log("판매자");
  } else {
    console.log("관리자");
  }
  
  // 로그인 상태와 사용자 유형을 조합해서 출력
  // "구매자 로그인 상태"/구매자 로그아웃 상태
  // 판매자 로그인 상태/판매자 로그아웃 상태
  // 관리자 로그인 상태/관리자 로그아웃 상태
  
  let userType = '구매자';
  let loginState = '로그인';
  
  if (isSeller) {
    userType = '판매자';
  } else if (isAdmin) {
    userType = '관리자';
  }
  
  if (!isLogin) {
    loginState = '로그아웃';
  }
  
  console.log(`${userType} ${loginState} 상태`);
  
})();
