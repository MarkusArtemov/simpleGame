const button = document.getElementById("click-button");
const endGameMessage = document.querySelector(".endgameMessage");
const restartButton = document.getElementById("restart-button");


const intervals = [];

const moveButton = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}
 
const showResult = () => {
  endGameMessage.style.display = 'block';
  restartButton.style.display = 'block';
  button.style.display = 'none';
  clearInterval(gameInterval);
}

const restartGame = () => {
  endGameMessage.style.display = 'none';
  restartButton.style.display = 'none';
  button.style.display = 'block';
  setUpInterval();
}

const setUpInterval = () => {
  intervals.forEach(interval => clearInterval(interval));
  intervals.length = 0;
  const gameInterval = setInterval(moveButton, 1000);
  intervals.push(gameInterval);
}


const gameInterval = setInterval(moveButton, 1000);
intervals.push(gameInterval);
button.addEventListener("click",showResult);
restartButton.addEventListener("click",restartGame);