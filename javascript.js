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


let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
console.log("You chose:", humanSelection);
const computerSelection = getComputerChoice();
console.log("The computer chose:", computerSelection);


playRound(humanSelection, computerSelection);

console.log("The computer score is:", computerScore);
console.log("Your score is:", humanScore);