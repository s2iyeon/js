/*
if-else문을 이용하여 사용자의 로그인 상태와 사용자의 등급을 출력하세요.
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
} else {
  if (isSeller) {
    console.log("판매자");
  } else {
    console.log("관리자");
  }
}

// 로그인 상태와 사용자 유형을 조합해서 출력
// "구매자 로그인 상태"/구매자 로그아웃 상태
// 판매자 로그인 상태/판매자 로그아웃 상태
// 관리자 로그인 상태/관리자 로그아웃 상태
if (isUser && isLogin) console.log('구매자 로그인 상태');
if (isUser && !isLogin) console.log('구매자 로그아웃 상태');
if (isSeller && isLogin) console.log('판매자 로그인 상태');
if (isSeller && !isLogin) console.log('판매자 로그아웃 상태');
if (isAdmin && isLogin) console.log('관리자 로그인 상태');
if (isAdmin && !isLogin) console.log('관리자 로그아웃 상태');

if (isLogin) {
  if (isUser) console.log('구매자 로그인 상태');
  if (isSeller) console.log('판매자 로그인 상태');
  if (isAdmin) console.log('관리자 로그인 상태');
} else {
  if (isUser) console.log('구매자 로그아웃 상태');
  if (isSeller) console.log('판매자 로그아웃 상태');
  if (isAdmin) console.log('관리자 로그아웃 상태');
}


// 소혜림 ////////////////////////
// 로그인 상태 출력
if (isLogin) {
  console.log("로그인 상태");
} else {
  console.log("로그아웃 상태");
}
// 사용자 유형 출력
if (isUser) {
  console.log("구매자");
} else {
  if (isSeller) {
    console.log("판매자");
  } else {
    console.log("관리자");
  }
}

// 사용자 유형과 로그인 상태를 조합해서 출력

if (isUser) { // 구매자
  if (isLogin) {
    console.log("구매자 로그인 상태");
  } else {
    console.log("구매자 로그아웃 상태");
  }
} else {
  if (isSeller) { // 판매자
    if (isLogin) {
      console.log("판매자 로그인 상태");
    } else {
      console.log("판매자 로그아웃 상태");
    }
  } else { // 관리자
    if (isLogin) {
      console.log("관리자 로그인 상태");
    } else {
      console.log("관리자 로그아웃 상태");
    }
  }
}

///////////////////////////

// 한정아 //////////////////
//로그인 상태 출력
if(isLogin) {
  console.log('로그인 상태');
} else { 
  console.log('로그아웃 상태'); 
}

//사용자 유형 출력
if (isUser){
  console.log('구매자');
} else {
  if (isSeller){
    console.log('판매자');
  } else {
    console.log('관리자');
  }
}

//로그인상태와 사용자 유형을 조합해서 출력
if (isUser) {
  if (isLogin) {
    console.log('구매자 로그인상태');
  } else {
    console.log('구매자 로그아웃상태');
  }
}

if (isSeller) {
  if (isLogin) {
    console.log('판매자 로그인상태');
  } else {
    console.log('판매자 로그아웃상태');
  }
}

if (isAdmin) {
  if (isLogin) {
    console.log('관리자 로그인상태');
  } else {
    console.log('관리자 로그아웃상태');
  }
}

///////////////////////////

// 박지은 //////////////////
let loginStatus = isLogin ? "로그인" : "로그아웃";

// const userType = isUser ? '구매자' : (isSeller ? '판매자' : '관리자');
// console.log(`${userType} ${loginStatus} 상태`);

if (isUser) {
  console.log(`구매자 ${loginStatus} 상태`);
} else {
  if (isSeller) {
    console.log(`판매자 ${loginStatus} 상태`);
  } else {
    console.log(`관리자 ${loginStatus} 상태`);
  }
}



///////////////////////////