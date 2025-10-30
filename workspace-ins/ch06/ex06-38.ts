// 고급 타입 연산자 - keyof

(()=>{
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  // 지정한 객체의 속성값을 반환
  function getProperty(){

  }

  const todo: Todo = {
    id: '1',
    title: '제목1',
    content: '내용1'
  };

  console.log(getProperty(todo, 'title')); // 제목1
  console.log(getProperty(todo, 'content')); // 내용1
})();
