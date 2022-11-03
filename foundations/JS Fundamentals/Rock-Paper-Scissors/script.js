let playerScore = 0;
let computerScore = 0;
roundWinner = ""

/*
This function is for the computer to randomly choose between
rock, paper and scissor. Using a if else statement.
*/
 function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1) {
        return "Rock".toLocaleLowerCase();
    } else if (randomNumber == 2) {
        return "Paper".toLocaleLowerCase();
    } else {
        return "Scissors".toLocaleLowerCase();
    }
};


/* This function will run the game.
Taking two parameters the playerSelection and computerSelection,
and returning a string that declares the winner */

//This is the first attempt at the function creating 

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return "It's a tie!"
//     } else if (playerSelection === "Rock".toLocaleLowerCase()) {
//         if (computerSelection === "Scissors".toLocaleLowerCase()) {
//             return "Rock wins! " + "You beat the computer."
//         } else {
//             return "Paper wins! " + "Sorry the computer beat you."
//         }
//     } else if (playerSelection === "Paper".toLocaleLowerCase()) {
//         if (computerSelection === "Rock".toLocaleLowerCase()) {
//             return "Paper wins! " + "You beat the computer."
//         } else {
//             return "Scissors wins! " + "Sorry the computer beat you."
//         }
//     } else if (playerSelection === "Scissors".toLocaleLowerCase()) {
//         if (computerSelection === "Rock".toLocaleLowerCase()) {
//             return "Rock wins! " + "Sorry the computer beat you."
//         } else {
//             return "Scissors win! " + "You beat the computer."
//         }
//     }
// };

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // roundWinner = "It's a tie!"
        return "It's a tie!"
    } else if (
        (playerSelection === "Rock".toLocaleLowerCase && computerSelection === "Scissors".toLocaleLowerCase) || 
        (playerSelection === "Scissors".toLocaleLowerCase && computerSelection === "Paper".toLocaleLowerCase) ||
        (playerSelection === "Paper".toLocaleLowerCase && computerSelection === "Rock".toLocaleLowerCase)
    ) {
        playerScore++
        // roundWinner = "player"
        return "Player wins!"
    } else if (
        (computerSelection === "Rock".toLocaleLowerCase && playerSelection === "Scissors".toLocaleLowerCase) ||
        (computerSelection === "Scissors".toLocaleLowerCase && playerSelection === "Paper".toLocaleLowerCase) ||
        (computerSelection === "Paper".toLocaleLowerCase && playerSelection === "Rock".toLocaleLowerCase)
    ) {
        computerScore++
        // roundWinner = "computer"
        return "Computer wins!"
    }
}

const playerSelection = prompt("Enter your selection of Rock, Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerSelection,computerSelection);
//     }
// };