(() => {
  /*
  JSON 표기법 - 리터럴 방식으로 객체 생성
  */
  
  let user = {
    name: '김하연',
    age: 27,
    hobby: '객체연구'
  }; // JSON 표기법으로 객체 생성
  
  user = {
    "name": "김하연",
    "age": 27,
    "hobby": "객체연구"
  }; // JSON 표기법으로 객체 생성
  
  console.log(user.name, user['age'], user.hobby);
  console.log(typeof user, user);
  
  // 객체에 새로운 속성 추가(email)
  user.email = 'json@gmail.com';
  
  // 객체를 JSON 형태의 문자열로 변환
  const strUser = JSON.stringify(user);
  console.log(typeof strUser, strUser);
  console.log(strUser.name, strUser['age'], strUser.hobby);
  
  // JSON 형태의 문자열을 객체로 변환
  const objUser = JSON.parse(strUser);
  console.log(typeof objUser, objUser);
  console.log(objUser.name, objUser['age'], objUser.hobby);
})();
