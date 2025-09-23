/*
변수 선언
*/

var a; // a 변수 선언
a = 100; // a 변수에 100이라는 값을 할당
console.log('a의 값', a);
a = 200; // a 값을 200으로 재할당(수정)
console.log('a의 값', a);

// 여러 변수 동시 선언
var b, c; // 변수 두개 선언, 선언만 된 상태의 변수는 undefined 값을 가짐
var d = 300; // 변수 선언 + 초기화
console.log('b', b); // undefined
console.log('c', c); // undefined
console.log('d', d);

// 선언하지 않은 변수를 사용할 경우 에러 발생
// console.log('e', e);

// 일반적인 변수명
var age = 29;
var userName = '좋아핑';
var user2Name = '좋아핑2';
// var 3userName = '싫어핑'; // 에러: 식별자는 숫자로 시작할 수 없음
var $userName = '머니핑';

// 특수문자만 사용
var $$$ = 100000000;
var _______ = '몇개일까?';

// 잘못된 변수명
// var user-name = '안돼핑'; // 에러: 특수문자는 $ _ 만 가능

// 사용자 정보 변수 작성
var userName = '낙타핑';
var userAge = 29;
var userGender = "남자";
var userEmail = 'user@gmail.com';

console.log('=== 회원 정보 ===');
console.log('이름', userName);
console.log('나이', userAge);
console.log('성별', userGender);
console.log('이메일', userEmail);
console.log('이메일', userEmail);
console.log('이메일', 'usar@gmail.com');
console.log('이메일', 'user@gmail.com');