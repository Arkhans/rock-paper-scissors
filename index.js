// Constants and variables
let wins = 0;
let losses = 0;
let ties = 0;
let round = 0;
let result;
const choices = ["rock", "paper", "scissors"];

// Function computer choice
let computerSelection = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function player choice
let playerSelection = "";

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener("click", ()=> {
    playerSelection = "rock";
    countScore(playRound(playerSelection, computerSelection()));
    giveResult();
});
paper.addEventListener("click", ()=> {
    playerSelection = "paper";
    countScore(playRound(playerSelection, computerSelection()));
    giveResult();
});
scissors.addEventListener("click", ()=> {
    playerSelection = "scissors";
    countScore(playRound(playerSelection, computerSelection()));
    giveResult();
});

// Game round
let screen = document.querySelector(".screen");
let roundCounter = document.querySelector(".round-counter");
roundCounter.textContent = "Round: " + round;

function playRound(playerSelection, computerSelection) {
    round++;  
    if(playerSelection === computerSelection) {
        screen.textContent = "It's a tie!";
        return 'Tie';
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        screen.textContent = "You win!";
        return 'Victory';
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        screen.textContent = "You win!";
        return 'Victory';
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        screen.textContent = "You win!";
        return 'Victory';
    } else {
        screen.textContent = "You lose!";
        return 'Defeat';
    }
}

// Score counter
let winsCounter = document.querySelector(".wins-counter");
let tiesCounter = document.querySelector(".ties-counter");
let lossesCounter = document.querySelector(".losses-counter");

function countScore(result) {
    switch (result) {
        case 'Tie':
            ties++;
            tiesCounter.textContent = "T: " + ties;
            break;
        case 'Victory':
            wins++;
            winsCounter.textContent = "W: " + wins;
            break;
        case 'Defeat':
            losses++;
            lossesCounter.textContent = "L: " + losses;
            break;        
    }
}

// Game result
let resultScreen = document.querySelector(".result-screen");
function giveResult() {
    if (round === 5) {
        
        if (ties > wins && ties > losses) {
            resultScreen.textContent = "You've tied."
        } else if (wins > ties && wins > losses) {
            resultScreen.textContent = "You've won."
        } else resultScreen.textContent = "You've lost."
    }
}

// Start game function
// let startGame = document.querySelector(".start-game");
// startGame.addEventListener("click", startGame);

// function startGame() {

// }