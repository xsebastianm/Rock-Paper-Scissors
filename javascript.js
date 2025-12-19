alert("Hi babe you're about to play Rock, papper, scissors! It will be 5 rounds! GO!!");
let humanScore = 0;
let computerScore = 0;

function playGame(playRound) {

function getHumanChoice() {
    let choice = prompt("rock, paper , scissors!");
    return choice.trim().toLowerCase();
}

function getComputerChoice(){
 number = Math.floor(Math.random()*3)+1;
  if (  number === 1 ) {
    return "rock";
  }
  if ( number === 2) {
    return "paper";
  }
  if ( number === 3) {
    return "scissors";
  }
}


const humanSelection = getHumanChoice();
console.log("You chose:", humanSelection);
const computerSelection = getComputerChoice();
console.log("The computer chose:", computerSelection); 


playRound(humanSelection, computerSelection);

  function playRound(getHumanChoice, getComputerChoice) {
  if ( getHumanChoice === "rock" &&  getComputerChoice === "paper") {
    console.log( "You lose! paper beats rock!");
    computerScore++;
  
  } else if ( getHumanChoice === "rock" &&  getComputerChoice === "scissors") {
    console.log(  "You win! rock beats scissors!");
    humanScore++;

  } else if ( getHumanChoice === "paper" &&  getComputerChoice === "rock") {
    console.log(  "You win! paper beats rock!");
    humanScore++;
  
  } else if ( getHumanChoice === "paper" &&  getComputerChoice === "scissors") {
    console.log(  "You lose! scissors beats paper!");
    computerScore++;

  } else if ( getHumanChoice === "scissors" &&  getComputerChoice === "rock") {
    console.log(  "You lose! rock beats scissors!");
    computerScore++;
  
  } else if ( getHumanChoice === "scissors" &&  getComputerChoice === "paper") {
    console.log(  "You win! scissors beats paper!");
    humanScore++;
    
  } else if (getHumanChoice === getComputerChoice) {
   console.log("It's a tie!")
  }
}
}


for (let i = 0; i < 5; i++) {
  playGame();
  console.log(`Your score:`, humanScore);
  console.log(`Computer score:`, computerScore);
}

winner();

function winner() {
    if (humanScore > computerScore) {
        console.log("YASS YOU ARE THE WINNER, MOTHERRRR");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE! Girl , the computer ate you!!");
    } else if (humanScore === computerScore) {
        console.log("WTF it's a tie!!");
    }
}
