// Basic game logic works. 
// Need to: 
// 1. make input case insensitive - easiest solution to convert all input to lowerCase?
// 2. add a win/loss/tie counter - define variables and increment by 1 depending on result
// 3. create loop for best of 5 - for/while?


// Constants and variables
let wins = 0
let losses = 0
let ties = 0
const choices = ["Rock", "Paper", "Scissors"]
const random = Math.floor(Math.random() * choices.length)
let computerChoice = choices[random];
let playerChoice = prompt("Choose your weapon!")


// Game logic

function game(playerChoice, computerChoice) {    
    if(computerChoice === playerChoice) {
        return `You both chose ${playerChoice}! It's a tie.`;
    } else if(playerChoice === "Rock" && computerChoice === "Scissors") {
        return `You win! The computer chose ${computerChoice}.`;
    } else if(playerChoice === "Paper" && computerChoice === "Rock") {
        return `You win! The computer chose ${computerChoice}.`;
    } else if(playerChoice === "Scissors" && computerChoice === "Paper") {
        return `You win! The computer chose ${computerChoice}.`;
    } else return `You lose! The computer chose ${computerChoice}.`;
}

console.log(game(playerChoice, computerChoice));



