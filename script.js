'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game variables
let currentScore = 0;

// Start game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll dice
btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `./img/dice-${dice}.png`;
  // Check for rolled 1: if true switch player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Switch player
  }
});
