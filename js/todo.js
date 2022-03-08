const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
}

function deleteToDo(event) {
  //console.log(event.target)  
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

const savedToDos = localStorage.getItem(TODOS_KEY); // 스토리지에서 가져온다.

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // 가져온스트링을 데이터로 변환
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}

// function say_forEach(item) {
//   console.log("this is the turn of ", item);
// }
// parsedToDos.forEach(say_forEach);
