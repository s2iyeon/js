// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(()=>{
  // 인터페이스 생성
  // type User = {
  interface User {
    name: string;
    age: number;
  };

  const haru: User = { name: 'haru', age: 5 };
  const namu: User = { name: 'namu', age: 8 };

  console.log(haru.age, namu.name.toUpperCase());
})();