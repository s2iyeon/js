/*
반복문 - while문
*/

// 0부터 10까지 출력
let i = 0;
while (i <= 10) {
  console.log(i++);
}
console.log('i', i);

// 1부터 10까지의 모든 수의 합계를 출력
let sum = 0;
i = 1;
console.log('i\tsum');
while (i <= 10) {
  sum += i; // 1 + 2 + 3 ... + 10
  console.log(`${i}\t${sum}`);
  i++; // 2, 3, ... 11
}

console.log('합계', sum);

