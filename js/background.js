const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");  // <img> 태그가 만들어진다. 

bgImage.src = `img/${chosenImage}`;  // <img src="img/1.jpg"> 태그에 src 추가한다. 
bgImage.classList.add("bgImage")

document.body.appendChild(bgImage);  // body 태그안에 만들어진 태그 마지막에  추가한다. 
// document.body.prepend(bgImage);  // body 태그안에 만들어진 태그 맨앞에  추가한다. 
