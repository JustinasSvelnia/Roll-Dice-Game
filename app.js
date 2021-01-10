// Variables
const rollDiceButton = document.querySelector("#rollBtn");
const resetGameButton = document.querySelector("#resetBtn");
const gameMessage = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Event Listeners
rollDiceButton.addEventListener("click", rollADice);
resetGameButton.addEventListener("click", resetGame);

// Functions
// Roll a dice function
function rollADice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    gameMessage.textContent = "Player 2 Turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    gameMessage.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    gameMessage.textContent = "Player 1 has won!! 🥳";
    showButtons();
  } else if (player2Score >= 20) {
    gameMessage.textContent = "Player 2 has won!! 🎉";
    showButtons();
  }

  player1Turn = !player1Turn;
}

// Show roll/reset buttons function
function showButtons() {
  rollDiceButton.style.display = "none";
  resetGameButton.style.display = "inline-block";
}
// Reset Game Function
function resetGame() {
  message.textContent = "Player 1 Turn";
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  resetBtn.style.display = "none";
  rollBtn.style.display = "inline-block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
