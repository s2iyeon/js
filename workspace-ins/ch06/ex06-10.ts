// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사

(()=>{
  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
  };

  // 인터페이스 사용: 객체의 타입을 지정
  const haru: User = { name: 'haru', age: 5 };
  const namu: User = { name: 'namu', age: 8 };

  console.log(haru.age, namu.name.toUpperCase());

  // 인터페이스 사용: 함수의 리턴 타입으로 지정
  function createUser(name: string, age: number): User{
    const user = { name, age };
    return user;
  }
  const bom: User = createUser('bom', 11);
  console.log(bom.name, bom.age);

  // 인터페이스 사용: 함수의 매개변수의 타입으로 지정
  function getAge(user: User){
    return user.age;
  }
  console.log(getAge(namu));
  console.log(getAge(bom));

})();