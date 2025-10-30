// 유틸리티 타입 - Partial

(()=>{
  interface Todo {
    title: string;
    content: string;
    done: boolean;
  }

  interface OptionalTodo {
    title?: string;
    content?: string;
    done?: boolean;
  }

  const todo1: Todo = {
    title: '할일1',
    content: '내용1',
    done: false,
  };

  // const todo2: OptionalTodo = {
  const todo2: Partial<Todo> = {
    title: '할일2',
  };

  console.log(todo1);
  console.log(todo2);
})();
