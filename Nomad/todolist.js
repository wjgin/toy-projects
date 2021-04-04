const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";
const toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    console.log(text);
    const delBtn = document.createElement("button");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText= "X";
    span.innerText = text;
    li.appendChild(delBtn); // li 안에 deBtn을 넣어준다.
    li.appendChild(span); // appendChild는 ()안의 내용을 넣어줌
    li.id = newId; 
    toDoList.appendChild(li);
    const toDosObj = {
        text: text, // 두번째 text는 value 값
        id: newId // 비어있는 array일 때, id = 0
    };
    toDos.push(toDosObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if (loadedtoDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();