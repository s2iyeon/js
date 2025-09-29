/*
JSON 표기법 - 리터럴 방식으로 객체 생성
*/

const user = {
  name: '김하연',
  age: 27,
  hobby: '객체연구'
}; // JSON 표기법으로 객체 생성

console.log(user.name, user['age'], user.hobby);