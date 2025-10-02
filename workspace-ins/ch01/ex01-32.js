/*
매개변수를 가진 함수 - 도어락
*/

/**
 * 올바른 비밀번호가 입력되면 문이 열리고(띠리링을 출력) 
 * 잘못된 비밀번호가 입력되면 경보음이 울림(삐! 삐! 삐! 삐! 출력)
 * 등록된 비밀번호보다 많은 숫자를 입력할 경우 뒷부분만 일치하면 열림
 * 예시)
 * - doorLock('11111') -> 삐! 삐! 삐! 삐!
 * - doorLock('1357') -> 띠리링
 * - doorLock() -> 삐! 삐! 삐! 삐!
 * @param {*} password - 비밀번호
 */
function doorLock(password) {
  // 등록된 비밀번호
  const pwd = '1357'; // 최소 4자리
  // 만약 입력한 비밀번호가 등록된 비밀번호보다 자리가 많을 경우 뒷자리를 등록된 비밀번호 길이만큼 추출
  // password: '2342341357' 10자리
  // pwd: '1357' 4자리
  // if(password?.length > pwd.length){
  //   let subPassword = '';
  //   const start = password.length-pwd.length; // 6
  //   for(let i=start; i<password.length; i++){
  //     subPassword += password[i]; // 1357
  //   }
  //   // '2342341357' -> '1357'
  //   password = subPassword;
  // }

  password = password?.slice(-pwd.length);

  if(password === pwd){
    console.log('띠리링');
  }else{
    console.log('삐! 삐! 삐! 삐!');
  }
}

// 이승규
function doorLock(password) {
  // 세팅된 비밀번호
  const pwd = '1357';
  const result =
    typeof password === 'string' && pwd === password.slice(-pwd.length)
      ? "띠리링"
      : "삐! 삐! 삐! 삐!";
  console.log(result);
}

// 소혜림
function doorLock(password = "") {
  //세팅된 비밀번호
  const pwd = "1357";
  let pwdArr = password.split(""); // [1,2,3,4]
  let pushArr = [];

  const pwdLength = pwd.length;
  for (let i = 0; i < pwdLength; i++) {
    pushArr.push(pwdArr.pop()); // [4,3,2,1]
  }
  pushArr = pushArr.reverse(); // [1,2,3,4]
  pushArr = pushArr.join(""); // 1234

  if (password === pwd) {
    console.log("문이 열렸습니다.");
  } else if (pushArr === pwd) {
    console.log("문이 열렸습니다.");
  } else {
    console.log("삐! 삐! 삐! 삐!");
  }
}

// 류혜진
function doorLock(inputPwd) {
  //실제 비밀번호 
  const pwd = '1357';

  if (inputPwd === '1111' || !inputPwd  || inputPwd === '') {
    console.log('삐! 삐! 삐! 삐!', inputPwd);
  } else if (inputPwd === pwd ||inputPwd.slice(-4) === pwd ) {
    console.log('띠리링', inputPwd);
  } 
}

// 박지섭
function doorLock(password) {
  //세팅된 비밀번호
  const pwd = "1357";
  if (password === pwd) {
    console.log("띠리링");
  } else if (typeof password !== "string") {
    console.log("삐! 삐! 삐! 삐!");
    // password: '2342341357' 10자리
    // pwd: '1357' 4자리
  // } else if (!(password === pwd) && password.length >= 5) {
  } else if (password.length > pwd.length) {
    const start = password.length - pwd.length; // 6
    let check = true;
    for (let i = 0; i < pwd.length; i++) {
      if (password[start + i] !== pwd[i]) {
        check = false;
        break;
      }
    }
    console.log(check ? "띠리링" : "삐! 삐! 삐! 삐!");
  } else {
    console.log("삐! 삐! 삐! 삐!");
  }
}

// 허예진
function doorLock(password) {
  const pwd = "1357";

  if (pwd === password?.slice(password.length - pwd.length)) {
    console.log("띠리링");
  } else {
    console.log("삐! 삐! 삐! 삐!");
  }
}

// 김지유
function doorLock(password = "") {
  const pwd = "1357";

  if (pwd === password.slice(-pwd.length)) {
    console.log("띠리링");
  } else {
    console.log("삐! 삐! 삐! 삐!");
  }
}

// 테스트 케이스
doorLock('1234'); // 삐! 삐! 삐! 삐!
doorLock(); // 삐! 삐! 삐! 삐!
doorLock('74'); // 삐! 삐! 삐! 삐!
doorLock('23423413574'); // 삐! 삐! 삐! 삐!
doorLock('1357'); // 띠리링
doorLock('2342341357'); // 띠리링

