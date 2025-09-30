console.log ("Hello from script file");

let humanScore = 0;
let computerScore = 0;



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
        humanScore ++; 
    }
    else { 
        console.log ("You LOSE. " + computerChoice + " beats " + humanChoice);
        computerScore ++; 
    }

}

playRound(getHumanChoice(), getComputerChoice());







