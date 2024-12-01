function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3); //generates random number
        if (randomNumber === 0) return "rock";
        if ( randomNumber === 1) return "paper";
        return "scissors";
        
    }

    function getHumanChoice() {
        let choice = prompt("Choose rock, paper, or scissors").toLowerCase(); //prompt window asking for user input

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return choice;
        } else {
            alert("Invalid choice, choose only rock, paper or scissors");
            return getHumanChoice(); //Retry until valid entry
        }
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) { // check for tie
            alert('It\'s a TIE!');
            alert(`You both chose ${humanChoice}`);
            return "tie";
        }
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
            return "human";
        } 
        else {
            alert(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            return "computer";
            
        }
        
    }

    // main game logic: loop through 5 times
    for (let round = 1; round <= 5; round++) {
        
        alert(`Round: ${round}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        alert(`Score after round ${round}:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        alert(`You win the game! Final score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`Computer wins the game! Final score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    } else {
        alert(`The game is a tie! Final score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
}

//start the game
playGame();