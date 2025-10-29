// 인터페이스 선언 병합
// ex06-15.ts 복사

(()=>{
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  interface Todo {
    // id: string; // 동일한 속성을 지정하려면 type이 같아야 함
    done: boolean;
    title: string;
  }

  const todo: Todo = {
    id: 1,
    title: '인터페이스 병합',
    content: '인터페이스 병합을 해봐요',
    done: true,
  };

  console.log(todo);
})();