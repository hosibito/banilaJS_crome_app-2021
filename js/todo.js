const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); 
  // 로컬 스토리지에 저장을 한다.
  // JSON.stringify(toDos) 는 JSON 형식의 데이터를 string 형식으로바꿔준다. 
  // [1,2,3] => ["1","2","3"]  같이. 
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
  toDos.push(newTodo); // 목록에 추가한다. 
  paintToDo(newTodo);  // 화면에 표시
  saveToDos();  // 목록을 저장한다. 
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

