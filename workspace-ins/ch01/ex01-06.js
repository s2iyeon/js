/*
기본 데이터 타입 - Number, String, Boolean, undefined, null
*/

// number 타입
var num = 100; // 정수형 숫자
var floatNum = 3.14; // 실수형 숫자

// string 타입
var s1 = 'single quote'; // 작은 따옴표로 감싼 문자열
var s2 = "double quote"; // 큰 따옴표로 감싼 문자열

// boolean 타입
var b1 = true; // 참
var b2 = false; // 거짓

// undefined 타입(변수는 선언되었지만 값이 할당되지 않은 상태)
var emptyVal;

// null 타입(의도적으로 값이 없음을 나타내는 특별한 값)
var nullVal = null;

console.log(num, floatNum, s1, s2, b1, b2, emptyVal, nullVal); // 100 3.14 single quote double quote true false undefined null
console.log(typeof num, typeof floatNum, typeof s1, typeof s2, typeof b1, typeof b2,
            typeof emptyVal, typeof nullVal); // number number string string boolean boolean undefined object