/*
if-else문을 이용하여 사용자의 로그인 상태와 사용자의 등급을 출력하세요.
*/

const isLogin = true;  // 로그인 상태
const isUser = true;   // 구매자
const isSeller = false; // 판매자
const isAdmin = false;  // 관리자

// 로그인 상태 출력
if (isLogin) {
  console.log('로그인 상태');
} else {
  console.log('로그아웃 상태');
}

// 사용자 유형 출력
if (isUser) {
  console.log('구매자');
} else {
  if (isSeller) {
    console.log('판매자');
  } else {
    if (isAdmin) {
      console.log('관리자');
    }
  }
}

// 로그인 상태 + 사용자 유형 조합 출력
if (isUser) {
  if (isLogin) {
    console.log('구매자 로그인 상태');
  } else {
    console.log('구매자 로그아웃 상태');
  }
} else {
  if (isSeller) {
    if (isLogin) {
      console.log('판매자 로그인 상태');
    } else {
      console.log('판매자 로그아웃 상태');
    }
  } else {
    if (isAdmin) {
      if (isLogin) {
        console.log('관리자 로그인 상태');
      } else {
        console.log('관리자 로그아웃 상태');
      }
    }
  }
}