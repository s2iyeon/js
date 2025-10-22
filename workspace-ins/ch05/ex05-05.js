// 할일 목록을 화면에 출력
function showList(){
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

  // Todo 객체를 li 요소로 변환
  const todoListElem = todoList.map(item => getTodoItemElem(item));

  const todoListUl = document.querySelector('.todolist');
  todoListElem.forEach(itemLi => todoListUl.appendChild(itemLi));
}

/**
 * Todo 아이템 객체를 전달받아 화면에 표현하는 li 요소를 생성하는 함수
 * @param {Object} item Todo 아이템 객체 { id: number, title: string, done: boolean }
 * @returns {HTMLLIElement} 생성된 Todo 아이템의 DOM 요소
 */
function getTodoItemElem(item){
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
  const noTxt = document.createTextNode(item.id);
  // 샘플2
  const titleTxt = document.createTextNode(item.title);
  // 삭제
  const deleteTxt = document.createTextNode('삭제');

  // <span>2</span>
  noElem.appendChild(noTxt);
  // <span>샘플2</span>
  titleElem.appendChild(titleTxt);
  // <button type="button">삭제</button>
  deleteElem.setAttribute('type', 'button');
  deleteElem.appendChild(deleteTxt);

  // <li data-no="2">
  liElem.setAttribute('data-no', item.id);

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
  deleteElem.addEventListener('click', function(){
    // this: 이벤트를 등록한 요소(<button>)
    const parentLi = this.parentNode; // <button>의 부모인 <li>
    const no = parentLi.getAttribute('data-no'); // <li data-no=""> 속성 추출
    removeItem(no);
  });

  /*
  <li data-no="2">
    <span>2</span>
    <span>샘플2</span>
    <button type="button">삭제</button>
  </li>
  */
  return liElem;
}

/**
 * 추가 버튼 클릭 시 실행되는 이벤트 핸들러
 * 입력창의 값을 가져와 새로운 Todo 아이템을 추가
 */
function add(){
  const inputElem = document.querySelector('.todoinput > input');
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
function addItem(title){
  const todoListUl = document.querySelector('.todolist');
  const item = {
    id: todoListUl.children.length + 1,
    title,
    done: false
  };

  const todoLi = getTodoItemElem(item);
  // todoListUl.appendChild(todoLi); // 마지막에 추가
  todoListUl.insertBefore(todoLi, todoListUl.firstChild); // 처음에 추가
}

/**
 * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
 * Enter 키 입력 시 추가 기능 실행
 * @param {KeyboardEvent} event - 키보드 이벤트 객체
 */
function handleKeyup(event){
  if(event.key === 'Enter') add();
}

/**
 * Todo 아이템 하나를 삭제하는 함수
 * @param {number} no - 삭제할 Todo 아이템의 번호(id)
 */
function removeItem(no){
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi?.remove();
}

// '추가' 버튼 클릭
document.querySelector('.todoinput > button').addEventListener('click', add);
// input 요소에 키보드 입력
document.querySelector('.todoinput > input').addEventListener('keyup', handleKeyup);
showList();