// ex05-05.js 복사

import axios, { AxiosError } from "axios";
import type { TodoList, TodoListRes } from "./types.js";

// 할일 목록을 서버에서 조회한 후 화면에 출력
async function showList(){
  try{
    const { data } = await axios.get<TodoListRes>('https://fesp-api.koyeb.app/todo/todolist');
    if(data.ok){
      const todoList = data.items;
      // Todo 객체를 li 요소로 변환
      const todoListElem = todoList.map(item => getTodoItemElem(item));

      const todoListUl = document.querySelector('.todolist');
      todoListUl?.append(...todoListElem);
    }
  }catch(err){
    if(err instanceof AxiosError){
      console.error('에러', err.response?.data.message);
    }
  }
}

/**
 * Todo 아이템 객체를 전달받아 화면에 표현하는 li 요소를 생성하는 함수
 * @param {Object} item Todo 아이템 객체 { id: number, title: string, done: boolean }
 * @returns {HTMLLIElement} 생성된 Todo 아이템의 DOM 요소
 */
function getTodoItemElem(item: TodoList){
  // item -> { "id": 5, "title": "Final 프로젝트", "done": true }

  // <li>
  const liElem = document.createElement('li');
  // <span>
  const noElem = document.createElement('span');
  // <span>
  const titleElem = document.createElement('span');
  // <s>

  // <button>
  const deleteElem = document.createElement('button');

  // 2
  const noTxt = document.createTextNode(item._id.toString());
  // 샘플2
  const titleTxt = document.createTextNode(item.title);
  // 삭제
  const deleteTxt = document.createTextNode('삭제');

  // <span>2</span>
  noElem.appendChild(noTxt);

  if(item.done){ // 완료
    // <s>
    const sElem = document.createElement('s');
    // <s>샘플2</s>
    sElem.appendChild(titleTxt);
    // <span><s>샘플2</s></span>
    titleElem.appendChild(sElem);
  }else{ // 미완료
    // <span>샘플2</span>
    titleElem.appendChild(titleTxt);
  }
  
  // <button type="button">삭제</button>
  // deleteElem.setAttribute('type', 'button');
  deleteElem.type = 'button';
  deleteElem.appendChild(deleteTxt);

  // <li data-no="2">
  // liElem.setAttribute('data-no', item.id);
  liElem.dataset.no = item._id.toString(); // custom attribute
  // <li data-no="2" data-done="false">
  // liElem.setAttribute('data-done', item.done);
  liElem.dataset.done = item.done.toString();

  /*
  <li data-no="2">
    <span>2</span>
  </li>
  */
  liElem.appendChild(noElem);

  /*
  <li data-no="2">
    <span>2</span>
    <span>샘플2</span>
  </li>
  */
  liElem.appendChild(titleElem);

  /*
  <li data-no="2">
    <span>2</span>
    <span>샘플2</span>
    <button type="button">삭제</button>
  </li>
  */
  liElem.appendChild(deleteElem);

  // 삭제 이벤트 추가
  deleteElem.addEventListener('click', function(event){
    // this: 이벤트를 등록한 요소(deleteElem)
    const parentLi = this.parentNode; // deleteElem의 부모인 <li>

    // const no = parentLi.getAttribute('data-no'); // <li data-no=""> 속성 추출
    const no = (parentLi as HTMLLIElement).dataset.no;
    removeItem(parseInt(no!));
  });

  // 완료/미완료 이벤트 추가
  titleElem.addEventListener('click', () => toggleDone(item._id));

  /*
  <li data-no="2" data-done="false">
    <span>2</span>
    <span>샘플2</span>
    <button type="button">삭제</button>
  </li>
  */
  return liElem;
}

// function getTodoItemElem(item){
//   const liElem = `
//     <li data-no="${item.id}" data-done="${item.done}">
//       <span>${item.id}</span>
//       <span>${item.title}</span>
//       <button type="button">삭제</button>
//     </li>`;
//   return liElem;
// }

/**
 * 추가 버튼 클릭 시 실행되는 이벤트 핸들러
 * 입력창의 값을 가져와 새로운 Todo 아이템을 추가
 */
function add(){
  const inputElem = document.querySelector('.todoinput > input') as HTMLInputElement;
  console.log(inputElem.value); // HTML 표준 속성은 DOM 객체의 동일한 속성으로 접근 가능
  if(inputElem.value.trim() !== ''){
    addItem(inputElem.value.trim());
    inputElem.value = '';
    inputElem.focus();
  }
}

/**
 * 새로운 Todo 아이템을 목록에 추가하는 함수
 * @param {string} title - 할일 제목
 */
function addItem(title: string){
  const todoListUl = document.querySelector('.todolist') as HTMLUListElement;
  const item = {
    id: ++lastNo,
    title,
    done: false
  };

  const todoLi = getTodoItemElem(item);
  // todoListUl.appendChild(todoLi); // 마지막에 추가
  todoListUl.insertBefore(todoLi, todoListUl.firstChild); // 처음에 추가
  // todoListUl.innerHTML = todoLi + todoListUl.innerHTML;
}

/**
 * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
 * Enter 키 입력 시 추가 기능 실행
 * @param {KeyboardEvent} event - 키보드 이벤트 객체
 */
function handleKeyup(event: KeyboardEvent){
  if(event.key === 'Enter') add();
}

/**
 * Todo 아이템 하나를 삭제하는 함수
 * @param {number} no - 삭제할 Todo 아이템의 번호(id)
 */
function removeItem(no: number){
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi?.remove();
}

/**
 * Todo 아이템의 완료/미완료 상태를 토글하는 함수
 * @param {number} no - 토글할 Todo 아이템의 번호(id)
 */
function toggleDone(no: number){
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`) as HTMLLIElement;
  // const beforeDone = targetLi.getAttribute('data-done'); // 'true'/'false'
  const beforeDone = targetLi.dataset.done;
  const isDone = beforeDone === 'true' ? false : true;
  const titleEl = targetLi.querySelector('span:last-of-type') as HTMLSpanElement;
  if(isDone){ // done이 true라면 <span>샘플2</span> -> <span><s>샘플2</s></span>
    // <s>
    const sElem = document.createElement('s');
    // <span></span>, <s>샘플2</s>
    sElem.appendChild(titleEl.firstChild!);
    // <span><s>샘플2</s></span>
    titleEl.appendChild(sElem);
  }else{ // done이 false라면 <span><s>샘플2</s></span> -> <span>샘플2</span>
    // <span><s></s>샘플2</span>
    titleEl.appendChild(titleEl.firstElementChild!.firstChild!);
    // <span>샘플2</span>
    titleEl.firstElementChild!.remove();
  }
  // <li data-done="true"> <-> <li data-done="false">
  // targetLi.setAttribute('data-done', isDone);
  targetLi.dataset.done = isDone.toString();
}

// '추가' 버튼 클릭
document.querySelector('.todoinput > button')!.addEventListener('click', add);
// input 요소에 키보드 입력
(document.querySelector('.todoinput > input') as HTMLInputElement)!.addEventListener('keyup', handleKeyup);
showList();