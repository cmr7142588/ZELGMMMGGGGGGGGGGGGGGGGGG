const options = ["piedra", "papel", "tijera"];

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (playerSelection === "papel" && computerSelection === "tijera" ||
             playerSelection === "tuerra" && computerSelection === "piedra" ||
             playerSelection === "piedra" && computerSelection === "papel") {
    return "Ganaste!";
  } else {
    return "Perdiste :(";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("result").textContent = result;
  });
});