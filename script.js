const result = document.querySelector(".result");
const humanScore = document.querySelector(".human-score");
const computedScore = document.querySelector(".computer-score");

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

let humanScoreNumber = 0;
let computedScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];

  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const disappearResult = () => {
  result.innerHTML = "";
};

const playTheGame = (human, machine) => {
  if (human === machine) {
    result.style.color = "#000000";
    result.innerHTML = "Empate!";
    setTimeout(disappearResult, 1500);
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.style.color = "#059105";
    result.innerHTML = "Você Ganhou!";
    setTimeout(disappearResult, 1800);
  } else {
    computedScoreNumber++;
    computedScore.innerHTML = computedScoreNumber;
    result.style.color = "#dd0a0a";
    result.innerHTML = "Você Perdeu!";
    setTimeout(disappearResult, 1800);
  }
};
