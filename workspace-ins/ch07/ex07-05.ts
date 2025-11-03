// 내장 객체 - JSON

(()=>{

  // 원본 객체
  const haru = { name: '하루', age: 5 };

  // JSON 문자열로 변환
  const strHaru = JSON.stringify(haru);

  // JSON 문자열을 객체로 변환
  // const objHaru = JSON.parse(strHaru);
  const objHaru = JSON.parse('{ "name": "하루", "age": 5 }');

  
  console.log(typeof haru, haru);
  console.log(typeof strHaru, strHaru);
  console.log(typeof objHaru, objHaru);

})();


