/*
* 커링 - 배열에서 조건에 맞는 요소 찾기

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result;

// const greaterThan = _.curry((min, x) => x > min);

const greaterThan = function(min){
  return function(x){
    return x > min;
  }
};

// 3보다 큰 요소만 추출
// 소혜림
result = numbers.filter(num => num > 3);
// result = numbers.filter(num => greaterThan(3, num));
result = numbers.filter(greaterThan(3));
console.log('3보다 큰 요소', result); // [4, 5, 6, 7, 8, 9]

// 5보다 큰 요소만 추출
// 이유진A
function over(n) {
  result = []; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > n) {
      result.push(numbers[i]); 
    }
  }
}
over(5);
result = numbers.filter(greaterThan(5));
console.log('5보다 큰 요소', result); // [6, 7, 8, 9]

// 6보다 큰 요소만 추출
// 김하연
result = [];
for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 6) {
    result.push(numbers[i]);
  }
};
result = numbers.filter(greaterThan(6));
console.log('6보다 큰 요소', result); // [7, 8, 9]

// 8보다 큰 요소만 추출
// 허예진
function biggerThan(num) {
  let result = [];
  numbers.forEach((e) => {
    if (e > num) {
      result.push(e);
    }
  });
  return result;
}
result = numbers.filter(greaterThan(8));
console.log('8보다 큰 요소', biggerThan(8)); // [9]


