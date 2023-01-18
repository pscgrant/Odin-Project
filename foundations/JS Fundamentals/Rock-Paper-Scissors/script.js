//  Code for the game

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''



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
    updatedScoreMessage(roundWinner, playerSelection, computerSelection)
};


function gameOver() {
    return playerScore === 5 || computerScore === 5
};


// ----------------------------------------------------------------------------------

// Ui 

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScorePara');
const computerScorePara = document.getElementById('computerScorePara');
const playerPick = document.getElementById('playerPick');
const computerPick = document.getElementById('computerPick');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMessage');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click',() => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function handleClick(playerSelection) {
    if (gameOver()) {
        openEndgameModal()
        return
    };

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (gameOver()) {
        openEndgameModal();
        setFinalMessage();
    }
};

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerPick.textContent = '✊';
            break;
        case 'paper':
            playerPick.textContent = '✋';
            break;
        case 'scissors':
            playerPick.textContent = '✌';
            break;
    };

    switch (computerSelection) {
        case 'rock':
            computerPick.textContent = '✊';
            break;
        case 'paper':
            computerPick.textContent = '✋';
            break;
        case 'scissors':
            computerPick.textContent = '✌';
            break;
    };
};

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!';
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!';
    };


    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;

};



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





