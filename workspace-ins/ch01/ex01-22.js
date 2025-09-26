/*
반복문 - break, continue
*/


let n1 = 5; // 작은수
let n2 = 9; // 큰수
let result = null;

// 작은수와 큰 수가 구분없이 입력 될 경우
const n = Math.min(n1, n2);
const m = Math.max(n1, n2);

// n ~ m 까지의 정수중에서 가장 작은 짝수를 찾아서 출력하세요.
// for(let i=m; i>=n; i--) {
//   if(i%2 === 0){
//     result = i;
//   }
// }

for(let i=n; i<=m; i++) {
  if(i%2 === 0){
    result = i;
    break;
  }
}
console.log(`${n} ~ ${m} 정수중 가장 작은 짝수:`, result);

// n ~ m 까지의 정수중에서 홀수만 찾아서 출력하세요.
for(let i=n; i<=m; i++){
  if(i%2 !== 0){
    console.log('홀수:', i);
  }
}

// n ~ m 까지의 정수중에서 홀수와 짝수를 구분해서 출력하세요.
for(let i=n; i<=m; i++){
  if(i%2 !== 0){
    console.log('홀수:', i);
  }else{
    console.log('짝수:', i);
  }
}

for(let i=n; i<=m; i++){
  if(i%2 !== 0){
    console.log('홀수:', i);
    continue; // 가독성이 떨어질 수 있으므로 잘 사용하지 않음
  }

  console.log('짝수:', i);
}

let odd = '';
let even = '';
for(let i=n; i<=m; i++){
  if(i%2 !== 0){
    odd += `홀수: ${i}\n`;
  }else{
    even += `짝수: ${i}\n`;
  }
}
console.log(odd);
console.log(even);
