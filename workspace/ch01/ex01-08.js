/*
산술 연산자 +, -, *, /, %, **
*/

// 연산자 우선순위에 의해 +,- 보다 *, /가 먼저 계산됨
console.log(1 + 4 * 5); // 1 + 20 = 21

// ()안의 계산이 먼저 됨
console.log((1 + 4) * 5); // 5 * 5 = 25

// 나눗셈은 소수점까지 계산
console.log(9 / 4); // 2.25

// 나머지 연산자
console.log(9 % 4); // 1

// 거듭제곱
var age = 2 ** 3; // 2 * 2 * 2 = 8
console.log('나이는 ' + age + '살 입니다.'); // 나이는 8살 입니다.

// Template literal (ECMAScript 6에 추가 됨)
console.log(`나이는 ${ age }살 입니다.`);

dd