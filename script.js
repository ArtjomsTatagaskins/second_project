let computerSelection = getComputerChoice();
let playerSelection = 'scissors';
let playerWins = 0;
let computerWins = 0;
let draw = 0;

function getComputerChoice() {
    let variants = ['Paper', 'Scissors', 'Rock'];
    let choice = variants[Math.floor(Math.random() * variants.length)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionToLower = playerSelection.toLowerCase();
    let result = '';
    let winner = '';

    if (playerSelectionToLower === 'rock' && computerSelection === 'Paper') {
        result = 'You lose! Paper beats Rock';
        computerWins++;
        winner = 'computer';
    }
    if (playerSelectionToLower === 'rock' && computerSelection === 'Scissors') {
        result = 'You win! Rock beats Scissors';
        playerWins++;
        winner = 'player';
    }
    if (playerSelectionToLower === 'paper' && computerSelection === 'Scissors') {
        result = 'You lose! Scissors beats Paper!';
        computerWins++;
        winner = 'computer';
    }
    if (playerSelectionToLower === 'paper' && computerSelection === 'Rock') {
        result = 'You win! Paper beats Rock!';
        playerWins++;
        winner = 'player';
    }
    if (playerSelectionToLower === 'scissors' && computerSelection === 'Paper') {
        result = 'You win! Scissors beats Paper!';
        playerWins++;
        winner = 'player';
    }
    if (playerSelectionToLower === 'scissors' && computerSelection === 'Rock') {
        result = 'You lose! Rock beats Scissors!';
        computerWins++;
        winner = 'computer';
    }
    if (playerSelectionToLower === 'scissors' && computerSelection === 'Scissors') {
        result = 'Draw';
        draw++;
    }
    if (playerSelectionToLower === 'rock' && computerSelection === 'Rock') {
        result = 'Draw';
        draw++;
    }
    if (playerSelectionToLower === 'paper' && computerSelection === 'Paper') {
        result = 'Draw';
        draw++;
    }
    return {result, winner};
}

function game(numberOfRounds) {
    for (let i = 1; i <= numberOfRounds; i++) {
        let computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log('Round ' + i + ': '+ roundResult.result);
    }
}

game(10000);
console.log('Player wins: ' + playerWins);
console.log('Computer wins: ' + computerWins);
console.log('Draws: ' + draw);