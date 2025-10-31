// 내장 객체 - Object

(()=>{
  
  const haru = { name: '하루', age: 5 };

  // keys, values, entries
  console.log(Object.keys(haru)); // ['name', 'age']
  console.log(Object.values(haru)); // ['하루', 5]
  console.log(Object.entries(haru)); // [['name', '하루'], ['age', 5]]

  // fromEntries
  const namu = Object.fromEntries([['name', '나무'], ['age', 8]]);
  console.log(namu); // { name: '나무', age: 8 }

  const haru2 = haru;
  haru.age++;
  console.log(haru.age, haru2.age); // 6 6

  // 객체의 복사
  const haru3 = Object.assign({}, haru, { breed: '이탈리안 그레이 하운드' });
  haru.age++;
  console.log(haru.age, haru3.age); // 7 6

  // 객체 복사(전개 구문)
  const haru4 = { ...haru };
  haru.age++;
  console.log(haru.age, haru4.age); // 8 7
  
  const namu2 = { ...namu, breed: '카발리에 킹찰스 스패니얼' };

  console.log(haru3, namu2)
})();

