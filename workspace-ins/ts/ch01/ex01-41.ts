(() => {
  /*
  구조 분해 할당(Destructuring assignment)
  */
  
  const foo = ['yellow', 'green', 'blue'];
  
  // const one = foo[0];
  // const two = foo[1];
  // const three = foo[2];
  
  // 구조분해할당(배열)
  const [one, two, three] = foo;
  
  // TODO 구조분해할당: React에서 많이 사용
  // const [user, setUser] = useState(); // 배열을 반환
  
  console.log(one, two, three); // yellow green blue
  
  const user = { userName: '구분할핑', userAge: 30 };
  // const userName = user.userName;
  // const age = user.userAge;
  
  // 구조분해할당(객체)
  const { userName, userAge: age } = user;
  
  console.log(userName, age); // 구분할필 30
  
  
  
})();
