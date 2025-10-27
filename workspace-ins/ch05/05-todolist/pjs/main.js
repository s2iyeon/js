const todoList = [
  {
    id: 1,
    title: "JavaScript 공부",
    done: true,
  },
  {
    id: 4,
    title: "React 공부",
    done: false,
  },
  {
    id: 3,
    title: "바닐라 프로젝트",
    done: false,
  },
  {
    id: 2,
    title: "TypeScript 공부",
    done: false,
  },
  {
    id: 5,
    title: "Final 프로젝트",
    done: true,
  },
];

// 배열의 Todo 아이템 id중 가장 큰값
let lastNo = Math.max(...todoList.map((item) => item.id));

// 할일 목록을 화면에 출력
function showList() {
  // Todo 객체를 li 요소로 변환
  const todoListElem = todoList.map((item) => getTodoItemElem(item));

  const todoListUl = document.querySelector(".todolist");
  todoListElem.forEach((itemLi) => todoListUl.appendChild(itemLi));
}

/**
 * Todo 아이템 객체를 전달받아 화면에 표현하는 li 요소를 생성하는 함수
 * @param {Object} item Todo 아이템 객체 { id: number, title: string, done: boolean }
 * @returns {HTMLLIElement} 생성된 Todo 아이템의 DOM 요소
 */
function getTodoItemElem(item) {
  // <li>
  const liElem = document.createElement("li");
  // <span>
  const noElem = document.createElement("span");
  // <span>
  const titleElem = document.createElement("span");
  // <s>

  // <button>
  const deleteElem = document.createElement("button");

  const upBtn = document.createElement("button");
  const downBtn = document.createElement("button");

  // 2
  const noTxt = document.createTextNode(item.id);
  // 샘플2
  const titleTxt = document.createTextNode(item.title);
  // 삭제
  const deleteTxt = document.createTextNode("삭제");

  // <span>2</span>
  noElem.appendChild(noTxt);

  if (item.done) {
    // 완료
    const sElem = document.createElement("s");
    // <s>샘플2</s>
    sElem.appendChild(titleTxt);
    // <span><s>샘플2</s></span>
    titleElem.appendChild(sElem);
  } else {
    // 미완료
    titleElem.appendChild(titleTxt);
  }

  deleteElem.type = "button";
  deleteElem.appendChild(deleteTxt);

  upBtn.type = "button";
  upBtn.textContent = "↑";
  downBtn.type = "button";
  downBtn.textContent = "↓";

  liElem.dataset.no = item.id;
  // <li data-no="2" data-done="false">

  liElem.dataset.done = item.done;

  liElem.appendChild(noElem);

  liElem.appendChild(titleElem);

  liElem.appendChild(deleteElem);

  liElem.appendChild(upBtn);
  liElem.appendChild(downBtn);

  // 삭제 이벤트 추가
  deleteElem.addEventListener("click", function (event) {
    const parentLi = event.currentTarget.parentNode; // deleteElem의 부모인 <li>

    // const no = parentLi.getAttribute('data-no'); // <li data-no=""> 속성 추출
    const no = parentLi.dataset.no;
    removeItem(no);
  });

  // 위/아래 버튼 클릭 시 순서가 바뀌는 이벤트 등록

  // 완료/미완료 이벤트 추가
  titleElem.addEventListener("click", () => toggleDone(item.id));

  // 위로/아래로 이동 (이동 후 재번호)
  upBtn.addEventListener("click", () => move(item.id, -1));
  downBtn.addEventListener("click", () => move(item.id, +1));

  return liElem;
}

/**
 * 추가 버튼 클릭 시 실행되는 이벤트 핸들러
 * 입력창의 값을 가져와 새로운 Todo 아이템을 추가
 */
function add() {
  const inputElem = document.querySelector(".todoinput > input");
  console.log(inputElem.value); // HTML 표준 속성은 DOM 객체의 동일한 속성으로 접근 가능
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value.trim());
    inputElem.value = "";
    inputElem.focus();
  }
}

