const button = document.getElementById("click-button");
const endGameMessage = document.querySelector(".endgameMessage");


const moveButton = () => {
  let x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
  let y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}


   
const showResult = () => {
  endGameMessage.style.display = 'block';
  button.style.display = 'none';
  clearInterval(gameIntervall);
}

let gameIntervall = setInterval(moveButton, 1000);
button.addEventListener("click",showResult);


  

