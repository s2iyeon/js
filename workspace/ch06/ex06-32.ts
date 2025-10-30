// 유틸리티 타입 - Pick

(()=>{
  interface Todo {
    id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  // type TodoRegist = {
  //   title: string;
  //   content: string;
  // }

  type TodoRegist = Pick<Todo, 'title' | 'content'>;

  // { title: string, content: string } 타입으로 지정
  const todo: TodoRegist = {
    title: '제목1',
    content: '내용1'
  };

  console.log(todo.title, todo.content); // 제목1 내용1
  // console.log(todo.done); // 컴파일 에러
})();
