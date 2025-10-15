// javascript for rock, paper, scissors game for The Odin Project

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice){
    if (totalRounds == 0) { results.innerHTML = ""; }
    totalRounds++;
    
    if (totalRounds <= maxRounds){
        results.innerHTML += 'Round:  ' + totalRounds + '<br>';
        
        let computerChoice = getComputerChoice();
        results.innerHTML += 'Human choice: ' + humanChoice + '<br>';
        results.innerHTML += 'Computer choice: ' + computerChoice + '<br>';
        
        if (humanChoice == computerChoice) {
            results.innerHTML += "It's a tie. <br>";
        }
        else if ((humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "paper" && computerChoice == "rock")   ||
                (humanChoice == "scissors" && computerChoice == "paper") 
                ) 
        { 
            results.innerHTML += "You WIN! " + humanChoice + " beats " + computerChoice + "<br>";
            humanScore++;
        }
        else { 
            results.innerHTML += "You LOSE. " + computerChoice + " beats " + humanChoice + "<br>";
            computerScore++;
        }   


    } 
    if (totalRounds == maxRounds) {
            //display results after 5 rounds
            if (humanScore == computerScore) {
                results.innerHTML += "It's a TIE overall. <br>";
            } else if (humanScore > computerScore){
                results.innerHTML += "YOU are the overall WINNER!! You won " + humanScore + " of " + maxRounds + "! <br>";
            } else {
                results.innerHTML += "You LOST overall with only " + humanScore + " of " + maxRounds + ". <br> ";
            }
            //clear counts
            totalRounds = 0; 
            humanScore = 0;
            computerScore = 0;
    }
    

}

// play game

let maxRounds = 5;
let totalRounds = 0;
let humanScore = 0;
let computerScore = 0;
let results = document.querySelector("#results");

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock'));

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper'));

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('scissors'));








