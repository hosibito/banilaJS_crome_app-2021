const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  // 변경 가능하게 한다. 

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
}

function deleteToDo(event) {  
  const li = event.target.parentElement; 
  li.remove();  
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");  
  span.innerText = newTodo;
  const button = document.createElement("button");  
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);  
  saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); 
  toDos = parsedToDos;   // 로컬스토리지에 있는것을 내부데이터로 불러온다. 
  parsedToDos.forEach(paintToDo);  // 각각의 데이터를 화면에 뿌려준다.
}


