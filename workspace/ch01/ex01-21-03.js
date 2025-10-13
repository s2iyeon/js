/*
for문을 이용한 구구단

출력:
2 x 1 = 2
2 x 2 = 4
...
*/

// 2단 출력
for(let i=1; i<=9; i++) {
  console.log(`2 x ${i} = ${2*i}`);
}

/*
2단부터 9단까지 출력

출력:
2 x 1 = 2   3 x 1 = 3  ... 9 x 1 = 9
2 x 2 = 3   3 x 2 = 6  ... 9 x 2 = 18
...         ...        ... ...
2 x 9 = 18  3 x 9 = 27 ... 9 x 9 = 81
*/

// 김하연
for (let i = 1; i <= 9; i++) {
  let result = '';
  for (let j = 2; j <= 9; j++) {
    result += `${j} x ${i} = ${i*j} \t`;
  }
  console.log(result);
}

console.log('박지은');
for(let n=2; n<=9; n++) {
  for(let i=1; i<=9; i++){
    console.log(`${n} x ${i} = ${n*i}`)
  }
}

console.log('소혜림');
const guguLines = 20;

for (let i = 1; i <= guguLines ; i++) {
  let line = '';
  for (let j = 2; j <= guguLines ; j++) {
    line += `${j} x ${i} = ${(j)*(i)}  `
  }
  console.log(line);
}

console.log('한정아');
// TODO 2중 for 문으로 리펙토링 필요
for (let i=1; i<=9; i++) {
  console.log
  (`2 x ${i} = ${2*i} \t 3 x ${i} = ${3*i} \t 4 x ${i} = ${4*i} \t 5 x ${i} = ${5*i} \t 6 x ${i} = ${6*i} \t 7 x ${i} = ${7*i} \t 8 x ${i} = ${8*i} \t 9 x ${i} = ${9*i}`);
}
console.log('류혜진');
for (let i = 2; i <= 9; i++) {     
  console.log(`${i}단`);             
  for (let y = 1; y <= 9; y++) {
    console.log(`${i} x ${y} = ${i*y}`);
  }
}