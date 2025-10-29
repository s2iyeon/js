// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    // title: string;
    // content: string;
    id: number;
    done: boolean;
  }

  interface TodoInfoWithDate extends TodoInfo {
    createdAt: Date;
    updatedAt: Date;
  }

  // 할일 등록에 사용
  const todo1: TodoRegist = {
    title: '할일1',
    content: '내용1',
  };

  // 할일 상세 조회에 사용
  const todo2: TodoInfo = {
    title: '할일2',
    content: '내용2',
    id: 5,
    done: true,
  };

  // 할일 상세 조회시 날짜도 포함
  const todo3: TodoInfoWithDate = {
    id: 3,
    title: '할일3',
    content: '내용3',
    done: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  console.log(todo1);
  console.log(todo2);
  console.log(todo3);

  
})();