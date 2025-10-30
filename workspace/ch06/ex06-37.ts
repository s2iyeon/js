// 맵드 타입 - 유틸리티 타입 구현 원리

(()=>{
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  // keyof T = 'id' | 'title' | 'content'
  // T[P] -> Todo['id'] -> string
  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };

  const todo1: MyPartial<Todo> = {
    title: '제목1',
  };
  const todo2: Partial<Todo> = {
    title: '제목2',
  };



  // 읽기 전용으로 바뀐 타입 반환
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  
  const todo3: MyReadonly<Partial<Todo>> = {
    title: '제목3',
  };
  // todo3.title = '수정'; // 컴파일 에러

  const todo4: Pick<MyReadonly<Partial<Todo>>, 'title'> = {
    title: '제목4',
  };

  console.log(todo1, todo2);
})();
