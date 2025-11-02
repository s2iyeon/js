/*
while 문을 사용합니다.

첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 천만톨을 모을 수 있을까?
*/

let day = 0; // 일한 날짜
let dailyCount = 1; // 매일 받는 쌀알 수(첫날 1톨부터 시작)
let sum = 0; // 누적된 쌀알 수

while (sum <= 10000000) {
  day++; // 날짜 증가. 1, 2, 3...
  sum += dailyCount; // 오늘 받은 쌀알 누적. 1, 3, 7, 15, ...
  dailyCount *= 2; // 2, 4, 8, 16, ...
}

console.log(`${day}일 동안 일했더니 쌀알이 ${sum}톨이 되었다. 내일은 ${dailyCount}톨을 받겠군.`);

day = 0;
dailyCount = 1;
sum = 0;

// 30일 동안 일을 하면 총 받는 쌀알의 수는?
while (day < 30) {
  day++; // 날짜 증가. 1, 2, 3...
  sum += dailyCount; // 오늘 받은 쌀알 누적. 1, 3, 7, 15, ...
  dailyCount *= 2; // 2, 4, 8, 16, ...
}

console.log(`${day}일 동안 일했더니 쌀알이 ${sum}톨이 되었다. 내일은 ${dailyCount}톨을 받겠군.`);
