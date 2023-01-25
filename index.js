// Constants and variables
let wins = 0;
let losses = 0;
let ties = 0;
let round = 0;
const choices = ["rock", "paper", "scissors"];

// Functions for player and computer choices
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function playerChoice() {
    let userInput = prompt("Choose you weapon!")
    if(choices.includes(userInput)) {
        return userInput.toLowerCase();
    } else if (userInput == null) {
        playerChoice();
    } else  {
        playerChoice();
    }
}

// Game round
function gameRound(playerSelection, computerSelection) {   
    if(playerSelection === computerSelection) {
        alert("It's a tie!");
        return 'Tie';
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win!");
        return 'Victory';
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        alert("You win!");
        return 'Victory';
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win!");
        return 'Victory';
    } else 
        alert("You lose!");
        return 'Defeat';
}

// Score counter
function scoreCounter(result) {
    switch (result) {
        case 'Tie':
            ties++;
            break;
        case 'Victory':
            wins++;
            break;
        case 'Defeat':
            losses++;
            break;        
    }
}

// Game result
function gameResult() {
    if (ties > wins && ties > losses) {
        alert("You've tied");
    } else if (wins > ties && wins > losses) {
        alert("You've won!");
    } else alert("You've lost!");
}

// Game
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerChoice();
        let playerSelection = playerChoice();
        result = gameRound(playerSelection, computerSelection);
        scoreCounter(result);
        round++
        if (round == 5) {
            gameResult();
        }
    }
}