const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  //console.log(event.target)  을 찍어봐라!. 자세한 정보가 나온다. 
  const li = event.target.parentElement; // 타겟의 부모 엘리멘트를 특정짓는다.(li)
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
//todo 를 받아오면 버튼과 함게 추가한다. (버튼은 이벤트를 연결해준다. )


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

