// Basic game logic works. 
// Need to: 
// 1. increment wins/loosess/ties in game()
// 2. def variable and return winner in gameRound()
// 3. 


// Constants and variables
let wins = 0;
let losses = 0;
let ties = 0;
let result;
let computerSelection = computerChoice();
let playerSelection = playerChoice();


function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playerChoice() {
    return prompt("Choose your weapon!").toLowerCase();
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
    if (ties > wins && losses) {
        alert("You've tied");
    } else if (wins > ties && losses) {
        alert("You've won!");
    } else alert("You've lost!");
}

// Game function
function game() {
    for (let round = 0; round < 5; round++) {
        let playerChoice = prompt("Choose your weapon!").toLowerCase();
        computerChoice(choices);
        result = gameRound(playerChoice, computerChoice);
        scoreCounter(result);
        if (round == 5) {
            gameResult();
        }
    }
}







