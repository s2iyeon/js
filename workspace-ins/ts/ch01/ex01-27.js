/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [10, 20, 30];
arr.name = '배열핑';

// 배열의 모든 요소 출력(for)
console.log('for');
for(var i=0; i<arr.length; i++){
  var elem = arr[i]; // i=0,1,2
  console.log(i, elem);
}

// 배열의 모든 요소 출력(for...of)
console.log('for...of');
for(var elem of arr){
  console.log(elem);
}

// 배열의 모든 요소 출력(for...in)
console.log('for...in');
for(var prop in arr){
  console.log(prop, arr[prop]);
}


