//  Code for the game

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundWinner = ''

game();

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        userInput();
    }
};
console.log(declareWinner());

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
and returning a string that declares the winner 

This new rendition is easier to read and does away with using 
toLocaleLowerCase to just once per parameter with toLowerCase.

Using just one else if instead of multiple else if and if then else inside is much better for someone to understand and faster.

*/

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        roundWinner = 'tie'
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore++
        roundWinner = 'computer'
    } else {
        playerScore++
        roundWinner = 'player'
    }
};


function gameOver() {
    return playerScore === 5 || computerScore === 5
};







/*
This function is for the user to input
*/

function userInput() {
    playerSelection = prompt("Enter your selection of Rock, Paper or Scissors");
      if (
          (playerSelection.toLowerCase() == 'rock') ||
          (playerSelection.toLowerCase() == 'paper') ||
          (playerSelection.toLowerCase() == 'scissors')
      ) {
          console.log(playRound(playerSelection,computerSelection));
      } else {
          alert ("That's not a valid choice");
          userInput();
      }
}



// ----------------------------------------------------------------------------------

// Ui 
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');








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





