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
Taking two parameters the playerSelection and computerSelction,
and returning a string that declares the winner */

function playRound(playerSelection, computerSelction) {
    
}