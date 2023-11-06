let computerSelection = getComputerChoice();
let playerSelection = 'rock';
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let variants = ['Paper', 'Scissors'];
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
        result = 'You win! Rock beats Scissors'
        playerWins++;
        winner = 'player';
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

game(5);
console.log('Player wins: ' + playerWins);
console.log('Computer wins: ' + computerWins);