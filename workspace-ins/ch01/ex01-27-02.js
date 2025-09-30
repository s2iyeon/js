/*
배열 요소의 합계, 홀수의 합계, 짝수의 합계를 출력
*/

const arr = [4,5,7,2,9,8];
let sum = 0; // 전체 합계
let oddSum = 0; // 홀수 합계
let evenSum = 0; // 짝수 합계

// 전체 합계 출력(for)
for(let i=0; i<arr.length; i++){
  sum += arr[i];
}

console.log('전체 합계', sum); // 35

// 홀수의 합계 출력(for...of)
for(let num of arr){
  if(num%2 !== 0){
    oddSum += num;
  }
}

console.log('홀수 합계', oddSum); // 21

// 짝수의 합계 출력(for...in)
for(let i in arr){
  const num = arr[i];
  if(num%2 === 0){
    evenSum += num;
  }
}

console.log('짝수 합계', evenSum); // 14

// 류혜진
console.log('류혜진');
sum = 0;
oddSum = 0;
evenSum = 0;
// 모든 요소의 합계 출력
for (i = 0; i < arr.length; i++) {
  let num = arr[i];
  sum += num;              // 전체 합
}
console.log('전체 합계.', sum);


// 홀수의 합계 출력 5,7,9  for..of
for (let sum of arr) { 
  if (sum % 2 !== 0) {
    oddSum += sum
  }
}
console.log('홀수 합계.', oddSum);

// 짝수의 합계 출력
for (let i in arr) {       
  let num = arr[i];       
  if (num % 2 === 0) {    
    evenSum += num;       
  }
}

console.log('짝수 합계:', evenSum);

console.log('박지섭');
sum = 0;
oddSum = 0;
evenSum = 0;
// 모든 요소의 합계 출력(for)
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("전체합계:", sum);


// 홀수의 합계 출력(for...of)
for (var elem of arr) {
  if (elem % 2) {
    oddSum += elem;
  }
}

console.log("홀수 합계:", oddSum);

// 짝수의 합계 출력(for...in)
for (var prop in arr) {
  if (!(arr[prop] % 2)) {
    evenSum += arr[prop];
  }
}

console.log("짝수 합계:", evenSum);

console.log('이유진A');
sum = 0;
oddSum = 0;
evenSum = 0;
for(var i = 0; i<arr.length;i++){  
  sum += arr[i];
}  
console.log(sum);


console.log('for...of');
for(var list of arr){ 
  if(list%2!==0)
  oddSum += list;
} console.log(oddSum);


console.log('for...in');
for(var list in arr){ 
  if(arr[list]%2===0)
  evenSum += arr[list];
}console.log(evenSum);

console.log('소혜림');
sum = 0;
oddSum = 0;
evenSum = 0;
for (i = 0; i < arr.length ; i++) {
  sum += arr[i];  
}
console.log('모든 요소의 합계', sum);

for (elem of arr) {
  if (elem % 2 !== 0) {
    oddSum += elem;
  }
}

console.log('홀수 합계', oddSum);

for (prop in arr) {
  if (arr[prop] % 2 === 0) {
    evenSum += arr[prop];
  }
}

console.log('짝수 합계', evenSum);

console.log('박지은');
sum = 0; // 전체 합계
oddSum = 0; // 홀수 합계
evenSum = 0; // 짝수 합계

// 모든 요소의 합계 출력(for)

console.log('for');
for(var i=0; i<arr.length; i++){
  var elem = arr[i];
  console.log(sum += arr[i])
}

console.log('모든 요소의 합계', sum); // 35


// 홀수의 합계 출력(for...of)

for (let elem of arr) {
  if (elem % 2 !== 0) { 
    oddSum += elem;
  }
}

console.log('홀수 합계', oddSum); // 21

// 짝수의 합계 출력(for...in)
for (let elem in arr) {
  if (arr[elem] % 2 === 0) { 
    evenSum += arr[elem];
  }
}

console.log('짝수 합계', evenSum); // 14

console.log('김채희');
sum = 0; // 전체 합계
oddSum = 0; // 홀수 합계
evenSum = 0; // 짝수 합계
for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log("모든 요소의 합계", sum);


// 홀수의 합계 출력(for of)
for (let odd of arr) {
  if (odd %2 !==0) {
    oddSum += odd
  }
}
console.log("홀수 합계", oddSum);

// 짝수의 합계 출력(for in)
for (let even in arr) {
  if (arr[even]%2 === 0) {
    evenSum += arr[even];
  }
}
console.log("짝수 합계", evenSum);