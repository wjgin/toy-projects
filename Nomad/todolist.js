const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteBtn(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
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
    delBtn.addEventListener("click", deleteBtn);
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
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();