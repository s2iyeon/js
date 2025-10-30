// 타입 가드 - 함수가 null을 리턴할 수 있을 경우

(()=>{
  // 타입 단언을 사용해서 타입 에러를 없애세요.
  const a = document.querySelector('a[href="ch06/ex06-24.js"]') as Element;
  a.textContent += ' 클릭';
})();

(()=>{
  // Non-null assertion operator(!)을 사용해서 타입 에러를 없애세요.
  const a = document.querySelector('a[href="ch06/ex06-24.js"]');
  a!.textContent += ' 클릭';
})();

(()=>{
  // 타입 가드를 사용해서 타입 에러를 없애세요.
  const a = document.querySelector('a[href="ch06/ex06-24.js"]');
  if(a !== null){ // 타입 가드
    a.textContent += ' 클릭'; // a가 null이 아니라면 안전한 코드
  }
})();