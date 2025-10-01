/*
2차원 배열
*/

// 2차원 배열 선언
// const numbers = [];
// numbers[0] = [ 2, 4, 6, 8, 10 ];
// numbers[1] = [ 3, 6, 9 ];
// numbers[2] = [ 4, 8, 12, 16 ];
// numbers[3] = [ 5, 10, 15, 20 ];
// numbers[4] = [ 6, 12, 18, 24 ];

const numbers = [
  [ 2, 4,  6,  8, 10 ],
  [ 3, 6,  9 ],
  [ 4, 8,  12, 16 ],
  [ 5, 10, 15, 20 ],
  [ 6, 12, 18, 24 ]
];

console.log(numbers[0]); // [ 2, 4, 6, 8, 10 ]
console.log(numbers[1]); // [ 3, 6, 9 ]
console.log(numbers[2]); // [ 4, 8, 12, 16 ]
console.log(numbers[3]); // [ 5, 10, 15, 20 ]
console.log(numbers[4]); // [ 6, 12, 18, 24 ]

console.log(numbers[0][3]); // 8
console.log(numbers[1][0]); // 3
console.log(numbers[2][3]); // 16
console.log(numbers[4][2]); // 18

// for 문을 이용해서 2차원 배열의 모든 요소의 합계를 출력하세요.
// 결과: 198
let sum = 0;
for(let i=0; i<numbers.length; i++) {
  const row = numbers[i];
  console.log(i, row);
  for(let k=0; k<row.length; k++) {
    console.log(k, row[k]);
    sum += row[k];
  }
}

sum = 0;
for(let row of numbers){
  for(let num of row){
    sum += num;
  }
}

console.log('모든 요소의 합계:', sum);

// 소혜림
sum = 0;

for(i=0; i < numbers.length; i++) {
  for(j=0; j< numbers[i].length; j++ ) {
    sum += numbers[i][j];
  }
}

console.log("2차원 배열 속성의 총합 :" , sum);

// 류혜진
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  let row = numbers[i];
  for (let j = 0; j < row.length; j++) {
    let now = row[j];
    sum += now;  
  }
}
console.log('합계', sum);