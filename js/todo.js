const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
}

function deleteToDo(event) {  
  const li = event.target.parentElement;  
  li.remove(); 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  //배열 필터!! 하단의 개념 파악할것. 
  saveToDos();
}

function paintToDo(newTodoObj) {  
  const li = document.createElement("li");
  li.id = newTodoObj.id;       
  const span = document.createElement("span");  
  span.innerText = newTodoObj.text;   
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
  const newTodoObj = {   
    id: Date.now(),  
    text: newTodo,
  };
  toDos.push(newTodoObj); 
  paintToDo(newTodoObj);  
  saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); 
  toDos = parsedToDos;   
  parsedToDos.forEach(paintToDo);  
}

// function sexyFilter(item){
//   //true가 반환된 item만 배열에서 유지된다. 
//   return item !== 3
// }

// [1,2,3,4].filter(sexyFilter)



