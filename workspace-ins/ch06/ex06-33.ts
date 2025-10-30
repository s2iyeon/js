// 유틸리티 타입 - Omit

(()=>{
  interface Todo {
    id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  // type TodoInfo = {
  //   id: number;
  //   title: string;
  //   content: string;
  //   done: boolean;
  // }

  type TodoInfo = Omit<Todo, 'createdAt' | 'updatedAt'>;

  const todo: TodoInfo = {
    id: 1,
    title: '제목1',
    content: '내용1',
    done: false
  };

  console.log(todo);
})();
