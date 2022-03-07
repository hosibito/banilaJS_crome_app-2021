const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);  

//"1".padStart(3,"0")  => 문자열이 지정된거보다 작으면 앞에 지정된 문자열을 추가한다.
//             2 보다 작으면 앞에 0 을 추가한다.   =>  "002" 가 된다. 
//"1".padEnd(3,"0")  => "200" 이된다. 