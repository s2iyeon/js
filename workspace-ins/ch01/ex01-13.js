/*
논리 연산자 &&, ||, !
*/

// 논리합(OR)
// 피연산자 둘 중 하나라도 true일 경우 true가 됨
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ID 유효성 검사(4글자에서 12글자로 입력)
var id = 'ashsdfdsa';
var invalidId = id.length < 4 || id.length > 12;
var invalidId = !(id.length >= 4 && id.length <= 12);

console.log('id 입력 조건에 맞지 않음', invalidId);

// OR 연산자의 특징
// 앞의 값이 truthy 라면 앞의 값을 반환
// 앞의 값이 falsy 라면 뒤의 값을 반환
console.log('hello' || 'world'); // 'hello'
console.log(90 || 100); // 90
console.log(0 || 10); // 10
console.log(null || 'guest'); // 'guest'
console.log(undefined || 'guest'); // 'guest'
console.log('' || 'guest'); // 'guest'

// 논리곱(AND)
// 피연산자 둘 다 true일 경우 true가 됨
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// AND 연산자의 특징
// 앞의 값이 truthy 라면 뒤의 값을 반환
// 앞의 값이 falsy 라면 앞의 값을 반환
// var userName = '논리핑';
var userName; // undefined
// 안전한 속성 접근
console.log('글자수', userName && userName.length);

// 옵셔널 체이닝(ES 2020)
console.log('글자수', userName?.length);
