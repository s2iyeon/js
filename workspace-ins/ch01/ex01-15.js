/*
연산자 우선순위

1. 괄호 ()
2. 산술 연산자 (*, /, %, +, -)
3. 비교 연산자 (>, <, >=, <=, ==, ===, !=, !==)
4. 논리 연산자 (&&, ||)
*/

let result = 5 + 3 * 2; // 5 + 6 = 11
console.log(result);

result = (5 + 3) * 2; // 8 * 2 = 16
console.log(result);

// 산술 연산자와 비교 연산자의 우선순위
result = 5 + 3 > 6 * 2; // 8 > 12 = false
console.log(result);

// 9 < 14 && 6 > 6
// true && false
// false
result = (5 + 4 < 7 * 2) && (10 - 4 > 2 * 3);
console.log(result);