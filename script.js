let computerSelection = getComputerChoice();
let playerSelection = 'rock';

function getComputerChoice() {
    let variants = ['Rock', 'Paper', 'Scissors'];
    let choice = variants[Math.floor(Math.random() * variants.length)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionToLower = playerSelection.toLowerCase();
    if (playerSelectionToLower === 'rock' && computerSelection === 'Paper') {
        let result = 'You lose! Paper beats Rock';
        return result;
    }
}

console.log(playRound(playerSelection, getComputerChoice()));