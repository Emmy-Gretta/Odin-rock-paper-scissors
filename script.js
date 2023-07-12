// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Make playerSelection case-insensitive

  if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else {
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  }
}

// Function to play the game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game!');
  } else if (playerScore < computerScore) {
    console.log('Oops! You lost the game.');
  } else {
    console.log('It\'s a tie game!');
  }
}

// Start the game
game();
