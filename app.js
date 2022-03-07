const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();  // 서브밋 클릭시 데이터 전송하고 새로고침 해야하나 막았다.
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();  // 링크클릭시 링크로 가야하나 막았다.
    console.log(event);    
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick)

// 1. form에서 submit 가 들어가면 
//     기본 - 폼 데이터를 전송하고 새로고침을한다.
// 2. EventListener 는 기본적으로 이벤트에 대한 정보를 제공한다.
//     이는 function 의 첫번째 인자로 전달돤다. (생략가능, 생략하면 안받는다. )
//     이 이벤트의 대한 정보로 조작이 가능하다. (ex : event.preventDefault(); 기본 동작을 막는다. )