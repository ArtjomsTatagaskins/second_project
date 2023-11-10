let computerWins = 0;
let playerWins = 0;
let draw = 0;
let countRound = 0;

function getComputerChoice() {
    let variants = ['Paper', 'Scissors', 'Rock'];
    let choice = variants[Math.floor(Math.random() * variants.length)];
    return choice;
}


function playRound(playerSelectionToLower, computerSelection) {
    let result = '';
    let winner = '';

    if (playerSelectionToLower === 'rock' && computerSelection === 'Paper') {
        result = 'You lose! Paper beats Rock';
        computerWins++;
        winner = 'computer';
        countRound++;
    }
    if (playerSelectionToLower === 'rock' && computerSelection === 'Scissors') {
        result = 'You win! Rock beats Scissors';
        playerWins++;
        winner = 'player';
        countRound++;
    }
    if (playerSelectionToLower === 'paper' && computerSelection === 'Scissors') {
        result = 'You lose! Scissors beats Paper!';
        computerWins++;
        winner = 'computer';
        countRound++;
    }
    if (playerSelectionToLower === 'paper' && computerSelection === 'Rock') {
        result = 'You win! Paper beats Rock!';
        playerWins++;
        winner = 'player';
        countRound++;
    }
    if (playerSelectionToLower === 'scissors' && computerSelection === 'Paper') {
        result = 'You win! Scissors beats Paper!';
        playerWins++;
        winner = 'player';
        countRound++;
    }
    if (playerSelectionToLower === 'scissors' && computerSelection === 'Rock') {
        result = 'You lose! Rock beats Scissors!';
        computerWins++;
        winner = 'computer';
        countRound++;
    }
    if (playerSelectionToLower === 'scissors' && computerSelection === 'Scissors') {
        result = 'Draw';
        countRound++;
    }
    if (playerSelectionToLower === 'rock' && computerSelection === 'Rock') {
        result = 'Draw';
        countRound++;
    }
    if (playerSelectionToLower === 'paper' && computerSelection === 'Paper') {
        result = 'Draw';
        countRound++;
    }
    return {result, winner, countRound};
}

function game(numberOfRounds) {
    for (let i = 1; i <= numberOfRounds; i++) {
        let computerSelection = getComputerChoice();
        const playerSelection = 'scissors';
        const roundResult = playRound(playerSelection, computerSelection);
        console.log('Round ' + i + ': '+ roundResult.result);
    }
}

const container = document.querySelector('div');

const buttonRock = document.getElementById('btnRock');
buttonRock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
});

const buttonPaper = document.getElementById('btnPaper');
buttonPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
});

const buttonScissors = document.getElementById('btnScissors');
buttonScissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
});

function displayResult(roundResult) {
    const para = document.createElement('p');
    para.textContent = `Round: ${roundResult.countRound}. ${roundResult.result}, Player wins=${playerWins}, Computer wins=${computerWins}`;
    container.appendChild(para);
}
