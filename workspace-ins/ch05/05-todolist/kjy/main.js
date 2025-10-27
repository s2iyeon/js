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
    id: 8,
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

let lastno = Math.max(...todoList.map((item) => item.id));

function showList() {
  const todoListElem = todoList.map((item) => {
    return getTodoItemElem(item);
  });
  const todoListUl = document.querySelector(".todolist");
  todoListElem.forEach((itemLi) => todoListUl.appendChild(itemLi));
}

function getTodoItemElem(item) {
  const liElem = document.createElement("li");
  const noElem = document.createElement("span");
  const titleElem = document.createElement("span");
  const deleteElem = document.createElement("button");
  const editElem = document.createElement("button");

  const noText = document.createTextNode(item.id + ". ");
  const titleText = document.createTextNode(item.title);
  const deleteText = document.createTextNode("삭제");
  const editText = document.createTextNode("수정");

  noElem.appendChild(noText);

  if (item.done) {
    const sElem = document.createElement("s");
    sElem.appendChild(titleText);
    titleElem.appendChild(sElem);
  } else {
    titleElem.appendChild(titleText);
  }

  deleteElem.setAttribute("type", "button");
  deleteElem.appendChild(deleteText);
  editElem.setAttribute("type", "button");
  editElem.appendChild(editText);

  liElem.dataset.no = item.id;
  liElem.dataset.done = item.done;

  liElem.appendChild(noElem);
  liElem.appendChild(titleElem);
  liElem.appendChild(deleteElem);
  liElem.appendChild(editElem);

  deleteElem.addEventListener("dblclick", function (event) {
    const parentLi = event.currentTarget.parentNode;
    const no = parentLi.dataset.no;
    removeItem(no);
  });

  deleteElem.addEventListener("click", () => toggleDone(item.id));

  // 수정 기능 추가
  editElem.addEventListener("click", (event) => {
    const parentLi = event.currentTarget.parentNode;
    const titleSpan = parentLi.querySelector("span:last-of-type");

    const isEditing = parentLi.dataset.editing === "true";

    if (!isEditing) {
      const currentTitle = titleSpan.innerText;
      const inputElem = document.createElement("input");
      inputElem.type = "text";
      inputElem.value = currentTitle;
      titleSpan.innerHTML = "";
      titleSpan.appendChild(inputElem);
      inputElem.focus();
      editElem.textContent = "저장";
      parentLi.dataset.editing = "true";
    } else {
      const inputElem = titleSpan.querySelector("input");
      const newTitle = inputElem.value.trim();
      if (newTitle !== "") {
        titleSpan.innerHTML = "";
        titleSpan.appendChild(document.createTextNode(newTitle));
        parentLi.dataset.editing = "false";
        editElem.textContent = "수정";
      } else {
        alert("제목을 입력하세요!");
        inputElem.focus();
      }
    }
  });

  return liElem;
}

function add() {
  const inputElem = document.querySelector(".todoinput > input");
  console.log(inputElem.value);
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value.trim());
    inputElem.value = "";
    inputElem.focus();
  }
}

function addItem(title) {
  const todoListUl = document.querySelector(".todolist");
  const item = {
    id: ++lastno,
    title,
    done: false,
  };

  const todoLi = getTodoItemElem(item);
  // todoListUl.appendChild(todoLi);
  todoListUl.insertBefore(todoLi, todoListUl.firstChild);
}

function handleKeyup(event) {
  if (event.key === "Enter") add();
}

function removeItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi.remove();
}

function toggleDone(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);

  const beforeDone = targetLi.dataset.done;
  const isDone = !(beforeDone === "true");
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

document.querySelector(".todoinput > button").addEventListener("click", add);

document
  .querySelector(".todoinput > input")
  .addEventListener("keyup", handleKeyup);
showList();