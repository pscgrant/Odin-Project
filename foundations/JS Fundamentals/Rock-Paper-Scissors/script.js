/*
This function is for the computer to randomly choose between
rock, paper and scissor. Using a if else statement.
*/
 function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
};


/* This function will run the game.
Taking two parameters the playerSelection and computerSelection,
and returning a string that declares the winner */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "Rock wins! " + "You beat the computer."
        } else {
            return "Paper wins! " + "Sorry the computer beat you."
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "Paper wins! " + "You beat the computer."
        } else {
            return "Scissors wins! " + "Sorry the computer beat you."
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "Rock wins! " + "Sorry the computer beat you."
        } else {
            return "Scissors win! " + "You beat the computer."
        }
    }
}

const playerSelection = prompt("Enter your selection of Rock, Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection,computerSelection);
    }
}