/**
 * 새로운 Todo 아이템을 목록에 추가하는 함수
 * @param {string} title - 할일 제목
 */
function addItem(title) {
  const todoListUl = document.querySelector(".todolist");
  const item = {
    id: ++lastNo,
    title,
    done: false,
  };

  const todoLi = getTodoItemElem(item);
  todoListUl.insertBefore(todoLi, todoListUl.firstChild); // 처음에 추가
}

/**
 * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
 * Enter 키 입력 시 추가 기능 실행
 * @param {KeyboardEvent} event - 키보드 이벤트 객체
 */
function handleKeyup(event) {
  if (event.key === "Enter") add();
}

/**
 * Todo 아이템 하나를 삭제하는 함수
 * @param {number} no - 삭제할 Todo 아이템의 번호(id)
 */

// 삭제한 리스트들을 저장하는 빈 스택 생성
const deletedStack = [];

function removeItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);

  // 복구하기 위해 removeItem 코드 수정

  deletedStack.push(targetLi);

  targetLi?.remove();
}

/**
 * Todo 삭제한 리스트를 복구하는 함수
 *
 */

function restore() {
  // 스택 비었을 때
  if (deletedStack.length === 0) return;

  // 최근에 들어왔던 리스트를 pop 시켜줌
  const restoreLi = deletedStack.pop();
  const ul = document.querySelector(".todolist");
  ul.appendChild(restoreLi);
}

// 복구 버튼에 복구하는 이벤트 생성
document.querySelector(".restore-btn").addEventListener("click", restore);

// 정렬 버튼에 정렬하는 이벤트 생성
document.querySelector(".sort-btn").addEventListener("click", function () {
  const ul = document.querySelector(".todolist");
  const ulArr = Array.from(ul.children);
  // 오름차순 정렬(id의 숫자는 문자열이기 때문에 숫자로 변환시킨 다음 정렬해준다.)
  ulArr.sort((a, b) => Number(a.dataset.no) - Number(b.dataset.no));

  // 정렬되어 있는 ulArr의 요소들을 순회하며 ul 요소의 자식 요소로 추가
  ulArr.forEach((itemLi) => ul.appendChild(itemLi));
});

/**
 * Todo 아이템의 완료/미완료 상태를 토글하는 함수
 * @param {number} no - 토글할 Todo 아이템의 번호(id)
 */
function toggleDone(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);

  const beforeDone = targetLi.dataset.done;
  const isDone = beforeDone === "true" ? false : true;
  const titleEl = targetLi.querySelector("span:last-of-type");
  if (isDone) {
    const sElem = document.createElement("s");

    sElem.appendChild(titleEl.firstChild);

    titleEl.appendChild(sElem);
  } else {
    titleEl.appendChild(titleEl.firstElementChild.firstChild);

    titleEl.firstElementChild.remove();
  }

  targetLi.dataset.done = isDone;
}

// '추가' 버튼 클릭
document.querySelector(".todoinput > button").addEventListener("click", add);
// input 요소에 키보드 입력
document
  .querySelector(".todoinput > input")
  .addEventListener("keyup", handleKeyup);
showList();

/**
 * Todo 리스트의 순서를 바꾸는 함수
 * @param {number} no 리스트의 id
 * @param {number} num 위/아래로 움직일 칸 수
 */

function move(no, num) {
  const ulLi = document.querySelector(".todolist");
  const ulArr = Array.from(ulLi.children);
  const li = ulLi.querySelector(`li[data-no="${no}"]`);

  const index = ulArr.indexOf(li);

  if (num < 0) {
    if (index === 0) return;
    const pre = ulArr[index + num];
    ulLi.insertBefore(li, pre);
  } else {
    const next = ulArr[index + num];
    ulLi.insertBefore(next, li);
  }
}
