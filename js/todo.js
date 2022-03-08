const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
}

function deleteToDo(event) {  
  const li = event.target.parentElement;  //li는 이전부터 특정되어있었다. 
  console.log(li.id);   // id 값을 태그에 저장해 놓았으므로. 스토리지에서 어떤아이디 값을 가진넘을 지우면 되는지 알수 있다.!
  li.remove();  
}

function paintToDo(newTodoObj) {  // 오브젝트가 넘어옴.
  const li = document.createElement("li");
  li.id = newTodoObj.id;        // li를 그릴때 id값을 넣어준다. <li id="1646703316413"><span>aa</span><button>❌</button></li>
  const span = document.createElement("span");  
  span.innerText = newTodoObj.text;   // 텍스트 내용을 넣어준다. 
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
  const newTodoObj = {    // 지우는 값을 특정지우기 위해 오브젝트로 바꾼다. ID 값이 필요.
    id: Date.now(),  // 랜덤하고 겹치지 않는 아이디 값을 얻기 위해 
    text: newTodo,
  };
  toDos.push(newTodoObj);  // toDos = [{"id":1646703316413,"text":"aa"}] 로 저장됨.
  paintToDo(newTodoObj);   // 그리는것도 오브젝트를 넘겨준다. 
  saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); 
  toDos = parsedToDos;   
  parsedToDos.forEach(paintToDo);  
}




