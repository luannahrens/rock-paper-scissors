Project form The Ordin Project Foundations Course
Assignment: 
For this project, you will create the game Rock Paper Scissors. This game will be played entirely in the console.

CALL playGame
    CALL playRound 
        CALL getComputerChoice will return one of the following string values: “rock”, “paper” or “scissors”.
        CALL getHumanChoice 
        IF human choice and computer choice equal THEN tie
        ELSE IF 
        human choice equals "rock" AND computer choice equals "scissors" OR
        human choice equals "paper" AND comupter choice equals "rock"  OR
        human choice equals "scissors" AND computer choice equals "paper" 
        THEN human wins
        ELSE computer wins
        update scores   
    END playRound
END playGame


