/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let activePlayer = 0,
  currentScore,
  finalScores,
  fixFinalScore,
  amountWins = [0,0],
  isGame;

init();

const generateRandomDice = () => Math.floor(Math.random() * 6) + 1;

// добавить функционал
// 1. до скольки играем (ввод пользователя)
// 2. количество побед

// HW ===========

document.querySelector('.btn-final-score').addEventListener('click', () =>{
  fixFinalScore = document.getElementById('finalScore').value;
  if(fixFinalScore <= 6){
    alert('Введите число больше 6, желательно от 20')
    return 0;
  }
  document.querySelector('.modal-final-score').style.display = 'none';
});

document.querySelector('.btn-reset').addEventListener('click', () => {
  amountWins = [0,0];
  document.getElementById('wins-0').textContent = 0;
  document.getElementById('wins-1').textContent = 0;
});

// ===========

document.querySelector(".btn-roll").addEventListener("click", () => {
  if (isGame) {
    // generate random dice
    const dice = generateRandomDice();

    // display dice
    const diceDom = document.querySelector(".dice");
    diceDom.src = `dice-${dice}.png`;
    diceDom.style.display = '';

    // change current score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current-${activePlayer}`
      ).textContent = currentScore;
    } else {
      goToNextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  if (isGame) {
    // add current to finel
    finalScores[activePlayer] = currentScore + finalScores[activePlayer];
    document.getElementById(`score-${activePlayer}`).textContent =
      finalScores[activePlayer];

    if (finalScores[activePlayer] > fixFinalScore) {
      // winner
      document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
      document.getElementById(`name-${activePlayer}`).textContent = "Winner!";
      // amount Wins 
      amountWins[activePlayer]++     
      document.getElementById(`wins-${activePlayer}`).textContent = amountWins[activePlayer];
      // stop functionality
      isGame = false;
    } else {
      // next player
      goToNextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function goToNextPlayer() {
  currentScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = 0; 
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
} 

function init() {
  document.querySelector(`.player-${activePlayer}-panel`).classList.remove("winner");
  document.getElementById(`name-${activePlayer}`).textContent = `Player ${activePlayer + 1}`;
  document.querySelector('.player-0-panel').classList.remove("active");
  document.querySelector('.player-1-panel').classList.remove("active");
  document.querySelector('.player-0-panel').classList.add("active");

  activePlayer = 0;
  currentScore = 0;
  finalScores = [0, 0];
  isGame = true;
  // Reser scores
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
}


