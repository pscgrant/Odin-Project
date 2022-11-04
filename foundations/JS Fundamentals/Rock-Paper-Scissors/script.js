let playerScore;
let computerScore;
let playerSelection;
let computerSelection;


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


/* This function will run the game.
Taking two parameters the playerSelection and computerSelection,
and returning a string that declares the winner */

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection().toLowerCase();
    if (computerSelection == playerSelection) {
        alert ("It's a tie!");
        return "Tie game\nCompter Score: " + computerScore + "\nYour Score: " + playerScore;
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        alert ("You lose! " + computerSelection + " beats " + playerSelection);
        return "Computer Score: " + computerScore + "\nYour Score: " + playerScore;
    } else {
        alert ("You win! " + playerSelection + " beats " + computerSelection);
        return "Your Score: " + playerScore + "\nComputer Score: " + computerScore;
    }
}




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



console.log(playRound(playerSelection,computerSelection));

game();

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection,computerSelection);
    }
};