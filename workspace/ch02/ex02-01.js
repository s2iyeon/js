/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

const num = 100;        // number // 원시형
const str = 'hello';    // string // 원시형
const obj = {};         // object // 참조형
const arr = [num, str]; // object(array) // 참조형

// 함수를 변수에 할당 (표현식)
const f1 = function () {
  return 'F1';
};

// 함수를 배열의 요소로 할당 (객체, 함수 push 가능)
arr.push(obj); // [100, 'hello', {}]
arr.push(f1); // [100, 'hello', {}, function(){}]

// 함수를 객체의 속성으로 할당(메서드)
obj.f2 = f1;
obj.f3 = function () {
  return 'F3';
};

console.log(f1(), arr[3](), obj.f2(), arr[2].f2(), obj.f3());


