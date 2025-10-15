/*
* 배열 다루기 - for문 사용
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
for(let i=0; i<todoList.length; i++){
  const todoItem = todoList[i];
  if(todoItem.done === true){ // 완료된 할일
    doneList.push(todoItem);
  }
}
console.log('완료된 할일 목록', doneList); // 1, 5

// 남은 할일 목록
let remainList = [];
for(let todoItem of todoList){
  if(todoItem.done !== true){ // 남은 할일
    remainList.push(todoItem);
  }
}
console.log('남은 할일 목록', remainList); // 4, 3, 2

// 남은 할일 수
let remainCount = 0;
for(let todoItem of todoList){
  if(todoItem.done !== true){ // 남은 할일
    remainCount++;
  }
}
console.log('남은 할일 수', remainCount); // 3

// id=2인 할일
let todo = null;
for(let todoItem of todoList){
  if(todoItem.id === 2){
    todo = todoItem;
    break;
  }
}
console.log('id=2인 할일', todo); // { TypeScript 공부 ... }

// id=3인 할일의 index
let todoIndex = -1;
for(let i=0; i<todoList.length; i++){
  const todoItem = todoList[i];
  if(todoItem.id === 3){
    todoIndex = i;
    break;
  }
}
console.log('id=3인 할일의 index', todoIndex); // 2

// 남은 할일이 하나라도 있는가?
let hasTodo = false;
for(let todoItem of todoList){
  if(todoItem.done !== true){ // 남은 할일
    hasTodo = true;
    break;
  }
}
console.log('남은 할일이 하나라도 있는가?', hasTodo); // true

// 할일이 모두 완료 되었는가?
let isAllDone = true;
for(let todoItem of todoList){
  if(todoItem.done !== true){ // 남은 할일
    isAllDone = false;
    break;
  }
}
console.log('할일이 모두 완료 되었는가?', isAllDone); // false
