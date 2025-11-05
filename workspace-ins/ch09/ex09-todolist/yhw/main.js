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
let maxNo = Math.max(...todoList.map((item) => item.id));

function showList() {
  const todoListElem = todoList.map((item) => getTodoItemElem(item));
  const todoListUl = document.querySelector(".todolist");
  todoListElem.forEach((item) => {
    todoListUl.appendChild(item);
  });
}

function getTodoItemElem(item) {
  /*
  <li data-no="1">
    <span>1</span>
    <span>샘플1</span>
    <button type="button">삭제</button>
  </li>
  */
  const liElem = document.createElement("li");
  const noElem = document.createElement("span");
  const titleElem = document.createElement("span");
  const deleteElem = document.createElement("button");
  const detailsElem = document.createElement("details");
  const summaryElem = document.createElement("summary");
  const textareaElem = document.createElement("textarea");

  const noTxt = document.createTextNode(item.id);
  const titleTxt = document.createTextNode(item.title);
  const deleteTxt = document.createTextNode("삭제");

  noElem.appendChild(noTxt);

  if (item.done) {
    const sElem = document.createElement("s");
    sElem.appendChild(titleTxt);
    titleElem.appendChild(sElem);
  } else {
    titleElem.appendChild(titleTxt);
  }

  deleteElem.type = "button";
  deleteElem.appendChild(deleteTxt);

  liElem.dataset.no = item.id;
  liElem.dataset.done = item.done;

  summaryElem.appendChild(noElem);
  summaryElem.appendChild(titleElem);
  summaryElem.appendChild(deleteElem);

  detailsElem.appendChild(summaryElem);
  detailsElem.appendChild(textareaElem);
  liElem.appendChild(detailsElem);

  // 별
  const starBtnElem = document.createElement("button");
  const SVG_NS = "http://www.w3.org/2000/svg";
  const svgElem = document.createElementNS(SVG_NS, "svg");
  const polElem = document.createElementNS(SVG_NS, "polygon");

  starBtnElem.type = "button";
  svgElem.setAttribute("width", "20");
  svgElem.setAttribute("height", "16");
  svgElem.setAttribute("viewBox", "0 0 100 100");
  svgElem.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  polElem.setAttribute(
    "points",
    "50,0 61,35 98,35 68,57 79,90 50,70 21,90 32,57 2,35 39,35"
  );
  polElem.setAttribute("fill", "white");
  polElem.setAttribute("stroke", "black");
  polElem.setAttribute("stroke-width", "2");
  polElem.setAttribute("stroke-linejoin", "round");

  textareaElem.setAttribute("rows", "5");
  textareaElem.setAttribute("cols", "30");

  svgElem.appendChild(polElem);
  starBtnElem.appendChild(svgElem);
  summaryElem.appendChild(starBtnElem);

  deleteElem.addEventListener("click", function (event) {
    const deleteParent = event.currentTarget.parentNode.parentNode.parentNode;

    const no = deleteParent.dataset.no;
    removeItem(no);
  });

  titleElem.addEventListener("click", (event) => {
    event.preventDefault();
    toggleDone(item.id);
  });

  starBtnElem.addEventListener("click", (event) => {
    const starParent = event.currentTarget.parentNode.parentNode.parentNode;
    const no = starParent.dataset.no;

    toggleStar(no);
  });

  return liElem;
}

function toggleStar(no) {
  const toggleStarLi = document.querySelector(
    `.todolist > li[data-no='${no}'] > details > summary > button:last-of-type > svg > polygon`
  );
  const isColor = toggleStarLi.getAttribute("fill");
  if (isColor === "white") {
    toggleStarLi.setAttribute("fill", "gold");
  }
  if (isColor === "gold") {
    toggleStarLi.setAttribute("fill", "white");
  }
}

function toggleDone(no) {
  const toggleLi = document.querySelector(`.todolist > li[data-no='${no}']`);
  const isDone = toggleLi.dataset.done === "true" ? true : false;
  const titleElem = toggleLi.querySelector("span:last-of-type");

  if (isDone) {
    // <span><s>샘플1</s></span> = > <span>샘플1</span>
    titleElem.appendChild(titleElem.firstElementChild.firstChild);
    titleElem.firstElementChild.remove();
  } else {
    //<span>샘플1</span> => <span><s>샘플1</s></span>
    const sElem = document.createElement("s");
    sElem.appendChild(titleElem.firstChild);
    titleElem.appendChild(sElem);
  }

  toggleLi.dataset.done = !isDone;
}

function removeItem(no) {
  const deleteLi = document.querySelector(`.todolist > li[data-no='${no}']`);
  deleteLi?.remove();
}

function add() {
  const inputElem = document.querySelector(".todoinput > input");
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value.trim());
    inputElem.value = "";
    inputElem.focus();
  }
}

function addItem(title) {
  const item = {
    id: ++maxNo,
    title,
    done: false,
  };

  const todoListLi = getTodoItemElem(item);
  const todoListUl = document.querySelector(".todolist");

  todoListUl.insertBefore(todoListLi, todoListUl.firstChild);
}

function handleKeyup(event) {
  if (event.key === "Enter") add();
}

document.querySelector(".todoinput > button").addEventListener("click", add);
document
  .querySelector(".todoinput > input")
  .addEventListener("keyup", handleKeyup);

showList();