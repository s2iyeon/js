// 유틸리티 타입 - Required

(()=>{
  interface Todo {
    title: string;
    content?: string;
    done?: boolean;
  }

  // interface RequiredTodo {
  //   title: string;
  //   content: string;
  //   done: boolean;
  // }
// 
  const todo1: Todo = {
    title: '할일1',
    // content: '내용1',
    // done: false,
  };

  // const todo2: RequiredTodo = {
  const todo2: Required<Todo> = {
    title: '할일2',
    content: '내용2',
    done: true,
  };

  console.log(todo1);
  console.log(todo2);
})();
