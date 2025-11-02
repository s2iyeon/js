(() => {
  /*
  * 배열 다루기 - 배열 메서드 forEach(고차함수) 사용
  */
  
  const todoList = [
    {
      "id": 1,
      "title": "JavaScript 공부",
      "done": true
    },
    {
      "id": 4,
      "title": "React 공부",
      "done": false
    },
    {
      "id": 3,
      "title": "바닐라 프로젝트",
      "done": false
    },
    {
      "id": 2,
      "title": "TypeScript 공부",
      "done": false
    },
    {
      "id": 5,
      "title": "Final 프로젝트",
      "done": true
    }
  ];
  
  // 완료된 할일 목록
  let doneList = [];
  todoList.forEach(todoItem => {
    if(todoItem.done === true){
      doneList.push(todoItem);
    }
  });
  console.log('완료된 할일 목록', doneList);
  
  // 남은 할일 목록
  let remainList = [];
  todoList.forEach(todoItem => {
    if(todoItem.done !== true){
      remainList.push(todoItem);
    }
  });
  console.log('남은 할일 목록', remainList);
  
  // 남은 할일 수
  let remainCount = 0;
  todoList.forEach(todoItem => {
    if(todoItem.done !== true){
      remainCount++;
    }
  });
  console.log('남은 할일 수', remainCount);
  
  // id=2인 할일
  let todo = null;
  todoList.forEach(todoItem => {
    if(todoItem.id === 2){
      todo = todoItem;
    }
  });
  console.log('id=2인 할일', todo);
  
  // id=3인 할일의 index
  let todoIndex = -1;
  todoList.forEach((todoItem, i) => {
    if(todoItem.id === 3){
      todoIndex = i;
    }
  });
  console.log('id=3인 할일의 index', todoIndex);
  
  // 남은 할일이 하나라도 있는가?
  let hasTodo = false;
  todoList.forEach(todoItem => {
    if(todoItem.done !== true){
      hasTodo = true;
    }
  });
  console.log('남은 할일이 하나라도 있는가?', hasTodo);
  
  // 할일이 모두 완료 되었는가?
  let isAllDone = true;
  todoList.forEach(todoItem => {
    if(todoItem.done !== true){
      isAllDone = false;
    }
  });
  console.log('할일이 모두 완료 되었는가?', isAllDone);
  
})();
