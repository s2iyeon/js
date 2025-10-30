// 맵드 타입 - 매핑 수정자

(()=>{
  interface Todo {
    readonly id: string;
    title?: string;
  }

  // 모든 속성을 옵셔널로 만들기
  // type OptionalTodo = {
  //   id?: string;
  //   title?: string;
  // };

  // keyof Todo = 'id' | 'title'
  type OptionalTodo = {
    -readonly [Prop in keyof Todo]?: string;
  };

  const todo1: OptionalTodo = {
    id: '12'
  };

  console.log(todo1);
})();
