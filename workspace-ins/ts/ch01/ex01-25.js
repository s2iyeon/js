/*
객체의 속성 관리
객체의 속성을 읽기, 수정, 생성, 삭제하는 방법
*/

const user = {
  name: '매직핑',
  mainJob: 'magician',
};

// 객체의 속성 읽기
console.log(user.name, user['mainJob'].toUpperCase(), user.subJob?.toUpperCase());

// 객체의 속성 수정
user.mainJob = 'fairy';
console.log(user.name, user['mainJob'].toUpperCase(), user.subJob?.toUpperCase());

// 객체의 속성을 동적으로 생성
user.subJob = 'wizard';
console.log(user.name, user['mainJob'].toUpperCase(), user.subJob?.toUpperCase());

// 객체의 속성 삭제
// delete user.mainJob;
console.log(user.name, user['mainJob']?.toUpperCase(), user.subJob?.toUpperCase());

// 객체의 모든 속성 조회
// user 객체의 속성 개수만큼 for 문을 반복한다.
// prop 변수에는 각 속성의 이름이 할당된다.
for (var prop in user) {
  console.log(prop, user[prop].toUpperCase());
}
