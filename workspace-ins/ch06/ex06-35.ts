// 맵드 타입 - 기본 문법

(()=>{
  // type User = {
  //   id: string;
  //   name: string;
  //   addr: string;
  //   phone: string;
  // };

  type UserFields = 'id' | 'name' | 'addr' | 'phone';
  type User = {
    [Prop in UserFields]: string;
  };

  const haru: User = {
    id: '1',
    name: '하루',
    addr: '김포시',
    phone: '01022223333'
  };

  console.log(haru);
})();
