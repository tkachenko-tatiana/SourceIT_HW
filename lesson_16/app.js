/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let activePlayer = 1; 
let currentScore = 0;
let finalScores = [0, 0];
let isGameOver;
let finalScore;
init();

// get random number from 0 to 6
const getDiceScore = () => Math.ceil(Math.random() * 6);

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (isGameOver) return;
  // get random
  const diceScore = getDiceScore();

  // display dice
  const dice = document.querySelector('.dice');
  dice.src = `dice-${diceScore}.png`;
  dice.style.display = '';

  // change current score
  if(diceScore !== 1) {
    currentScore += diceScore;
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore
  } else {
    goToNextPlayer()
  }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(isGameOver) return;
  
  // add current score to final
  finalScores[activePlayer] += currentScore;
  //display final score
  document.getElementById(`score-${activePlayer}`).textContent = finalScores[activePlayer];
 
  if(finalScores[activePlayer] > finalScore){
    // winner
    document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
    // stop Game
    isGameOver = true;
  } else {
    goToNextPlayer();
  }
  
  if(isGameOver){
    document.querySelector(`.player-${activePlayer}-wins`).textContent++;
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function goToNextPlayer() {
  currentScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
}

function init() {
  // reset winner
  document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
  document.getElementById(`name-${activePlayer}`).textContent = `Player ${activePlayer + 1}`;
  // reset scores
  activePlayer = activePlayer ? 0 : 1;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  currentScore = 0;
  finalScores = [0, 0]
  isGameOver = false;

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  // hide dice
  const dice = document.querySelector('.dice');
  dice.style.display = 'none';
}

// Enter the final which is ends the game
document.querySelector('.final-score').addEventListener('change', function (){
  finalScore = +document.querySelector('.final-score').value;
});