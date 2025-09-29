/*
new Object() - 생성자 함수로 객체 생성
*/

// 첫번째 user
const userName = '김하연';
const age = 27;
const hobby = '객체연구';
console.log(userName, age, hobby);

// 두번째 user
const userName2 = '김하연2';
const age2 = 27;
const hobby2 = '객체연구2';
console.log(userName2, age2, hobby2);

const user = new Object(); // Object 생성자 함수로 객체 생성

// 점 표기법(객체에 속성 부여 1)
user.name = '김하연'; // user 객체에 name 속성을 추가
user.age = 27; // user 객체에 age 속성을 추가

// 대괄호 표기법(객체에 속성 부여 2)
user['hobby'] = '객체연구'; // user 객체에 hobby 속성을 추가

console.log(user.name, user['age'], user.hobby);

const user2 = new Object(); // Object 생성자 함수로 객체 생성

// 점 표기법(객체에 속성 부여 1)
user2.name = '김하연'; // user 객체에 name 속성을 추가
user2.age = 27; // user 객체에 age 속성을 추가

// 대괄호 표기법(객체에 속성 부여 2)
user2['hobby'] = '객체연구'; // user 객체에 hobby 속성을 추가

console.log(user2.name, user2['age'], user2.hobby);
console.log(typeof user, user);