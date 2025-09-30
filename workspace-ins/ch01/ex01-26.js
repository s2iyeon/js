/*
배열 생성, 읽기, 쓰기
*/

// 배열 생성 방법 1: Array 생성자 사용
// const arr = new Array(100, 200, 300);

// 배열 생성 방법 2: JSON 표기법
const arr = [ 100, 200, 300 ];

// 배열에 요소 추가
// index 사용
arr[3] = 400;
arr[4] = 600;

// push 메서드 사용: 배열의 마지막 위치에 지정한 요소를 추가
arr.push(500);
arr.push(700);
arr.push(800);

// index를 이용해서 배열의 마지막 위치에 요소를 추가
// arr[-1] = 900;
arr[arr.length] = 900;
arr[arr.length] = 1000;
arr[arr.length] = 1100;

// 첫번째 위치에 요소 추가
arr.unshift(50); // 맨 앞에 추가
arr.unshift(30);

console.log('첫째 요소', arr.shift()); // 앞에서 제거해서 꺼냄
console.log('마지막 요소', arr.pop()); // 뒤에서 제거해서 꺼냄

// 기존 요소의 값을 변경
arr[5] = 500;
arr[6] = 600;

// var temp = arr[5];
// arr[5] = arr[6];
// arr[6] = temp;

// 구조 분해 할당
// [arr[5], arr[6]] = [arr[6], arr[5]];

// 배열의 중간에 빈 공간을 두고 요소 추가
arr[15] = 1500;

// 배열의 모든 요소를 순차적으로 출력
console.log('배열의 모든 요소를 순차적으로 출력');
for(var i=0; i<arr.length; i++){
  console.log(i, arr[i]);
}
for(var elem of arr){
  console.log(elem);
}

// 배열의 모든 요소를 역순으로 출력
console.log('배열의 모든 요소를 역순으로 출력');
for(var i=arr.length-1; i>=0; i--){
  console.log(i, arr[i]);
}
for(var elem of arr.reverse()){
  console.log(elem);
}

console.log(arr.length, typeof arr, arr);