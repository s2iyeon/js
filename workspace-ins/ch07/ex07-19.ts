// 내장 객체 Array - reduce()

(()=>{
  const arr = [1, 2, 3, 4];
  const initialValue = 0;
  const sum = arr.reduce(function(acc, num, index){
    console.log(`${index} -> ${acc} + ${num} = ${acc + num}`);
    return acc + num;
  }, initialValue);

  console.log(sum); // 0 + 1 + 2 + 3 + 4 = 10
})();