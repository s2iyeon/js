(() => {
  /*
  * 배열 다루기 - 배열의 다양한 메서드(고차함수) 사용
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
  // Array.prototype.filter: 콜백 함수가 true를 리턴하는 요소만 모아서 새로운 배열로 반환
  let doneList = todoList.filter(todoItem => todoItem.done);
  console.log('완료된 할일 목록', doneList);
  
  // 남은 할일 목록
  let remainList = todoList.filter(todoItem => !todoItem.done);
  console.log('남은 할일 목록', remainList);
  
  // 남은 할일 수
  let remainCount = todoList.filter(todoItem => !todoItem.done).length;
  console.log('남은 할일 수', remainCount);
  
  // id=2인 할일
  // Array.prototype.find: 콜백 함수가 처음으로 true를 리턴할 때 그 요소를 반환
  let todo = todoList.find(todoItem => todoItem.id === 2);
  console.log('id=2인 할일', todo);
  
  // id=3인 할일의 index
  // Array.prototype.findIndex: 콜백 함수가 처음으로 true를 리턴할 때 그 index를 반환
  let todoIndex = todoList.findIndex(todoItem => todoItem.id === 3);
  // todoList.find((todoItem, i) => {
  //   if(todoItem.id === 3){
  //     todoIndex = i;
  //     return true;
  //   }
  // });
  
  console.log('id=3인 할일의 index', todoIndex);
  
  // 남은 할일이 하나라도 있는가?
  // Array.prototype.some: 콜백 함수가 true를 리턴하는 경우가 하나라도 있으면 true를 반환
  let hasTodo = todoList.some(todoItem => !todoItem.done);
  console.log('남은 할일이 하나라도 있는가?', hasTodo);
  
  // 할일이 모두 완료 되었는가?
  // Array.prototype.findIndex: 콜백 함수가 전부 true를 리턴하는 경우 true를 반환
  let isAllDone = todoList.every(todoItem => todoItem.done);
  console.log('할일이 모두 완료 되었는가?', isAllDone);
  
  // 모든 할일에 대해서 title만 꺼내서 소문자로 변경
  // Array.prototype.map: 콜백 함수의 리턴값을 모아서 새로운 배열로 반환
  let lowerTitleList = todoList.map(todoItem => {
    return todoItem.title.toLocaleLowerCase(); // ['javascript 공부', 'react 공부', ...]
  });
  console.log('할일 title(소문자)', lowerTitleList);
  
  // 완료된 할일에 대해서 title만 추출
  let doneTitleList = [];
  
  // 소혜림
  todoList.map(todoItem => {
    if(todoItem.done) {
      doneTitleList.push(todoItem.title);
    }
  });
  
  // 김채희
  doneTitleList = doneList.map(todoItem => {
    return todoItem.title
  });
  
  // 박지섭
  doneTitleList = todoList
    .filter((todoItem) => todoItem.done)
    .map((todoItem) => todoItem.title);
  
  doneTitleList = todoList.filter(todoItem => todoItem.done).map(todoItem => todoItem.title);
  console.log('완료된 할일 title', doneTitleList); // ['JavaScript 공부', 'Final 프로젝트']
  
})();
