//***** GAME LOGIC ******

const handSign = ["rock", "paper", "scissors"];

//***** GAME LOGIC ****** CPU

const cpuSign = () => handSign[Math.floor(Math.random() * 3)];

const cpuIcon = document.querySelector(".btn-cpu");

//***** GAME LOGIC ****** PLAYER

const playerButton = document.querySelectorAll(".btn");

let playerCounter = 0;
let cpuCounter = 0;

playerButton.forEach((pButton) => {
  pButton.addEventListener("click", () => {
    const cpuSelection = cpuSign();
    const playerSelection = pButton.id;

    const playerScore = document.querySelector(".playerScore");
    const cpuScore = document.querySelector(".cpuScore");
    const matchInfo = document.querySelector(".versus");
    const icon =
      cpuSelection === "rock" ? "👊🏻" : cpuSelection === "paper" ? "🖐🏻" : "✌🏻";

    function playRound(cpuSelection, playerSelection) {
      cpuIcon.textContent = icon;

      if (cpuSelection === playerSelection) {
        matchInfo.textContent = "DRAW!";
      } else if (cpuSelection === "paper" && playerSelection === "rock") {
        cpuCounter++;
        matchInfo.textContent = "CPU WIN!";
      } else if (cpuSelection === "rock" && playerSelection === "scissors") {
        cpuCounter++;
        matchInfo.textContent = "CPU WIN!";
      } else if (cpuSelection === "scissors" && playerSelection === "paper") {
        cpuCounter++;
        matchInfo.textContent = "CPU WIN!";
      } else {
        playerCounter++;
        matchInfo.textContent = "YOU WIN!";
      }

      if (playerCounter === 5 || cpuCounter === 5) {
        playerCounter = 0;
        cpuCounter = 0;
        matchInfo.textContent += " 5 TIMES! PLAY AGAIN?";
      }

      playerScore.textContent = `PLAYER SCORE: ${playerCounter}`;
      cpuScore.textContent = `CPU SCORE: ${cpuCounter}`;
    }

    playRound(cpuSelection, playerSelection);
  });
});
