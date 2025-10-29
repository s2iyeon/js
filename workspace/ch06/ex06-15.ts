// 인터페이스 다중 상속

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 목록 조회시 사용
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: '등록용 할일',
    content: '내용',
  };

  const todo2: TodoList = {
    id: 1,
    title: '목록용 할일',
    done: true,
  };

  const todo3: TodoInfo = {
    id: 2,
    title: '상세 조회용',
    content: '내용',
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
  console.log(todo3.createdAt);

})();