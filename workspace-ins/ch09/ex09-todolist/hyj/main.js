// 할일 목록을 화면에 출력
function showList() {
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

  // Todo 객체를 li 요소로 변환
  const todoListElem = todoList.map((item) => {
    return getTodoItemElem(item);
  });

  const todoListUl = document.querySelector(".todolist");
  todoListElem.forEach((itemLi) => {
    todoListUl.appendChild(itemLi);
  });
}

/**
 * Todo 아이템 객체를 전달받아 화면에 표현하는 li 요소를 생성하는 함수
 * @param {Object} item Todo 아이템 객체 { id: number, title: string, done: boolean }
 * @return {HTMLLIElement} 생성된 Todo 아이템의 DOM 요소
 */
function getTodoItemElem(item) {
  // item -> {id: number, title: string, done: boolean}

  const liElem = document.createElement("li");

  // 번호, 제목 span
  const numElem = document.createElement("span");
  numElem.textContent = item.id;

  const titleElem = document.createElement("span");
  if (item.done) {
    const sElem = document.createElement("s");
    sElem.textContent = item.title;
    titleElem.appendChild(sElem);
  } else {
    titleElem.textContent = item.title;
  }

  // 버튼 그룹
  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  // 즐겨찾기 버튼
  const starElem = document.createElement("button");
  starElem.type = "button";
  starElem.className = "star-btn";
  starElem.textContent = "☆";

  // 삭제 버튼
  const deleteElem = document.createElement("button");
  deleteElem.type = "button";
  deleteElem.className = "delete-btn";
  deleteElem.textContent = "삭제";

  // 버튼 그룹에 버튼 추가
  btnGroup.appendChild(starElem);
  btnGroup.appendChild(deleteElem);

  // li에 span + 버튼 그룹 추가
  liElem.appendChild(numElem);
  liElem.appendChild(titleElem);
  liElem.appendChild(btnGroup);

  liElem.setAttribute("data-no", item.id);
  liElem.setAttribute("data-done", item.done);

  // todolist에 추가
  document.querySelector(".todolist").appendChild(liElem);

  // 즐겨찾기 이벤트 추가
  starElem.addEventListener("click", function () {
    const li = this.closest("li"); // 버튼이 속한 li
    const bookmarkUl = document.querySelector(".bookmark");
    const todoUl = document.querySelector(".todolist");
    // 즐겨찾기 여부 토글
    if (li.parentElement === bookmarkUl) {
      // 이미 즐겨찾기에 있으면 todolist로 이동
      todoUl.appendChild(li);
      this.textContent = "☆"; // 버튼 표시 변경 (선택 사항)
    } else {
      // todolist에 있으면 bookmark로 이동
      bookmarkUl.appendChild(li);
      this.textContent = "★"; // 버튼 표시 변경
    }
  });

  // 삭제 이벤트 추가
  deleteElem.addEventListener("click", function () {
    // this : 클릭한 삭제 버튼
    const parentLi = this.parentNode.parentNode; // div.btn-group → li
    const num = parentLi.getAttribute("data-no");

    // li 제거
    parentLi.remove();

    removeItem(num);
  });

  // 완료/미완료 이벤트 추가
  titleElem.addEventListener("click", () => toggleDone(item.id));

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
  const bookmarkUl = document.querySelector(".bookmark");
  const totalItems = todoListUl.children.length + bookmarkUl.children.length;

  const newItem = {
    id: totalItems + 1 + ".\u00A0",
    title: title,
    done: false,
  };

  const newItemLi = getTodoItemElem(newItem);
  todoListUl.appendChild(newItemLi);
}

/**
 * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
 * Enter 키 입력 시 추가 기능 실행
 * @param {KeyboardEvent} event - 키보드 이벤트 객체
 */
function handleKeyup(event) {
  if (event.key === "Enter") {
    add();
  }
}

/**
 * Todo 아이템을 목록에서 삭제하는 함수
 * @param {number} num - 삭제할 Todo 아이템 번호(id)
 */
function removeItem(num) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${num}"]`);
  targetLi?.remove();
}

/**
 * Todo 아이템의 완료/미완료 상태를 토글하는 함수
 * @param {number} num - 토글할 Todo 아이템 번호(id)
 */
function toggleDone(num) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${num}"]`);
  const beforeDone = targetLi.getAttribute("data-done") === "true";
  const isDone = !beforeDone;
  const titleElem = targetLi.querySelector("span:last-of-type");
  if (isDone) {
    const sElem = document.createElement("s"); // <s> 요소 생성
    sElem.appendChild(titleElem.firstChild); // 기존 제목 텍스트를 <s> 요소로 이동
    titleElem.appendChild(sElem); // 제목을 <s> 요소로 감싸기
  } else {
    titleElem.appendChild(titleElem.firstElementChild.firstChild); // <s> 요소에서 텍스트를 꺼내기
    titleElem.firstElementChild.remove(); // <s> 요소 제거
  }
  targetLi.setAttribute("data-done", isDone);
}

// '추가' 버튼 클릭
document.querySelector(".todoinput > button").addEventListener("click", add);
// input 요소에 키보드 입력
document
  .querySelector(".todoinput > input")
  .addEventListener("keyup", handleKeyup);

showList();
