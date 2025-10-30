// 유틸리티 타입 - Readonly

(()=>{
  interface Todo {
    title: string;
    content: string;
    done: boolean;
  }

  interface ReadonlyTodo {
    readonly title: string;
    readonly content: string;
    readonly done: boolean;
  }

  const todo1: Todo = {
    title: '할일1',
    content: '내용1',
    done: false,
  };
  todo1.content = '수정된 내용1';

  // const todo2: ReadonlyTodo = {
  const todo2: Readonly<Todo> = {
    title: '할일2',
    content: '내용2',
    done: true,
  };

  // todo2.content = '수정된 내용1';

  console.log(todo1);
  console.log(todo2);
})();
