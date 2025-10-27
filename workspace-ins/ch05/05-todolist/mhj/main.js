let todoList = [
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
    "id": 8,
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

let lastNo;
const todolistEl = document.querySelector('.todolist');
const addInputEl = document.querySelector('.todoinput input');
const addBtnEl = document.querySelector('.todoinput button');

function refreshLastNo(){
  lastNo = Math.max(...todoList.map(item => item.id));
}

// 할일 컨포넌트
const todoItem = function(item) {
  return `
    <li class="todo_item" data-no="${item.id}">
      <span>${item.id}</span>
      ${
        item.done
        ? `<span class="ttl"><s>${item.title}</s></span>`
        : `<span class="ttl">${item.title}</span>`
      }
      <button class="btn_remove" type="button">삭제</button>
    </li>
  `;
};

// todolist 요소 클릭시
todolistEl.addEventListener('click',(e)=>{
  todoRemove(e.target);
  todoModify(e.target);
});

// 추가 버튼 클릭시
addBtnEl.addEventListener('click', todoAdd);

// input 요소에 키보드 입력
addInputEl.addEventListener('keyup', (e)=>{
  if(e.key === 'Enter') todoAdd();
});

// 초기값 세팅
function initRender(){
  todoList.forEach((_,i)=>{
    todolistEl.insertAdjacentHTML('beforeend', todoItem(todoList[i]));
  });
}
initRender();

// 할일 제거
function todoRemove(el){
  if(!el.classList.contains('btn_remove')) return;

  const NUM = el.closest('.todo_item').getAttribute('data-no');
  todoList = todoList.filter(item => item.id != NUM);
  el.closest('.todo_item').remove();
}

// 할일 추가
function todoAdd(){
  const title = addInputEl.value.trim();
  if (title == '') return;
  refreshLastNo();

  const todo = {
    "id": ++lastNo,
    title,
    "done": false
  }

  todoList.push(todo);
  todolistEl.insertAdjacentHTML('beforeend', todoItem(todo));
  addInputEl.value = '';
  addInputEl.focus();
}

// 할일 상태 변경
function todoModify(t){
  if(!(t.classList.contains('ttl') || t.closest('.ttl'))) return;
  const todoEl = t.closest('.todo_item');
  const num = t.closest('.todo_item').getAttribute('data-no');

  const todo = todoList.find(todo => todo.id == num);
  todo.done = !todo.done;

  const cELi = document.createElement('li');
  cELi.innerHTML = todoItem(todo).trim();
  todoEl.replaceWith(cELi.firstElementChild);
}