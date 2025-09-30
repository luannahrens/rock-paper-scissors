// javascript for rock, paper, scissors game for The Odin Project

const human = "HUMAN";
const computer = "COMPUTER";




function getHumanChoice (){
    let choice = prompt("rock, paper, or scissors");
    //console.log("Human choice: " + choice.toLowerCase());
    return choice.toLowerCase();   
}

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice){
    
    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    
    if (humanChoice == computerChoice) {
        console.log("It's a tie.");
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || 
             (humanChoice == "paper" && computerChoice == "rock")   ||
             (humanChoice == "scissors" && computerChoice == "paper") 
            ) 
    { 
        console.log ("You WIN! " + humanChoice + " beats " + computerChoice);
        return human;
    }
    else { 
        console.log ("You LOSE. " + computerChoice + " beats " + humanChoice);
        return computer;
    }

}

function playGame(rounds){
    
    let totalRounds = rounds;
    let humanScore = 0;
    let computerScore = 0;

    //determine winner
    let roundWinner = "";

    while (rounds > 0) {
        roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if ( roundWinner == human ) {
            humanScore ++; 
        } else {
            computerScore ++;
        }
        rounds--;
    }
    
    //code to determine overall winner here
    if (humanScore == computerScore) {
        console.log ("It's a tie overall.")
    } else if (humanScore > computerScore){
        console.log ("YOU are the overall WINNER!! You won " + humanScore + " of " + totalRounds + "!");
    } else {
        console.log("You LOST overall with only " + humanScore + " of " + totalRounds + ".");
    }
    

}

let number = 5;
playGame(number); //argument is # of rounds
//playRound(getHumanChoice(), getComputerChoice());







